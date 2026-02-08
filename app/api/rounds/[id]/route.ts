import { getRoundById, getScoresForRound } from "@/app/lib/leagueRepo";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: RouteParams) {
  const round = await getRoundById(params.id);

  if (!round) {
    return Response.json({ error: "Round not found" }, { status: 404 });
  }

  const scores = await getScoresForRound(round.id);

  return Response.json({
    round: {
      id: round.id,
      week: round.week,
      date: round.date.toISOString(),
      seasonId: round.seasonId,
    },
    scores: scores.map((score) => ({
      id: score.id,
      gross: score.gross,
      net: score.net,
      player: {
        id: score.player.id,
        name: score.player.name,
      },
    })),
  });
}
