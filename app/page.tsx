export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5f0] px-6 py-10 text-[#111111]">
      <div className="w-full max-w-3xl rounded-[2rem] border border-black/8 bg-white px-8 py-16 text-center shadow-[0_20px_80px_rgba(17,17,17,0.06)] sm:px-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6b6b66]">
          SpaceStatic.info
        </p>
        <h1 className="mt-6 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
          Hello world.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5a5a56] sm:text-lg">
          This site is live and ready for the next build.
        </p>
      </div>
    </main>
  )
}
