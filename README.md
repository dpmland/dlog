<img src="https://avatars.githubusercontent.com/u/97813425" align="right" alt="Dpm Logo" width="100">

## Dpm - Dlog :sauropod:

[![Discord](https://img.shields.io/discord/932381618851692565?label=Discord&logo=discord&logoColor=white)](https://discord.gg/Um27YPJKud)
[![Twitter](https://img.shields.io/twitter/follow/dpm_land?label=Dpm%20Land&style=social)](https://twitter.com/intent/follow?screen_name=dpm_land)
[![GitHub license](https://img.shields.io/github/license/dpmland/dlog?label=License)](./LICENSE)
![Github Workflow](https://img.shields.io/github/workflow/status/dpmland/dlog/CI)

This is a simple logger based on [glogger](https://github.com/grian32/glogger) repository
and improve some features

## Usage :computer:

Basic logging out:

```ts
import { Dlog } from 'https://deno.land/x/dlog2@2.0/classic.ts'; // Classic version with the classic out!
import { Dlog } from 'https://deno.land/x/dlog2@2.0/mini.ts'; // Mini version the same features of classic but with a minimalist out!

const logger = new Dlog('Test Dlog');

logger.info('helloooo from info');
logger.warn('helloooo from warn');
logger.error('helloooo from error');
logger.debug('helloooo from debug');
```

File log support

```ts
import { Dlog } from 'https://deno.land/x/dlog2@2.0/classic.ts'; // Classic version with the classic out!
import { Dlog } from 'https://deno.land/x/dlog2@2.0/mini.ts'; // Mini version the same features of classic but with a minimalist out!

const logger = new Dlog('Test Dlog', true, './test');

logger.info('helloooooo');
```

---

Made with :heart: in :earth_americas:
