/**
 * Liveness for the deploy: answers `ok <commit>` once the server is bound.
 * The commit is what lets the deploy script tell this build from a stale
 * process that still answers on the port. Never cached — a proxy handing back
 * yesterday's answer would defeat the point.
 */
export function GET() {
  return new Response(`ok ${__COMMIT__}`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
}
