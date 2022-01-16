<div align="center">
  <img src="https://avatars.githubusercontent.com/u/97813425" alt="Dpm Logo" width="100">
  <h1>Dpm Land - Dlog</h1>
  <h5>A simple logger for deno!</h5>
  <hr>

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dpmland/dlog/CI%20Formatting%20and%20Testslabel=Ci&logo=github)](./.github/workflows/ci.yml)
[![GitHub license](https://img.shields.io/github/license/dpmland/dlog?label=License)](./LICENSE)
[![Discord](https://img.shields.io/discord/932381618851692565?label=Discord&logo=discord&logoColor=white)](https://discord.gg/Um27YPJKud)
![Lines of code](https://img.shields.io/tokei/lines/github/dpmland/dlog?label=Lines)
[![Last Commit](https://img.shields.io/github/last-commit/dpmland/dlog)](https://github.com/dpmland/dlog)

</div>

## Description :sauropod:

This is a simple logger based on [glogger](https://github.com/grian32/glogger) repository
and improve some features

## Usage :computer:

Basic logging out:

```ts
import { Dlog } from 'https://deno.land/dlog@1.2/mod.ts';

const logger = new Dlog('Test Dlog');

logger.info('helloooo from info');
logger.warn('helloooo from warn');
logger.error('helloooo from error');
logger.debug('helloooo from debug');
```

File log support

```ts
import GLogger from '../mod.ts';

const logger = new Dlog('Test Dlog', true, './test');

logger.info('helloooooo');
```

---

Made with :heart: in :earth_americas:
