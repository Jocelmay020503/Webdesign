"use client";

import { useRef, useState, useEffect, useCallback, type ComponentType, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeInUp, SlideRight, ScaleIn, ScrollSection, SlideLeft, StaggerContainer, StaggerItem } from "@/components/ScrollSection";

// ─────────────────────────────────────────────────────────────────────────────
// COUNTDOWN TIMER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 23, minutes: 31, seconds: 0 });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 23, targetTime.getMinutes() + 31, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, targetTime.getTime() - now.getTime());

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ hours, minutes, seconds });

      if (diff === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, "0");

  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "flex-start" }}>
      {[
        { val: time.hours, label: "HRS" },
        { val: time.minutes, label: "MIN" },
        { val: time.seconds, label: "SEC" },
      ].map((item, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div
            className="timer-chip"
            style={{
              background: "linear-gradient(180deg,#00acc1,#0097a7)",
              color: "white",
              padding: "12px 16px",
              borderRadius: 10,
              fontSize: 20,
              fontWeight: 700,
              minWidth: 58,
              boxShadow: "inset 0 -2px 0 rgba(255,255,255,0.2)",
              animation: `numberPulse 2.8s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {formatNum(item.val)}
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#00838f", marginTop: 8, letterSpacing: "0.05em" }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DEVICE SCREENS — each shows a real Elden Dev service / deliverable
// ─────────────────────────────────────────────────────────────────────────────

// Screen 1 — SaaS Dashboard (monitor)
const SaasDashboard = () => (
  <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="0" y="0" width="160" height="108" rx="6" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="0" y="0" width="160" height="14" rx="6" fill="#00acc1"/>
    <rect x="0" y="8" width="160" height="6" fill="#00acc1"/>
    <text x="5" y="10" fontSize="5.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">ELDEN DEV</text>
    <text x="110" y="10" fontSize="4" fill="rgba(255,255,255,0.9)" fontFamily="Segoe UI, Arial, sans-serif">Dashboard</text>
    <rect x="0" y="14" width="28" height="94" fill="#e0f2fe"/>
    <rect x="4" y="19" width="20" height="5" rx="2" fill="#00acc1"/>
    <rect x="4" y="28" width="20" height="4" rx="2" fill="#f0f9ff"/>
    <rect x="4" y="35" width="20" height="4" rx="2" fill="#f0f9ff"/>
    <rect x="4" y="42" width="20" height="4" rx="2" fill="#f0f9ff"/>
    <rect x="4" y="49" width="20" height="4" rx="2" fill="#f0f9ff"/>
    <rect x="32" y="17" width="30" height="20" rx="3" fill="#bae6fd"/>
    <text x="35" y="24" fontSize="3.5" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif">MRR</text>
    <text x="35" y="32" fontSize="6" fill="#059669" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">$12K</text>
    <rect x="66" y="17" width="30" height="20" rx="3" fill="#bae6fd"/>
    <text x="69" y="24" fontSize="3.5" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif">USERS</text>
    <text x="69" y="32" fontSize="6" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">3.4K</text>
    <rect x="100" y="17" width="30" height="20" rx="3" fill="#bae6fd"/>
    <text x="103" y="24" fontSize="3.5" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif">CVR</text>
    <text x="103" y="32" fontSize="6" fill="#0891b2" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">8.2%</text>
    <rect x="32" y="41" width="98" height="38" rx="3" fill="#bae6fd"/>
    <text x="35" y="47" fontSize="3.5" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif">Revenue Growth</text>
    {[
      {x:36,h:12},{x:44,h:18},{x:52,h:14},{x:60,h:22},{x:68,h:20},
      {x:76,h:28},{x:84,h:24},{x:92,h:30},{x:100,h:26},{x:108,h:34},{x:116,h:32},
    ].map((b,i) => (
      <rect key={i} x={b.x} y={72-b.h} width="6" height={b.h} rx="1"
        fill={`rgba(14,165,233,${0.6+i*0.04})`}/>
    ))}
    <rect x="32" y="83" width="98" height="20" rx="3" fill="#bae6fd"/>
    <text x="35" y="89" fontSize="3" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif">RECENT SIGNUPS</text>
    <rect x="32" y="91" width="98" height="0.5" fill="#00acc1"/>
    <text x="35" y="96" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Jason R. — SaaS Founder</text>
    <text x="120" y="96" fontSize="3" fill="#059669" fontFamily="Segoe UI, Arial, sans-serif">✓ Live</text>
    <text x="35" y="101" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Karen L. — E-commerce</text>
    <text x="120" y="101" fontSize="3" fill="#059669" fontFamily="Segoe UI, Arial, sans-serif">✓ Live</text>
    <rect x="72" y="108" width="16" height="6" fill="#7dd3fc"/>
    <rect x="60" y="114" width="40" height="3" rx="2" fill="#bae6fd"/>
  </svg>
);

// Screen 2 — Landing Page (laptop)
const LandingPageLaptop = () => (
  <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="5" y="4" width="150" height="90" rx="7" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="5" y="4" width="150" height="13" rx="7" fill="#00acc1"/>
    <rect x="5" y="11" width="150" height="6" fill="#00acc1"/>
    <text x="10" y="12" fontSize="5" fill="white" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">ELDEN DEV</text>
    <rect x="110" y="6" width="16" height="5" rx="2" fill="rgba(14,165,233,0.4)"/>
    <text x="112" y="10.5" fontSize="3.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Sprint</text>
    <rect x="130" y="6" width="20" height="5" rx="2.5" fill="white"/>
    <text x="133" y="10.5" fontSize="3.5" fill="#00acc1" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">Get MVP</text>
    <rect x="5" y="17" width="150" height="45" fill="#f0f9ff"/>
    <text x="40" y="28" fontSize="4" fill="#00acc1" fontFamily="Segoe UI, Arial, sans-serif">MVP SPRINT</text>
    <text x="25" y="36" fontSize="7" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">Launch in</text>
    <text x="25" y="44" fontSize="7" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">14 Days</text>
    <rect x="25" y="48" width="35" height="8" rx="3" fill="#00acc1"/>
    <text x="28" y="54" fontSize="3.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Get Blueprint</text>
    <rect x="80" y="24" width="65" height="32" rx="3" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="0.5"/>
    <text x="84" y="32" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">50+ Founders</text>
    <text x="84" y="38" fontSize="6" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">$150K</text>
    <text x="84" y="43" fontSize="3" fill="#059669" fontFamily="Segoe UI, Arial, sans-serif">seed raised · 3 wks</text>
    <rect x="5" y="62" width="150" height="20" fill="#e0f2fe"/>
    {[
      {x:10,icon:"⚡",label:"14-Day Build"},
      {x:60,icon:"🛡️",label:"Ship Guarantee"},
      {x:110,icon:"📦",label:"Full Codebase"},
    ].map((f,i) => (
      <g key={i}>
        <text x={f.x} y="72" fontSize="7" fontFamily="Segoe UI, Arial, sans-serif">{f.icon}</text>
        <text x={f.x} y="79" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{f.label}</text>
      </g>
    ))}
    <rect x="5" y="82" width="150" height="12" fill="#bae6fd"/>
    <text x="10" y="90" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">★★★★★  "Shipped in 11 days. Used it to close my first investor."  — Jason R.</text>
    <rect x="0" y="94" width="160" height="8" rx="4" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1"/>
    <rect x="60" y="97" width="40" height="2" rx="1" fill="#7dd3fc"/>
  </svg>
);

// Screen 3 — Marketplace Mobile App (phone)
const MarketplacePhone = () => (
  <svg viewBox="0 0 55 100" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="1" y="1" width="53" height="98" rx="10" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="1" y="1" width="53" height="8" rx="10" fill="#f0f9ff"/>
    <rect x="1" y="7" width="53" height="2" fill="#f0f9ff"/>
    <text x="4" y="7" fontSize="3" fill="#00acc1" fontFamily="Segoe UI, Arial, sans-serif">9:41</text>
    <rect x="1" y="9" width="53" height="12" fill="#00acc1"/>
    <text x="5" y="17" fontSize="5" fill="white" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">MarketApp</text>
    <rect x="4" y="23" width="47" height="7" rx="3.5" fill="#bae6fd"/>
    <text x="7" y="28" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Search products...</text>
    <rect x="4" y="33" width="14" height="5" rx="2.5" fill="#00acc1"/>
    <text x="6" y="37" fontSize="3" fill="white" fontFamily="Segoe UI, Arial, sans-serif">All</text>
    <rect x="20" y="33" width="14" height="5" rx="2.5" fill="#bae6fd"/>
    <text x="22" y="37" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">SaaS</text>
    <rect x="36" y="33" width="15" height="5" rx="2.5" fill="#bae6fd"/>
    <text x="38" y="37" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Apps</text>
    {[
      {x:4,y:41,emoji:"📊",label:"Analytics",val:"$50K/mo",vc:"#059669",bc:"#00acc1"},
      {x:29,y:41,emoji:"🏥",label:"HealthApp",val:"3 clinics",vc:"#00838f",bc:"#00bcd4"},
      {x:4,y:66,emoji:"🛍️",label:"E-commerce",val:"500 users",vc:"#059669",bc:"#14b8a6"},
      {x:29,y:66,emoji:"💰",label:"FinTech",val:"$150K raised",vc:"#0891b2",bc:"#22d3ee"},
    ].map((c,i) => (
      <g key={i}>
        <rect x={c.x} y={c.y} width="22" height="22" rx="3" fill="#bae6fd"/>
        <rect x={c.x} y={c.y} width="22" height="10" rx="3" fill={c.bc} opacity="0.7"/>
        <text x={c.x+6} y={c.y+8} fontSize="8" fontFamily="Segoe UI, Arial, sans-serif">{c.emoji}</text>
        <text x={c.x+2} y={c.y+16} fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{c.label}</text>
        <text x={c.x+2} y={c.y+20} fontSize="3" fill={c.vc} fontFamily="Segoe UI, Arial, sans-serif">{c.val}</text>
      </g>
    ))}
    <rect x="1" y="89" width="53" height="10" rx="5" fill="#f0f9ff"/>
    <rect x="1" y="89" width="53" height="5" fill="#f0f9ff"/>
    <text x="7" y="96" fontSize="4" fontFamily="Segoe UI, Arial, sans-serif">🏠</text>
    <text x="20" y="96" fontSize="4" fontFamily="Segoe UI, Arial, sans-serif">🔍</text>
    <text x="33" y="96" fontSize="4" fontFamily="Segoe UI, Arial, sans-serif">❤️</text>
    <text x="44" y="96" fontSize="4" fontFamily="Segoe UI, Arial, sans-serif">👤</text>
    <rect x="18" y="97" width="19" height="1.5" rx="1" fill="#7dd3fc"/>
  </svg>
);

// Screen 4 — Investor Pitch Deck (tablet)
const InvestorDeckTablet = () => (
  <svg viewBox="0 0 90 120" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="1" y="1" width="88" height="118" rx="8" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="6" y="8" width="78" height="104" rx="5" fill="#f0f9ff"/>
    <rect x="6" y="8" width="78" height="20" rx="5" fill="#00acc1"/>
    <text x="10" y="16" fontSize="5" fill="white" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">ELDEN DEV</text>
    <text x="10" y="23" fontSize="3.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Investor Pitch · MVP Sprint</text>
    <rect x="58" y="10" width="20" height="8" rx="2" fill="rgba(255,255,255,0.3)"/>
    <text x="60" y="16" fontSize="3.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Seed Round</text>
    <text x="10" y="38" fontSize="4" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Total Addressable Market</text>
    <text x="10" y="49" fontSize="11" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">$4.2B</text>
    <text x="10" y="55" fontSize="3" fill="#059669" fontFamily="Segoe UI, Arial, sans-serif">↑ 34% YoY · Dev Services</text>
    <rect x="6" y="58" width="78" height="0.5" fill="#7dd3fc"/>
    {[
      {x:8,label:"Founders\nServed",val:"50+",color:"#00acc1"},
      {x:36,label:"Avg Time\nto Launch",val:"12d",color:"#00bcd4"},
      {x:62,label:"Client\nROI",val:"8x",color:"#14b8a6"},
    ].map((m,i) => (
      <g key={i}>
        <rect x={m.x} y={62} width={24} height={22} rx="3" fill="#bae6fd"/>
        <text x={m.x+3} y={70} fontSize="7" fill={m.color} fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">{m.val}</text>
        <text x={m.x+3} y={76} fontSize="2.8" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{m.label.split("\n")[0]}</text>
        <text x={m.x+3} y={80} fontSize="2.8" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{m.label.split("\n")[1]}</text>
      </g>
    ))}
    <text x="8" y="92" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Traction</text>
    {[
      {label:"Revenue",pct:72,color:"#00acc1"},
      {label:"Users",pct:85,color:"#00bcd4"},
      {label:"NPS",pct:95,color:"#14b8a6"},
    ].map((b,i) => (
      <g key={i}>
        <text x="8" y={99+i*7} fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{b.label}</text>
        <rect x="28" y={95+i*7} width="50" height="3.5" rx="1.5" fill="#bae6fd"/>
        <rect x="28" y={95+i*7} width={50*b.pct/100} height="3.5" rx="1.5" fill={b.color}/>
        <text x="80" y={99+i*7} fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{b.pct}%</text>
      </g>
    ))}
    <circle cx="45" cy="114" r="2.5" fill="#7dd3fc"/>
  </svg>
);

// Screen 5 — Health Tech Patient Portal (phone)
const HealthTechPhone = () => (
  <svg viewBox="0 0 55 100" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="1" y="1" width="53" height="98" rx="10" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="1" y="1" width="53" height="8" rx="10" fill="#f0f9ff"/>
    <rect x="1" y="7" width="53" height="2" fill="#f0f9ff"/>
    <text x="4" y="7" fontSize="3" fill="#00acc1" fontFamily="Segoe UI, Arial, sans-serif">9:41</text>
    <rect x="1" y="9" width="53" height="11" fill="#00acc1"/>
    <text x="5" y="17" fontSize="5" fill="white" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">MedPortal</text>
    <rect x="1" y="20" width="53" height="1" fill="#7dd3fc"/>
    <rect x="4" y="22" width="47" height="18" rx="4" fill="#bae6fd"/>
    <text x="7" y="30" fontSize="4" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">Dr. Maria C.</text>
    <text x="7" y="35" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">3 patients today</text>
    <rect x="35" y="24" width="14" height="5" rx="2" fill="#00bcd4"/>
    <text x="37" y="28.5" fontSize="3" fill="white" fontFamily="Segoe UI, Arial, sans-serif">View All</text>
    <text x="5" y="46" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Today Vitals</text>
    {[
      {x:4,icon:"❤️",label:"Heart Rate",val:"72 bpm",vc:"#ef4444"},
      {x:29,icon:"🩸",label:"Blood Pres.",val:"120/80",vc:"#0891b2"},
    ].map((v,i) => (
      <g key={i}>
        <rect x={v.x} y={49} width={23} height={18} rx="3" fill="#bae6fd"/>
        <text x={v.x+2} y={55} fontSize="5" fontFamily="Segoe UI, Arial, sans-serif">{v.icon}</text>
        <text x={v.x+2} y={60} fontSize="2.8" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{v.label}</text>
        <text x={v.x+2} y={65} fontSize="4" fill={v.vc} fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">{v.val}</text>
      </g>
    ))}
    <text x="5" y="74" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Upcoming Appointments</text>
    {[
      {name:"John D.",time:"10:00 AM",sc:"#14b8a6"},
      {name:"Sarah M.",time:"11:30 AM",sc:"#00acc1"},
      {name:"Tom B.",time:"02:00 PM",sc:"#14b8a6"},
    ].map((a,i) => (
      <g key={i}>
        <rect x="4" y={77+i*7} width="47" height="5.5" rx="2" fill="#bae6fd"/>
        <text x="7" y={81+i*7} fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{a.name}</text>
        <text x="28" y={81+i*7} fontSize="3" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">{a.time}</text>
        <circle cx="49" cy={79.5+i*7} r="2" fill={a.sc}/>
      </g>
    ))}
    <rect x="18" y="97" width="19" height="1.5" rx="1" fill="#7dd3fc"/>
  </svg>
);

// Screen 6 — EdTech LMS (tablet)
const EdTechTablet = () => (
  <svg viewBox="0 0 90 120" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="1" y="1" width="88" height="118" rx="8" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="6" y="8" width="78" height="104" rx="5" fill="#f0f9ff"/>
    <rect x="6" y="8" width="78" height="16" rx="5" fill="#00acc1"/>
    <rect x="6" y="18" width="78" height="6" fill="#00acc1"/>
    <text x="10" y="18" fontSize="5" fill="white" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">LearnHub</text>
    <rect x="62" y="10" width="16" height="6" rx="3" fill="#00bcd4"/>
    <text x="65" y="15" fontSize="3.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Pro Plan</text>
    <text x="10" y="32" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">My Learning Path</text>
    <rect x="10" y="35" width="70" height="5" rx="2.5" fill="#bae6fd"/>
    <rect x="10" y="35" width="49" height="5" rx="2.5" fill="#00acc1"/>
    <text x="62" y="39" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">70%</text>
    {[
      {y:44,title:"Full-Stack Dev",sub:"Next.js + Node.js",prog:85,color:"#00acc1",badge:"🔥 Hot"},
      {y:66,title:"UI/UX Design",sub:"Figma + Principles",prog:60,color:"#00bcd4",badge:"⭐ Top"},
      {y:88,title:"Product Strategy",sub:"MVP to PMF",prog:40,color:"#14b8a6",badge:"🆕 New"},
    ].map((c,i) => (
      <g key={i}>
        <rect x="8" y={c.y} width="74" height="19" rx="3" fill="#bae6fd"/>
        <rect x="8" y={c.y} width="8" height="19" rx="3" fill={c.color} opacity="0.7"/>
        <text x="19" y={c.y+8} fontSize="4" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">{c.title}</text>
        <text x="19" y={c.y+13} fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{c.sub}</text>
        <rect x="19" y={c.y+15} width="40" height="2.5" rx="1.2" fill="#e0f2fe"/>
        <rect x="19" y={c.y+15} width={40*c.prog/100} height="2.5" rx="1.2" fill={c.color}/>
        <rect x="62" y={c.y+5} width="16" height="5" rx="2" fill="#7dd3fc"/>
        <text x="63" y={c.y+9} fontSize="3" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">{c.badge}</text>
      </g>
    ))}
    <circle cx="45" cy="114" r="2.5" fill="#7dd3fc"/>
  </svg>
);

// Screen 7 — E-commerce Store (laptop)
const EcommerceLaptop = () => (
  <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="5" y="4" width="150" height="90" rx="7" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="5" y="4" width="150" height="13" rx="7" fill="#f0f9ff"/>
    <rect x="5" y="11" width="150" height="6" fill="#f0f9ff"/>
    <text x="10" y="12" fontSize="5" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">ShopFast</text>
    <rect x="60" y="5" width="50" height="7" rx="3.5" fill="#bae6fd"/>
    <text x="65" y="10" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Search store...</text>
    <text x="128" y="12" fontSize="6" fontFamily="Segoe UI, Arial, sans-serif">🛒</text>
    <circle cx="137" cy="6" r="3" fill="#00acc1"/>
    <text x="135.5" y="8" fontSize="2.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">3</text>
    <rect x="5" y="17" width="150" height="30" fill="#bae6fd"/>
    <text x="10" y="27" fontSize="4" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">FLASH SALE — 50% OFF</text>
    <text x="10" y="35" fontSize="6" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">New Arrivals</text>
    <rect x="10" y="38" width="28" height="7" rx="3" fill="#00acc1"/>
    <text x="13" y="43" fontSize="3.5" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Shop Now →</text>
    <rect x="90" y="19" width="60" height="26" rx="3" fill="#7dd3fc" opacity="0.5"/>
    <text x="108" y="35" fontSize="14" fontFamily="Segoe UI, Arial, sans-serif">👟</text>
    {[
      {x:8,emoji:"👜",name:"Bag",price:"$89",badge:"Hot"},
      {x:46,emoji:"⌚",name:"Watch",price:"$199",badge:"New"},
      {x:84,emoji:"💻",name:"Laptop",price:"$999",badge:"Sale"},
      {x:122,emoji:"📱",name:"Phone",price:"$699",badge:""},
    ].map((p,i) => (
      <g key={i}>
        <rect x={p.x} y="50" width="34" height="38" rx="3" fill="#bae6fd"/>
        <rect x={p.x} y="50" width="34" height="18" rx="3" fill="#f0f9ff"/>
        <text x={p.x+10} y="62" fontSize="10" fontFamily="Segoe UI, Arial, sans-serif">{p.emoji}</text>
        {p.badge&&<rect x={p.x+22} y={52} width="10" height="5" rx="2" fill="#00acc1"/>}
        {p.badge&&<text x={p.x+23} y={56} fontSize="2.8" fill="white" fontFamily="Segoe UI, Arial, sans-serif">{p.badge}</text>}
        <text x={p.x+3} y="75" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{p.name}</text>
        <text x={p.x+3} y="81" fontSize="4" fill="#14b8a6" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">{p.price}</text>
        <rect x={p.x+3} y="83" width="28" height="4" rx="2" fill="#00acc1"/>
        <text x={p.x+7} y="86.5" fontSize="3" fill="white" fontFamily="Segoe UI, Arial, sans-serif">Add to Cart</text>
      </g>
    ))}
    <rect x="0" y="94" width="160" height="8" rx="4" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1"/>
    <rect x="60" y="97" width="40" height="2" rx="1" fill="#7dd3fc"/>
  </svg>
);

// Screen 8 — FinTech Payment Dashboard (monitor)
const FinTechMonitor = () => (
  <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect x="0" y="0" width="160" height="108" rx="6" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.2"/>
    <rect x="0" y="0" width="160" height="13" rx="6" fill="#f0f9ff"/>
    <rect x="0" y="7" width="160" height="6" fill="#f0f9ff"/>
    <text x="5" y="9.5" fontSize="5" fill="#00acc1" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">FinFlow</text>
    <rect x="120" y="3" width="34" height="7" rx="3.5" fill="#bae6fd"/>
    <text x="124" y="8" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">John D. ▾</text>
    <rect x="0" y="13" width="30" height="95" fill="#e0f2fe"/>
    {[
      {y:18,icon:"📊",label:"Overview",active:true},
      {y:28,icon:"💳",label:"Payments",active:false},
      {y:38,icon:"📈",label:"Analytics",active:false},
      {y:48,icon:"🔐",label:"Security",active:false},
    ].map((item,i) => (
      <g key={i}>
        {item.active&&<rect x="0" y={item.y-2} width="3" height="9" rx="1.5" fill="#00acc1"/>}
        <rect x="4" y={item.y-2} width="22" height="9" rx="2" fill={item.active?"#bae6fd":"transparent"}/>
        <text x="6" y={item.y+4} fontSize="4" fontFamily="Segoe UI, Arial, sans-serif">{item.icon}</text>
        <text x="13" y={item.y+4} fontSize="3" fill={item.active?"#004d54":"#006064"} fontFamily="Segoe UI, Arial, sans-serif">{item.label}</text>
      </g>
    ))}
    <rect x="34" y="16" width="60" height="25" rx="4" fill="#bae6fd"/>
    <text x="38" y="24" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Total Balance</text>
    <text x="38" y="34" fontSize="9" fill="#004d54" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">$48,291</text>
    <text x="38" y="38" fontSize="3" fill="#14b8a6" fontFamily="Segoe UI, Arial, sans-serif">↑ +$3,241 this month</text>
    <rect x="98" y="16" width="27" height="11" rx="3" fill="#bae6fd"/>
    <text x="101" y="21" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Sent</text>
    <text x="101" y="26" fontSize="4.5" fill="#ef4444" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">-$8.2K</text>
    <rect x="128" y="16" width="27" height="11" rx="3" fill="#bae6fd"/>
    <text x="131" y="21" fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Received</text>
    <text x="131" y="26" fontSize="4.5" fill="#14b8a6" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold">+$11K</text>
    <rect x="34" y="45" width="120" height="35" rx="3" fill="#f0f9ff"/>
    <text x="37" y="51" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Transaction Volume — Last 30 Days</text>
    <polyline
      points="37,72 47,68 57,70 67,62 77,65 87,55 97,58 107,50 117,52 127,44 137,46 147,38"
      fill="none" stroke="#00acc1" strokeWidth="1.5" strokeLinejoin="round"/>
    <polyline
      points="37,72 47,68 57,70 67,62 77,65 87,55 97,58 107,50 117,52 127,44 137,46 147,38 147,75 37,75"
      fill="#00acc1" opacity="0.15"/>
    {[72,65,58,51].map((y,i) => (
      <line key={i} x1="37" y1={y} x2="150" y2={y} stroke="#7dd3fc" strokeWidth="0.5"/>
    ))}
    <rect x="34" y="83" width="120" height="21" rx="3" fill="#f0f9ff"/>
    <text x="37" y="89" fontSize="3.5" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Recent Transactions</text>
    {[
      {name:"Jason R. — SaaS",amt:"+$5,000",c:"#14b8a6",time:"2m ago"},
      {name:"Tyler S. — Marketplace",amt:"+$12,400",c:"#14b8a6",time:"1h ago"},
      {name:"Infrastructure Cost",amt:"-$320",c:"#ef4444",time:"3h ago"},
    ].map((t,i) => (
      <g key={i}>
        <text x="37" y={95+i*4} fontSize="3" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">{t.name}</text>
        <text x="118" y={95+i*4} fontSize="3" fill={t.c} fontFamily="Segoe UI, Arial, sans-serif">{t.amt}</text>
        <text x="143" y={95+i*4} fontSize="2.5" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">{t.time}</text>
      </g>
    ))}
    <rect x="72" y="108" width="16" height="6" fill="#7dd3fc"/>
    <rect x="60" y="114" width="40" height="3" rx="2" fill="#bae6fd"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Orbit config
// ─────────────────────────────────────────────────────────────────────────────
type OrbitDevice = {
  id: number;
  Component: ComponentType;
  orbitR: number;
  speed: number;
  startAngle: number;
  size: { w: number; h: number };
  zBase: number;
};

type OrbitDeviceKind = "desktop" | "tablet" | "phone";

function OrbitProductFrame({
  src,
  kind,
  title,
}: {
  src: string;
  kind: OrbitDeviceKind;
  title: string;
}) {
  const frameRadius = kind === "phone" ? 18 : kind === "tablet" ? 14 : 12;
  const framePadding = kind === "phone" ? 4 : 5;
  const chromeHeight = kind === "phone" ? 16 : 24;
  const chromeFontSize = kind === "phone" ? 9 : 10;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: frameRadius,
        background: "#e0f2fe",
        padding: framePadding,
        border: "1px solid #7dd3fc",
        boxShadow: "0 12px 28px rgba(0, 172, 193, 0.26)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: chromeHeight,
          borderRadius: kind === "phone" ? "10px 10px 6px 6px" : "8px 8px 0 0",
          background: "linear-gradient(180deg, #00acc1 0%, #00838f 100%)",
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          gap: 6,
          color: "#e0f7fa",
          fontSize: chromeFontSize,
          fontWeight: 700,
          letterSpacing: "0.03em",
          fontFamily: "Arial, sans-serif",
          textShadow: "0 1px 2px rgba(0, 60, 70, 0.35)",
        }}
      >
        {kind !== "phone" && (
          <>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#b2ebf2" }} />
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#80deea" }} />
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4dd0e1" }} />
          </>
        )}
        <span style={{ marginLeft: kind !== "phone" ? 4 : 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {title}
        </span>
      </div>
      <div style={{ position: "relative", width: "100%", height: `calc(100% - ${chromeHeight}px)`, background: "#e0f7fa" }}>
        <img
          src={src}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(130deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 36%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

const OrbitSaasAnalytics = () => (
  <OrbitProductFrame src="/images/orbit/saas-analytics.svg" kind="desktop" title="PulseBoard Analytics" />
);

const OrbitLandingMvp = () => (
  <OrbitProductFrame src="/images/orbit/landing-mvp.svg" kind="desktop" title="MVP Sprint Studio" />
);

const OrbitMarketplaceMobile = () => (
  <OrbitProductFrame src="/images/orbit/marketplace-mobile.svg" kind="phone" title="Foundry Market" />
);

const OrbitInvestorDeck = () => (
  <OrbitProductFrame src="/images/orbit/investor-deck.svg" kind="tablet" title="Seed Deck" />
);

const OrbitHealthPortal = () => (
  <OrbitProductFrame src="/images/orbit/health-portal.svg" kind="phone" title="CareFlow" />
);

const OrbitEdTech = () => (
  <OrbitProductFrame src="/images/orbit/edtech-lms.svg" kind="tablet" title="LearnHub" />
);

const OrbitEcommerce = () => (
  <OrbitProductFrame src="/images/orbit/ecommerce-store.svg" kind="desktop" title="Nova Commerce" />
);

const OrbitFintech = () => (
  <OrbitProductFrame src="/images/orbit/fintech-dashboard.svg" kind="desktop" title="FinOrbit" />
);

const ORBIT_DEVICES: OrbitDevice[] = [
  {id:1,Component:OrbitSaasAnalytics,  orbitR:225,speed:0.16,startAngle:0,  size:{w:160,h:120},zBase:0  },
  {id:2,Component:OrbitLandingMvp,     orbitR:185,speed:0.21,startAngle:72, size:{w:140,h:105},zBase:20 },
  {id:3,Component:OrbitMarketplaceMobile, orbitR:155,speed:0.27,startAngle:144,size:{w:55, h:100},zBase:10 },
  {id:4,Component:OrbitInvestorDeck,   orbitR:205,speed:0.19,startAngle:216,size:{w:90,h:120},zBase:-10},
  {id:5,Component:OrbitHealthPortal,   orbitR:165,speed:0.31,startAngle:288,size:{w:55, h:100},zBase:5  },
  {id:6,Component:OrbitEdTech,         orbitR:245,speed:0.14,startAngle:40, size:{w:90, h:120},zBase:-5 },
  {id:7,Component:OrbitEcommerce,      orbitR:265,speed:0.11,startAngle:160,size:{w:140,h:105},zBase:15 },
  {id:8,Component:OrbitFintech,        orbitR:195,speed:0.24,startAngle:300,size:{w:160,h:120},zBase:-15},
];

function useAnimationFrame(callback: (delta: number, time: number) => void) {
  const reqRef = useRef<number | null>(null);
  const prevRef = useRef<number | null>(null);

  useEffect(() => {
    const loop = (time: number) => {
      if (prevRef.current !== null) callback(time - prevRef.current, time);
      prevRef.current = time;
      reqRef.current = requestAnimationFrame(loop);
    };

    reqRef.current = requestAnimationFrame(loop);

    return () => {
      if (reqRef.current !== null) {
        cancelAnimationFrame(reqRef.current);
      }
    };
  }, [callback]);
}

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Blueprint",
    desc: "We define exactly what needs to be built — and what doesn't. No fluff, just focus.",
    icon: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="40" height="52" rx="4" fill="#00acc1" opacity="0.18"/>
        <rect x="8" y="6" width="40" height="52" rx="4" stroke="#00acc1" strokeWidth="2"/>
        <line x1="8" y1="20" x2="48" y2="20" stroke="#00acc1" strokeWidth="0.8" opacity="0.5"/>
        <line x1="8" y1="34" x2="48" y2="34" stroke="#00acc1" strokeWidth="0.8" opacity="0.5"/>
        <line x1="8" y1="47" x2="48" y2="47" stroke="#00acc1" strokeWidth="0.8" opacity="0.5"/>
        <line x1="22" y1="6" x2="22" y2="58" stroke="#00acc1" strokeWidth="0.8" opacity="0.5"/>
        <line x1="36" y1="6" x2="36" y2="58" stroke="#00acc1" strokeWidth="0.8" opacity="0.5"/>
        <rect x="14" y="12" width="10" height="6" rx="1" fill="none" stroke="#006064" strokeWidth="1.5"/>
        <rect x="28" y="12" width="14" height="6" rx="1" fill="none" stroke="#006064" strokeWidth="1.5"/>
        <line x1="24" y1="15" x2="28" y2="15" stroke="#006064" strokeWidth="1.5"/>
        <g transform="translate(38,38) rotate(-35)">
          <rect x="0" y="0" width="6" height="18" rx="1" fill="#00838f"/>
          <polygon points="0,18 6,18 3,24" fill="#00acc1"/>
          <rect x="0" y="0" width="6" height="3" rx="1" fill="#004d5a"/>
        </g>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Build",
    desc: "We design and develop your MVP with precision. Daily updates, zero guesswork.",
    icon: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="44" height="32" rx="4" fill="#00acc1" opacity="0.18"/>
        <rect x="6" y="8" width="44" height="32" rx="4" stroke="#00acc1" strokeWidth="2"/>
        <rect x="10" y="12" width="36" height="24" rx="2" fill="#006064" opacity="0.15"/>
        <line x1="14" y1="18" x2="28" y2="18" stroke="#00acc1" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="23" x2="36" y2="23" stroke="#00838f" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="28" x2="22" y2="28" stroke="#00acc1" strokeWidth="2" strokeLinecap="round"/>
        <line x1="25" y1="28" x2="34" y2="28" stroke="#004d5a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="40" x2="28" y2="50" stroke="#00acc1" strokeWidth="2"/>
        <line x1="18" y1="50" x2="38" y2="50" stroke="#00acc1" strokeWidth="2.5" strokeLinecap="round"/>
        <g transform="translate(40,36)">
          <circle cx="8" cy="8" r="5" fill="none" stroke="#006064" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="#00acc1"/>
          {[0,45,90,135,180,225,270,315].map((a,i) => (
            <rect key={i} x="7" y="1.5" width="2" height="3" rx="1" fill="#006064" transform={`rotate(${a} 8 8)`}/>
          ))}
        </g>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Launch",
    desc: "You get a live product ready to demo, onboard users, and start growing.",
    icon: (
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 6 C32 6, 46 14, 46 32 L46 46 L32 52 L18 46 L18 32 C18 14, 32 6, 32 6Z" fill="#00acc1" opacity="0.2" stroke="#00acc1" strokeWidth="2"/>
        <circle cx="32" cy="28" r="6" fill="none" stroke="#006064" strokeWidth="2"/>
        <circle cx="32" cy="28" r="3" fill="#00acc1" opacity="0.4"/>
        <path d="M18 40 L10 50 L18 46Z" fill="#00838f" opacity="0.7"/>
        <path d="M46 40 L54 50 L46 46Z" fill="#00838f" opacity="0.7"/>
        <ellipse cx="32" cy="56" rx="5" ry="3" fill="#00acc1" opacity="0.5"/>
        <ellipse cx="32" cy="54" rx="3" ry="2" fill="#006064" opacity="0.7"/>
        <circle cx="10" cy="14" r="1.5" fill="#00acc1" opacity="0.7"/>
        <circle cx="52" cy="18" r="1" fill="#00acc1" opacity="0.5"/>
        <circle cx="8" cy="36" r="1" fill="#00838f" opacity="0.5"/>
        <circle cx="56" cy="10" r="1.5" fill="#00acc1" opacity="0.6"/>
      </svg>
    ),
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function StepCard({ step, index, visible }: { step: ProcessStep; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const y = (visible ? 0 : 32) + (hovered ? -8 : 0);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        borderRadius: 16,
        padding: "40px 28px 36px",
        textAlign: "center",
        border: "1px solid #b2ebf2",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1), opacity 0.55s ease",
        transform: `translateY(${y}px)`,
        boxShadow: hovered
          ? "0 20px 50px rgba(0,172,193,0.18), 0 4px 12px rgba(0,172,193,0.1)"
          : "0 2px 12px rgba(0,172,193,0.06)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          background: "radial-gradient(circle, rgba(0,172,193,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          transition: "transform 0.4s ease, opacity 0.4s ease",
          transform: hovered ? "scale(1.5)" : "scale(1)",
          opacity: hovered ? 1 : 0.5,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 18,
          right: 20,
          fontSize: 11,
          fontWeight: 700,
          color: "#b2ebf2",
          letterSpacing: "0.1em",
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        {step.num}
      </div>

      <div
        style={{
          width: 80,
          height: 80,
          background: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          transition: "transform 0.35s cubic-bezier(.22,1,.36,1)",
          transform: hovered ? "rotate(-4deg) scale(1.08)" : "rotate(0deg) scale(1)",
        }}
      >
        {step.icon}
      </div>

      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#006064",
          margin: "0 0 14px",
          position: "relative",
          display: "inline-block",
        }}
      >
        {step.title}
        <span
          style={{
            display: "block",
            height: 2,
            background: "#00acc1",
            borderRadius: 2,
            marginTop: 4,
            transition: "width 0.3s ease",
            width: hovered ? "100%" : "0%",
          }}
        />
      </h3>

      <p
        style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: "#00838f",
          margin: 0,
        }}
      >
        {step.desc}
      </p>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          width: "80%",
          height: 3,
          background: "linear-gradient(90deg, transparent, #00acc1, transparent)",
          borderRadius: "0 0 2px 2px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

function useCounter(target: number, duration: number, active: boolean) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let rafId = 0;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);

  return val;
}

function StartupGlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const cx = W / 2;
    const cy = H / 2;

    type Dot = {
      theta: number;
      phi: number;
      speed: number;
      life: number;
      maxLife: number;
      dead: boolean;
      color: string;
      r: number;
    };

    const colors = ["#00acc1", "#00838f", "#006064", "#4dd0e1", "#b2ebf2"];
    const dots: Dot[] = [];
    const RADIUS = Math.min(W, H) * 0.38;
    let frame = 0;

    function spawnDot(): Dot {
      return {
        theta: Math.random() * Math.PI * 2,
        phi: Math.acos(2 * Math.random() - 1),
        speed: 0.003 + Math.random() * 0.004,
        life: 0,
        maxLife: 80 + Math.random() * 120,
        dead: false,
        color: colors[Math.floor(Math.random() * colors.length)],
        r: 2 + Math.random() * 3,
      };
    }

    for (let i = 0; i < 60; i++) {
      const d = spawnDot();
      d.life = Math.random() * d.maxLife;
      dots.push(d);
    }

    let rotY = 0;
    let animId = 0;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);

      rotY += 0.004;
      frame++;

      if (frame % 40 === 0) {
        const d = spawnDot();
        d.dead = true;
        d.color = "rgba(0,96,100,0.2)";
        dots.push(d);
      }
      if (dots.length > 140) dots.splice(0, dots.length - 140);

      for (let lat = -2; lat <= 2; lat++) {
        const y = (lat / 3) * RADIUS;
        const r = Math.sqrt(Math.max(0, RADIUS * RADIUS - y * y));
        ctx.beginPath();
        ctx.ellipse(cx, cy + y * 0.35, r, r * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,172,193,0.06)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (let lng = 0; lng < 6; lng++) {
        const angle = (lng / 6) * Math.PI;
        ctx.beginPath();
        ctx.ellipse(cx, cy, RADIUS * Math.abs(Math.cos(angle + rotY)), RADIUS * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,172,193,0.05)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      const visible3D: { dot: Dot; px: number; py: number; pz: number }[] = [];

      for (const d of dots) {
        d.life += d.speed * 60;
        if (d.life > d.maxLife) {
          d.dead = true;
          d.color = "rgba(0,96,100,0.15)";
        }

        const sx = Math.sin(d.phi) * Math.cos(d.theta + rotY);
        const sy = Math.cos(d.phi);
        const sz = Math.sin(d.phi) * Math.sin(d.theta + rotY);

        visible3D.push({
          dot: d,
          px: cx + sx * RADIUS,
          py: cy + sy * RADIUS * 0.35,
          pz: sz,
        });
      }

      visible3D.sort((a, b) => a.pz - b.pz);

      for (const { dot, px, py, pz } of visible3D) {
        const alpha = (pz + 1) / 2;
        const lifeFrac = Math.min(dot.life / dot.maxLife, 1);
        const fade = dot.dead
          ? Math.max(0, 1 - lifeFrac) * alpha
          : Math.sin(lifeFrac * Math.PI) * alpha;

        if (fade < 0.02) continue;

        const scale = 0.5 + alpha * 0.5;
        const r = dot.r * scale;

        ctx.save();
        ctx.globalAlpha = fade;

        if (dot.dead) {
          ctx.strokeStyle = "rgba(0,96,100,0.5)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px - r, py - r);
          ctx.lineTo(px + r, py + r);
          ctx.moveTo(px + r, py - r);
          ctx.lineTo(px - r, py + r);
          ctx.stroke();
        } else {
          const grd = ctx.createRadialGradient(px, py, 0, px, py, r * 2.5);
          grd.addColorStop(0, dot.color);
          grd.addColorStop(1, "transparent");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(px, py, r * 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = dot.color;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.save();
      ctx.font = "bold 52px system-ui";
      ctx.fillStyle = "#00acc1";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = 0.15;
      ctx.fillText("90%", cx, cy);
      ctx.restore();
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}

function WeekCost({ active }: { active: boolean }) {
  const [weeks, setWeeks] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setWeeks((w) => (w < 52 ? w + 1 : 52)), 35);
    return () => clearInterval(id);
  }, [active]);

  return <div style={{ fontVariantNumeric: "tabular-nums" }}>{weeks}</div>;
}

function ProblemPillIcon({ index, hovered }: { index: number; hovered: boolean }) {
  const iconColor = hovered ? "#ffffff" : "#00acc1";

  if (index === 0) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2L6 13H11L10.5 22L18 10.5H13L13.5 2Z" fill={iconColor} />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="3" stroke={iconColor} strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2.5" stroke={iconColor} strokeWidth="1.6" opacity="0.9" />
        <path d="M3 19C3.5 15.5 6 14 8 14C10 14 12.5 15.5 13 19" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 19C13.3 16.6 15.1 15.3 16.7 15.3C18.3 15.3 20 16.4 20.5 19" stroke={iconColor} strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 6L18 12L12 18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 7.5V16.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{
      border:"1px solid #e2e8f0",
      borderRadius:12,
      overflow:"hidden",
      background:isOpen ? "#f8fafc" : "white",
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width:"100%",
          padding:"20px 24px",
          background:"transparent",
          border:"none",
          textAlign:"left",
          cursor:"pointer",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          gap:16,
        }}
      >
        <span style={{
          fontSize:15,
          fontWeight:600,
          color:"#006064",
        }}>
          {question}
        </span>
        <span style={{
          fontSize:18,
          color:"#00acc1",
          transition:"transform 0.3s ease",
          transform:isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          +
        </span>
      </button>
      {isOpen && (
        <div style={{
          padding:"0 24px 20px",
        }}>
          <p style={{
            fontSize:14,
            lineHeight:1.7,
            color:"#00838f",
            margin:0,
          }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function ProblemPill({ text, index, visible }: { text: string; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 20px",
        background: hovered ? "#006064" : "white",
        borderRadius: 12,
        border: "1px solid #b2ebf2",
        borderLeft: "3px solid #00acc1",
        cursor: "default",
        transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
        transform: visible ? "translateX(0)" : "translateX(-30px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${0.1 + index * 0.12}s`,
        boxShadow: hovered ? "0 8px 24px rgba(0,96,100,0.2)" : "0 1px 4px rgba(0,172,193,0.08)",
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: hovered ? "rgba(255,255,255,0.15)" : "rgba(0,172,193,0.09)",
        }}
      >
        <ProblemPillIcon index={index} hovered={hovered} />
      </span>
      <span
        style={{
          color: hovered ? "white" : "#006064",
          fontSize: 15,
          fontWeight: 500,
          transition: "color 0.3s",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function WhyCard({ visible }: { visible: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      style={{
        perspective: 800,
        cursor: "pointer",
        height: 80,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease 0.55s",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "white",
            borderRadius: 12,
            border: "1px solid #b2ebf2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 4,
            backfaceVisibility: "hidden",
          }}
        >
          <div style={{ fontSize: 12, color: "#00838f" }}>Why do they fail?</div>
          <div style={{ fontSize: 11, color: "#00acc1", opacity: 0.7 }}>Tap to reveal</div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#006064",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "white" }}>They never ship.</div>
        </div>
      </div>
    </div>
  );
}

function SectionThreePain() {
  const { ref, visible } = useInView(0.1);
  const pct = useCounter(90, 1800, visible);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        background: "white",
        padding: "100px 48px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,172,193,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,96,100,0.05) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 72,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(30px,3.5vw,46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#006064",
              margin: "0 0 18px",
              letterSpacing: "-0.02em",
            }}
          >
            Time is working against you.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "#00838f",
              margin: "0 auto",
              maxWidth: 560,
            }}
          >
            Every week you don&apos;t launch, you&apos;re losing momentum, potential users, and opportunities.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#00acc1",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 24,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.05s",
              }}
            >
              The Problem
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
              {[
                "You lose momentum and drive",
                "Potential users find alternatives",
                "Competitors move faster",
              ].map((text, i) => (
                <ProblemPill key={i} text={text} index={i} visible={visible} />
              ))}
            </div>

            <div
              style={{
                background: "#e0f7fa",
                borderRadius: 14,
                padding: "24px 28px",
                border: "1px solid #b2ebf2",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#00838f",
                  marginBottom: 10,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Weeks lost while waiting
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#006064", lineHeight: 1 }}>
                  <WeekCost active={visible} />
                </div>
                <div style={{ fontSize: 16, color: "#00838f" }}>weeks</div>
              </div>
              <div style={{ marginTop: 14, height: 6, background: "white", borderRadius: 99, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #00acc1, #006064)",
                    borderRadius: 99,
                    width: visible ? "100%" : "0%",
                    transition: "width 1.8s cubic-bezier(.22,1,.36,1) 0.5s",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 4,
                  fontSize: 11,
                  color: "#00838f",
                  opacity: 0.6,
                }}
              >
                <span>Now</span>
                <span>1 year later</span>
              </div>
            </div>
          </div>

          <ScaleIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "linear-gradient(145deg, #e0f7fa 0%, #f0fbfc 100%)",
                  border: "1px solid #b2ebf2",
                  height: 260,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scale(1)" : "scale(0.96)",
                  transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
                }}
              >
                <StartupGlobeCanvas />

              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(0,96,100,0.85)",
                    color: "white",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 14px",
                    borderRadius: 99,
                    letterSpacing: "0.06em",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#00acc1",
                      boxShadow: "0 0 10px rgba(0,172,193,0.75)",
                    }}
                  />
                  LIVE - startup activity globe
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { value: `${pct}%`, label: "never launch", sub: "of startups" },
                { value: "14d", label: "to ship with us", sub: "guaranteed" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: i === 0 ? "#006064" : "#00acc1",
                    borderRadius: 14,
                    padding: "22px 20px",
                    textAlign: "center",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <div style={{ fontSize: 36, fontWeight: 800, color: "white", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{s.sub}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <WhyCard visible={visible} />
              </div>
            </ScaleIn>
        </div>

        <div
          style={{
            marginTop: 60,
            padding: "28px 40px",
            background: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
            borderRadius: 14,
            borderLeft: "4px solid #00acc1",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
          }}
        >
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#00838f", margin: 0 }}>
            Most founders are stuck waiting months for developers to "finish" their product. And by the time it&apos;s ready? <strong style={{ color: "#006064", fontWeight: 700 }}>It&apos;s already too late.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

type LaunchFailureSlide = {
  title: string;
  desc: string;
  stat: string;
  kind: "delay" | "scope" | "burn";
};

const LAUNCH_FAILURE_SLIDES: LaunchFailureSlide[] = [
  {
    title: "Speed Dies In Handoffs",
    desc: "Ideas move from founder to freelancer to agency, and momentum disappears in the gaps.",
    stat: "Avg delay: +4.7 months",
    kind: "delay",
  },
  {
    title: "Scope Balloons, Product Shrinks",
    desc: "Every revision adds cost while core features stay unfinished and untested.",
    stat: "Budget waste: 35-60%",
    kind: "scope",
  },
  {
    title: "Runway Ends Before Launch",
    desc: "Capital gets burned on revisions, not releases. No launch means no real market signal.",
    stat: "90% never launch",
    kind: "burn",
  },
];

function FailureSlideVisual({ kind, active }: { kind: LaunchFailureSlide["kind"]; active: boolean }) {
  if (kind === "delay") {
    return (
      <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect x="16" y="20" width="120" height="82" rx="10" fill="#e0f7fa" stroke="#80deea" />
        <rect x="152" y="20" width="120" height="82" rx="10" fill="#e0f7fa" stroke="#80deea" />
        <rect x="288" y="20" width="116" height="82" rx="10" fill="#e0f7fa" stroke="#80deea" />
        <text x="38" y="45" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Founder</text>
        <text x="173" y="45" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Freelancer</text>
        <text x="312" y="45" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">Agency</text>
        <rect x="30" y="58" width="92" height="10" rx="5" fill="#b2ebf2" />
        <rect x="166" y="58" width="92" height="10" rx="5" fill="#b2ebf2" />
        <rect x="302" y="58" width="88" height="10" rx="5" fill="#b2ebf2" />
        <line x1="136" y1="62" x2="152" y2="62" stroke="#00acc1" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="272" y1="62" x2="288" y2="62" stroke="#00acc1" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="144" cy="62" r="4" fill="#00acc1" style={{ opacity: active ? 1 : 0.5 }} />
        <circle cx="280" cy="62" r="4" fill="#00acc1" style={{ opacity: active ? 1 : 0.5 }} />
        <rect x="22" y="132" width="376" height="84" rx="12" fill="#ffffff" stroke="#b2ebf2" />
        <text x="38" y="158" fontSize="14" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">handoff approvals</text>
        <rect x="38" y="168" width="344" height="16" rx="8" fill="#e0f7fa" />
        <rect x="38" y="168" width={active ? 278 : 150} height="16" rx="8" fill="#00acc1" style={{ transition: "width 1s ease" }} />
        <text x="38" y="204" fontSize="12" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">weeks passing without release</text>
      </svg>
    );
  }

  if (kind === "scope") {
    return (
      <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect x="24" y="26" width="170" height="188" rx="12" fill="#ffffff" stroke="#b2ebf2" />
        <text x="42" y="52" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">requested features</text>
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <rect key={n} x="42" y={64 + n * 22} width={n > 2 ? 126 : 102} height="14" rx="7" fill="#b2ebf2" />
        ))}
        <rect x="222" y="26" width="174" height="188" rx="12" fill="#ffffff" stroke="#b2ebf2" />
        <text x="240" y="52" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">shipped features</text>
        <rect x="240" y="64" width="114" height="14" rx="7" fill="#00acc1" />
        <rect x="240" y="86" width="88" height="14" rx="7" fill="#00acc1" />
        <rect x="240" y="108" width="66" height="14" rx="7" fill="#00acc1" />
        <rect x="240" y="142" width="132" height="54" rx="10" fill="#e0f7fa" stroke="#80deea" />
        <text x="250" y="163" fontSize="11" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">revision queue</text>
        <text x="250" y="182" fontSize="16" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="700">23 open items</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect x="18" y="22" width="384" height="196" rx="14" fill="#ffffff" stroke="#b2ebf2" />
      <text x="38" y="48" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">runway burn</text>
      <rect x="38" y="60" width="344" height="16" rx="8" fill="#e0f7fa" />
      <rect x="38" y="60" width={active ? 290 : 170} height="16" rx="8" fill="#ef5350" style={{ transition: "width 1s ease" }} />
      <text x="38" y="104" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">product completion</text>
      <rect x="38" y="116" width="344" height="16" rx="8" fill="#e0f7fa" />
      <rect x="38" y="116" width={active ? 102 : 44} height="16" rx="8" fill="#00acc1" style={{ transition: "width 1s ease" }} />
      <line x1="38" y1="154" x2="382" y2="154" stroke="#80deea" strokeDasharray="4 4" />
      <circle cx="106" cy="154" r="5" fill="#00acc1" />
      <circle cx="214" cy="154" r="5" fill="#00acc1" />
      <circle cx="326" cy="154" r="5" fill="#ef5350" />
      <text x="88" y="174" fontSize="10" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">start</text>
      <text x="194" y="174" fontSize="10" fill="#00838f" fontFamily="Segoe UI, Arial, sans-serif">midway</text>
      <text x="305" y="174" fontSize="10" fill="#ef5350" fontFamily="Segoe UI, Arial, sans-serif">out of runway</text>
      <text x="38" y="200" fontSize="12" fill="#006064" fontFamily="Segoe UI, Arial, sans-serif">no launch, no feedback, no traction</text>
    </svg>
  );
}

function UrgencyBadge() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <div style={{
      position:"fixed",
      top:0,
      left:0,
      right:0,
      zIndex:999,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"8px 20px",
      background:"linear-gradient(135deg, #00acc1, #00838f)",
      boxShadow:"0 4px 20px rgba(0,172,193,0.4)",
      gap:10,
    }}>
      <style>{`
        @keyframes liveFire {
          0%, 100% { transform: scaleY(1) translateY(0); filter: brightness(1); }
          25% { transform: scaleY(1.1) translateY(-1px); filter: brightness(1.2); }
          50% { transform: scaleY(0.95) translateY(1px); filter: brightness(1); }
          75% { transform: scaleY(1.05) translateY(-0.5px); filter: brightness(1.15); }
        }
        .fire-icon {
          animation: liveFire 0.6s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(255,100,0,0.8));
        }
      `}</style>
      <div className="fire-icon">🔥</div>
      <span style={{
        fontSize:12,
        fontWeight:700,
        color:"white",
        letterSpacing:"0.1em",
        textTransform:"uppercase",
      }}>
        LIMITED SPOTS THIS MONTH
      </span>
    </div>
  );
}

function HeroBadge() {
  return (
    <div style={{
      display:"inline-flex",
      alignItems:"center",
      gap:10,
      padding:"10px 24px",
      background:"linear-gradient(135deg, #00acc1, #00838f)",
      borderRadius:100,
      marginBottom:20,
      boxShadow:"0 6px 24px rgba(0,172,193,0.4)",
    }}>
      <style>{`
        @keyframes heroFire {
          0%, 100% { transform: scale(1); filter: brightness(1) drop-shadow(0 0 8px rgba(255,100,0,0.8)); }
          33% { transform: scale(1.15) translateY(-2px); filter: brightness(1.3) drop-shadow(0 0 12px rgba(255,150,0,1)); }
          66% { transform: scale(1.1) translateY(-1px); filter: brightness(1.2) drop-shadow(0 0 10px rgba(255,120,0,0.9)); }
        }
        .hero-fire {
          font-size: 18px;
          animation: heroFire 0.8s ease-in-out infinite;
        }
      `}</style>
      <div className="hero-fire">🔥</div>
      <span style={{
        fontSize:11,
        fontWeight:700,
        color:"white",
        letterSpacing:"0.12em",
        textTransform:"uppercase",
      }}>
        LIMITED SPOTS THIS MONTH
      </span>
    </div>
  );
}

export default function HeroSection() {
  const [angles, setAngles] = useState<Record<number, number>>(() =>
    ORBIT_DEVICES.reduce<Record<number, number>>((acc, d) => ({ ...acc, [d.id]: d.startAngle }), {})
  );
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement | null>(null);

  useAnimationFrame((delta: number) => {
    setAngles((prev) => {
      const next: Record<number, number> = { ...prev };
      ORBIT_DEVICES.forEach((d) => {
        next[d.id] = (prev[d.id] + d.speed * (delta / 16.67)) % 360;
      });
      return next;
    });
  });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - (rect.left + rect.width / 2)) / rect.width,
      y: (e.clientY - (rect.top + rect.height / 2)) / rect.height,
    });
  };

  const { ref: processRef, visible: processVisible } = useInView(0.15);
  const { ref: deliverablesRef, visible: deliverablesVisible } = useInView(0.2);
  const { ref: stuckRef, visible: stuckVisible } = useInView(0.15);
  const { ref: fitRef, visible: fitVisible } = useInView(0.2);
  const { ref: bonusRef, visible: bonusVisible } = useInView(0.2);
  const { ref: roiRef, visible: roiVisible } = useInView(0.2);
  const { ref: guaranteeRef, visible: guaranteeVisible } = useInView(0.2);

  return (
    <>
    <UrgencyBadge />
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position:"relative",minHeight:"100vh",background:"#f0f9ff",
        overflow:"hidden",fontFamily:"'Inter',sans-serif",
        paddingTop:48,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes fadeUp {from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float   {0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
        @keyframes pulse3d {0%,100%{transform:translateY(-50%) scale(1)}50%{transform:translateY(-50%) scale(1.02)}}
        @keyframes shimmer {0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes particle{0%{transform:translateY(0) scale(1);opacity:.8}100%{transform:translateY(-100px) scale(0);opacity:0}}
        .hero-cta{transition:all .3s ease!important;}
        .hero-cta:hover{transform:translateY(-2px)!important;box-shadow:0 10px 30px rgba(14,165,233,.3)!important;}
        .device-wrap{transition:filter .4s ease,transform .4s ease;}
        .device-wrap:hover{filter:brightness(1.1);transform:scale(1.05);}
        .particle{animation:particle 3s ease-out infinite;}
        .glass{backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);}
        .stat-card{transition:all .3s ease;}
        .stat-card:hover{transform:translateY(-3px);}
        @media (max-width: 1100px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 1024px) {
          .hero-container{flex-direction:column!important;padding:120px 32px 60px!important;}
          .hero-3d-area{margin-top:48px!important;}
        }
        @media (max-width: 900px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
          .hero-orbit-bg { display: none !important; }
          .hero-top-bar {
            padding: 12px 16px !important;
            gap: 10px !important;
            flex-wrap: wrap !important;
          }
          .hero-top-nav { gap: 10px !important; margin-left: auto !important; }
          .hero-nav-link { display: none !important; }
          .hero-nav-cta { padding: 8px 12px !important; font-size: 12px !important; }
          .hero-main-wrap { padding: 96px 16px 56px !important; }
        }
        @media (max-width: 640px) {
          .hero-container{padding:100px 20px 40px!important;}
        }
      `}</style>

      {/* 3D Gradient Background */}
      <div style={{
        position:"absolute",inset:0,
        background:`
          radial-gradient(ellipse 80% 50% at 50% 0%,rgba(14,165,233,0.2) 0%,transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 50%,rgba(6,182,212,0.15) 0%,transparent 40%),
          radial-gradient(ellipse 50% 30% at 20% 80%,rgba(20,184,166,0.1) 0%,transparent 40%)
        `,
      }}/>

      {/* Animated Particles */}
      {[...Array(20)].map((_,i) => (
        <div key={i} className="particle" style={{
          position:"absolute",
          left:`${5 + (i * 5) % 90}%`,
          top:`${30 + (i * 7) % 50}%`,
          width:3 + (i % 3),
          height:3 + (i % 3),
          borderRadius:"50%",
          background:"rgba(14,165,233,0.6)",
          animationDelay:`${i * 0.15}s`,
          animationDuration:`${2 + (i % 2)}s`,
        }}/>
      ))}

      {/* 3D Orbit Animation - FULL BACKGROUND x2 SIZE */}
      <div className="hero-orbit-bg" style={{
        position:"absolute",top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",
        width:"200%",height:"200%",
        zIndex:2,pointerEvents:"none",
      }}>
        {/* 3D Orbit Rings - 2x Larger */}
        {[450,600,750].map((r,i) => (
          <div key={i} style={{
            position:"absolute",top:"50%",left:"50%",
            width:r*2,height:r*2,marginLeft:-r,marginTop:-r,
            borderRadius:"50%",
            border:`${2 + i * 0.5}px solid rgba(14,165,233,${0.15 - i * 0.03})`,
            transform:"rotateX(70deg)",
            boxShadow:`0 0 ${80 + i * 40}px rgba(14,165,233,${0.15})`,
          }}/>
        ))}

        {/* Glowing Platform */}
        <div style={{
          position:"absolute",bottom:"35%",left:"50%",transform:"translateX(-50%)",
          width:"60%",height:50,
          background:"linear-gradient(90deg,transparent,rgba(14,165,233,0.5),transparent)",
          borderRadius:"50%",
          filter:"blur(40px)",
        }}/>

        {/* Center Glow - 2x Larger */}
        <div style={{
          position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
          width:500,height:500,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(14,165,233,0.3) 0%,rgba(14,165,233,0.1) 40%,transparent 70%)",
          animation:"pulse3d 3s ease-in-out infinite",
        }}/>

        {/* Orbiting Devices - 2x Larger */}
        {ORBIT_DEVICES.map((d) => {
          const angle   = (angles[d.id] * Math.PI) / 180;
          const x       = Math.cos(angle) * d.orbitR * 2;
          const y       = Math.sin(angle) * d.orbitR * 0.8;
          const z       = Math.sin(angle) * d.orbitR + d.zBase;
          const scale   = 0.8 + (z + d.orbitR) / (d.orbitR * 2) * 0.7;
          const opacity = 0.4 + (z + d.orbitR) / (d.orbitR * 2) * 0.4;

          return (
            <div
              key={d.id}
              style={{
                position:"absolute",top:"50%",left:"50%",
                width:d.size.w * 2,height:d.size.h * 2,
                marginLeft:-d.size.w,marginTop:-d.size.h,
                transform:`translate(${x}px,${y}px) scale(${scale})`,
                opacity,zIndex:Math.round(z+500),
                filter:`drop-shadow(0 16px 64px rgba(14,165,233,${0.3*scale}))`,
                willChange:"transform",transformOrigin:"center center",
              }}
            >
              <d.Component/>
            </div>
          );
        })}

        {/* 3D Floor Reflection - 2x Larger */}
        <div style={{
          position:"absolute",bottom:"30%",left:"50%",transform:"translateX(-50%)",
          width:"90%",height:120,
          background:"radial-gradient(ellipse,rgba(14,165,233,0.3) 0%,transparent 70%)",
          filter:"blur(30px)",
        }}/>
      </div>

      {/* Glass Nav Bar */}
      <div className="hero-top-bar" style={{
        position:"absolute",top:0,left:0,right:0,zIndex:100,
        background:"rgba(255,255,255,0.98)",borderBottom:"1px solid #b2ebf2",
        padding:"16px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10,fontSize:20,fontWeight:700,color:"#006064",letterSpacing:"-0.02em"}}>
          <img src="/images/elden-mark.svg" alt="Elden Dev logo" style={{width:32,height:32,filter:"drop-shadow(0 4px 10px rgba(0,172,193,0.25))"}} />
          <span>ELDEN<span style={{color:"#00acc1"}}>DEV</span></span>
        </div>
        <nav className="hero-top-nav" style={{display:"flex",gap:36,alignItems:"center"}}>
          {["Services","Process","Portfolio","Contact"].map(link => (
            <a key={link} className="hero-nav-link" href="#" style={{
              color:"#0b5f6a",fontSize:15,fontWeight:700,
              textDecoration:"none",letterSpacing:"0.02em",
            }}>{link}</a>
          ))}
          <button className="hero-nav-cta" style={{
            background:"#00acc1",color:"#fff",border:"none",borderRadius:6,
            padding:"10px 24px",fontSize:14,fontWeight:600,cursor:"pointer",
            letterSpacing:"0.02em",
          }}>Get Started</button>
        </nav>
      </div>

      {/* Main Container */}
      <div className="hero-main-wrap" style={{
        position:"relative",zIndex:10,
        display:"flex",flexDirection:"column",
        alignItems:"center",justifyContent:"center",
        minHeight:"100vh",padding:"100px 48px 80px",
        pointerEvents:"auto",
      }}>

        {/* Top Section - Catchy Headline */}
        <div style={{
          textAlign:"center",maxWidth:800,
        }}>
          <HeroBadge />
          <h1 style={{
            fontSize:"clamp(32px,4vw,56px)",fontWeight:700,lineHeight:1.1,
            color:"#006064",margin:"0 0 20px",letterSpacing:"-0.02em",
          }}>
            Launch Your MVP in 14 Days
          </h1>

          <p style={{
            color:"#006064",fontSize:"clamp(15px,1.5vw,18px)",
            lineHeight:1.8,maxWidth:580,margin:"0 auto 32px",
            fontWeight:600,
            textShadow:`
              0 0 10px rgba(0,172,193,0.6),
              0 0 20px rgba(0,172,193,0.4),
              0 0 30px rgba(0,172,193,0.2),
              0 2px 8px rgba(0,136,160,0.3)
            `,
            letterSpacing:"0.3px",
          }}>
            Turn your idea into a working product. No hiring. No delays. No guesswork.
          </p>

          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <button style={{
              background:"#00acc1",color:"#fff",border:"none",borderRadius:8,
              padding:"14px 32px",fontSize:15,fontWeight:600,
              cursor:"pointer",
            }}>
              Get My MVP Blueprint →
            </button>
            <button style={{
              background:"transparent",color:"#006064",border:"2px solid #00acc1",
              borderRadius:8,padding:"14px 32px",fontSize:15,fontWeight:600,
              cursor:"pointer",
              boxShadow:`
                0 0 15px rgba(0,172,193,0.5),
                inset 0 0 10px rgba(0,172,193,0.1),
                0 0 30px rgba(0,172,193,0.3)
              `,
              transition:"all 0.3s ease",
              position:"relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 0 25px rgba(0,172,193,0.8),
                inset 0 0 15px rgba(0,172,193,0.2),
                0 0 45px rgba(0,172,193,0.5)
              `;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 0 15px rgba(0,172,193,0.5),
                inset 0 0 10px rgba(0,172,193,0.1),
                0 0 30px rgba(0,172,193,0.3)
              `;
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              View Our Work
            </button>
          </div>

          <div style={{
            display:"flex",gap:24,justifyContent:"center",flexWrap:"wrap",
            marginTop:40,
          }}>
            {[
              {
                title:"14-Day Delivery",
                desc:"Fast turnaround",
                icon:(
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
              },
              {
                title:"Ship-It Guarantee",
                desc:"Or we keep building free",
                icon:(
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                ),
              },
              {
                title:"Full-Stack Build",
                desc:"Complete product",
                icon:(
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} style={{
                display:"flex",
                alignItems:"center",
                gap:10,
                padding:"10px 20px",
                background:"rgba(255,255,255,0.9)",
                border:"1px solid #b2ebf2",
                borderRadius:8,
              }}>
                <span style={{color:"#00acc1",display:"flex"}}>{item.icon}</span>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:"#006064"}}>{item.title}</div>
                  <div style={{fontSize:11,color:"#00838f"}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 2 — Countdown + Social Proof + Mockups */}
    <section style={{
      position:"relative",
      background:"linear-gradient(180deg,#e0f7fa 0%,#b2ebf2 100%)",
      padding:"80px 48px",
      overflow:"hidden",
    }}>
      <style>{`
        @keyframes softFloat {0%,100%{transform:translateY(0px)}50%{transform:translateY(-10px)}}
        @keyframes glowPulse {0%,100%{box-shadow:0 12px 28px rgba(0,172,193,0.14)}50%{box-shadow:0 22px 44px rgba(0,172,193,0.28)}}
        @keyframes ringSpin {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes cardDrift {0%,100%{transform:translateY(0px) rotateX(0deg) rotateY(0deg)}50%{transform:translateY(-8px) rotateX(4deg) rotateY(-5deg)}}
        @keyframes numberPulse {0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
        @keyframes fadeRise {from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes monitorFloat {0%,100%{transform:translate(0,5px)}50%{transform:translate(0,-3px)}}
        @keyframes tabletFloat {0%,100%{transform:translate(330px,45px)}50%{transform:translate(330px,38px)}}
        @keyframes phoneFloat {0%,100%{transform:translate(470px,75px)}50%{transform:translate(470px,66px)}}
        @keyframes chartDraw {from{stroke-dashoffset:280}to{stroke-dashoffset:0}}
        @keyframes signalPulse {0%,100%{opacity:1;transform:scale(1)}50%{opacity:.55;transform:scale(1.25)}}
        @keyframes monitor3d {0%,100%{transform:translate(25px,15px) rotate(0deg)}50%{transform:translate(25px,7px) rotate(-0.35deg)}}
        @keyframes tablet3d {0%,100%{transform:translate(360px,55px) rotate(0deg)}50%{transform:translate(360px,48px) rotate(0.5deg)}}
        @keyframes phone3d {0%,100%{transform:translate(510px,95px) rotate(0deg)}50%{transform:translate(510px,87px) rotate(-0.7deg)}}
        @keyframes kpiGlow {0%,100%{opacity:1;filter:drop-shadow(0 0 0 rgba(0,172,193,0))}50%{opacity:.88;filter:drop-shadow(0 0 6px rgba(0,172,193,.45))}}
        @keyframes liveBlink {0%,100%{opacity:1}50%{opacity:.55}}
        @keyframes clockPulse {0%,100%{transform:scale(1);box-shadow:0 8px 22px rgba(0,172,193,0.2)}50%{transform:scale(1.06);box-shadow:0 14px 30px rgba(0,172,193,0.35)}}
        @keyframes handRotateMinute {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes handRotateHour {from{transform:rotate(0deg)}to{transform:rotate(30deg)}}
        .showcase-wrap{position:relative;z-index:2;}
        .showcase-glow{position:absolute;border-radius:999px;filter:blur(14px);pointer-events:none;}
        .depth-shell{perspective:1400px;transform-style:preserve-3d;}
        .glass-card{background:rgba(255,255,255,0.86);border:1px solid rgba(0,172,193,0.25);backdrop-filter:blur(8px);}
        .timer-chip{animation:numberPulse 2.8s ease-in-out infinite;}
        .mockup-card{animation:cardDrift 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite;transform-style:preserve-3d;}
        .orbit-ring{position:absolute;border:1px dashed rgba(0,172,193,0.28);border-radius:50%;animation:ringSpin 18s linear infinite;}
        .floating-badge{animation:softFloat 4.2s ease-in-out infinite;}
        .trust-copy-enter{opacity:0;animation:fadeRise .8s ease-out forwards;}
        .trust-copy-enter.delay-1{animation-delay:.15s;}
        .trust-copy-enter.delay-2{animation-delay:.3s;}
        .device-shell-enter{opacity:0;animation:fadeRise .9s ease-out forwards;animation-delay:.2s;}
        .device-svg{width:118%;max-width:980px;height:auto;}
        .clock-logo-wrap{display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:999px;background:linear-gradient(135deg,#e0f7fa,#b2ebf2);border:1px solid #80deea;animation:clockPulse 2.6s ease-in-out infinite;}
        .clock-hand-minute{transform-origin:50% 50%;animation:handRotateMinute 6s linear infinite;}
        .clock-hand-hour{transform-origin:50% 50%;animation:handRotateHour 6s ease-in-out infinite alternate;}
        .countdown-head{display:flex;align-items:center;justify-content:center;gap:22px;margin-bottom:18px;text-align:left;}
        @media (max-width: 1200px){
          .device-svg{width:108%;max-width:900px;}
        }
        @media (max-width: 980px){
          .hero-proof-grid{grid-template-columns:1fr !important;gap:18px !important;}
          .mockup-grid{grid-template-columns:1fr !important;}
          .device-svg{width:100%;max-width:760px;}
        }
        @media (max-width: 760px){
          .countdown-head{flex-direction:column;gap:12px;text-align:center;}
        }
      `}</style>

      <div style={{maxWidth:1100,margin:"0 auto"}}>

        <div style={{
          display:"grid",gridTemplateColumns:"0.78fr 1.22fr",gap:60,alignItems:"center",
        }}>
          {/* Left - Text Content */}
          <div className="trust-copy-enter">
            <div className="trust-copy-enter delay-1" style={{
              fontSize:14,fontWeight:600,color:"#00acc1",
              textTransform:"uppercase",letterSpacing:"0.08em",
              marginBottom:16,
            }}>
              Trusted by Founders
            </div>
            <h2 className="trust-copy-enter delay-1" style={{
              fontSize:"clamp(24px,3vw,36px)",fontWeight:700,lineHeight:1.2,
              color:"#006064",margin:"0 0 20px",
            }}>
              50+ founders have launched with MVP Sprint
            </h2>
            <div className="trust-copy-enter delay-2" style={{
              display:"flex",gap:4,marginBottom:24,
            }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#00acc1">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              ))}
            </div>
            
            {/* Testimonials */}
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <FadeInUp delay={0.35}>
                <div className="trust-copy-enter delay-2" style={{
                  padding:"20px 24px",
                  background:"white",
                  borderRadius:12,
                  border:"1px solid #b2ebf2",
                }}>
                  <p style={{fontSize:14,lineHeight:1.6,color:"#006064",margin:"0 0 12px",fontStyle:"italic"}}>
                    "Elden Dev shipped my entire MVP in 11 days. I used it to close my first investor meeting."
                  </p>
                  <div style={{fontSize:13,fontWeight:600,color:"#00838f"}}>— Jason R., SaaS Founder</div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.5}>
                <div className="trust-copy-enter delay-2" style={{
                  padding:"20px 24px",
                  background:"white",
                  borderRadius:12,
                  border:"1px solid #b2ebf2",
                }}>
                  <p style={{fontSize:14,lineHeight:1.6,color:"#006064",margin:"0 0 12px",fontStyle:"italic"}}>
                    "Launched lean, validated fast. The blueprint phase alone was worth the investment."
                  </p>
                  <div style={{fontSize:13,fontWeight:600,color:"#00838f"}}>— Karen L., E-commerce</div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Right - Device Mockups */}
          <SlideRight>
            <div style={{
              display:"flex",flexDirection:"column",
              alignItems:"center",position:"relative",
            }}>
          <svg className="device-svg" viewBox="0 0 620 280">
            <defs>
              <linearGradient id="deskFrame" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#374151"/>
                <stop offset="100%" stopColor="#1f2937"/>
              </linearGradient>
              <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0f9ff"/>
                <stop offset="100%" stopColor="#e0f7fa"/>
              </linearGradient>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00bcd4"/>
                <stop offset="100%" stopColor="#00acc1"/>
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.15"/>
              </filter>
            </defs>
            
            {/* DESKTOP - Center */}
            <g filter="url(#shadow)" style={{animation:"monitor3d 5.8s ease-in-out infinite",transformOrigin:"210px 120px"}} transform="translate(25, 15)">
              <rect x="60" y="15" width="300" height="195" rx="10" fill="url(#deskFrame)"/>
              <rect x="68" y="23" width="284" height="179" rx="6" fill="url(#screenGrad)"/>
              <rect x="68" y="23" width="284" height="24" fill="#006064"/>
              <text x="80" y="39" fontSize="9" fill="white" fontWeight="600">ELDEN DEV</text>
              <text x="196" y="39" fontSize="6" fill="rgba(255,255,255,0.85)">Analytics Suite</text>
              <rect x="286" y="29" width="46" height="11" rx="5.5" fill="rgba(255,255,255,0.2)"/>
              <text x="293" y="36.5" fontSize="5" fill="white" style={{animation:"liveBlink 1.6s ease-in-out infinite"}}>Live</text>
              <circle cx="338" cy="35" r="3" fill="rgba(255,255,255,0.5)"/>
              <circle cx="330" cy="35" r="3" fill="rgba(255,255,255,0.5)"/>
              <circle cx="322" cy="35" r="3" fill="rgba(255,255,255,0.5)"/>
              <rect x="68" y="47" width="38" height="155" fill="#e0f7fa"/>
              <rect x="76" y="58" width="22" height="4" rx="2" fill="#00acc1"/>
              <rect x="76" y="66" width="22" height="4" rx="2" fill="#b2ebf2"/>
              <rect x="76" y="74" width="22" height="4" rx="2" fill="#b2ebf2"/>
              <rect x="76" y="90" width="22" height="4" rx="2" fill="#b2ebf2"/>
              <rect x="76" y="98" width="22" height="4" rx="2" fill="#b2ebf2"/>
              <rect x="114" y="50" width="120" height="58" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="6"/>
              <text x="122" y="63" fontSize="6" fill="#00838f" fontWeight="600">REVENUE</text>
              <text x="122" y="82" fontSize="15" fill="#00acc1" fontWeight="700" style={{animation:"kpiGlow 2.2s ease-in-out infinite"}}>$48,240</text>
              <text x="122" y="95" fontSize="5" fill="#00838f">↑ 24% growth</text>
              <rect x="242" y="50" width="102" height="58" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="6"/>
              <text x="250" y="63" fontSize="6" fill="#00838f" fontWeight="600">ACTIVE USERS</text>
              <text x="250" y="82" fontSize="15" fill="#006064" fontWeight="700" style={{animation:"kpiGlow 2.2s ease-in-out .4s infinite"}}>1,284</text>
              <text x="250" y="95" fontSize="5" fill="#00838f">↑ 18% this week</text>
              <rect x="114" y="116" width="230" height="46" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="6"/>
              <text x="122" y="128" fontSize="5.5" fill="#00838f" fontWeight="600">WEEKLY ACTIVITY</text>
              <line x1="121" y1="156" x2="338" y2="156" stroke="#e0f7fa" strokeWidth="1"/>
              <line x1="121" y1="146" x2="338" y2="146" stroke="#e0f7fa" strokeWidth="0.8"/>
              <polyline points="125,152 145,148 165,150 185,142 205,145 225,138 245,140 265,134 285,136 305,130" fill="none" stroke="url(#chartGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{strokeDasharray:240,strokeDashoffset:240,animation:"chartDraw 2.4s ease-out .2s forwards"}}/>
              <rect x="114" y="166" width="230" height="25" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="6"/>
              <text x="122" y="176" fontSize="5" fill="#00838f" fontWeight="600">LATEST TRANSACTIONS</text>
              <text x="122" y="186" fontSize="4.5" fill="#006064">Stripe · Team Plan</text>
              <text x="204" y="186" fontSize="4.5" fill="#006064">Today 09:41</text>
              <text x="317" y="186" fontSize="4.5" fill="#14b8a6" fontWeight="700">+$2,400</text>
              <rect x="175" y="205" width="70" height="10" fill="url(#deskFrame)" rx="2"/>
              <rect x="195" y="215" width="30" height="8" fill="url(#deskFrame)" rx="2"/>
            </g>
            
            {/* TABLET - Right */}
            <g filter="url(#shadow)" style={{animation:"tablet3d 6.1s ease-in-out infinite",transformOrigin:"420px 130px"}} transform="translate(360, 55)">
              <rect x="0" y="0" width="140" height="185" rx="8" fill="#1f2937"/>
              <rect x="6" y="6" width="128" height="173" rx="4" fill="url(#screenGrad)"/>
              <rect x="6" y="6" width="128" height="22" fill="#006064"/>
              <text x="12" y="15" fontSize="4.5" fill="rgba(255,255,255,0.9)">9:41</text>
              <circle cx="126" cy="13" r="2" fill="rgba(255,255,255,0.65)"/>
              <circle cx="121" cy="13" r="2" fill="rgba(255,255,255,0.65)"/>
              <text x="14" y="21" fontSize="7" fill="white" fontWeight="600">Dashboard</text>
              <rect x="12" y="34" width="116" height="26" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="4"/>
              <text x="17" y="45" fontSize="5" fill="#00838f">MRR</text>
              <text x="34" y="45" fontSize="7" fill="#006064" fontWeight="700" style={{animation:"kpiGlow 2s ease-in-out infinite"}}>$48K</text>
              <text x="78" y="45" fontSize="5" fill="#00838f">Users</text>
              <text x="98" y="45" fontSize="7" fill="#006064" fontWeight="700" style={{animation:"kpiGlow 2s ease-in-out .3s infinite"}}>1.2K</text>
              <rect x="17" y="50" width="96" height="4" rx="2" fill="#e0f7fa"/>
              <rect x="17" y="50" width="66" height="4" rx="2" fill="#00acc1"/>
              <rect x="12" y="65" width="116" height="44" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="4"/>
              <text x="17" y="75" fontSize="5" fill="#00838f" fontWeight="600">Conversion Funnel</text>
              <rect x="17" y="81" width="26" height="22" rx="2" fill="#e0f7fa"/>
              <rect x="47" y="85" width="26" height="18" rx="2" fill="#b2ebf2"/>
              <rect x="77" y="89" width="26" height="14" rx="2" fill="#80deea"/>
              <text x="19" y="95" fontSize="4" fill="#006064">2,450</text>
              <text x="49" y="96" fontSize="4" fill="#006064">680</text>
              <text x="79" y="96" fontSize="4" fill="#006064">214</text>
              <rect x="12" y="114" width="116" height="49" fill="white" stroke="#b2ebf2" strokeWidth="1" rx="4"/>
              <text x="17" y="124" fontSize="5" fill="#00838f" fontWeight="600">Recent Activity</text>
              <line x1="17" y1="128" x2="122" y2="128" stroke="#e0f7fa" strokeWidth="0.5"/>
              <circle cx="19" cy="136" r="2.5" fill="#00acc1" style={{transformOrigin:"19px 136px",animation:"signalPulse 2s ease-in-out infinite"}}/>
              <text x="25" y="139" fontSize="4" fill="#006064">New signup</text>
              <text x="103" y="139" fontSize="3.5" fill="#0097a7">2m</text>
              <circle cx="19" cy="147" r="2.5" fill="#00bcd4" style={{transformOrigin:"19px 147px",animation:"signalPulse 2s ease-in-out .25s infinite"}}/>
              <text x="25" y="150" fontSize="4" fill="#006064">Payment</text>
              <text x="103" y="150" fontSize="3.5" fill="#0097a7">5m</text>
              <circle cx="19" cy="158" r="2.5" fill="#00838f" style={{transformOrigin:"19px 158px",animation:"signalPulse 2s ease-in-out .5s infinite"}}/>
              <text x="25" y="161" fontSize="4" fill="#006064">Feature used</text>
              <text x="103" y="161" fontSize="3.5" fill="#0097a7">12m</text>
            </g>
            
            {/* PHONE - Far Right */}
            <g filter="url(#shadow)" style={{animation:"phone3d 5.3s ease-in-out infinite",transformOrigin:"548px 162px"}} transform="translate(510, 95)">
              <rect x="0" y="0" width="85" height="155" rx="12" fill="#1f2937"/>
              <rect x="4" y="4" width="77" height="147" rx="10" fill="url(#screenGrad)"/>
              <rect x="27" y="4" width="31" height="9" rx="4" fill="#1f2937"/>
              <rect x="4" y="4" width="77" height="13" fill="#006064"/>
              <text x="10" y="13" fontSize="4.5" fill="white">9:41</text>
              <text x="10" y="28" fontSize="5.2" fill="#00838f" fontWeight="600">Dashboard</text>
              <rect x="8" y="34" width="69" height="26" fill="white" stroke="#b2ebf2" strokeWidth="0.5" rx="4"/>
              <text x="12" y="43" fontSize="4" fill="#00838f">Available Balance</text>
              <text x="12" y="54" fontSize="8" fill="#00acc1" fontWeight="700" style={{animation:"kpiGlow 1.9s ease-in-out infinite"}}>$12,460</text>
              <rect x="8" y="64" width="33" height="16" rx="3" fill="white" stroke="#b2ebf2" strokeWidth="0.5"/>
              <rect x="44" y="64" width="33" height="16" rx="3" fill="white" stroke="#b2ebf2" strokeWidth="0.5"/>
              <text x="12" y="71" fontSize="3.5" fill="#00838f">Revenue</text>
              <text x="12" y="77" fontSize="4.5" fill="#006064" fontWeight="700">$48K</text>
              <text x="48" y="71" fontSize="3.5" fill="#00838f">Users</text>
              <text x="48" y="77" fontSize="4.5" fill="#006064" fontWeight="700">1.2K</text>
              <rect x="8" y="84" width="69" height="32" fill="white" stroke="#b2ebf2" strokeWidth="0.5" rx="4"/>
              <text x="12" y="92" fontSize="3.8" fill="#00838f">Recent Activity</text>
              <circle cx="12" cy="99" r="1.8" fill="#00acc1" style={{transformOrigin:"12px 99px",animation:"signalPulse 1.8s ease-in-out infinite"}}/>
              <text x="16" y="100.5" fontSize="3.2" fill="#006064">New signup</text>
              <text x="62" y="100.5" fontSize="3" fill="#0097a7">2m</text>
              <circle cx="12" cy="106" r="1.8" fill="#00bcd4" style={{transformOrigin:"12px 106px",animation:"signalPulse 1.8s ease-in-out .25s infinite"}}/>
              <text x="16" y="107.5" fontSize="3.2" fill="#006064">Payment</text>
              <text x="62" y="107.5" fontSize="3" fill="#0097a7">5m</text>
              <rect x="8" y="121" width="16" height="16" rx="4" fill="#e0f7fa"/>
              <rect x="27" y="121" width="16" height="16" rx="4" fill="#e0f7fa"/>
              <rect x="46" y="121" width="16" height="16" rx="4" fill="#e0f7fa"/>
              <rect x="65" y="121" width="12" height="16" rx="4" fill="#e0f7fa"/>
              <circle cx="16" cy="129" r="2" fill="#00acc1"/>
              <circle cx="35" cy="129" r="2" fill="#00acc1"/>
              <circle cx="54" cy="129" r="2" fill="#00acc1"/>
              <rect x="30" y="143" width="25" height="2.5" rx="1.25" fill="#b2ebf2"/>
            </g>
          </svg>
          <p style={{
            fontSize:20,fontWeight:700,color:"#006064",
            margin:"-6px 0 0",textAlign:"center",
            transform:"translateX(10%)",
            position:"relative",zIndex:3,
          }}>
            Real-Time Dashboard across all devices
          </p>
            </div>
          </SlideRight>
        </div>

        <div style={{textAlign:"center",marginTop:28}}>
          <div className="floating-badge" style={{
            display:"inline-block",
            padding:"14px 28px",
            background:"linear-gradient(135deg,#00acc1,#00838f)",
            borderRadius:10,
            fontSize:14,fontWeight:600,
            color:"white",
            boxShadow:"0 16px 34px rgba(2,132,199,0.35)",
            position:"relative",zIndex:1,
          }}>
            14 days — idea to live product
          </div>
        </div>

        {/* Countdown Timer Section */}
        <div style={{
          marginTop:48,
          padding:"40px 48px",
          background:"white",
          borderRadius:16,
          border:"1px solid #b2ebf2",
          textAlign:"center",
        }}>
          <div className="countdown-head">
            <div className="clock-logo-wrap" style={{width:96,height:96}} aria-hidden="true">
              <svg viewBox="0 0 48 48" width="54" height="54">
                <circle cx="24" cy="24" r="16" fill="white" stroke="#00acc1" strokeWidth="2"/>
                <line x1="24" y1="24" x2="24" y2="14" stroke="#00838f" strokeWidth="2.4" strokeLinecap="round" className="clock-hand-hour"/>
                <line x1="24" y1="24" x2="32" y2="24" stroke="#00acc1" strokeWidth="2.2" strokeLinecap="round" className="clock-hand-minute"/>
                <circle cx="24" cy="24" r="2.2" fill="#006064"/>
              </svg>
            </div>
            <div>
              <div style={{
                fontSize:14,fontWeight:700,color:"#00acc1",
                textTransform:"uppercase",letterSpacing:"0.1em",
                marginBottom:10,
              }}>
                Limited Spots Available
              </div>
              <h3 style={{
                fontSize:"clamp(18px,2vw,24px)",fontWeight:700,
                color:"#006064",margin:"0 0 8px",
              }}>
                SPOTS CLOSING FOR THIS MONTH'S COHORT
              </h3>
              <p style={{
                fontSize:14,color:"#00838f",margin:0,
              }}>
                Secure your spot before the cohort fills up
              </p>
            </div>
          </div>
          <div style={{marginBottom:32}} />
          <CountdownTimer />
          <div style={{marginTop:32}}>
            <button style={{
              background:"linear-gradient(135deg,#00acc1,#00838f)",
              color:"white",border:"none",borderRadius:10,
              padding:"16px 40px",fontSize:15,fontWeight:600,
              cursor:"pointer",
              boxShadow:"0 8px 24px rgba(0,172,193,0.35)",
              transition:"all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,172,193,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,172,193,0.35)";
            }}>
              Reserve Your Spot →
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 3 — Pain / Urgency */}
    <SectionThreePain />

    {/* SECTION 3.5 — Truth */}
    <ScrollSection threshold={0.2} style={{
      position:"relative",
      background:"#006064",
      padding:"80px 48px",
      textAlign:"center",
      overflow:"hidden",
    }}>
      <div style={{
        position:"absolute",
        inset:0,
        pointerEvents:"none",
        background:"radial-gradient(circle at 20% 20%, rgba(0,188,212,0.22) 0%, transparent 45%), radial-gradient(circle at 78% 80%, rgba(0,172,193,0.2) 0%, transparent 42%)",
      }}/>
      <div style={{
        position:"absolute",
        top:34,
        left:"8%",
        width:120,
        height:120,
        borderRadius:"50%",
        border:"1px solid rgba(178,235,242,0.25)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute",
        bottom:26,
        right:"10%",
        width:160,
        height:40,
        borderRadius:999,
        border:"1px solid rgba(178,235,242,0.22)",
        transform:"rotate(-10deg)",
        pointerEvents:"none",
      }}/>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{
          display:"inline-flex",
          alignItems:"center",
          justifyContent:"center",
          gap:8,
          padding:"8px 16px",
          borderRadius:999,
          border:"1px solid rgba(178,235,242,0.45)",
          background:"rgba(255,255,255,0.08)",
          backdropFilter:"blur(6px)",
          fontSize:12,
          fontWeight:700,
          color:"rgba(255,255,255,0.85)",
          letterSpacing:"0.18em",
          textTransform:"uppercase",
          marginBottom:22,
        }}>
          <span style={{width:7,height:7,borderRadius:"50%",background:"#00e5ff",boxShadow:"0 0 12px rgba(0,229,255,0.7)"}}/>
          THE TRUTH IS...
        </div>
        <h2 style={{
          fontSize:"clamp(28px,3.5vw,42px)",
          fontWeight:800,
          lineHeight:1.2,
          color:"white",
          margin:"0 0 20px",
        }}>
          Startups don&apos;t fail because of bad ideas.
        </h2>
        <p style={{
          fontSize:"clamp(24px,2.5vw,32px)",
          fontWeight:700,
          color:"#00acc1",
          margin:"0 auto",
          maxWidth:620,
          padding:"18px 22px",
          borderRadius:14,
          background:"rgba(0,172,193,0.16)",
          border:"1px solid rgba(178,235,242,0.35)",
          boxShadow:"0 12px 30px rgba(0,0,0,0.15)",
        }}>
          They fail because they never ship.
        </p>
        <div style={{
          width:130,
          height:2,
          margin:"22px auto 0",
          borderRadius:2,
          background:"linear-gradient(90deg, transparent, #00e5ff, transparent)",
        }}/>
      </div>
    </ScrollSection>

    {/* SECTION 3.55 — Why Most Startups Never Launch */}
    <ScrollSection threshold={0.1}>
      <section
        style={{
          position:"relative",
          background:"linear-gradient(180deg, #f4fcff 0%, #ffffff 100%)",
          padding:"100px 48px",
          overflow:"hidden",
        }}
      >
        <style>{`
          @keyframes launchReveal {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes launchDrift {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes launchPulse {
            0%, 100% { transform: scale(1); opacity: .7; box-shadow: 0 0 0 0 rgba(6,182,212,0.45); }
            50% { transform: scale(1.08); opacity: 1; box-shadow: 0 0 0 8px rgba(6,182,212,0); }
          }
          @keyframes launchFlow {
            0% { left: 0%; }
            100% { left: calc(100% - 14px); }
          }
          @keyframes launchShimmer {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
          .launch-section-heading { animation: launchReveal .7s ease-out forwards; }
          .launch-card-item { animation: launchReveal .7s ease-out forwards; opacity: 0; }
          .launch-card-item:hover { transform: translateY(-6px); }
          .launch-cta-panel { animation: launchDrift 4s ease-in-out infinite; }
          .launch-live-dot { animation: launchPulse 1.6s ease-in-out infinite; }
          .launch-connector { position: relative; overflow: visible; }
          .launch-connector::after {
            content: "";
            position: absolute;
            top: -5.5px;
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: #06b6d4;
            box-shadow: 0 0 18px rgba(6,182,212,0.55);
            animation: launchFlow 4.2s linear infinite;
          }
          .launch-image-shimmer {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 40%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0));
            animation: launchShimmer 2.8s ease-in-out infinite;
            pointer-events: none;
          }
          @media (max-width: 1080px) {
            .launch-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
            .launch-connector { display: none !important; }
          }
          @media (max-width: 720px) {
            .launch-grid { grid-template-columns: 1fr !important; }
            .launch-cta-row { flex-direction: column !important; align-items: stretch !important; }
          }
        `}</style>

        <div
          style={{
            position:"absolute",
            inset:0,
            backgroundImage:"radial-gradient(circle at 12% 12%, rgba(34,211,238,0.22), transparent 38%), radial-gradient(circle at 88% 84%, rgba(239,68,68,0.14), transparent 34%)",
            pointerEvents:"none",
          }}
        />

        <div style={{maxWidth:1120, margin:"0 auto", position:"relative"}}>
          <div className="launch-section-heading" style={{textAlign:"center", marginBottom:52}}>
            <div
              style={{
                display:"inline-flex",
                alignItems:"center",
                gap:10,
                padding:"7px 16px",
                borderRadius:999,
                border:"1px solid #a5f3fc",
                background:"#ecfeff",
                marginBottom:18,
              }}
            >
              <span style={{width:8, height:8, borderRadius:"50%", background:"#06b6d4"}} />
              <span style={{fontSize:12, fontWeight:700, letterSpacing:"0.09em", color:"#0e7490"}}>FOUNDERS LOSE MOMENTUM HERE</span>
            </div>
            <h2
              style={{
                fontSize:"clamp(32px,4vw,50px)",
                fontWeight:800,
                lineHeight:1.12,
                color:"#083344",
                margin:"0 0 16px",
                fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Why Most Startups Never Launch
            </h2>
            <p
              style={{
                fontSize:18,
                lineHeight:1.7,
                color:"#3b5563",
                maxWidth:760,
                margin:"0 auto",
                fontFamily:"'Manrope', sans-serif",
              }}
            >
              The idea is strong. The execution path is not. Without a tight system, teams drift into revisions, scope creep, and delayed launches until runway disappears.
            </p>
            <div style={{display:"inline-flex", alignItems:"center", gap:8, marginTop:16, padding:"6px 12px", borderRadius:999, background:"#ecfeff", border:"1px solid #a5f3fc"}}>
              <span className="launch-live-dot" style={{width:9, height:9, borderRadius:"50%", background:"#06b6d4"}} />
              <span style={{fontSize:11, fontWeight:700, letterSpacing:"0.08em", color:"#0e7490"}}>LIVE EXECUTION MAP</span>
            </div>
          </div>

          <div style={{position:"relative", marginBottom:40}}>
            <div
              className="launch-connector"
              style={{
                position:"absolute",
                top:170,
                left:80,
                right:80,
                height:3,
                borderRadius:999,
                background:"linear-gradient(90deg, #06b6d4 0%, #22d3ee 45%, #fb7185 100%)",
                opacity:0.4,
              }}
            />

            <div className="launch-grid" style={{display:"grid", gridTemplateColumns:"repeat(4, minmax(0,1fr))", gap:18}}>
              {[
                {
                  step:"01",
                  title:"Great Idea, Big Vision",
                  copy:"Founder starts with urgency and market confidence.",
                  label:"Momentum",
                  img:"/images/1.png",
                  tone:"good",
                },
                {
                  step:"02",
                  title:"Team Hired, Scope Expands",
                  copy:"Build starts but requirements keep changing weekly.",
                  label:"Complexity",
                  img:"/images/2.png",
                  tone:"good",
                },
                {
                  step:"03",
                  title:"Delays and Rework",
                  copy:"Core features are unstable while timelines slip.",
                  label:"Friction",
                  img:"/images/3.png",
                  tone:"risk",
                },
                {
                  step:"04",
                  title:"Runway Burned",
                  copy:"Budget is consumed before users ever touch product.",
                  label:"No Launch",
                  img:"/images/4.png",
                  tone:"risk",
                },
              ].map((item, idx) => {
                const risk = item.tone === "risk";
                return (
                  <article
                    key={item.step}
                    className="launch-card-item"
                    style={{
                      animationDelay: `${idx * 0.12}s`,
                      borderRadius:22,
                      background:"white",
                      border:`1px solid ${risk ? "#fecaca" : "#bae6ef"}`,
                      boxShadow: risk ? "0 16px 34px rgba(239,68,68,0.14)" : "0 16px 34px rgba(8,51,68,0.09)",
                      overflow:"hidden",
                      position:"relative",
                      transition:"transform .3s ease, box-shadow .3s ease",
                    }}
                  >
                    <div style={{position:"relative", height:165, background:risk ? "#fff1f2" : "#ecfeff"}}>
                      <img src={item.img} alt={item.title} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}} />
                      <div className="launch-image-shimmer" style={{animationDelay:`${idx * 0.35}s`}} />
                      <div
                        style={{
                          position:"absolute",
                          top:12,
                          left:12,
                          borderRadius:999,
                          padding:"5px 10px",
                          fontSize:11,
                          fontWeight:700,
                          letterSpacing:"0.06em",
                          color:risk ? "#7f1d1d" : "#164e63",
                          background:risk ? "rgba(254,226,226,0.92)" : "rgba(207,250,254,0.92)",
                        }}
                      >
                        {item.step}
                      </div>
                    </div>

                    <div style={{padding:"16px 16px 18px"}}>
                      <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
                        <span style={{fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:risk ? "#b91c1c" : "#0e7490"}}>{item.label}</span>
                      </div>
                      <h3 style={{fontSize:20, lineHeight:1.2, margin:"0 0 8px", color:"#083344", fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>{item.title}</h3>
                      <p style={{fontSize:14, lineHeight:1.62, margin:0, color:"#3b5563", fontFamily:"'Manrope', sans-serif"}}>{item.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="launch-cta-panel"
            style={{
              borderRadius:24,
              border:"1px solid #99f6e4",
              background:"linear-gradient(125deg, #052e2b 0%, #065f5b 60%, #0f766e 100%)",
              padding:"30px 26px",
              boxShadow:"0 20px 48px rgba(6,95,91,0.28)",
            }}
          >
            <div className="launch-cta-row" style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:18}}>
              <div>
                <p style={{margin:"0 0 8px", color:"#99f6e4", fontSize:12, fontWeight:700, letterSpacing:"0.08em"}}>THE FIXED PATH</p>
                <h3 style={{margin:"0 0 8px", color:"#ecfeff", fontSize:"clamp(24px,2.8vw,34px)", lineHeight:1.2, fontWeight:800, fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>
                  MVP Sprint ships in 14 days, not 14 months.
                </h3>
                <p style={{margin:0, color:"rgba(236,254,255,0.85)", fontSize:15, lineHeight:1.6, fontFamily:"'Manrope', sans-serif"}}>
                  Defined scope, daily progress, and one outcome: your product goes live with real users.
                </p>
              </div>
              <div style={{display:"inline-flex", alignItems:"center", gap:12, borderRadius:16, border:"1px solid rgba(153,246,228,0.5)", background:"rgba(240,253,250,0.12)", padding:"14px 18px", whiteSpace:"nowrap"}}>
                <span style={{fontSize:26, color:"#5eead4"}}>✓</span>
                <span style={{fontSize:20, fontWeight:800, color:"#ecfeff", fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>14 Days → Live MVP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollSection>

    {/* SECTION 3.6 — Promise */}
    <ScrollSection threshold={0.1}>
      <section style={{
        position:"relative",
        background:"white",
        padding:"100px 48px",
        overflow:"hidden",
      }}>
        <style>{`
          @keyframes promiseFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes promiseReveal {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .promise-panel { animation: promiseFloat 4.2s ease-in-out infinite; }
          .promise-sticker { animation: promiseReveal .65s ease-out forwards; opacity: 0; }
          @media (max-width: 980px) {
            .promise-layout { grid-template-columns: 1fr !important; }
            .promise-stickers { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div style={{
          position:"absolute",
          inset:0,
          backgroundImage:"radial-gradient(circle at 30% 50%, rgba(0,172,193,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,96,100,0.04) 0%, transparent 40%)",
          pointerEvents:"none",
        }}/>
        <div className="promise-layout" style={{maxWidth:1080,margin:"0 auto",position:"relative",display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:26,alignItems:"stretch"}}>
          <div style={{
            borderRadius:24,
            border:"1px solid #b2ebf2",
            background:"linear-gradient(150deg, #ffffff 0%, #f0fdff 100%)",
            padding:"30px clamp(18px,3vw,34px)",
            boxShadow:"0 18px 40px rgba(0,172,193,0.12)",
          }}>
            <div style={{
              display:"inline-flex",
              alignItems:"center",
              gap:8,
              padding:"6px 13px",
              borderRadius:999,
              border:"1px solid #a5f3fc",
              background:"#ecfeff",
              marginBottom:16,
            }}>
              <span style={{width:8,height:8,borderRadius:"50%",background:"#06b6d4"}} />
              <span style={{fontSize:12,fontWeight:700,color:"#0e7490",letterSpacing:"0.09em"}}>IN THE NEXT 14 DAYS</span>
            </div>

            <h3 style={{
              fontSize:"clamp(30px,3.9vw,46px)",
              fontWeight:800,
              lineHeight:1.15,
              color:"#005b63",
              margin:"0 0 14px",
              fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            }}>
              You could have a real, working product.
            </h3>

            <p style={{fontSize:18,color:"#0f766e",margin:"0 0 18px",fontWeight:600}}>
              Not a mockup. Not a prototype.
            </p>

            <div style={{
              height:2,
              width:140,
              background:"linear-gradient(90deg, rgba(34,211,238,0), rgba(34,211,238,1), rgba(34,211,238,0))",
              borderRadius:999,
              marginBottom:16,
            }} />

            <p style={{fontSize:15,lineHeight:1.7,color:"#3b5563",margin:0}}>
              A launch-ready app with real user flows, clear onboarding, and data you can show to investors immediately.
            </p>
          </div>

          <div className="promise-panel" style={{
            borderRadius:24,
            border:"1px solid #b2ebf2",
            background:"linear-gradient(140deg, #083344 0%, #0f766e 58%, #0891b2 100%)",
            padding:"22px",
            position:"relative",
            overflow:"hidden",
            boxShadow:"0 20px 42px rgba(8,51,68,0.24)",
          }}>
            <div style={{
              position:"absolute",
              top:-70,
              right:-60,
              width:220,
              height:220,
              borderRadius:"50%",
              background:"radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)",
            }} />
            <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.08em",color:"#99f6e4",marginBottom:10}}>A LIVE APP YOU CAN</div>

            <div style={{position:"relative",height:190,borderRadius:14,overflow:"hidden",border:"1px solid rgba(153,246,228,0.35)",background:"#f8fdff"}}>
              <div style={{display:"flex",height:"100%"}}>
                {/* Sidebar Mock */}
                <div style={{width:40,background:"white",borderRight:"1px solid #eef9fc",padding:"10px 5px",display:"flex",flexDirection:"column",gap:8}}>
                  <div style={{width:20,height:20,borderRadius:4,background:"#0ea5b8",opacity:0.8}} />
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{width:20,height:20,borderRadius:4,background:"#eef9fc"}} />
                  ))}
                </div>
                {/* Main Content Mock */}
                <div style={{flex:1,padding:12,display:"flex",flexDirection:"column",gap:10}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{width:80,height:12,borderRadius:6,background:"#0c7e90",opacity:0.2}} />
                    <div style={{width:40,height:12,borderRadius:6,background:"#0c7e90",opacity:0.1}} />
                  </div>
                  
                  {/* Stats Row */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                    {[
                      {label:"Revenue",val:"$42.5k",color:"#0ea5b8"},
                      {label:"Users",val:"1,280",color:"#0c7e90"},
                      {label:"Growth",val:"+24%",color:"#14b8a6"}
                    ].map((s,i) => (
                      <motion.div 
                        key={i}
                        initial={{opacity:0,y:10}}
                        animate={{opacity:1,y:0}}
                        transition={{delay:0.2 + i*0.1}}
                        style={{padding:8,background:"white",borderRadius:8,border:"1px solid #eef9fc",boxShadow:"0 2px 4px rgba(0,0,0,0.02)"}}
                      >
                        <div style={{fontSize:8,color:"#64748b",marginBottom:2}}>{s.label}</div>
                        <div style={{fontSize:12,fontWeight:700,color:s.color}}>{s.val}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Mock */}
                  <div style={{flex:1,background:"white",borderRadius:8,border:"1px solid #eef9fc",padding:8,position:"relative",overflow:"hidden"}}>
                    <div style={{fontSize:9,fontWeight:700,color:"#0b6b7e",marginBottom:8}}>Activity Overview</div>
                    <svg viewBox="0 0 200 60" style={{width:"100%",height:40}}>
                      <motion.path
                        d="M0,50 Q20,45 40,30 T80,35 T120,15 T160,25 T200,5"
                        fill="none"
                        stroke="#0ea5b8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 1 }}
                      />
                      <motion.path
                        d="M0,50 Q20,45 40,30 T80,35 T120,15 T160,25 T200,5 V60 H0 Z"
                        fill="#0ea5b8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1 }}
                      />
                    </svg>
                    {/* Animated Data Points */}
                    {[20, 60, 100, 140, 180].map((x, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                        style={{
                          position: "absolute",
                          left: `${(x/200)*100}%`,
                          top: 35,
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#0ea5b8",
                          border: "1px solid white"
                        }}
                      />
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div style={{display:"flex",flexDirection:"column",gap:4}}>
                    <div style={{fontSize:8,fontWeight:700,color:"#64748b"}}>Recent Events</div>
                    {[1,2].map(i => (
                      <motion.div 
                        key={i}
                        initial={{x:-10,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{delay:1 + i*0.2}}
                        style={{height:14,background:"white",borderRadius:4,border:"1px solid #eef9fc",display:"flex",alignItems:"center",padding:"0 6px",gap:6}}
                      >
                        <div style={{width:6,height:6,borderRadius:"50%",background:i===1?"#14b8a6":"#ef4444"}} />
                        <div style={{width:60,height:4,borderRadius:2,background:"#e2e8f0"}} />
                        <div style={{marginLeft:"auto",width:20,height:4,borderRadius:2,background:"#f1f5f9"}} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fake Cursor Animation */}
              <motion.div
                animate={{
                  x: [100, 150, 120, 180, 100],
                  y: [150, 100, 130, 80, 150],
                  scale: [1, 0.9, 1, 0.9, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: "absolute",
                  width: 12,
                  height: 12,
                  zIndex: 10,
                  pointerEvents: "none"
                }}
              >
                <svg viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="1">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
              </motion.div>

              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(8,51,68,0.2), transparent)"}} />
              <div style={{position:"absolute",left:12,bottom:12,right:12,display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}}>
                <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 10px",borderRadius:999,background:"rgba(236,254,255,0.92)",color:"#0e7490",fontSize:11,fontWeight:700,letterSpacing:"0.06em",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>
                  <span style={{width:7,height:7,borderRadius:"50%",background:"#06b6d4"}} />
                  LIVE APP SIMULATION
                </div>
                <div style={{padding:"5px 10px",borderRadius:8,background:"rgba(8,51,68,0.8)",color:"#ecfeff",fontSize:11,fontWeight:700,backdropFilter:"blur(4px)"}}>SHIPS DAY 14</div>
              </div>
            </div>
          </div>

          <div className="promise-stickers" style={{gridColumn:"1 / -1",display:"grid",gridTemplateColumns:"repeat(3, minmax(0,1fr))",gap:14}}>
            {[
              {title:"Show investors",desc:"Present traction with clean metrics and flows.",kind:"invest"},
              {title:"Onboard users",desc:"Start collecting behavior from real users.",kind:"onboard"},
              {title:"Start growing immediately",desc:"Launch campaigns with a product that works.",kind:"growth"},
            ].map((item,i) => (
              <div key={item.title} className="promise-sticker" style={{
                animationDelay:`${i * 0.14}s`,
                border:"1px solid #b2ebf2",
                borderRadius:16,
                background:"#ffffff",
                boxShadow:"0 10px 24px rgba(0,172,193,0.1)",
                overflow:"hidden",
              }}>
                <div style={{position:"relative",height:112,background:"linear-gradient(140deg,#ecfeff,#d9f8fc)"}}>
                  <svg viewBox="0 0 300 112" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
                    {item.kind === "invest" && (
                      <>
                        <rect x="18" y="24" width="112" height="64" rx="8" fill="#ffffff" />
                        <rect x="34" y="58" width="14" height="20" rx="2" fill="#0ea5b8" />
                        <rect x="54" y="49" width="14" height="29" rx="2" fill="#06b6d4" />
                        <rect x="74" y="40" width="14" height="38" rx="2" fill="#22d3ee" />
                        <path d="M154 76 L184 52 L200 64 L232 38" stroke="#0e7490" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <circle cx="232" cy="38" r="5" fill="#0e7490" />
                      </>
                    )}
                    {item.kind === "onboard" && (
                      <>
                        <rect x="18" y="18" width="86" height="76" rx="10" fill="#ffffff" />
                        <circle cx="52" cy="48" r="14" fill="#06b6d4" />
                        <circle cx="79" cy="52" r="11" fill="#22d3ee" />
                        <rect x="116" y="34" width="154" height="12" rx="6" fill="#0e7490" />
                        <rect x="116" y="54" width="120" height="9" rx="4.5" fill="#22d3ee" />
                        <rect x="116" y="68" width="96" height="9" rx="4.5" fill="#67e8f9" />
                      </>
                    )}
                    {item.kind === "growth" && (
                      <>
                        <rect x="18" y="22" width="264" height="66" rx="10" fill="#ffffff" />
                        <path d="M36 72 L88 58 L120 64 L170 44 L220 52 L266 28" stroke="#0e7490" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <circle cx="266" cy="28" r="5" fill="#0e7490" />
                        <rect x="40" y="32" width="54" height="8" rx="4" fill="#0ea5b8" />
                        <rect x="40" y="46" width="40" height="7" rx="3.5" fill="#67e8f9" />
                      </>
                    )}
                  </svg>
                </div>
                <div style={{padding:"12px 12px 13px"}}>
                  <div style={{fontSize:15,fontWeight:700,color:"#005b63",marginBottom:2}}>{item.title}</div>
                  <div style={{fontSize:13,lineHeight:1.5,color:"#3b5563"}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollSection>

    {/* SECTION 3.7 — Problems */}
    <ScrollSection threshold={0.1}>
      <section style={{
        position:"relative",
        background:"linear-gradient(180deg,#f5fdff 0%,#edfafd 100%)",
        padding:"100px 48px",
        fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        overflow:"hidden",
      }}>
        <style>{`
          @keyframes flowRise {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes cardFloat {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .flow-stack-item { animation: flowRise .55s ease-out forwards; opacity: 0; }
          .flow-stack-item:hover { transform: translateY(-4px) rotateX(4deg); box-shadow: 0 16px 30px rgba(239,68,68,0.15); }
          .flow-3d-panel { transform-style: preserve-3d; perspective: 1200px; }
          .flow-3d-card { animation: cardFloat 4s ease-in-out infinite; transition: transform .35s ease; }
          .flow-3d-card:hover { transform: rotateY(-8deg) rotateX(5deg) translateY(-4px); }
          @media (max-width: 980px) {
            .flow-grid { grid-template-columns: 1fr !important; }
            .flow-compare-grid { grid-template-columns: 1fr !important; }
            .flow-arrow-wrap { display: none !important; }
          }
        `}</style>

        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 8% 20%, rgba(34,211,238,0.2), transparent 34%), radial-gradient(circle at 90% 78%, rgba(14,165,233,0.16), transparent 38%)",pointerEvents:"none"}} />

        <div className="flow-grid" style={{maxWidth:1080,margin:"0 auto",position:"relative",display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:24,alignItems:"start"}}>
          <div className="flow-3d-panel">
            <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",borderRadius:999,border:"1px solid #a5f3fc",background:"#ecfeff",marginBottom:14}}>
              <span style={{width:8,height:8,borderRadius:"50%",background:"#06b6d4"}} />
              <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",color:"#0e7490"}}>REALITY CHECK</span>
            </div>
            <h2 style={{fontSize:"clamp(30px,4vw,48px)",fontWeight:800,lineHeight:1.14,color:"#04555f",margin:"0 0 12px"}}>
              But instead...
            </h2>
            <p style={{fontSize:19,lineHeight:1.58,color:"#0f766e",margin:"0 0 20px"}}>
              You&apos;re probably dealing with execution friction that kills momentum.
            </p>

            <div className="flow-3d-card" style={{borderRadius:20,border:"1px solid #b2ebf2",background:"white",padding:14,boxShadow:"0 16px 36px rgba(8,51,68,0.12)"}}>
              <svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",display:"block",borderRadius:14,background:"linear-gradient(135deg,#ecfeff,#dff9fd)"}}>
                <rect x="22" y="26" width="176" height="124" rx="12" fill="#ffffff" stroke="#b2ebf2"/>
                <rect x="34" y="44" width="70" height="10" rx="5" fill="#0e7490"/>
                <rect x="34" y="62" width="148" height="8" rx="4" fill="#22d3ee"/>
                <rect x="34" y="75" width="126" height="8" rx="4" fill="#67e8f9"/>
                <rect x="34" y="88" width="110" height="8" rx="4" fill="#a5f3fc"/>
                <rect x="34" y="110" width="150" height="10" rx="5" fill="#fee2e2"/>

                <rect x="214" y="40" width="182" height="146" rx="14" fill="#0f172a"/>
                <rect x="222" y="50" width="166" height="128" rx="10" fill="#f8fdff"/>
                <rect x="236" y="68" width="56" height="8" rx="4" fill="#0e7490"/>
                <rect x="236" y="84" width="136" height="9" rx="4.5" fill="#22d3ee"/>
                <path d="M236 154 L270 132 L294 142 L334 112 L372 126" stroke="#0284c7" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <circle cx="372" cy="126" r="5" fill="#0284c7"/>

                <rect x="160" y="176" width="96" height="18" rx="9" fill="#083344"/>
                <text x="176" y="189" fontSize="10" fill="#ecfeff" fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif">MOMENTUM LOST</text>
              </svg>
            </div>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {[
              {title:"Unclear timelines",note:"No single delivery owner means deadlines keep moving."},
              {title:"Rising costs",note:"Scope grows but velocity drops every sprint."},
              {title:"Constant back-and-forth",note:"Decisions loop without shipping milestones."},
              {title:"Developers disappear or delay",note:"Execution risk becomes your daily bottleneck."},
            ].map((item,i) => (
              <article key={item.title} className="flow-stack-item" style={{
                animationDelay:`${i * 0.12}s`,
                background:"white",
                border:"1px solid #fecaca",
                borderRadius:14,
                padding:"14px 15px",
                boxShadow:"0 10px 20px rgba(239,68,68,0.08)",
                transition:"transform .28s ease, box-shadow .28s ease",
              }}>
                <div style={{display:"grid",gridTemplateColumns:"28px 1fr",gap:10,alignItems:"start"}}>
                  <div style={{width:28,height:28,borderRadius:8,border:"1px solid #fca5a5",background:"#fff1f2",display:"grid",placeItems:"center"}}>
                    <svg viewBox="0 0 16 16" width="13" height="13" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 4L12 12M12 4L4 12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{fontSize:16,fontWeight:700,color:"#7f1d1d",margin:"0 0 3px"}}>{item.title}</h3>
                    <p style={{fontSize:13,lineHeight:1.5,color:"#9f1239",margin:0}}>{item.note}</p>
                  </div>
                </div>
              </article>
            ))}

            <div style={{marginTop:8,padding:"14px 16px",borderRadius:12,border:"1px solid #99f6e4",background:"#ecfeff",color:"#0f766e",fontSize:15,fontWeight:700}}>
              That&apos;s exactly why we built this.
            </div>
          </div>
        </div>
      </section>
    </ScrollSection>

    {/* SECTION 3.8 — Introducing */}
    <ScrollSection threshold={0.15} style={{
      position:"relative",
      background:"linear-gradient(135deg,#083344 0%,#0f766e 56%,#0ea5b8 100%)",
      padding:"100px 48px",
      overflow:"hidden",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 18% 12%, rgba(153,246,228,0.2), transparent 35%), radial-gradient(circle at 86% 84%, rgba(34,211,238,0.22), transparent 42%)",pointerEvents:"none"}} />
      <div style={{maxWidth:1080,margin:"0 auto",position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"center"}}>
        <div>
          <div style={{display:"inline-block",padding:"6px 14px",borderRadius:999,border:"1px solid rgba(153,246,228,0.5)",background:"rgba(240,253,250,0.14)",fontSize:11,fontWeight:700,letterSpacing:"0.12em",color:"#99f6e4",marginBottom:14}}>
            INTRODUCING
          </div>
          <h2 style={{fontSize:"clamp(38px,5vw,66px)",fontWeight:800,color:"#ecfeff",lineHeight:1,margin:"0 0 16px"}}>MVP Sprint</h2>
          <p style={{fontSize:18,lineHeight:1.7,color:"rgba(236,254,255,0.9)",margin:"0 0 18px",maxWidth:520}}>
            A structured system that takes you from idea to working product in 14 days with clear scope and delivery rhythm.
          </p>
          <div style={{padding:"16px 18px",borderRadius:12,border:"1px solid rgba(153,246,228,0.46)",background:"rgba(240,253,250,0.12)",color:"#ccfbf1",fontSize:15,lineHeight:1.6,maxWidth:520}}>
            This is not a typical dev service. We do not sell hours, we ship outcomes.
          </div>
        </div>

        <div className="flow-3d-panel">
          <div className="flow-3d-card" style={{borderRadius:20,border:"1px solid rgba(153,246,228,0.45)",background:"rgba(240,253,250,0.12)",backdropFilter:"blur(6px)",padding:14,boxShadow:"0 18px 40px rgba(5,46,46,0.32)"}}>
            <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",display:"block",borderRadius:14,background:"linear-gradient(145deg,#e6fcff,#bff6f9)"}}>
              <rect x="20" y="24" width="112" height="80" rx="12" fill="#ffffff" stroke="#b2ebf2"/>
              <rect x="154" y="24" width="112" height="80" rx="12" fill="#ffffff" stroke="#b2ebf2"/>
              <rect x="288" y="24" width="112" height="80" rx="12" fill="#ffffff" stroke="#b2ebf2"/>
              <rect x="20" y="156" width="380" height="80" rx="14" fill="#ffffff" stroke="#b2ebf2"/>

              <path d="M132 64 L154 64" stroke="#0891b2" strokeWidth="4"/>
              <path d="M266 64 L288 64" stroke="#0891b2" strokeWidth="4"/>
              <path d="M210 104 L210 156" stroke="#0891b2" strokeWidth="4" strokeDasharray="8 7"/>

              <rect x="34" y="40" width="52" height="8" rx="4" fill="#0e7490"/>
              <rect x="34" y="56" width="72" height="8" rx="4" fill="#22d3ee"/>

              <rect x="168" y="40" width="44" height="8" rx="4" fill="#0e7490"/>
              <rect x="168" y="56" width="82" height="8" rx="4" fill="#22d3ee"/>

              <rect x="302" y="40" width="48" height="8" rx="4" fill="#0e7490"/>
              <path d="M302 70 L330 52 L350 66 L378 44" stroke="#06b6d4" strokeWidth="3.5" fill="none" strokeLinecap="round"/>

              <rect x="38" y="174" width="70" height="9" rx="4.5" fill="#0e7490"/>
              <rect x="38" y="191" width="338" height="8" rx="4" fill="#22d3ee"/>
              <rect x="38" y="206" width="300" height="8" rx="4" fill="#67e8f9"/>
            </svg>
          </div>
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 3.9 — Where You Are Now vs Where You&apos;ll Be */}
    <section 
      ref={stuckRef}
      style={{
        position:"relative",
        background:"#f8fdff",
        padding:"100px 48px",
        fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        overflow:"hidden",
        opacity: stuckVisible ? 1 : 0,
        transform: stuckVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
      <style>{`
        @keyframes stuckSlideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes launchedSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes arrowPulse {
          0%, 100% { transform: translateX(0) scale(1); box-shadow: 0 14px 28px rgba(14,116,144,0.3); }
          50% { transform: translateX(0) scale(1.1); box-shadow: 0 20px 40px rgba(14,116,144,0.5); }
        }
        @keyframes itemReveal {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6,182,212,0); }
          50% { box-shadow: 0 0 20px 4px rgba(6,182,212,0.3); }
        }
        @keyframes textReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes xShake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes bridgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .arrow-pulse { animation: arrowPulse 2s ease-in-out infinite; }
        .stuck-item { animation: itemReveal 0.5s ease-out forwards; opacity: 0; }
        .stuck-item:hover { transform: translateX(4px); }
        .stuck-item:hover svg { animation: xShake 0.4s ease-in-out; }
        .launched-item { animation: itemReveal 0.5s ease-out forwards; opacity: 0; }
        .launched-item:hover { transform: translateX(-4px); }
        .launched-item:hover svg { animation: checkBounce 0.4s ease-in-out; }
        .stuck-card-glow { animation: glowPulse 3s ease-in-out infinite; }
        .final-text-anim { animation: textReveal 0.6s ease-out forwards; opacity: 0; animation-play-state: var(--anim-play); }
        .flow-visual-wrap {
          border-radius: 16px;
          border: 1px solid #a5f3fc;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 14px 30px rgba(8,51,68,0.15);
          padding: 10px;
          animation: bridgeFloat 4.2s ease-in-out infinite;
        }
        @media (max-width: 980px) {
          .flow-compare-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .flow-arrow-wrap {
            display: none !important;
          }
          .flow-visual-wrap {
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>

      <div style={{maxWidth:1080,margin:"0 auto",position:"relative"}}>
        <div style={{textAlign:"center",marginBottom:46}}>
          <div className="final-text-anim" style={{display:"inline-block",padding:"6px 16px",borderRadius:999,background:"#ecfeff",border:"1px solid #a5f3fc",fontSize:11,fontWeight:700,letterSpacing:"0.1em",color:"#0e7490",marginBottom:14}}>
            THE MVP SPRINT
          </div>
          <h2 className="final-text-anim" style={{fontSize:"clamp(30px,4vw,46px)",fontWeight:800,color:"#04555f",margin:"0 0 10px"}}>From Stuck to Launched</h2>
          <p className="final-text-anim" style={{fontSize:16,lineHeight:1.6,color:"#3b5563",margin:0}}>Uniform process, predictable delivery, and measurable progress.</p>
        </div>

        <div className="flow-compare-grid" style={{display:"grid",gridTemplateColumns:"1fr 220px 1fr",gap:18,alignItems:"stretch"}}>
          <article className="stuck-card-glow" style={{
            borderRadius:18,
            border:"1px solid #fecaca",
            background:"#fff7f7",
            padding:"20px 18px",
            boxShadow:"0 12px 26px rgba(239,68,68,0.1)",
            opacity: stuckVisible ? 1 : 0,
            transform: stuckVisible ? "translateX(0)" : "translateX(-34px)",
            transition:"opacity 0.6s ease, transform 0.6s ease",
          }}>
            <h3 style={{fontSize:17,fontWeight:700,color:"#b91c1c",margin:"0 0 14px"}}>Where You Are Now</h3>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[
                "Searching for reliable developers",
                "Months of back-and-forth",
                "Budget overruns and scope creep",
                "No clear deadline or accountability",
                "Hoping the product actually ships",
              ].map((item,i) => (
                <div key={item} className="stuck-item" style={{
                  display:"grid",gridTemplateColumns:"20px 1fr",gap:10,alignItems:"start",
                  cursor:"default",transition:"transform 0.3s ease",
                  animationDelay:`${0.1 + i * 0.1}s`,
                }}>
                  <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{marginTop:2}}>
                    <path d="M4 4L12 12M12 4L4 12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span style={{fontSize:14,lineHeight:1.5,color:"#7f1d1d"}}>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="flow-arrow-wrap" style={{display:"grid",placeItems:"center",gap:12}}>
            <div className="flow-visual-wrap" style={{
              opacity: stuckVisible ? 1 : 0,
              transform: stuckVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
              transition:"opacity 0.65s ease 0.08s, transform 0.65s ease 0.08s",
            }}>
              <img
                src="/images/stuck-launch-bridge.svg"
                alt="Transition from stuck development to launched MVP"
                style={{ width:"100%", height:"auto", display:"block", borderRadius:12 }}
              />
            </div>
            <div className="arrow-pulse" style={{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#06b6d4,#0e7490)",display:"grid",placeItems:"center",cursor:"pointer",transition:"transform 0.3s ease"}}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="#ecfeff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <article style={{
            borderRadius:18,
            border:"1px solid #99f6e4",
            background:"#f0fdfa",
            padding:"20px 18px",
            boxShadow:"0 12px 26px rgba(20,184,166,0.12)",
            opacity: stuckVisible ? 1 : 0,
            transform: stuckVisible ? "translateX(0)" : "translateX(34px)",
            transition:"opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}>
            <h3 style={{fontSize:17,fontWeight:700,color:"#047857",margin:"0 0 14px"}}>Where You&apos;ll Be</h3>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[
                "One dedicated team, start to finish",
                "Clear 14-day timeline",
                "Fixed scope, no surprises",
                "Ship-It Guarantee built in",
                "Live product in your hands",
              ].map((item,i) => (
                <div key={item} className="launched-item" style={{
                  display:"grid",gridTemplateColumns:"20px 1fr",gap:10,alignItems:"start",
                  cursor:"default",transition:"transform 0.3s ease",
                  animationDelay:`${0.2 + i * 0.1}s`,
                }}>
                  <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{marginTop:2}}>
                    <path d="M3 8l3 3 7-7" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{fontSize:14,lineHeight:1.5,color:"#065f46"}}>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="final-text-anim" style={{marginTop:26,textAlign:"center",fontSize:20,fontWeight:800,color:"#04555f",animationDelay:"0.5s"}}>
          Stuck forever <span style={{color:"#06b6d4"}}>to</span> Launched and growing
        </div>
      </div>
    </section>

    {/* SECTION 4 — The Process */}
    <section style={{
      position:"relative",
      background:"#e0f7fa",
      padding:"100px 48px",
      overflow:"hidden",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        position:"absolute",top:-80,left:-80,
        width:320,height:320,
        background:"radial-gradient(circle, rgba(0,172,193,0.12) 0%, transparent 70%)",
        borderRadius:"50%",pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute",bottom:-100,right:-60,
        width:400,height:400,
        background:"radial-gradient(circle, rgba(0,96,100,0.1) 0%, transparent 70%)",
        borderRadius:"50%",pointerEvents:"none",
      }}/>

      <div style={{
        position:"absolute",
        top:"calc(100px + 110px)",
        left:"calc(48px + 33% - 10px)",
        width:"calc(34% + 20px)",
        height:2,
        borderTop:"2px dashed rgba(0,172,193,0.3)",
        pointerEvents:"none",
      }}/>

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative" }}>
        <div
          ref={processRef}
          style={{
            textAlign:"center",
            marginBottom:70,
            transition:"opacity 0.6s ease, transform 0.6s ease",
            opacity:processVisible ? 1 : 0,
            transform:processVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div style={{
            display:"inline-block",
            padding:"6px 18px",
            background:"#00acc1",
            borderRadius:100,
            fontSize:11,
            fontWeight:700,
            color:"white",
            letterSpacing:"0.1em",
            marginBottom:20,
            boxShadow:"0 4px 14px rgba(0,172,193,0.35)",
          }}>
            THE PROCESS
          </div>
          <h2 style={{
            fontSize:"clamp(30px,3.5vw,44px)",
            fontWeight:800,
            lineHeight:1.15,
            color:"#006064",
            margin:"0 0 18px",
          }}>
            Here&apos;s how it works
          </h2>
          <p style={{
            fontSize:17,
            lineHeight:1.65,
            color:"#00838f",
            margin:"0 auto",
            maxWidth:520,
          }}>
            A structured system designed to take you from idea to working product in 14 days.
          </p>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3, 1fr)",
          gap:28,
        }}>
          {PROCESS_STEPS.map((step, i) => (
            <FadeInUp key={i} delay={i * 0.15}>
              <StepCard step={step} index={i} visible={processVisible} />
            </FadeInUp>
          ))}
        </div>

        <div style={{
          textAlign:"center",
          marginTop:56,
          opacity:processVisible ? 1 : 0,
          transition:"opacity 0.6s ease 0.5s",
        }}>
          <p style={{
            fontSize:14,
            color:"#00838f",
            opacity:0.7,
            margin:0,
          }}>
            14 days · Fixed scope · Zero surprises
          </p>
        </div>
      </div>
    </section>

    <style>{`
      .uniform-3d-section {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      .uniform-shell {
        width: min(1100px, 100%);
        margin: 0 auto;
      }
      .uniform-3d-title {
        letter-spacing: -0.01em;
      }
      .uniform-3d-card {
        border-radius: 14px;
        transform-style: preserve-3d;
        transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        box-shadow: 0 10px 24px rgba(8,51,68,0.08);
      }
      .uniform-3d-card:hover {
        transform: translateY(-6px) rotateX(4deg);
        box-shadow: 0 18px 36px rgba(8,51,68,0.16);
      }
      .uniform-3d-panel {
        border-radius: 16px;
        box-shadow: 0 16px 34px rgba(8,51,68,0.12);
      }
      .uniform-3d-section table {
        min-width: 640px !important;
      }
      .uniform-3d-section button {
        touch-action: manipulation;
      }
      @media (max-width: 980px) {
        .uniform-grid-3 { grid-template-columns: 1fr !important; }
        .uniform-grid-2 { grid-template-columns: 1fr !important; }
        .uniform-3d-section { padding: 72px 24px !important; }
        .uniform-3d-card { padding: 20px !important; }
        .uniform-3d-panel { padding: 20px !important; }
      }
      @media (max-width: 720px) {
        .uniform-3d-section { padding: 64px 16px !important; }
        .uniform-3d-section h2 { line-height: 1.15 !important; }
        .uniform-3d-section p { line-height: 1.55 !important; }
        .uniform-cta-btn {
          width: 100%;
          max-width: 360px;
          padding: 14px 20px !important;
          font-size: 15px !important;
        }
        .uniform-inline-card {
          width: 100%;
          justify-content: flex-start !important;
          text-align: left !important;
          gap: 12px !important;
        }
        .uniform-results-card {
          flex-direction: column;
          align-items: flex-start !important;
          gap: 12px !important;
        }
        .uniform-results-avatar {
          width: 48px !important;
          height: 48px !important;
          font-size: 16px !important;
        }
      }
      @media (max-width: 480px) {
        .uniform-3d-section { padding: 56px 12px !important; }
        .uniform-3d-card,
        .uniform-3d-panel { border-radius: 12px !important; }
      }
    `}</style>

    {/* SECTION 5 — Deliverables */}
    <section
      ref={deliverablesRef}
      style={{
      position:"relative",
      background:"linear-gradient(180deg,#f8fdff 0%,#f0fbfe 100%)",
      padding:"100px 48px",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      transform: deliverablesVisible ? "translateY(0)" : "translateY(28px)",
      opacity: deliverablesVisible ? 1 : 0.35,
      transition: "opacity 0.65s ease, transform 0.65s ease",
    }} className="uniform-3d-section">
      <div style={{
        position:"absolute",
        top:-70,
        right:-40,
        width:260,
        height:260,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(0,172,193,0.18) 0%, rgba(0,172,193,0) 70%)",
        filter:"blur(4px)",
        opacity: deliverablesVisible ? 1 : 0,
        transform: deliverablesVisible ? "scale(1)" : "scale(0.85)",
        transition:"opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        pointerEvents:"none",
      }} />
      <div style={{
        position:"absolute",
        bottom:-90,
        left:-60,
        width:300,
        height:300,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(6,182,212,0.16) 0%, rgba(6,182,212,0) 72%)",
        opacity: deliverablesVisible ? 1 : 0,
        transform: deliverablesVisible ? "scale(1)" : "scale(0.85)",
        transition:"opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
        pointerEvents:"none",
      }} />
      <div className="uniform-shell" style={{maxWidth:1100,margin:"0 auto"}}>
        <FadeInUp>
          <div style={{textAlign:"center",marginBottom:60}}>
            <h2 style={{
            fontSize:"clamp(28px,3.5vw,40px)",
            fontWeight:700,lineHeight:1.2,
            color:"#006064",
            margin:"0 0 16px",
            }} className="uniform-3d-title">
              What you'll get
            </h2>
            <p style={{
            fontSize:17,lineHeight:1.6,
            color:"#00838f",margin:"0 auto",maxWidth:550,
            }}>
              A complete, production-ready MVP from architecture to deployment.
            </p>
          </div>
        </FadeInUp>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="uniform-grid-3">
          {[
            {title:"Fully Functional MVP",desc:"Up to 5 core features built and ready to use"},
            {title:"Clean Scalable Backend",desc:"Well-structured code that can grow with your business"},
            {title:"Authentication & Core Systems",desc:"User accounts, permissions, and security built-in"},
            {title:"UI/UX Designed for Users",desc:"Beautiful interface created for real user experience"},
            {title:"Deployment",desc:"Live product hosted and ready for the world"},
            {title:"Full Documentation",desc:"Complete handoff docs so you own everything"},
          ].map((item,i) => (
            <ScaleIn key={i} delay={0.08 * i}>
              <div className="uniform-3d-card" style={{
                display:"flex",gap:16,
                padding:"24px",
                background:"#ffffff",
                borderRadius:12,
                border:"1px solid #bfeaf2",
              }}>
                <div style={{
                  width:32,height:32,
                  background:"#00acc1",
                  borderRadius:8,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  flexShrink:0,
                }}>
                  <svg viewBox="0 0 20 20" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 10l4 4 8-8" fill="none" stroke="#ffffff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:15,fontWeight:600,color:"#006064",marginBottom:4}}>
                    {item.title}
                  </div>
                  <div style={{fontSize:13,color:"#00838f",lineHeight:1.5}}>
                    {item.desc}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 5.5 — Bonuses */}
    <section
      ref={bonusRef}
      style={{
      position:"relative",
      background:"#f0f9ff",
      padding:"100px 48px",
      overflow:"hidden",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      opacity: bonusVisible ? 1 : 0.45,
      transform: bonusVisible ? "translateY(0)" : "translateY(24px)",
      transition:"opacity 0.6s ease, transform 0.6s ease",
    }} className="uniform-3d-section">
      <div style={{
        position:"absolute",
        top:-100,
        left:-100,
        width:400,
        height:400,
        background:"radial-gradient(circle, rgba(0,172,193,0.1) 0%, transparent 70%)",
        borderRadius:"50%",
      }}/>
      <div style={{
        position:"absolute",
        right:-80,
        top:120,
        width:280,
        height:280,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0) 72%)",
        opacity: bonusVisible ? 1 : 0,
        transform: bonusVisible ? "scale(1)" : "scale(0.8)",
        transition:"all .8s ease .1s",
        pointerEvents:"none",
      }}/>
      <div className="uniform-shell" style={{maxWidth:980,margin:"0 auto",position:"relative"}}>
        <FadeInUp>
          <div style={{textAlign:"center",marginBottom:44}}>
          <div style={{
            display:"flex",
            justifyContent:"center",
            gap:4,
            marginBottom:16,
          }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            ))}
          </div>
          <h2 style={{
            fontSize:"clamp(26px,3vw,36px)",
            fontWeight:700,
            color:"#006064",
            margin:"0 0 12px",
          }}>
            50+ founders have launched with MVP Sprint
          </h2>
          <p style={{
            fontSize:17,
            color:"#00838f",
            margin:0,
          }}>
            Plus, included at no extra cost:
          </p>
          </div>
        </FadeInUp>

        <div style={{
          marginBottom:30,
          padding:12,
          borderRadius:20,
          background:"rgba(255,255,255,0.82)",
          border:"1px solid #a5f3fc",
          boxShadow:"0 14px 34px rgba(8,51,68,0.12)",
          opacity: bonusVisible ? 1 : 0,
          transform: bonusVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
          transition:"opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
        }}>
          <img
            src="/images/bonus-stack-visual.svg"
            alt="Included bonus value pack visual"
            style={{width:"100%",height:"auto",display:"block",borderRadius:14}}
          />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:24,marginBottom:40}} className="uniform-grid-2">
          {[
            {
              kind:"kit",
              title:"Investor Launch Kit",
              desc:"Pitch deck template, product one-pager, and demo walkthrough — everything you need to approach investors with confidence.",
              value:"$2,500",
            },
            {
              kind:"support",
              title:"30-Day Post-Launch Support",
              desc:"Bug fixes, performance monitoring, and priority support for a full month after launch. We don&apos;t disappear after delivery.",
              value:"$3,000",
            },
            {
              kind:"growth",
              title:"Growth Launch Setup",
              desc:"Analytics integration, SEO basics, and user tracking so you can measure traction from day one.",
              value:"$1,500",
            },
            {
              kind:"docs",
              title:"Full Codebase + Documentation",
              desc:"Clean, well-documented code you fully own. Continue building with any team — no vendor lock-in.",
              value:"$2,000",
            },
          ].map((bonus,i) => (
            <ScaleIn key={i} delay={0.1 + i * 0.08}>
              <div className="uniform-3d-card" style={{
              padding:"28px",
              background:"white",
              borderRadius:16,
              border:"1px solid #b2ebf2",
              boxShadow:"0 4px 16px rgba(0,172,193,0.08)",
              }}>
              <div style={{display:"flex",alignItems:"flex-start",gap:16,marginBottom:16}}>
                <span style={{width:34,height:34,display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:10,background:"#ecfeff",border:"1px solid #a5f3fc",flexShrink:0}}>
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {bonus.kind === "kit" && (
                      <>
                        <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="#0891b2" strokeWidth="1.8"/>
                        <line x1="8" y1="10" x2="16" y2="10" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="8" y1="14" x2="14" y2="14" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round"/>
                      </>
                    )}
                    {bonus.kind === "support" && (
                      <>
                        <path d="M12 3l7 3v5c0 4.5-2.8 7.6-7 9-4.2-1.4-7-4.5-7-9V6l7-3z" fill="none" stroke="#0891b2" strokeWidth="1.8"/>
                        <path d="M8.8 12.2l2.2 2.2 4.2-4.2" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </>
                    )}
                    {bonus.kind === "growth" && (
                      <>
                        <path d="M5 16l5-5 3 3 6-6" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 8h4v4" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </>
                    )}
                    {bonus.kind === "docs" && (
                      <>
                        <path d="M7 4h8l3 3v13H7z" fill="none" stroke="#0891b2" strokeWidth="1.8"/>
                        <path d="M15 4v3h3" fill="none" stroke="#0891b2" strokeWidth="1.8"/>
                        <line x1="9" y1="12" x2="16" y2="12" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="9" y1="16" x2="14" y2="16" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round"/>
                      </>
                    )}
                  </svg>
                </span>
                <div>
                  <h3 style={{
                    fontSize:17,
                    fontWeight:700,
                    color:"#006064",
                    margin:"0 0 4px",
                  }}>
                    {bonus.title}
                  </h3>
                  <div style={{
                    fontSize:13,
                    fontWeight:700,
                    color:"#059669",
                  }}>
                    FREE (Value: {bonus.value})
                  </div>
                </div>
              </div>
              <p style={{
                fontSize:14,
                lineHeight:1.6,
                color:"#00838f",
                margin:0,
              }}>
                {bonus.desc}
              </p>
              </div>
            </ScaleIn>
          ))}
        </div>
        <div style={{
          textAlign:"center",
          padding:"24px",
          background:"linear-gradient(135deg, #e0f7fa, #b2ebf2)",
          borderRadius:12,
          border:"1px solid #80deea",
        }}>
          <p style={{
            fontSize:18,
            fontWeight:700,
            color:"#006064",
            margin:0,
          }}>
            Total added value: <span style={{fontSize:22,color:"#00acc1"}}>$9,000+</span>
          </p>
        </div>
        <div style={{textAlign:"center",marginTop:32}}>
          <button className="uniform-cta-btn" style={{
            background:"#00acc1",
            color:"white",
            border:"none",
            borderRadius:8,
            padding:"14px 32px",
            fontSize:15,
            fontWeight:600,
            cursor:"pointer",
            boxShadow:"0 4px 16px rgba(0,172,193,0.3)",
          }}>
            Get My MVP Blueprint →
          </button>
          <p style={{
            fontSize:13,
            color:"#00838f",
            marginTop:12,
          }}>
            Book your free strategy call. No obligation.
          </p>
        </div>
      </div>
    </section>

    {/* SECTION 5.6 — ROI Comparison */}
    <section
      ref={roiRef}
      style={{
      position:"relative",
      background:"linear-gradient(180deg,#ffffff 0%,#f7fcff 100%)",
      padding:"100px 48px",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      opacity: roiVisible ? 1 : 0.45,
      transform: roiVisible ? "translateY(0)" : "translateY(24px)",
      transition:"opacity 0.65s ease, transform 0.65s ease",
    }} className="uniform-3d-section">
      <div className="uniform-shell" style={{maxWidth:900,margin:"0 auto"}}>
        <FadeInUp>
          <div style={{textAlign:"center",marginBottom:42}}>
          <h2 style={{
            fontSize:"clamp(26px,3vw,36px)",
            fontWeight:700,
            color:"#006064",
            margin:"0 0 12px",
          }}>
            What founders typically spend on development
          </h2>
          <p style={{
            fontSize:16,
            color:"#00838f",
            margin:0,
          }}>
            ...and what they actually get
          </p>
          </div>
        </FadeInUp>

        <div style={{
          marginBottom:30,
          borderRadius:18,
          padding:10,
          background:"rgba(255,255,255,0.9)",
          border:"1px solid #bae6fd",
          boxShadow:"0 12px 30px rgba(8,51,68,0.11)",
          opacity: roiVisible ? 1 : 0,
          transform: roiVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
          transition:"opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
        }}>
          <img
            src="/images/roi-compare-visual.svg"
            alt="ROI comparison between traditional development and MVP Sprint"
            style={{width:"100%",height:"auto",display:"block",borderRadius:12}}
          />
        </div>

        <div className="uniform-3d-panel" style={{
          overflowX:"auto",
          borderRadius:16,
          border:"1px solid #c5eaf2",
          boxShadow:"0 4px 16px rgba(0,0,0,0.05)",
        }}>
          <table style={{
            width:"100%",
            borderCollapse:"collapse",
            minWidth:700,
          }}>
            <thead>
              <tr style={{background:"#f8fafc"}}>
                <th style={{padding:"16px 20px",textAlign:"left",fontSize:13,fontWeight:600,color:"#006064",borderBottom:"1px solid #e2e8f0"}}></th>
                <th style={{padding:"16px 20px",textAlign:"left",fontSize:13,fontWeight:600,color:"#006064",borderBottom:"1px solid #e2e8f0"}}>You Spend On</th>
                <th style={{padding:"16px 20px",textAlign:"left",fontSize:13,fontWeight:600,color:"#006064",borderBottom:"1px solid #e2e8f0"}}>What You Get</th>
                <th style={{padding:"16px 20px",textAlign:"left",fontSize:13,fontWeight:600,color:"#006064",borderBottom:"1px solid #e2e8f0"}}>Your ROI</th>
              </tr>
            </thead>
            <tbody>
              {[
                {kind:"freelancer",name:"Freelancer from job board",get:"Missed deadlines, partial code",roi:"Wasted months, start over",bg:"white"},
                {kind:"agency",name:"Dev Agency ($50K–$200K)",get:"6-month timeline, enterprise bloat",roi:"Burned runway, late to market",bg:"#fef2f2"},
                {kind:"dev",name:"Full-time Developer",get:"$8K/mo salary + overhead",roi:"Maybe an MVP in 3–6 months",bg:"white"},
                {kind:"tools",name:"No-Code Tools (DIY)",get:"Limited features, can't scale",roi:"Rebuild from scratch later",bg:"#fef2f2"},
              ].map((row,i) => (
                <tr key={i} style={{
                  background:row.bg,
                  borderBottom:"1px solid #e2e8f0",
                  opacity: roiVisible ? 1 : 0,
                  transform: roiVisible ? "translateX(0)" : "translateX(-18px)",
                  transition:`opacity .45s ease ${0.12 + i * 0.07}s, transform .45s ease ${0.12 + i * 0.07}s`,
                }}>
                  <td style={{padding:"16px 20px",fontSize:18}}>
                    <svg viewBox="0 0 20 20" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      {row.kind === "freelancer" && <circle cx="10" cy="10" r="7" fill="#94a3b8" />}
                      {row.kind === "agency" && <rect x="3" y="4" width="14" height="12" rx="2" fill="#94a3b8" />}
                      {row.kind === "dev" && <path d="M6 6l-3 4 3 4M14 6l3 4-3 4" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>}
                      {row.kind === "tools" && <path d="M5 15l10-10M11 4l5 5" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>}
                    </svg>
                  </td>
                  <td style={{padding:"16px 20px",fontSize:14,fontWeight:500,color:"#006064"}}>{row.name}</td>
                  <td style={{padding:"16px 20px",fontSize:14,color:"#00838f"}}>{row.get}</td>
                  <td style={{padding:"16px 20px",fontSize:14,color:"#ef4444",fontWeight:500}}>{row.roi}</td>
                </tr>
              ))}
              <tr style={{
                background:"linear-gradient(135deg, #e0f7fa, #b2ebf2)",
                opacity: roiVisible ? 1 : 0,
                transform: roiVisible ? "translateX(0)" : "translateX(18px)",
                transition:"opacity .5s ease .42s, transform .5s ease .42s",
              }}>
                <td style={{padding:"16px 20px",fontSize:18}}>
                  <svg viewBox="0 0 20 20" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11 2L5 11h4l-1 7 7-10h-4l1-6z" fill="#0891b2"/>
                  </svg>
                </td>
                <td style={{padding:"16px 20px",fontSize:14,fontWeight:700,color:"#006064"}}>MVP Sprint</td>
                <td style={{padding:"16px 20px",fontSize:14,color:"#006064"}}>Live product in 14 days + $9K bonuses</td>
                <td style={{padding:"16px 20px",fontSize:14,fontWeight:600,color:"#059669"}}>Launch fast. Validate. Grow.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="uniform-3d-panel" style={{
          marginTop:40,
          padding:"24px 32px",
          background:"#f3fcff",
          borderRadius:12,
          border:"1px solid #c5eaf2",
          textAlign:"center",
          opacity: roiVisible ? 1 : 0,
          transform: roiVisible ? "translateY(0)" : "translateY(16px)",
          transition:"opacity .55s ease .45s, transform .55s ease .45s",
        }}>
          <p style={{
            fontSize:16,
            lineHeight:1.7,
            color:"#00838f",
            margin:"0 0 16px",
          }}>
            Your development budget can disappear into months of delays…
            or <strong style={{color:"#006064"}}>get you a live product in 14 days.</strong>
          </p>
          <p style={{
            fontSize:17,
            fontWeight:600,
            color:"#006064",
            margin:0,
          }}>
            Choose the ROI that actually pays you back.
          </p>
        </div>
      </div>
    </section>

    {/* SECTION 6 — Guarantee */}
    <section
      ref={guaranteeRef}
      style={{
      position:"relative",
      background:"linear-gradient(135deg, #04555f 0%, #0b6b76 60%, #0c7b84 100%)",
      padding:"92px 48px",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      overflow:"hidden",
      opacity: guaranteeVisible ? 1 : 0.45,
      transform: guaranteeVisible ? "translateY(0)" : "translateY(26px)",
      transition:"opacity 0.65s ease, transform 0.65s ease",
    }} className="uniform-3d-section">
      <style>{`
        @keyframes guaranteeGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45,212,191,0); }
          50% { box-shadow: 0 0 30px 6px rgba(45,212,191,0.2); }
        }
        .guarantee-pill {
          animation: guaranteeGlow 2.8s ease-in-out infinite;
        }
        @media (max-width: 980px) {
          .guarantee-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{
        position:"absolute",
        top:-140,
        right:-120,
        width:340,
        height:340,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(153,246,228,0.24) 0%, rgba(153,246,228,0) 72%)",
        opacity: guaranteeVisible ? 1 : 0,
        transition:"opacity .8s ease",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute",
        bottom:-160,
        left:-120,
        width:380,
        height:380,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0) 72%)",
        opacity: guaranteeVisible ? 1 : 0,
        transition:"opacity .85s ease .1s",
        pointerEvents:"none",
      }}/>

      <div className="uniform-shell guarantee-grid" style={{maxWidth:1080,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:28,alignItems:"center",position:"relative"}}>
        <div style={{
          opacity: guaranteeVisible ? 1 : 0,
          transform: guaranteeVisible ? "translateX(0)" : "translateX(-24px)",
          transition:"opacity .6s ease, transform .6s ease",
        }}>
          <div className="guarantee-pill" style={{
            display:"inline-block",
            padding:"7px 18px",
            background:"rgba(255,255,255,0.16)",
            borderRadius:999,
            border:"1px solid rgba(186,230,253,0.5)",
            fontSize:12,
            fontWeight:700,
            color:"#dff7ff",
            letterSpacing:"0.09em",
            marginBottom:18,
          }}>
            OUR PROMISE
          </div>
          <h2 style={{
            fontSize:"clamp(30px,3.8vw,46px)",
            fontWeight:800,
            lineHeight:1.12,
            color:"white",
            margin:"0 0 16px",
          }}>
            The Ship-It Guarantee
          </h2>
          <p style={{
            fontSize:18,
            lineHeight:1.7,
            color:"rgba(237,253,255,0.95)",
            margin:"0 0 22px",
            maxWidth:520,
          }}>
            If your MVP isn't ready in 14 days, <strong>we keep building for free.</strong>
          </p>

          <div style={{
            padding:"18px 18px",
            borderRadius:14,
            background:"rgba(255,255,255,0.92)",
            border:"1px solid #99f6e4",
            boxShadow:"0 10px 24px rgba(2,132,199,0.2)",
            maxWidth:520,
          }}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <span style={{width:32,height:32,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
                <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 3l8 3.5V12c0 5-3 8.5-8 10-5-1.5-8-5-8-10V6.5L12 3z" fill="#06b6d4"/>
                  <path d="M8.8 12.3l2.2 2.2 4.5-4.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div style={{fontSize:16,fontWeight:700,color:"#075985"}}>
                  Not happy by Day 5?
                </div>
                <div style={{fontSize:14,color:"#0f766e"}}>
                  Full refund and you keep the designs.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          opacity: guaranteeVisible ? 1 : 0,
          transform: guaranteeVisible ? "translateX(0) scale(1)" : "translateX(24px) scale(0.96)",
          transition:"opacity .65s ease .08s, transform .65s ease .08s",
        }}>
          <div style={{
            padding:12,
            borderRadius:20,
            background:"rgba(255,255,255,0.9)",
            border:"1px solid #a5f3fc",
            boxShadow:"0 18px 40px rgba(3,105,161,0.24)",
          }}>
            <img
              src="/images/guarantee-certificate-visual.svg"
              alt="Ship-It Guarantee certificate visual"
              style={{width:"100%",height:"auto",display:"block",borderRadius:14}}
            />
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 7 — Why This Works */}
    <ScrollSection threshold={0.15} style={{
      position:"relative",
      background:"linear-gradient(180deg,#ecfeff 0%,#dff7fa 100%)",
      padding:"100px 48px",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      overflow:"hidden",
    }}>
      <style>{`
        @keyframes advantageDrift {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.04); }
        }
        @keyframes advantageSweep {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes advantageShimmer {
          0% { transform: translateX(-130%); }
          100% { transform: translateX(220%); }
        }
        .advantage-title {
          background: linear-gradient(90deg, #0f4f5a, #0e7490, #0f4f5a);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
          animation: advantageSweep 6s linear infinite;
        }
        .advantage-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(16px);
          pointer-events: none;
          animation: advantageDrift 5.8s ease-in-out infinite;
        }
        .advantage-card {
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .advantage-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(34,211,238,0.38), rgba(153,246,228,0.12), rgba(14,165,233,0.32));
          opacity: 0;
          transition: opacity .25s ease;
          pointer-events: none;
        }
        .advantage-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(8,51,68,0.14);
          border-color: #67e8f9 !important;
        }
        .advantage-card:hover::before {
          opacity: 1;
        }
        .advantage-panel {
          position: relative;
          overflow: hidden;
        }
        .advantage-panel::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 26%;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0));
          animation: advantageShimmer 4.4s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <div
        className="advantage-orb"
        style={{
          width:240,
          height:240,
          top:-70,
          left:-40,
          background:"rgba(34,211,238,0.24)",
        }}
      />
      <div
        className="advantage-orb"
        style={{
          width:220,
          height:220,
          right:-40,
          bottom:20,
          background:"rgba(20,184,166,0.2)",
          animationDelay:"-1.8s",
        }}
      />

      <div
        style={{
          position:"absolute",
          inset:0,
          backgroundImage:"radial-gradient(circle at 15% 20%, rgba(14,165,233,0.12), transparent 42%), radial-gradient(circle at 85% 82%, rgba(6,182,212,0.12), transparent 44%)",
          pointerEvents:"none",
        }}
      />

      <div className="uniform-shell" style={{maxWidth:1020,margin:"0 auto",position:"relative"}}>
        <div style={{textAlign:"center",marginBottom:44}}>
          <p style={{margin:"0 0 10px",fontSize:12,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#0e7490"}}>
            The Advantage
          </p>
          <h2 style={{
            fontSize:"clamp(28px,3.2vw,42px)",
            fontWeight:800,
            margin:"0 0 14px",
            letterSpacing:"-0.02em",
          }} className="advantage-title">
            Why this works when others don&apos;t
          </h2>
          <p style={{margin:0,fontSize:17,lineHeight:1.65,color:"#17606c",maxWidth:760,marginInline:"auto"}}>
            Most teams optimize for billable hours. This sprint is designed around one outcome: launch with confidence in 14 days.
          </p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:18,marginBottom:22}} className="uniform-grid-2">
          {[
            {
              legacy:"Most dev teams sell time",
              sprint:"You buy a finished MVP",
              detail:"Clear scope, clear finish line, clear ownership.",
            },
            {
              legacy:"Founders chase status updates",
              sprint:"You get structured daily progress",
              detail:"No guessing what got done and what is next.",
            },
            {
              legacy:"You become project manager",
              sprint:"You stay focused on customers",
              detail:"Direction from you, execution from us.",
            },
            {
              legacy:"Timelines keep drifting",
              sprint:"Delivery stays fixed",
              detail:"Built for shipping, not endless revision loops.",
            },
          ].map((item, i) => (
            <div key={i} className="uniform-3d-card advantage-card" style={{
              padding:"20px 20px 18px",
              background:"linear-gradient(180deg,#ffffff 0%,#f6feff 100%)",
              borderRadius:16,
              border:"1px solid #a5f3fc",
              height:"100%",
            }}>
              <div style={{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"start",columnGap:12,rowGap:8}}>
                <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#b91c1c",background:"#fee2e2",padding:"4px 10px",borderRadius:999}}>
                  Old Way
                </span>
                <span style={{fontSize:13,color:"#ef4444",fontWeight:600,lineHeight:1.4}}>{item.legacy}</span>

                <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#047857",background:"#d1fae5",padding:"4px 10px",borderRadius:999}}>
                  Sprint Way
                </span>
                <span style={{fontSize:15,color:"#065f46",fontWeight:700,lineHeight:1.35}}>{item.sprint}</span>
              </div>
              <p style={{margin:"12px 0 0",fontSize:14,lineHeight:1.6,color:"#1f5863"}}>{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="uniform-3d-panel advantage-panel" style={{
          borderRadius:18,
          padding:"24px 24px",
          background:"linear-gradient(135deg,#0b5f6a 0%, #0e7b86 60%, #14a3b8 100%)",
          color:"#ecfeff",
          boxShadow:"0 20px 42px rgba(8,51,68,0.2)",
        }}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap"}}>
            <p style={{margin:0,fontSize:24,fontWeight:800,letterSpacing:"-0.01em"}}>Clarity in, product out.</p>
            <p style={{margin:0,fontSize:14,fontWeight:600,opacity:0.95}}>14-day scope • daily momentum • launch-ready handoff</p>
          </div>
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 8 — Who This Is For */}
    <ScrollSection threshold={0.15} style={{
      position:"relative",
      background:"linear-gradient(180deg,#ffffff 0%,#f6fcff 100%)",
      padding:"100px 48px",
      overflow:"hidden",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        position:"absolute",
        inset:0,
        backgroundImage:"radial-gradient(circle at 80% 20%, rgba(0,172,193,0.04) 0%, transparent 40%)",
        pointerEvents:"none",
      }}/>
      <div className="uniform-shell" style={{maxWidth:1000,margin:"0 auto",position:"relative"}}>
        <div style={{textAlign:"center",marginBottom:60}}>
          <h2 style={{
            fontSize:"clamp(26px,3vw,36px)",
            fontWeight:700,
            color:"#006064",
            margin:"0 0 16px",
          }}>
            Who MVP Sprint is Perfect For
          </h2>
          <p style={{
            fontSize:16,
            color:"#00838f",
            maxWidth:600,
            margin:"0 auto",
          }}>
            Built for action-takers who are ready to move — not people still &quot;thinking about it.&quot;
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:28,marginBottom:48}} className="uniform-grid-3">
          {[
            {
              kind:"founder",
              title:"First-Time Founders Who:",
              points:[
                "Have a validated idea but no technical co-founder",
                "Need to prove the concept to investors or early users",
                "Want to move fast without learning to code",
                "Are ready to invest in getting their vision built right",
              ],
            },
            {
              kind:"business",
              title:"Existing Business Owners Who:",
              points:[
                "Want to launch a new digital product or SaaS",
                "Are tired of unreliable dev teams and broken timelines",
                "Need a working product — not another &quot;almost done&quot;",
                "Value speed and accountability over cheap hourly rates",
              ],
            },
            {
              kind:"startup",
              title:"Pre-Seed / Seed Startups Who:",
              points:[
                "Need a demo-ready product for investor meetings",
                "Want to onboard beta users and start collecting data",
                "Can&apos;t afford to wait 6 months for a first version",
                "Want professional quality without agency-level budgets",
              ],
            },
          ].map((segment,i) => (
            <StaggerItem key={i}>
              <div className="uniform-3d-card" style={{
                padding:"28px",
                background:"#ffffff",
                borderRadius:16,
                border:"1px solid #c5eaf2",
                height:"100%",
              }}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
                  <span style={{width:32,height:32,borderRadius:10,background:"#ecfeff",border:"1px solid #a5f3fc",display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      {segment.kind === "founder" && (
                        <>
                          <path d="M12 4l2.2 4.3 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7z" fill="none" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round"/>
                        </>
                      )}
                      {segment.kind === "business" && (
                        <>
                          <rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="#0891b2" strokeWidth="1.8"/>
                          <rect x="9" y="3" width="6" height="3" rx="1" fill="#22d3ee"/>
                          <line x1="8" y1="12" x2="16" y2="12" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round"/>
                        </>
                      )}
                      {segment.kind === "startup" && (
                        <>
                          <path d="M6 15l6-9c2 .2 3.8 2 4 4l-9 6z" fill="none" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round"/>
                          <circle cx="13.3" cy="10.7" r="1.4" fill="#22d3ee"/>
                          <path d="M8 16l-2 2M10 18l-2 2" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round"/>
                        </>
                      )}
                    </svg>
                  </span>
                  <h3 style={{
                    fontSize:16,
                    fontWeight:700,
                    color:"#006064",
                    margin:0,
                  }}>
                    {segment.title}
                  </h3>
                </div>
                <ul style={{
                  listStyle:"none",
                  padding:0,
                  margin:0,
                  display:"flex",
                  flexDirection:"column",
                  gap:10,
                }}>
                  {segment.points.map((point,idx) => (
                    <li key={idx} style={{
                      display:"flex",
                      alignItems:"flex-start",
                      gap:10,
                      fontSize:14,
                      color:"#00838f",
                      lineHeight:1.5,
                    }}>
                      <span style={{color:"#00acc1",fontWeight:700,flexShrink:0}}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </div>
        <div style={{textAlign:"center"}}>
          <button className="uniform-cta-btn" style={{
            background:"#00acc1",
            color:"white",
            border:"none",
            borderRadius:8,
            padding:"14px 32px",
            fontSize:15,
            fontWeight:600,
            cursor:"pointer",
            boxShadow:"0 4px 16px rgba(0,172,193,0.3)",
          }}>
            Get My MVP Blueprint →
          </button>
          <p style={{
            fontSize:13,
            color:"#00838f",
            marginTop:12,
          }}>
            Book your free strategy call.
          </p>
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 9 — Fit Section */}
    <section
      ref={fitRef}
      style={{
        position:"relative",
        background:"linear-gradient(180deg, #ecfeff 0%, #f0f9ff 55%, #ffffff 100%)",
        padding:"88px 48px",
        fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        overflow:"hidden",
      }}
      className="uniform-3d-section"
    >
      <style>{`
        @keyframes fitGlowPulse {
          0%, 100% { transform: scale(1); opacity: .8; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes fitFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div style={{
        position:"absolute",
        top:-120,
        right:-70,
        width:340,
        height:340,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(20,184,166,0.22) 0%, rgba(20,184,166,0) 70%)",
        opacity: fitVisible ? 1 : 0,
        transform: fitVisible ? "scale(1)" : "scale(0.8)",
        transition:"all .8s ease",
        pointerEvents:"none",
      }} />
      <div style={{
        position:"absolute",
        bottom:-140,
        left:-80,
        width:380,
        height:380,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0) 72%)",
        opacity: fitVisible ? 1 : 0,
        transform: fitVisible ? "scale(1)" : "scale(0.78)",
        transition:"all .85s ease .1s",
        pointerEvents:"none",
      }} />

      <div className="uniform-shell" style={{maxWidth:1120,margin:"0 auto",position:"relative"}}>
        <FadeInUp>
          <div style={{textAlign:"center",marginBottom:46}}>
            <h2 style={{
              fontSize:"clamp(30px,3.4vw,42px)",
              fontWeight:800,
              color:"#075985",
              margin:"0 0 14px",
              letterSpacing:"-0.02em",
            }}>
              This Sprint IS (And Isn&apos;t...)
            </h2>
            <p style={{
              fontSize:16,
              color:"#0f766e",
              margin:0,
            }}>
              A clear fit filter before we build, so execution stays fast and focused.
            </p>
          </div>
        </FadeInUp>

        <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:30,alignItems:"stretch"}} className="uniform-grid-2">
          <div style={{
            position:"relative",
            borderRadius:22,
            background:"white",
            border:"1px solid #bae6fd",
            boxShadow:"0 18px 44px rgba(2,132,199,0.12)",
            padding:14,
            opacity: fitVisible ? 1 : 0,
            transform: fitVisible ? "translateY(0) scale(1)" : "translateY(22px) scale(.98)",
            transition:"all .65s cubic-bezier(.22,1,.36,1)",
            animation: fitVisible ? "fitFloat 5.6s ease-in-out infinite" : "none",
          }}>
            <img
              src="/images/sprint-fit-visual.svg"
              alt="Visual guide showing who this sprint is for and not for"
              style={{
                width:"100%",
                height:"100%",
                borderRadius:14,
                objectFit:"cover",
                display:"block",
              }}
            />
            <span style={{
              position:"absolute",
              right:18,
              top:18,
              padding:"6px 12px",
              fontSize:11,
              fontWeight:700,
              letterSpacing:"0.08em",
              color:"#155e75",
              borderRadius:999,
              border:"1px solid #a5f3fc",
              background:"rgba(255,255,255,.86)",
              animation: fitVisible ? "fitGlowPulse 2.6s ease-in-out infinite" : "none",
            }}>
              FIT CHECK
            </span>
          </div>

          <div style={{display:"grid",gridTemplateRows:"1fr 1fr",gap:20}}>
            <ScaleIn delay={0.1}>
              <div style={{
                padding:"30px",
                background:"linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%)",
                borderRadius:18,
                border:"2px solid #86efac",
                boxShadow:"0 10px 24px rgba(34,197,94,0.12)",
              }} className="uniform-3d-card">
                <h3 style={{
                  fontSize:16,
                  fontWeight:800,
                  color:"#15803d",
                  margin:"0 0 18px",
                  textTransform:"uppercase",
                  letterSpacing:"0.04em",
                }}>
                  This IS for you if:
                </h3>
                <ul style={{
                  listStyle:"none",
                  padding:0,
                  margin:0,
                  display:"flex",
                  flexDirection:"column",
                  gap:12,
                  textAlign:"left",
                }}>
                  {[
                    "You have a clear idea or product direction",
                    "You want to launch fast",
                    "You have budget allocated",
                  ].map((item,idx) => (
                    <li key={idx} style={{
                      display:"flex",
                      alignItems:"center",
                      gap:10,
                      fontSize:14,
                      color:"#166534",
                      opacity: fitVisible ? 1 : 0,
                      transform: fitVisible ? "translateX(0)" : "translateX(-14px)",
                      transition:`all .45s ease ${0.14 + idx * 0.09}s`,
                    }}>
                      <span style={{width:20,height:20,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M3 8l3 3 7-7" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div style={{
                padding:"30px",
                background:"linear-gradient(180deg, #fff1f2 0%, #fef2f2 100%)",
                borderRadius:18,
                border:"2px solid #fca5a5",
                boxShadow:"0 10px 24px rgba(239,68,68,0.13)",
              }} className="uniform-3d-card">
                <h3 style={{
                  fontSize:16,
                  fontWeight:800,
                  color:"#be123c",
                  margin:"0 0 18px",
                  textTransform:"uppercase",
                  letterSpacing:"0.04em",
                }}>
                  This is NOT for:
                </h3>
                <ul style={{
                  listStyle:"none",
                  padding:0,
                  margin:0,
                  display:"flex",
                  flexDirection:"column",
                  gap:12,
                  textAlign:"left",
                }}>
                  {[
                    "Just exploring",
                    "No timeline",
                    "No budget",
                  ].map((item,idx) => (
                    <li key={idx} style={{
                      display:"flex",
                      alignItems:"center",
                      gap:10,
                      fontSize:14,
                      color:"#9f1239",
                      opacity: fitVisible ? 1 : 0,
                      transform: fitVisible ? "translateX(0)" : "translateX(14px)",
                      transition:`all .45s ease ${0.18 + idx * 0.09}s`,
                    }}>
                      <span style={{width:20,height:20,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M4 4L12 12M12 4L4 12" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 10 — Results Showcase */}
    <ScrollSection threshold={0.15} style={{
      position:"relative",
      background:"#f8fdff",
      padding:"100px 48px",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div className="uniform-shell" style={{maxWidth:900,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:60}}>
          <h2 style={{
            fontSize:"clamp(26px,3vw,36px)",
            fontWeight:700,
            color:"#006064",
            margin:"0 0 16px",
          }}>
            See what&apos;s possible when you <span style={{color:"#00acc1"}}>actually ship</span>
          </h2>
          <p style={{
            fontSize:16,
            color:"#00838f",
            maxWidth:600,
            margin:"0 auto",
          }}>
            These founders stopped waiting and started building. They all started exactly where you are — with an idea and a decision to move.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:24}} className="uniform-grid-2">
          {[
            {initials:"JR",name:"Founder, SaaS",story:"Launched MVP, secured $150K seed round within 3 weeks of going live",highlight:"$150K raised"},
            {initials:"KL",name:"E-commerce",story:"From idea to 500 paying users in the first month after launch",highlight:"500 users/mo"},
            {initials:"AM",name:"Health Tech",story:"Built a patient portal that 3 clinics adopted immediately",highlight:"3 clinics"},
            {initials:"TS",name:"Marketplace",story:"Went live in 12 days — now processing $50K/mo in transactions",highlight:"$50K/mo"},
          ].map((result,i) => (
            <StaggerItem key={i}>
              <div className="uniform-3d-card uniform-results-card" style={{
                padding:"28px",
                background:"#ffffff",
                borderRadius:16,
                border:"1px solid #c5eaf2",
                display:"flex",
                gap:20,
                height:"100%",
              }}>
                <div className="uniform-results-avatar" style={{
                  width:56,
                  height:56,
                  borderRadius:"50%",
                  background:"linear-gradient(135deg, #00acc1, #00838f)",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  fontSize:18,
                  fontWeight:700,
                  color:"white",
                  flexShrink:0,
                }}>
                  {result.initials}
                </div>
                <div>
                  <div style={{
                    fontSize:15,
                    fontWeight:600,
                    color:"#006064",
                    marginBottom:4,
                  }}>
                    {result.name}
                  </div>
                  <p style={{
                    fontSize:14,
                    color:"#00838f",
                    lineHeight:1.5,
                    margin:"0 0 12px",
                  }}>
                    {result.story}
                  </p>
                  <div style={{
                    display:"inline-block",
                    padding:"4px 12px",
                    background:"#dcfce7",
                    borderRadius:6,
                    fontSize:13,
                    fontWeight:600,
                    color:"#16a34a",
                  }}>
                    {result.highlight}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 11 — Options */}
    <ScrollSection threshold={0.2} style={{
      position:"relative",
      background:"#006064",
      padding:"80px 48px",
      textAlign:"center",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div className="uniform-shell" style={{maxWidth:700,margin:"0 auto"}}>
        <h2 style={{
          fontSize:"clamp(26px,3vw,36px)",
          fontWeight:700,
          color:"white",
          margin:"0 0 48px",
        }}>
          You have two options:
        </h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}} className="uniform-grid-2">
          <div className="uniform-3d-card" style={{
            padding:"32px",
            background:"rgba(255,255,255,0.1)",
            borderRadius:16,
            border:"2px solid rgba(255,255,255,0.2)",
            opacity:0.7,
            height:"100%",
          }}>
            <div style={{
              fontSize:14,
              fontWeight:700,
              color:"rgba(255,255,255,0.6)",
              marginBottom:16,
            }}>
              OPTION 1
            </div>
            <p style={{
              fontSize:16,
              color:"rgba(255,255,255,0.8)",
              margin:0,
              lineHeight:1.6,
            }}>
              Wait months, deal with delays, and hope your product gets finished
            </p>
          </div>
          <div className="uniform-3d-card" style={{
            padding:"32px",
            background:"linear-gradient(135deg, #00acc1, #00838f)",
            borderRadius:16,
            border:"2px solid #00acc1",
            boxShadow:"0 8px 32px rgba(0,172,193,0.4)",
            height:"100%",
          }}>
            <div style={{
              fontSize:14,
              fontWeight:700,
              color:"rgba(255,255,255,0.9)",
              marginBottom:16,
            }}>
              OPTION 2
            </div>
            <p style={{
              fontSize:16,
              color:"white",
              margin:0,
              lineHeight:1.6,
            }}>
              Launch your MVP in 14 days and start moving forward immediately
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 12 — Final CTA */}
    <ScrollSection threshold={0.2} style={{
      position:"relative",
      background:"linear-gradient(180deg, #e0f7fa 0%, #b2ebf2 100%)",
      padding:"100px 48px",
      textAlign:"center",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div className="uniform-shell" style={{maxWidth:700,margin:"0 auto"}}>
        <h2 style={{
          fontSize:"clamp(28px,3.5vw,42px)",
          fontWeight:800,
          color:"#006064",
          margin:"0 0 20px",
        }}>
          Get Your MVP Blueprint
        </h2>
        <div style={{
          display:"flex",
          justifyContent:"center",
          gap:24,
          flexWrap:"wrap",
          marginBottom:32,
        }}>
          {[
            "30-minute strategy call",
            "Clear build plan",
            "Timeline + cost breakdown",
          ].map((item,i) => (
            <div key={i} style={{
              display:"flex",
              alignItems:"center",
              gap:8,
              fontSize:15,
              color:"#00838f",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00acc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
        <button className="uniform-cta-btn" style={{
          background:"#00acc1",
          color:"white",
          border:"none",
          borderRadius:10,
          padding:"18px 40px",
          fontSize:16,
          fontWeight:600,
          cursor:"pointer",
          boxShadow:"0 8px 24px rgba(0,172,193,0.35)",
          transition:"all 0.3s ease",
        }}>
          Book My Free Strategy Call →
        </button>
        <p style={{
          fontSize:14,
          color:"#00838f",
          marginTop:16,
        }}>
          No obligation. Just clarity.
        </p>
        <div className="uniform-3d-panel" style={{
          marginTop:48,
          padding:"28px",
          background:"white",
          borderRadius:16,
          border:"1px solid #b2ebf2",
        }}>
          <p style={{
            fontSize:18,
            fontWeight:600,
            color:"#006064",
            margin:"0 0 8px",
          }}>
            Your idea doesn&apos;t need more time.
          </p>
          <p style={{
            fontSize:20,
            fontWeight:700,
            color:"#00acc1",
            margin:0,
          }}>
            It needs execution.
          </p>
          <p style={{
            fontSize:18,
            fontWeight:600,
            color:"#006064",
            marginTop:12,
          }}>
            And you could be live in 14 days.
          </p>
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 13 — FAQ */}
    <ScrollSection threshold={0.1} style={{
      position:"relative",
      background:"#f9fdff",
      padding:"100px 48px",
      fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div className="uniform-shell" style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:60}}>
          <div style={{
            fontSize:13,
            fontWeight:600,
            color:"#00acc1",
            letterSpacing:"0.15em",
            textTransform:"uppercase",
            marginBottom:12,
          }}>
            GOT QUESTIONS?
          </div>
          <h2 style={{
            fontSize:"clamp(28px,3vw,38px)",
            fontWeight:700,
            color:"#006064",
            margin:0,
          }}>
            Frequently Asked Questions
          </h2>
        </div>
        <div style={{
          display:"flex",
          flexDirection:"column",
          gap:16,
        }}>
          <StaggerContainer>
          {[
            {
              q:"What exactly do you build in 14 days?",
              a:"We build a working MVP. Not a mockup. Not a concept. A real product with the core features needed to validate your idea, demo to investors, and onboard early users.",
            },
            {
              q:"How do you build something that fast?",
              a:"We use a structured system and focused scope. Most projects take months because scope keeps changing, there's no clear plan, and teams are inefficient. We eliminate that upfront.",
            },
            {
              q:"What if my idea is complex?",
              a:"We simplify it. You don't need a full product to launch. You need the smallest version that proves the idea works. We define that with you.",
            },
            {
              q:"What happens during the Blueprint phase?",
              a:"We map out what to build, what NOT to build, and how everything connects. This removes guesswork and prevents delays.",
            },
            {
              q:"Do you handle design and development?",
              a:"Yes. We handle everything: UI/UX, backend, core systems, and deployment. You don't need multiple vendors.",
            },
            {
              q:"What tech stack do you use?",
              a:"We choose based on speed and scalability. The goal is simple: get you live fast and ready to grow.",
            },
            {
              q:"What if I've had a bad experience with developers before?",
              a:"Most founders have. That usually comes from unclear scope, no deadlines, and poor communication. We fix all three with a structured system.",
            },
            {
              q:"What if you don't deliver in 14 days?",
              a:"We keep building for free. Simple.",
            },
            {
              q:"What if I don't like the direction?",
              a:"By Day 5, you'll see real progress. If you're not happy, you can walk away with a full refund and keep the designs.",
            },
            {
              q:"How involved do I need to be?",
              a:"Minimal. You'll be involved in Blueprint phase and key feedback points. We handle execution.",
            },
            {
              q:"Do I need technical knowledge?",
              a:"No. You just need a clear idea and ability to make decisions.",
            },
            {
              q:"What happens after the MVP is built?",
              a:"You get a live product, full codebase, and documentation. You can continue with us or take it elsewhere.",
            },
            {
              q:"How much does it cost?",
              a:"Depends on scope. We give you exact pricing after the Blueprint call.",
            },
            {
              q:"Who is this NOT for?",
              a:"People just exploring, no budget, no urgency. We only work with founders ready to move.",
            },
            {
              q:"How do I get started?",
              a:"Book your MVP Blueprint. We map everything out. Then you decide if you want us to execute.",
            },
          ].map((faq,i) => (
            <StaggerItem key={i}>
              <FAQItem question={faq.q} answer={faq.a} />
            </StaggerItem>
          ))}
          </StaggerContainer>
        </div>
      </div>
    </ScrollSection>

    {/* SECTION 14 — Footer */}
    <ScrollSection threshold={0.1}>
      <footer style={{
        background:"#083344",
        color:"white",
        padding:"100px 48px 48px",
        position:"relative",
        overflow:"hidden",
        fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}>
        {/* Background Accents */}
        <div style={{
          position:"absolute",
          top:0,
          left:0,
          right:0,
          height:1,
          background:"linear-gradient(90deg, transparent, rgba(0,172,193,0.3), transparent)",
        }} />
        <div style={{
          position:"absolute",
          bottom:"-10%",
          right:"-5%",
          width:400,
          height:400,
          borderRadius:"50%",
          background:"radial-gradient(circle, rgba(0,172,193,0.08) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />

        <div className="uniform-shell" style={{maxWidth:1120,margin:"0 auto",position:"relative"}}>
          <div style={{
            display:"grid",
            gridTemplateColumns:"1.5fr 1fr 1fr 1fr",
            gap:60,
            marginBottom:80,
          }} className="footer-grid">
            {/* Column 1: Brand & CTA */}
            <div style={{display:"flex",flexDirection:"column",gap:24}}>
              <div style={{
                display:"flex",
                alignItems:"center",
                gap:10,
                fontSize:26,
                fontWeight:800,
                letterSpacing:"-0.02em",
              }}>
                <img src="/images/elden-mark.svg" alt="Elden Dev logo" style={{width:44,height:44,filter:"drop-shadow(0 4px 12px rgba(0,172,193,0.4))"}} />
                <span>ELDEN<span style={{color:"#00acc1"}}>DEV</span></span>
              </div>
              <p style={{
                fontSize:15,
                lineHeight:1.7,
                color:"rgba(255,255,255,0.7)",
                margin:0,
                maxWidth:320,
              }}>
                We help founders launch their MVPs in 14 days — or we keep building for free. No hiring, no delays, just execution.
              </p>
              <div style={{display:"flex",gap:16}}>
                {[
                  {icon:"twitter",label:"Twitter"},
                  {icon:"linkedin",label:"LinkedIn"},
                  {icon:"github",label:"GitHub"}
                ].map((s,i) => (
                  <a key={i} href="#" style={{
                    width:36,
                    height:36,
                    borderRadius:10,
                    background:"rgba(255,255,255,0.05)",
                    border:"1px solid rgba(255,255,255,0.1)",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    transition:"all 0.3s ease",
                  }} className="footer-social-link">
                    <span style={{fontSize:12,fontWeight:700}}>{s.icon[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Product */}
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              <h4 style={{fontSize:14,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#00acc1",margin:0}}>Product</h4>
              <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:12}}>
                {["MVP Sprint", "Blueprint Call", "The Process", "Deliverables", "Pricing"].map((link,i) => (
                  <li key={i}><a href="#" style={{fontSize:15,color:"rgba(255,255,255,0.6)",textDecoration:"none",transition:"color 0.3s ease"}} className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              <h4 style={{fontSize:14,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#00acc1",margin:0}}>Resources</h4>
              <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:12}}>
                {["Founder Guide", "Success Stories", "Ship-It Guarantee", "FAQ", "Blog"].map((link,i) => (
                  <li key={i}><a href="#" style={{fontSize:15,color:"rgba(255,255,255,0.6)",textDecoration:"none",transition:"color 0.3s ease"}} className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company */}
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              <h4 style={{fontSize:14,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#00acc1",margin:0}}>Company</h4>
              <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:12}}>
                {["About Us", "Contact", "Privacy Policy", "Terms of Service", "Refund Policy"].map((link,i) => (
                  <li key={i}><a href="#" style={{fontSize:15,color:"rgba(255,255,255,0.6)",textDecoration:"none",transition:"color 0.3s ease"}} className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            paddingTop:32,
            borderTop:"1px solid rgba(255,255,255,0.08)",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexWrap:"wrap",
            gap:20,
          }}>
            <p style={{
              fontSize:14,
              color:"rgba(255,255,255,0.4)",
              margin:0,
            }}>
              © 2024 Elden Dev. All rights reserved. ELDEN DEV — MVP SPRINT
            </p>
            <div style={{display:"flex",alignItems:"center",gap:24}}>
              <div style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"rgba(255,255,255,0.6)"}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"#10b981"}} />
                System Operational
              </div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.4)"}}>
                Built with Momentum
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ScrollSection>
    </>
  );
}


