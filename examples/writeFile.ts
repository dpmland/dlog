import Dlog from '../mod.ts';

const logger = new Dlog('Test Glogger', true, './test');

logger.info('heloooooo');
logger.warn('heloooooo');
logger.error('heloooooo');
logger.debug('helooo');
