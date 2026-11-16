// Markup for the IndianWeddings landing page, converted from the Claude Design
// template (IndianWeddings Premium Landing Page V5). Every value comes from
// LandingLogic.renderVals() as `v`; behaviour lives in landingLogic.js.
import { Fragment } from 'react';
import { arr, sx } from './dc';
import { Link } from './router';
import NoorCarousel from './home/NoorCarousel';
import { paths } from './routes';

const BEGIN = paths.accountCreate({ intent: 'begin-planning' });
const NOOR_PERSONAL = paths.accountCreate({ intent: 'noor-personalise' });

export default function LandingView({ v }) {
  return (
    <>
    <div ref={v.rootRef} style={{ position: "relative", zIndex: "0", background: "var(--iw-ink)", color: "var(--iw-parchment)", minHeight: "100vh", overflowX: "clip" }}>
      <canvas ref={v.skyRef} aria-hidden="true" style={sx(`position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;pointer-events:none;display:${v.skyDisp ?? ""}`)} />
      <canvas ref={v.sparkRef} aria-hidden="true" style={sx(`position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:40;pointer-events:none;mix-blend-mode:screen;display:${v.sparkDisp ?? ""}`)} />
      {v.showSwitcher ? (<>
        <nav aria-label="Hero options for presenting" onMouseEnter={v.swEnter} onMouseLeave={v.swLeave} onFocus={v.swEnter} onBlur={v.swBlur} style={{ position: "fixed", left: "50%", bottom: "18px", transform: "translateX(-50%)", zIndex: "60", display: "flex", alignItems: "center", gap: "2px", padding: "4px", background: "rgba(12,9,7,.9)", border: "1px solid var(--iw-line-strong)", borderRadius: "3px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maxWidth: "calc(100vw - 24px)", overflowX: "auto", scrollbarWidth: "none" }}>
          <span style={{ padding: "0 6px 0 8px", fontSize: "10px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-stone)", whiteSpace: "nowrap" }}>Hero
          </span>{" "}
          <button className="iw-hover-0 iw-focus-5" type="button" onClick={v.swPrev} aria-label="Previous hero" style={{ minWidth: "40px", minHeight: "40px", padding: "0", background: "transparent", border: "0", borderRadius: "2px", color: "var(--iw-parchment)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>‹
          </button>{" "}
          {v.swClosed ? (<>
            <button className="iw-focus-5" type="button" onClick={v.swEnter} style={{ minHeight: "40px", padding: "0 12px", background: "transparent", border: "0", color: "var(--iw-ivory)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap", cursor: "pointer" }}>{v.swCur}
            </button>
          </>) : null}{" "}
          {v.swOpen ? (<>
            {arr(v.heroOpts).map((h, $index) => (<Fragment key={$index}>
              <button className="iw-focus-5" type="button" onClick={h?.on} aria-pressed={h?.pressed} title={h?.title} style={sx(`min-height:40px;padding:0 12px;background:${h?.bg ?? ""};color:${h?.fg ?? ""};border:0;border-radius:2px;font-family:'Nunito Sans',sans-serif;font-size:13px;font-weight:700;white-space:nowrap;cursor:pointer;transition:background-color .2s ease,color .2s ease`)}>
                <span style={sx(`margin-right:6px;color:${h?.noC ?? ""}`)}>{h?.no}
                </span>{h?.label}
              </button>
            </Fragment>))}
          </>) : null}{" "}
          <button className="iw-hover-0 iw-focus-5" type="button" onClick={v.swNext} aria-label="Next hero" style={{ minWidth: "40px", minHeight: "40px", padding: "0", background: "transparent", border: "0", borderRadius: "2px", color: "var(--iw-parchment)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>›
          </button>
        </nav>
      </>) : null}{" "}
      {v.heroCine ? (<>
        <section id="top" data-screen-label="01 Hero" aria-labelledby="hero-h" style={{ position: "relative", height: "100svh", minHeight: "640px", maxHeight: "1040px", overflow: "hidden", background: "transparent", color: "var(--iw-ivory)", display: "flex", alignItems: "flex-end" }}>
          <div ref={v.heroFrameRef} style={{ position: "absolute", inset: "0", overflow: "hidden", WebkitMaskImage: "linear-gradient(180deg,#000 58%,transparent 100%)", maskImage: "linear-gradient(180deg,#000 58%,transparent 100%)" }}>
            <div ref={v.heroParRef} style={{ position: "absolute", top: "-6%", bottom: "-6%", left: "0", right: "0", willChange: "transform" }}>
              <img data-slide="2" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-destination-wedding-couple-portrait-ptaufiq.jpg" alt="A couple’s portrait at a destination wedding" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 40%;opacity:${v.slideOp2 ?? ""};transition:opacity 1.6s ease`)} />{" "}
              <img data-slide="1" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-iceland-destination-engagement.jpg" alt="A couple at their destination engagement shoot in Iceland" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 45%;opacity:${v.slideOp1 ?? ""};transition:opacity 1.6s ease`)} />{" "}
              <img data-slide="0" fetchpriority="high" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-jaisalmer-india-destination-engagement-scaled.jpg" alt="A couple at their engagement shoot in Jaisalmer" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 45%;opacity:${v.slideOp0 ?? ""};transition:opacity 1.6s ease`)} />
            </div>
            <div style={{ position: "absolute", inset: "0", background: v.heroScrim }} />
          </div>
          <div style={{ position: "relative", width: "100%", maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px) clamp(36px,6vh,64px)" }}>
            <h1 id="hero-h" style={{ margin: "22px 0 0", maxWidth: "13em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(42px,6vw,98px)", lineHeight: "1.02", letterSpacing: "-.012em", color: "var(--iw-ivory)" }}>
              <span data-hero="400" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
              </span>{" "}
              <span data-hero="520" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
              </span>
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 48px", marginTop: "30px" }}>
              <div style={{ flex: "1 1 420px", maxWidth: "640px" }}>
                <p data-hero="620" style={{ margin: "0", maxWidth: "30em", fontSize: "clamp(16px,1.25vw,19px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="720" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 30px", marginTop: "30px" }}>
                  <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", padding: "0 30px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
                  </Link>{" "}
                  <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </Link>
                </div>
              </div>
              <div data-hero="820" style={sx(`display:${v.slideCtlDisp ?? ""};align-items:center;gap:18px`)}>
                <span aria-live="polite" style={{ whiteSpace: "nowrap", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "var(--iw-parchment)", fontVariantNumeric: "tabular-nums" }}>{v.slideNo}{" / 03"}
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  {arr(v.segs).map((g, $index) => (<Fragment key={$index}>
                    <button className="iw-focus-7" type="button" onClick={g?.on} aria-label={g?.aria} aria-pressed={g?.pressed} style={{ appearance: "none", width: "40px", height: "44px", padding: "0", background: "transparent", border: "0", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <span style={sx(`display:block;width:100%;height:2px;background:${g?.bg ?? ""};transition:background-color .4s ease`)} />
                    </button>
                  </Fragment>))}
                </div>
                <button className="iw-hover-8 iw-focus-7" type="button" onClick={v.togglePause} aria-label={v.pauseAria} style={{ appearance: "none", minWidth: "64px", minHeight: "44px", padding: "0 12px", background: "transparent", border: "1px solid rgba(244,238,228,.4)", borderRadius: "2px", color: "var(--iw-ivory)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "13px", fontWeight: "600", cursor: "pointer", transition: "border-color .2s ease" }}>{v.pauseLabel}
                </button>
              </div>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroMosaic ? (<>
        <section id="top" data-screen-label="01 Hero · Mosaic" aria-labelledby="hero-h" style={{ position: "relative", background: "transparent", color: "var(--iw-ivory)", padding: "88px clamp(20px,4vw,56px) clamp(20px,3vh,32px)" }}>
          {v.wide ? (<>
            <div style={{ maxWidth: "1320px", margin: "0 auto", height: "calc(min(100svh, 1040px) - 88px - clamp(20px,3vh,32px))", minHeight: "560px", display: "grid", gridTemplateColumns: "repeat(12,minmax(0,1fr))", gridTemplateRows: "repeat(6,minmax(0,1fr))", gap: "4px" }}>
              <div style={{ gridColumn: "1 / 6", gridRow: "1 / 5", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 clamp(16px,2.4vw,40px) clamp(12px,2vw,24px) 0", minWidth: "0" }}>
                <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,3.4vw,60px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "var(--iw-ivory)" }}>
                  <span data-hero="160" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                  </span>
                  <span data-hero="280" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                  </span>
                </h1>
                <p data-hero="380" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.1vw,17px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="460" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "14px 28px", marginTop: "26px" }}>
                  <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
                  </Link>
                  <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </Link>
                </div>
              </div>
              <figure data-hero="220" style={{ gridColumn: "6 / 10", gridRow: "1 / 5", margin: "0", position: "relative", overflow: "hidden", background: "var(--iw-surface)", minHeight: "0" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg" alt="A bride making her entrance" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-ivory)" }}>The entrance
                </figcaption>
              </figure>
              <div data-hero="320" style={{ gridColumn: "10 / 13", gridRow: "1 / 3", background: "var(--iw-surface)", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Run sheet · sample
                </span>
                <span>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.2vw,48px)", lineHeight: "1", color: "var(--iw-gold)" }}>20:30
                  </span>
                  <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "var(--iw-parchment)" }}>Your entrance
                  </span>
                  <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "var(--iw-stone)" }}>Sangeet, Friday · the lawns
                  </span>
                </span>
              </div>
              <figure data-hero="400" style={{ gridColumn: "10 / 13", gridRow: "3 / 7", margin: "0", position: "relative", overflow: "hidden", background: "var(--iw-surface)", minHeight: "0" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg" alt="A mehendi celebration" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-ivory)" }}>Mehendi
                </figcaption>
              </figure>
              <div data-hero="360" style={{ gridColumn: "1 / 4", gridRow: "5 / 7", background: "var(--iw-surface)", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Budget · sample
                </span>
                <span>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(26px,2.4vw,34px)", lineHeight: "1", color: "var(--iw-ivory)" }}>₹41.2L
                  </span>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "12px", color: "var(--iw-stone)" }}>committed of ₹85L
                  </span>
                  <span style={{ display: "block", position: "relative", height: "3px", marginTop: "12px", background: "var(--iw-line-strong)" }}>
                    <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "48%", background: "var(--iw-gold)" }} />
                  </span>
                </span>
              </div>
              <figure data-hero="440" style={{ gridColumn: "4 / 6", gridRow: "5 / 7", margin: "0", position: "relative", overflow: "hidden", background: "var(--iw-surface)", minHeight: "0" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg" alt="A mandap dressed for the ceremony" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-ivory)" }}>The mandap
                </figcaption>
              </figure>
              <div data-hero="500" style={{ gridColumn: "6 / 8", gridRow: "5 / 7", background: "var(--iw-surface)", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Replies · sample
                </span>
                <span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.35", color: "var(--iw-parchment)" }}>The Kapoors, London
                  </span>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "var(--iw-stone)" }}>Attending 3 of 4 celebrations
                  </span>
                  <span style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                    <span style={{ flex: "1", height: "3px", background: "var(--iw-sand)" }} />
                    <span style={{ flex: "1", height: "3px", background: "var(--iw-sand)" }} />
                    <span style={{ flex: "1", height: "3px", background: "var(--iw-sand)" }} />
                    <span style={{ flex: "1", height: "3px", background: "var(--iw-line-strong)" }} />
                  </span>
                </span>
              </div>
              <div data-hero="560" style={{ gridColumn: "8 / 10", gridRow: "5 / 7", background: "var(--iw-surface)", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Vendors · sample
                </span>
                <span>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ flex: "0 0 7px", height: "7px", marginTop: "6px", borderRadius: "50%", background: "#6FAE93" }} />
                    <span style={{ fontSize: "14px", lineHeight: "1.45", color: "var(--iw-parchment)" }}>Vermilion Films sent a revised quote
                    </span>
                  </span>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "12px", lineHeight: "1.45", color: "var(--iw-stone)" }}>A second shooter for the sangeet
                  </span>
                </span>
              </div>
            </div>
          </>) : null}{" "}
          {v.narrow ? (<>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", paddingTop: "16px" }}>
              <div>
                <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,9vw,52px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "var(--iw-ivory)" }}>
                  <span data-hero="160" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                  </span>
                  <span data-hero="280" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                  </span>
                </h1>
                <p data-hero="380" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="460" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "14px 28px", marginTop: "26px" }}>
                  <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
                  </Link>
                  <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </Link>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "4px" }}>
                <figure data-hero="220" style={{ aspectRatio: "3 / 4", margin: "0", position: "relative", overflow: "hidden", background: "var(--iw-surface)", minHeight: "0" }}>
                  <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg" alt="A bride making her entrance" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                  <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-ivory)" }}>The entrance
                  </figcaption>
                </figure>
                <div data-hero="300" style={{ aspectRatio: "3 / 4", background: "var(--iw-surface)", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Run sheet · sample
                  </span>
                  <span>
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.2vw,48px)", lineHeight: "1", color: "var(--iw-gold)" }}>20:30
                    </span>
                    <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "var(--iw-parchment)" }}>Your entrance
                    </span>
                    <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "var(--iw-stone)" }}>Sangeet, Friday · the lawns
                    </span>
                  </span>
                </div>
                <div data-hero="360" style={{ aspectRatio: "3 / 4", background: "var(--iw-surface)", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Replies · sample
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: "1.35", color: "var(--iw-parchment)" }}>The Kapoors, London
                    </span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "var(--iw-stone)" }}>Attending 3 of 4 celebrations
                    </span>
                    <span style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                      <span style={{ flex: "1", height: "3px", background: "var(--iw-sand)" }} />
                      <span style={{ flex: "1", height: "3px", background: "var(--iw-sand)" }} />
                      <span style={{ flex: "1", height: "3px", background: "var(--iw-sand)" }} />
                      <span style={{ flex: "1", height: "3px", background: "var(--iw-line-strong)" }} />
                    </span>
                  </span>
                </div>
                <figure data-hero="420" style={{ aspectRatio: "3 / 4", margin: "0", position: "relative", overflow: "hidden", background: "var(--iw-surface)", minHeight: "0" }}>
                  <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg" alt="A mehendi celebration" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                  <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-ivory)" }}>Mehendi
                  </figcaption>
                </figure>
              </div>
            </div>
          </>) : null}
        </section>
      </>) : null}{" "}
      {v.heroOrbit ? (<>
        <section id="top" ref={v.orbitRef} data-screen-label="01 Hero · Orbit" aria-labelledby="hero-h" style={{ position: "relative", height: "100svh", minHeight: "680px", maxHeight: "1040px", overflow: "hidden", background: "transparent", color: "var(--iw-ivory)" }}>
          <div data-hero="60" aria-hidden="true" style={{ position: "absolute", inset: "0" }}>
            <span style={{ position: "absolute", left: "50%", top: "0", width: "150%", height: "72%", transform: "translateX(-50%)", background: "radial-gradient(50% 100% at 50% 0%, rgba(255,234,196,.13) 0%, rgba(255,234,196,.045) 45%, rgba(255,234,196,0) 75%)", pointerEvents: "none" }} />{" "}
            <span style={{ position: "absolute", left: "50%", bottom: "-34%", width: "160%", height: "76%", transform: "translateX(-50%)", background: "radial-gradient(50% 50% at 50% 50%, rgba(204,138,78,.24) 0%, rgba(160,98,52,.09) 42%, rgba(12,9,7,0) 72%)", pointerEvents: "none" }} />{" "}
            <span ref={v.orbitRaysRef} style={{ position: "absolute", left: "var(--ocx,50%)", top: "var(--ocy,50%)", width: "170vmax", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "repeating-conic-gradient(from 0deg, rgba(255,226,170,.08) 0deg 1.1deg, rgba(255,226,170,0) 1.1deg 7.5deg)", WebkitMaskImage: "radial-gradient(circle, #000 0%, rgba(0,0,0,.5) 16%, transparent 44%)", maskImage: "radial-gradient(circle, #000 0%, rgba(0,0,0,.5) 16%, transparent 44%)", pointerEvents: "none" }} />{" "}
            <span ref={v.orbitAuraRef} style={{ position: "absolute", left: "var(--ocx,50%)", top: "var(--ocy,50%)", width: "min(1400px,150vw)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(214,150,86,.30) 0%, rgba(170,104,56,.15) 22%, rgba(96,58,32,.06) 40%, rgba(12,9,7,0) 60%)", pointerEvents: "none" }} />{" "}
            <span style={{ position: "absolute", left: "var(--ocx,50%)", top: "var(--ocy,50%)", width: "min(420px,80vw)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,240,214,.14) 0%, rgba(255,240,214,.05) 40%, rgba(255,240,214,0) 70%)", pointerEvents: "none" }} />
            <div ref={v.orbitStarsRef} style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
              {arr(v.orbitStars).map((s, $index) => (<Fragment key={$index}>
                <span style={sx(`position:absolute;left:${s?.x ?? ""};top:${s?.y ?? ""};width:${s?.z ?? ""};height:${s?.z ?? ""};border-radius:50%;background:${s?.c ?? ""};box-shadow:${s?.g ?? ""};opacity:.6`)} />
              </Fragment>))}
            </div>
            <svg style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
              <defs>
                <filter id="orbit-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
              </defs>
              <ellipse ref={v.orbitGlowEllRef} cx="-999" cy="-999" rx="1" ry="1" filter="url(#orbit-glow)" style={{ fill: "none", stroke: "rgba(236,190,118,.24)", strokeWidth: "10" }} />
              <ellipse ref={v.orbitOuterRef} cx="-999" cy="-999" rx="1" ry="1" style={{ fill: "none", stroke: "rgba(201,169,110,.17)", strokeWidth: "1" }} />
              <ellipse ref={v.orbitInnerRef} cx="-999" cy="-999" rx="1" ry="1" style={{ fill: "none", stroke: "rgba(232,209,154,.16)", strokeWidth: "1", strokeDasharray: "1 6" }} />
              <ellipse ref={v.orbitEllRef} cx="-999" cy="-999" rx="1" ry="1" style={{ fill: "none", stroke: "rgba(201,169,110,.34)", strokeWidth: "1", strokeDasharray: "2 7" }} />
              <polyline ref={v.orbitPolyRef} points="" style={{ fill: "none", stroke: "rgba(232,209,154,.16)", strokeWidth: "1" }} />
            </svg>{" "}
            {arr(v.orbits).map((o, $index) => (<Fragment key={$index}>
              <figure ref={o?.ref} style={sx(`position:absolute;left:0;top:0;margin:0;width:${v.orbitSz ?? ""};height:${v.orbitSz ?? ""};transform-origin:50% 50%;will-change:transform,opacity`)}>
                <span style={{ position: "absolute", inset: "-48%", borderRadius: "50%", background: "radial-gradient(circle, rgba(236,190,118,.34) 0%, rgba(204,138,78,.13) 36%, rgba(12,9,7,0) 68%)", pointerEvents: "none" }} />{" "}
                <span style={{ position: "absolute", inset: "-8px", borderRadius: "50%", border: "1px solid rgba(232,209,154,.22)", pointerEvents: "none" }} />{" "}
                <span style={sx(`position:relative;display:block;width:100%;height:100%;border-radius:50%;border:1px solid rgba(232,209,154,.5);background:var(--iw-surface) center / cover no-repeat;background-image:${o?.bg ?? ""}`)} />
                <figcaption style={sx(`display:${v.orbitCapDisp ?? ""};position:absolute;left:calc(100% + 14px);top:50%;transform:translateY(-50%);white-space:nowrap`)}>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "19px", lineHeight: "1.1", color: "var(--iw-ivory)" }}>{o?.n}
                  </span>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-sand)" }}>{o?.d}
                  </span>
                </figcaption>
              </figure>
            </Fragment>))}{" "}
            {arr(v.orbitComets).map((c, $index) => (<Fragment key={$index}>
              <span ref={c?.ref} style={sx(`position:absolute;left:0;top:0;z-index:2;width:${c?.sz ?? ""};height:${c?.sz ?? ""};border-radius:50%;background:${c?.bg ?? ""};will-change:transform,opacity;pointer-events:none`)} />
            </Fragment>))}
          </div>
          <div ref={v.orbitTextRef} style={sx(`position:absolute;top:72px;left:0;right:0;bottom:0;z-index:4;display:flex;align-items:${v.orbitAlign ?? ""};justify-content:center;padding:0 24px ${v.orbitPadB ?? ""};pointer-events:none`)}>
            <div style={{ maxWidth: "620px", textAlign: "center", pointerEvents: "auto" }}>
              <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,3.8vw,62px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "var(--iw-ivory)" }}>
                <span data-hero="280" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                </span>
                <span data-hero="400" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                </span>
              </h1>
              <p data-hero="500" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty", marginLeft: "auto", marginRight: "auto" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
              </p>
              <div data-hero="600" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 28px", marginTop: "26px" }}>
                <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
                </Link>
                <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroSeam ? (<>
        <section id="top" ref={v.seamRef} data-screen-label="01 Hero · Seam" aria-labelledby="hero-h" onPointerDown={v.seamDown} onPointerMove={v.seamMove} onPointerUp={v.seamUp} onPointerCancel={v.seamUp} onLostPointerCapture={v.seamUp} style={{ "--seam": "54%", position: "relative", height: "100svh", minHeight: "660px", maxHeight: "1040px", overflow: "hidden", background: "transparent", color: "var(--iw-ivory)", touchAction: "pan-y" }}>
          <div style={{ position: "absolute", inset: "0", background: "rgba(12,9,7,.84)" }}>
            <div style={sx(`position:absolute;top:0;bottom:0;right:0;width:${v.seamPlanW ?? ""};padding:${v.seamPlanPad ?? ""};display:flex;flex-direction:column;justify-content:${v.seamPlanJust ?? ""}`)}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-gold)" }}>Sangeet · Friday 12 February · sample plan
              </p>
              <p style={sx(`margin:12px 0 0;font-family:'Marcellus',serif;font-size:${v.seamTimeSz ?? ""};line-height:.92;color:var(--iw-gold)`)}>20:30
              </p>
              <p style={{ margin: "12px 0 0", fontFamily: "'Marcellus',serif", fontSize: "clamp(22px,2.3vw,34px)", lineHeight: "1.1", color: "var(--iw-ivory)" }}>Your entrance
              </p>
              <div style={sx(`display:${v.seamRowsDisp ?? ""};margin-top:22px;border-top:1px solid var(--iw-line-strong)`)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid var(--iw-line)" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--iw-stone)", whiteSpace: "nowrap" }}>On stage
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--iw-parchment)", textAlign: "right" }}>Studio Haveli, three songs
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid var(--iw-line)" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--iw-stone)", whiteSpace: "nowrap" }}>At the gate
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--iw-parchment)", textAlign: "right" }}>Vermilion Films, second shooter
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid var(--iw-line)" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--iw-stone)", whiteSpace: "nowrap" }}>Lighting
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--iw-parchment)", textAlign: "right" }}>Warm, on the first beat
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid var(--iw-line)" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--iw-stone)", whiteSpace: "nowrap" }}>Guests
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--iw-parchment)", textAlign: "right" }}>240 seated by 20:15
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", inset: "0", clipPath: "inset(0 calc(100% - var(--seam)) 0 0)" }}>
            <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg" alt="A bride making her entrance" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%" }} />
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(12,9,7,.45) 0%,rgba(12,9,7,0) 22%,rgba(12,9,7,0) 44%,rgba(12,9,7,.82) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "100px", left: "var(--seam)", transform: "translateX(calc(-100% - 18px))", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-ivory)", whiteSpace: "nowrap", pointerEvents: "none" }}>The moment
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "100px", left: "var(--seam)", transform: "translateX(18px)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-gold)", whiteSpace: "nowrap", pointerEvents: "none" }}>Everything behind it
          </div>
          <div style={{ position: "absolute", top: "0", bottom: "0", left: "var(--seam)", width: "1px", background: "rgba(244,238,228,.75)" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "0", bottom: "0", left: "-24px", width: "48px", cursor: "ew-resize" }} />
            <button className="iw-focus-a" type="button" data-seam="" ref={v.seamHandleRef} role="slider" aria-label="Slide between the moment and the plan behind it" aria-valuemin="4" aria-valuemax="96" aria-valuenow="54" onKeyDown={v.seamKey} style={{ position: "absolute", top: "50%", left: "0", transform: "translate(-50%,-50%)", width: "56px", height: "56px", borderRadius: "50%", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", border: "0", cursor: "ew-resize", fontFamily: "'Nunito Sans',sans-serif", fontSize: "18px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span aria-hidden="true">‹
              </span>
              <span aria-hidden="true">›
              </span>
            </button>
          </div>
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "0 clamp(20px,4vw,56px) clamp(36px,6vh,64px)", pointerEvents: "none" }}>
            <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
              <div style={sx(`width:${v.seamCopyW ?? ""};max-width:620px;pointer-events:auto`)}>
                <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,76px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "var(--iw-ivory)" }}>
                  <span data-hero="380" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                  </span>
                  <span data-hero="500" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                  </span>
                </h1>
                <p data-hero="600" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="700" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "14px 28px", marginTop: "26px" }}>
                  <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
                  </Link>
                  <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroArch ? (<>
        <section id="top" ref={v.archSecRef} data-screen-label="01 Hero · Arch" aria-labelledby="hero-h" style={sx(`position:relative;height:${v.archSecH ?? ""};color:var(--iw-ivory)`)}>
          <div style={sx(`position:${v.archPos ?? ""};top:0;height:${v.archInnerH ?? ""};min-height:min(100svh, 1040px);padding:104px clamp(24px,5vw,72px) ${v.archPadB ?? ""};display:flex;align-items:center;justify-content:center;overflow:hidden`)}>
            <span aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "radial-gradient(42% 56% at 24% 42%, rgba(201,169,110,.08) 0%, rgba(201,169,110,0) 70%), linear-gradient(180deg, rgba(12,9,7,0) 60%, rgba(12,9,7,.55) 100%)" }} />
            <div style={sx(`position:relative;width:100%;max-width:1160px;display:grid;grid-template-columns:${v.archCols ?? ""};justify-content:center;align-items:center;gap:${v.archGap ?? ""}`)}>
              <div style={sx(`position:relative;z-index:2;min-width:0;max-width:${v.archTextW ?? ""};justify-self:${v.archJs ?? ""};text-align:${v.archTA ?? ""}`)}>
                <h1 id="hero-h" style={{ margin: "26px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,3.6vw,58px)", lineHeight: "1.12", letterSpacing: "-.005em", color: "var(--iw-ivory)", textWrap: "balance" }}>
                  <span data-hero="420" style={{ display: "block" }}>A wedding that feels like you.
                  </span>{" "}
                  <span data-hero="540" style={{ display: "block", color: "#CFC3B4" }}>A plan that holds it all.
                  </span>
                </h1>
                <span data-hero="600" aria-hidden="true" style={sx(`display:block;width:48px;height:1px;margin:30px ${v.archRuleM ?? ""} 0;background:var(--iw-gold)`)} />
                <p data-hero="660" style={sx(`margin:26px ${v.archRuleM ?? ""} 0;max-width:26em;font-size:16px;line-height:1.7;color:var(--iw-parchment);text-wrap:pretty`)}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="760" style={sx(`display:flex;flex-wrap:wrap;align-items:center;justify-content:${v.archJs ?? ""};gap:14px 28px;margin-top:34px`)}>
                  <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
                  </Link>
                  <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </Link>
                </div>
              </div>
              <figure style={sx(`position:relative;z-index:1;margin:0;justify-self:center;width:${v.archW ?? ""}`)}>
                <span ref={v.archAuraRef} aria-hidden="true" style={{ position: "absolute", left: "50%", top: "44%", width: "280%", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(204,138,78,.34) 0%, rgba(160,98,52,.16) 26%, rgba(90,54,30,.06) 44%, rgba(12,9,7,0) 62%)", pointerEvents: "none" }} />{" "}
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "92%", width: "120%", height: "46vh", transform: "translateX(-50%)", background: "radial-gradient(50% 100% at 50% 100%, rgba(255,234,196,.16) 0%, rgba(255,234,196,.05) 45%, rgba(255,234,196,0) 75%)", pointerEvents: "none" }} />{" "}
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "-42px", width: "26px", height: "26px", transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,246,226,.95) 0%,rgba(232,209,154,.45) 32%,rgba(232,209,154,0) 70%)" }} />{" "}
                <span aria-hidden="true" style={{ position: "absolute", left: "-22px", right: "22px", top: "22px", aspectRatio: "3 / 4.2", border: "1px solid rgba(201,169,110,.45)", borderRadius: "999px 999px 0 0", pointerEvents: "none" }} />{" "}
                <span data-arch="" aria-hidden="true" style={{ display: "block", position: "relative", aspectRatio: "3 / 4.2", borderRadius: "999px 999px 0 0", overflow: "hidden", background: "var(--iw-surface)" }}>
                  {arr(v.archSlides).map((s, $index) => (<Fragment key={$index}>
                    <span ref={s?.ref} style={sx(`position:absolute;inset:0;background-image:${s?.bg ?? ""};background-size:cover;background-position:center;opacity:${s?.op ?? ""};transform:scale(${s?.sc ?? ""});transition:${v.archTr ?? ""}`)} />
                  </Fragment>))}{" "}
                  <span style={{ position: "absolute", inset: "0", borderRadius: "999px 999px 0 0", background: "linear-gradient(180deg, rgba(255,240,214,.10) 0%, rgba(255,240,214,0) 26%)" }} />
                </span>
                <figcaption style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginTop: "46px", paddingTop: "6px", borderTop: "1px solid rgba(244,238,228,.16)" }}>
                  <span ref={v.archProgRef} aria-hidden="true" style={{ position: "absolute", left: "0", top: "-1px", width: "100%", height: "1px", background: "var(--iw-gold)", transform: "scaleX(0)", transformOrigin: "left center" }} />{" "}
                  <span ref={v.archCapRef} aria-live="polite" style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px", minWidth: "0" }}>
                    <span style={{ fontFamily: "'Marcellus',serif", fontSize: "19px", color: "var(--iw-ivory)" }}>{v.archName}
                    </span>
                    <span style={{ fontSize: "13px", color: "#A79C90" }}>{v.archDay}
                    </span>
                  </span>{" "}
                  <button className="iw-hover-b iw-focus-1" type="button" onClick={v.archNext} aria-label={`Next celebration: ${v.archNextName ?? ""}`} style={{ appearance: "none", flex: "0 0 auto", display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "0", background: "none", border: "0", color: "#A79C90", font: "inherit", fontSize: "12px", fontWeight: "600", letterSpacing: ".14em", cursor: "pointer", transition: "color .2s ease" }}>{v.archNo}
                    <span aria-hidden="true" style={{ fontSize: "16px", letterSpacing: "0" }}>→
                    </span>
                  </button>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroSky ? (<>
        <section id="top" data-screen-label="01 Hero · Your sky" aria-labelledby="hero-h" style={{ position: "relative", minHeight: "min(100svh, 1040px)", padding: "92px clamp(20px,4vw,56px) 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", background: "radial-gradient(56% 46% at 50% 58%, rgba(12,9,7,.66) 0%, rgba(12,9,7,0) 100%)", color: "var(--iw-ivory)", overflow: "hidden" }}>
          <canvas ref={v.moonRef} data-hero="60" aria-hidden="true" style={sx(`display:block;width:${v.moonSz ?? ""};height:${v.moonSz ?? ""}`)} />
          <p data-hero="180" aria-live="polite" style={{ margin: "4px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-gold-light)" }}>{v.skyOver}
          </p>
          {v.skyHasCount ? (<>
            <p style={{ margin: "10px 0 0", fontFamily: "'Marcellus',serif", fontSize: "clamp(22px,2vw,30px)", lineHeight: "1.1", color: "var(--iw-gold)" }}>{v.skyCount}
            </p>
          </>) : null}
          <h1 id="hero-h" style={{ margin: "18px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.6vw,80px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "var(--iw-ivory)" }}>
            <span data-hero="260" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
            </span>
            <span data-hero="380" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
            </span>
          </h1>
          <p data-hero="480" aria-live="polite" style={{ margin: "20px auto 0", maxWidth: "34em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>{v.skyLine}
          </p>
          <form data-hero="580" onSubmit={v.skySubmit} style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "center", gap: "14px 16px", marginTop: "26px" }}>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px", textAlign: "left" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--iw-sand)" }}>Your wedding date
              </span>
              <input className="iw-focus-1" type="date" value={v.skyDraft ?? ""} onChange={v.skyChange} style={{ minHeight: "52px", minWidth: "210px", padding: "0 14px", background: "rgba(12,9,7,.7)", border: "1px solid #4A3A22", borderRadius: "2px", color: "var(--iw-ivory)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "16px", colorScheme: "dark" }} />
            </label>{" "}
            <button className="iw-hover-c iw-focus-a" type="submit" style={{ minHeight: "52px", padding: "0 22px", background: "transparent", border: "1px solid var(--iw-gold)", borderRadius: "2px", color: "var(--iw-ivory)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>See your sky
            </button>{" "}
            <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
            </Link>
          </form>
          <div data-hero="660" style={{ marginTop: "14px" }}>
            <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
            </Link>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroPetals ? (<>
        <section id="top" ref={v.petalRef} data-screen-label="01 Hero · Petals" aria-labelledby="hero-h" onPointerMove={v.petalMove} onPointerDown={v.petalDown} onPointerLeave={v.petalLeave} style={{ position: "relative", height: "100svh", minHeight: "640px", maxHeight: "1040px", overflow: "hidden", background: "radial-gradient(70% 60% at 50% 45%, rgba(58,30,18,.5) 0%, rgba(12,9,7,0) 72%)", color: "var(--iw-ivory)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", touchAction: "pan-y" }}>
          <canvas ref={v.petalBackRef} aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: "1", maxWidth: "1180px", padding: "72px 24px 24px" }}>
            <h1 id="hero-h" style={{ margin: "22px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(44px,6.6vw,118px)", lineHeight: "1.02", letterSpacing: "-.014em", color: "var(--iw-ivory)" }}>
              <span data-hero="1000" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
              </span>
              <span data-hero="1140" style={{ display: "block", marginTop: ".08em", textWrap: "balance" }}>A plan that holds it all.
              </span>
            </h1>
            <p data-hero="1260" style={{ margin: "26px auto 0", maxWidth: "32em", fontSize: "clamp(15px,1.2vw,19px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
            </p>
            <div data-hero="1360" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 28px", marginTop: "30px" }}>
              <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
              </Link>
              <Link className="iw-hover-6 iw-focus-4" to={paths.ourApproach} style={{ display: "inline-flex", alignItems: "center", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
              </Link>
            </div>
          </div>
          <canvas ref={v.petalFrontRef} aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none", zIndex: "2" }} />
          <p aria-hidden="true" style={sx(`position:absolute;left:0;right:0;bottom:${v.petalHintB ?? ""};z-index:3;margin:0;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--iw-stone);pointer-events:none`)}>{v.petalHint}
          </p>
        </section>
      </>) : null}
      <section id="open-dates" data-screen-label="02 Open dates" aria-labelledby="od-h" style={{ scrollMarginTop: "72px", padding: "clamp(64px,8vw,104px) 0", borderBottom: "1px solid var(--iw-line)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1.4 1 520px", minWidth: "0" }}>
              <h2 id="od-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,50px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "var(--iw-ivory)", textWrap: "balance", maxWidth: "13em" }}>{"The places everyone wants. "}
                <span style={{ color: "#A89C8F" }}>On dates that rarely open.
                </span>
              </h2>
            </div>
            <div style={{ flex: "0 1 430px", minWidth: "0" }}>
              <p data-rv="up" data-rv-d="140" style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "var(--iw-sand)", textWrap: "pretty" }}>Now and then a heritage hotel, a fort palace or a lakeside estate releases a date: a cancellation, or a midweek stretch. We check what each one includes and list it here, for as long as it holds..
              </p>
              <div role="tablist" aria-label="Where the open dates are" data-rv="up" data-rv-d="200" style={{ display: "flex", gap: "28px", marginTop: "28px", borderBottom: "1px solid var(--iw-line-strong)" }}>
                {arr(v.dealTabs).map((t, $index) => (<Fragment key={$index}>
                  <button className="iw-hover-b iw-focus-1" type="button" role="tab" id={t?.tid} aria-selected={t?.sel} aria-controls="od-list" onClick={t?.on} style={sx(`appearance:none;background:none;border:0;border-bottom:1px solid ${t?.line ?? ""};margin-bottom:-1px;padding:14px 0 13px;min-height:44px;font-family:'Nunito Sans',sans-serif;font-size:14px;font-weight:700;letter-spacing:.03em;color:${t?.color ?? ""};cursor:pointer;transition:color .2s ease,border-color .25s ease`)}>{t?.label}
                  </button>
                </Fragment>))}
              </div>
            </div>
          </div>
          <div id="od-list" role="tabpanel" aria-labelledby={v.dealLabelledBy} style={{ display: "flex", alignItems: "flex-start", gap: "clamp(16px,2vw,24px)", marginTop: "clamp(48px,6vw,72px)", overflowX: "auto", scrollSnapType: "x proximity", scrollbarWidth: "none" }}>
            {arr(v.deals).map((d, $index) => (<Fragment key={$index}>
              <article style={{ flex: "0 0 clamp(250px,23%,300px)", minWidth: "0", scrollSnapAlign: "start" }}>
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", background: "var(--iw-surface)" }}>
                  <img className="iw-hover-9" src={d?.img} alt={d?.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />{" "}
                  <span style={{ position: "absolute", top: "14px", left: "14px", padding: "5px 8px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "12px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase" }}>{d?.when}
                  </span>
                </div>
                <p style={{ margin: "18px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-stone)" }}>{d?.place}
                </p>
                <h3 style={{ margin: "8px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.12", color: "var(--iw-ivory)" }}>{d?.name}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--iw-parchment)" }}>{d?.dates}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--iw-stone)" }}>{d?.inc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0 12px", marginTop: "14px", paddingTop: "6px", borderTop: "1px solid var(--iw-line-strong)" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1", color: "var(--iw-gold)" }}>{d?.price}
                    </span>
                  </span>{" "}
                  <Link className="iw-hover-b iw-focus-1" to={d?.href} aria-label={d?.aria} style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "13px", fontWeight: "700", color: "var(--iw-gold-light)", textDecoration: "none", transition: "color .2s ease" }}>Ask about it
                  </Link>
                </div>
                <p style={{ margin: "0", fontSize: "12px", lineHeight: "1.5", color: "var(--iw-stone)" }}>{d?.hold}
                </p>
              </article>
            </Fragment>))}
          </div>
          <p style={{ margin: "28px 0 0", fontSize: "12px", lineHeight: "1.6", color: "var(--iw-stone)" }}>Sample open dates. The venues, dates and prices are illustrative. Photography: PTaufiq Photography.
          </p>
        </div>
      </section>
      <section id="vendors" data-screen-label="08 Vendors" aria-labelledby="vd-h" style={{ scrollMarginTop: "72px", padding: "clamp(64px,8vw,104px) 0", borderTop: "1px solid var(--iw-line)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1 1 440px", maxWidth: "640px" }}>
              <h2 id="vd-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,50px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "var(--iw-ivory)" }}>Find your people.
              </h2>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "var(--iw-sand)", textWrap: "pretty" }}>Venues, photographers, décor studios and caterers, chosen the way you’d choose them: by how their work makes you feel. Enquire, compare and book without leaving your plan.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px clamp(40px,6vw,96px)", marginTop: "clamp(56px,7vw,96px)" }}>
            <div role="tablist" aria-label="Vendor categories" aria-orientation="vertical" style={{ flex: "1 1 300px", maxWidth: "440px", borderTop: "1px solid var(--iw-line-strong)" }}>
              {arr(v.cats).map((c, $index) => (<Fragment key={$index}>
                <button className="iw-hover-b iw-focus-1" type="button" role="tab" aria-selected={c?.sel} aria-controls="vd-grid" onClick={c?.on} style={sx(`appearance:none;width:100%;display:flex;align-items:baseline;gap:18px;padding:18px 0;background:none;border:0;border-bottom:1px solid var(--iw-line-strong);text-align:left;cursor:pointer;color:${c?.color ?? ""};transition:color .25s ease`)}>
                  <span style={{ flex: "0 0 26px", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", color: "var(--iw-gold)" }}>{c?.no}
                  </span>{" "}
                  <span style={{ flex: "1", fontFamily: "'Marcellus',serif", fontSize: "clamp(28px,3.2vw,46px)", lineHeight: "1.1" }}>{c?.label}
                  </span>{" "}
                  <span aria-hidden="true" style={sx(`font-size:20px;color:var(--iw-gold);opacity:${c?.arrow ?? ""};transition:opacity .25s ease`)}>→
                  </span>
                </button>
              </Fragment>))}
              <p style={{ margin: "20px 0 0", fontSize: "12px", lineHeight: "1.6", color: "var(--iw-stone)" }}>Sample listings from the IndianWeddings prototype, shown with PTaufiq Photography images. The names are not real vendors.
              </p>
            </div>
            <div id="vd-grid" role="tabpanel" aria-label={v.catLabel} style={{ flex: "2 1 520px", minWidth: "0", display: "flex", alignItems: "flex-start", gap: "clamp(16px,2vw,24px)", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
              {arr(v.vendors).map((v, $index) => (<Fragment key={$index}>
                <Link className="iw-focus-h" to={v?.href} aria-label={v?.aria} style={sx(`flex:1 0 clamp(220px,31%,300px);min-width:0;display:block;margin-top:${v?.mt ?? ""};color:var(--iw-parchment);text-decoration:none;scroll-snap-align:start`)}>
                  <span style={{ display: "block", overflow: "hidden", aspectRatio: "4/5", background: "var(--iw-surface)" }}>
                    <img className="iw-hover-9" src={v?.img} alt={v?.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "18px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-stone)" }}>{v?.kind}
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "24px", lineHeight: "1.12", color: "var(--iw-ivory)" }}>{v?.name}
                  </span>{" "}
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginTop: "10px", paddingTop: "12px", borderTop: "1px solid var(--iw-line-strong)" }}>
                    <span style={{ fontSize: "15px", color: "var(--iw-sand)" }}>{v?.place}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--iw-gold-light)" }}>View profile
                    </span>
                  </span>
                </Link>
              </Fragment>))}
            </div>
          </div>
          <Link className="iw-hover-6 iw-focus-4" to={paths.vendors} style={{ display: "inline-flex", alignItems: "center", marginTop: "40px", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-ivory)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore every vendor
          </Link>
        </div>
      </section>
      <NoorCarousel />
      <section id="planning" data-screen-label="05 Your guests" aria-labelledby="ch3-h" style={{ scrollMarginTop: "72px", borderTop: "1px solid var(--iw-line)" }}>
        <article data-screen-label="06c Chapter 03" aria-labelledby="ch3-h" style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(64px,8vw,104px) clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 460px", maxWidth: "640px" }}>
              <h2 id="ch3-h" data-rv="up" data-rv-d="80" style={{ margin: "22px 0 0", maxWidth: "14em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,50px)", lineHeight: "1.1", color: "var(--iw-ivory)", textWrap: "balance" }}>From the save the date to the day itself
              </h2>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "var(--iw-sand)", textWrap: "pretty" }}>Start with a save the date in a design that is actually Indian. It becomes your wedding website, then the app your guests carry through every event: one link that grows with your wedding. Or hand Noor your list of events, and it builds the whole site, a page and a look for each one.
            </p>
          </div>
          <div data-rv="up" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "28px 48px", marginTop: "clamp(44px,5vw,64px)" }}>
            <div style={{ minWidth: "0" }}>
              <p style={{ margin: "0 0 12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Choose a design
              </p>
              <div role="group" aria-label="Save the date designs" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {arr(v.tpls).map((t, $index) => (<Fragment key={$index}>
                  <button className="iw-hover-f iw-focus-1" type="button" aria-pressed={t?.pressed} onClick={t?.on} style={sx(`appearance:none;display:flex;align-items:center;gap:12px;min-height:52px;padding:6px 16px 6px 6px;background:transparent;border:1px solid ${t?.bd ?? ""};border-radius:2px;cursor:pointer;text-align:left;transition:border-color .2s ease`)}>
                    <span aria-hidden="true" style={sx(`flex:0 0 38px;width:38px;height:38px;background:${t?.sw ?? ""}`)} />{" "}
                    <span>
                      <span style={sx(`display:block;font-family:'Nunito Sans',sans-serif;font-size:14px;font-weight:700;color:${t?.nc ?? ""}`)}>{t?.name}
                      </span>
                      <span style={{ display: "block", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", color: "var(--iw-stone)" }}>{t?.from}
                      </span>
                    </span>
                  </button>
                </Fragment>))}
              </div>
            </div>
            <div style={{ minWidth: "0" }}>
              <p style={{ margin: "0 0 12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-stone)" }}>Your photographs
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {arr(v.sdThumbs).map((p, $index) => (<Fragment key={$index}>
                  <button className="iw-focus-1" type="button" draggable="true" onDragStart={p?.drag} onClick={p?.on} aria-pressed={p?.pressed} aria-label={p?.aria} style={sx(`appearance:none;flex:0 0 52px;width:52px;height:64px;padding:0;border:0;background:var(--iw-surface);cursor:grab;outline:1px solid ${p?.bd ?? ""};outline-offset:2px`)}>
                    <img src={p?.src} alt="" loading="lazy" decoding="async" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                  </button>
                </Fragment>))}
              </div>
              <p style={{ margin: "10px 0 0", fontSize: "12px", lineHeight: "1.5", color: "var(--iw-stone)" }}>Drag one onto the save the date, or drop in your own.
              </p>
            </div>
          </div>
          <ol className="hm-steps" style={{ listStyle: "none", margin: "clamp(28px,3vw,40px) 0 0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))", alignItems: "start", gap: "clamp(40px,4vw,56px) clamp(16px,2vw,28px)" }}>
            <li data-rv="up" style={{ minWidth: "0", maxWidth: "440px", width: "100%", justifySelf: "start" }}>
              <div onDragEnter={v.sdOver} onDragOver={v.sdOver} onDragLeave={v.sdLeave} onDrop={v.sdDrop} role="img" aria-label={`Sample save the date for Ananya and Rohan in the ${v.tp?.name ?? ""} design`} style={sx(`aspect-ratio:3/4;border:${v.tp?.bw ?? ""} solid transparent;background:${v.tp?.frame ?? ""};color:${v.tp?.ink ?? ""};padding:22px;display:flex;flex-direction:column;align-items:center;text-align:center`)}>
                <span style={sx(`font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${v.tp?.soft ?? ""}`)}>Save the date
                </span>
                <div style={sx(`position:relative;flex:1 1 0;min-height:120px;width:74%;margin-top:14px;overflow:hidden;border-radius:${v.tp?.arch ?? ""};background:${v.tp?.rule ?? ""}`)}>
                  <img src={v.sdSrc} alt="" loading="lazy" decoding="async" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover" }} />{" "}
                  {v.sdOverOn ? (<>
                    <span style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(12,9,7,.55)", color: "var(--iw-ivory)", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", pointerEvents: "none" }}>Drop it here
                    </span>
                  </>) : null}
                </div>
                <span style={{ display: "block", marginTop: "16px", fontFamily: "'Marcellus',serif", fontSize: "clamp(24px,2.2vw,30px)", lineHeight: "1.08" }}>{"Ananya & Rohan"}
                </span>{" "}
                <span style={sx(`display:block;margin-top:8px;font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${v.tp?.accent ?? ""}`)}>12 · 13 · 14 February 2027
                </span>{" "}
                <span style={sx(`display:block;margin-top:6px;font-size:12px;color:${v.tp?.soft ?? ""}`)}>Jaipur · invitation to follow
                </span>
              </div>
              <p style={{ margin: "20px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "var(--iw-stone)" }}>01
              </p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "var(--iw-ivory)" }}>A save the date that looks like you
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--iw-sand)" }}>Designs drawn from Indian craft, not a stock wedding look. Drop in your photographs and send it tonight.
              </p>
            </li>
            <li data-rv="up" data-rv-d="80" style={{ minWidth: "0", maxWidth: "440px", width: "100%", justifySelf: "start" }}>
              <div role="img" aria-label={`Sample wedding website in the same ${v.tp?.name ?? ""} design, with four events and a reply button`} style={sx(`aspect-ratio:3/4;border:${v.tp?.bw ?? ""} solid transparent;background:${v.tp?.frame ?? ""};color:${v.tp?.ink ?? ""};padding:22px;display:flex;flex-direction:column`)}>
                <div style={sx(`display:flex;justify-content:space-between;gap:8px;padding-bottom:12px;border-bottom:1px solid ${v.tp?.rule ?? ""};font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${v.tp?.soft ?? ""}`)}>
                  <span>Events
                  </span>
                  <span>Travel
                  </span>
                  <span>Reply
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "16px" }}>
                  <div style={sx(`flex:0 0 56px;width:56px;height:70px;overflow:hidden;border-radius:${v.tp?.arch ?? ""};background:${v.tp?.rule ?? ""}`)}>
                    <img src={v.sdSrc} alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ minWidth: "0" }}>
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "24px", lineHeight: "1.08" }}>{"Ananya & Rohan"}
                    </span>
                    <span style={sx(`display:block;margin-top:6px;font-size:12px;color:${v.tp?.soft ?? ""}`)}>12 to 14 February · Jaipur
                    </span>
                  </div>
                </div>
                <div style={sx(`margin-top:14px;border-top:1px solid ${v.tp?.rule ?? ""}`)}>
                  <div style={sx(`display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid ${v.tp?.rule ?? ""}`)}>
                    <span style={{ fontSize: "14px" }}>Mehendi
                    </span>
                    <span style={sx(`font-size:12px;color:${v.tp?.soft ?? ""}`)}>Thu · something green
                    </span>
                  </div>
                  <div style={sx(`display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid ${v.tp?.rule ?? ""}`)}>
                    <span style={{ fontSize: "14px" }}>Sangeet
                    </span>
                    <span style={sx(`font-size:12px;color:${v.tp?.soft ?? ""}`)}>Fri · dress to dance
                    </span>
                  </div>
                  <div style={sx(`display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid ${v.tp?.rule ?? ""}`)}>
                    <span style={{ fontSize: "14px" }}>Wedding
                    </span>
                    <span style={sx(`font-size:12px;color:${v.tp?.soft ?? ""}`)}>Sat · traditional
                    </span>
                  </div>
                  <div style={sx(`display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid ${v.tp?.rule ?? ""}`)}>
                    <span style={{ fontSize: "14px" }}>Reception
                    </span>
                    <span style={sx(`font-size:12px;color:${v.tp?.soft ?? ""}`)}>Sun · black tie
                    </span>
                  </div>
                </div>
                <span style={sx(`display:flex;align-items:center;justify-content:center;min-height:42px;margin-top:auto;background:${v.tp?.btnBg ?? ""};color:${v.tp?.btnFg ?? ""};font-size:13px;font-weight:700;border-radius:2px`)}>Reply for your events
                </span>
              </div>
              <p style={{ margin: "20px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "var(--iw-stone)" }}>02
              </p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "var(--iw-ivory)" }}>It becomes your website
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--iw-sand)" }}>Schedule, dress notes, travel and stay in one link. Replies land in your guest list, event by event.
              </p>
            </li>
            <li data-rv="up" data-rv-d="160" style={{ minWidth: "0", maxWidth: "440px", width: "100%", justifySelf: "start" }}>
              <div aria-live="polite" role="group" aria-label="Sample guest app on the wedding morning" style={sx(`aspect-ratio:3/4;border:${v.tp?.bw ?? ""} solid transparent;background:${v.tp?.frame ?? ""};color:${v.tp?.ink ?? ""};padding:18px;display:flex;flex-direction:column`)}>
                <div style={sx(`display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding-bottom:12px;border-bottom:1px solid ${v.tp?.rule ?? ""}`)}>
                  <span style={{ fontFamily: "'Marcellus',serif", fontSize: "20px", lineHeight: "1.1" }}>{"Ananya & Rohan"}
                  </span>
                  <span style={sx(`font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${v.tp?.accent ?? ""}`)}>Wedding · today
                  </span>
                </div>
                <p style={sx(`margin:12px 0 2px;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:${v.tp?.soft ?? ""}`)}>Alerts
                </p>
                {arr(v.dayAlerts).map((a, $index) => (<Fragment key={$index}>
                  <div style={sx(`display:flex;gap:12px;padding:9px 0;border-bottom:1px solid ${v.tp?.rule ?? ""}`)}>
                    <span style={sx(`flex:0 0 40px;font-size:12px;font-weight:700;color:${a?.tc ?? ""};font-variant-numeric:tabular-nums`)}>{a?.t}
                    </span>
                    <span style={sx(`font-size:13px;line-height:1.45;font-weight:${a?.wt ?? ""}`)}>{a?.m}
                    </span>
                  </div>
                </Fragment>))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px", marginTop: "auto", paddingTop: "14px" }}>
                  <span style={sx(`font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:${v.tp?.soft ?? ""}`)}>Everyone’s photographs
                  </span>
                  <span style={sx(`font-size:11px;color:${v.tp?.soft ?? ""}`)}>1,284 from 96 guests
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "4px", marginTop: "8px" }}>
                  {arr(v.dayPhotos).map((p, $index) => (<Fragment key={$index}>
                    <img src={p?.src} alt="" loading="lazy" decoding="async" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
                  </Fragment>))}
                </div>
              </div>
              <p style={{ margin: "20px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "var(--iw-stone)" }}>03
              </p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "var(--iw-ivory)" }}>Then the app on the day
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--iw-sand)" }}>Send an alert to every guest at once. Every photograph they take collects in one album, sorted by event.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px", marginTop: "18px" }}>
                <button className="iw-hover-c iw-focus-a" type="button" onClick={v.sendAlert} style={{ appearance: "none", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", background: "transparent", border: "1px solid var(--iw-gold)", borderRadius: "2px", color: "var(--iw-ivory)", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>{v.sendLabel}
                </button>{" "}
                {v.sendHasNote ? (<>
                  <span style={{ fontSize: "12px", lineHeight: "1.5", color: "var(--iw-stone)" }}>{v.sendNote}
                  </span>
                </>) : null}
              </div>
            </li>
          </ol>
        </article>
      </section>
      <section id="real-weddings" data-screen-label="09 Real weddings" aria-labelledby="rw-h" style={{ scrollMarginTop: "72px", padding: "clamp(64px,8vw,104px) 0", borderTop: "1px solid var(--iw-line)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1 1 440px", maxWidth: "680px" }}>
              <h2 id="rw-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3.4vw,50px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "var(--iw-ivory)", textWrap: "balance" }}>Weddings that began here.
              </h2>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "var(--iw-sand)", textWrap: "pretty" }}>Every wedding planned here keeps its story: the celebrations, the people who made them, and what the couple would tell you now.
            </p>
          </div>
          <div id="rw-panel" role="tabpanel" aria-labelledby={v.rwLabelledBy} style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "40px clamp(40px,5vw,80px)", marginTop: "clamp(56px,7vw,88px)" }}>
            <div style={{ flex: "1.15 1 440px", minWidth: "0", display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr) minmax(0,1fr)", gap: "4px", minHeight: "clamp(420px,44vw,600px)" }}>
              <div style={{ gridRow: "1 / 3", overflow: "hidden", background: "var(--iw-surface)" }}>
                <img src={v.rw?.img} alt={v.rw?.alt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ overflow: "hidden", background: "var(--iw-surface)" }}>
                <img src={v.rw?.a} alt={v.rw?.aAlt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ overflow: "hidden", background: "var(--iw-surface)" }}>
                <img src={v.rw?.b} alt={v.rw?.bAlt} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--iw-stone)" }}>{v.rw?.meta}
              </p>
              <h3 style={{ margin: "14px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,3.4vw,52px)", lineHeight: "1.06", color: "var(--iw-ivory)" }}>{v.rw?.names}
              </h3>
              <blockquote style={{ margin: "26px 0 0", padding: "0" }}>
                <p style={{ margin: "0", fontFamily: "'Marcellus',serif", fontSize: "clamp(21px,1.8vw,26px)", lineHeight: "1.38", color: "var(--iw-parchment)", textWrap: "pretty" }}>{"“"}{v.rw?.quote}{"”"}
                </p>
                <footer style={{ marginTop: "12px", fontSize: "13px", color: "var(--iw-stone)" }}>{v.rw?.by}
                </footer>
              </blockquote>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "30px", borderTop: "1px solid var(--iw-line-strong)" }}>
                {arr(v.rwFacts).map((f, $index) => (<Fragment key={$index}>
                  <div style={{ flex: "1 1 110px", minWidth: "0", padding: "16px 16px 0 0" }}>
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "var(--iw-ivory)" }}>{f?.n}
                    </span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "12px", lineHeight: "1.45", color: "var(--iw-stone)" }}>{f?.l}
                    </span>
                  </div>
                </Fragment>))}
              </div>
              <div style={{ marginTop: "28px", borderTop: "1px solid var(--iw-line-strong)" }}>
                {arr(v.rwTeam).map((m, $index) => (<Fragment key={$index}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "4px 24px", padding: "12px 0", borderBottom: "1px solid var(--iw-line)" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--iw-stone)" }}>{m?.k}
                    </span>
                    <span style={{ fontSize: "15px", color: "var(--iw-parchment)" }}>{m?.v}
                    </span>
                  </div>
                </Fragment>))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0 32px", alignSelf: "flex-start" }}>
                <Link className="iw-hover-i iw-focus-a" to={v.rwHref} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", marginTop: "28px", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-gold)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease" }}>Read their wedding
                </Link>
                <Link className="iw-hover-i iw-focus-a" to={paths.realWeddings} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", marginTop: "28px", padding: "15px 0 8px", borderBottom: "1px solid var(--iw-gold)", color: "var(--iw-ivory)", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease" }}>All stories
                </Link>
              </div>
            </div>
          </div>
          <div role="tablist" aria-label="Real weddings" style={{ display: "flex", flexWrap: "wrap", gap: "0 clamp(16px,2vw,28px)", marginTop: "clamp(40px,5vw,64px)", borderTop: "1px solid var(--iw-line-strong)" }}>
            {arr(v.rwTabs).map((t, $index) => (<Fragment key={$index}>
              <button className="iw-focus-1" type="button" role="tab" id={t?.tid} aria-selected={t?.sel} aria-controls="rw-panel" onClick={t?.on} style={sx(`appearance:none;flex:1 1 220px;display:flex;align-items:center;gap:14px;margin-top:-1px;padding:16px 0;background:none;border:0;border-top:1px solid ${t?.line ?? ""};text-align:left;cursor:pointer;transition:border-color .25s ease`)}>
                <img src={t?.img} alt="" loading="lazy" decoding="async" style={{ flex: "0 0 48px", width: "48px", height: "60px", objectFit: "cover" }} />{" "}
                <span style={{ minWidth: "0" }}>
                  <span style={sx(`display:block;font-family:'Marcellus',serif;font-size:21px;line-height:1.15;color:${t?.nc ?? ""};transition:color .25s ease`)}>{t?.names}
                  </span>
                  <span style={{ display: "block", marginTop: "4px", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", color: "var(--iw-stone)" }}>{t?.place}
                  </span>
                </span>
              </button>
            </Fragment>))}
          </div>
          <p style={{ margin: "24px 0 0", fontSize: "12px", lineHeight: "1.6", color: "var(--iw-stone)" }}>Illustrative couples and quotes, shown with PTaufiq Photography images. Real couples will be featured with their permission.
          </p>
        </div>
      </section>
      <section data-screen-label="11 Invitation" aria-labelledby="end-h" style={{ position: "relative", minHeight: "min(72svh,660px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--iw-ink)", color: "var(--iw-ivory)" }}>
        <div data-rv="mask" aria-hidden="true" style={{ position: "absolute", inset: "0" }}>
          <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/wedding-couple-sunset-ptaufiq-photography.jpg" alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 35%" }} />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(12,9,7,.8) 0%,rgba(12,9,7,.42) 46%,rgba(12,9,7,.08) 100%)" }} />
        </div>
        <div style={{ position: "relative", width: "100%", maxWidth: "1320px", margin: "0 auto", padding: "clamp(120px,16vh,180px) clamp(20px,4vw,56px) clamp(64px,10vh,112px)" }}>
          <h2 id="end-h" data-rv="up" style={{ margin: "0", maxWidth: "11em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,4.4vw,68px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "var(--iw-ivory)", textWrap: "balance" }}>Make room for the moments you’ll remember.
          </h2>
          <p data-rv="up" data-rv-d="100" style={{ margin: "28px 0 0", maxWidth: "30em", fontSize: "clamp(16px,1.25vw,19px)", lineHeight: "1.6", color: "var(--iw-parchment)", textWrap: "pretty" }}>Bring your plans, your people and your taste into one place, with Noor beside you, and spend more of your wedding actually in it.
          </p>
          <div data-rv="up" data-rv-d="180" style={{ marginTop: "36px" }}>
            <Link className="iw-hover-2 iw-active-3 iw-focus-4" to={BEGIN} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 34px", background: "var(--iw-ivory)", color: "var(--iw-on-ivory)", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Begin planning
            </Link>
          </div>
        </div>
        <p style={{ position: "absolute", right: "clamp(20px,4vw,56px)", bottom: "20px", margin: "0", fontSize: "12px", color: "var(--iw-sand)" }}>Photography: PTaufiq Photography
        </p>
      </section>
    </div>
    </>
  );
}
