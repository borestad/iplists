# cron-boilerplate

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/borestad/cron-boilerplate/ci.yml?style=for-the-badge)
![GitHub Workflow Status](https://counterapi.com/counter.svg?ns=codeit.se&action=view&key=cronboilerplate&style=big&startNumber=1&color=blue)
![GitHub repo size](https://img.shields.io/github/repo-size/borestad/cron-boilerplate?style=for-the-badge)
[![Visitors](https://api.visitorbadge.io/api/combined?path=http://github.com/borestad/cron-boilerplate&label=HITS&countColor=%23007EC5)](https://visitorbadge.io/status?path=https://github.com/borestad/cron-boilerplate)
![LICENSE](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

**cron-boilerplate**

Goals:

- Cron Job oriented
- Preconfigured - use Bash or [Deno](https://deno.land/) with
  [Dax](https://github.com/dsherret/dax)
- Fastest installation possible
- Multithreaded & parallellism by default
- Cache + TTL support (reusable between ci runs)
- Optimized: one shot jobs (checkout + cache + install + run) should run ~ 5
  seconds.
- Rely on static binaries instead of expensive apt-get.
- Super productive & fast boilerplate environment
- Stats & useful debugging included
