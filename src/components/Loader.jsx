/**
 * Shown while the technology JSON is being fetched. With a local file this
 * resolves in a few milliseconds, but the state still exists and renders
 * correctly if the fetch is ever pointed at a slower, real endpoint.
 */
export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[320px] flex-col items-center justify-center gap-4"
    >
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
      <p className="text-sm font-medium text-slate-500">
        Loading technologies…
      </p>
    </div>
  );
}