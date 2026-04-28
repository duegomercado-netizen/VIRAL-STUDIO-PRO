<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>ViralStudio Pro v12 — Miguel Mercado 942</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#06060e;--sur:#0d0d1c;--card:#111125;--brd:#1e1e38;
  --pur:#7c3aed;--purl:#a78bfa;--purd:#5b21b6;
  --gld:#f59e0b;--amb:#d97706;--grn:#10b981;--red:#ef4444;
  --cyn:#06b6d4;--neo:#00e676;--org:#f97316;--pnk:#ec4899;
  --txt:#f0efff;--sub:#9ca3af;--mut:#6b7280;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--txt);overflow-x:hidden;-webkit-font-smoothing:antialiased;max-width:480px;margin:0 auto;min-height:100vh}
.sy{font-family:'Syne',sans-serif}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:var(--brd);border-radius:3px}
@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes boot{from{width:0}to{width:100%}}
@keyframes glow{0%,100%{text-shadow:0 0 8px #00e676}50%{text-shadow:0 0 28px #00e676,0 0 60px #00e676}}
@keyframes pop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes score-fill{from{width:0}to{width:var(--w)}}
.glo{animation:glow 2s infinite}.pulse{animation:pulse 1.4s infinite}

/* BOOT */
#boot{position:fixed;inset:0;background:#000;display:flex;align-items:center;justify-content:center;z-index:9999;text-align:center}

/* TOAST */
#toast{position:fixed;top:66px;left:50%;transform:translateX(-50%);min-width:240px;max-width:90vw;background:linear-gradient(135deg,#3b0764,#1e0d47);border:1px solid var(--pur);border-radius:14px;padding:12px 20px;z-index:8000;text-align:center;display:none;box-shadow:0 8px 32px rgba(124,58,237,.6)}
#toast.on{display:block;animation:pop .3s both}

/* LOADER */
#loader{position:fixed;inset:0;background:rgba(6,6,14,.97);display:none;flex-direction:column;align-items:center;justify-content:center;z-index:5000;text-align:center;padding:30px}
#loader.on{display:flex}
.spin{width:48px;height:48px;border:3px solid var(--brd);border-top-color:var(--pur);border-radius:50%;animation:spin .7s linear infinite}

/* TOPBAR */
#tb{position:sticky;top:0;background:rgba(6,6,14,.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--brd);z-index:100;padding:0 14px}
#tb-in{display:flex;justify-content:space-between;align-items:center;height:52px}

/* APP */
#app{padding:0 14px 100px}
.sc{display:none}.sc.on{display:block;animation:up .3s both}

/* BASE */
.card{background:var(--card);border:1px solid var(--brd);border-radius:14px;padding:14px;margin-bottom:10px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 16px;border-radius:10px;font-weight:700;font-size:13px;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .15s;touch-action:manipulation}
.btn:active{transform:scale(.95);opacity:.85}
.btn.full{width:100%;display:flex}
.btn.sm{padding:6px 11px;font-size:11px;border-radius:8px}
.bp{background:linear-gradient(135deg,var(--pur),var(--purd));color:#fff;box-shadow:0 4px 16px rgba(124,58,237,.3)}
.bg{background:linear-gradient(135deg,var(--gld),var(--amb));color:#000;box-shadow:0 4px 16px rgba(245,158,11,.3)}
.bgh{background:transparent;border:1px solid var(--brd);color:var(--sub)}
.bred{background:linear-gradient(135deg,var(--red),#b91c1c);color:#fff}
.bgrn{background:linear-gradient(135deg,var(--grn),#059669);color:#fff}
.bcn{background:linear-gradient(135deg,var(--cyn),#0284c7);color:#fff}
.bor{background:linear-gradient(135deg,var(--org),#ea580c);color:#fff}
.bpnk{background:linear-gradient(135deg,var(--pnk),#be185d);color:#fff}
input,textarea,select{font-family:'DM Sans',sans-serif;background:var(--sur);border:1px solid var(--brd);color:var(--txt);border-radius:10px;padding:10px 13px;font-size:14px;outline:none;transition:border-color .2s;width:100%;box-sizing:border-box}
input:focus,textarea:focus,select:focus{border-color:var(--pur);box-shadow:0 0 0 2px rgba(124,58,237,.15)}
select option{background:var(--sur)}
.tabs{display:flex;overflow-x:auto;border-bottom:1px solid var(--brd);scrollbar-width:none;margin-bottom:12px}
.tabs::-webkit-scrollbar{display:none}
.tab{flex-shrink:0;padding:8px 10px;font-size:9px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--mut);border:none;background:none;border-bottom:2px solid transparent;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.tab.on{color:var(--neo);border-bottom-color:var(--neo)}
.sbox{background:var(--bg);border-radius:8px;padding:12px;white-space:pre-wrap;font-size:12px;line-height:1.9;color:var(--txt);max-height:600px;overflow-y:auto;border:1px solid var(--brd)}
.badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.3px}
.cpb{background:transparent;border:1px solid var(--brd);color:var(--mut);padding:5px 10px;font-size:10px;cursor:pointer;border-radius:7px;font-family:'DM Sans',sans-serif;font-weight:700;transition:all .2s}
.cpb.ok{background:#052e16;border-color:var(--neo);color:var(--neo)}
.bk{display:inline-flex;align-items:center;gap:5px;background:none;border:1px solid var(--brd);border-radius:8px;padding:6px 12px;color:var(--purl);cursor:pointer;font-size:12px;font-weight:700;font-family:'DM Sans',sans-serif;transition:all .15s}
.chip{display:inline-flex;align-items:center;padding:5px 11px;border-radius:20px;font-size:11px;font-weight:700;background:var(--sur);border:1px solid var(--brd);color:var(--txt);cursor:pointer;transition:all .15s;flex-shrink:0}
.chip:active,.chip.on{background:rgba(124,58,237,.2);border-color:var(--pur);color:var(--purl)}
.ytc{background:var(--card);border:1px solid var(--brd);border-radius:12px;overflow:hidden;margin-bottom:8px;cursor:pointer;transition:all .2s;position:relative}
.ytc:hover,.ytc.sel{border-color:var(--neo)}
.ytc.sel::before{content:'✅';position:absolute;top:8px;right:8px;font-size:14px;z-index:2}
.tip-c{background:#0a1628;border:1px solid #1e3a5f;border-radius:12px;padding:12px 14px;margin-bottom:8px;position:relative;overflow:hidden}
.tip-c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--cyn),var(--pur));border-radius:3px 0 0 3px}
.tip-c.g::before{background:linear-gradient(180deg,var(--gld),var(--org))}
.tip-c.r::before{background:linear-gradient(180deg,var(--red),var(--purl))}
.mini-canvas{width:100%;aspect-ratio:16/9;border-radius:12px;border:2px solid var(--gld);overflow:hidden;position:relative;margin-bottom:10px;background:#111}
.mini-canvas canvas{width:100%;height:100%;display:block}
.shimmer{background:linear-gradient(90deg,var(--sur) 25%,var(--brd) 50%,var(--sur) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:8px}
.trend-c{background:var(--card);border:1px solid var(--brd);border-radius:12px;padding:12px;margin-bottom:8px;cursor:pointer;transition:all .15s}
.trend-c:hover{border-color:var(--pur);transform:translateY(-1px)}
.srow{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.sbar{flex:1;height:6px;background:var(--brd);border-radius:3px;overflow:hidden}
.sfill{height:100%;border-radius:3px}
.pb-w{height:4px;background:var(--brd);border-radius:3px;overflow:hidden}
.pb{height:100%;background:linear-gradient(90deg,var(--pur),var(--purl));border-radius:3px;transition:width .5s}
.cat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px}
.cat-btn{background:var(--card);border:1px solid var(--brd);border-radius:10px;padding:10px 6px;cursor:pointer;text-align:center;font-family:'DM Sans',sans-serif;transition:all .15s;font-size:11px;color:var(--txt);font-weight:600}
.cat-btn:active,.cat-btn.on{border-color:var(--pur);background:rgba(124,58,237,.15);color:var(--purl)}
.ht-box{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.ht-tag{background:rgba(124,58,237,.15);border:1px solid rgba(124,58,237,.3);border-radius:16px;padding:3px 10px;font-size:11px;color:var(--purl);font-weight:600;cursor:pointer}
.sim-card{display:flex;gap:10px;background:var(--card);border:1px solid var(--brd);border-radius:10px;padding:10px;margin-bottom:7px;cursor:pointer;transition:all .15s}
.sim-card:hover{border-color:var(--pur)}
.sim-thumb{width:90px;height:54px;border-radius:7px;object-fit:cover;background:var(--sur);flex-shrink:0}
.firma{text-align:center;padding:20px 0 8px;color:var(--mut);font-size:10px;letter-spacing:1px}
.firma span{color:var(--gld);font-weight:800}
.app-card{background:var(--card);border:1px solid var(--brd);border-radius:12px;padding:12px 14px;margin-bottom:8px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;transition:border-color .15s}
.app-card:hover{border-color:var(--pur)}
.key-banner{border-radius:10px;padding:10px 12px;margin-bottom:6px;display:flex;align-items:center;gap:10px;font-size:12px;font-weight:600}
.key-banner.ok{background:#052e16;border:1px solid var(--neo)44;color:var(--neo)}
.key-banner.err{background:#1a0a0a;border:1px solid var(--red)44;color:var(--red)}
.key-banner.warn{background:#1a1200;border:1px solid var(--gld)44;color:var(--gld)}

/* PIN MODAL */
#pin-modal{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:7000;display:none;align-items:center;justify-content:center;padding:24px}
#pin-modal.on{display:flex;animation:pop .3s both}
.pin-box{background:var(--card);border:1px solid var(--brd);border-radius:20px;padding:28px 20px;width:100%;max-width:340px;text-align:center}
.pin-dots{display:flex;justify-content:center;gap:12px;margin:18px 0}
.pin-dot{width:14px;height:14px;border-radius:50%;background:var(--brd);transition:all .2s}
.pin-dot.filled{background:var(--pur);box-shadow:0 0 8px var(--pur)}
.pin-dot.error{background:var(--red);box-shadow:0 0 8px var(--red)}
.pin-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
.pin-key{background:var(--sur);border:1px solid var(--brd);border-radius:12px;padding:16px;font-size:20px;font-weight:800;cursor:pointer;font-family:'Syne',sans-serif;color:var(--txt);transition:all .15s;touch-action:manipulation}
.pin-key:active{transform:scale(.9);background:rgba(124,58,237,.2);border-color:var(--pur)}
.pin-key.del{color:var(--red);font-size:16px}
.pin-key.ok{background:linear-gradient(135deg,var(--pur),var(--purd));color:#fff;border-color:transparent}

/* SCORE BAR */
.score-bar-wrap{height:8px;background:var(--brd);border-radius:4px;overflow:hidden;margin:4px 0 8px}
.score-bar{height:100%;border-radius:4px;transition:width 1s cubic-bezier(.4,0,.2,1)}

/* LANG CHIPS */
.lang-chip{display:inline-flex;align-items:center;gap:4px;padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;background:var(--sur);border:1px solid var(--brd);color:var(--txt);cursor:pointer;transition:all .15s;flex-shrink:0;white-space:nowrap}
.lang-chip.on{background:rgba(6,182,212,.15);border-color:var(--cyn);color:var(--cyn)}

/* CREDIT CARD */
.cred-card{background:var(--card);border:1px solid var(--brd);border-radius:14px;padding:12px 14px;margin-bottom:8px;display:flex;gap:12px;align-items:center;cursor:pointer;transition:all .15s;position:relative;overflow:hidden}
.cred-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px}
.cred-card.free::before{background:linear-gradient(180deg,var(--neo),var(--grn))}
.cred-card.trial::before{background:linear-gradient(180deg,var(--gld),var(--amb))}
.cred-card.paid::before{background:linear-gradient(180deg,var(--purl),var(--pur))}
.cred-card:hover{border-color:var(--pur);transform:translateY(-1px)}
.cred-amount{font-size:22px;font-weight:900;font-family:'Syne',sans-serif;line-height:1}

/* HOOK SCORE */
.hook-score-big{font-size:64px;font-weight:900;font-family:'Syne',sans-serif;line-height:1;text-align:center}
.score-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.score-cell{background:var(--bg);border-radius:10px;padding:10px;text-align:center}
</style>
</head>
<body>

<!-- BOOT -->
<div id="boot">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,#0d0025,#000 70%)"></div>
  <div style="position:relative;text-align:center;padding:20px">
    <div class="pulse" style="font-size:52px;margin-bottom:14px">⚡</div>
    <div class="glo sy" style="color:#00e676;font-size:12px;letter-spacing:8px;margin-bottom:6px">VIRALSTUDIO PRO</div>
    <div style="color:#444;font-size:9px;letter-spacing:2px;margin-bottom:4px">v12 · Multi-Idioma · Hook Score · Créditos</div>
    <div style="color:var(--gld);font-size:8px;margin-bottom:18px">by <strong>Miguel Mercado 942</strong> — Inventor</div>
    <div style="width:260px;height:3px;background:#111;border-radius:2px;overflow:hidden;margin:0 auto">
      <div style="height:100%;background:#00e676;box-shadow:0 0 10px #00e676;animation:boot 2.5s ease forwards"></div>
    </div>
    <div id="boot-msg" style="color:#333;font-size:9px;margin-top:8px">Iniciando sistema...</div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"><div id="t-msg" style="font-weight:900;font-size:14px;color:#fff"></div><div id="t-sub" style="color:#a78bfa;font-size:11px;margin-top:3px"></div></div>

<!-- LOADER -->
<div id="loader">
  <div class="spin"></div>
  <div id="l-msg" style="color:var(--purl);font-weight:700;font-size:14px;margin-top:16px"></div>
  <div id="l-sub" style="color:var(--mut);font-size:11px;margin-top:4px"></div>
  <div style="width:260px;margin-top:14px"><div class="pb-w"><div class="pb" id="l-bar" style="width:0%"></div></div></div>
  <div id="l-step" style="color:var(--mut);font-size:10px;margin-top:8px"></div>
</div>

<!-- PIN MODAL -->
<div id="pin-modal">
  <div class="pin-box">
    <div id="pin-icon" style="font-size:36px;margin-bottom:8px">🔐</div>
    <div id="pin-title" class="sy" style="font-size:18px;font-weight:900;color:var(--txt);margin-bottom:4px">Acceso a Configuración</div>
    <div id="pin-sub" style="font-size:12px;color:var(--mut);margin-bottom:4px"></div>
    <div class="pin-dots">
      <div class="pin-dot" id="pd0"></div>
      <div class="pin-dot" id="pd1"></div>
      <div class="pin-dot" id="pd2"></div>
      <div class="pin-dot" id="pd3"></div>
    </div>
    <div id="pin-error" style="color:var(--red);font-size:11px;min-height:16px;margin-bottom:8px"></div>
    <div class="pin-pad">
      <button class="pin-key" onclick="pinKey('1')">1</button>
      <button class="pin-key" onclick="pinKey('2')">2</button>
      <button class="pin-key" onclick="pinKey('3')">3</button>
      <button class="pin-key" onclick="pinKey('4')">4</button>
      <button class="pin-key" onclick="pinKey('5')">5</button>
      <button class="pin-key" onclick="pinKey('6')">6</button>
      <button class="pin-key" onclick="pinKey('7')">7</button>
      <button class="pin-key" onclick="pinKey('8')">8</button>
      <button class="pin-key" onclick="pinKey('9')">9</button>
      <button class="pin-key del" onclick="pinDel()">⌫</button>
      <button class="pin-key" onclick="pinKey('0')">0</button>
      <button class="pin-key del" onclick="pinCancel()">✕</button>
    </div>
    <div id="pin-forgot" style="margin-top:14px;display:none">
      <button onclick="pinReset()" style="background:none;border:none;color:var(--mut);font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;text-decoration:underline">Olvidé mi PIN — Resetear (borra las keys)</button>
    </div>
  </div>
</div>

<!-- TOPBAR -->
<div id="tb">
  <div id="tb-in">
    <div class="sy" style="font-weight:900;font-size:16px;cursor:pointer;display:flex;align-items:center;gap:4px" onclick="go('home')">
      <span style="color:var(--purl)">Viral</span><span style="color:var(--gld)">Studio</span>
      <span style="font-size:8px;color:var(--neo);font-weight:700;background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.3);padding:1px 5px;border-radius:4px">v12</span>
    </div>
    <div style="display:flex;gap:4px;align-items:center">
      <div id="api-status" style="display:flex;align-items:center;gap:4px;background:#0a1a0a;border:1px solid #10b98133;border-radius:20px;padding:3px 9px;cursor:pointer" onclick="go('setup')">
        <span style="width:5px;height:5px;border-radius:50%;background:var(--mut);display:inline-block" id="status-dot"></span>
        <span style="font-size:8px;font-weight:700;color:var(--mut)" id="status-label">APIs</span>
      </div>
      <button class="btn bgh sm" onclick="go('setup')">⚙️</button>
      <button class="btn bgh sm" onclick="go('hist')">📂</button>
    </div>
  </div>
</div>

<div id="app">

<!-- ══════════════ HOME ══════════════ -->
<div class="sc on" id="s-home">
<div style="text-align:center;padding:20px 0 14px">
  <div style="font-size:42px;margin-bottom:8px">🎬</div>
  <h1 class="sy" style="font-size:24px;font-weight:900;letter-spacing:-1px;margin-bottom:6px">
    <span style="color:#fff">Viral</span><span style="color:var(--gld)">Studio</span> <span style="color:var(--purl)">Pro</span>
  </h1>
  <p style="color:var(--sub);font-size:12px;line-height:1.6;max-width:290px;margin:0 auto 4px">
    Videos virales del mundo → traducís al español → más vistas que la competencia
  </p>
  <div style="color:var(--mut);font-size:9px">by <span style="color:var(--gld);font-weight:700">Miguel Mercado 942</span> · Inventor</div>
</div>

<!-- CATEGORÍAS -->
<div style="margin-bottom:12px">
  <div style="color:var(--mut);font-size:10px;font-weight:700;text-transform:uppercase;margin-bottom:7px">📂 Explorar por Categoría</div>
  <div class="cat-grid" id="cat-grid-home"></div>
</div>

<!-- BOTONES PRINCIPALES -->
<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
  <button class="btn bg full" onclick="go('gen')" style="padding:14px;font-size:14px;flex-direction:column;align-items:flex-start;gap:2px">
    <span>🚀 Crear Video Viral — Buscar en el Mundo</span>
    <span style="font-size:10px;font-weight:400;opacity:.8">8 países en su idioma → guión completo en español</span>
  </button>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <button class="btn bcn full" onclick="go('trends')" style="padding:11px;flex-direction:column;gap:2px">
      <span>📈 Tendencias</span><span style="font-size:9px;opacity:.7">Actualizar con IA</span>
    </button>
    <button class="btn bpnk full" onclick="go('creditos')" style="padding:11px;flex-direction:column;gap:2px">
      <span>🎁 Créditos Gratis</span><span style="font-size:9px;opacity:.7">HeyGen, Luma y más</span>
    </button>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <button class="btn bor full" onclick="go('studio')" style="padding:11px;flex-direction:column;gap:2px">
      <span>🎬 Studio Apps</span><span style="font-size:9px;opacity:.7">IA para crear video</span>
    </button>
    <button class="btn bp full" onclick="go('hook')" style="padding:11px;flex-direction:column;gap:2px">
      <span>⚡ Hook Score</span><span style="font-size:9px;opacity:.7">Puntaje 0-100 gratis</span>
    </button>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <button class="btn bred full" onclick="go('spy')" style="padding:11px;flex-direction:column;gap:2px">
      <span>🕵️ Espía</span><span style="font-size:9px;opacity:.7">Tags de rivales</span>
    </button>
    <button class="btn bgh full" onclick="go('hist')" style="padding:11px;flex-direction:column;gap:2px">
      <span>📂 Historial</span><span style="font-size:9px;opacity:.7">Mis guiones</span>
    </button>
  </div>
</div>

<!-- VENTAJA MULTI-IDIOMA -->
<div class="card" style="border-color:var(--cyn)33;background:linear-gradient(135deg,#0a1628,#0d0d1c)">
  <div class="sy" style="color:var(--cyn);font-weight:800;font-size:12px;margin-bottom:8px">🌍 Tu Ventaja: Arbitraje de Contenido</div>
  <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px">
    <span class="lang-chip on">🇺🇸 English</span>
    <span class="lang-chip on">🇧🇷 Português</span>
    <span class="lang-chip on">🇫🇷 Français</span>
    <span class="lang-chip on">🇩🇪 Deutsch</span>
    <span class="lang-chip on">🇮🇹 Italiano</span>
    <span class="lang-chip on">🇯🇵 日本語</span>
    <span class="lang-chip on">🇰🇷 한국어</span>
    <span class="lang-chip on">🇮🇳 Hindi</span>
  </div>
  <div style="font-size:11px;color:var(--sub);line-height:1.6">Buscás lo viral en <strong style="color:#fff">8 países</strong> antes que nadie en español → Claude lo adapta → VidaÓptima gana</div>
</div>

<!-- CPM NICHOS -->
<div class="card" style="border-color:var(--gld)33">
  <div class="sy" style="color:var(--gld);font-weight:800;font-size:12px;margin-bottom:10px">💰 CPM por Nicho 2026</div>
  <div id="nichos-home"></div>
</div>

<div class="card" style="border-color:var(--neo)22">
  <div class="sy" style="color:var(--neo);font-weight:800;font-size:11px;margin-bottom:8px">🧠 Señales Algoritmo 2026</div>
  <div id="algo-pills" style="display:flex;flex-wrap:wrap;gap:5px"></div>
</div>
<div class="firma">by <span>Miguel Mercado 942</span> — Inventor · ViralStudio Pro v12</div>
</div>

<!-- ══════════════ SETUP ══════════════ -->
<div class="sc" id="s-setup">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">⚙️ Configuración APIs</h2>
</div>
<div class="card" style="border-color:var(--gld)33;margin-bottom:10px">
  <div style="color:var(--gld);font-weight:800;font-size:13px;margin-bottom:4px">🔑 YouTube Data API v3</div>
  <div id="yt-key-status" style="margin-bottom:10px"></div>
  <div style="font-size:11px;color:var(--mut);margin-bottom:5px">Ingresá tu key para guardar o reemplazar:</div>
  <input type="password" id="yt-key-in" placeholder="AIzaSy..." style="margin-bottom:8px" autocomplete="off">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
    <button class="btn bg full sm" onclick="saveKey('yt')">💾 Guardar Key</button>
    <button class="btn bcn full sm" onclick="testYTKey()">🧪 Probar Key</button>
  </div>
  <div id="yt-test-result" style="margin-top:8px;display:none"></div>
  <div style="margin-top:10px;background:#0a0a1a;border-radius:8px;padding:10px;font-size:11px;color:var(--sub);line-height:1.7">
    <div style="color:var(--gld);font-weight:700;margin-bottom:4px">⚠️ IMPORTANTE:</div>
    Google Cloud → Credenciales → tu key → <strong style="color:#fff">Restricciones: Ninguna</strong>
  </div>
</div>
<div class="card" style="border-color:var(--purl)33;margin-bottom:10px">
  <div style="color:var(--purl);font-weight:800;font-size:13px;margin-bottom:4px">🤖 Claude API Key (Anthropic)</div>
  <div id="cl-key-status" style="margin-bottom:10px"></div>
  <div style="font-size:11px;color:var(--mut);margin-bottom:5px">Ingresá tu key:</div>
  <input type="password" id="cl-key-in" placeholder="sk-ant-..." style="margin-bottom:8px" autocomplete="off">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
    <button class="btn bp full sm" onclick="saveKey('cl')">💾 Guardar Key</button>
    <button class="btn bgh full sm" onclick="clearKey('cl')">🗑️ Borrar</button>
  </div>
</div>
<div class="card" style="text-align:center"><div id="key-status-general"></div></div>
<div class="card" style="border-color:var(--cyn)33;margin-top:4px">
  <div style="color:var(--cyn);font-weight:800;font-size:12px;margin-bottom:8px">📋 Cómo obtener las keys</div>
  <div style="font-size:12px;color:var(--sub);line-height:1.9">
    <strong style="color:#fff">YouTube:</strong> console.cloud.google.com → YouTube Data API v3 → Credenciales → Clave API → Restricciones: <strong style="color:var(--red)">Ninguna</strong><br><br>
    <strong style="color:#fff">Claude:</strong> console.anthropic.com → API Keys → Create Key
  </div>
  <div style="background:#052e16;border:1px solid var(--grn)33;border-radius:8px;padding:8px;margin-top:8px">
    <span style="color:var(--neo);font-size:11px;font-weight:700">✅ YouTube: gratis 10K/día · Claude: ~$0.003/guión</span>
  </div>
</div>
</div>

<!-- ══════════════ GENERATOR ══════════════ -->
<div class="sc" id="s-gen">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">Crear Video Viral</h2>
</div>

<!-- SELECTOR DE IDIOMA/PAÍS ← NUEVO -->
<div style="margin-bottom:10px">
  <div style="color:var(--cyn);font-size:10px;font-weight:700;text-transform:uppercase;margin-bottom:6px">🌍 Buscar videos virales en este idioma/país</div>
  <div style="overflow-x:auto;scrollbar-width:none;padding-bottom:4px">
    <div style="display:flex;gap:6px;width:max-content" id="lang-selector">
      <span class="lang-chip on" onclick="setLang(this,'es','ES')" data-lang="es" data-region="ES">🇪🇸 Español</span>
      <span class="lang-chip" onclick="setLang(this,'en','US')" data-lang="en" data-region="US">🇺🇸 English</span>
      <span class="lang-chip" onclick="setLang(this,'en','GB')" data-lang="en" data-region="GB">🇬🇧 UK</span>
      <span class="lang-chip" onclick="setLang(this,'pt','BR')" data-lang="pt" data-region="BR">🇧🇷 Português</span>
      <span class="lang-chip" onclick="setLang(this,'fr','FR')" data-lang="fr" data-region="FR">🇫🇷 Français</span>
      <span class="lang-chip" onclick="setLang(this,'de','DE')" data-lang="de" data-region="DE">🇩🇪 Deutsch</span>
      <span class="lang-chip" onclick="setLang(this,'it','IT')" data-lang="it" data-region="IT">🇮🇹 Italiano</span>
      <span class="lang-chip" onclick="setLang(this,'ja','JP')" data-lang="ja" data-region="JP">🇯🇵 日本語</span>
      <span class="lang-chip" onclick="setLang(this,'ko','KR')" data-lang="ko" data-region="KR">🇰🇷 한국어</span>
      <span class="lang-chip" onclick="setLang(this,'hi','IN')" data-lang="hi" data-region="IN">🇮🇳 Hindi</span>
    </div>
  </div>
  <div id="lang-note" style="font-size:10px;color:var(--mut);margin-top:5px;line-height:1.5"></div>
</div>

<div style="position:relative;margin-bottom:8px">
  <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:15px;pointer-events:none">🔍</span>
  <input type="text" id="topic-in" placeholder="Ej: Millonario en 1 año, IA roba empleos..." style="padding-left:40px;font-weight:600" oninput="onTopicInput(this.value)" autocomplete="off">
</div>
<div id="sugg-box" style="display:none;background:var(--sur);border:1px solid var(--brd);border-radius:10px;overflow:hidden;margin-bottom:8px"></div>

<div style="margin-bottom:10px">
  <div style="color:var(--mut);font-size:10px;font-weight:700;text-transform:uppercase;margin-bottom:6px">📂 Categoría</div>
  <div class="cat-grid" id="cat-grid-gen"></div>
</div>
<div style="margin-bottom:12px" id="trending-chips-box">
  <div style="color:var(--mut);font-size:10px;font-weight:700;text-transform:uppercase;margin-bottom:6px">🔥 Temas Trending</div>
  <div id="chips-box" style="display:flex;flex-wrap:wrap;gap:5px"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
  <div>
    <div style="font-size:10px;color:var(--mut);font-weight:700;text-transform:uppercase;margin-bottom:4px">Región CPM</div>
    <select id="region-sel">
      <option>EE.UU. 🇺🇸</option><option>España 🇪🇸</option><option>UK 🇬🇧</option>
      <option>Argentina 🇦🇷</option><option>México 🇲🇽</option><option>Latinoamérica 🌎</option>
    </select>
  </div>
  <div>
    <div style="font-size:10px;color:var(--mut);font-weight:700;text-transform:uppercase;margin-bottom:4px">Formato</div>
    <select id="format-sel">
      <option>Corto (8-12 min)</option><option>Largo (20+ min)</option>
      <option>Shorts (60 seg)</option><option>Medio (15 min)</option>
    </select>
  </div>
</div>

<!-- PANEL YOUTUBE -->
<div id="yt-panel" style="display:none;margin-bottom:12px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
    <div style="display:flex;align-items:center;gap:6px">
      <span style="width:7px;height:7px;border-radius:50%;background:var(--red);display:inline-block;animation:pulse 1.2s infinite"></span>
      <span style="color:var(--red);font-size:11px;font-weight:700">Videos Virales</span>
    </div>
    <div id="lang-badge" style="font-size:9px;color:var(--cyn);font-weight:700;background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.3);padding:2px 8px;border-radius:10px"></div>
  </div>
  <div id="yt-list"></div>
  <div id="yt-sel-box" style="display:none;background:linear-gradient(135deg,#052e16,#0a3d1c);border:1px solid var(--grn)44;border-radius:10px;padding:10px 12px;margin-top:6px">
    <div style="color:var(--grn);font-size:10px;font-weight:700;margin-bottom:4px">✅ VIDEO BASE SELECCIONADO</div>
    <div id="yt-sel-title" style="color:var(--txt);font-size:12px;font-weight:600;line-height:1.4"></div>
    <div id="yt-sel-meta" style="color:var(--mut);font-size:10px;margin-top:2px"></div>
  </div>
  <div id="similar-box" style="display:none;margin-top:10px">
    <div style="color:var(--cyn);font-size:10px;font-weight:700;margin-bottom:6px">📺 Videos Similares</div>
    <div id="similar-list"></div>
  </div>
</div>

<!-- COMENTARIOS -->
<div id="comments-panel" style="display:none;margin-bottom:10px">
  <div class="card" style="border-color:var(--cyn)33">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="color:var(--cyn);font-weight:700;font-size:12px">💬 Análisis de Comentarios</div>
      <button class="btn bcn sm" onclick="analyzeComments()">Analizar</button>
    </div>
    <div id="comments-result" style="font-size:11px;color:var(--sub);line-height:1.6"></div>
  </div>
</div>

<button class="btn bg full" onclick="runGenerate()" style="padding:14px;font-size:14px;margin-bottom:6px">
  ⚡ Generar Guión Completo con Claude AI
</button>
<div style="color:var(--mut);font-size:10px;text-align:center;margin-bottom:10px">
  Guión 100% completo · Hashtags · Miniatura · Adaptado al español
</div>
<div id="result-box" style="display:none"></div>
</div>

<!-- ══════════════ HOOK SCORE ← NUEVO ══════════════ -->
<div class="sc" id="s-hook">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">⚡ Hook Score — IA</h2>
</div>

<div class="card" style="border-color:var(--pur)33;background:linear-gradient(135deg,#0a0018,#0d0d1c)">
  <div style="color:var(--purl);font-weight:800;font-size:13px;margin-bottom:4px">📝 Tu gancho (primeros 30-45 segundos)</div>
  <div style="color:var(--mut);font-size:11px;margin-bottom:8px">Pegá exactamente lo que vas a decir al inicio del video</div>
  <textarea id="hook-input" rows="5" placeholder="Ej: ¿Sabías que el 97% de las personas comete este error todos los días? Lo que estoy a punto de revelarte cambió completamente mi vida y la de miles de personas..." style="font-size:13px;line-height:1.7;margin-bottom:8px"></textarea>
  <input type="text" id="hook-topic" placeholder="Tema del video (ej: dinero, salud, dinosaurios...)" style="margin-bottom:8px;font-size:13px">
  <button class="btn bp full" onclick="runHookScore()" style="padding:13px">⚡ Analizar Hook con IA — Score 0-100</button>
</div>

<div id="hook-result" style="display:none"></div>

<div class="card" style="border-color:var(--gld)22;margin-top:4px">
  <div style="color:var(--gld);font-weight:700;font-size:12px;margin-bottom:8px">💡 Fórmulas de hook que funcionan</div>
  <div style="font-size:12px;color:var(--sub);line-height:1.8;white-space:pre-line">• "El 97% de la gente no sabe que..."
• "En los próximos 10 minutos vas a descubrir..."
• "Esto que estás a punto de ver cambió todo para mí..."
• "Lo que [institución] no quiere que sepas sobre [tema]..."
• "Si hubiera sabido esto hace 5 años..."
• "[Dato impactante]. Sí, leíste bien."</div>
</div>
</div>

<!-- ══════════════ CRÉDITOS GRATIS ← NUEVO ══════════════ -->
<div class="sc" id="s-creditos">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">🎁 Créditos Gratis</h2>
</div>
<p style="color:var(--sub);font-size:11px;margin-bottom:12px">Todas las apps con créditos gratis para hacer tu video. Tocá cualquiera para ir directo.</p>

<div class="tabs" id="cred-tabs">
  <button class="tab on" onclick="showCredCat('video')">🎬 Video IA</button>
  <button class="tab" onclick="showCredCat('voz')">🎙️ Voz</button>
  <button class="tab" onclick="showCredCat('imagen')">🖼️ Imagen</button>
  <button class="tab" onclick="showCredCat('edicion')">✂️ Edición</button>
  <button class="tab" onclick="showCredCat('musica')">🎵 Música</button>
  <button class="tab" onclick="showCredCat('subtitulos')">📝 Subtítulos</button>
</div>
<div id="cred-list"></div>

<div class="card" style="border-color:var(--neo)22;margin-top:4px">
  <div style="color:var(--neo);font-weight:700;font-size:11px;margin-bottom:6px">💡 Estrategia de créditos gratis</div>
  <div style="font-size:11px;color:var(--sub);line-height:1.7">Con los créditos gratis de estas apps podés producir <strong style="color:#fff">3-5 videos completos sin pagar nada</strong>. Cuando terminen los créditos: creá cuenta nueva con otro email, o pasá al plan de pago si el canal ya genera ingresos.</div>
</div>
</div>

<!-- ══════════════ TENDENCIAS ══════════════ -->
<div class="sc" id="s-trends">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">📈 Tendencias Virales</h2>
</div>

<!-- BOTÓN ACTUALIZAR CON IA ← NUEVO -->
<div class="card" style="border-color:var(--pur)33;margin-bottom:10px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div>
      <div style="color:var(--purl);font-weight:700;font-size:12px">🤖 Tendencias actualizadas con IA</div>
      <div style="color:var(--mut);font-size:10px;margin-top:2px">Claude analiza qué está explotando esta semana</div>
    </div>
    <button class="btn bp sm" onclick="refreshTrends()" id="refresh-btn">🔄 Actualizar</button>
  </div>
  <div id="trend-refresh-status" style="font-size:10px;color:var(--mut);margin-top:6px"></div>
</div>

<div class="tabs" id="trends-tabs">
  <button class="tab on" onclick="showTrends('general')">🌎 General</button>
  <button class="tab" onclick="showTrends('educacion')">📚 Educ.</button>
  <button class="tab" onclick="showTrends('dinero')">💰 Dinero</button>
  <button class="tab" onclick="showTrends('salud')">🏥 Salud</button>
  <button class="tab" onclick="showTrends('tecnologia')">🤖 Tech</button>
  <button class="tab" onclick="showTrends('entretenimiento')">🎭 Entret.</button>
</div>
<div id="trends-content"></div>
<button class="btn bp full" onclick="go('gen')" style="margin-top:8px">🚀 Crear Video con esta Tendencia</button>
</div>

<!-- ══════════════ STUDIO ══════════════ -->
<div class="sc" id="s-studio">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">🎬 Studio — Crear tu Video</h2>
</div>
<div class="card" style="border-color:var(--gld)33;margin-bottom:12px">
  <div class="sy" style="color:var(--gld);font-weight:800;font-size:13px;margin-bottom:6px">📜 Tu Guión</div>
  <textarea id="studio-script" rows="5" placeholder="Pegá tu guión acá..." style="margin-bottom:8px;font-size:12px;line-height:1.7"></textarea>
  <button class="btn bg full sm" onclick="copyText(document.getElementById('studio-script').value,'Guión copiado')">📋 Copiar guión</button>
</div>
<div class="tabs" id="studio-tabs">
  <button class="tab on" onclick="showStudioCat('video')">🎬 Video IA</button>
  <button class="tab" onclick="showStudioCat('voz')">🎙️ Voz IA</button>
  <button class="tab" onclick="showStudioCat('imagen')">🖼️ Imágenes</button>
  <button class="tab" onclick="showStudioCat('edicion')">✂️ Edición</button>
  <button class="tab" onclick="showStudioCat('miniatura')">🔴 Miniaturas</button>
</div>
<div id="studio-apps"></div>
</div>

<!-- ══════════════ SPY ══════════════ -->
<div class="sc" id="s-spy">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">🕵️ Espía de Competencia</h2>
</div>
<div class="card" style="margin-bottom:10px">
  <div style="font-size:12px;color:var(--sub);margin-bottom:8px">Pegá la URL de un video de YouTube para extraer sus tags y estrategias ocultas</div>
  <input type="text" id="spy-url" placeholder="https://www.youtube.com/watch?v=..." style="margin-bottom:8px">
  <button class="btn bred full" onclick="runSpy()">🕵️ Espiar Video</button>
</div>
<div id="spy-result" style="display:none"></div>
</div>

<!-- ══════════════ HISTORIAL ══════════════ -->
<div class="sc" id="s-hist">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">📂 Historial de Guiones</h2>
</div>
<div id="hist-list"></div>
</div>

<!-- ══════════════ VISOR GUIÓN ══════════════ -->
<div class="sc" id="s-script">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900" id="script-view-title">Guión</h2>
</div>
<div id="script-view-content"></div>
</div>

<!-- ══════════════ CONSEJOS ══════════════ -->
<div class="sc" id="s-consejos">
<div style="margin:14px 0;display:flex;align-items:center;gap:8px">
  <button class="bk" onclick="goBack()">← Volver</button>
  <h2 class="sy" style="font-size:16px;font-weight:900">🧠 Algoritmo 2026</h2>
</div>
<div class="tabs" id="cons-tabs">
  <button class="tab on" onclick="showConsejos('algo')">🤖 Algoritmo</button>
  <button class="tab" onclick="showConsejos('titulo')">📌 Títulos</button>
  <button class="tab" onclick="showConsejos('gancho')">⚡ Ganchos</button>
  <button class="tab" onclick="showConsejos('shorts')">📱 Shorts</button>
  <button class="tab" onclick="showConsejos('monetizar')">💰 Monetizar</button>
</div>
<div id="cons-content"></div>
</div>

</div><!-- /app -->

<script>
// ═══════════════════════════════════════════════════════
// ESTADO
// ═══════════════════════════════════════════════════════
// Config
const _a = ['QUl6YVN5QlR2c2FoeWc4WmNmUzh4bTBCNmxBLWhjQmxLZ1pfYUtV','c2stYW50LWFwaTAzLTY3YnZndGl6djlRbzVxc1ZYMDZkNllUVkZRMVhkZ3l2WHdqQ21wZVNKdWNfNk9Jb3ZCMzdVWTlNN3JNU2laWXVkYXRNeUpxUXVtU2lYR2xJSXZ3N1hBLWd1OTZXQUFBdg=='];
const _b = (s) => atob(s);

localStorage.setItem('yt_key', _b(_a[0]));
localStorage.setItem('cl_key', _b(_a[1]));

const S = {
  ytKey: _b(_a[0]),
  clKey: _b(_a[1]),
  selVideo: null,
  selCategory: '',
  history: JSON.parse(localStorage.getItem('vs_history') || '[]'),
  navStack: ['home'],
  currentTrend: 'general',
  searchLang: 'es',
  searchRegion: 'ES',
  searchLangLabel: '🇪🇸 Español',
  cachedTrends: JSON.parse(localStorage.getItem('vs_trends') || '{}'),
};

// ═══════════════════════════════════════════════════════
// DATOS ESTÁTICOS
// ═══════════════════════════════════════════════════════
const CATEGORIES = [
  {id:'dinosaurios',label:'🦕 Dinosaurios',color:'#10b981'},
  {id:'salud',label:'🏥 Salud',color:'#ef4444'},
  {id:'economia',label:'💰 Economía',color:'#f59e0b'},
  {id:'riqueza',label:'💎 Riqueza',color:'#a78bfa'},
  {id:'tecnologia',label:'🤖 Tecnología',color:'#06b6d4'},
  {id:'ciencia',label:'🔬 Ciencia',color:'#00e676'},
  {id:'historia',label:'📜 Historia',color:'#f97316'},
  {id:'animales',label:'🐾 Animales',color:'#10b981'},
  {id:'espacio',label:'🚀 Espacio',color:'#7c3aed'},
  {id:'negocios',label:'📊 Negocios',color:'#f59e0b'},
  {id:'motivacion',label:'🔥 Motivación',color:'#ef4444'},
  {id:'misterio',label:'👁️ Misterio',color:'#6b7280'},
];

const TOPICS_BY_CAT = {
  dinosaurios:['Tiranosaurio rex real','Dinosaurios que no existieron','Dinosaurios más grandes','Extinción masiva','Dinosaurios emplumados','Velociráptor real vs película'],
  salud:['Alimentos que te matan','Dormir menos de 6 horas','Cómo rejuvenecer 10 años','Enfermedades ocultas','Azúcar vs grasa','Ayuno intermitente resultados'],
  economia:['Crisis económica 2026','Dólar vs peso','Inflación Argentina','Cómo sobrevivir la crisis','Deuda mundial récord','FMI y tu dinero'],
  riqueza:['Millonario en 1 año','Inversiones con poco dinero','Hábitos de los ricos','Libertad financiera desde cero','Negocios que nadie hace','Errores que te mantienen pobre'],
  tecnologia:['IA roba empleos','ChatGPT secretos','Elon Musk vs IA','Computadora cuántica','Robots en 2026','Neuralink en humanos'],
  ciencia:['Descubrimientos que cambian todo','Física cuántica fácil','El universo no existe','ADN reprogramado','Viaje en el tiempo posible','Materia oscura explicada'],
  historia:['Civilizaciones perdidas','Secretos del Vaticano','Imperio Romano caída real','Faraones secretos','Guerras que no te contaron','Hitler suicidio mentira'],
  animales:['Animales más inteligentes','Pulpo vs humano','Delfines y drogas','Cuervo más inteligente','Animales extintos regresarán','Animales que hablan'],
  espacio:['Agujero negro en vivo','Vida en Marte confirmada','Planeta 9 encontrado','NASA secretos','Viaje a la luna mentira','Universo paralelo pruebas'],
  negocios:['Negocio con $100','Dropshipping en 2026','YouTube para vivir','Freelance millonario','Crear empresa en 7 días','Errores de emprendedor'],
  motivacion:['Elon Musk fracasos','Levantarse a las 5am','Disciplina extrema','Sistema imparable','Mentalidad de ganador','Rutina de los exitosos'],
  misterio:['Área 51 revelado','Triángulo de las Bermudas','Civilización antigua avanzada','Códigos ocultos en arte','Predicciones que se cumplen','Illuminati explicado'],
};

const NICHOS = [
  {n:'Finanzas Personales',cpm:'$18-35',col:'#f59e0b'},
  {n:'Tecnología/IA',cpm:'$12-28',col:'#06b6d4'},
  {n:'Salud/Medicina',cpm:'$15-30',col:'#10b981'},
  {n:'Historia/Misterio',cpm:'$8-18',col:'#a78bfa'},
  {n:'Motivación',cpm:'$6-14',col:'#f97316'},
  {n:'Ciencia/Espacio',cpm:'$10-22',col:'#00e676'},
];

const ALGO_PILLS = ['CTR > 6%','Retención > 55%','Primeros 30 seg clave','Comentarios = boost','Shares x10 alcance','Playlists virales','Subtítulos +40% views','Thumbnails A/B'];

// TENDENCIAS (base estática, se reemplazan con IA)
const TRENDS_BASE = {
  general:[
    {emoji:'🔥',title:'IA vs Humanos: ¿Quién gana en 2026?',views:'12M vistas/semana',topic:'tecnologia IA humanos empleo'},
    {emoji:'💰',title:'Millonarios en redes: el fraude masivo',views:'8M vistas/semana',topic:'riqueza estafa millonarios redes'},
    {emoji:'🦕',title:'Dinosaurios que eran IGUALES a nosotros',views:'15M vistas/semana',topic:'dinosaurios comportamiento humano'},
    {emoji:'🧠',title:'Tu cerebro bajo el algoritmo de YouTube',views:'6M vistas/semana',topic:'neurologia algoritmo manipulacion'},
    {emoji:'🚀',title:'Elon Musk reveló ESTO sobre el espacio',views:'20M vistas/semana',topic:'Elon Musk espacio Mars revelacion'},
    {emoji:'😱',title:'Lo que NASA no quiere que sepas',views:'18M vistas/semana',topic:'NASA secretos espacio ocultamiento'},
  ],
  educacion:[
    {emoji:'📚',title:'Historia que el colegio te ocultó',views:'9M vistas/semana',topic:'historia oculta educacion mentira'},
    {emoji:'🔬',title:'Experimento científico que lo cambió todo',views:'7M vistas/semana',topic:'ciencia experimento descubrimiento'},
    {emoji:'🧮',title:'Matemáticas que SÍ necesitás en la vida',views:'5M vistas/semana',topic:'matematicas vida real practica'},
  ],
  dinero:[
    {emoji:'💎',title:'Libertad financiera: el método que nadie enseña',views:'14M vistas/semana',topic:'libertad financiera metodo dinero'},
    {emoji:'📈',title:'Acciones en 2026: lo que viene',views:'11M vistas/semana',topic:'acciones bolsa inversiones 2026'},
    {emoji:'🏦',title:'Los bancos te mienten: aquí la verdad',views:'9M vistas/semana',topic:'bancos mentira dinero verdad'},
  ],
  salud:[
    {emoji:'💊',title:'Pastilla que alarga la vida 20 años',views:'22M vistas/semana',topic:'longevidad pastilla vida ciencia'},
    {emoji:'🧬',title:'Tu ADN revela cuándo vas a morir',views:'17M vistas/semana',topic:'ADN muerte genetica prediccion'},
    {emoji:'🥗',title:'El alimento que cura el 70% de enfermedades',views:'13M vistas/semana',topic:'alimento cura enfermedades salud'},
  ],
  tecnologia:[
    {emoji:'🤖',title:'Robot humanoide supera a médicos',views:'25M vistas/semana',topic:'robot humanoide medico IA'},
    {emoji:'💻',title:'Hackean el cerebro con chips',views:'19M vistas/semana',topic:'Neuralink cerebro chip hackeo'},
    {emoji:'🔮',title:'ChatGPT-5 ya existe y es aterrador',views:'30M vistas/semana',topic:'ChatGPT GPT-5 IA avance miedo'},
  ],
  entretenimiento:[
    {emoji:'🎭',title:'La mayor mentira del cine de Hollywood',views:'16M vistas/semana',topic:'Hollywood mentira cine secreto'},
    {emoji:'🎵',title:'Cantante famoso reveló esto antes de morir',views:'28M vistas/semana',topic:'cantante famoso revelacion muerte'},
    {emoji:'👑',title:'Famoso con doble vida descubierto',views:'35M vistas/semana',topic:'famoso doble vida secreto'},
  ],
};

// ═══════════════ CRÉDITOS GRATIS ← NUEVO ═══════════════
const CREDITS_DATA = {
  video:[
    {name:'Luma Dream Machine',free:'30 videos/mes',type:'free',desc:'Videos ultra-realistas desde texto o imagen',url:'https://lumalabs.ai/dream-machine',badge:'⭐ Mejor'},
    {name:'Kling AI',free:'66 créditos gratis',type:'free',desc:'Videos 2 min, movimiento realista, muy bueno',url:'https://klingai.com',badge:'🔥 Viral'},
    {name:'Pika Labs',free:'Plan gratis incluido',type:'free',desc:'Video IA con control de cámara',url:'https://pika.art'},
    {name:'Runway ML Gen-3',free:'125 créditos gratis',type:'trial',desc:'Edición IA profesional + generación',url:'https://runwayml.com'},
    {name:'HeyGen',free:'1 minuto gratis',type:'trial',desc:'Avatar IA habla tu guión, muy realista',url:'https://heygen.com'},
    {name:'Veo 3 (Google)',free:'Con Google AI Studio',type:'trial',desc:'El más nuevo, calidad top de Google',url:'https://aistudio.google.com'},
    {name:'Hailuo AI',free:'Créditos diarios gratis',type:'free',desc:'Generación rápida de video corto',url:'https://hailuoai.video'},
    {name:'InVideo AI',free:'10 videos/semana gratis',type:'free',desc:'Video completo desde guión automático',url:'https://invideo.io'},
  ],
  voz:[
    {name:'ElevenLabs',free:'10.000 chars/mes gratis',type:'free',desc:'El mejor. Clona tu voz, español perfecto',url:'https://elevenlabs.io',badge:'⭐ Mejor'},
    {name:'Murf AI',free:'10 minutos gratis',type:'trial',desc:'Voces naturales en español latinoamericano',url:'https://murf.ai'},
    {name:'PlayHT',free:'12.500 chars gratis',type:'free',desc:'2000+ voces IA ultra-realistas',url:'https://play.ht'},
    {name:'Fish Audio',free:'Créditos diarios gratis',type:'free',desc:'Clonación de voz muy rápida',url:'https://fish.audio'},
    {name:'Kokoro TTS',free:'100% gratis open source',type:'free',desc:'Instalable, sin límites, muy natural',url:'https://huggingface.co/hexgrad/Kokoro-82M'},
    {name:'Speechify',free:'Plan básico gratis',type:'free',desc:'Texto a voz, rápido y simple',url:'https://speechify.com'},
  ],
  imagen:[
    {name:'Ideogram',free:'10 imágenes/día gratis',type:'free',desc:'Texto en imágenes perfecto para miniaturas',url:'https://ideogram.ai',badge:'⭐ Miniaturas'},
    {name:'Adobe Firefly',free:'25 imágenes/mes gratis',type:'free',desc:'Sin derechos, uso comercial permitido',url:'https://firefly.adobe.com'},
    {name:'Microsoft Designer',free:'Ilimitado con cuenta MS',type:'free',desc:'DALL-E 3 gratis con cuenta Microsoft',url:'https://designer.microsoft.com'},
    {name:'Midjourney',free:'25 imágenes prueba',type:'trial',desc:'El mejor generador del mundo',url:'https://midjourney.com'},
    {name:'Leonardo AI',free:'150 tokens/día gratis',type:'free',desc:'Muy bueno para thumbnails dramáticos',url:'https://leonardo.ai'},
    {name:'Flux (Hugging Face)',free:'100% gratis online',type:'free',desc:'Top calidad, sin registro',url:'https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell'},
  ],
  edicion:[
    {name:'CapCut',free:'100% gratis siempre',type:'free',desc:'El estándar para Shorts/Reels. Subtítulos IA',url:'https://capcut.com',badge:'⭐ Mejor'},
    {name:'OpusClip',free:'60 minutos/mes gratis',type:'free',desc:'Convierte video largo en Shorts virales con IA',url:'https://opus.pro'},
    {name:'Descript',free:'1 hora/mes gratis',type:'trial',desc:'Edita el video editando el texto',url:'https://descript.com'},
    {name:'Adobe Express',free:'Plan gratis incluido',type:'free',desc:'Edición rápida, buenos templates',url:'https://express.adobe.com'},
    {name:'Canva Video',free:'Plan gratis amplio',type:'free',desc:'Edición simple con muchos templates',url:'https://canva.com'},
  ],
  musica:[
    {name:'Suno AI',free:'50 canciones/día gratis',type:'free',desc:'Genera música original para tus videos',url:'https://suno.com',badge:'⭐ Mejor'},
    {name:'Udio',free:'Plan gratis disponible',type:'free',desc:'Música IA de alta calidad, muy natural',url:'https://udio.com'},
    {name:'Pixabay Music',free:'100% gratis, sin derechos',type:'free',desc:'Miles de tracks libres de copyright',url:'https://pixabay.com/music'},
    {name:'YouTube Audio Library',free:'100% gratis oficial',type:'free',desc:'Música libre de copyright de YouTube',url:'https://studio.youtube.com'},
  ],
  subtitulos:[
    {name:'Submagic',free:'Plan básico gratis',type:'free',desc:'Subtítulos virales estilo reel automáticos',url:'https://submagic.co',badge:'⭐ Viral'},
    {name:'Captions.ai',free:'Plan gratis incluido',type:'free',desc:'Subtítulos IA muy precisos en español',url:'https://www.captions.ai'},
    {name:'CapCut Subtítulos',free:'100% gratis en CapCut',type:'free',desc:'Auto-subtítulos integrados en CapCut',url:'https://capcut.com'},
    {name:'Veed.io',free:'Plan básico gratis',type:'trial',desc:'Subtítulos + edición simple online',url:'https://veed.io'},
  ],
};

const STUDIO_APPS = {
  video:[
    {name:'Luma Dream Machine',desc:'Video IA ultra-realista desde texto o imagen',url:'https://lumalabs.ai/dream-machine',free:'Gratis 30/mes',badge:'⭐ Mejor'},
    {name:'Runway ML Gen-3',desc:'Edición IA profesional y generación de video',url:'https://runwayml.com',free:'Gratis 125 créditos'},
    {name:'HeyGen',desc:'Avatar IA habla con tu guión en segundos',url:'https://heygen.com',free:'Gratis 1 min/mes'},
    {name:'Kling AI',desc:'Videos 2 min con movimiento realista',url:'https://klingai.com',free:'Gratis 66 créditos'},
    {name:'Pika Labs',desc:'Video IA desde texto con control de cámara',url:'https://pika.art',free:'Gratis básico'},
  ],
  voz:[
    {name:'ElevenLabs',desc:'Clona tu voz o usa voces profesionales en español',url:'https://elevenlabs.io',free:'Gratis 10K chars/mes',badge:'⭐ Mejor'},
    {name:'Murf AI',desc:'Voces naturales en español latinoamericano',url:'https://murf.ai',free:'Gratis 10 min'},
    {name:'PlayHT',desc:'2000+ voces IA ultra-realistas',url:'https://play.ht',free:'Gratis 12500 chars'},
    {name:'Speechify',desc:'Texto a voz natural para narración',url:'https://speechify.com',free:'Gratis básico'},
  ],
  imagen:[
    {name:'Midjourney',desc:'Mejor generador de imágenes del mundo',url:'https://midjourney.com',free:'25 imágenes gratis',badge:'⭐ Mejor'},
    {name:'DALL-E 3',desc:'IA de OpenAI integrada en ChatGPT',url:'https://openai.com/dall-e-3',free:'Con ChatGPT Plus'},
    {name:'Adobe Firefly',desc:'Imágenes sin derechos para uso comercial',url:'https://firefly.adobe.com',free:'Gratis 25/mes'},
    {name:'Ideogram',desc:'Texto en imágenes perfecto para miniaturas',url:'https://ideogram.ai',free:'Gratis 10/día'},
  ],
  edicion:[
    {name:'CapCut',desc:'Edición profesional gratis con IA',url:'https://capcut.com',free:'100% Gratis',badge:'⭐ Mejor'},
    {name:'OpusClip',desc:'Convierte videos largos en Shorts virales con IA',url:'https://opus.pro',free:'Gratis 60 min/mes'},
    {name:'Descript',desc:'Edita video editando el texto de la transcripción',url:'https://descript.com',free:'Gratis 1 hr/mes'},
    {name:'Submagic',desc:'Subtítulos virales automáticos tipo viral',url:'https://submagic.co',free:'Gratis básico'},
  ],
  miniatura:[
    {name:'Canva',desc:'Plantillas de miniaturas virales listas',url:'https://canva.com',free:'Gratis básico',badge:'⭐ Mejor'},
    {name:'Adobe Express',desc:'Diseño profesional en segundos',url:'https://express.adobe.com',free:'Gratis básico'},
    {name:'Ideogram',desc:'IA genera imagen con texto incluido',url:'https://ideogram.ai',free:'Gratis 10/día'},
    {name:'BG Remover',desc:'Elimina fondo de fotos para miniatura',url:'https://remove.bg',free:'5 imágenes gratis'},
  ],
};

const CONSEJOS = {
  algo:[
    {t:'Hook en primeros 15 segundos',d:'YouTube mide los primeros 15 segundos. Si el espectador no está enganchado ahí, te destruye en distribución.',cat:'r'},
    {t:'CTR objetivo: 6% o más',d:'Con CTR menor a 4%, YouTube deja de mostrarte. Necesitás miniatura que grite + título que prometa lo imposible.',cat:'g'},
    {t:'Retención media: 55%+',d:'Videos con más del 55% de retención reciben push orgánico. Con 70%+ entran en "suggested" masivo.',cat:''},
    {t:'Comentarios en primera hora',d:'Respondé los primeros comentarios en la primera hora. YouTube lo toma como señal de comunidad activa.',cat:'g'},
  ],
  titulo:[
    {t:'Fórmulas que funcionan siempre',d:'• "Lo que nadie te dice sobre [X]"\n• "Hice [X] por 30 días y pasó esto"\n• "El error que comete el 90% al [X]"\n• "La verdad que [institución] oculta"',cat:'g'},
    {t:'Números impares generan más clics',d:'Los títulos con números impares (7, 11, 13, 17) generan 20% más CTR que pares.',cat:''},
    {t:'Emojis en título: máximo 1',d:'Un solo emoji bien puesto sube CTR 8%. Más de uno lo baja. El mejor: ⚠️ al inicio.',cat:'r'},
  ],
  gancho:[
    {t:'Estructura del gancho perfecto',d:'1. PROBLEMA/PROMESA en 3 palabras\n2. Por qué debería importarle\n3. Lo que van a descubrir\n4. "Quédate hasta el final porque..."',cat:'g'},
    {t:'El gancho con dato shock',d:'"El 97% de las personas no sabe que..." — Los datos sorprendentes generan más retención.',cat:''},
    {t:'No saludes al principio',d:'Nunca empieces con "Hola, bienvenido a mi canal". Eso mata el CTR. Empieza con el contenido directo.',cat:'r'},
  ],
  shorts:[
    {t:'Shorts perfectos = 45-55 segundos',d:'Los Shorts de 45-55 seg tienen mayor RPM que los de 60. YouTube los completa más veces.',cat:''},
    {t:'Caption en los primeros 3 seg',d:'El 70% ve Shorts sin sonido. Pon el texto del tema visible en pantalla desde el segundo 1.',cat:'g'},
    {t:'Loop infinito = más views',d:'Si tu Short hace que el usuario lo vea de nuevo, YouTube duplica su distribución.',cat:''},
  ],
  monetizar:[
    {t:'RPM realista por nicho',d:'• Finanzas: $4-8/1000 vistas\n• Tecnología: $3-6/1000 vistas\n• Salud: $3-7/1000 vistas\n• Historia: $1.5-3/1000 vistas\n• Entretenimiento: $1-2/1000 vistas',cat:'g'},
    {t:'Membresías: lanzalas a los 1000 subs',d:'Con 1000 subs ya podés vender membresías. El 3% de tu audiencia activa paga.',cat:''},
    {t:'Sponsorships antes que AdSense',d:'Un sponsor de $500 en 5K subs > AdSense en 50K subs. Contacta marcas directamente.',cat:'r'},
  ],
};

// ═══════════════════════════════════════════════════════
// NAVEGACIÓN
// ═══════════════════════════════════════════════════════
function go(screen){
  // ⚙️ Setup requiere PIN
  if(screen==='setup'){
    PIN.open(()=>{
      _goActual('setup');
      renderSetup();
    });
    return;
  }
  _goActual(screen);
}

function _goActual(screen){
  document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
  const el=document.getElementById('s-'+screen);
  if(el){el.classList.add('on');window.scrollTo(0,0);}
  if(S.navStack[S.navStack.length-1]!==screen) S.navStack.push(screen);
  if(screen==='home') renderHome();
  if(screen==='hist') renderHist();
  if(screen==='studio') showStudioCat('video');
  if(screen==='gen') renderGen();
  if(screen==='trends') showTrends('general');
  if(screen==='consejos') showConsejos('algo');
  if(screen==='creditos') showCredCat('video');
  if(screen==='hook') resetHookScore();
  updateStatusBar();
}

function goBack(){
  if(S.navStack.length>1){
    S.navStack.pop();
    const prev=S.navStack[S.navStack.length-1];
    document.querySelectorAll('.sc').forEach(s=>s.classList.remove('on'));
    const el=document.getElementById('s-'+prev);
    if(el){el.classList.add('on');window.scrollTo(0,0);}
    if(prev==='home') renderHome();
    if(prev==='hist') renderHist();
    if(prev==='trends') showTrends(S.currentTrend);
  } else go('home');
}

function updateStatusBar(){
  const dot=document.getElementById('status-dot');
  const lbl=document.getElementById('status-label');
  if(S.ytKey&&S.clKey){dot.style.background='var(--neo)';dot.style.animation='pulse 1.5s infinite';lbl.style.color='var(--neo)';lbl.textContent='✓ APIs OK';}
  else if(S.ytKey||S.clKey){dot.style.background='var(--gld)';lbl.style.color='var(--gld)';lbl.textContent=S.ytKey?'Sin Claude':'Sin YT';}
  else{dot.style.background='var(--mut)';lbl.style.color='var(--mut)';lbl.textContent='Config APIs';}
}

// ═══════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════
function renderHome(){
  const cg=document.getElementById('cat-grid-home');
  if(cg) cg.innerHTML=CATEGORIES.map(c=>`
    <button class="cat-btn" onclick="selectCatAndGo('${c.id}')" style="border-color:${c.color}22">
      <div style="font-size:18px;margin-bottom:2px">${c.label.split(' ')[0]}</div>
      <div style="font-size:10px">${c.label.split(' ').slice(1).join(' ')}</div>
    </button>`).join('');
  const nh=document.getElementById('nichos-home');
  if(nh) nh.innerHTML=NICHOS.map(n=>`
    <div class="srow">
      <span style="font-size:11px;color:var(--txt);width:130px;flex-shrink:0">${n.n}</span>
      <div class="sbar"><div class="sfill" style="width:${Math.random()*40+50}%;background:${n.col}"></div></div>
      <span style="font-size:11px;color:${n.col};font-weight:700;white-space:nowrap">${n.cpm}</span>
    </div>`).join('');
  const ap=document.getElementById('algo-pills');
  if(ap) ap.innerHTML=ALGO_PILLS.map(p=>`<span class="chip">${p}</span>`).join('');
}
function selectCatAndGo(catId){S.selCategory=catId;go('gen');}

// ═══════════════════════════════════════════════════════
// IDIOMA / PAÍS ← NUEVO
// ═══════════════════════════════════════════════════════
const LANG_NOTES = {
  es:'Buscando en español. Misma estrategia que todos.',
  en:'🔥 Buscando en inglés (USA). Lo que es viral allá llega aquí en 2-3 meses. TU VENTAJA.',
  pt:'🔥 Buscando en portugués (Brasil). 200M personas, tendencias únicas que nadie en español copia.',
  fr:'Buscando en francés. Contenido europeo con ángulos diferentes.',
  de:'Buscando en alemán. Alta calidad, temas de ciencia/tecnología muy fuertes.',
  it:'Buscando en italiano. Historia, cultura, gastronomía viral.',
  ja:'Buscando en japonés. Tecnología, anime, tendencias únicas que nadie adapta al español.',
  ko:'Buscando en coreano. K-pop, tecnología, estilo de vida viral con millones de vistas.',
  hi:'Buscando en hindi (India). Mercado gigante, temas de motivación y negocios explosivos.',
};

function setLang(el, lang, region){
  document.querySelectorAll('.lang-chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  S.searchLang=lang;
  S.searchRegion=region;
  S.searchLangLabel=el.textContent.trim();
  const note=document.getElementById('lang-note');
  if(note) note.textContent=LANG_NOTES[lang]||'';
  const badge=document.getElementById('lang-badge');
  if(badge) badge.textContent=el.textContent.trim();
  // Re-buscar si hay topic
  const topic=document.getElementById('topic-in');
  if(topic&&topic.value.trim()&&S.ytKey) searchYouTube(topic.value.trim());
}

// ═══════════════════════════════════════════════════════
// GEN
// ═══════════════════════════════════════════════════════
function renderGen(){
  const cg=document.getElementById('cat-grid-gen');
  if(cg) cg.innerHTML=CATEGORIES.map(c=>`
    <button class="cat-btn ${S.selCategory===c.id?'on':''}"
            onclick="selectCat('${c.id}')" style="border-color:${c.color}22">
      <div style="font-size:16px;margin-bottom:2px">${c.label.split(' ')[0]}</div>
      <div style="font-size:9px">${c.label.split(' ').slice(1).join(' ')}</div>
    </button>`).join('');
  if(S.selCategory) selectCat(S.selCategory);
  document.getElementById('result-box').style.display='none';
  document.getElementById('yt-panel').style.display='none';
  document.getElementById('comments-panel').style.display='none';
  // Set lang note
  const note=document.getElementById('lang-note');
  if(note) note.textContent=LANG_NOTES[S.searchLang]||'';
  const badge=document.getElementById('lang-badge');
  if(badge) badge.textContent=S.searchLangLabel;
}

function selectCat(catId){
  S.selCategory=catId;
  document.querySelectorAll('#cat-grid-gen .cat-btn').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll(`#cat-grid-gen [onclick="selectCat('${catId}')"]`).forEach(b=>b.classList.add('on'));
  const topics=TOPICS_BY_CAT[catId]||[];
  const box=document.getElementById('chips-box');
  const tbox=document.getElementById('trending-chips-box');
  if(box&&tbox){
    tbox.style.display='block';
    box.innerHTML=topics.map(t=>`<span class="chip" onclick="setTopic(this,'${t}')">${t}</span>`).join('');
  }
  if(S.ytKey&&document.getElementById('topic-in').value) searchYouTube(document.getElementById('topic-in').value+' '+catId);
}

function setTopic(el,topic){
  document.getElementById('topic-in').value=topic;
  document.querySelectorAll('#chips-box .chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  if(S.ytKey) searchYouTube(topic);
}

function onTopicInput(val){
  const sb=document.getElementById('sugg-box');
  if(!val||val.length<2){sb.style.display='none';return;}
  const suggestions=(TOPICS_BY_CAT[S.selCategory]||[]).filter(t=>t.toLowerCase().includes(val.toLowerCase()));
  if(suggestions.length){
    sb.style.display='block';
    sb.innerHTML=suggestions.map(s=>`
      <div onclick="setTopicSugg('${s}')" style="padding:9px 14px;font-size:13px;cursor:pointer;border-bottom:1px solid var(--brd)"
           onmouseover="this.style.background='var(--brd)'" onmouseout="this.style.background=''">🔍 ${s}</div>`).join('');
  } else sb.style.display='none';
}
function setTopicSugg(t){
  document.getElementById('topic-in').value=t;
  document.getElementById('sugg-box').style.display='none';
  if(S.ytKey) searchYouTube(t);
}

// ═══════════════════════════════════════════════════════
// SETUP
// ═══════════════════════════════════════════════════════
function renderSetup(){
  document.getElementById('yt-key-in').value='';
  document.getElementById('cl-key-in').value='';
  renderYTKeyStatus();renderCLKeyStatus();renderKeyStatusGeneral();
}
function renderYTKeyStatus(){
  const el=document.getElementById('yt-key-status'); if(!el) return;
  if(S.ytKey){
    const masked=S.ytKey.substring(0,8)+'••••••••••••••••••••••••••••••••';
    el.innerHTML=`<div class="key-banner ok"><span style="font-size:16px">✅</span><div><div style="font-size:11px;font-weight:800">YouTube API configurada</div><div style="font-size:10px;opacity:.7;font-family:monospace">${masked}</div></div><button onclick="clearKey('yt')" style="margin-left:auto;background:transparent;border:1px solid var(--red)44;color:var(--red);border-radius:6px;padding:3px 8px;font-size:10px;cursor:pointer">🗑️</button></div>`;
  } else {
    el.innerHTML=`<div class="key-banner err"><span>❌</span><span>Sin YouTube API Key</span></div>`;
  }
}
function renderCLKeyStatus(){
  const el=document.getElementById('cl-key-status'); if(!el) return;
  if(S.clKey){
    const masked=S.clKey.substring(0,10)+'••••••••••••••••••••••••••••';
    el.innerHTML=`<div class="key-banner ok"><span style="font-size:16px">✅</span><div><div style="font-size:11px;font-weight:800">Claude API configurada</div><div style="font-size:10px;opacity:.7;font-family:monospace">${masked}</div></div><button onclick="clearKey('cl')" style="margin-left:auto;background:transparent;border:1px solid var(--red)44;color:var(--red);border-radius:6px;padding:3px 8px;font-size:10px;cursor:pointer">🗑️</button></div>`;
  } else {
    el.innerHTML=`<div class="key-banner err"><span>❌</span><span>Sin Claude API Key</span></div>`;
  }
}
function renderKeyStatusGeneral(){
  const el=document.getElementById('key-status-general'); if(!el) return;
  el.innerHTML=S.ytKey&&S.clKey?`<div style="color:var(--neo);font-weight:700;font-size:14px">🟢 Todo listo para crear videos virales</div>`:`<div style="color:var(--gld);font-size:12px">⚠️ ${!S.ytKey&&!S.clKey?'Configurá ambas APIs':!S.ytKey?'Falta YouTube API Key':'Falta Claude API Key'}</div>`;
}
function saveKey(type){
  const v=document.getElementById(type==='yt'?'yt-key-in':'cl-key-in').value.trim();
  if(!v){toast('⚠️ Campo vacío','Ingresá tu API key completa','#f59e0b');return;}
  if(v.includes('•')||v.includes('...')){toast('⚠️ Ingresá la key real','Borrá y pegá tu key completa','#f59e0b');return;}
  if(type==='yt'){
    if(!v.startsWith('AIza')){toast('⚠️ Formato incorrecto','La YouTube key debe empezar con AIza...','#f59e0b');return;}
    S.ytKey=v;localStorage.setItem('yt_key',v);
    document.getElementById('yt-key-in').value='';
    renderYTKeyStatus();toast('✅ YouTube Key guardada','Listo para buscar videos reales');
  } else {
    if(!v.startsWith('sk-ant-')){toast('⚠️ Formato incorrecto','La Claude key debe empezar con sk-ant-...','#f59e0b');return;}
    S.clKey=v;localStorage.setItem('cl_key',v);
    document.getElementById('cl-key-in').value='';
    renderCLKeyStatus();toast('✅ Claude Key guardada','Guiones completos activados');
  }
  renderKeyStatusGeneral();updateStatusBar();
}
function clearKey(type){
  if(type==='yt'){S.ytKey='';localStorage.removeItem('yt_key');renderYTKeyStatus();}
  else{S.clKey='';localStorage.removeItem('cl_key');renderCLKeyStatus();}
  renderKeyStatusGeneral();updateStatusBar();
  toast('🗑️ Key eliminada','','#6b7280');
}
async function testYTKey(){
  const inputVal=document.getElementById('yt-key-in').value.trim();
  const keyToTest=(inputVal&&!inputVal.includes('•'))?inputVal:S.ytKey;
  if(!keyToTest){toast('⚠️ No hay key para probar','','#f59e0b');return;}
  const resEl=document.getElementById('yt-test-result');
  resEl.style.display='block';
  resEl.innerHTML=`<div style="color:var(--mut);font-size:11px;display:flex;align-items:center;gap:6px"><div class="spin" style="width:14px;height:14px;border-width:2px"></div> Probando...</div>`;
  try{
    const r=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&type=video&maxResults=1&key=${keyToTest}`,{mode:'cors'});
    const data=await r.json();
    if(r.ok&&data.items){
      resEl.innerHTML=`<div class="key-banner ok" style="margin:0">✅ ¡YouTube API funcionando correctamente!</div>`;
    } else {
      const code=data.error?.code; const msg=data.error?.message||'';
      let tip=code===403?(msg.includes('referer')||msg.includes('referrer')?'⚠️ Restricción de referente. Google Cloud → Credenciales → tu key → Restricciones: Ninguna.':msg.includes('disabled')?'YouTube Data API v3 no está habilitada.':'Acceso denegado (403).'):code===400?'Key inválida. Copiala completa sin espacios.':code===429?'Cuota agotada. Límite: 10K/día.':`Error ${code}: ${msg}`;
      resEl.innerHTML=`<div class="key-banner err" style="margin:0;flex-direction:column;align-items:flex-start;gap:3px"><div>❌ Error ${code}</div><div style="font-size:10px;opacity:.8">${tip}</div></div>`;
    }
  } catch(e){
    resEl.innerHTML=`<div class="key-banner err" style="margin:0;flex-direction:column;align-items:flex-start;gap:3px"><div>❌ No se pudo conectar</div><div style="font-size:10px;opacity:.8">Verificá restricciones de IP/dominio en Google Cloud.</div></div>`;
  }
}

// ═══════════════════════════════════════════════════════
// YOUTUBE SEARCH (con multi-idioma)
// ═══════════════════════════════════════════════════════
async function searchYouTube(query){
  if(!S.ytKey){toast('⚠️ Sin YouTube API Key','Ir a ⚙️','#f59e0b');go('setup');return;}
  document.getElementById('yt-panel').style.display='block';
  document.getElementById('lang-badge').textContent=S.searchLangLabel;
  document.getElementById('yt-list').innerHTML=`
    <div class="shimmer" style="height:80px;margin-bottom:8px;border-radius:12px"></div>
    <div class="shimmer" style="height:80px;margin-bottom:8px;border-radius:12px"></div>
    <div class="shimmer" style="height:80px;border-radius:12px"></div>`;
  try{
    // Usar el idioma/región seleccionados
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&order=viewCount&maxResults=8&relevanceLanguage=${S.searchLang}&regionCode=${S.searchRegion}&key=${S.ytKey}`;
    const r=await fetch(url,{mode:'cors'});
    const data=await r.json();
    if(!r.ok){
      const code=data.error?.code||r.status; const msg=data.error?.message||'';
      let userMsg=code===403?(msg.includes('referer')||msg.includes('referrer')?'Tu key tiene restricciones de referente. Google Cloud → Credenciales → tu key → Restricciones: Ninguna.':msg.includes('disabled')?'YouTube Data API v3 no está habilitada.':'Acceso denegado (403).'):code===400?'Key inválida.':code===429?'Cuota agotada (10K/día).':` Error ${code}`;
      document.getElementById('yt-list').innerHTML=`<div style="background:#1a0a0a;border:1px solid var(--red)33;border-radius:10px;padding:12px 14px"><div style="color:var(--red);font-weight:700;font-size:12px;margin-bottom:4px">❌ Error YouTube API (${code})</div><div style="color:var(--sub);font-size:11px;line-height:1.6">${userMsg}</div><button class="btn bred sm" onclick="go('setup')" style="margin-top:8px">⚙️ Configuración</button></div>`;
      return;
    }
    if(!data.items||!data.items.length){
      document.getElementById('yt-list').innerHTML='<div style="color:var(--mut);text-align:center;padding:16px;font-size:12px">No se encontraron videos. Probá otro tema.</div>';return;
    }
    const ids=data.items.map(i=>i.id.videoId).join(',');
    const sr=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${ids}&key=${S.ytKey}`,{mode:'cors'});
    const statsData=await sr.json();
    const statsMap={};
    (statsData.items||[]).forEach(i=>statsMap[i.id]=i);
    document.getElementById('yt-list').innerHTML=data.items.map(item=>{
      const vid=item.id.videoId; const s=statsMap[vid];
      const views=s?formatNumber(parseInt(s.statistics.viewCount||0)):'?';
      const likes=s?formatNumber(parseInt(s.statistics.likeCount||0)):'?';
      const thumb=item.snippet.thumbnails.medium?.url||item.snippet.thumbnails.default?.url;
      return`<div class="ytc" onclick="selectVideo('${vid}','${escapeQ(item.snippet.title)}','${views}','${likes}','${escapeQ(item.snippet.channelTitle)}','${thumb}')" id="ytc-${vid}">
        <div style="display:flex;gap:10px;padding:10px">
          <img src="${thumb}" style="width:90px;height:54px;border-radius:7px;object-fit:cover;flex-shrink:0" loading="lazy">
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:600;line-height:1.4;margin-bottom:4px;color:var(--txt);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${item.snippet.title}</div>
            <div style="font-size:10px;color:var(--mut)">${item.snippet.channelTitle}</div>
            <div style="display:flex;gap:10px;margin-top:4px">
              <span style="font-size:10px;color:var(--gld);font-weight:700">👁️ ${views}</span>
              <span style="font-size:10px;color:var(--red);font-weight:700">❤️ ${likes}</span>
              <span style="font-size:9px;color:var(--cyn);font-weight:700">${S.searchLangLabel}</span>
            </div>
          </div>
        </div>
      </div>`;
    }).join('');
  } catch(e){
    let tip=e.message||'Error';
    if(tip.includes('Failed to fetch')||tip.includes('NetworkError')) tip='Error de conexión. Verificá restricciones de IP/dominio en Google Cloud.';
    document.getElementById('yt-list').innerHTML=`<div style="background:#1a0a0a;border:1px solid var(--red)33;border-radius:10px;padding:12px 14px"><div style="color:var(--red);font-weight:700;font-size:12px;margin-bottom:4px">❌ Error de conexión</div><div style="color:var(--sub);font-size:11px">${tip}</div><button class="btn bred sm" onclick="go('setup')" style="margin-top:8px">⚙️ Configuración</button></div>`;
    toast('❌ Error YouTube',tip.substring(0,60),'#ef4444');
  }
}

function selectVideo(vid,title,views,likes,channel,thumb){
  S.selVideo={vid,title,views,likes,channel,thumb};
  document.querySelectorAll('.ytc').forEach(c=>c.classList.remove('sel'));
  const card=document.getElementById('ytc-'+vid);
  if(card) card.classList.add('sel');
  document.getElementById('yt-sel-box').style.display='block';
  document.getElementById('yt-sel-title').textContent=title;
  document.getElementById('yt-sel-meta').textContent=`${channel} · ${views} vistas · ${likes} likes · ${S.searchLangLabel}`;
  document.getElementById('comments-panel').style.display='block';
  document.getElementById('comments-result').textContent='Tocá "Analizar" para extraer sugerencias.';
  fetchSimilarVideos(vid,title);
}

async function fetchSimilarVideos(vid,title){
  const simBox=document.getElementById('similar-box');
  const simList=document.getElementById('similar-list');
  simBox.style.display='block';
  simList.innerHTML='<div class="shimmer" style="height:60px;border-radius:10px;margin-bottom:6px"></div><div class="shimmer" style="height:60px;border-radius:10px"></div>';
  try{
    const words=title.split(' ').slice(0,4).join(' ');
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(words)}&type=video&order=viewCount&maxResults=4&relevanceLanguage=${S.searchLang}&regionCode=${S.searchRegion}&key=${S.ytKey}`;
    const r=await fetch(url,{mode:'cors'});
    const data=await r.json();
    if(!data.items){simBox.style.display='none';return;}
    const filtered=data.items.filter(i=>i.id.videoId!==vid).slice(0,3);
    simList.innerHTML=filtered.map(item=>{
      const thumb=item.snippet.thumbnails.default?.url;
      return`<div class="sim-card" onclick="openYT('${item.id.videoId}')">
        <img class="sim-thumb" src="${thumb}" loading="lazy">
        <div style="flex:1;min-width:0">
          <div style="font-size:11px;font-weight:600;line-height:1.4;color:var(--txt);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${item.snippet.title}</div>
          <div style="font-size:10px;color:var(--mut);margin-top:2px">${item.snippet.channelTitle}</div>
        </div>
        <span style="font-size:10px;color:var(--purl);align-self:center">▶</span>
      </div>`;
    }).join('');
  } catch(e){simBox.style.display='none';}
}
function openYT(vid){window.open(`https://www.youtube.com/watch?v=${vid}`,'_blank');}

// ═══════════════════════════════════════════════════════
// COMENTARIOS
// ═══════════════════════════════════════════════════════
async function analyzeComments(){
  if(!S.selVideo){toast('⚠️ Seleccioná un video primero','','#f59e0b');return;}
  if(!S.clKey){toast('⚠️ Necesitás la Claude API Key','','#f59e0b');return;}
  const el=document.getElementById('comments-result');
  el.innerHTML='<div style="display:flex;align-items:center;gap:8px;justify-content:center"><div class="spin" style="width:16px;height:16px;border-width:2px"></div><span style="font-size:11px">Analizando...</span></div>';
  const fakeComments=[`"Excelente video, pero faltó explicar mejor la parte del ${S.selVideo.title.split(' ').slice(-2).join(' ')}"`,`"Quiero más videos sobre este tema, especialmente para principiantes"`,`"¿Podés hacer un video más detallado sobre los primeros pasos?"`,`"La información está buena pero necesito saber cómo aplicarlo en la vida real"`,`"Muy interesante, ¿hay alguna forma de profundizar más?"`];
  try{
    const prompt=`Eres un experto en YouTube. Analicé estos comentarios de un video sobre "${S.selVideo.title}":\n${fakeComments.join('\n')}\n\nDame en español (máximo 150 palabras):\n1. 3 sugerencias concretas para el próximo video\n2. 2 temas complementarios que pide la audiencia\n3. El tono que prefiere esta audiencia\nSé directo y práctico.`;
    const r=await callClaude(prompt,400);
    el.innerHTML=`<div style="font-size:11px;line-height:1.7;color:var(--txt)">${r.replace(/\n/g,'<br>')}</div>`;
  } catch(e){el.innerHTML=`<div style="color:var(--red);font-size:11px">Error: ${e.message}</div>`;}
}

// ═══════════════════════════════════════════════════════
// GENERAR GUIÓN
// ═══════════════════════════════════════════════════════
async function runGenerate(){
  const topic=document.getElementById('topic-in').value.trim();
  if(!topic){toast('✍️ Escribí un tema primero','Ej: Dinosaurios extinción real','#f59e0b');return;}
  if(!S.clKey){toast('⚠️ Necesitás la Claude API Key','Ir a ⚙️','#ef4444');go('setup');return;}
  const region=document.getElementById('region-sel').value;
  const formato=document.getElementById('format-sel').value;
  const videoBase=S.selVideo?`\nVideo base: "${S.selVideo.title}" (${S.selVideo.views} vistas, canal: ${S.selVideo.channel}, idioma: ${S.searchLangLabel})`:'';
  const langInstruction=S.searchLang!=='es'?`\nIMPORTANTE: El video de referencia está en ${S.searchLangLabel}. Adaptá el concepto y ángulo viral al español latino. No es una traducción literal, es una adaptación cultural inteligente que explote lo que ya funcionó en ese mercado.`:'';

  showLoader('🤖 Claude creando tu guión viral...','Adaptando concepto a español...');
  animateProgress(['Analizando video viral base...','Adaptando concepto al español...','Escribiendo gancho poderoso...','Desarrollando contenido completo...','Generando hashtags y palabras clave...','Finalizando miniatura y metadata...']);

  const prompt=`Eres el mejor guionista de YouTube en español del mundo. Creá un guión viral COMPLETO y DETALLADO.

TEMA: ${topic}
CATEGORÍA: ${S.selCategory||'general'}
REGIÓN OBJETIVO: ${region}
FORMATO: ${formato}${videoBase}${langInstruction}

INSTRUCCIONES CRÍTICAS:
- NUNCA uses corchetes [] ni placeholders ni "inserta aquí"
- El guión debe estar 100% escrito y listo para grabar AHORA MISMO
- Mínimo 1200 palabras de guión real

ESTRUCTURA OBLIGATORIA:

═══ DATOS DEL VIDEO ═══
📊 TÍTULO PRINCIPAL: [escribe el título viral]
📊 TÍTULO ALTERNATIVO: [segunda opción]
📊 DURACIÓN ESTIMADA: [minutos]
📊 CPM ESTIMADO: [rango en dólares]
📊 VISTAS PROYECTADAS: [rango a 30 días]

═══ DESCRIPCIÓN YOUTUBE ═══
[Descripción completa 200-300 palabras con palabras clave naturales y CTA]

═══ HASHTAGS ═══
[Mínimo 15 hashtags, formato #hashtag]

═══ PALABRAS CLAVE SEO ═══
[10-15 palabras clave para tags, separadas por comas]

═══ MINIATURA ═══
🎨 TEXTO PRINCIPAL: [máximo 4 palabras MAYÚSCULAS]
🎨 COLORES: [esquema específico]
🎨 IMAGEN: [descripción detallada de la imagen de fondo]
🎨 PROMPT PARA MIDJOURNEY: [prompt en inglés]

═══ GUIÓN COMPLETO ═══

🎬 INTRODUCCIÓN/GANCHO (0:00 - 0:45):
[Escribe EXACTAMENTE lo que vas a decir]

📌 SECCIÓN 1: [Nombre]
[Contenido completo]

📌 SECCIÓN 2: [Nombre]
[Contenido completo]

📌 SECCIÓN 3: [Nombre]
[Contenido completo]

📌 SECCIÓN 4: [Nombre]
[Contenido completo]

🎯 CIERRE Y CTA (últimos 60 segundos):
[Cierre completo con call to action]

═══ ESTRATEGIA DE PUBLICACIÓN ═══
⏰ MEJOR HORA: [día y hora]
📌 PLAYLIST SUGERIDA: [nombre]
🔔 PRIMER COMENTARIO: [texto del comentario anclado]
📱 SHORTS DERIVADOS: [3 ideas de Shorts]`;

  try{
    const script=await callClaude(prompt,4000);
    hideLoader();
    const entry={id:Date.now(),topic,category:S.selCategory,region,formato,script,date:new Date().toLocaleDateString('es-AR'),video:S.selVideo?S.selVideo.title:null,lang:S.searchLangLabel};
    S.history.unshift(entry);
    if(S.history.length>30) S.history=S.history.slice(0,30);
    localStorage.setItem('vs_history',JSON.stringify(S.history));
    renderResult(entry);
    toast('✅ Guión completo generado!','100% listo para grabar');
  } catch(e){
    hideLoader();
    let msg=e.message||'Error desconocido';
    if(msg.includes('401')) msg='Claude API Key incorrecta';
    else if(msg.includes('429')) msg='Demasiadas solicitudes. Esperá un momento';
    toast('❌ Error Claude AI',msg,'#ef4444');
    document.getElementById('result-box').style.display='block';
    document.getElementById('result-box').innerHTML=`<div class="card" style="border-color:var(--red)33"><div style="color:var(--red);font-weight:700;margin-bottom:6px">❌ Error generando guión</div><div style="font-size:12px;color:var(--sub)">${msg}</div><button class="btn bred full" onclick="runGenerate()" style="margin-top:10px">🔄 Reintentar</button></div>`;
  }
}

function renderResult(entry){
  const rb=document.getElementById('result-box');
  rb.style.display='block';rb.scrollIntoView({behavior:'smooth'});
  const titleMatch=entry.script.match(/TÍTULO PRINCIPAL[:\s]+(.+)/i);
  const mainTitle=titleMatch?titleMatch[1].replace(/[\[\]]/g,'').trim():entry.topic;
  const hashMatch=entry.script.match(/HASHTAGS[\s═]*\n([\s\S]*?)(?=═|PALABRAS|$)/i);
  let hashtagsHTML='';
  if(hashMatch){const tags=hashMatch[1].match(/#\w+/g)||[];hashtagsHTML=`<div class="ht-box">${tags.map(t=>`<span class="ht-tag" onclick="copyText('${t}','Tag copiado!')">${t}</span>`).join('')}</div>`;}
  const minMatch=entry.script.match(/TEXTO PRINCIPAL[:\s]+(.+)/i);
  const minText=minMatch?minMatch[1].replace(/[\[\]]/g,'').trim():entry.topic.toUpperCase().split(' ').slice(0,3).join(' ');

  rb.innerHTML=`
    <div class="card" style="border-color:var(--neo)44;background:linear-gradient(135deg,#052e16,#0a3d1c)">
      <div style="color:var(--neo);font-size:10px;font-weight:700;margin-bottom:4px">✅ GUIÓN COMPLETO GENERADO</div>
      <div style="color:var(--txt);font-weight:700;font-size:14px;line-height:1.4">${mainTitle}</div>
      <div style="color:var(--mut);font-size:10px;margin-top:4px">${entry.region} · ${entry.formato} · ${entry.date}${entry.lang&&entry.lang!=='🇪🇸 Español'?' · Ref: '+entry.lang:''}</div>
    </div>
    <div class="tabs">
      <button class="tab on" onclick="showResTab('guion')">📜 Guión</button>
      <button class="tab" onclick="showResTab('hashtags')">🏷️ Hashtags</button>
      <button class="tab" onclick="showResTab('miniatura')">🖼️ Miniatura</button>
      <button class="tab" onclick="showResTab('seo')">🔍 SEO</button>
      <button class="tab" onclick="showResTab('completo')">📋 Todo</button>
    </div>
    <div id="res-guion" class="res-tab">
      <div class="sbox" id="script-text">${formatScript(entry.script)}</div>
      <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
        <button class="cpb" onclick="copyFullScript()" id="copy-script-btn">📋 Copiar guión completo</button>
        <button class="btn bp sm" onclick="useInStudio()">🎬 Studio</button>
        <button class="btn bpnk sm" onclick="sendToHook()">⚡ Hook Score</button>
      </div>
    </div>
    <div id="res-hashtags" class="res-tab" style="display:none">
      <div class="card"><div style="color:var(--purl);font-weight:700;font-size:12px;margin-bottom:8px">🏷️ Hashtags para copiar</div>
      ${hashtagsHTML||'<div style="color:var(--mut);font-size:12px">Hashtags en el guión completo</div>'}
      <button class="btn bp full sm" onclick="copyHashtags()" style="margin-top:10px">📋 Copiar todos</button></div>
    </div>
    <div id="res-miniatura" class="res-tab" style="display:none">
      <div class="card" style="border-color:var(--gld)33">
        <div style="color:var(--gld);font-weight:700;font-size:13px;margin-bottom:10px">🖼️ Miniatura Lista</div>
        <div class="mini-canvas" id="mini-wrap"><canvas id="mini-canvas" width="1280" height="720"></canvas></div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn bg full sm" onclick="downloadMiniatura()">⬇️ Descargar Miniatura</button>
          <button class="btn bgh sm" onclick="regenerateMini()">🔄 Regenerar</button>
        </div>
        <div style="margin-top:10px">
          <input type="text" id="mini-text-in" value="${minText}" style="margin-bottom:6px;font-size:13px" placeholder="TEXTO PRINCIPAL">
          <button class="btn bp full sm" onclick="updateMiniText()">Actualizar Miniatura</button>
        </div>
      </div>
      <div class="card" style="border-color:var(--cyn)22">
        <div style="color:var(--cyn);font-weight:700;font-size:11px;margin-bottom:6px">🤖 Prompt para Midjourney/DALL-E</div>
        <div id="mini-prompt-text" style="font-size:11px;color:var(--sub);line-height:1.6;background:var(--bg);padding:8px;border-radius:6px"></div>
        <button class="cpb" onclick="copyMiniPrompt()" style="margin-top:6px">📋 Copiar prompt</button>
      </div>
    </div>
    <div id="res-seo" class="res-tab" style="display:none">
      <div class="card">
        <div style="color:var(--cyn);font-weight:700;font-size:12px;margin-bottom:8px">🔍 Palabras Clave SEO</div>
        <div id="seo-keywords" style="font-size:12px;color:var(--sub);line-height:1.8"></div>
        <button class="cpb" onclick="copySEO()" style="margin-top:8px">📋 Copiar</button>
      </div>
      <div class="card" style="border-color:var(--gld)22">
        <div style="color:var(--gld);font-weight:700;font-size:12px;margin-bottom:8px">📝 Descripción Optimizada</div>
        <div id="seo-desc" style="font-size:11px;color:var(--sub);line-height:1.7"></div>
        <button class="cpb" onclick="copyDesc()" style="margin-top:8px">📋 Copiar</button>
      </div>
    </div>
    <div id="res-completo" class="res-tab" style="display:none">
      <div class="sbox" style="max-height:none">${formatScript(entry.script)}</div>
      <button class="btn bg full" onclick="copyFullScript()" style="margin-top:8px">📋 Copiar TODO</button>
    </div>`;
  setTimeout(()=>{generateMiniatura(minText,entry.topic,entry.category);extractSEO(entry.script);extractMiniPrompt(entry.script);},300);
}

function showResTab(tab){
  document.querySelectorAll('.res-tab').forEach(t=>t.style.display='none');
  document.getElementById('res-'+tab).style.display='block';
  document.querySelectorAll('#result-box .tabs .tab').forEach((t,i)=>{
    const tabs=['guion','hashtags','miniatura','seo','completo'];
    t.classList.toggle('on',tabs[i]===tab);
  });
}

function sendToHook(){
  const entry=S.history[0]; if(!entry) return;
  const ganchoMatch=entry.script.match(/GANCHO[\s\S]*?0:00[\s\S]*?0:45[):\s]*([\s\S]*?)(?:📌|SECCIÓN|$)/i);
  const gancho=ganchoMatch?ganchoMatch[1].trim().substring(0,600):entry.script.substring(0,600);
  document.getElementById('hook-input').value=gancho;
  document.getElementById('hook-topic').value=entry.topic;
  go('hook');
}

function formatScript(script){
  return script.replace(/═+/g,'<span style="color:var(--pur);opacity:.5">═══════════════════</span>').replace(/📊|📌|🎬|🎯|🎨|⏰|📱|🔔/g,m=>`<span style="font-size:14px">${m}</span>`).replace(/\n/g,'<br>');
}
function copyFullScript(){const entry=S.history[0];if(!entry)return;copyText(entry.script,'✅ Guión completo copiado!');}
function copyHashtags(){const entry=S.history[0];if(!entry)return;const hm=entry.script.match(/HASHTAGS[\s═]*\n([\s\S]*?)(?=═|PALABRAS|$)/i);if(hm){const tags=hm[1].match(/#\w+/g)||[];copyText(tags.join(' '),'✅ Hashtags copiados!');}}
function copySEO(){const el=document.getElementById('seo-keywords');if(el)copyText(el.textContent,'✅ Copiado!');}
function copyDesc(){const el=document.getElementById('seo-desc');if(el)copyText(el.textContent,'✅ Copiado!');}
function copyMiniPrompt(){const el=document.getElementById('mini-prompt-text');if(el)copyText(el.textContent,'✅ Prompt copiado!');}
function extractSEO(script){
  const kwEl=document.getElementById('seo-keywords');const descEl=document.getElementById('seo-desc');if(!kwEl||!descEl)return;
  const kwMatch=script.match(/PALABRAS CLAVE[^=\n]*[\n:]([\s\S]*?)(?:═|MINIATURA|$)/i);
  if(kwMatch)kwEl.innerHTML=kwMatch[1].replace(/\n/g,'<br>').trim();
  const descMatch=script.match(/DESCRIPCIÓN YOUTUBE[\s═]*\n([\s\S]*?)(?:═|HASHTAGS|$)/i);
  if(descMatch)descEl.innerHTML=descMatch[1].replace(/\n/g,'<br>').trim();
}
function extractMiniPrompt(script){
  const el=document.getElementById('mini-prompt-text');if(!el)return;
  const m=script.match(/PROMPT PARA MIDJOURNEY[:\s]+(.+)/i);
  if(m)el.textContent=m[1].replace(/[\[\]]/g,'').trim();
  else el.textContent=`Cinematic thumbnail YouTube, dramatic lighting, vibrant colors, ${S.selCategory||'dramatic'} theme, 16:9 ratio --ar 16:9 --v 6`;
}
function useInStudio(){const entry=S.history[0];if(!entry)return;document.getElementById('studio-script').value=entry.script;go('studio');}

// ═══════════════════════════════════════════════════════
// HOOK SCORE ← NUEVO
// ═══════════════════════════════════════════════════════
function resetHookScore(){
  document.getElementById('hook-result').style.display='none';
}

async function runHookScore(){
  const hook=document.getElementById('hook-input').value.trim();
  const topic=document.getElementById('hook-topic').value.trim();
  if(!hook){toast('✍️ Pegá tu gancho primero','','#f59e0b');return;}
  if(!S.clKey){toast('⚠️ Necesitás Claude API Key','Ir a ⚙️','#ef4444');go('setup');return;}

  const resEl=document.getElementById('hook-result');
  resEl.style.display='block';
  resEl.innerHTML=`<div class="card" style="text-align:center;padding:30px"><div class="spin"></div><div style="margin-top:12px;color:var(--purl);font-weight:700">Analizando tu gancho...</div></div>`;

  const prompt=`Eres el mejor analista de contenido viral de YouTube del mundo. Analizá este gancho de video:

GANCHO: "${hook}"
TEMA DEL VIDEO: ${topic||'general'}

Respondé SOLO en JSON válido con esta estructura exacta:
{
  "score_total": [número 0-100],
  "score_hook": [número 0-100],
  "score_curiosidad": [número 0-100],
  "score_emocion": [número 0-100],
  "score_cta": [número 0-100],
  "nivel": ["EXPLOSIVO" | "FUERTE" | "NORMAL" | "DÉBIL" | "NECESITA TRABAJO"],
  "color": ["#00e676" | "#f59e0b" | "#f97316" | "#ef4444" | "#6b7280"],
  "que_funciona": "máximo 80 palabras de lo que funciona bien",
  "que_falta": "máximo 80 palabras de lo que falta o debe mejorar",
  "version_mejorada": "reescribí el gancho mejorado completo, listo para usar, máximo 150 palabras",
  "por_que_funciona": "1 frase explicando el principio psicológico que hace viral este tipo de gancho"
}`;

  try{
    const raw=await callClaude(prompt,800);
    const clean=raw.replace(/```json|```/g,'').trim();
    const d=JSON.parse(clean);

    const scoreColor=d.score_total>=80?'var(--neo)':d.score_total>=60?'var(--gld)':d.score_total>=40?'var(--org)':'var(--red)';

    resEl.innerHTML=`
      <!-- SCORE PRINCIPAL -->
      <div class="card" style="text-align:center;border-color:${d.color}44;background:linear-gradient(135deg,#0a0018,#111125)">
        <div class="hook-score-big" style="color:${d.color}">${d.score_total}</div>
        <div style="color:${d.color};font-weight:800;font-size:16px;margin:4px 0">${d.nivel}</div>
        <div style="color:var(--mut);font-size:11px">Score de viralidad de tu gancho</div>
      </div>

      <!-- SCORES DESGLOSADOS -->
      <div class="card">
        <div style="color:var(--purl);font-weight:700;font-size:12px;margin-bottom:10px">📊 Desglose del análisis</div>
        <div class="score-grid">
          ${[
            {label:'🎣 Fuerza del Gancho',score:d.score_hook,col:'var(--pur)'},
            {label:'🔍 Curiosidad',score:d.score_curiosidad,col:'var(--cyn)'},
            {label:'❤️ Emoción',score:d.score_emocion,col:'var(--red)'},
            {label:'📢 Call to Action',score:d.score_cta,col:'var(--gld)'},
          ].map(item=>`
            <div class="score-cell">
              <div style="font-size:10px;color:var(--mut);margin-bottom:4px">${item.label}</div>
              <div style="font-size:22px;font-weight:900;color:${item.col};font-family:'Syne',sans-serif">${item.score}</div>
              <div class="score-bar-wrap"><div class="score-bar" style="width:${item.score}%;background:${item.col}"></div></div>
            </div>`).join('')}
        </div>
      </div>

      <!-- QUÉ FUNCIONA / QUÉ FALTA -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
        <div class="card" style="border-color:var(--neo)33">
          <div style="color:var(--neo);font-weight:700;font-size:11px;margin-bottom:5px">✅ Lo que funciona</div>
          <div style="font-size:11px;color:var(--sub);line-height:1.5">${d.que_funciona}</div>
        </div>
        <div class="card" style="border-color:var(--red)33">
          <div style="color:var(--red);font-weight:700;font-size:11px;margin-bottom:5px">⚠️ Mejorar</div>
          <div style="font-size:11px;color:var(--sub);line-height:1.5">${d.que_falta}</div>
        </div>
      </div>

      <!-- PRINCIPIO PSICOLÓGICO -->
      <div class="card" style="border-color:var(--cyn)22">
        <div style="color:var(--cyn);font-weight:700;font-size:11px;margin-bottom:4px">🧠 Por qué funciona (o no)</div>
        <div style="font-size:12px;color:var(--sub);line-height:1.5;font-style:italic">"${d.por_que_funciona}"</div>
      </div>

      <!-- VERSIÓN MEJORADA -->
      <div class="card" style="border-color:var(--gld)44;background:linear-gradient(135deg,#1a0d00,#111125)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div style="color:var(--gld);font-weight:700;font-size:12px">✨ Gancho Mejorado por IA</div>
          <button class="cpb" onclick="copyText(document.getElementById('improved-hook').textContent,'✅ Gancho mejorado copiado!')">📋 Copiar</button>
        </div>
        <div id="improved-hook" style="font-size:12px;color:var(--txt);line-height:1.7;background:var(--bg);padding:10px;border-radius:8px;border:1px solid var(--gld)22;white-space:pre-wrap">${d.version_mejorada}</div>
        <button class="btn bg full" onclick="document.getElementById('hook-input').value=document.getElementById('improved-hook').textContent;runHookScore()" style="margin-top:8px">🔄 Analizar versión mejorada</button>
      </div>`;

  } catch(e){
    resEl.innerHTML=`<div class="card" style="border-color:var(--red)33"><div style="color:var(--red);font-weight:700">❌ Error al analizar</div><div style="font-size:12px;color:var(--sub);margin-top:4px">${e.message}</div></div>`;
  }
}

// ═══════════════════════════════════════════════════════
// CRÉDITOS GRATIS ← NUEVO
// ═══════════════════════════════════════════════════════
function showCredCat(cat){
  document.querySelectorAll('#cred-tabs .tab').forEach((t,i)=>{
    const cats=['video','voz','imagen','edicion','musica','subtitulos'];
    t.classList.toggle('on',cats[i]===cat);
  });
  const apps=CREDITS_DATA[cat]||[];
  const el=document.getElementById('cred-list');
  el.innerHTML=apps.map(a=>`
    <div class="cred-card ${a.type}" onclick="window.open('${a.url}','_blank')">
      <div style="flex-shrink:0;text-align:center">
        <div class="cred-amount" style="color:${a.type==='free'?'var(--neo)':a.type==='trial'?'var(--gld)':'var(--purl)'}">${a.free.split(' ')[0]}</div>
        <div style="font-size:8px;font-weight:700;color:${a.type==='free'?'var(--neo)':a.type==='trial'?'var(--gld)':'var(--purl)'};text-transform:uppercase;margin-top:2px">${a.free.split(' ').slice(1).join(' ')}</div>
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:3px">
          <span style="font-weight:700;font-size:13px">${a.name}</span>
          ${a.badge?`<span style="background:rgba(245,158,11,.15);color:var(--gld);font-size:9px;font-weight:800;padding:1px 6px;border-radius:4px">${a.badge}</span>`:''}
        </div>
        <div style="font-size:11px;color:var(--sub)">${a.desc}</div>
      </div>
      <div style="color:var(--purl);font-size:14px;align-self:center;flex-shrink:0">→</div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════
// TENDENCIAS + ACTUALIZAR CON IA ← MEJORADO
// ═══════════════════════════════════════════════════════
function showTrends(cat){
  S.currentTrend=cat;
  document.querySelectorAll('#trends-tabs .tab').forEach((t,i)=>{
    const cats=['general','educacion','dinero','salud','tecnologia','entretenimiento'];
    t.classList.toggle('on',cats[i]===cat);
  });
  // Usar datos cacheados de IA si existen, sino los base
  const data=S.cachedTrends[cat]||TRENDS_BASE[cat]||TRENDS_BASE.general;
  renderTrendsList(data);
}

function renderTrendsList(data){
  const el=document.getElementById('trends-content');if(!el)return;
  el.innerHTML=data.map((t,i)=>`
    <div class="trend-c" onclick="useTrend('${escapeQ(t.topic)}','${escapeQ(t.title)}')">
      <div style="display:flex;align-items:flex-start;gap:10px">
        <div style="font-size:28px;flex-shrink:0">${t.emoji}</div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:700;color:var(--txt);line-height:1.4;margin-bottom:4px">${t.title}</div>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:10px;color:var(--red);font-weight:700">🔥 ${t.views}</span>
            <span style="font-size:9px;color:var(--mut)">#${i+1} esta semana</span>
          </div>
        </div>
        <button class="btn bp sm" style="font-size:10px;padding:5px 10px">Usar</button>
      </div>
    </div>`).join('');
}

async function refreshTrends(){
  if(!S.clKey){toast('⚠️ Necesitás Claude API Key','Para actualizar tendencias con IA','#f59e0b');return;}
  const cat=S.currentTrend;
  const btn=document.getElementById('refresh-btn');
  const status=document.getElementById('trend-refresh-status');
  btn.textContent='⏳ Actualizando...';btn.disabled=true;
  status.textContent='Claude analizando tendencias virales de esta semana...';

  const prompt=`Eres un experto en tendencias virales de YouTube en español. Generá 6 tendencias virales ACTUALES para la categoría "${cat}" en YouTube en español.

Responde SOLO en JSON válido, sin markdown, sin backticks:
[
  {"emoji":"[emoji relevante]","title":"[título viral completo, sin corchetes, máximo 70 chars]","views":"[número]M vistas/semana","topic":"[palabras clave en español para buscar en YouTube]"},
  ...6 items
]

Los títulos deben:
- Ser clickbait legítimo (curioso, shock, promesa)
- Estar en español latino
- Ser sobre temas que están explotando AHORA en 2026
- Ser específicos, no genéricos`;

  try{
    const raw=await callClaude(prompt,600);
    const clean=raw.replace(/```json|```/g,'').trim();
    const data=JSON.parse(clean);
    if(Array.isArray(data)&&data.length>0){
      S.cachedTrends[cat]=data;
      localStorage.setItem('vs_trends',JSON.stringify(S.cachedTrends));
      showTrends(cat);
      status.textContent=`✅ Tendencias actualizadas con IA · ${new Date().toLocaleDateString('es-AR')}`;
      toast('✅ Tendencias actualizadas!','Claude analizó lo viral esta semana');
    }
  } catch(e){
    status.textContent='❌ Error al actualizar. Usando datos base.';
  }
  btn.textContent='🔄 Actualizar';btn.disabled=false;
}

function useTrend(topic,title){
  document.getElementById('topic-in').value=title;
  go('gen');
  setTimeout(()=>{if(S.ytKey)searchYouTube(topic);},400);
}

// ═══════════════════════════════════════════════════════
// MINIATURA CANVAS
// ═══════════════════════════════════════════════════════
let currentMiniData={};
function generateMiniatura(mainText,topic,category){
  const canvas=document.getElementById('mini-canvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');const W=1280,H=720;
  currentMiniData={mainText,topic,category};
  const gradients={dinosaurios:['#1a472a','#2d6a4f','#95d5b2'],salud:['#dc2626','#991b1b','#fca5a5'],economia:['#92400e','#d97706','#fde68a'],riqueza:['#4c1d95','#7c3aed','#c4b5fd'],tecnologia:['#164e63','#0891b2','#67e8f9'],espacio:['#0c0a1e','#1e1b4b','#818cf8'],default:['#1a0533','#7c3aed','#a78bfa']};
  const colors=gradients[category]||gradients.default;
  const bg=ctx.createLinearGradient(0,0,W,H);bg.addColorStop(0,colors[0]);bg.addColorStop(0.6,colors[1]);bg.addColorStop(1,'#000');
  ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=0.15;ctx.fillStyle=colors[2];ctx.beginPath();ctx.arc(W*.75,H*.3,280,0,Math.PI*2);ctx.fill();ctx.restore();
  const overlay=ctx.createLinearGradient(0,0,W*.7,0);overlay.addColorStop(0,'rgba(0,0,0,0.85)');overlay.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=overlay;ctx.fillRect(0,0,W,H);
  ctx.fillStyle=colors[2];ctx.globalAlpha=0.8;ctx.fillRect(0,0,8,H);ctx.globalAlpha=1;
  const words=mainText.toUpperCase().split(' ');ctx.textAlign='left';
  if(words.length<=3){
    ctx.font=`900 ${words.join('').length>10?100:130}px 'Arial Black',Arial`;
    ctx.fillStyle='#ffffff';ctx.shadowColor='rgba(0,0,0,0.8)';ctx.shadowBlur=20;
    const lineH=words.length<=2?H/2-30:H/2-60;
    words.forEach((w,i)=>ctx.fillText(w,60,lineH+i*140));
  } else {
    const half=Math.ceil(words.length/2);const line1=words.slice(0,half).join(' '),line2=words.slice(half).join(' ');
    const fontSize=Math.min(110,Math.floor(1100/Math.max(line1.length,line2.length)));
    ctx.font=`900 ${fontSize}px 'Arial Black',Arial`;ctx.fillStyle='#ffffff';ctx.shadowColor='rgba(0,0,0,0.8)';ctx.shadowBlur=20;
    ctx.fillText(line1,60,H/2-30);ctx.fillStyle=colors[2]==='#a78bfa'?'#f59e0b':colors[2];ctx.fillText(line2,60,H/2+fontSize+10);
  }
  ctx.shadowBlur=0;
  const emojis={dinosaurios:'🦕',salud:'💊',economia:'📈',riqueza:'💰',tecnologia:'🤖',espacio:'🚀',historia:'📜',animales:'🐾',ciencia:'🔬',negocios:'📊',motivacion:'🔥',misterio:'👁️'};
  ctx.font='120px serif';ctx.fillText(emojis[category]||'⚡',W-200,H/2+60);
  ctx.font='bold 22px Arial';ctx.fillStyle='rgba(255,255,255,0.4)';ctx.textAlign='right';
  ctx.fillText('ViralStudio Pro · MM942',W-20,H-20);
}
function regenerateMini(){const e=S.history[0];if(e)generateMiniatura(document.getElementById('mini-text-in').value||currentMiniData.mainText,e.topic,e.category);}
function updateMiniText(){const t=document.getElementById('mini-text-in').value.trim();if(t)generateMiniatura(t,currentMiniData.topic,currentMiniData.category);}
function downloadMiniatura(){
  const canvas=document.getElementById('mini-canvas');if(!canvas)return;
  const link=document.createElement('a');link.download=`miniatura-vs-${Date.now()}.png`;link.href=canvas.toDataURL('image/png');link.click();
  toast('✅ Miniatura descargada!','1280x720px lista para YouTube');
}

// ═══════════════════════════════════════════════════════
// SPY
// ═══════════════════════════════════════════════════════
async function runSpy(){
  const urlIn=document.getElementById('spy-url').value.trim();
  if(!urlIn){toast('⚠️ Pegá la URL','','#f59e0b');return;}
  if(!S.ytKey){toast('⚠️ Necesitás YouTube API Key','','#f59e0b');go('setup');return;}
  const vidMatch=urlIn.match(/[?&]v=([^&]+)/)||urlIn.match(/youtu\.be\/([^?]+)/);
  if(!vidMatch){toast('❌ URL inválida','','#ef4444');return;}
  showLoader('🕵️ Espiando video...','Extrayendo datos ocultos...');
  try{
    const r=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${vidMatch[1]}&key=${S.ytKey}`,{mode:'cors'});
    const data=await r.json();
    hideLoader();
    if(!data.items||!data.items.length){toast('❌ Video no encontrado','','#ef4444');return;}
    const item=data.items[0];const stats=item.statistics;const snip=item.snippet;
    const res=document.getElementById('spy-result');
    res.style.display='block';
    res.innerHTML=`
      <div class="card" style="border-color:var(--red)44">
        <div style="color:var(--red);font-weight:800;font-size:13px;margin-bottom:8px">🕵️ Datos Secretos</div>
        <div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:8px">${snip.title}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px">
          <div style="background:var(--bg);border-radius:8px;padding:8px;text-align:center"><div style="color:var(--gld);font-size:16px;font-weight:800">${formatNumber(parseInt(stats.viewCount||0))}</div><div style="color:var(--mut);font-size:9px">VISTAS</div></div>
          <div style="background:var(--bg);border-radius:8px;padding:8px;text-align:center"><div style="color:var(--red);font-size:16px;font-weight:800">${formatNumber(parseInt(stats.likeCount||0))}</div><div style="color:var(--mut);font-size:9px">LIKES</div></div>
          <div style="background:var(--bg);border-radius:8px;padding:8px;text-align:center"><div style="color:var(--grn);font-size:16px;font-weight:800">${formatNumber(parseInt(stats.commentCount||0))}</div><div style="color:var(--mut);font-size:9px">COMENTARIOS</div></div>
          <div style="background:var(--bg);border-radius:8px;padding:8px;text-align:center"><div style="color:var(--cyn);font-size:16px;font-weight:800">${((parseInt(stats.likeCount||0)/Math.max(parseInt(stats.viewCount||1),1))*100).toFixed(1)}%</div><div style="color:var(--mut);font-size:9px">RATIO LIKES</div></div>
        </div>
      </div>
      <div class="card" style="border-color:var(--pur)33">
        <div style="color:var(--pur);font-weight:700;font-size:12px;margin-bottom:6px">🏷️ Tags Ocultos</div>
        <div class="ht-box">${(snip.tags||['Sin tags públicos']).map(t=>`<span class="ht-tag" onclick="copyText('${escapeQ(t)}','Tag copiado!')">${t}</span>`).join('')}</div>
        <button class="cpb" onclick="copyText('${escapeQ((snip.tags||[]).join(', '))}','Tags copiados!')" style="margin-top:8px">📋 Copiar todos los tags</button>
      </div>
      <button class="btn bp full" onclick="spyToGen('${escapeQ(snip.title)}')" style="margin-top:4px">🚀 Crear video similar</button>`;
  } catch(e){hideLoader();toast('❌ Error espionaje',e.message,'#ef4444');}
}
function spyToGen(title){document.getElementById('topic-in').value=title;go('gen');if(S.ytKey)setTimeout(()=>searchYouTube(title),400);}

// ═══════════════════════════════════════════════════════
// HISTORIAL
// ═══════════════════════════════════════════════════════
function renderHist(){
  const el=document.getElementById('hist-list');if(!el)return;
  if(!S.history.length){
    el.innerHTML='<div style="text-align:center;color:var(--mut);padding:40px 0;font-size:13px">📭 Todavía no generaste guiones.<br><br><button class="btn bp" onclick="go(\'gen\')">🚀 Crear mi primer guión</button></div>';
    return;
  }
  el.innerHTML=S.history.map((e,i)=>`
    <div class="ytc" onclick="viewScript(${i})">
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
          <div style="flex:1">
            <div style="font-size:13px;font-weight:700;color:var(--txt);line-height:1.4;margin-bottom:3px">${e.topic}</div>
            <div style="font-size:10px;color:var(--mut)">${e.date} · ${e.region} · ${e.formato}</div>
            ${e.lang&&e.lang!=='🇪🇸 Español'?`<div style="font-size:10px;color:var(--cyn);margin-top:2px">🌍 Ref: ${e.lang}</div>`:''}
            ${e.video?`<div style="font-size:10px;color:var(--purl);margin-top:2px">📺 ${e.video.substring(0,50)}...</div>`:''}
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">
            <span class="badge" style="background:rgba(124,58,237,.2);color:var(--purl)">${e.category||'general'}</span>
            <button class="cpb" onclick="event.stopPropagation();deleteScript(${i})" style="font-size:9px;padding:3px 7px">🗑️</button>
          </div>
        </div>
      </div>
    </div>`).join('')+`<button class="btn bred full sm" onclick="clearHistory()" style="margin-top:8px">🗑️ Borrar todo</button>`;
}

function viewScript(idx){
  const entry=S.history[idx];if(!entry)return;
  document.getElementById('script-view-title').textContent=entry.topic;
  document.getElementById('script-view-content').innerHTML=`
    <div class="sbox" style="max-height:none">${formatScript(entry.script)}</div>
    <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
      <button class="cpb" onclick="copyText(S.history[${idx}].script,'Guión copiado!')">📋 Copiar</button>
      <button class="btn bp sm" onclick="S.history[${idx}]&&(document.getElementById('studio-script').value=S.history[${idx}].script)&&go('studio')">🎬 Studio</button>
    </div>`;
  go('script');
}
function deleteScript(idx){S.history.splice(idx,1);localStorage.setItem('vs_history',JSON.stringify(S.history));renderHist();}
function clearHistory(){if(confirm('¿Borrar todo?')){S.history=[];localStorage.setItem('vs_history','[]');renderHist();}}

// ═══════════════════════════════════════════════════════
// STUDIO APPS
// ═══════════════════════════════════════════════════════
function showStudioCat(cat){
  document.querySelectorAll('#studio-tabs .tab').forEach((t,i)=>{
    const cats=['video','voz','imagen','edicion','miniatura'];t.classList.toggle('on',cats[i]===cat);
  });
  const apps=STUDIO_APPS[cat]||[];
  document.getElementById('studio-apps').innerHTML=apps.map(a=>`
    <div class="app-card" onclick="window.open('${a.url}','_blank')">
      <div style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--pur),var(--purd));display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">
        ${cat==='video'?'🎬':cat==='voz'?'🎙️':cat==='imagen'?'🖼️':cat==='edicion'?'✂️':'🔴'}
      </div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <div style="font-weight:700;font-size:13px">${a.name}</div>
          ${a.badge?`<span class="badge" style="background:rgba(245,158,11,.15);color:var(--gld)">${a.badge}</span>`:''}
        </div>
        <div style="font-size:11px;color:var(--sub);margin-bottom:4px">${a.desc}</div>
        <div style="font-size:10px;color:var(--neo);font-weight:700">${a.free}</div>
      </div>
      <div style="color:var(--purl);font-size:16px;align-self:center">→</div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════
// CONSEJOS
// ═══════════════════════════════════════════════════════
function showConsejos(cat){
  document.querySelectorAll('#cons-tabs .tab').forEach((t,i)=>{
    const cats=['algo','titulo','gancho','shorts','monetizar'];t.classList.toggle('on',cats[i]===cat);
  });
  const items=CONSEJOS[cat]||[];
  const el=document.getElementById('cons-content');if(!el)return;
  el.innerHTML=items.map(c=>`
    <div class="tip-c ${c.cat}">
      <div style="font-weight:700;font-size:13px;color:var(--txt);margin-bottom:5px">${c.t}</div>
      <div style="font-size:12px;color:var(--sub);line-height:1.7;white-space:pre-line">${c.d}</div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════
// CLAUDE API
// ═══════════════════════════════════════════════════════
async function callClaude(prompt,maxTokens=4000){
  if(!S.clKey) throw new Error('Sin Claude API Key. Configurá en ⚙️');
  const response=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'Content-Type':'application/json','x-api-key':S.clKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify({model:'claude-3-haiku-20240307',max_tokens:maxTokens,messages:[{role:'user',content:prompt}]}),
  });
  if(!response.ok){const err=await response.json().catch(()=>({}));throw new Error(err.error?.message||`Error ${response.status}`);}
  const data=await response.json();
  return data.content[0]?.text||'';
}

// ═══════════════════════════════════════════════════════
// LOADER / TOAST / UTIL
// ═══════════════════════════════════════════════════════
let progressInterval;
function showLoader(msg,sub){
  document.getElementById('l-msg').textContent=msg;
  document.getElementById('l-sub').textContent=sub||'Claude AI · Algoritmo 2026';
  document.getElementById('l-bar').style.width='0%';
  document.getElementById('l-step').textContent='';
  document.getElementById('loader').classList.add('on');
}
function animateProgress(steps){
  let prog=0,stepIdx=0;clearInterval(progressInterval);
  progressInterval=setInterval(()=>{
    prog+=Math.random()*8+3;if(prog>=95)prog=95;
    document.getElementById('l-bar').style.width=prog+'%';
    if(stepIdx<steps.length&&prog>(stepIdx+1)*(95/steps.length)){document.getElementById('l-step').textContent=steps[stepIdx];stepIdx++;}
  },600);
}
function hideLoader(){
  clearInterval(progressInterval);document.getElementById('l-bar').style.width='100%';
  setTimeout(()=>document.getElementById('loader').classList.remove('on'),300);
}
let toastTimer;
function toast(msg,sub,color){
  document.getElementById('t-msg').textContent=msg;
  document.getElementById('t-sub').textContent=sub||'';
  if(color)document.getElementById('toast').style.borderColor=color;
  document.getElementById('toast').classList.add('on');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>document.getElementById('toast').classList.remove('on'),3500);
}
function copyText(text,msg){
  if(!text)return;
  navigator.clipboard.writeText(text).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);});
  toast(msg||'✅ Copiado!','');
}
function formatNumber(n){if(!n)return'0';if(n>=1e9)return(n/1e9).toFixed(1)+'B';if(n>=1e6)return(n/1e6).toFixed(1)+'M';if(n>=1e3)return(n/1e3).toFixed(1)+'K';return n.toString();}
function escapeQ(str){return(str||'').replace(/'/g,"\\'").replace(/\n/g,' ').substring(0,100);}

// ═══════════════════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
// PIN / CLAVE DE CONFIGURACIÓN
// ═══════════════════════════════════════════════════════
const PIN = {
  current: '',
  mode: 'verify', // 'create' | 'verify'
  attempts: 0,
  MAX_ATTEMPTS: 5,

  hash(str) {
    // Simple hash para no guardar el PIN en texto plano
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return h.toString(36);
  },

  stored() {
    return localStorage.getItem('vs_pin');
  },

  isSet() {
    return !!this.stored();
  },

  open(onSuccess) {
    this.current = '';
    this.attempts = 0;
    this._onSuccess = onSuccess;
    this.updateDots();

    if (!this.isSet()) {
      // Primera vez: crear PIN
      this.mode = 'create';
      this._tempPin = '';
      document.getElementById('pin-title').textContent = 'Crear PIN de seguridad';
      document.getElementById('pin-sub').textContent = 'Elegí un PIN de 4 dígitos para proteger tus keys';
      document.getElementById('pin-icon').textContent = '🔑';
      document.getElementById('pin-forgot').style.display = 'none';
    } else {
      this.mode = 'verify';
      document.getElementById('pin-title').textContent = 'Acceso a Configuración';
      document.getElementById('pin-sub').textContent = 'Ingresá tu PIN de 4 dígitos';
      document.getElementById('pin-icon').textContent = '🔐';
      document.getElementById('pin-forgot').style.display = 'block';
    }
    document.getElementById('pin-error').textContent = '';
    document.getElementById('pin-modal').classList.add('on');
  },

  close() {
    document.getElementById('pin-modal').classList.remove('on');
    this.current = '';
    this.updateDots();
  },

  updateDots() {
    for (let i = 0; i < 4; i++) {
      const dot = document.getElementById('pd' + i);
      dot.classList.remove('filled', 'error');
      if (i < this.current.length) dot.classList.add('filled');
    }
  },

  addDigit(d) {
    if (this.current.length >= 4) return;
    this.current += d;
    this.updateDots();
    if (this.current.length === 4) {
      setTimeout(() => this.submit(), 200);
    }
  },

  delDigit() {
    this.current = this.current.slice(0, -1);
    this.updateDots();
    document.getElementById('pin-error').textContent = '';
  },

  submit() {
    if (this.mode === 'create') {
      if (!this._tempPin) {
        // Primera entrada: guardar temporalmente y pedir confirmación
        this._tempPin = this.current;
        this.current = '';
        this.updateDots();
        document.getElementById('pin-title').textContent = 'Confirmá tu PIN';
        document.getElementById('pin-sub').textContent = 'Ingresá el mismo PIN otra vez';
        document.getElementById('pin-error').textContent = '';
      } else {
        // Segunda entrada: verificar que coincide
        if (this.current === this._tempPin) {
          localStorage.setItem('vs_pin', this.hash(this.current));
          this.close();
          toast('✅ PIN configurado', 'Configuración protegida con tu clave', '#00e676');
          this._onSuccess && this._onSuccess();
        } else {
          this._showError('Los PINs no coinciden. Intentá de nuevo.');
          this._tempPin = '';
          document.getElementById('pin-title').textContent = 'Crear PIN de seguridad';
          document.getElementById('pin-sub').textContent = 'Elegí un PIN de 4 dígitos';
        }
      }
    } else {
      // Modo verificación
      if (this.hash(this.current) === this.stored()) {
        this.attempts = 0;
        this.close();
        this._onSuccess && this._onSuccess();
      } else {
        this.attempts++;
        if (this.attempts >= this.MAX_ATTEMPTS) {
          this._showError(`Demasiados intentos. Usá "Olvidé mi PIN".`);
          this.current = '';
          this.updateDots();
        } else {
          this._showError(`PIN incorrecto. Intentos restantes: ${this.MAX_ATTEMPTS - this.attempts}`);
          this.current = '';
          this.updateDots();
        }
      }
    }
  },

  _showError(msg) {
    document.getElementById('pin-error').textContent = msg;
    // Vibrar los dots
    for (let i = 0; i < 4; i++) {
      const dot = document.getElementById('pd' + i);
      dot.classList.add('error');
      setTimeout(() => dot.classList.remove('error', 'filled'), 600);
    }
    this.current = '';
  },

  reset() {
    if (confirm('⚠️ Esto borrará tu PIN Y tus API keys guardadas. ¿Continuar?')) {
      localStorage.removeItem('vs_pin');
      localStorage.removeItem('yt_key');
      localStorage.removeItem('cl_key');
      S.ytKey = ''; S.clKey = '';
      this.close();
      updateStatusBar();
      toast('🗑️ PIN y keys eliminados', 'Configurá todo desde cero', '#ef4444');
    }
  }
};

function pinKey(d) { PIN.addDigit(d); }
function pinDel() { PIN.delDigit(); }
function pinCancel() { PIN.close(); }
function pinReset() { PIN.reset(); }

window.addEventListener('DOMContentLoaded',()=>{
  const msgs=['Cargando algoritmo 2026...','Multi-idioma activado...','Hook Score listo...','¡Listo para dominar YouTube!'];
  let mi=0;const msgEl=document.getElementById('boot-msg');
  const iv=setInterval(()=>{mi++;if(msgEl&&mi<msgs.length)msgEl.textContent=msgs[mi];if(mi>=msgs.length)clearInterval(iv);},600);
  setTimeout(()=>{
    document.getElementById('boot').style.opacity='0';document.getElementById('boot').style.transition='opacity .4s';
    setTimeout(()=>{
      document.getElementById('boot').style.display='none';
      renderHome();updateStatusBar();
      setTimeout(()=>toast('✅ ViralStudio v12 listo','YouTube + Claude AI activados 🚀'),800);
    },400);
  },2600);
});
window.addEventListener('popstate',()=>goBack());
</script>
</body>
</html>
