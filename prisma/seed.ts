import { PrismaClient } from "@prisma/client";

import { players, rounds, scores, seasons } from "../app/lib/mockLeague";

const prisma = new PrismaClient();

const toDate = (value: string | Date | null | undefined) =>
  value ? new Date(value) : null;

async function main() {
  for (const season of seasons) {
    await prisma.season.upsert({
      where: { id: season.id },
      create: {
        id: season.id,
        name: season.name,
        startDate: toDate(season.startDate),
        endDate: toDate(season.endDate),
      },
      update: {
        name: season.name,
        startDate: toDate(season.startDate),
        endDate: toDate(season.endDate),
      },
    });
  }

  for (const player of players) {
    await prisma.player.upsert({
      where: { id: player.id },
      create: {
        id: player.id,
        name: player.name,
        email: player.email ?? null,
        handicapIndex: player.handicapIndex ?? null,
      },
      update: {
        name: player.name,
        email: player.email ?? null,
        handicapIndex: player.handicapIndex ?? null,
      },
    });
  }

  for (const season of seasons) {
    for (const player of players) {
      await prisma.seasonPlayer.upsert({
        where: {
          seasonId_playerId: {
            seasonId: season.id,
            playerId: player.id,
          },
        },
        create: {
          seasonId: season.id,
          playerId: player.id,
        },
        update: {},
      });
    }
  }

  for (const round of rounds) {
    await prisma.round.upsert({
      where: { id: round.id },
      create: {
        id: round.id,
        seasonId: round.seasonId,
        week: round.week,
        date: new Date(round.date),
      },
      update: {
        seasonId: round.seasonId,
        week: round.week,
        date: new Date(round.date),
      },
    });
  }

  await prisma.score.deleteMany({
    where: { roundId: { in: rounds.map((round) => round.id) } },
  });

  await prisma.score.createMany({
    data: scores.map((score) => ({
      id: score.id,
      roundId: score.roundId,
      playerId: score.playerId,
      gross: score.gross,
      net: score.net ?? null,
    })),
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
