import { useState, useEffect } from "react";

const PLANS = {
  FREE:  { id:"FREE",  label:"Free",  limit:3,   priceLabel:"Gratis",     color:"#6b7280", features:["3 guiones/mes","Guion básico","Sin web search"] },
  PRO:   { id:"PRO",   label:"Pro",   limit:30,  priceLabel:"$9.99/mes",  color:"#7c3aed", features:["30 guiones/mes","Web Search real","Análisis viral completo","Ganchos magnéticos","SEO + Hashtags"] },
  ELITE: { id:"ELITE", label:"Elite", limit:999, priceLabel:"$24.99/mes", color:"#f59e0b", features:["Ilimitado","Todo lo de Pro","Miniatura preview","Análisis CPM","Soporte prioritario"] },
};

const CATS = [
  {id:"finanzas",  emoji:"💰",label:"Finanzas / Dinero",       cpm:"$8–25", hot:true},
  {id:"tecnologia",emoji:"🚀",label:"Tecnología e IA",          cpm:"$6–18", hot:true},
  {id:"misterio",  emoji:"🔮",label:"Misterio / Conspiraciones",cpm:"$3–9"},
  {id:"religion",  emoji:"✝️",label:"Religión y Fe",            cpm:"$2–8"},
  {id:"historia",  emoji:"📜",label:"Historia / Curiosidades",  cpm:"$2–7"},
  {id:"ciencia",   emoji:"🧬",label:"Ciencia / Mente",          cpm:"$3–10"},
  {id:"crimen",    emoji:"🔍",label:"Crimen Real",              cpm:"$3–9"},
  {id:"animales",  emoji:"🦁",label:"Naturaleza / Animales",    cpm:"$1–5"},
];

const C = {
  bg:"#05050a", card:"#111124", border:"#1a1a35",
  gold:"#f59e0b", amber:"#d97706", purple:"#7c3aed", purpleL:"#a78bfa",
  green:"#10b981", red:"#ef4444", cyan:"#06b6d4",
  text:"#f0efff", muted:"#6b7280", sub:"#9ca3af",
};

if(typeof document!=="undefined"){
  const s=document.createElement("style");
  s.innerText=`
    @keyframes up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
    @keyframes spin{to{transform:rotate(360deg)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:#7c3aed44}
    *{box-sizing:border-box}input,select{font-family:inherit}
  `;
  document.head.appendChild(s);
}

async function aiSearch(prompt,maxTok=2000){
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:maxTok,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:prompt}]})});
  if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e?.error?.message||"Error API");}
  const d=await r.json();
  return d.content.filter(b=>b.type==="text").map(b=>b.text).join("\n");
}

async function ai(prompt,maxTok=1200){
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:maxTok,messages:[{role:"user",content:prompt}]})});
  if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e?.error?.message||"Error API");}
  const d=await r.json();
  return d.content.map(b=>b.text||"").join("");
}

function safeJSON(raw){
  try{return JSON.parse(raw.trim());}catch(_){}
  const m=raw.match(/\{[\s\S]*\}/);
  if(m)try{return JSON.parse(m[0]);}catch(_){}
  return null;
}

const Card=({children,style={},accent,glow})=>(
  <div style={{background:C.card,border:`1px solid ${glow?glow+"44":C.border}`,borderLeft:accent?`3px solid ${accent}`:undefined,borderRadius:14,padding:16,marginBottom:14,boxShadow:glow?`0 0 24px ${glow}18`:"none",...style}}>{children}</div>
);

const Btn=({children,onClick,disabled,variant="primary",full,small})=>{
  const V={primary:{background:disabled?"#1a1a35":`linear-gradient(135deg,${C.purple},#5b21b6)`,color:disabled?C.muted:"#fff",border:"none"},gold:{background:`linear-gradient(135deg,${C.gold},${C.amber})`,color:"#000",border:"none"},ghost:{background:"transparent",color:C.sub,border:`1px solid ${C.border}`}};
  return <button onClick={!disabled?onClick:undefined} disabled={disabled} style={{...V[variant],borderRadius:12,cursor:disabled?"not-allowed":"pointer",padding:small?"8px 14px":"13px 20px",fontWeight:700,fontSize:small?12:14,width:full?"100%":"auto",transition:"all .15s",opacity:disabled?.5:1,fontFamily:"inherit",display:"block"}}>{children}</button>;
};

const Tag=({color=C.purple,children})=>(
  <span style={{background:color+"22",border:`1px solid ${color}44`,color,borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700,letterSpacing:.4,textTransform:"uppercase"}}>{children}</span>
);

const PBar=({pct,color=C.purple})=>(
  <div style={{height:5,background:C.border,borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:`${pct}%`,background:`linear-gradient(90deg,${color},${color}bb)`,borderRadius:4,transition:"width .6s ease"}}/></div>
);

function PaywallModal({onUpgrade,onClose}){
  return(
    <div style={{position:"fixed",inset:0,background:"#000000cc",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(4px)"}}>
      <div style={{background:"#0a0a15",border:`1px solid ${C.gold}33`,borderRadius:20,padding:24,width:"100%",maxWidth:420,animation:"up .3s both"}}>
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{fontSize:40,marginBottom:8}}>🔒</div>
          <h2 style={{color:C.text,fontSize:20,fontWeight:900,margin:"0 0 8px"}}>Límite gratuito alcanzado</h2>
          <p style={{color:C.muted,fontSize:13,margin:0}}>Upgradea para seguir creando contenido viral sin límites.</p>
        </div>
        {[PLANS.PRO,PLANS.ELITE].map(p=>(
          <div key={p.id} onClick={()=>onUpgrade(p.id)} style={{background:p.id==="ELITE"?"linear-gradient(135deg,#1a1205,#0d0d00)":C.card,border:`2px solid ${p.color}66`,borderRadius:14,padding:"14px 16px",cursor:"pointer",marginBottom:10,position:"relative"}}>
            {p.id==="ELITE"&&<div style={{position:"absolute",top:8,right:12,background:C.gold,color:"#000",fontSize:9,fontWeight:900,padding:"2px 8px",borderRadius:20}}>MÁS POPULAR</div>}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <span style={{color:p.color,fontWeight:900,fontSize:15}}>{p.label} {p.id==="PRO"?"⚡":"👑"}</span>
              <span style={{color:C.text,fontWeight:900}}>{p.priceLabel}</span>
            </div>
            <div style={{color:C.muted,fontSize:11}}>{p.features.slice(0,3).join(" · ")}</div>
          </div>
        ))}
        <button onClick={onClose} style={{width:"100%",background:"none",border:`1px solid ${C.border}`,color:C.muted,borderRadius:12,padding:10,cursor:"pointer",fontSize:12,fontFamily:"inherit",marginTop:6}}>No gracias</button>
      </div>
    </div>
  );
}

function PricingPage({plan,onUpgrade,onBack}){
  return(
    <div style={{animation:"up .4s both"}}>
      <button onClick={onBack} style={{background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:13,marginBottom:20,fontFamily:"inherit",padding:0}}>← Volver</button>
      <div style={{textAlign:"center",marginBottom:24}}>
        <h2 style={{color:C.text,fontSize:22,fontWeight:900,margin:"0 0 6px"}}>Planes</h2>
        <p style={{color:C.muted,fontSize:13,margin:0}}>Cancela cuando quieras · Sin sorpresas</p>
      </div>
      {Object.values(PLANS).map(p=>(
        <div key={p.id} style={{background:p.id==="ELITE"?"linear-gradient(135deg,#120e00,#0a0a00)":C.card,border:`2px solid ${p.id===plan?"#10b981":p.color+"44"}`,borderRadius:16,padding:20,marginBottom:12,position:"relative"}}>
          {p.id===plan&&<div style={{position:"absolute",top:12,right:12}}><Tag color={C.green}>TU PLAN</Tag></div>}
          {p.id==="ELITE"&&p.id!==plan&&<div style={{position:"absolute",top:12,right:12}}><Tag color={C.gold}>POPULAR</Tag></div>}
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <div style={{width:38,height:38,borderRadius:10,background:p.color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>
              {p.id==="FREE"?"🆓":p.id==="PRO"?"⚡":"👑"}
            </div>
            <div>
              <div style={{color:p.color,fontWeight:900,fontSize:17}}>{p.label}</div>
              <div style={{color:C.text,fontWeight:900}}>{p.priceLabel}</div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:14}}>
            {p.features.map((f,i)=>(
              <div key={i} style={{display:"flex",gap:8,alignItems:"center"}}>
                <span style={{color:p.color,fontSize:12}}>✓</span>
                <span style={{color:C.sub,fontSize:12}}>{f}</span>
              </div>
            ))}
          </div>
          {p.id!==plan
            ?<Btn full variant={p.id==="ELITE"?"gold":"primary"} onClick={()=>onUpgrade(p.id)}>Activar {p.label} — {p.priceLabel}</Btn>
            :<div style={{textAlign:"center",color:C.green,fontSize:13,fontWeight:700,padding:"8px 0"}}>✓ Plan activo</div>
          }
        </div>
      ))}
    </div>
  );
}

function MainScreen({plan,uso,onGenerate,onGoPlans}){
  const [tema,setTema]=useState("");
  const [cat,setCat]=useState("");
  const atLimit=uso>=PLANS[plan].limit;
  const canGo=tema.trim().length>0||cat!=="";
  const catObj=CATS.find(c=>c.id===cat);
  return(
    <div style={{animation:"up .4s both"}}>
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:"10px 14px",marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
          <span style={{fontSize:11,color:C.muted,fontWeight:700}}>USOS</span>
          <span style={{fontSize:12,fontWeight:800,color:atLimit?C.red:C.green}}>{uso} / {PLANS[plan].limit===999?"∞":PLANS[plan].limit}</span>
        </div>
        <PBar pct={PLANS[plan].limit===999?8:Math.min(100,(uso/PLANS[plan].limit)*100)} color={atLimit?C.red:C.green}/>
      </div>

      <div style={{position:"relative",marginBottom:12}}>
        <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:18,pointerEvents:"none"}}>🔍</span>
        <input value={tema} onChange={e=>{setTema(e.target.value);setCat("");}} placeholder="Ej: Datos de la Biblia, IA y el futuro..."
          style={{width:"100%",background:C.card,border:`2px solid ${tema?C.purple:C.border}`,borderRadius:14,padding:"14px 40px 14px 44px",color:C.text,fontSize:14,outline:"none",transition:"border-color .2s",fontWeight:600}}/>
        {tema&&<button onClick={()=>setTema("")} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:20,padding:0}}>×</button>}
      </div>

      <div style={{marginBottom:14}}>
        <div style={{color:C.muted,fontSize:10,fontWeight:700,marginBottom:6,textTransform:"uppercase",letterSpacing:.5}}>🔥 Populares</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
          {["Religión y Fe","El Vaticano","IA y el futuro","Psicología del dinero","El universo","Crímenes sin resolver"].map(s=>(
            <button key={s} onClick={()=>{setTema(s);setCat("");}} style={{padding:"6px 11px",borderRadius:20,border:`1px solid ${tema===s?C.purple:C.border}`,background:tema===s?"#1a0d3d":"transparent",color:tema===s?C.purpleL:C.muted,cursor:"pointer",fontSize:11,fontWeight:600,fontFamily:"inherit",transition:"all .15s"}}>{s}</button>
          ))}
        </div>
      </div>

      <div style={{marginBottom:16}}>
        <div style={{color:C.muted,fontSize:10,fontWeight:700,marginBottom:8,textTransform:"uppercase",letterSpacing:.5}}>📂 Categorías</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
          {CATS.map(c=>(
            <button key={c.id} onClick={()=>{setCat(c.id);setTema("");}} style={{padding:"10px",borderRadius:12,border:`1px solid ${cat===c.id?C.purple:C.border}`,cursor:"pointer",fontSize:12,fontWeight:600,textAlign:"left",background:cat===c.id?"#1a0d3d":C.card,color:cat===c.id?C.purpleL:C.sub,transition:"all .15s",fontFamily:"inherit"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                <span style={{fontSize:14}}>{c.emoji}</span><span>{c.label}</span>
                {c.hot&&<span style={{marginLeft:"auto",fontSize:8,background:C.purple,color:"#fff",borderRadius:6,padding:"1px 5px",fontWeight:800}}>HOT</span>}
              </div>
              <div style={{color:C.green,fontSize:10,fontWeight:700}}>CPM {c.cpm}</div>
            </button>
          ))}
        </div>
      </div>

      {atLimit?(
        <div style={{background:"#1a0d00",border:`1px solid ${C.gold}44`,borderRadius:14,padding:16,textAlign:"center"}}>
          <div style={{fontSize:24,marginBottom:6}}>🔒</div>
          <div style={{color:C.gold,fontWeight:800,fontSize:14,marginBottom:4}}>Límite {plan} alcanzado</div>
          <div style={{color:C.muted,fontSize:12,marginBottom:12}}>Upgradea para seguir creando.</div>
          <Btn full variant="gold" onClick={onGoPlans}>⬆️ Ver Planes →</Btn>
        </div>
      ):(
        <>
          <Btn full variant="gold" disabled={!canGo} onClick={()=>canGo&&onGenerate({tema:tema||catObj?.label||"",cat})}>
            {canGo?"⚡ GENERAR GUION VIRAL":"Escribe un tema o elige categoría"}
          </Btn>
          {plan==="FREE"&&(
            <div style={{marginTop:8,textAlign:"center",color:C.muted,fontSize:11}}>
              {PLANS.FREE.limit-uso} restante{PLANS.FREE.limit-uso!==1?"s":""} ·{" "}
              <button onClick={onGoPlans} style={{background:"none",border:"none",color:C.purpleL,cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:700,padding:0}}>Ver planes</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function LoadingScreen({tema,plan}){
  const [pct,setPct]=useState(0);
  const [msg,setMsg]=useState("Iniciando...");
  const steps=plan==="FREE"
    ?[[20,"🧠 Generando guion..."],[55,"✍️ Escribiendo hook..."],[85,"🎨 Armando miniatura..."]]
    :[[15,"🌐 Activando web search..."],[35,"📺 Buscando videos virales reales..."],[58,"🧠 Analizando factores virales..."],[78,"✍️ Escribiendo guion completo..."],[92,"⚡ Compilando..."]];
  useEffect(()=>{
    let i=0;
    const t=setInterval(()=>{if(i<steps.length){setMsg(steps[i][1]);setPct(steps[i][0]);i++;}else clearInterval(t);},plan==="FREE"?800:1200);
    return()=>clearInterval(t);
  },[]);
  return(
    <div style={{textAlign:"center",padding:"50px 0",animation:"up .4s both"}}>
      <div style={{fontSize:42,marginBottom:16,animation:"spin 2s linear infinite",display:"inline-block"}}>🛰️</div>
      <h3 style={{color:C.text,margin:"0 0 6px",fontSize:18,fontWeight:900}}>Analizando "{tema}"</h3>
      <p style={{color:C.muted,fontSize:12,marginBottom:24}}>{plan==="FREE"?"Engine 942™ en proceso...":"Web Search real · Engine 942™"}</p>
      <div style={{marginBottom:10}}><PBar pct={pct} color={C.purple}/></div>
      <div style={{color:C.purpleL,fontSize:12,fontWeight:700,animation:"pulse 1.5s infinite"}}>{pct}% · {msg}</div>
      {plan!=="FREE"&&<div style={{marginTop:16,color:C.muted,fontSize:11}}>Buscando datos reales de YouTube · 20-40 segundos</div>}
    </div>
  );
}

function ResultScreen({res,plan,onNew,onGoPlans}){
  const [tab,setTab]=useState("guion");
  const [copied,setCopied]=useState("");
  function cp(text,key){navigator.clipboard.writeText(text||"").then(()=>{setCopied(key);setTimeout(()=>setCopied(""),2000);}).catch(()=>{});}
  const locked=plan==="FREE";

  return(
    <div style={{animation:"up .4s both"}}>
      <div style={{background:"linear-gradient(135deg,#1a0d3d,#0d0d1c)",border:`1px solid ${C.purple}44`,borderRadius:16,padding:20,marginBottom:14}}>
        <div style={{fontSize:11,color:C.purpleL,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>🎬 Engine 942™</div>
        <div style={{fontSize:15,fontWeight:900,color:C.text,lineHeight:1.4,marginBottom:12}}>{res.titulo}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
          {[["VIRAL",res.viralScore,C.green],["VISTAS",res.vistas,C.gold],["RETENCIÓN",res.retencion,C.cyan]].map(([l,v,c])=>(
            <div key={l} style={{textAlign:"center",background:"#00000033",borderRadius:8,padding:"8px 4px"}}>
              <div style={{fontSize:14,fontWeight:900,color:c}}>{v}</div>
              <div style={{fontSize:9,color:C.muted}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,marginBottom:14,overflowX:"auto"}}>
        {[["guion","📝 Guion"],["hook","⚡ Ganchos"],["mini","🖼️ Miniatura"],["seo","#️⃣ SEO"]].map(([id,label])=>(
          <button key={id} onClick={()=>setTab(id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===id?C.purple:"transparent"}`,color:tab===id?C.purpleL:C.muted,padding:"8px 12px",fontSize:11,cursor:"pointer",fontWeight:tab===id?800:500,whiteSpace:"nowrap",fontFamily:"inherit",transition:"color .15s"}}>{label}</button>
        ))}
      </div>

      {tab==="guion"&&(
        <div style={{animation:"fadeIn .3s both"}}>
          <Card glow={C.purple}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <div style={{color:C.purpleL,fontWeight:700,fontSize:12}}>📝 GUION</div>
              <button onClick={()=>cp(res.guion,"g")} style={{background:copied==="g"?C.green+"22":"transparent",border:`1px solid ${copied==="g"?C.green:C.border}`,color:copied==="g"?C.green:C.muted,borderRadius:8,padding:"4px 10px",cursor:"pointer",fontSize:10,fontFamily:"inherit"}}>{copied==="g"?"✓ Copiado":"📋 Copiar"}</button>
            </div>
            <div style={{color:C.text,fontSize:13,lineHeight:1.8,whiteSpace:"pre-wrap"}}>{res.guion}</div>
          </Card>
          {locked?(
            <div style={{background:"#0a0a1a",border:`1px dashed ${C.purple}44`,borderRadius:14,padding:20,textAlign:"center"}}>
              <div style={{fontSize:22,marginBottom:6}}>🔒</div>
              <div style={{color:C.purpleL,fontWeight:700,marginBottom:4}}>Análisis viral avanzado</div>
              <div style={{color:C.muted,fontSize:12,marginBottom:12}}>Por qué va a viral, patrón psicológico — Pro y Elite</div>
              <Btn small variant="gold" onClick={onGoPlans}>Ver Planes</Btn>
            </div>
          ):(
            <Card accent={C.cyan}>
              <div style={{color:C.cyan,fontWeight:700,fontSize:11,marginBottom:8}}>🧠 ANÁLISIS VIRAL</div>
              <div style={{color:C.text,fontSize:13,lineHeight:1.7}}>{res.analisis}</div>
            </Card>
          )}
        </div>
      )}

      {tab==="hook"&&(
        <div style={{animation:"fadeIn .3s both"}}>
          {[{l:"⚡ GANCHO PRINCIPAL",v:res.hook,k:"h1",c:C.gold},{l:"🎯 ALTERNATIVO",v:res.hook2,k:"h2",c:C.cyan}].filter(h=>h.v).map((h,i)=>(
            <Card key={i} accent={h.c}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <div style={{color:h.c,fontWeight:700,fontSize:11}}>{h.l}</div>
                <button onClick={()=>cp(h.v,h.k)} style={{background:copied===h.k?C.green+"22":"transparent",border:`1px solid ${copied===h.k?C.green:C.border}`,color:copied===h.k?C.green:C.muted,borderRadius:8,padding:"4px 10px",cursor:"pointer",fontSize:10,fontFamily:"inherit"}}>{copied===h.k?"✓":"📋"}</button>
              </div>
              <div style={{color:C.text,fontSize:14,fontWeight:600,lineHeight:1.5}}>{h.v}</div>
            </Card>
          ))}
          {locked&&(
            <div style={{background:"#0a0a1a",border:`1px dashed ${C.gold}44`,borderRadius:14,padding:20,textAlign:"center"}}>
              <div style={{fontSize:22,marginBottom:6}}>🔒</div>
              <div style={{color:C.gold,fontWeight:700,marginBottom:4}}>Ganchos A/B/C adicionales</div>
  
