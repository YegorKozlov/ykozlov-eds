import {
  loadScript,
} from './lib-franklin.js';

export const isProd = () => {
  const { host } = window.location;
  if (host.includes('ykozlov.com')) {
    return true;
  }
  return false;
};

const loadAdobeDTM = async () => {
  if (isProd()) {
    await loadScript('<script src="https://assets.adobedtm.com/ed8972503195/3ce0a0cfa076/launch-f235e81976f5.min.js');
  } else {
    await loadScript('https://assets.adobedtm.com/ed8972503195/3ce0a0cfa076/launch-1e4514e79705-development.min.js');
  }
};

await loadAdobeDTM();