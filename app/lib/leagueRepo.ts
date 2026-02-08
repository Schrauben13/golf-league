import { prisma } from "./prisma";

export type StandingRow = {
  playerId: string;
  playerName: string;
  roundsPlayed: number;
  totalGross: number;
  totalNet: number | null;
};

export async function getPlayers() {
  return prisma.player.findMany({
    orderBy: { name: "asc" },
  });
}

export async function getPlayerById(id: string) {
  return prisma.player.findUnique({
    where: { id },
  });
}

export async function getRounds() {
  return prisma.round.findMany({
    orderBy: { date: "asc" },
  });
}

export async function getRoundById(id: string) {
  return prisma.round.findUnique({
    where: { id },
  });
}

export async function getScoresForRound(roundId: string) {
  return prisma.score.findMany({
    where: { roundId },
    include: {
      player: {
        select: { id: true, name: true },
      },
    },
  });
}

export async function getRecentScoresForPlayer(playerId: string, limit: number) {
  return prisma.score.findMany({
    where: { playerId },
    include: {
      round: {
        select: { id: true, week: true, date: true },
      },
    },
    orderBy: {
      round: { date: "desc" },
    },
    take: limit,
  });
}

export async function getStandingsForSeason(
  seasonId: string
): Promise<StandingRow[]> {
  const seasonPlayers = await prisma.seasonPlayer.findMany({
    where: { seasonId },
    include: {
      player: {
        select: { id: true, name: true },
      },
    },
  });

  const scores = await prisma.score.findMany({
    where: {
      round: { seasonId },
    },
    select: {
      playerId: true,
      gross: true,
      net: true,
    },
  });

  const totals = new Map<
    string,
    { gross: number; netSum: number; netCount: number; rounds: number }
  >();

  for (const seasonPlayer of seasonPlayers) {
    totals.set(seasonPlayer.playerId, {
      gross: 0,
      netSum: 0,
      netCount: 0,
      rounds: 0,
    });
  }

  for (const score of scores) {
    const current = totals.get(score.playerId) ?? {
      gross: 0,
      netSum: 0,
      netCount: 0,
      rounds: 0,
    };
    current.gross += score.gross;
    current.rounds += 1;
    if (score.net !== null) {
      current.netSum += score.net;
      current.netCount += 1;
    }
    totals.set(score.playerId, current);
  }

  return seasonPlayers.map((seasonPlayer) => {
    const current = totals.get(seasonPlayer.playerId) ?? {
      gross: 0,
      netSum: 0,
      netCount: 0,
      rounds: 0,
    };
    return {
      playerId: seasonPlayer.playerId,
      playerName: seasonPlayer.player.name,
      roundsPlayed: current.rounds,
      totalGross: current.gross,
      totalNet: current.netCount > 0 ? current.netSum : null,
    };
  });
}
