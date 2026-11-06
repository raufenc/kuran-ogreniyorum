/* Kur'ân Yolu harf dersi sahnesi: "Yaşayan Minyatür". Her dersin dünyası ve nesneleri kendinedir.
   Harf bir nesneye benzetilir, nesne solda durur, harf levhaya yazılır; noktalar nesnenin üstünde de görünür.
   Her olay anlatıcının cümlesine bağlıdır (AN). Durakta t durur, a yürür. İnsan figürü yoktur. Harfler yazıdır. */
(function () {
  'use strict';
  var DO = window.DO;
  var CFG = {"id":"kuran-05","nesneler":["gemi","capa"],"harfler":[{"m":"ط","nesne":"gemi","nokta":null},{"m":"ظ","nesne":"gemi","nokta":["yan",1]},{"m":"ع","nesne":"capa","nokta":null},{"m":"غ","nesne":"capa","nokta":["ust",1]}]};
  DO.KodDersSahne[CFG.id] = function (api) {
    var T = api.tuval, svg = api.svg, E2 = api.ciz.ogeler;
    var AN = {"w0":0.4,"w0_son":1.22,"w1":1.78,"w1_son":3.28,"hat1":3.84,"hat1_son":5.68,"hat2":6.24,"hat2_son":8.18,"d_hatirla":8.87,"bu":9.44,"bu_son":10.9,"soz":11.46,"soz_son":13.84,"h0":14.4,"h0_son":14.94,"h0_1":15.5,"h0_1_son":18.34,"ad0":18.9,"ad0_son":19.58,"k_ti1":20.02,"k_ti1_son":20.56,"k_ti2":21.26,"k_ti2_son":21.8,"s0_0":22.42,"s0_0_son":25.36,"k_ti3":25.8,"k_ti3_son":26.34,"sen0":26.96,"sen0_son":27.54,"h1":30.3,"h1_son":31.72,"ad1":32.28,"ad1_son":33.04,"k_zi1":33.48,"k_zi1_son":34.28,"k_zi2":34.98,"k_zi2_son":35.78,"s1_0":36.4,"s1_0_son":39.74,"k_zi3":40.18,"k_zi3_son":40.98,"sen1":41.6,"sen1_son":42.2,"h2":44.96,"h2_son":45.82,"h2_1":46.38,"h2_1_son":47.7,"ad2":48.26,"ad2_son":49.18,"k_ayn1":49.62,"k_ayn1_son":50.54,"k_ayn2":51.24,"k_ayn2_son":52.16,"s2_0":52.78,"s2_0_son":54.56,"k_ayn3":55.0,"k_ayn3_son":55.92,"sen2":56.54,"sen2_son":57.12,"h3":59.88,"h3_son":61.0,"ad3":61.56,"ad3_son":62.52,"k_gayn1":62.96,"k_gayn1_son":63.93,"k_gayn2":64.63,"k_gayn2_son":65.6,"s3_0":66.22,"s3_0_son":68.68,"k_gayn3":69.12,"k_gayn3_son":70.09,"sen3":70.71,"sen3_son":71.29,"ayr":74.05,"ayr_son":77.13,"d_ayrim":77.82,"g_esles0":78.39,"g_esles0_son":80.65,"d_esles":81.34,"g_ayir0":81.91,"g_ayir0_son":84.37,"g_ayir1":84.93,"g_ayir1_son":86.15,"d_ayir":86.84,"g_dizi0":87.41,"g_dizi0_son":89.53,"d_dizi":90.22,"g_birlikte0":90.79,"g_birlikte0_son":92.73,"g_birlikte1":93.29,"g_birlikte1_son":95.27,"d_birlikte":95.96,"g_kulak0":96.53,"g_kulak0_son":97.35,"g_kulak1":97.91,"g_kulak1_son":100.39,"d_kulak":101.08,"g_tek0":101.65,"g_tek0_son":103.17,"g_tek1":103.73,"g_tek1_son":106.31,"d_tek":107.0,"son1":107.57,"son1_son":109.01,"son3":109.56,"son3_son":110.38,"oz0":110.94,"oz0_son":114.4,"ev":114.96,"ev_son":116.76,"gel":117.32,"gel_son":119.44,"emanet":120.0,"emanet_son":121.5};
    var GORSELLER = ['dunya', 'on', 'levha'].concat(CFG.nesneler);
    var liste = {};
    GORSELLER.forEach(function (a) { liste[a] = api.yol('gorsel/' + a + '.webp'); });
    var hazir = T.yukle(liste, api.yukleniyor);
    var PG = 1696, PH = 954, AR = "'Amiri', serif", KOBALT = '#17307f', ALTIN = '#d9a93f';
    var H = CFG.harfler, N = H.length, HX = 1130, HY = 430, OX = 400, OY = 470;
    var XS = N === 3 ? [1100, 800, 500] : [1190, 930, 670, 410];

    function ic(t, a, d) { return Math.min(1, Math.max(0, (t - a) / (d || 1))); }
    function yum(x) { return 0.5 - 0.5 * Math.cos(Math.PI * x); }
    function cik(x) { var u = 1 - x; return 1 - u * u * u; }
    function tw(t, a, d, e) { return (e || cik)(ic(t, a, d)); }
    function kr(a, b, k) { return a + (b - a) * k; }
    function plaka(ad, o) { return T.ciz(ad, Object.assign({ g: PG, h: PH }, o || {})); }
    function harf(m, boy) {
      var e = E2('text', { 'text-anchor': 'middle', direction: 'rtl', 'font-family': AR, 'font-size': boy, fill: KOBALT, opacity: 0 }, svg);
      e.textContent = m; e.setAttribute('lang', 'ar'); return e;
    }
    function yer(e, x, y, o, s) {
      e.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')' + (s ? ' scale(' + s.toFixed(3) + ')' : ''));
      e.setAttribute('opacity', Math.max(0, Math.min(1, o)).toFixed(3));
    }
    var buyuk = H.map(function (h) { return harf(h.m, 230); });
    var dizi = H.map(function (h) { return harf(h.m, N === 3 ? 190 : 150); });
    var altin = [0, 1, 2].map(function () { return E2('path', { d: 'M0 -17 L19 0 L0 17 L-19 0Z', fill: '#f3d584', stroke: ALTIN, 'stroke-width': 2, opacity: 0 }, svg); });

    function basi(i) { return AN['h' + i]; }
    function sonu(i) { return i + 1 < N ? basi(i + 1) : AN.ayr; }
    function kutu(ad) {
      var b = T.boyut(ad), s = Math.min(400 / b.g, 460 / b.h);
      return { g: b.g * s, h: b.h * s };
    }
    function ciz(t, a) {
      var acik = api.acikDurak();
      T.bas(a, { x: 800, y: 450, z: 1.08 - 0.08 * tw(t, 0, 12, yum) });
      plaka('dunya', { d: 0.4, parilti: 0.6 });
      var yan = tw(t, AN.ad0 - 0.9, 0.8) * (1 - tw(t, AN.ayr - 0.25, 0.7));
      // nesneler: harf bölümünde solda; aynı nesne iki harf boyunca kalır
      var nesneO = tw(t, basi(0) - 0.3, 0.7) * (1 - tw(t, AN.ayr - 0.25, 0.6));
      var i = -1, k;
      for (k = 0; k < N; k++) if (t >= basi(k) - 0.3 && t < sonu(k)) i = k;
      if (i >= 0 && nesneO > 0.002) {
        var ad = H[i].nesne, ilk = i, b = kutu(ad);
        while (ilk > 0 && H[ilk - 1].nesne === ad) ilk--;
        var gir = ilk === 0 ? 1 : tw(t, basi(ilk) - 0.3, 0.7);
        // nesne resmin içinde kaybolmasın: arkasında krem bir ışık
        var ho = nesneO * gir;
        T.iz(OX, OY, 300, 300, 0, 0.98, 0.9, 0.72, 0.55 * ho); T.izBitir();
        T.ciz(ad, { x: OX, y: OY + Math.sin(a * 1.1) * 6, g: b.g, h: b.h, d: 0.3, r: Math.sin(a * 0.8) * 1.2, o: nesneO * gir, parilti: 0.5 });
      }
      plaka('on', { d: 1.05, ruzgar: 0.35, y: 455 });
      if (yan > 0.002) T.ciz('levha', { x: HX, y: 380, g: 780, d: 0, o: Math.min(1, yan * 1.5), parilti: 0.5 });
      var orta = Math.max(tw(t, AN.hat1 - 0.5, 0.7) * (1 - tw(t, AN.bu - 0.2, 0.7)), tw(t, AN.ayr - 0.25, 0.7) * (1 - tw(t, AN.ev - 0.2, 0.9)));
      if (acik === 'esles') orta = 0;   // eşleştirme kendi kâğıdında açılır
      if (orta > 0.002) T.ciz('levha', { x: 800, y: kr(980, 350, orta), g: 1180, d: 0, o: Math.min(1, orta * 1.5), parilti: 0.5 });
      T.izBitir();
      // levhadaki harf ve nesnenin noktaları
      H.forEach(function (h, n) {
        var o = n === i ? tw(t, AN['ad' + n] - 0.2, 0.7) * (1 - tw(t, sonu(n) - 0.15, 0.3)) * yan : 0;
        yer(buyuk[n], HX, HY, o);
      });
      var nok = i >= 0 ? H[i].nokta : null;
      altin.forEach(function (e, j) {
        if (!nok || j >= nok[1]) { e.setAttribute('opacity', 0); return; }
        var b = kutu(H[i].nesne), x = OX + (j - (nok[1] - 1) / 2) * 56, y = OY;
        if (nok[0] === 'ust') y = OY - b.h / 2 - 34; else if (nok[0] === 'yan') x = OX + b.g / 2 + 34;
        if (nok[1] === 3 && j === 2) { x = OX; y -= 44; } else if (nok[1] === 3) x = OX + (j - 0.5) * 56;
        yer(e, x, y + Math.sin(a * 1.6 + j) * 4, tw(t, basi(i) + 0.2 + j * 0.2, 0.4) * nesneO);
      });
      var dO = tw(t, AN.ayr - 0.25, 0.7) * (1 - tw(t, AN.ev - 0.2, 0.9)) * (acik && acik !== 'ayrim' ? 0 : 1);
      dizi.forEach(function (e, n) {
        e.setAttribute('fill', t >= AN.son3 ? '#2f7d4f' : KOBALT);
        yer(e, XS[n], N === 3 ? 410 : 400, dO);
      });
    }
    return { hazir: hazir, ciz: ciz };
  };
})();
