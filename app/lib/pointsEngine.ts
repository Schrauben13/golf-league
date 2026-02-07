import { players, rounds, scores, seasons } from "./mockLeague";

export const pointsConfig = {
  placementPoints: [10, 8, 6, 4, 2],
  participationPoints: 1,
  useNet: true,
};

type RoundResultRow = {
  playerId: string;
  gross: number;
  net: number | null;
  scoreForRanking: number;
};

type RoundPointsRow = {
  playerId: string;
  points: number;
  place: number;
};

type SeasonStandingRow = {
  playerId: string;
  pointsTotal: number;
  roundsPlayed: number;
  wins: number;
  totalNet: number | null;
  totalGross: number;
  lastRoundNet: number | null;
};

export function getRoundResults(roundId: string): RoundResultRow[] {
  const roundScores = scores.filter((score) => score.roundId === roundId);

  const results = roundScores.map((score) => {
    const scoreForRanking = pointsConfig.useNet
      ? score.net ?? score.gross
      : score.gross;

    return {
      playerId: score.playerId,
      gross: score.gross,
      net: score.net ?? null,
      scoreForRanking,
    };
  });

  results.sort((a, b) => a.scoreForRanking - b.scoreForRanking);
  return results;
}

export function calculateRoundPoints(roundId: string): RoundPointsRow[] {
  const results = getRoundResults(roundId);
  if (!results.length) {
    return [];
  }

  const pointsMap = new Map<string, RoundPointsRow>();
  let index = 0;

  while (index < results.length) {
    const currentScore = results[index].scoreForRanking;
    let tieEnd = index;

    while (
      tieEnd + 1 < results.length &&
      results[tieEnd + 1].scoreForRanking === currentScore
    ) {
      tieEnd += 1;
    }

    const pointsForPlaces = [];
    for (let placeIndex = index; placeIndex <= tieEnd; placeIndex += 1) {
      pointsForPlaces.push(pointsConfig.placementPoints[placeIndex] ?? 0);
    }

    const averagePlacementPoints =
      pointsForPlaces.reduce((sum, value) => sum + value, 0) /
      pointsForPlaces.length;

    for (let i = index; i <= tieEnd; i += 1) {
      const entry = results[i];
      const points = averagePlacementPoints + pointsConfig.participationPoints;
      pointsMap.set(entry.playerId, {
        playerId: entry.playerId,
        points,
        place: index + 1,
      });
    }

    index = tieEnd + 1;
  }

  return results.map((entry) => pointsMap.get(entry.playerId)!);
}

export function calculateSeasonStandings(seasonId: string): SeasonStandingRow[] {
  const season = seasons.find((entry) => entry.id === seasonId);
  if (!season) {
    return [];
  }

  const seasonRounds = rounds
    .filter((round) => round.seasonId === season.id)
    .sort((a, b) => a.date.localeCompare(b.date));

  const roundPointsByRound = seasonRounds.map((round) =>
    calculateRoundPoints(round.id)
  );

  return players.map((player) => {
    const playerScores = scores.filter(
      (score) =>
        score.playerId === player.id &&
        seasonRounds.some((round) => round.id === score.roundId)
    );

    const roundsPlayed = playerScores.length;
    const totalGross = playerScores.reduce((sum, score) => sum + score.gross, 0);
    const totalNetScores = playerScores
      .map((score) => score.net)
      .filter((net) => net !== null && net !== undefined) as number[];
    const totalNet = totalNetScores.length
      ? totalNetScores.reduce((sum, net) => sum + net, 0)
      : null;

    const lastRound = seasonRounds[seasonRounds.length - 1];
    const lastRoundScore = playerScores.find(
      (score) => score.roundId === lastRound?.id
    );
    const lastRoundNet = lastRoundScore?.net ?? null;

    const playerRoundPoints = roundPointsByRound
      .flat()
      .filter((entry) => entry.playerId === player.id);

    const pointsTotal = playerRoundPoints.reduce(
      (sum, entry) => sum + entry.points,
      0
    );

    const wins = playerRoundPoints.filter((entry) => entry.place === 1).length;

    return {
      playerId: player.id,
      pointsTotal,
      roundsPlayed,
      wins,
      totalNet,
      totalGross,
      lastRoundNet,
    };
  });
}
