/**
 * Copyright © 2022 Dpm Land. All Rights Reserved.
 */

import { colors, ensureDirSync, format, join } from './deps.ts';

/**
 * @description The constructor for the dlog module
 * @param {string} app_name - The application name for the logger output
 * @param {boolean} logToFile - Write a log file DEFAULT: true
 * @param {string} logFolder - The folder name to create and log
 */
export default class Dlog {
  private _app = '';
  private _logToFile: boolean;
  private _logFolder: string;
  private _date: string;

  constructor(
    app_name: string,
    logToFile: boolean = false,
    logFolder: string = 'logs',
  ) {
    this._app = app_name;
    this._logToFile = logToFile;
    this._logFolder = logFolder;
    this._date = format(new Date(), 'yyyy|MM|dd');
  }
  /**
   * @description Log with the info level
   * @param {string} message - The message to log
   */
  info(message: string): void {
    const noColorMsg = `[${
      format(new Date(), 'yyyy/MM/dd h:mm:ss a')
    }] [${this._app}] [INFO] ${message}`;
    console.log(
      `${colors.italic(colors.green(`${this._app.toUpperCase()} ->`))} ${
        colors.blue('[  INFO ]:')
      } ${message}`,
    );
    if (this._logToFile) {
      this.writeToFile(noColorMsg);
    }
  }
  /**
   * @description Log with the debug level
   * @param {string} message - The message to log
   */
  debug(message: string): void {
    const noColorMsg = `[${
      format(new Date(), 'yyyy/MM/dd h:mm:ss a')
    }] [${this._app}] [DEBUG] ${message}`;
    console.log(
      `${colors.italic(colors.green(`${this._app.toUpperCase()} ->`))} ${
        colors.magenta('[  DEBUG ]:')
      } ${message}`,
    );
    if (this._logToFile) {
      this.writeToFile(noColorMsg);
    }
  }

  /**
   * @description Log with the warn level
   * @param {string} message - The message to log
   */
  warn(message: string): void {
    const noColorMsg = `[${
      format(new Date(), 'yyyy/MM/dd h:mm:ss a')
    }] [${this._app}] [WARN] ${message}`;
    console.log(
      `${colors.italic(colors.green(`${this._app.toUpperCase()} ->`))} ${
        colors.brightYellow('[  WARN ]:')
      } ${message}`,
    );
    if (this._logToFile) {
      this.writeToFile(noColorMsg);
    }
  }

  /**
   * @description Log with the error level
   * @param {string} message - The message to log
   */

  error(message: string): void {
    const noColorMsg = `[${
      format(new Date(), 'yyyy/MM/dd h:mm:ss a')
    }] [${this._app}] [ERROR] ${message}`;
    console.log(
      `${colors.italic(colors.green(`${this._app.toUpperCase()} ->`))} ${
        colors.brightRed('[ ✗ ERROR ]:')
      } ${message}`,
    );
    if (this._logToFile) {
      this.writeToFile(noColorMsg);
    }
  }

  /**
   * @description Log with the done level
   * @param {string} message - The message to log
   */

  done(message: string): void {
    const noColorMsg = `[${
      format(new Date(), 'yyyy/MM/dd h:mm:ss a')
    }] [${this._app}] [DONE] ${message}`;
    console.log(
      `${colors.italic(colors.green(`${this._app.toUpperCase()} ->`))} ${
        colors.brightGreen('[  DONE ]:')
      } ${message}`,
    );
    if (this._logToFile) {
      this.writeToFile(noColorMsg);
    }
  }

  private writeToFile(noColorMsg: string): void {
    ensureDirSync(this._logFolder);
    const appName = this._app.replace(' ', '-');
    const path = join(this._logFolder, `${appName}.log`);
    Deno.writeTextFileSync(path, noColorMsg + '\n', {
      append: true,
      create: true,
    });
  }
}
