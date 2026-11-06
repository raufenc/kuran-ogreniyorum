/* Kur'ân Yolu harf dersi sahnesi: "Yaşayan Minyatür". Her dersin dünyası ve nesneleri kendinedir.
   Harf bir nesneye benzetilir, nesne solda durur, harf levhaya yazılır; noktalar nesnenin üstünde de görünür.
   Her olay anlatıcının cümlesine bağlıdır (AN). Durakta t durur, a yürür. İnsan figürü yoktur. Harfler yazıdır. */
(function () {
  'use strict';
  var DO = window.DO;
  var CFG = {"id":"kuran-03","nesneler":["dal","hilal"],"harfler":[{"m":"د","nesne":"dal","nokta":null},{"m":"ذ","nesne":"dal","nokta":["ust",1]},{"m":"ر","nesne":"hilal","nokta":null},{"m":"ز","nesne":"hilal","nokta":["ust",1]}]};
  DO.KodDersSahne[CFG.id] = function (api) {
    var T = api.tuval, svg = api.svg, E2 = api.ciz.ogeler;
    var AN = {"w0":0.42,"w0_son":2.44,"w1":3.0,"w1_son":4.86,"hat1":5.42,"hat1_son":7.32,"hat2":7.88,"hat2_son":9.86,"d_hatirla":10.55,"bu":11.12,"bu_son":12.68,"soz":13.24,"soz_son":15.62,"h0":16.18,"h0_son":16.76,"h0_1":17.32,"h0_1_son":18.46,"h0_2":19.02,"h0_2_son":21.06,"ad0":21.62,"ad0_son":22.5,"k_dal1":22.94,"k_dal1_son":23.76,"k_dal2":24.46,"k_dal2_son":25.28,"sen0":25.9,"sen0_son":26.52,"h1":29.28,"h1_son":30.38,"ad1":30.94,"ad1_son":31.9,"k_zel1":32.34,"k_zel1_son":33.31,"k_zel2":34.01,"k_zel2_son":34.98,"s1_0":35.6,"s1_0_son":39.48,"k_zel3":39.92,"k_zel3_son":40.89,"sen1":41.51,"sen1_son":42.11,"h2":44.87,"h2_son":45.73,"h2_1":46.29,"h2_1_son":48.57,"ad2":49.13,"ad2_son":50.05,"k_ra1":50.49,"k_ra1_son":51.32,"k_ra2":52.02,"k_ra2_son":52.85,"sen2":53.47,"sen2_son":54.07,"h3":56.83,"h3_son":57.99,"ad3":58.55,"ad3_son":59.53,"k_ze1":59.97,"k_ze1_son":60.77,"k_ze2":61.47,"k_ze2_son":62.27,"sen3":62.89,"sen3_son":63.49,"ayr":66.25,"ayr_son":67.29,"ayr1":67.85,"ayr1_son":69.57,"d_ayrim":70.26,"sag":70.83,"sag_son":72.89,"d_dizi":73.58,"bir1":74.15,"bir1_son":76.31,"bir2":76.87,"bir2_son":78.95,"d_birlikte":79.64,"kul1":80.21,"kul1_son":81.07,"kul2":81.63,"kul2_son":84.15,"d_kulak":84.84,"tek1":85.41,"tek1_son":86.97,"tek2":87.53,"tek2_son":90.15,"d_tek":90.84,"son1":91.41,"son1_son":92.87,"son3":93.43,"son3_son":94.31,"oz0":94.87,"oz0_son":98.79,"ev":99.35,"ev_son":101.33,"gel":101.89,"gel_son":104.51,"emanet":105.07,"emanet_son":106.61};
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
        T.iz(OX, OY, 330, 330, 0, 1, 0.96, 0.84, 0.9 * ho); T.iz(OX, OY, 250, 250, 0, 1, 0.97, 0.88, 0.75 * ho); T.izBitir();
        T.ciz(ad, { x: OX, y: OY + Math.sin(a * 1.1) * 6, g: b.g, h: b.h, d: 0.3, r: Math.sin(a * 0.8) * 1.2, o: nesneO * gir, parilti: 0.5 });
      }
      plaka('on', { d: 1.05, ruzgar: 0.35, y: 455 });
      if (yan > 0.002) T.ciz('levha', { x: HX, y: 380, g: 780, d: 0, o: Math.min(1, yan * 1.5), parilti: 0.5 });
      var orta = Math.max(tw(t, AN.hat1 - 0.5, 0.7) * (1 - tw(t, AN.bu - 0.2, 0.7)), tw(t, AN.ayr - 0.25, 0.7) * (1 - tw(t, AN.ev - 0.2, 0.9)));
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
