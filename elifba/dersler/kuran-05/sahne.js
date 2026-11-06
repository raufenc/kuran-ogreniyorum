/* Kur'ân Yolu harf dersi sahnesi: "Yaşayan Minyatür". Her dersin dünyası ve nesneleri kendinedir.
   Harf bir nesneye benzetilir, nesne solda durur, harf levhaya yazılır; noktalar nesnenin üstünde de görünür.
   Her olay anlatıcının cümlesine bağlıdır (AN). Durakta t durur, a yürür. İnsan figürü yoktur. Harfler yazıdır. */
(function () {
  'use strict';
  var DO = window.DO;
  var CFG = {"id":"kuran-05","nesneler":["gemi","capa"],"harfler":[{"m":"ط","nesne":"gemi","nokta":null},{"m":"ظ","nesne":"gemi","nokta":["yan",1]},{"m":"ع","nesne":"capa","nokta":null},{"m":"غ","nesne":"capa","nokta":["ust",1]}]};
  DO.KodDersSahne[CFG.id] = function (api) {
    var T = api.tuval, svg = api.svg, E2 = api.ciz.ogeler;
    var AN = {"w0":0.39,"w0_son":1.23,"w1":1.79,"w1_son":3.29,"hat1":3.85,"hat1_son":5.77,"hat2":6.33,"hat2_son":8.35,"d_hatirla":9.04,"bu":9.61,"bu_son":11.17,"soz":11.73,"soz_son":14.07,"h0":14.63,"h0_son":15.15,"h0_1":15.71,"h0_1_son":18.53,"ad0":19.09,"ad0_son":19.75,"k_ti1":20.19,"k_ti1_son":20.73,"k_ti2":21.43,"k_ti2_son":21.97,"s0_0":22.59,"s0_0_son":23.67,"k_ti3":24.11,"k_ti3_son":24.65,"sen0":25.27,"sen0_son":25.87,"h1":28.63,"h1_son":30.13,"ad1":30.69,"ad1_son":31.41,"k_zi1":31.85,"k_zi1_son":32.65,"k_zi2":33.35,"k_zi2_son":34.15,"s1_0":34.77,"s1_0_son":38.17,"k_zi3":38.61,"k_zi3_son":39.41,"sen1":40.03,"sen1_son":40.63,"h2":43.39,"h2_son":44.25,"h2_1":44.81,"h2_1_son":46.19,"ad2":46.75,"ad2_son":47.61,"k_ayn1":48.05,"k_ayn1_son":48.97,"k_ayn2":49.67,"k_ayn2_son":50.59,"s2_0":51.21,"s2_0_son":52.97,"k_ayn3":53.41,"k_ayn3_son":54.33,"sen2":54.95,"sen2_son":55.55,"h3":58.31,"h3_son":59.45,"ad3":60.01,"ad3_son":60.85,"k_gayn1":61.29,"k_gayn1_son":62.26,"k_gayn2":62.96,"k_gayn2_son":63.93,"s3_0":64.55,"s3_0_son":67.49,"k_gayn3":67.93,"k_gayn3_son":68.9,"sen3":69.52,"sen3_son":70.12,"ayr":72.88,"ayr_son":76.06,"d_ayrim":76.75,"sag":77.32,"sag_son":79.34,"d_dizi":80.03,"bir1":80.6,"bir1_son":82.52,"bir2":83.08,"bir2_son":85.26,"d_birlikte":85.95,"kul1":86.52,"kul1_son":87.36,"kul2":87.92,"kul2_son":90.56,"d_kulak":91.25,"tek1":91.82,"tek1_son":93.3,"tek2":93.86,"tek2_son":96.46,"d_tek":97.15,"son1":97.72,"son1_son":99.16,"son3":99.72,"son3_son":100.56,"oz0":101.12,"oz0_son":104.76,"ev":105.32,"ev_son":107.24,"gel":107.8,"gel_son":109.88,"emanet":110.44,"emanet_son":111.96};
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
