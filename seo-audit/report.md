# BeyondSEO crawl report

Seed: http://localhost:4321/

Attempted 1 URLs; extracted 0 unique HTML documents; 0 URLs remain queued; 1 fetch/HTTP errors.

This is the discovered, scoped sample. It cannot establish that all site URLs were found. Canonical/robots observations do not prove indexing.

Some requests were withheld by robots policy. Inspect policy evidence before calling this a server block.

Stop reasons: discovered_frontier_exhausted

Fetch elapsed time includes waits/retries and transfer. It is not TTFB or Core Web Vitals.

## Findings

| Severity | Finding | URL | Evidence | Action |
|---|---|---|---|---|
| high | fetch_failed | http://localhost:4321/ | robots_unavailable | Inspect the recorded failure and retry after resolving the cause. |

## Evidence files

pages.jsonl contains extraction, headers, timestamps and hashes. pages.csv is the page inventory; links.csv records observed edges and check status. robots.json, sitemaps.json, frontier.csv and crawl.sqlite3 preserve scope and recovery evidence.

## Not measured

search rankings, search volume, organic traffic, conversions, complete inbound backlink profile, Google-selected canonical, actual indexing, Core Web Vitals, structured-data semantic validity.
