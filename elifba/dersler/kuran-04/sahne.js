/* Kur'ân Yolu harf dersi sahnesi: "Yaşayan Minyatür". Her dersin dünyası ve nesneleri kendinedir.
   Harf bir nesneye benzetilir, nesne solda durur, harf levhaya yazılır; noktalar nesnenin üstünde de görünür.
   Her olay anlatıcının cümlesine bağlıdır (AN). Durakta t durur, a yürür. İnsan figürü yoktur. Harfler yazıdır. */
(function () {
  'use strict';
  var DO = window.DO;
  var CFG = {"id":"kuran-04","nesneler":["tarak","mekik"],"harfler":[{"m":"س","nesne":"tarak","nokta":null},{"m":"ش","nesne":"tarak","nokta":["ust",3]},{"m":"ص","nesne":"mekik","nokta":null},{"m":"ض","nesne":"mekik","nokta":["ust",1]}]};
  DO.KodDersSahne[CFG.id] = function (api) {
    var T = api.tuval, svg = api.svg, E2 = api.ciz.ogeler;
    var AN = {"w0":0.4,"w0_son":1.88,"w1":2.44,"w1_son":4.1,"hat1":4.66,"hat1_son":6.4,"hat2":6.96,"hat2_son":8.9,"d_hatirla":9.59,"bu":10.16,"bu_son":11.76,"soz":12.32,"soz_son":14.78,"h0":15.34,"h0_son":16.06,"h0_1":16.62,"h0_1_son":17.28,"h0_2":17.84,"h0_2_son":19.6,"ad0":20.16,"ad0_son":20.84,"k_sin1":21.28,"k_sin1_son":22.17,"k_sin2":22.87,"k_sin2_son":23.76,"sen0":24.38,"sen0_son":24.98,"h1":27.74,"h1_son":29.42,"ad1":29.98,"ad1_son":30.76,"k_sin21":31.2,"k_sin21_son":32.14,"k_sin22":32.84,"k_sin22_son":33.78,"sen1":34.4,"sen1_son":35.02,"h2":37.78,"h2_son":38.68,"h2_1":39.24,"h2_1_son":41.48,"ad2":42.04,"ad2_son":42.86,"k_sad1":43.3,"k_sad1_son":44.42,"k_sad2":45.12,"k_sad2_son":46.24,"s2_0":46.86,"s2_0_son":47.9,"k_sad3":48.34,"k_sad3_son":49.46,"sen2":50.08,"sen2_son":50.66,"h3":53.42,"h3_son":55.02,"ad3":55.58,"ad3_son":56.36,"k_dad1":56.8,"k_dad1_son":57.98,"k_dad2":58.68,"k_dad2_son":59.86,"s3_0":60.48,"s3_0_son":61.48,"k_dad3":61.92,"k_dad3_son":63.1,"sen3":63.72,"sen3_son":64.32,"ayr":67.08,"ayr_son":70.32,"d_ayrim":71.01,"g_esles0":71.58,"g_esles0_son":73.94,"d_esles":74.63,"g_ayir0":75.2,"g_ayir0_son":77.74,"g_ayir1":78.3,"g_ayir1_son":79.6,"d_ayir":80.29,"g_av0":80.86,"g_av0_son":81.78,"g_av1":82.34,"g_av1_son":85.36,"d_av":86.05,"g_birlikte0":86.62,"g_birlikte0_son":88.58,"g_birlikte1":89.14,"g_birlikte1_son":91.18,"d_birlikte":91.87,"g_kulak0":92.44,"g_kulak0_son":93.26,"g_kulak1":93.82,"g_kulak1_son":96.5,"d_kulak":97.19,"g_tek0":97.76,"g_tek0_son":99.32,"g_tek1":99.88,"g_tek1_son":102.54,"d_tek":103.23,"son1":103.8,"son1_son":105.26,"son3":105.82,"son3_son":106.66,"oz0":107.22,"oz0_son":110.5,"ev":111.06,"ev_son":112.94,"gel":113.5,"gel_son":115.58,"emanet":116.14,"emanet_son":117.64};
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
        T.iz(OX, OY, 310, 310, 0, 0.99, 0.94, 0.8, 0.82 * ho); T.izBitir();
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
