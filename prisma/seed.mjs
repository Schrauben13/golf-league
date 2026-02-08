import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

import { seasons, players, rounds, scores } from "../app/lib/mockLeague.ts";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const season = seasons[0];

  // Season
  await prisma.season.upsert({
    where: { id: season.id },
    update: {
      name: season.name,
      startDate: season.startDate ? new Date(season.startDate) : null,
      endDate: season.endDate ? new Date(season.endDate) : null,
    },
    create: {
      id: season.id,
      name: season.name,
      startDate: season.startDate ? new Date(season.startDate) : null,
      endDate: season.endDate ? new Date(season.endDate) : null,
    },
  });

  // Players + SeasonPlayer
  for (const p of players) {
    await prisma.player.upsert({
      where: { id: p.id },
      update: {
        name: p.name,
        email: p.email ?? null,
        handicapIndex: p.handicapIndex ?? null,
      },
      create: {
        id: p.id,
        name: p.name,
        email: p.email ?? null,
        handicapIndex: p.handicapIndex ?? null,
      },
    });

    await prisma.seasonPlayer.upsert({
      where: {
        seasonId_playerId: {
          seasonId: season.id,
          playerId: p.id,
        },
      },
      update: {},
      create: {
        seasonId: season.id,
        playerId: p.id,
      },
    });
  }

  // Rounds
  for (const r of rounds) {
    await prisma.round.upsert({
      where: { id: r.id },
      update: {
        seasonId: r.seasonId,
        week: r.week,
        date: new Date(r.date),
      },
      create: {
        id: r.id,
        seasonId: r.seasonId,
        week: r.week,
        date: new Date(r.date),
      },
    });
  }

  // Scores (reset + insert)
  await prisma.score.deleteMany({});
  await prisma.score.createMany({
    data: scores.map((s) => ({
      id: s.id,
      roundId: s.roundId,
      playerId: s.playerId,
      gross: s.gross,
      net: s.net ?? null,
    })),
  });

  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
