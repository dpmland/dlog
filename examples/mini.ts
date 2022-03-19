import Dlog from '../mini.ts';

// What is this ?
//
// Well if you want a more minimalist out here are the feature you need!
// The sames features of the classic but with other style!

// App without files
const logs = new Dlog('An Example App');
// App with files
const logsFile = new Dlog('An Example App With Files', true);

// Without Files examples

logs.info('Info example');
logs.debug('Debug Example');
logs.warn('Warn Example');
logs.error('Error Example');
// WTF DONE? Yeah new feature :p
logs.done('Done Example');

// Wit Files
logsFile.info('Info example');
logsFile.debug('Debug Example');
logsFile.warn('Warn Example');
logsFile.error('Error Example');
// WTF DONE? Yeah new feature :p
logsFile.done('Done Example');
