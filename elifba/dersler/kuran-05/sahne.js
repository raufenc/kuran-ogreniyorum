/* Kur'ân Yolu harf dersi sahnesi: "Yaşayan Minyatür". Her dersin dünyası ve nesneleri kendinedir.
   Harf bir nesneye benzetilir, nesne solda durur, harf levhaya yazılır; noktalar nesnenin üstünde de görünür.
   Her olay anlatıcının cümlesine bağlıdır (AN). Durakta t durur, a yürür. İnsan figürü yoktur. Harfler yazıdır. */
(function () {
  'use strict';
  var DO = window.DO;
  var CFG = {"id":"kuran-05","nesneler":["gemi","halat"],"harfler":[{"m":"ط","nesne":"gemi","nokta":null},{"m":"ظ","nesne":"gemi","nokta":["yan",1]},{"m":"ع","nesne":"halat","nokta":null},{"m":"غ","nesne":"halat","nokta":["ust",1]}]};
  DO.KodDersSahne[CFG.id] = function (api) {
    var T = api.tuval, svg = api.svg, E2 = api.ciz.ogeler;
    var AN = {"w0":0.4,"w0_son":1.28,"w1":1.84,"w1_son":3.46,"hat1":4.02,"hat1_son":5.92,"hat2":6.48,"hat2_son":8.4,"d_hatirla":9.09,"bu":9.66,"bu_son":11.2,"soz":11.76,"soz_son":14.1,"h0":14.66,"h0_son":15.2,"h0_1":15.76,"h0_1_son":18.62,"ad0":19.18,"ad0_son":19.86,"k_ti1":20.3,"k_ti1_son":20.84,"k_ti2":21.54,"k_ti2_son":22.08,"s0_0":22.7,"s0_0_son":25.56,"k_ti3":26.0,"k_ti3_son":26.54,"sen0":27.16,"sen0_son":27.74,"h1":30.5,"h1_son":31.96,"ad1":32.52,"ad1_son":33.24,"k_zi1":33.68,"k_zi1_son":34.48,"k_zi2":35.18,"k_zi2_son":35.98,"s1_0":36.6,"s1_0_son":40.1,"k_zi3":40.54,"k_zi3_son":41.34,"sen1":41.96,"sen1_son":42.52,"h2":45.28,"h2_son":46.68,"h2_1":47.24,"h2_1_son":49.98,"ad2":50.54,"ad2_son":51.46,"k_ayn1":51.9,"k_ayn1_son":52.82,"k_ayn2":53.52,"k_ayn2_son":54.44,"s2_0":55.06,"s2_0_son":56.78,"k_ayn3":57.22,"k_ayn3_son":58.14,"sen2":58.76,"sen2_son":59.34,"h3":62.1,"h3_son":63.2,"ad3":63.76,"ad3_son":64.68,"k_gayn1":65.12,"k_gayn1_son":66.09,"k_gayn2":66.79,"k_gayn2_son":67.76,"s3_0":68.38,"s3_0_son":70.84,"k_gayn3":71.28,"k_gayn3_son":72.25,"sen3":72.87,"sen3_son":73.45,"ayr":76.21,"ayr_son":79.37,"d_ayrim":80.06,"g_esles0":80.63,"g_esles0_son":82.99,"d_esles":83.68,"g_ayir0":84.25,"g_ayir0_son":86.73,"g_ayir1":87.29,"g_ayir1_son":88.53,"d_ayir":89.22,"g_dizi0":89.79,"g_dizi0_son":91.93,"d_dizi":92.62,"g_birlikte0":93.19,"g_birlikte0_son":95.25,"g_birlikte1":95.81,"g_birlikte1_son":97.83,"d_birlikte":98.52,"g_kulak0":99.09,"g_kulak0_son":99.95,"g_kulak1":100.51,"g_kulak1_son":103.01,"d_kulak":103.7,"g_tek0":104.27,"g_tek0_son":105.77,"g_tek1":106.33,"g_tek1_son":108.95,"d_tek":109.64,"son1":110.21,"son1_son":111.63,"son3":112.19,"son3_son":113.03,"oz0":113.59,"oz0_son":117.35,"ev":117.91,"ev_son":119.85,"gel":120.41,"gel_son":122.47,"emanet":123.03,"emanet_son":124.57};
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
