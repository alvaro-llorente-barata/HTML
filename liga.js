// Datos de la División 3 (Supreme League) extraídos de Copa Fácil. Actualiza este archivo si cambian los resultados.
const EQUIPOS = [
    {
        "id":  "-OHY1w8liZTtwmmUcSG8",
        "nombre":  "Estrella Coja",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-OHY1w8liZTtwmmUcSG8.png?alt=media\u0026token=1\u0026m=1789140143290",
        "pj":  8,
        "pg":  3,
        "pe":  1,
        "pp":  4,
        "gf":  27,
        "gc":  28,
        "dif":  -1,
        "pts":  10,
        "pct":  42,
        "tec":  null
    },
    {
        "id":  "-OHY2dO-aPPPqpVXLlLY",
        "nombre":  "Parritas",
        "logo":  "https://copafacil-storage.b-cdn.net/evts%2F-yz1s0%2F1737904034627.png?alt=media",
        "pj":  7,
        "pg":  2,
        "pe":  0,
        "pp":  5,
        "gf":  31,
        "gc":  32,
        "dif":  -1,
        "pts":  6,
        "pct":  29,
        "tec":  ""
    },
    {
        "id":  "-OZdRcqKNyQh_zI99vYO",
        "nombre":  "Bacalaos FC",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-OZdRcqKNyQh_zI99vYO.png?alt=media\u0026token=1\u0026m=1789139535388",
        "pj":  8,
        "pg":  5,
        "pe":  1,
        "pp":  2,
        "gf":  26,
        "gc":  17,
        "dif":  9,
        "pts":  16,
        "pct":  67,
        "tec":  ""
    },
    {
        "id":  "-OZdS2l6e897NTd5QWsv",
        "nombre":  "Los Pxllxs",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-OZdS2l6e897NTd5QWsv.png?alt=media\u0026token=1\u0026m=1789139727427",
        "pj":  7,
        "pg":  0,
        "pe":  3,
        "pp":  4,
        "gf":  20,
        "gc":  30,
        "dif":  -10,
        "pts":  3,
        "pct":  14,
        "tec":  "Yeray Espinar Fernández y Víctor Mesa Parkour"
    },
    {
        "id":  "-O_2vJ82ZOy2dbqRKliI",
        "nombre":  "Fidimafia",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-O_2vJ82ZOy2dbqRKliI.png?alt=media\u0026token=1\u0026m=1789139613225",
        "pj":  6,
        "pg":  2,
        "pe":  0,
        "pp":  4,
        "gf":  16,
        "gc":  22,
        "dif":  -6,
        "pts":  6,
        "pct":  33,
        "tec":  ""
    },
    {
        "id":  "-OjAg-ZHFCbSv3arIU89",
        "nombre":  "Yayo vallecano",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-OjAg-ZHFCbSv3arIU89.png?alt=media\u0026token=1\u0026m=1789139510109",
        "pj":  6,
        "pg":  5,
        "pe":  1,
        "pp":  0,
        "gf":  39,
        "gc":  11,
        "dif":  28,
        "pts":  16,
        "pct":  89,
        "tec":  null
    },
    {
        "id":  "-OjAg28ExNCyuhmEFMF_",
        "nombre":  "UD Retirados",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-OjAg28ExNCyuhmEFMF_.png?alt=media\u0026token=1\u0026m=1768652271371",
        "pj":  7,
        "pg":  3,
        "pe":  0,
        "pp":  4,
        "gf":  29,
        "gc":  43,
        "dif":  -14,
        "pts":  9,
        "pct":  43,
        "tec":  null
    },
    {
        "id":  "-P0w5iWlapiWwkf4P2Y8",
        "nombre":  "Super Cordoba",
        "logo":  "https://copafacil-storage.b-cdn.net/events%2F-yz1s0%2Fposk%2Fteams%2F-P0w5iWlapiWwkf4P2Y8.png?alt=media\u0026token=1\u0026m=1788990137251",
        "pj":  7,
        "pg":  2,
        "pe":  0,
        "pp":  5,
        "gf":  15,
        "gc":  32,
        "dif":  -17,
        "pts":  6,
        "pct":  29,
        "tec":  ""
    },
    {
        "id":  "-P179Gw2KRgVE5BKy8UR",
        "nombre":  "Redención C.F",
        "logo":  "https://copafacil-storage.b-cdn.net/events%2F-yz1s0%2Fposk%2Fteams%2F-P179Gw2KRgVE5BKy8UR.png?alt=media\u0026token=1\u0026m=1788990821733",
        "pj":  7,
        "pg":  6,
        "pe":  0,
        "pp":  1,
        "gf":  23,
        "gc":  19,
        "dif":  4,
        "pts":  18,
        "pct":  86,
        "tec":  ""
    },
    {
        "id":  "-P1B3sf6w6ZRN_JidyZH",
        "nombre":  "Goryneta",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-P1B3sf6w6ZRN_JidyZH.png?alt=media\u0026token=1\u0026m=1789139439375",
        "pj":  6,
        "pg":  4,
        "pe":  1,
        "pp":  1,
        "gf":  30,
        "gc":  12,
        "dif":  18,
        "pts":  13,
        "pct":  72,
        "tec":  null
    },
    {
        "id":  "-P1B_aYKtYaSGh5GTJGt",
        "nombre":  "Salud",
        "logo":  "https://firebasestorage.googleapis.com/v0/b/copafacil-web.appspot.com/o/events%2F-yz1s0%2Fxm16%2Fteams%2F-P1B_aYKtYaSGh5GTJGt.png?alt=media\u0026token=1\u0026m=1789139415692",
        "pj":  7,
        "pg":  2,
        "pe":  1,
        "pp":  4,
        "gf":  38,
        "gc":  48,
        "dif":  -10,
        "pts":  7,
        "pct":  33,
        "tec":  null
    }
];
const PARTIDOS = [
    {
        "fecha":  "2026-11-22T17:00:00+00:00",
        "local":  "-P179Gw2KRgVE5BKy8UR",
        "visitante":  "-P1B3sf6w6ZRN_JidyZH",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  "2026-11-22T16:00:00+00:00",
        "local":  "-P1B_aYKtYaSGh5GTJGt",
        "visitante":  "-OHY1w8liZTtwmmUcSG8",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  "2026-11-21T19:00:00+00:00",
        "local":  "-OHY2dO-aPPPqpVXLlLY",
        "visitante":  "-OjAg-ZHFCbSv3arIU89",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  "2026-11-21T18:00:00+00:00",
        "local":  "-O_2vJ82ZOy2dbqRKliI",
        "visitante":  "-OjAg28ExNCyuhmEFMF_",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  "2026-11-20T19:30:00+00:00",
        "local":  "-P0w5iWlapiWwkf4P2Y8",
        "visitante":  "-OZdS2l6e897NTd5QWsv",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-P1B_aYKtYaSGh5GTJGt",
        "visitante":  "-OZdS2l6e897NTd5QWsv",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-OjAg-ZHFCbSv3arIU89",
        "visitante":  "-O_2vJ82ZOy2dbqRKliI",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-O_2vJ82ZOy2dbqRKliI",
        "visitante":  "-P1B3sf6w6ZRN_JidyZH",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-O_2vJ82ZOy2dbqRKliI",
        "visitante":  "-OZdRcqKNyQh_zI99vYO",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-P1B_aYKtYaSGh5GTJGt",
        "visitante":  "-P179Gw2KRgVE5BKy8UR",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-P179Gw2KRgVE5BKy8UR",
        "visitante":  "-OjAg-ZHFCbSv3arIU89",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-P1B3sf6w6ZRN_JidyZH",
        "visitante":  "-OjAg28ExNCyuhmEFMF_",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-P0w5iWlapiWwkf4P2Y8",
        "visitante":  "-OHY1w8liZTtwmmUcSG8",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-OHY2dO-aPPPqpVXLlLY",
        "visitante":  "-OZdS2l6e897NTd5QWsv",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-OjAg28ExNCyuhmEFMF_",
        "visitante":  "-OHY2dO-aPPPqpVXLlLY",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-OjAg-ZHFCbSv3arIU89",
        "visitante":  "-P1B3sf6w6ZRN_JidyZH",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  null,
        "local":  "-OZdRcqKNyQh_zI99vYO",
        "visitante":  "-P0w5iWlapiWwkf4P2Y8",
        "goles1":  null,
        "goles2":  null,
        "finalizado":  false
    },
    {
        "fecha":  "2026-11-15T18:00:00+00:00",
        "local":  "-OjAg28ExNCyuhmEFMF_",
        "visitante":  "-P0w5iWlapiWwkf4P2Y8",
        "goles1":  9,
        "goles2":  2,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-15T17:00:00+00:00",
        "local":  "-OZdRcqKNyQh_zI99vYO",
        "visitante":  "-P1B_aYKtYaSGh5GTJGt",
        "goles1":  5,
        "goles2":  1,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-15T16:00:00+00:00",
        "local":  "-P1B3sf6w6ZRN_JidyZH",
        "visitante":  "-OHY2dO-aPPPqpVXLlLY",
        "goles1":  4,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-15T11:30:00+00:00",
        "local":  "-OZdS2l6e897NTd5QWsv",
        "visitante":  "-O_2vJ82ZOy2dbqRKliI",
        "goles1":  4,
        "goles2":  6,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-14T16:00:00+00:00",
        "local":  "-OHY1w8liZTtwmmUcSG8",
        "visitante":  "-P179Gw2KRgVE5BKy8UR",
        "goles1":  1,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-08T16:00:00+00:00",
        "local":  "-P179Gw2KRgVE5BKy8UR",
        "visitante":  "-OHY2dO-aPPPqpVXLlLY",
        "goles1":  6,
        "goles2":  5,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-08T11:00:00+00:00",
        "local":  "-OHY1w8liZTtwmmUcSG8",
        "visitante":  "-OZdRcqKNyQh_zI99vYO",
        "goles1":  0,
        "goles2":  5,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-07T21:00:00+00:00",
        "local":  "-P0w5iWlapiWwkf4P2Y8",
        "visitante":  "-OjAg-ZHFCbSv3arIU89",
        "goles1":  1,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-02T16:00:00+00:00",
        "local":  "-OZdRcqKNyQh_zI99vYO",
        "visitante":  "-OZdS2l6e897NTd5QWsv",
        "goles1":  3,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-11-01T20:00:00+00:00",
        "local":  "-OHY2dO-aPPPqpVXLlLY",
        "visitante":  "-O_2vJ82ZOy2dbqRKliI",
        "goles1":  2,
        "goles2":  5,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-30T19:30:00+00:00",
        "local":  "-OjAg28ExNCyuhmEFMF_",
        "visitante":  "-P1B_aYKtYaSGh5GTJGt",
        "goles1":  4,
        "goles2":  14,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-26T11:00:00+00:00",
        "local":  "-OZdS2l6e897NTd5QWsv",
        "visitante":  "-OHY1w8liZTtwmmUcSG8",
        "goles1":  4,
        "goles2":  4,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-25T17:00:00+00:00",
        "local":  "-P1B3sf6w6ZRN_JidyZH",
        "visitante":  "-P0w5iWlapiWwkf4P2Y8",
        "goles1":  7,
        "goles2":  null,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-25T16:00:00+00:00",
        "local":  "-OZdRcqKNyQh_zI99vYO",
        "visitante":  "-P179Gw2KRgVE5BKy8UR",
        "goles1":  2,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-18T19:00:00+00:00",
        "local":  "-P1B_aYKtYaSGh5GTJGt",
        "visitante":  "-OjAg-ZHFCbSv3arIU89",
        "goles1":  2,
        "goles2":  17,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-18T16:00:00+00:00",
        "local":  "-P0w5iWlapiWwkf4P2Y8",
        "visitante":  "-OHY2dO-aPPPqpVXLlLY",
        "goles1":  null,
        "goles2":  7,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-18T15:00:00+00:00",
        "local":  "-OZdS2l6e897NTd5QWsv",
        "visitante":  "-P1B3sf6w6ZRN_JidyZH",
        "goles1":  1,
        "goles2":  7,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-18T09:00:00+00:00",
        "local":  "-P179Gw2KRgVE5BKy8UR",
        "visitante":  "-O_2vJ82ZOy2dbqRKliI",
        "goles1":  3,
        "goles2":  1,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-17T15:00:00+00:00",
        "local":  "-OHY1w8liZTtwmmUcSG8",
        "visitante":  "-OjAg28ExNCyuhmEFMF_",
        "goles1":  11,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-12T15:00:00+00:00",
        "local":  "-OZdS2l6e897NTd5QWsv",
        "visitante":  "-P179Gw2KRgVE5BKy8UR",
        "goles1":  2,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-11T17:00:00+00:00",
        "local":  "-OjAg-ZHFCbSv3arIU89",
        "visitante":  "-OHY1w8liZTtwmmUcSG8",
        "goles1":  3,
        "goles2":  2,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-11T10:00:00+00:00",
        "local":  "-O_2vJ82ZOy2dbqRKliI",
        "visitante":  "-P0w5iWlapiWwkf4P2Y8",
        "goles1":  0,
        "goles2":  4,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-11T09:00:00+00:00",
        "local":  "-OjAg28ExNCyuhmEFMF_",
        "visitante":  "-OZdRcqKNyQh_zI99vYO",
        "goles1":  1,
        "goles2":  4,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-09T19:30:00+00:00",
        "local":  "-P1B3sf6w6ZRN_JidyZH",
        "visitante":  "-P1B_aYKtYaSGh5GTJGt",
        "goles1":  4,
        "goles2":  4,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-04T19:00:00+00:00",
        "local":  "-P1B_aYKtYaSGh5GTJGt",
        "visitante":  "-OHY2dO-aPPPqpVXLlLY",
        "goles1":  7,
        "goles2":  8,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-04T18:00:00+00:00",
        "local":  "-OZdRcqKNyQh_zI99vYO",
        "visitante":  "-OjAg-ZHFCbSv3arIU89",
        "goles1":  0,
        "goles2":  4,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-04T16:00:00+00:00",
        "local":  "-P179Gw2KRgVE5BKy8UR",
        "visitante":  "-P0w5iWlapiWwkf4P2Y8",
        "goles1":  3,
        "goles2":  1,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-04T14:00:00+00:00",
        "local":  "-OZdS2l6e897NTd5QWsv",
        "visitante":  "-OjAg28ExNCyuhmEFMF_",
        "goles1":  2,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-10-02T18:30:00+00:00",
        "local":  "-OHY1w8liZTtwmmUcSG8",
        "visitante":  "-P1B3sf6w6ZRN_JidyZH",
        "goles1":  1,
        "goles2":  6,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-27T18:00:00+00:00",
        "local":  "-OjAg28ExNCyuhmEFMF_",
        "visitante":  "-P179Gw2KRgVE5BKy8UR",
        "goles1":  7,
        "goles2":  2,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-27T16:00:00+00:00",
        "local":  "-P1B3sf6w6ZRN_JidyZH",
        "visitante":  "-OZdRcqKNyQh_zI99vYO",
        "goles1":  2,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-25T18:30:00+00:00",
        "local":  "-O_2vJ82ZOy2dbqRKliI",
        "visitante":  "-P1B_aYKtYaSGh5GTJGt",
        "goles1":  3,
        "goles2":  7,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-20T16:00:00+00:00",
        "local":  "-OjAg28ExNCyuhmEFMF_",
        "visitante":  "-OjAg-ZHFCbSv3arIU89",
        "goles1":  2,
        "goles2":  8,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-20T15:00:00+00:00",
        "local":  "-OHY1w8liZTtwmmUcSG8",
        "visitante":  "-O_2vJ82ZOy2dbqRKliI",
        "goles1":  2,
        "goles2":  1,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-20T08:00:00+00:00",
        "local":  "-OZdRcqKNyQh_zI99vYO",
        "visitante":  "-OHY2dO-aPPPqpVXLlLY",
        "goles1":  4,
        "goles2":  3,
        "finalizado":  true
    },
    {
        "fecha":  "2026-09-16T20:00:00+00:00",
        "local":  "-P1B_aYKtYaSGh5GTJGt",
        "visitante":  "-P0w5iWlapiWwkf4P2Y8",
        "goles1":  3,
        "goles2":  7,
        "finalizado":  true
    },
    {
        "fecha":  null,
        "local":  "-OjAg-ZHFCbSv3arIU89",
        "visitante":  "-OZdS2l6e897NTd5QWsv",
        "goles1":  4,
        "goles2":  4,
        "finalizado":  true
    },
    {
        "fecha":  null,
        "local":  "-OHY2dO-aPPPqpVXLlLY",
        "visitante":  "-OHY1w8liZTtwmmUcSG8",
        "goles1":  3,
        "goles2":  6,
        "finalizado":  true
    }
];

(function () {
  var nombres = {};
  EQUIPOS.forEach(function (e) { nombres[e.id] = e; });
  var ESTADO_BACALAOS = "Bacalaos FC";

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Clasificación
  var tbodyClas = document.getElementById("clasificacion-cuerpo");
  if (tbodyClas) {
    var orden = EQUIPOS.slice().sort(function (a, b) {
      return b.pts - a.pts || b.dif - a.dif || b.gf - a.gf;
    });
    tbodyClas.innerHTML = orden.map(function (e, i) {
      var esB = e.nombre === ESTADO_BACALAOS;
      return '<tr class="fila-equipo' + (esB ? " destacado" : "") + '" data-equipo="' + esc(e.nombre) + '">' +
        "<td><span class=\"pos\">" + (i + 1) + "</span></td>" +
        '<td class="equipo"><img src="' + esc(e.logo) + '" alt="" loading="lazy"><span>' + esc(e.nombre) + "</span></td>" +
        "<td class=\"num pts\">" + e.pts + "</td>" +
        "<td class=\"num\">" + e.pj + "</td>" +
        "<td class=\"num\">" + e.pg + "</td>" +
        "<td class=\"num\">" + e.pe + "</td>" +
        "<td class=\"num\">" + e.pp + "</td>" +
        "<td class=\"num\">" + e.gf + "</td>" +
        "<td class=\"num\">" + e.gc + "</td>" +
        "<td class=\"num\">" + (e.dif > 0 ? "+" + e.dif : e.dif) + "</td>" +
        "<td class=\"num\">" + e.pct + "</td>" +
        "</tr>";
    }).join("");
  }

  // Partidos
  var lista = document.getElementById("partidos-lista");
  var selEquipo = document.getElementById("filtro-equipo");
  var selEstado = document.getElementById("filtro-estado");
  if (!lista || !selEquipo || !selEstado) return;

  var fechaFmt = new Intl.DateTimeFormat("es-ES", { timeZone: "Europe/Madrid", weekday: "short", day: "2-digit", month: "2-digit" });
  var horaFmt = new Intl.DateTimeFormat("es-ES", { timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit" });

  EQUIPOS.slice().sort(function (a, b) { return a.nombre.localeCompare(b.nombre, "es"); }).forEach(function (e) {
    selEquipo.insertAdjacentHTML("beforeend", '<option value="' + esc(e.id) + '">' + esc(e.nombre) + "</option>");
  });

  function logoDe(id) { return nombres[id] ? nombres[id].logo : ""; }
  function nombreDe(id) { return nombres[id] ? nombres[id].nombre : id; }

  function tarjeta(p) {
    var marcador, estado;
    if (p.finalizado) {
      marcador = '<div class="marcador">' + (p.goles1 == null ? "-" : p.goles1) + " : " + (p.goles2 == null ? "-" : p.goles2) + "</div>";
      estado = '<span class="estado">Finalizado</span>';
    } else {
      marcador = '<div class="marcador vs">vs</div>';
      estado = '<span class="estado pendiente">Pendiente</span>';
    }
    var cuando = p.fecha
      ? fechaFmt.format(new Date(p.fecha)) + " · " + horaFmt.format(new Date(p.fecha))
      : "Fecha por fijar";
    return '<article class="partido">' +
      '<div class="equipos">' +
        '<div class="lado"><img src="' + esc(logoDe(p.local)) + '" alt=""><span>' + esc(nombreDe(p.local)) + "</span></div>" +
        '<div class="centro">' + estado + marcador + "</div>" +
        '<div class="lado"><img src="' + esc(logoDe(p.visitante)) + '" alt=""><span>' + esc(nombreDe(p.visitante)) + "</span></div>" +
      "</div>" +
      '<p class="cuando">' + esc(cuando) + "</p>" +
      "</article>";
  }

  function pintar() {
    var equipo = selEquipo.value;
    var estado = selEstado.value;
    var filtrados = PARTIDOS.filter(function (p) {
      if (equipo && p.local !== equipo && p.visitante !== equipo) return false;
      if (estado === "finalizados" && !p.finalizado) return false;
      if (estado === "pendientes" && p.finalizado) return false;
      return true;
    });
    lista.innerHTML = filtrados.length
      ? filtrados.map(tarjeta).join("")
      : '<p class="vacio">No hay partidos con estos filtros.</p>';
  }

  selEquipo.addEventListener("change", pintar);
  selEstado.addEventListener("change", pintar);

  // Pulsar un equipo en la clasificación lo selecciona en el filtro
  if (tbodyClas) {
    tbodyClas.addEventListener("click", function (ev) {
      var fila = ev.target.closest("tr[data-equipo]");
      if (!fila) return;
      var equipo = EQUIPOS.filter(function (e) { return e.nombre === fila.getAttribute("data-equipo"); })[0];
      if (equipo) { selEquipo.value = equipo.id; pintar(); }
    });
  }

  pintar();
})();