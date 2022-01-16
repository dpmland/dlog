<div align="center">
  <img src="https://avatars.githubusercontent.com/u/97813425" alt="Dpm Logo" width="100">
  <h1>Dpm Land - Dlog</h1>
  <h5>A simple logger for deno!</h5>
  <hr>

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/duxtland/framework/Ci?label=Ci&logo=github)](./.github/workflows/ci.yml)
[![GitHub license](https://img.shields.io/github/license/duxtland/framework?label=License)](./LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/duxtland/framework?include_prereleases&label=Release)](https://github.com/dpmland/dlog/releases)
[![Codecov](https://img.shields.io/codecov/c/gh/duxtland/framework?label=Coverage&token=77LFURV7PT)](https://codecov.io/gh/dpmland/dlog)
[![Discord](https://img.shields.io/discord/906542387046805508?label=Discord&logo=discord&logoColor=white)](https://discord.gg/Um27YPJKud)
![Lines of code](https://img.shields.io/tokei/lines/github/dpmland/dlog?label=Lines)

</div>

## Description :sauropod:

This is a simple logger based on
[glogger](https://github.com/grian32/glogger) repository and improve some
features

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
