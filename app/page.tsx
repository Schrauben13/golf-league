export default function Home() {
  return (
    <section className="space-y-3">
      <h1
        className="text-3xl font-semibold"
        style={{ color: "var(--augusta-green)" }}
      >
        Dashboard
      </h1>
      <p className="text-base text-zinc-700">
        Welcome to the golf league manager. Use the navigation to manage
        players, enter rounds, and review standings.
      </p>
      <div
        className="rounded-lg border bg-white p-5 text-sm text-zinc-700"
        style={{ borderColor: "var(--augusta-gold)" }}
      >
        Dashboard widgets and summaries will live here.
      </div>
    </section>
  );
}
