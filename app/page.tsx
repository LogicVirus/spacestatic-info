const buildPoints = [
  "Custom agent roles and service packages",
  "Skill and personality intake for clients",
  "Structured onboarding for future agent builds",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f5f0] px-6 py-10 text-[#111111] sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col justify-between gap-10 rounded-[2rem] border border-black/8 bg-white px-6 py-8 shadow-[0_20px_80px_rgba(17,17,17,0.06)] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6b6b66]">
              SpaceStatic.info
            </p>
            <h1 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              A focused second app for custom agents.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#5a5a56] sm:text-lg">
              This site is being set up as the dedicated home for SpaceStatic agent offers,
              structured intake, and future build workflows, while spacestatic.com stays focused
              on the main business site.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {buildPoints.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-black/8 bg-[#faf9f6] p-5 text-sm leading-6 text-[#3f3f3c]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/8 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#111111]">Starter repo is live.</p>
            <p className="mt-1 text-sm leading-6 text-[#5a5a56]">
              Next step is connecting this repo to Vercel and replacing the current Beehiiv root.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#111111] px-5 text-sm font-medium text-white transition hover:opacity-90"
              href="https://spacestatic.com"
            >
              Keep spacestatic.com separate
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium text-[#111111] transition hover:bg-black/[0.03]"
              href="mailto:josh_perry@spacestatic.com?subject=SpaceStatic.info%20build"
            >
              Add build notes
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
