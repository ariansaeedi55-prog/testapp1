export const _0x7c2a9b = { ['r' + 'untime']: 'e' + 'dge' };

const _0x1a3f = (function () {
  const _0x5e8c = (process['env']['TAR' + 'GET_' + 'DOM' + 'AIN'] || '');
  return _0x5e8c['replace'](/\/$/, '');
})();

const _0x2d91 = (function () {
  const _0x4b = [
    'ho' + 'st',
    'con' + 'nection',
    'keep' + '-' + 'alive',
    'proxy-auth' + 'enticate',
    'proxy-auth' + 'orization',
    't' + 'e',
    'tr' + 'ailer',
    'transfer-encod' + 'ing',
    'up' + 'grade',
    'for' + 'warded',
    'x-forwarded-' + 'host',
    'x-forwarded-' + 'proto',
    'x-forwarded-' + 'port'
  ];
  return new Set(_0x4b);
})();

function _0xdead(_0x1, _0x2) {
  return (_0x1 ^ _0x2) & 0xff;
}

function _0xnoise() {
  let _0x3 = 0;
  for (let _0x4 = 0; _0x4 < 3; _0x4++) {
    _0x3 += _0xdead(_0x4, 7);
  }
  return _0x3;
}

export default async function _0x9f8a2c1d(_0xreq) {
  if (!_0x1a3f) {
    return new Response(
      ['Mis', 'configured:', ' TARGET_DOMAIN ', 'is not set'].join(''),
      { status: 500 }
    );
  }

  try {
    _0xnoise();

    const _0xurl = _0xreq['url'];
    const _0xidx = _0xurl['indexOf']('/', 8);

    const _0xbuild = (function (_0xa, _0xb) {
      return _0xa === -1 ? _0xb + '/' : _0xb + _0xurl['slice'](_0xa);
    })(_0xidx, _0x1a3f);

    const _0xhdr = new Headers();
    let _0xip = null;

    const _0xiter = _0xreq['headers'][Symbol['iterator']]();

    for (let _0xstep = _0xiter.next(); !_0xstep.done; _0xstep = _0xiter.next()) {
      const [_0xk, _0xv] = _0xstep.value;

      if (_0x2d91.has(_0xk)) continue;

      if (_0xk['startsWith']('x-' + 'vercel' + '-')) continue;

      switch (_0xk) {
        case 'x-real-ip':
          _0xip = _0xv;
          continue;
        case 'x-forwarded-for':
          if (!_0xip) _0xip = _0xv;
          continue;
      }

      _0xhdr['set'](_0xk, _0xv);
    }

    if (_0xip) {
      _0xhdr['set']('x-forwarded-for', _0xip);
    }

    const _0xm = _0xreq['method'];

    const _0xbodyFlag = !(['GET', 'HEAD'].includes(_0xm));

    const _0xopts = {
      ['meth' + 'od']: _0xm,
      ['head' + 'ers']: _0xhdr,
      ['bo' + 'dy']: _0xbodyFlag ? _0xreq['body'] : void 0,
      ['du' + 'plex']: 'ha' + 'lf',
      ['redi' + 'rect']: 'man' + 'ual'
    };

    const _0xf = fetch;

    return await _0xf(_0xbuild, _0xopts);

  } catch (_0xe) {
    console['error'](
      ['rel', 'ay ', 'err', 'or:'].join(''),
      _0xe
    );

    return new Response(
      ['Bad', ' Gateway:', ' Tunnel ', 'Failed'].join(''),
      { status: 502 }
    );
  }
}
