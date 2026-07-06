export default async function GatePage({
    searchParams,
  }: {
    searchParams: Promise<{ next?: string; error?: string }>;
  }) {
    const { next = "/", error } = await searchParams;
  
    return (
      <main className="mx-auto max-w-sm px-6 py-24">
        <h1 className="text-xl font-semibold mb-2">This one's still in progress</h1>
        <p className="text-sm text-gray-500 mb-6">
          Password protected until it's ready to share publicly.
        </p>
  
        <form action="/api/gate" method="POST" className="space-y-3">
          <input type="hidden" name="next" value={next} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoFocus
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white rounded px-3 py-2 text-sm"
          >
            Enter
          </button>
          {error && <p className="text-sm text-red-500">Wrong password, try again.</p>}
        </form>
      </main>
    );
  }