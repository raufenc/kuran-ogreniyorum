/* Kur'ân Yolu 1 · Besmele ve İlk Dört Harf — sahne: "Yaşayan Minyatür", tan vakti göl kıyısı.
   Elif selvi gibi dimdik durur; Be, Te ve Se aynı kayık gövdesidir, onları noktalar ayırır.
   Boyalı katmanlar kd-tuval ile canlanır, her olay anlatıcının cümlesine bağlıdır (AN). a ortam saatidir:
   durakta t durur, su ve rüzgâr sürer. İnsan figürü yoktur. Harfler resim değil yazıdır, levhanın üstünde durur. */
(function () {
  'use strict';
  var DO = window.DO;
  DO.KodDersSahne['kuran-01'] = function (api) {
    var T = api.tuval, svg = api.svg, E2 = api.ciz.ogeler;
    var AN = {"gun":0.4,"gun_son":1.4,"gol":1.96,"gol_son":3.98,"yol":4.54,"yol_son":6.24,"sonu":6.8,"sonu_son":9.68,"adim":10.24,"adim_son":12.44,"dort":13.0,"dort_son":14.86,"soz":15.42,"soz_son":18.36,"bes1":18.92,"bes1_son":21.36,"bes2":21.92,"bes2_son":23.84,"bes3":24.4,"bes3_son":26.6,"k_besmele1":27.04,"k_besmele1_son":33.44,"bes4":34.06,"bes4_son":35.84,"d_besmele":36.53,"selvi":37.1,"selvi_son":37.94,"nasil":38.5,"nasil_son":39.18,"dimdik":39.74,"dimdik_son":40.14,"cizgi":40.7,"cizgi_son":44.3,"elif":44.86,"elif_son":45.68,"k_elif1":46.12,"k_elif1_son":46.68,"k_elif2":47.38,"k_elif2_son":47.94,"elif2":48.56,"elif2_son":49.16,"gole":51.92,"gole_son":52.66,"kayik":53.22,"kayik_son":54.08,"damla":54.64,"damla_son":56.22,"govde":56.78,"govde_son":60.92,"be":61.48,"be_son":62.28,"k_be1":62.72,"k_be1_son":63.42,"k_be2":64.12,"k_be2_son":64.82,"be2":65.44,"be2_son":66.02,"kaldir":68.78,"kaldir_son":71.64,"degisti":72.2,"degisti_son":72.9,"te":73.46,"te_son":74.22,"k_te1":74.66,"k_te1_son":75.4,"k_te2":76.1,"k_te2_son":76.84,"te2":77.46,"te2_son":78.06,"uc1":80.82,"uc1_son":81.5,"uc2":82.06,"uc2_son":83.12,"se":83.68,"se_son":84.5,"k_se1":84.94,"k_se1_son":85.76,"dil":86.38,"dil_son":89.98,"dinle":90.54,"dinle_son":90.82,"k_se2":91.26,"k_se2_son":92.08,"se2":92.7,"se2_son":93.38,"ayni":96.14,"ayni_son":97.86,"ayiran":98.42,"ayiran_son":100.54,"gorur":101.1,"gorur_son":102.2,"gorur2":102.76,"gorur2_son":103.88,"d_nokta":104.57,"sag":105.14,"sag_son":108.42,"ters":108.98,"ters_son":110.12,"diz":110.68,"diz_son":112.48,"d_dizi":113.17,"bir1":113.74,"bir1_son":115.68,"bir2":116.24,"bir2_son":118.38,"d_birlikte":119.07,"kul1":119.64,"kul1_son":120.48,"kul2":121.04,"kul2_son":123.56,"d_kulak":124.25,"av1":124.82,"av1_son":125.72,"av2":126.28,"av2_son":129.32,"d_av":130.01,"tek1":130.58,"tek1_son":132.06,"tek2":132.62,"tek2_son":135.22,"d_tek":135.91,"son1":136.48,"son1_son":138.36,"son2":138.92,"son2_son":140.64,"son3":141.2,"son3_son":141.54,"oz1":142.1,"oz1_son":143.04,"oz2":143.6,"oz2_son":144.9,"oz3":145.46,"oz3_son":148.2,"ev":148.76,"ev_son":151.12,"gel":151.68,"gel_son":154.1,"emanet":154.66,"emanet_son":156.16};
    var GORSELLER = ['gok', 'kiyi', 'gol', 'on', 'selvi', 'kayik', 'levha'];
    var liste = {};
    GORSELLER.forEach(function (a) { liste[a] = api.yol('gorsel/' + a + '.webp'); });
    var hazir = T.yukle(liste, api.yukleniyor);
    var PG = 1696, PH = 954, AR = "'Amiri', serif", KOBALT = '#17307f', ALTIN = '#d9a93f';

    function ic(t, a, d) { return Math.min(1, Math.max(0, (t - a) / (d || 1))); }
    function yum(x) { return 0.5 - 0.5 * Math.cos(Math.PI * x); }
    function cik(x) { var u = 1 - x; return 1 - u * u * u; }
    function tw(t, a, d, e) { return (e || cik)(ic(t, a, d)); }
    function kr(a, b, k) { return a + (b - a) * k; }
    function pen(t, a, b, g, c) { return Math.min(tw(t, a, g || 0.4), 1 - tw(t, b, c || 0.4)); }
    function plaka(ad, o) { return T.ciz(ad, Object.assign({ g: PG, h: PH }, o || {})); }

    /* ——— yazı katmanı: harfler SVG metnidir ——— */
    function harf(metin, boy, oz) {
      var e = E2('text', Object.assign({ 'text-anchor': 'middle', direction: 'rtl', 'font-family': AR, 'font-size': boy, fill: KOBALT, opacity: 0 }, oz || {}), svg);
      e.textContent = metin; e.setAttribute('lang', 'ar'); return e;
    }
    function yer(e, x, y, o, s) {
      e.setAttribute('x', 0); e.setAttribute('y', 0);
      e.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')' + (s ? ' scale(' + s.toFixed(3) + ')' : ''));
      e.setAttribute('opacity', Math.max(0, Math.min(1, o)).toFixed(3));
    }
    // kalem ucu gibi eşkenar dörtgen nokta
    function nokta() { return E2('path', { d: 'M0 -17 L19 0 L0 17 L-19 0Z', fill: KOBALT, opacity: 0 }, svg); }
    function altin() { return E2('path', { d: 'M0 -15 L17 0 L0 15 L-17 0Z', fill: '#f3d584', stroke: ALTIN, 'stroke-width': 2, opacity: 0 }, svg); }
    function nYer(e, x, y, o) { e.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')'); e.setAttribute('opacity', Math.max(0, Math.min(1, o)).toFixed(3)); }

    var besmele = harf('بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ', 92);
    var onizleme = harf('ا  ب  ت  ث', 130, { fill: '#f3d584', stroke: '#6d4f12', 'stroke-width': 1.5, 'paint-order': 'stroke' });
    var elif = harf('ا', 300), govde = harf('ٮ', 300);
    var dortlu = ['ا', 'ب', 'ت', 'ث'].map(function (m) { return harf(m, 150); });
    var ucu = ['ب', 'ت', 'ث'].map(function (m) { return harf(m, 190); });
    var nk = [nokta(), nokta(), nokta()], kn = [altin(), altin(), altin()];
    var cizgi = api.ciz.cizgi(svg, 'M300 190 L300 640', { stroke: '#f3d584', 'stroke-width': 9 });
    var ok = api.ciz.cizgi(svg, 'M1230 470 L370 470', { stroke: ALTIN, 'stroke-width': 8 });
    var okUc = E2('path', { d: 'M372 470 L410 446 L410 494Z', fill: ALTIN, opacity: 0 }, svg);
    // Be'nin gövdesinde nokta yerleri: levha ortasına göre
    var HX = 1130, HY = 420;
    var NOK = { alt: [[0, 62]], iki: [[-24, -102], [24, -102]], uc: [[-24, -88], [24, -88], [0, -128]] };

    /* levha nerede: 0 yok, 1 orta, 2 sağda küçük */
    function levhaDurum(t) {
      var besO = tw(t, AN.bes1, 0.9) * (1 - tw(t, AN.d_besmele + 0.05, 0.7));
      var yan = tw(t, AN.elif - 0.9, 0.8) * (1 - tw(t, AN.ayni - 0.25, 0.7));
      var orta = tw(t, AN.ayni - 0.25, 0.7) * (1 - tw(t, AN.ev - 0.2, 0.9));
      return { besO: besO, yan: yan, orta: orta };
    }
    function levha(y, g, o, a) { T.ciz('levha', { x: 800 + (g < 900 ? 330 : 0), y: y, g: g, d: 0, o: o, parilti: 0.5 }); }

    function ciz(t, a) {
      var acik = api.acikDurak(), L = levhaDurum(t);
      var tan = tw(t, 0, 9, yum), kam = 1.1 - 0.1 * tw(t, 0, 16, yum);
      T.bas(a, { x: 800, y: 450, z: kam });
      var isik = kr(0.72, 1, tan), son = tw(t, AN.ev, 3);
      var carp = [isik, kr(0.74, 1, tan), kr(0.86, 1, tan)];
      plaka('gok', { d: 0.25, parilti: 0.9, carp: carp, y: 450 });
      plaka('kiyi', { d: 0.6, carp: carp });
      plaka('gol', { d: 0.6, su: 1, carp: carp, parilti: 0.3 });
      // selvi rüzgârda hafifçe
      var pSelvi = pen(t, AN.selvi, AN.selvi + 13, 0.5, 1) * 0.5;
      T.ciz('selvi', { x: 300, y: 655, h: 520, ay: 1, d: 0.7, ruzgar: 0.25, carp: carp, parilti: pSelvi });
      // kayık soldan gelir, göl üstünde sallanır
      var kg = tw(t, AN.kayik - 0.4, 3.2, yum), kx = kr(-300, 640, kg), ky = 668 + Math.sin(a * 1.1) * 5, kr_ = Math.sin(a * 0.9) * 1.1;
      if (t >= AN.kayik - 0.5) T.ciz('kayik', { x: kx, y: ky, g: 460, d: 0.7, r: kr_, carp: carp });
      plaka('on', { d: 1.05, ruzgar: 0.35, carp: carp, y: 455 });

      // kayığın altına düşen damla, üstüne çıkan noktalar: harfteki noktaların aynısı
      var sayi = t < AN.damla ? 0 : t < AN.kaldir + 0.6 ? 1 : t < AN.uc1 ? 2 : 3;
      var bitis = 1 - tw(t, AN.ayni - 0.2, 0.5);
      var dus = tw(t, AN.damla, 0.8, yum);
      kn.forEach(function (e, i) {
        if (sayi === 1 && i === 0) nYer(e, kx, kr(500, 742, dus) + 0, tw(t, AN.damla, 0.3) * (1 - tw(t, AN.kaldir, 0.5)) * bitis);
        else if (sayi >= 2 && i < sayi) { var p = NOK[sayi === 2 ? 'iki' : 'uc'][i]; nYer(e, kx + p[0] * 1.2, 598 + p[1] * 0.75 + Math.sin(a * 1.6 + i) * 4, tw(t, sayi === 2 ? AN.kaldir + 0.4 + i * 0.25 : AN.uc1 + 0.1 * i, 0.4) * bitis); }
        else e.setAttribute('opacity', 0);
      });

      // Levha: Besmele
      if (L.besO > 0.002) levha(kr(980, 350, L.besO), 1180, Math.min(1, L.besO * 1.5));
      // Levha: yanda, harf harf
      if (L.yan > 0.002) T.ciz('levha', { x: HX, y: 372, g: 780, d: 0, o: Math.min(1, L.yan * 1.5), parilti: 0.5 });
      // Levha: ortada
      if (L.orta > 0.002) levha(kr(980, 350, L.orta), 1180, Math.min(1, L.orta * 1.5));
      T.izBitir();

      yazilar(t, a, acik, L);
    }
    function yazilar(t, a, acik, L) {
      yer(onizleme, 800, 190, pen(t, AN.dort, AN.bes1 - 0.1, 0.7, 0.5));
      var bO = tw(t, AN.k_besmele1, 1.2) * L.besO * (acik === 'besmele' ? 0 : 1);
      yer(besmele, 800, 368, bO);
      // Selvinin üstünden geçen altın çizgi: Elif de böyle iner
      var ci = tw(t, AN.cizgi + 0.5, 2.2, yum);
      cizgi.ilerle(ci * (1 - tw(t, AN.gole, 0.6)) > 0 ? ci : 0);
      cizgi.style.opacity = 1 - tw(t, AN.gole, 0.6);
      var yanO = L.yan;
      yer(elif, HX, HY + 40, tw(t, AN.elif - 0.2, 0.7) * (1 - tw(t, AN.gole - 0.1, 0.5)) * yanO);
      var gO = tw(t, AN.govde + 0.2, 0.8) * yanO;
      yer(govde, HX, HY + 30, gO);
      var sayi = t < AN.govde ? 0 : t < AN.kaldir + 0.6 ? 1 : t < AN.uc1 ? 2 : 3;
      var yerler = sayi === 1 ? NOK.alt : sayi === 2 ? NOK.iki : NOK.uc;
      nk.forEach(function (e, i) {
        if (i >= sayi || !sayi) { e.setAttribute('opacity', 0); return; }
        var p = yerler[i], gir = sayi === 1 ? AN.govde + 0.4 : sayi === 2 ? AN.kaldir + 0.6 + i * 0.25 : AN.uc1 + 0.1 * i;
        nYer(e, HX + p[0], HY + p[1], tw(t, gir, 0.35) * yanO);
      });
      // Üç harf yan yana: gövde aynı
      var uO = L.orta * pen(t, AN.ayni, AN.sag - 0.2, 0.5, 0.4) * (acik ? 0 : 1);
      ucu.forEach(function (e, i) { yer(e, 1100 - i * 300, 400, uO); });
      // sağdan sola ok
      var oO = L.orta * pen(t, AN.sag + 0.2, AN.d_dizi - 0.1, 0.3, 0.3);
      ok.ilerle(oO > 0 ? tw(t, AN.sag + 0.3, 2) : 0); ok.style.opacity = oO;
      nYer(okUc, 0, 0, oO * tw(t, AN.sag + 2, 0.3));
      // dört harf: duraklar arasında ve kapanışta
      var dO = L.orta * tw(t, AN.bir1 - 0.3, 0.6) * (acik ? 0 : 1);
      var vurgu = [[AN.oz1, AN.oz2], [AN.oz2, AN.oz3], [AN.oz3, AN.ev], [AN.oz3, AN.ev]];
      dortlu.forEach(function (e, i) {
        var v = t >= vurgu[i][0] && t < vurgu[i][1], s = v ? 1.16 : 1;
        e.setAttribute('fill', v ? '#b4551f' : t >= AN.son3 ? '#2f7d4f' : KOBALT);
        yer(e, 1190 - i * 260, 420, dO, s);
      });
    }
    return { hazir: hazir, ciz: ciz };
  };
})();
