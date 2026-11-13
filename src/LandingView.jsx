// Markup for the IndianWeddings landing page, converted from the Claude Design
// template (IndianWeddings Premium Landing Page V5). Every value comes from
// LandingLogic.renderVals() as `v`; behaviour lives in landingLogic.js.
import { Fragment } from 'react';
import { arr, sx } from './dc';

export default function LandingView({ v }) {
  return (
    <>
    <div ref={v.rootRef} style={{ position: "relative", zIndex: "0", background: "#0C0907", color: "#EDE3D3", minHeight: "100vh", overflowX: "clip" }}>
      <canvas ref={v.skyRef} aria-hidden="true" style={sx(`position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;pointer-events:none;display:${v.skyDisp ?? ""}`)} />
      <canvas ref={v.sparkRef} aria-hidden="true" style={sx(`position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:40;pointer-events:none;mix-blend-mode:screen;display:${v.sparkDisp ?? ""}`)} />
      <header style={sx(`position:fixed;top:0;left:0;right:0;z-index:50;background:${v.navBg ?? ""};border-bottom:1px solid ${v.navLine ?? ""};backdrop-filter:${v.navBlur ?? ""};-webkit-backdrop-filter:${v.navBlur ?? ""};transition:background-color .35s ease,border-color .35s ease`)}>
        <nav aria-label="Primary" style={{ maxWidth: "1320px", margin: "0 auto", height: "72px", padding: "0 clamp(20px,4vw,56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <a href="#top" aria-label="IndianWeddings, back to top" style={{ display: "flex", fontFamily: "'Marcellus',serif", fontSize: "19px", letterSpacing: ".08em", lineHeight: "1", color: "#F4EEE4", textDecoration: "none" }}>INDIAN
            <span style={{ color: "#C9A96E" }}>WEDDINGS
            </span>
          </a>{" "}
          {v.navWide ? (<>
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(18px,2.2vw,36px)" }}>
              <a className="iw-hover-0 iw-focus-1" href="#open-dates" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "14px", fontWeight: "600", letterSpacing: ".02em", color: "#EDE3D3", textDecoration: "none", whiteSpace: "nowrap", transition: "color .2s ease" }}>Open dates
              </a>{" "}
              <a className="iw-hover-0 iw-focus-1" href="#advisor" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "14px", fontWeight: "600", letterSpacing: ".02em", color: "#EDE3D3", textDecoration: "none", whiteSpace: "nowrap", transition: "color .2s ease" }}>{v.advNav}
              </a>{" "}
              <a className="iw-hover-0 iw-focus-1" href="#planning" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "14px", fontWeight: "600", letterSpacing: ".02em", color: "#EDE3D3", textDecoration: "none", whiteSpace: "nowrap", transition: "color .2s ease" }}>Planning
              </a>{" "}
              <a className="iw-hover-0 iw-focus-1" href="#real-weddings" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "14px", fontWeight: "600", letterSpacing: ".02em", color: "#EDE3D3", textDecoration: "none", whiteSpace: "nowrap", transition: "color .2s ease" }}>Real weddings
              </a>{" "}
              <a className="iw-hover-0 iw-focus-1" href="#vendors" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "14px", fontWeight: "600", letterSpacing: ".02em", color: "#EDE3D3", textDecoration: "none", whiteSpace: "nowrap", transition: "color .2s ease" }}>Vendors
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <a className="iw-hover-0 iw-focus-1" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "14px", fontWeight: "600", color: "#EDE3D3", textDecoration: "none", transition: "color .2s ease" }}>Sign in
              </a>{" "}
              <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "44px", padding: "0 22px", background: "#F4EEE4", color: "#1E1915", fontSize: "14px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
              </a>
            </div>
          </>) : null}{" "}
          {v.navNarrow ? (<>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <a className="iw-hover-2 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", background: "#F4EEE4", color: "#1E1915", fontSize: "14px", fontWeight: "700", textDecoration: "none", borderRadius: "2px" }}>Start planning
              </a>{" "}
              <button className="iw-focus-1" type="button" onClick={v.toggleMenu} aria-expanded={v.menuExpanded} aria-controls="mobile-menu" style={{ appearance: "none", minWidth: "64px", minHeight: "44px", padding: "0 10px", background: "transparent", border: "1px solid rgba(244,238,228,.4)", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>{v.menuLabel}
              </button>
            </div>
          </>) : null}
        </nav>
        {v.menuOpen ? (<>
          <div id="mobile-menu" style={{ background: "#0C0907", borderTop: "1px solid #241C17", padding: "8px clamp(20px,4vw,56px) 28px" }}>
            <a href="#open-dates" onClick={v.closeMenu} style={{ display: "flex", alignItems: "center", minHeight: "60px", borderBottom: "1px solid #241C17", fontFamily: "'Marcellus',serif", fontSize: "26px", color: "#F4EEE4", textDecoration: "none" }}>Open dates
            </a>{" "}
            <a href="#advisor" onClick={v.closeMenu} style={{ display: "flex", alignItems: "center", minHeight: "60px", borderBottom: "1px solid #241C17", fontFamily: "'Marcellus',serif", fontSize: "26px", color: "#F4EEE4", textDecoration: "none" }}>{v.advNav}
            </a>{" "}
            <a href="#planning" onClick={v.closeMenu} style={{ display: "flex", alignItems: "center", minHeight: "60px", borderBottom: "1px solid #241C17", fontFamily: "'Marcellus',serif", fontSize: "26px", color: "#F4EEE4", textDecoration: "none" }}>Planning
            </a>{" "}
            <a href="#real-weddings" onClick={v.closeMenu} style={{ display: "flex", alignItems: "center", minHeight: "60px", borderBottom: "1px solid #241C17", fontFamily: "'Marcellus',serif", fontSize: "26px", color: "#F4EEE4", textDecoration: "none" }}>Real weddings
            </a>{" "}
            <a href="#vendors" onClick={v.closeMenu} style={{ display: "flex", alignItems: "center", minHeight: "60px", borderBottom: "1px solid #241C17", fontFamily: "'Marcellus',serif", fontSize: "26px", color: "#F4EEE4", textDecoration: "none" }}>Vendors
            </a>{" "}
            <a href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "flex", alignItems: "center", minHeight: "56px", fontSize: "15px", fontWeight: "600", color: "#C5BAB0", textDecoration: "none" }}>Sign in
            </a>
          </div>
        </>) : null}
      </header>
      {v.showSwitcher ? (<>
        <nav aria-label="Hero options for presenting" onMouseEnter={v.swEnter} onMouseLeave={v.swLeave} onFocus={v.swEnter} onBlur={v.swBlur} style={{ position: "fixed", left: "50%", bottom: "18px", transform: "translateX(-50%)", zIndex: "60", display: "flex", alignItems: "center", gap: "2px", padding: "4px", background: "rgba(12,9,7,.9)", border: "1px solid #3E3229", borderRadius: "3px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maxWidth: "calc(100vw - 24px)", overflowX: "auto", scrollbarWidth: "none" }}>
          <span style={{ padding: "0 6px 0 8px", fontSize: "10px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289", whiteSpace: "nowrap" }}>Hero
          </span>{" "}
          <button className="iw-hover-0 iw-focus-5" type="button" onClick={v.swPrev} aria-label="Previous hero" style={{ minWidth: "40px", minHeight: "40px", padding: "0", background: "transparent", border: "0", borderRadius: "2px", color: "#EDE3D3", fontFamily: "'Nunito Sans',sans-serif", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>‹
          </button>{" "}
          {v.swClosed ? (<>
            <button className="iw-focus-5" type="button" onClick={v.swEnter} style={{ minHeight: "40px", padding: "0 12px", background: "transparent", border: "0", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap", cursor: "pointer" }}>{v.swCur}
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
          <button className="iw-hover-0 iw-focus-5" type="button" onClick={v.swNext} aria-label="Next hero" style={{ minWidth: "40px", minHeight: "40px", padding: "0", background: "transparent", border: "0", borderRadius: "2px", color: "#EDE3D3", fontFamily: "'Nunito Sans',sans-serif", fontSize: "18px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>›
          </button>
        </nav>
      </>) : null}{" "}
      {v.heroCine ? (<>
        <section id="top" data-screen-label="01 Hero" aria-labelledby="hero-h" style={{ position: "relative", height: "100svh", minHeight: "640px", maxHeight: "1040px", overflow: "hidden", background: "transparent", color: "#F4EEE4", display: "flex", alignItems: "flex-end" }}>
          <div ref={v.heroFrameRef} style={{ position: "absolute", inset: "0", overflow: "hidden", WebkitMaskImage: "linear-gradient(180deg,#000 58%,transparent 100%)", maskImage: "linear-gradient(180deg,#000 58%,transparent 100%)" }}>
            <div ref={v.heroParRef} style={{ position: "absolute", top: "-6%", bottom: "-6%", left: "0", right: "0", willChange: "transform" }}>
              <img data-slide="2" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-destination-wedding-couple-portrait-ptaufiq.jpg" alt="A couple’s portrait at a destination wedding" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 40%;opacity:${v.slideOp2 ?? ""};transition:opacity 1.6s ease`)} />{" "}
              <img data-slide="1" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-iceland-destination-engagement.jpg" alt="A couple at their destination engagement shoot in Iceland" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 45%;opacity:${v.slideOp1 ?? ""};transition:opacity 1.6s ease`)} />{" "}
              <img data-slide="0" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-jaisalmer-india-destination-engagement-scaled.jpg" alt="A couple at their engagement shoot in Jaisalmer" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 45%;opacity:${v.slideOp0 ?? ""};transition:opacity 1.6s ease`)} />
            </div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(12,9,7,.5) 0%,rgba(12,9,7,0) 20%,rgba(12,9,7,0) 42%,rgba(12,9,7,.82) 100%)" }} />
          </div>
          <div style={{ position: "relative", width: "100%", maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px) clamp(36px,6vh,64px)" }}>
            <p data-hero="320" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
            </p>
            <h1 id="hero-h" style={{ margin: "22px 0 0", maxWidth: "13em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(42px,6vw,98px)", lineHeight: "1.02", letterSpacing: "-.012em", color: "#F4EEE4" }}>
              <span data-hero="400" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
              </span>{" "}
              <span data-hero="520" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
              </span>
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 48px", marginTop: "30px" }}>
              <div style={{ flex: "1 1 420px", maxWidth: "640px" }}>
                <p data-hero="620" style={{ margin: "0", maxWidth: "30em", fontSize: "clamp(16px,1.25vw,19px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="720" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 30px", marginTop: "30px" }}>
                  <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "54px", padding: "0 30px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
                  </a>{" "}
                  <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </a>
                </div>
              </div>
              <div data-hero="820" style={sx(`display:${v.slideCtlDisp ?? ""};align-items:center;gap:18px`)}>
                <span aria-live="polite" style={{ whiteSpace: "nowrap", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#EDE3D3", fontVariantNumeric: "tabular-nums" }}>{v.slideNo}{" / 03"}
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  {arr(v.segs).map((g, $index) => (<Fragment key={$index}>
                    <button className="iw-focus-7" type="button" onClick={g?.on} aria-label={g?.aria} aria-pressed={g?.pressed} style={{ appearance: "none", width: "40px", height: "44px", padding: "0", background: "transparent", border: "0", cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <span style={sx(`display:block;width:100%;height:2px;background:${g?.bg ?? ""};transition:background-color .4s ease`)} />
                    </button>
                  </Fragment>))}
                </div>
                <button className="iw-hover-8 iw-focus-7" type="button" onClick={v.togglePause} aria-label={v.pauseAria} style={{ appearance: "none", minWidth: "64px", minHeight: "44px", padding: "0 12px", background: "transparent", border: "1px solid rgba(244,238,228,.4)", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "13px", fontWeight: "600", cursor: "pointer", transition: "border-color .2s ease" }}>{v.pauseLabel}
                </button>
              </div>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroMosaic ? (<>
        <section id="top" data-screen-label="01 Hero · Mosaic" aria-labelledby="hero-h" style={{ position: "relative", background: "transparent", color: "#F4EEE4", padding: "88px clamp(20px,4vw,56px) clamp(20px,3vh,32px)" }}>
          {v.wide ? (<>
            <div style={{ maxWidth: "1320px", margin: "0 auto", height: "calc(min(100svh, 1040px) - 88px - clamp(20px,3vh,32px))", minHeight: "560px", display: "grid", gridTemplateColumns: "repeat(12,minmax(0,1fr))", gridTemplateRows: "repeat(6,minmax(0,1fr))", gap: "4px" }}>
              <div style={{ gridColumn: "1 / 6", gridRow: "1 / 5", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 clamp(16px,2.4vw,40px) clamp(12px,2vw,24px) 0", minWidth: "0" }}>
                <p data-hero="80" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
                </p>
                <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,3.4vw,60px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "#F4EEE4" }}>
                  <span data-hero="160" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                  </span>
                  <span data-hero="280" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                  </span>
                </h1>
                <p data-hero="380" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.1vw,17px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="460" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "14px 28px", marginTop: "26px" }}>
                  <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
                  </a>
                  <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </a>
                </div>
              </div>
              <figure data-hero="220" style={{ gridColumn: "6 / 10", gridRow: "1 / 5", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411", minHeight: "0" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg" alt="A bride making her entrance" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>The entrance
                </figcaption>
              </figure>
              <div data-hero="320" style={{ gridColumn: "10 / 13", gridRow: "1 / 3", background: "#1A1411", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Run sheet · sample
                </span>
                <span>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.2vw,48px)", lineHeight: "1", color: "#C9A96E" }}>20:30
                  </span>
                  <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "#EDE3D3" }}>Your entrance
                  </span>
                  <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "#9C9289" }}>Sangeet, Friday · the lawns
                  </span>
                </span>
              </div>
              <figure data-hero="400" style={{ gridColumn: "10 / 13", gridRow: "3 / 7", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411", minHeight: "0" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg" alt="A mehendi celebration" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Mehendi
                </figcaption>
              </figure>
              <div data-hero="360" style={{ gridColumn: "1 / 4", gridRow: "5 / 7", background: "#1A1411", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Budget · sample
                </span>
                <span>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(26px,2.4vw,34px)", lineHeight: "1", color: "#F4EEE4" }}>₹41.2L
                  </span>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "12px", color: "#9C9289" }}>committed of ₹85L
                  </span>
                  <span style={{ display: "block", position: "relative", height: "3px", marginTop: "12px", background: "#3E3229" }}>
                    <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "48%", background: "#C9A96E" }} />
                  </span>
                </span>
              </div>
              <figure data-hero="440" style={{ gridColumn: "4 / 6", gridRow: "5 / 7", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411", minHeight: "0" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg" alt="A mandap dressed for the ceremony" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>The mandap
                </figcaption>
              </figure>
              <div data-hero="500" style={{ gridColumn: "6 / 8", gridRow: "5 / 7", background: "#1A1411", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Replies · sample
                </span>
                <span>
                  <span style={{ display: "block", fontSize: "15px", lineHeight: "1.35", color: "#EDE3D3" }}>The Kapoors, London
                  </span>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#9C9289" }}>Attending 3 of 4 celebrations
                  </span>
                  <span style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                    <span style={{ flex: "1", height: "3px", background: "#C5BAB0" }} />
                    <span style={{ flex: "1", height: "3px", background: "#C5BAB0" }} />
                    <span style={{ flex: "1", height: "3px", background: "#C5BAB0" }} />
                    <span style={{ flex: "1", height: "3px", background: "#3E3229" }} />
                  </span>
                </span>
              </div>
              <div data-hero="560" style={{ gridColumn: "8 / 10", gridRow: "5 / 7", background: "#1A1411", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Vendors · sample
                </span>
                <span>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ flex: "0 0 7px", height: "7px", marginTop: "6px", borderRadius: "50%", background: "#6FAE93" }} />
                    <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#EDE3D3" }}>Vermilion Films sent a revised quote
                    </span>
                  </span>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "12px", lineHeight: "1.45", color: "#9C9289" }}>A second shooter for the sangeet
                  </span>
                </span>
              </div>
            </div>
          </>) : null}{" "}
          {v.narrow ? (<>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", paddingTop: "16px" }}>
              <div>
                <p data-hero="80" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
                </p>
                <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,9vw,52px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "#F4EEE4" }}>
                  <span data-hero="160" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                  </span>
                  <span data-hero="280" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                  </span>
                </h1>
                <p data-hero="380" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="460" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "14px 28px", marginTop: "26px" }}>
                  <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
                  </a>
                  <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </a>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "4px" }}>
                <figure data-hero="220" style={{ aspectRatio: "3 / 4", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411", minHeight: "0" }}>
                  <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg" alt="A bride making her entrance" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                  <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>The entrance
                  </figcaption>
                </figure>
                <div data-hero="300" style={{ aspectRatio: "3 / 4", background: "#1A1411", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Run sheet · sample
                  </span>
                  <span>
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.2vw,48px)", lineHeight: "1", color: "#C9A96E" }}>20:30
                    </span>
                    <span style={{ display: "block", marginTop: "8px", fontSize: "15px", color: "#EDE3D3" }}>Your entrance
                    </span>
                    <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "#9C9289" }}>Sangeet, Friday · the lawns
                    </span>
                  </span>
                </div>
                <div data-hero="360" style={{ aspectRatio: "3 / 4", background: "#1A1411", padding: "clamp(14px,1.4vw,20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0", minHeight: "0", overflow: "hidden" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Replies · sample
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: "1.35", color: "#EDE3D3" }}>The Kapoors, London
                    </span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#9C9289" }}>Attending 3 of 4 celebrations
                    </span>
                    <span style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                      <span style={{ flex: "1", height: "3px", background: "#C5BAB0" }} />
                      <span style={{ flex: "1", height: "3px", background: "#C5BAB0" }} />
                      <span style={{ flex: "1", height: "3px", background: "#C5BAB0" }} />
                      <span style={{ flex: "1", height: "3px", background: "#3E3229" }} />
                    </span>
                  </span>
                </div>
                <figure data-hero="420" style={{ aspectRatio: "3 / 4", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411", minHeight: "0" }}>
                  <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg" alt="A mehendi celebration" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.6) 0%,rgba(12,9,7,0) 40%)", pointerEvents: "none" }} />
                  <figcaption style={{ position: "absolute", left: "14px", bottom: "12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Mehendi
                  </figcaption>
                </figure>
              </div>
            </div>
          </>) : null}
        </section>
      </>) : null}{" "}
      {v.heroOrbit ? (<>
        <section id="top" ref={v.orbitRef} data-screen-label="01 Hero · Orbit" aria-labelledby="hero-h" style={{ position: "relative", height: "100svh", minHeight: "680px", maxHeight: "1040px", overflow: "hidden", background: "transparent", color: "#F4EEE4" }}>
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
                <span style={sx(`position:relative;display:block;width:100%;height:100%;border-radius:50%;border:1px solid rgba(232,209,154,.5);background:#1A1411 center / cover no-repeat;background-image:${o?.bg ?? ""}`)} />
                <figcaption style={sx(`display:${v.orbitCapDisp ?? ""};position:absolute;left:calc(100% + 14px);top:50%;transform:translateY(-50%);white-space:nowrap`)}>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "19px", lineHeight: "1.1", color: "#F4EEE4" }}>{o?.n}
                  </span>
                  <span style={{ display: "block", marginTop: "4px", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#C5BAB0" }}>{o?.d}
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
              <p data-hero="200" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
              </p>
              <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,3.8vw,62px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "#F4EEE4" }}>
                <span data-hero="280" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                </span>
                <span data-hero="400" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                </span>
              </h1>
              <p data-hero="500" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty", marginLeft: "auto", marginRight: "auto" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
              </p>
              <div data-hero="600" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 28px", marginTop: "26px" }}>
                <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
                </a>
                <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                </a>
              </div>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroSeam ? (<>
        <section id="top" ref={v.seamRef} data-screen-label="01 Hero · Seam" aria-labelledby="hero-h" onPointerDown={v.seamDown} onPointerMove={v.seamMove} onPointerUp={v.seamUp} onPointerCancel={v.seamUp} style={{ "--seam": "54%", position: "relative", height: "100svh", minHeight: "660px", maxHeight: "1040px", overflow: "hidden", background: "transparent", color: "#F4EEE4", touchAction: "pan-y" }}>
          <div style={{ position: "absolute", inset: "0", background: "rgba(12,9,7,.84)" }}>
            <div style={sx(`position:absolute;top:0;bottom:0;right:0;width:${v.seamPlanW ?? ""};padding:${v.seamPlanPad ?? ""};display:flex;flex-direction:column;justify-content:${v.seamPlanJust ?? ""}`)}>
              <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Sangeet · Friday 12 February · sample plan
              </p>
              <p style={sx(`margin:12px 0 0;font-family:'Marcellus',serif;font-size:${v.seamTimeSz ?? ""};line-height:.92;color:#C9A96E`)}>20:30
              </p>
              <p style={{ margin: "12px 0 0", fontFamily: "'Marcellus',serif", fontSize: "clamp(22px,2.3vw,34px)", lineHeight: "1.1", color: "#F4EEE4" }}>Your entrance
              </p>
              <div style={sx(`display:${v.seamRowsDisp ?? ""};margin-top:22px;border-top:1px solid #3E3229`)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid #241C17" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#9C9289", whiteSpace: "nowrap" }}>On stage
                  </span>
                  <span style={{ fontSize: "14px", color: "#EDE3D3", textAlign: "right" }}>Studio Haveli, three songs
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid #241C17" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#9C9289", whiteSpace: "nowrap" }}>At the gate
                  </span>
                  <span style={{ fontSize: "14px", color: "#EDE3D3", textAlign: "right" }}>Vermilion Films, second shooter
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid #241C17" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#9C9289", whiteSpace: "nowrap" }}>Lighting
                  </span>
                  <span style={{ fontSize: "14px", color: "#EDE3D3", textAlign: "right" }}>Warm, on the first beat
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid #241C17" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#9C9289", whiteSpace: "nowrap" }}>Guests
                  </span>
                  <span style={{ fontSize: "14px", color: "#EDE3D3", textAlign: "right" }}>240 seated by 20:15
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", inset: "0", clipPath: "inset(0 calc(100% - var(--seam)) 0 0)" }}>
            <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg" alt="A bride making her entrance" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%" }} />
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(12,9,7,.45) 0%,rgba(12,9,7,0) 22%,rgba(12,9,7,0) 44%,rgba(12,9,7,.82) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "100px", left: "var(--seam)", transform: "translateX(calc(-100% - 18px))", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4", whiteSpace: "nowrap", pointerEvents: "none" }}>The moment
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "100px", left: "var(--seam)", transform: "translateX(18px)", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E", whiteSpace: "nowrap", pointerEvents: "none" }}>Everything behind it
          </div>
          <div style={{ position: "absolute", top: "0", bottom: "0", left: "var(--seam)", width: "1px", background: "rgba(244,238,228,.75)" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "0", bottom: "0", left: "-24px", width: "48px", cursor: "ew-resize" }} />
            <button className="iw-focus-a" type="button" data-seam="" ref={v.seamHandleRef} role="slider" aria-label="Slide between the moment and the plan behind it" aria-valuemin="4" aria-valuemax="96" aria-valuenow="54" onKeyDown={v.seamKey} style={{ position: "absolute", top: "50%", left: "0", transform: "translate(-50%,-50%)", width: "56px", height: "56px", borderRadius: "50%", background: "#F4EEE4", color: "#1E1915", border: "0", cursor: "ew-resize", fontFamily: "'Nunito Sans',sans-serif", fontSize: "18px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span aria-hidden="true">‹
              </span>
              <span aria-hidden="true">›
              </span>
            </button>
          </div>
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "0 clamp(20px,4vw,56px) clamp(36px,6vh,64px)", pointerEvents: "none" }}>
            <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
              <div style={sx(`width:${v.seamCopyW ?? ""};max-width:620px;pointer-events:auto`)}>
                <p data-hero="300" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
                </p>
                <h1 id="hero-h" style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,76px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "#F4EEE4" }}>
                  <span data-hero="380" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
                  </span>
                  <span data-hero="500" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
                  </span>
                </h1>
                <p data-hero="600" style={{ margin: "22px 0 0", maxWidth: "30em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="700" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "14px 28px", marginTop: "26px" }}>
                  <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
                  </a>
                  <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroArch ? (<>
        <section id="top" ref={v.archSecRef} data-screen-label="01 Hero · Arch" aria-labelledby="hero-h" style={sx(`position:relative;height:${v.archSecH ?? ""};color:#F4EEE4`)}>
          <div style={sx(`position:${v.archPos ?? ""};top:0;height:${v.archInnerH ?? ""};min-height:min(100svh, 1040px);padding:104px clamp(24px,5vw,72px) ${v.archPadB ?? ""};display:flex;align-items:center;justify-content:center;overflow:hidden`)}>
            <span aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "radial-gradient(42% 56% at 24% 42%, rgba(201,169,110,.08) 0%, rgba(201,169,110,0) 70%), linear-gradient(180deg, rgba(12,9,7,0) 60%, rgba(12,9,7,.55) 100%)" }} />
            <div style={sx(`position:relative;width:100%;max-width:1160px;display:grid;grid-template-columns:${v.archCols ?? ""};justify-content:center;align-items:center;gap:${v.archGap ?? ""}`)}>
              <div style={sx(`position:relative;z-index:2;min-width:0;max-width:${v.archTextW ?? ""};justify-self:${v.archJs ?? ""};text-align:${v.archTA ?? ""}`)}>
                <p data-hero="200" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".18em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
                </p>
                <h1 id="hero-h" style={{ margin: "26px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,3.6vw,58px)", lineHeight: "1.12", letterSpacing: "-.005em", color: "#F4EEE4", textWrap: "balance" }}>
                  <span data-hero="420" style={{ display: "block" }}>A wedding that feels like you.
                  </span>{" "}
                  <span data-hero="540" style={{ display: "block", color: "#CFC3B4" }}>A plan that holds it all.
                  </span>
                </h1>
                <span data-hero="600" aria-hidden="true" style={sx(`display:block;width:48px;height:1px;margin:30px ${v.archRuleM ?? ""} 0;background:#C9A96E`)} />
                <p data-hero="660" style={sx(`margin:26px ${v.archRuleM ?? ""} 0;max-width:26em;font-size:16px;line-height:1.7;color:#EDE3D3;text-wrap:pretty`)}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
                </p>
                <div data-hero="760" style={sx(`display:flex;flex-wrap:wrap;align-items:center;justify-content:${v.archJs ?? ""};gap:14px 28px;margin-top:34px`)}>
                  <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
                  </a>
                  <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
                  </a>
                </div>
              </div>
              <figure style={sx(`position:relative;z-index:1;margin:0;justify-self:center;width:${v.archW ?? ""}`)}>
                <span ref={v.archAuraRef} aria-hidden="true" style={{ position: "absolute", left: "50%", top: "44%", width: "280%", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(204,138,78,.34) 0%, rgba(160,98,52,.16) 26%, rgba(90,54,30,.06) 44%, rgba(12,9,7,0) 62%)", pointerEvents: "none" }} />{" "}
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "92%", width: "120%", height: "46vh", transform: "translateX(-50%)", background: "radial-gradient(50% 100% at 50% 100%, rgba(255,234,196,.16) 0%, rgba(255,234,196,.05) 45%, rgba(255,234,196,0) 75%)", pointerEvents: "none" }} />{" "}
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "-42px", width: "26px", height: "26px", transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,246,226,.95) 0%,rgba(232,209,154,.45) 32%,rgba(232,209,154,0) 70%)" }} />{" "}
                <span aria-hidden="true" style={{ position: "absolute", left: "-22px", right: "22px", top: "22px", aspectRatio: "3 / 4.2", border: "1px solid rgba(201,169,110,.45)", borderRadius: "999px 999px 0 0", pointerEvents: "none" }} />{" "}
                <span data-arch="" aria-hidden="true" style={{ display: "block", position: "relative", aspectRatio: "3 / 4.2", borderRadius: "999px 999px 0 0", overflow: "hidden", background: "#1A1411" }}>
                  {arr(v.archSlides).map((s, $index) => (<Fragment key={$index}>
                    <span ref={s?.ref} style={sx(`position:absolute;inset:0;background-image:${s?.bg ?? ""};background-size:cover;background-position:center;opacity:${s?.op ?? ""};transform:scale(${s?.sc ?? ""});transition:${v.archTr ?? ""}`)} />
                  </Fragment>))}{" "}
                  <span style={{ position: "absolute", inset: "0", borderRadius: "999px 999px 0 0", background: "linear-gradient(180deg, rgba(255,240,214,.10) 0%, rgba(255,240,214,0) 26%)" }} />
                </span>
                <figcaption style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginTop: "46px", paddingTop: "6px", borderTop: "1px solid rgba(244,238,228,.16)" }}>
                  <span ref={v.archProgRef} aria-hidden="true" style={{ position: "absolute", left: "0", top: "-1px", width: "100%", height: "1px", background: "#C9A96E", transform: "scaleX(0)", transformOrigin: "left center" }} />{" "}
                  <span ref={v.archCapRef} aria-live="polite" style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px", minWidth: "0" }}>
                    <span style={{ fontFamily: "'Marcellus',serif", fontSize: "19px", color: "#F4EEE4" }}>{v.archName}
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
        <section id="top" data-screen-label="01 Hero · Your sky" aria-labelledby="hero-h" style={{ position: "relative", minHeight: "min(100svh, 1040px)", padding: "92px clamp(20px,4vw,56px) 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", background: "radial-gradient(56% 46% at 50% 58%, rgba(12,9,7,.66) 0%, rgba(12,9,7,0) 100%)", color: "#F4EEE4", overflow: "hidden" }}>
          <canvas ref={v.moonRef} data-hero="60" aria-hidden="true" style={sx(`display:block;width:${v.moonSz ?? ""};height:${v.moonSz ?? ""}`)} />
          <p data-hero="180" aria-live="polite" style={{ margin: "4px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>{v.skyOver}
          </p>
          {v.skyHasCount ? (<>
            <p style={{ margin: "10px 0 0", fontFamily: "'Marcellus',serif", fontSize: "clamp(22px,2vw,30px)", lineHeight: "1.1", color: "#C9A96E" }}>{v.skyCount}
            </p>
          </>) : null}
          <h1 id="hero-h" style={{ margin: "18px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.6vw,80px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "#F4EEE4" }}>
            <span data-hero="260" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
            </span>
            <span data-hero="380" style={{ display: "block", marginTop: ".1em", textWrap: "balance" }}>A plan that holds it all.
            </span>
          </h1>
          <p data-hero="480" aria-live="polite" style={{ margin: "20px auto 0", maxWidth: "34em", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>{v.skyLine}
          </p>
          <form data-hero="580" onSubmit={v.skySubmit} style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "center", gap: "14px 16px", marginTop: "26px" }}>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px", textAlign: "left" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#C5BAB0" }}>Your wedding date
              </span>
              <input className="iw-focus-1" type="date" value={v.skyDraft ?? ""} onChange={v.skyChange} style={{ minHeight: "52px", minWidth: "210px", padding: "0 14px", background: "rgba(12,9,7,.7)", border: "1px solid #4A3A22", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "16px", colorScheme: "dark" }} />
            </label>{" "}
            <button className="iw-hover-c iw-focus-a" type="submit" style={{ minHeight: "52px", padding: "0 22px", background: "transparent", border: "1px solid #C9A96E", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>See your sky
            </button>{" "}
            <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
            </a>
          </form>
          <div data-hero="660" style={{ marginTop: "14px" }}>
            <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
            </a>
          </div>
        </section>
      </>) : null}{" "}
      {v.heroPetals ? (<>
        <section id="top" ref={v.petalRef} data-screen-label="01 Hero · Petals" aria-labelledby="hero-h" onPointerMove={v.petalMove} onPointerDown={v.petalDown} onPointerLeave={v.petalLeave} style={{ position: "relative", height: "100svh", minHeight: "640px", maxHeight: "1040px", overflow: "hidden", background: "radial-gradient(70% 60% at 50% 45%, rgba(58,30,18,.5) 0%, rgba(12,9,7,0) 72%)", color: "#F4EEE4", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", touchAction: "pan-y" }}>
          <canvas ref={v.petalBackRef} aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: "1", maxWidth: "1180px", padding: "72px 24px 24px" }}>
            <p data-hero="900" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#E8D19A" }}>For the wedding you’ve imagined
            </p>
            <h1 id="hero-h" style={{ margin: "22px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(44px,6.6vw,118px)", lineHeight: "1.02", letterSpacing: "-.014em", color: "#F4EEE4" }}>
              <span data-hero="1000" style={{ display: "block", textWrap: "balance" }}>A wedding that feels like you.
              </span>
              <span data-hero="1140" style={{ display: "block", marginTop: ".08em", textWrap: "balance" }}>A plan that holds it all.
              </span>
            </h1>
            <p data-hero="1260" style={{ margin: "26px auto 0", maxWidth: "32em", fontSize: "clamp(15px,1.2vw,19px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>From finding your people to bringing every celebration together, plan it with Noor beside you, an AI advisor who knows what you don’t yet. More clarity, and more room to enjoy it.
            </p>
            <div data-hero="1360" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px 28px", marginTop: "30px" }}>
              <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 28px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
              </a>
              <a className="iw-hover-6 iw-focus-4" href="#experience" style={{ display: "inline-flex", alignItems: "center", padding: "12px 0 5px", borderBottom: "1px solid #F4EEE4", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease,border-color .2s ease" }}>Explore the experience
              </a>
            </div>
          </div>
          <canvas ref={v.petalFrontRef} aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none", zIndex: "2" }} />
          <p aria-hidden="true" style={sx(`position:absolute;left:0;right:0;bottom:${v.petalHintB ?? ""};z-index:3;margin:0;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#9C9289;pointer-events:none`)}>{v.petalHint}
          </p>
        </section>
      </>) : null}
      <section id="open-dates" data-screen-label="02 Open dates" aria-labelledby="od-h" style={{ scrollMarginTop: "72px", padding: "clamp(96px,11vw,150px) 0 clamp(88px,10vw,130px)", borderBottom: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1.4 1 520px", minWidth: "0" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Open dates
              </p>
              <h2 id="od-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance", maxWidth: "13em" }}>{"Dates a venue would rather fill. "}
                <span style={{ color: "#A89C8F" }}>At a price worth passing on.
                </span>
              </h2>
            </div>
            <div style={{ flex: "0 1 430px", minWidth: "0" }}>
              <p data-rv="up" data-rv-d="140" style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Now and then a venue has a weekend it would rather fill than leave empty. We ask for a price worth telling you about, check what it includes, and list it here for as long as it holds.
              </p>
              <div role="tablist" aria-label="Where the open dates are" data-rv="up" data-rv-d="200" style={{ display: "flex", gap: "28px", marginTop: "28px", borderBottom: "1px solid #3E3229" }}>
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
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                  <img className="iw-hover-9" src={d?.img} alt={d?.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />{" "}
                  <span style={{ position: "absolute", top: "14px", left: "14px", padding: "5px 8px", background: "#F4EEE4", color: "#1E1915", fontSize: "11px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase" }}>{d?.save}
                  </span>
                </div>
                <p style={{ margin: "18px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>{d?.place}
                </p>
                <h3 style={{ margin: "8px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.12", color: "#F4EEE4" }}>{d?.name}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>{d?.dates}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>{d?.inc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0 12px", marginTop: "14px", paddingTop: "6px", borderTop: "1px solid #3E3229" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1", color: "#C9A96E" }}>{d?.price}
                    </span>
                    <span style={{ fontSize: "13px", color: "#9C9289" }}>{"usually "}{d?.was}
                    </span>
                  </span>{" "}
                  <a className="iw-hover-b iw-focus-1" href="IndianWeddings%20Couples%20Web%20App%20V2.html" aria-label={d?.aria} style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "13px", fontWeight: "700", color: "#E8D19A", textDecoration: "none", transition: "color .2s ease" }}>Ask about it
                  </a>
                </div>
                <p style={{ margin: "0", fontSize: "12px", lineHeight: "1.5", color: "#9C9289" }}>{d?.hold}
                </p>
              </article>
            </Fragment>))}
          </div>
          <p style={{ margin: "28px 0 0", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>Sample open dates. The venues, dates and prices are illustrative. Photography: PTaufiq Photography.
          </p>
        </div>
      </section>
      <section id="experience" data-screen-label="03 Little details" aria-labelledby="premise-h" style={{ scrollMarginTop: "72px", padding: "clamp(112px,13vw,184px) 0 clamp(96px,11vw,150px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1.5 1 520px", minWidth: "0" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>The experience
              </p>
              <h2 id="premise-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", maxWidth: "12.5em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance" }}>{"A thousand little details. "}
                <span style={{ color: "#A89C8F" }}>A few moments that mean everything.
                </span>
              </h2>
            </div>
            <p data-rv="up" data-rv-d="160" style={{ flex: "0 1 430px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>A wedding brings together two families, their traditions, your own taste, a guest list, a budget and more decisions than anyone admits to. IndianWeddings gives all of it one considered place, so the moments themselves get your full attention.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "36px 16px", marginTop: "clamp(56px,7vw,100px)" }}>
            <figure style={{ flex: "0 0 clamp(150px,19%,260px)", margin: "0" }}>
              <div data-rv="mask" style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg" alt="A mehendi celebration in Florence" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
              <figcaption style={{ paddingTop: "16px" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>01
                </span>
                <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Rose petals for the entrance
                </span>
              </figcaption>
            </figure>
            <figure style={{ flex: "0 0 clamp(130px,13%,190px)", margin: "clamp(16px,7vw,110px) 0 0" }}>
              <div data-rv="mask" style={{ overflow: "hidden", aspectRatio: "1/1", background: "#1A1411" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/cultural-wedding-tradition-photography-ptaufiq.jpg" alt="A wedding tradition being observed" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
              <figcaption style={{ paddingTop: "16px" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>02
                </span>
                <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Who holds the rings
                </span>
              </figcaption>
            </figure>
            <figure style={{ flex: "0 0 clamp(150px,17%,240px)", margin: "clamp(0px,2vw,28px) 0 0" }}>
              <div data-rv="mask" style={{ overflow: "hidden", aspectRatio: "3/4", background: "#1A1411" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-wedding-bride-veil-ptaufiq.jpg" alt="A bride beneath her veil" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
              <figcaption style={{ paddingTop: "16px" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>03
                </span>
                <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Flowers to match the lehenga
                </span>
              </figcaption>
            </figure>
            <figure style={{ flex: "0 0 clamp(130px,14%,200px)", margin: "clamp(16px,9vw,140px) 0 0" }}>
              <div data-rv="mask" style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/bridal-portrait-under-veil.jpg" alt="A bridal portrait under the veil" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
              <figcaption style={{ paddingTop: "16px" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>04
                </span>
                <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>The nath your mother wore
                </span>
              </figcaption>
            </figure>
            <figure style={{ flex: "0 0 clamp(150px,17%,240px)", margin: "clamp(0px,3vw,40px) 0 0" }}>
              <div data-rv="mask" style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/ptaufiq-bride-groom-first-look-moment.jpg" alt="A bride and groom at their first look" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
              <figcaption style={{ paddingTop: "16px" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>05
                </span>
                <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>A first look, before the guests
                </span>
              </figcaption>
            </figure>
            <figure style={{ flex: "0 0 clamp(130px,12%,180px)", margin: "clamp(16px,6vw,90px) 0 0" }}>
              <div data-rv="mask" style={{ overflow: "hidden", aspectRatio: "1/1", background: "#1A1411" }}>
                <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg" alt="A couple’s ceremony portrait in Rajkot" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
              <figcaption style={{ paddingTop: "16px" }}>
                <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>06
                </span>
                <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Garlands that survive the varmala
                </span>
              </figcaption>
            </figure>
          </div>
          <p style={{ margin: "40px 0 0", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>A few from the list. Yours will have its own. Photography: PTaufiq Photography.
          </p>
        </div>
      </section>
      <section id="advisor" data-screen-label="04 Your advisor" aria-labelledby="adv-h" style={{ scrollMarginTop: "72px", background: "rgba(18,14,11,.6)", padding: "clamp(104px,12vw,168px) 0 clamp(96px,11vw,150px)", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1.4 1 520px", minWidth: "0" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>{v.advOver}
              </p>
              <h2 id="adv-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance", maxWidth: "13em" }}>{"The friend who has been to every wedding. "}
                <span style={{ color: "#A89C8F" }}>And noticed everything.
                </span>
              </h2>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 450px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>{v.advLede}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px clamp(40px,6vw,96px)", marginTop: "clamp(56px,7vw,96px)" }}>
            <div style={{ flex: "1 1 300px", maxWidth: "440px" }}>
              <div role="tablist" aria-label={v.advTabsLabel} aria-orientation="vertical" style={{ borderTop: "1px solid #3E3229" }}>
                {arr(v.advTabs).map((a, $index) => (<Fragment key={$index}>
                  <button className="iw-hover-b iw-focus-d" type="button" role="tab" id={a?.tid} aria-selected={a?.sel} aria-controls="adv-panel" onClick={a?.on} style={sx(`appearance:none;position:relative;width:100%;display:flex;align-items:baseline;gap:18px;padding:20px 0;background:none;border:0;border-bottom:1px solid #3E3229;text-align:left;cursor:pointer;color:${a?.color ?? ""};outline:none;transition:color .25s ease,background-color .25s ease`)}>
                    <span aria-hidden="true" style={sx(`position:absolute;left:0;bottom:-1px;height:1px;width:${a?.lineW ?? ""};background:#C9A96E;transition:width .6s cubic-bezier(.2,.7,.1,1)`)} />{" "}
                    <span style={{ flex: "0 0 26px", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", color: "#C9A96E" }}>{a?.no}
                    </span>{" "}
                    <span style={{ flex: "1", minWidth: "0" }}>
                      <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(24px,2.4vw,34px)", lineHeight: "1.12" }}>{a?.label}
                      </span>
                      <span style={{ display: "block", marginTop: "6px", fontFamily: "'Nunito Sans',sans-serif", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>{a?.sub}
                      </span>
                    </span>{" "}
                    <span aria-hidden="true" style={sx(`font-size:20px;color:#C9A96E;opacity:${a?.arrow ?? ""};transition:opacity .25s ease`)}>→
                    </span>
                  </button>
                </Fragment>))}
              </div>
              <p style={{ margin: "24px 0 0", maxWidth: "30em", fontSize: "15px", lineHeight: "1.6", color: "#C5BAB0", textWrap: "pretty" }}>{v.advTrust}
              </p>
            </div>
            <div id="adv-panel" role="tabpanel" aria-labelledby={v.advLabelledBy} style={{ flex: "1.6 1 520px", minWidth: "0", background: "#0C0907", border: "1px solid #3E3229", borderRadius: "6px", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden", background: "#1A1411" }}>
                <img src={v.advImg} alt={v.advAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />{" "}
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(12,9,7,0) 45%,rgba(12,9,7,.9) 100%)" }} />
              </div>
              <div aria-live="polite" style={{ padding: "clamp(22px,2.6vw,36px)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 22px", width: "22px", height: "22px", borderRadius: "50%", background: "conic-gradient(from 200deg,#C9A96E,#F0DDB3,#A9864C,#C9A96E)", display: "grid", placeItems: "center" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0C0907" }} />
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#E8D19A" }}>{v.advCard}
                    </span>
                  </span>{" "}
                  <span style={{ fontSize: "12px", color: "#9C9289" }}>Sample
                  </span>
                </div>
                <p style={{ margin: "18px 0 0", fontFamily: "'Marcellus',serif", fontSize: "clamp(26px,2.4vw,34px)", lineHeight: "1.15", color: "#F4EEE4", textWrap: "balance" }}>{v.advHead}
                </p>
                <p style={{ margin: "14px 0 0", maxWidth: "38em", fontSize: "16px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>{v.advBody}
                </p>
                <div style={{ marginTop: "22px", borderTop: "1px solid #3E3229" }}>
                  {arr(v.advRows).map((r, $index) => (<Fragment key={$index}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "4px 24px", padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase", color: "#9C9289" }}>{r?.k}
                      </span>
                      <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>{r?.v}
                      </span>
                    </div>
                  </Fragment>))}
                </div>
                {v.advHasFoot ? (<>
                  <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#C5BAB0" }}>{v.advFoot}
                  </p>
                </>) : null}{" "}
                {v.advWhyOpen ? (<>
                  <div style={{ marginTop: "20px", padding: "16px 18px", background: "#1A1411" }}>
                    <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Why it said this
                    </p>
                    <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#C5BAB0", textWrap: "pretty" }}>{v.advWhy}
                    </p>
                  </div>
                </>) : null}{" "}
                {v.advPending ? (<>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 28px", marginTop: "24px" }}>
                    <button className="iw-hover-c iw-focus-a" type="button" onClick={v.advTake} style={{ appearance: "none", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", background: "transparent", border: "1px solid #C9A96E", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>{v.advYes}
                    </button>{" "}
                    <button className="iw-hover-b iw-focus-a" type="button" onClick={v.advSkip} style={{ appearance: "none", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0", background: "none", border: "0", color: "#C5BAB0", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>{v.advNo}
                    </button>{" "}
                    <button className="iw-hover-b iw-focus-a" type="button" onClick={v.advWhyToggle} aria-expanded={v.advWhyExp} style={{ appearance: "none", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0", background: "none", border: "0", color: "#C5BAB0", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationColor: "#5A4D42", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>{v.advWhyLabel}
                    </button>
                  </div>
                </>) : null}{" "}
                {v.advSettled ? (<>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "4px 24px", marginTop: "24px", paddingTop: "12px", borderTop: "1px solid #3E3229" }}>
                    <span style={{ flex: "1 1 300px", display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", lineHeight: "1.55", color: "#EDE3D3" }}>
                      {v.advTaken ? (<>
                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flex: "0 0 16px", marginTop: "3px" }}>
                          <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>) : null}{" "}
                      <span>{v.advResult}
                      </span>
                    </span>{" "}
                    <button className="iw-hover-b iw-focus-a" type="button" onClick={v.advUndo} style={{ appearance: "none", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0", background: "none", border: "0", color: "#C5BAB0", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "color .2s ease" }}>Undo
                    </button>
                  </div>
                </>) : null}
              </div>
            </div>
          </div>
          <p style={{ margin: "28px 0 0", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>{v.advSample}{" Photography: PTaufiq Photography."}
          </p>
        </div>
      </section>
      <section id="noor" data-screen-label="04b Noor at work" aria-labelledby="nw-h" style={{ scrollMarginTop: "72px", padding: "clamp(104px,12vw,168px) 0 clamp(96px,11vw,150px)", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div onPointerMove={v.orbMove} onPointerLeave={v.orbLeave} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px clamp(40px,6vw,96px)" }}>
            <div data-rv="up" style={{ flex: "0 0 clamp(220px,28vw,380px)", maxWidth: "100%", margin: "0 auto" }}>
              <canvas ref={v.orbRef} aria-hidden="true" style={{ display: "block", width: "100%", aspectRatio: "1" }} />
            </div>
            <div style={{ flex: "1 1 440px", minWidth: "0" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Noor means light
              </p>
              <h2 id="nw-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,64px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance", maxWidth: "14em" }}>{"Not a chat window off to the side. "}
                <span style={{ color: "#A89C8F" }}>Noor works inside your whole plan.
                </span>
              </h2>
              <p data-rv="up" data-rv-d="140" style={{ margin: "24px 0 0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>It reads your plan as it grows and shows you what you couldn’t see yet: in your budget, on your website, in your photographs and on the day itself. Here it is at work.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px clamp(40px,5vw,80px)", marginTop: "clamp(64px,8vw,112px)" }}>
            <div style={{ flex: "1 1 280px", maxWidth: "420px", display: "flex", flexDirection: "column" }}>
              <div role="tablist" aria-label="Noor at work" style={sx(v.nwRailStyle)}>
                {arr(v.nwTabs).map((t, $index) => (<Fragment key={$index}>
                  <button className="iw-hover-b iw-focus-d" type="button" role="tab" id={t?.tid} aria-selected={t?.sel} aria-controls="nw-panel" onClick={t?.on} style={sx(t?.style)}>
                    <span aria-hidden="true" style={sx(t?.lineStyle)} />{" "}
                    <span style={{ flex: "0 0 26px", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", color: "#C9A96E" }}>{t?.no}
                    </span>{" "}
                    <span style={{ flex: "1", minWidth: "0" }}>
                      <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(20px,2.2vw,30px)", lineHeight: "1.12" }}>{t?.label}
                      </span>
                      <span style={sx(t?.subStyle)}>{t?.sub}
                      </span>
                    </span>
                  </button>
                </Fragment>))}
              </div>
              {v.nwCanPause ? (<>
                <button className="iw-hover-b iw-focus-a" type="button" onClick={v.nwPauseToggle} aria-pressed={v.nwPausedA} style={{ appearance: "none", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "44px", marginTop: "14px", padding: "0", background: "none", border: "0", color: "#C5BAB0", fontFamily: "'Nunito Sans',sans-serif", fontSize: "13px", fontWeight: "700", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationColor: "#5A4D42", cursor: "pointer", transition: "color .2s ease" }}>{v.nwPauseLabel}
                </button>
              </>) : null}
            </div>
            <div id="nw-panel" ref={v.nwStageRef} role="tabpanel" aria-labelledby={v.nwLabelledBy} style={{ flex: "1.7 1 540px", minWidth: "0", display: "flex", flexDirection: "column", background: "#0C0907", border: "1px solid #3E3229", borderRadius: "6px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", minHeight: "56px", padding: "0 clamp(18px,2.2vw,28px)", borderBottom: "1px solid #241C17" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
                  <span aria-hidden="true" style={sx(v.nwSigStyle)}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0C0907" }} />
                  </span>{" "}
                  <span aria-live="polite" style={{ minWidth: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#E8D19A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v.nwStatus}
                  </span>
                </span>{" "}
                <span style={{ flex: "none", fontSize: "12px", color: "#9C9289" }}>Sample
                </span>
              </div>
              <div style={sx(v.nwBodyStyle)}>
                {v.nwIsBudget ? (<>
                  <div data-nwa="1" style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: "0", animation: "nwin .6s cubic-bezier(.2,.7,.1,1) both" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "6px 20px" }}>
                      <p style={{ margin: "0", fontFamily: "'Marcellus',serif", fontSize: "clamp(24px,2.2vw,30px)", color: "#F4EEE4" }}>Budget · ₹85L
                      </p>
                      <p style={{ margin: "0", fontSize: "13px", color: "#9C9289" }}>Lakeside mandap · 250 guests
                      </p>
                    </div>
                    <div style={{ position: "relative", marginTop: "20px", borderTop: "1px solid #3E3229", overflow: "hidden" }}>
                      <span aria-hidden="true" style={sx(v.nwScanStyle)} />{" "}
                      {arr(v.nwBudget).map((r, $index) => (<Fragment key={$index}>
                        <div style={sx(r?.rowStyle)}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                            <span style={sx(r?.kStyle)}>{r?.k}
                            </span>{" "}
                            <span style={{ display: "flex", alignItems: "baseline", gap: "8px", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                              <span style={sx(r?.fromStyle)}>{r?.from}
                              </span>
                              <span style={sx(r?.toStyle)}>{r?.to}
                              </span>
                            </span>
                          </div>
                          <div style={{ height: "4px", marginTop: "10px", background: "#241C17" }}>
                            <span style={sx(r?.barStyle)} />
                          </div>
                        </div>
                      </Fragment>))}
                    </div>
                    <div style={sx(v.nwNoteStyle)}>
                      <span aria-hidden="true" style={{ flex: "0 0 22px", width: "22px", height: "22px", borderRadius: "50%", background: "conic-gradient(from 200deg,#C9A96E,#F0DDB3,#A9864C,#C9A96E)", display: "grid", placeItems: "center" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0C0907" }} />
                      </span>
                      <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#EDE3D3" }}>
                        {arr(v.nwBudgetWords).map((w, $index) => (<Fragment key={$index}>
                          <span style={sx(w?.s)}>{w?.w}
                          </span>
                        </Fragment>))}
                      </p>
                    </div>
                    <div style={sx(v.nwBudDone)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flex: "0 0 16px", marginTop: "3px" }}>
                        <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Your total stays at ₹85L. Your old budget is saved, and nothing changes unless you keep it.
                      </span>
                    </div>
                  </div>
                </>) : null}{" "}
                {v.nwIsSite ? (<>
                  <div data-nwa="1" style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: "0", animation: "nwin .6s cubic-bezier(.2,.7,.1,1) both" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "40px", padding: "0 14px", border: "1px solid #3E3229", borderRadius: "2px", fontSize: "13px", color: "#C5BAB0" }}>
                      <span style={{ flex: "0 0 7px", width: "7px", height: "7px", borderRadius: "50%", background: "#6FAE93" }} />{" "}
                      <span style={{ minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>anika-and-rohan.indianweddings.com
                      </span>{" "}
                      <span style={{ marginLeft: "auto", flex: "none", fontSize: "12px", color: "#9C9289", fontVariantNumeric: "tabular-nums" }}>{v.nwSiteCount}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
                      {arr(v.nwPages).map((p, $index) => (<Fragment key={$index}>
                        <div style={sx(p?.style)}>
                          {p?.band ? (<>
                            <span aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "8px", background: "linear-gradient(135deg,transparent 50%,#F4E6D3 50%) 0 0/12px 8px,repeating-linear-gradient(90deg,#E0457B 0 24px,#F2A93B 24px 48px,#1FA39A 48px 72px,#7C4DBA 72px 96px)" }} />
                          </>) : null}{" "}
                          <span aria-hidden="true" style={sx(p?.patStyle)} />{" "}
                          <span style={{ position: "relative", minWidth: "0" }}>
                            <span style={sx(p?.whenStyle)}>{p?.when}
                            </span>
                            <span style={sx(p?.titleStyle)}>{p?.title}
                            </span>
                          </span>{" "}
                          <span style={{ position: "relative", flex: "none", width: "52px", height: "52px", overflow: "hidden", borderRadius: "2px" }}>
                            <img src={p?.img} alt="" style={sx(p?.imgStyle)} />
                          </span>{" "}
                          <span aria-hidden="true" style={sx(p?.shimStyle)} />
                        </div>
                      </Fragment>))}
                    </div>
                    <div style={sx(v.nwSiteDone)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flex: "0 0 16px", marginTop: "3px" }}>
                        <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>A page and a look for every event, from your list. Change any theme, word or photograph.
                      </span>
                    </div>
                  </div>
                </>) : null}{" "}
                {v.nwIsPortraits ? (<>
                  <div data-nwa="1" style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: "0", animation: "nwin .6s cubic-bezier(.2,.7,.1,1) both" }}>
                    <div style={{ display: "flex", gap: "clamp(16px,2.4vw,32px)", alignItems: "flex-start" }}>
                      <div style={{ flex: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#9C9289" }}>Your photos
                        </p>
                        {arr(v.nwSrc).map((p, $index) => (<Fragment key={$index}>
                          <span style={sx(p?.style)}>
                            <img src={p?.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </span>
                        </Fragment>))}
                      </div>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ position: "relative", height: "clamp(280px,26vw,340px)", aspectRatio: "3/4", maxWidth: "100%", overflow: "hidden", borderRadius: "2px", background: "#1A1411" }}>
                          <div style={sx(v.nwPosterStyle)}>
                            <img src="/assets/website/poster-film.jpg" alt="" style={sx(v.nwPImgA)} />{" "}
                            <img src="/assets/website/poster-haldi.jpg" alt="" style={sx(v.nwPImgB)} />{" "}
                            <span aria-hidden="true" style={sx(v.nwPFrame)} />{" "}
                            <span style={sx(v.nwPCapA)}>
                              <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "24px", lineHeight: "1.05" }}>{"Anika & Rohan"}
                              </span>
                              <span style={{ display: "block", marginTop: "6px", fontSize: "10px", letterSpacing: ".16em", textTransform: "uppercase" }}>Now showing · Cancún
                              </span>
                            </span>{" "}
                            <span style={sx(v.nwPCapB)}>
                              <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "22px", lineHeight: "1.05" }}>The Great Haldi Tug of War
                              </span>
                              <span style={{ display: "block", marginTop: "6px", fontSize: "10px", letterSpacing: ".16em", textTransform: "uppercase" }}>Team Bride vs Team Groom
                              </span>
                            </span>{" "}
                            <span style={sx(v.nwPTag)}>Made by Noor
                            </span>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2px 18px", marginTop: "14px" }}>
                          {arr(v.nwStyles).map((x, $index) => (<Fragment key={$index}>
                            <span style={sx(x?.style)}>{x?.label}
                            </span>
                          </Fragment>))}
                        </div>
                      </div>
                    </div>
                    <p style={{ margin: "auto 0 0", paddingTop: "16px", fontSize: "13px", lineHeight: "1.55", color: "#9C9289" }}>Made only from photographs you both approve. They stay private to your account.
                    </p>
                  </div>
                </>) : null}{" "}
                {v.nwIsDay ? (<>
                  <div data-nwa="1" style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: "0", animation: "nwin .6s cubic-bezier(.2,.7,.1,1) both" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "6px 20px" }}>
                      <p style={{ margin: "0", fontFamily: "'Marcellus',serif", fontSize: "clamp(24px,2.2vw,30px)", color: "#F4EEE4" }}>Sangeet · tonight
                      </p>
                      <p style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#6FAE93" }}>
                        <span data-nwa="1" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6FAE93", animation: "nwpulse 1.8s ease-in-out infinite" }} />Live
                      </p>
                    </div>
                    <div style={{ marginTop: "16px", borderTop: "1px solid #3E3229" }}>
                      {arr(v.nwRun).map((r, $index) => (<Fragment key={$index}>
                        <div style={{ display: "grid", gridTemplateColumns: "112px minmax(0,1fr)", gap: "14px", padding: "12px 0", borderBottom: "1px solid #241C17" }}>
                          <span style={{ fontSize: "15px", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                            <span style={sx(r?.oldStyle)}>{r?.t}
                            </span>
                            <span style={sx(r?.newStyle)}>{r?.nt}
                            </span>
                          </span>{" "}
                          <span style={{ minWidth: "0" }}>
                            <span style={{ display: "block", fontSize: "15px", lineHeight: "1.45", color: "#EDE3D3" }}>{r?.what}
                            </span>
                            <span style={sx(r?.flagStyle)}>{r?.flag}
                            </span>
                          </span>
                        </div>
                      </Fragment>))}
                    </div>
                    <div style={sx(v.nwAlertStyle)}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span aria-hidden="true" style={{ flex: "0 0 18px", width: "18px", height: "18px", borderRadius: "50%", background: "conic-gradient(from 200deg,#C9A96E,#F0DDB3,#A9864C,#C9A96E)", display: "grid", placeItems: "center" }}>
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0C0907" }} />
                        </span>
                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#E8D19A" }}>Noor’s draft · to 240 guests
                        </span>
                      </div>
                      <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#EDE3D3" }}>
                        {arr(v.nwAlertWords).map((w, $index) => (<Fragment key={$index}>
                          <span style={sx(w?.s)}>{w?.w}
                          </span>
                        </Fragment>))}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px", marginTop: "14px" }}>
                        <span style={sx(v.nwSendStyle)}>{v.nwSendLabel}
                        </span>{" "}
                        <span style={sx(v.nwReadStyle)}>212 of 240 read · shuttles unchanged
                        </span>
                      </div>
                    </div>
                  </div>
                </>) : null}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "40px clamp(40px,5vw,80px)", marginTop: "clamp(80px,9vw,128px)", paddingTop: "clamp(40px,5vw,64px)", borderTop: "1px solid #3E3229" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0", maxWidth: "560px" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Try it
              </p>
              <h3 data-rv="up" data-rv-d="80" style={{ margin: "18px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3vw,44px)", lineHeight: "1.1", color: "#F4EEE4", textWrap: "balance" }}>Ask what you’d ask a friend who knows.
              </h3>
              <div style={{ marginTop: "28px", borderTop: "1px solid #3E3229" }}>
                {arr(v.askOpts).map((o, $index) => (<Fragment key={$index}>
                  <button className="iw-hover-b iw-focus-a" type="button" onClick={o?.on} aria-pressed={o?.pressed} style={sx(o?.style)}>
                    <span>{o?.q}
                    </span>
                    <span aria-hidden="true" style={sx(o?.arrowStyle)}>→
                    </span>
                  </button>
                </Fragment>))}
              </div>
              <form onSubmit={v.askSubmit} style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                <input className="iw-focus-e" type="text" value={v.askText ?? ""} onChange={v.askSet} placeholder="Or ask your own question" aria-label="Ask Noor a question" style={{ flex: "1", minWidth: "0", minHeight: "52px", padding: "0 16px", background: "#120E0B", border: "1px solid #3E3229", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "15px", outline: "none", transition: "border-color .2s ease" }} />{" "}
                <button className="iw-hover-c iw-focus-a" type="submit" style={{ appearance: "none", flex: "none", minHeight: "52px", padding: "0 22px", background: "transparent", border: "1px solid #C9A96E", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>Ask Noor
                </button>
              </form>
            </div>
            <div aria-live="polite" style={{ flex: "1.3 1 440px", minWidth: "0", minHeight: "380px", display: "flex", flexDirection: "column", padding: "clamp(22px,2.6vw,36px)", background: "#0C0907", border: "1px solid #3E3229", borderRadius: "6px" }}>
              {v.askEmpty ? (<>
                <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", textAlign: "center" }}>
                  <span data-nwa="1" style={{ display: "grid", animation: "nwbreathe 3.6s ease-in-out infinite" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "50%", background: "conic-gradient(from 200deg,#C9A96E,#F0DDB3,#A9864C,#C9A96E)", display: "grid", placeItems: "center" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#0C0907" }} />
                    </span>
                  </span>
                  <p style={{ margin: "0", maxWidth: "22em", fontSize: "15px", lineHeight: "1.6", color: "#9C9289", textWrap: "pretty" }}>Pick a question, or ask your own. Noor answers the way a friend who has planned a thousand weddings would.
                  </p>
                </div>
              </>) : null}{" "}
              {v.askHas ? (<>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", color: "#9C9289" }}>You asked
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C5BAB0", overflowWrap: "anywhere" }}>{v.askQ}
                </p>
                <div style={{ display: "flex", gap: "14px", marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #241C17" }}>
                  <span aria-hidden="true" style={sx(v.askSigStyle)}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#0C0907" }} />
                  </span>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    {v.askThinking ? (<>
                      <p style={{ display: "flex", alignItems: "center", gap: "6px", margin: "0", minHeight: "26px", fontSize: "13px", color: "#9C9289" }}>
                        <span data-nwa="1" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A96E", animation: "nwdot 1.2s ease-in-out infinite" }} />
                        <span data-nwa="1" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A96E", animation: "nwdot 1.2s ease-in-out .15s infinite" }} />
                        <span data-nwa="1" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A96E", animation: "nwdot 1.2s ease-in-out .3s infinite" }} />
                        <span style={{ marginLeft: "6px" }}>Noor is thinking
                        </span>
                      </p>
                    </>) : null}
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#EDE3D3" }}>
                      {arr(v.askWords).map((w, $index) => (<Fragment key={$index}>
                        <span style={sx(w?.s)}>{w?.w}
                        </span>
                      </Fragment>))}
                    </p>
                    {v.askHasRows ? (<>
                      <div style={{ marginTop: "16px", borderTop: "1px solid #3E3229" }}>
                        {arr(v.askRows).map((r, $index) => (<Fragment key={$index}>
                          <div style={sx(r?.style)}>
                            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase", color: "#9C9289" }}>{r?.k}
                            </span>
                            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>{r?.v}
                            </span>
                          </div>
                        </Fragment>))}
                      </div>
                    </>) : null}{" "}
                    {v.askHasFoot ? (<>
                      <p style={sx(v.askFootStyle)}>{v.askFoot}
                      </p>
                    </>) : null}{" "}
                    {v.askIsFree ? (<>
                      <a href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={sx(v.askLinkStyle)}>Start planning with Noor
                      </a>
                    </>) : null}
                  </div>
                </div>
              </>) : null}
              <p style={{ margin: "auto 0 0", paddingTop: "20px", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>Sample answers. In the app, Noor answers from your own plan.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 32px", marginTop: "clamp(56px,7vw,88px)" }}>
            <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 34px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning with Noor
            </a>
            <p style={{ flex: "1 1 300px", margin: "0", maxWidth: "34em", fontSize: "14px", lineHeight: "1.6", color: "#9C9289", textWrap: "pretty" }}>Noor comes with every IndianWeddings plan, on the web and in the app, from your first budget to the last song.
            </p>
          </div>
        </div>
      </section>
      <section ref={v.showRef} data-screen-label="05 Showcase" aria-labelledby="show-h" style={sx(`--p:0;position:relative;height:${v.scH ?? ""};background:transparent;color:#EDE3D3;border-top:1px solid #241C17`)}>
        <div style={sx(`position:${v.stPos ?? ""};top:0;height:${v.stH ?? ""};padding:${v.stPad ?? ""};overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(22px,3.4vh,40px)`)}>
          <div aria-hidden="true" style={{ position: "absolute", inset: "0", clipPath: "inset(calc(var(--p) * 6%) calc(var(--p) * 9%) round calc(var(--p) * 6px))", willChange: "clip-path" }}>
            <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-wedding-venue-photography-ptaufiq.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(calc(1.1 - var(--p) * 0.1))" }} />
            <div style={{ position: "absolute", inset: "0", background: "#0C0907", opacity: "calc(0.16 + var(--p) * 0.66)" }} />
          </div>
          <div style={sx(`position:absolute;inset:0;display:${v.textADisp ?? ""};align-items:center;justify-content:center;padding:0 24px;opacity:calc(1 - var(--p) * 3.2);transform:translateY(calc(var(--p) * -48px))`)}>
            <p style={{ margin: "0", maxWidth: "13em", textAlign: "center", fontFamily: "'Marcellus',serif", fontSize: "clamp(38px,5.2vw,80px)", lineHeight: "1.06", color: "#F4EEE4", textWrap: "balance" }}>It begins with how you want it to feel.
            </p>
          </div>
          <div style={{ position: "relative", textAlign: "center", padding: "0 20px", opacity: "calc((var(--p) - 0.45) * 3)", transform: "translateY(calc((1 - var(--p)) * 32px))" }}>
            <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Your planning space
            </p>
            <h2 id="show-h" style={{ margin: "14px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3.2vw,50px)", lineHeight: "1.1", color: "#F4EEE4" }}>Then everything finds its place.
            </h2>
            <p style={{ margin: "14px auto 0", maxWidth: "34em", fontSize: "16px", lineHeight: "1.6", color: "#C5BAB0", textWrap: "pretty" }}>Your events, vendors, budget, guests and every decision between them, in one calm view that keeps up with you.
            </p>
          </div>
          <div role="img" aria-label="Illustration of the IndianWeddings home screen for a sample wedding: four events, open decisions, a revised quote and the budget." style={sx(`position:relative;width:min(1120px,92vw);height:${v.frameH ?? ""};opacity:calc((var(--p) - 0.4) * 2.4);transform:translateY(calc((1 - var(--p)) * 80px)) scale(calc(0.965 + var(--p) * 0.035));background:#0C0907;border:1px solid #3E3229;border-radius:6px;overflow:hidden;display:flex;flex-direction:column;text-align:left`)}>
            <div style={{ flex: "0 0 auto", height: "38px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", borderBottom: "1px solid #241C17" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>IndianWeddings · Home
              </span>{" "}
              <span style={{ fontSize: "11px", letterSpacing: ".04em", color: "#9C9289" }}>Illustrative · sample wedding
              </span>
            </div>
            <div style={{ flex: "1", minHeight: "0", display: "flex" }}>
              <div style={sx(`flex:0 0 190px;display:${v.railDisp ?? ""};flex-direction:column;gap:4px;padding:24px 18px;border-right:1px solid #241C17`)}>
                <span style={{ display: "flex", fontFamily: "'Marcellus',serif", fontSize: "13px", letterSpacing: ".08em", color: "#EDE3D3", marginBottom: "22px" }}>INDIAN
                  <span style={{ color: "#C9A96E" }}>WEDDINGS
                  </span>
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", fontWeight: "700", color: "#C9A96E" }}>Home
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", color: "#C5BAB0" }}>Plan
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", color: "#C5BAB0" }}>Vendors
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", color: "#C5BAB0" }}>Messages
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", color: "#C5BAB0" }}>Budget
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", color: "#C5BAB0" }}>Guests
                </span>{" "}
                <span style={{ padding: "9px 0", fontSize: "13.5px", color: "#C5BAB0" }}>Wedding website
                </span>
              </div>
              <div style={{ flex: "1", minWidth: "0", padding: "clamp(20px,2.6vw,34px)", display: "flex", flexWrap: "wrap", gap: "clamp(24px,3vw,44px)", alignContent: "flex-start", overflow: "hidden" }}>
                <div style={{ flex: "1.4 1 340px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Sample wedding · February 2027
                  </p>
                  <p style={{ margin: "10px 0 0", fontFamily: "'Marcellus',serif", fontSize: "clamp(24px,2.3vw,32px)", lineHeight: "1.15", color: "#EDE3D3" }}>Good evening, Ananya
                  </p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginTop: "22px", padding: "16px 0", borderTop: "1px solid #3E3229", borderBottom: "1px solid #3E3229" }}>
                    <span style={{ flex: "0 0 7px", height: "7px", marginTop: "6px", borderRadius: "50%", background: "#6FAE93" }} />{" "}
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C5BAB0" }}>
                      <span style={{ color: "#EDE3D3" }}>Vermilion Films sent a revised quote.
                      </span>{" A second shooter is added for the sangeet."}
                    </span>
                  </div>
                  <p style={{ margin: "24px 0 12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Your celebrations
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid #3E3229" }}>
                    <div style={{ flex: "1 1 120px", padding: "14px 14px 14px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#EDE3D3" }}>Mehendi
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#9C9289" }}>Thu 11 Feb · Courtyard
                      </span>
                    </div>
                    <div style={{ flex: "1 1 120px", padding: "14px 14px 14px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#EDE3D3" }}>Sangeet
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#9C9289" }}>Fri 12 Feb · Lawns
                      </span>
                    </div>
                    <div style={{ flex: "1 1 120px", padding: "14px 14px 14px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#EDE3D3" }}>Wedding
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#9C9289" }}>Sat 13 Feb · Lakeside
                      </span>
                    </div>
                    <div style={{ flex: "1 1 120px", padding: "14px 14px 14px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#EDE3D3" }}>Reception
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "12px", color: "#9C9289" }}>Sun 14 Feb · Ballroom
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                  <p style={{ margin: "0 0 12px", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>With you
                  </p>
                  <div style={{ borderTop: "1px solid #3E3229" }}>
                    <div style={{ padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontSize: "14px", color: "#EDE3D3" }}>Photographer
                      </span>
                      <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "#9C9289" }}>Three quotes to compare
                      </span>
                    </div>
                    <div style={{ padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontSize: "14px", color: "#EDE3D3" }}>Décor direction
                      </span>
                      <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "#9C9289" }}>Amrapali Flower Studio shared a moodboard
                      </span>
                    </div>
                    <div style={{ padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span style={{ display: "block", fontSize: "14px", color: "#EDE3D3" }}>Guest list
                      </span>
                      <span style={{ display: "block", marginTop: "3px", fontSize: "12px", color: "#9C9289" }}>Eighteen households to confirm
                      </span>
                    </div>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "42px", marginTop: "18px", borderRadius: "3px", background: "linear-gradient(135deg,#E8D19A 0%,#C9A96E 44%,#A8863C 100%)", color: "#150E06", fontSize: "13.5px", fontWeight: "700" }}>Compare photographers
                  </span>
                  <div style={{ marginTop: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Budget
                      </span>
                      <span style={{ fontSize: "12px", color: "#9C9289" }}>₹41.2L of ₹85L committed
                      </span>
                    </div>
                    <div style={{ position: "relative", height: "3px", marginTop: "12px", background: "#3E3229" }}>
                      <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "48%", background: "#C9A96E" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="planning" data-screen-label="06 Planning" aria-labelledby="plan-h" style={{ scrollMarginTop: "72px", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(104px,12vw,168px) clamp(20px,4vw,56px) clamp(48px,5vw,72px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 64px" }}>
          <div style={{ flex: "1 1 520px" }}>
            <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Planning
            </p>
            <h2 id="plan-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", maxWidth: "12em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance" }}>The practical part, beautifully kept.
            </h2>
          </div>
          <p data-rv="up" data-rv-d="160" style={{ flex: "0 1 420px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Underneath every wedding is a plan. Here is how IndianWeddings holds yours, from the first budget to the last guest through the door.
          </p>
        </div>
        <article data-screen-label="06a Chapter 01" aria-labelledby="ch1-h" style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(24px,3vw,40px) clamp(20px,4vw,56px) clamp(96px,11vw,150px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 460px", maxWidth: "640px" }}>
              <div data-rv="up" style={{ display: "flex", alignItems: "center", gap: "16px", maxWidth: "430px" }}>
                <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>01
                </span>
                <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
              </div>
              <h3 id="ch1-h" data-rv="up" data-rv-d="80" style={{ margin: "22px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3vw,46px)", lineHeight: "1.1", color: "#F4EEE4" }}>Bring the plan together
              </h3>
              <p data-rv="up" data-rv-d="140" style={{ margin: "18px 0 0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>See your budget as the wedding it pays for. Keep each celebration’s run sheet beside the people delivering it. Know which decisions are with you, and which are with someone else.
              </p>
            </div>
            <div role="tablist" aria-label="Planning views" style={{ display: "flex", gap: "28px", borderBottom: "1px solid #3E3229" }}>
              {arr(v.tabs).map((t, $index) => (<Fragment key={$index}>
                <button className="iw-hover-b iw-focus-1" type="button" role="tab" id={t?.tid} aria-selected={t?.sel} aria-controls="plan-panel" onClick={t?.on} style={sx(`appearance:none;background:none;border:0;border-bottom:1px solid ${t?.line ?? ""};margin-bottom:-1px;padding:14px 0 13px;min-height:44px;font-family:'Nunito Sans',sans-serif;font-size:14px;font-weight:700;letter-spacing:.03em;color:${t?.color ?? ""};cursor:pointer;transition:color .2s ease,border-color .25s ease`)}>{t?.label}
                </button>
              </Fragment>))}
            </div>
          </div>
          <div id="plan-panel" role="tabpanel" aria-labelledby={v.tabLabelledBy} data-rv="up" data-rv-d="120" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            {v.tabBudget ? (<>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "16px 40px", paddingBottom: "22px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px 40px" }}>
                  <span style={{ whiteSpace: "nowrap", lineHeight: "1.25" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>{"Planned "}
                    </span>
                    <span style={{ fontFamily: "'Marcellus',serif", fontSize: "28px", color: "#F4EEE4" }}>₹85,00,000
                    </span>
                  </span>{" "}
                  <span style={{ whiteSpace: "nowrap", lineHeight: "1.25" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>{"Committed "}
                    </span>
                    <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>₹41,20,000
                    </span>
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "#9C9289" }}>Sample figures · each photograph is sized by its share of the budget
                </span>
              </div>
              <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                <div style={{ minWidth: "880px" }}>
                  <div style={{ display: "flex", gap: "4px", height: "clamp(340px,38vw,500px)" }}>
                    <figure style={{ flex: "32 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/destination-wedding-venue-ptaufiq-photography.jpg" alt="A destination wedding venue" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.7) 0%,rgba(12,9,7,0) 50%)" }} />
                      <span style={{ position: "absolute", top: "14px", left: "14px", padding: "5px 8px", background: "#F4EEE4", color: "#1E1915", fontSize: "11px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase" }}>Booked
                      </span>
                      <figcaption style={{ position: "absolute", left: "14px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Venue and stay
                      </figcaption>
                    </figure>
                    <figure style={{ flex: "15 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/elegant-wedding-reception-photos-ptaufiq.jpg" alt="A wedding reception set for dinner" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.7) 0%,rgba(12,9,7,0) 50%)" }} />
                      <span style={{ position: "absolute", top: "14px", left: "14px", padding: "5px 8px", background: "#F4EEE4", color: "#1E1915", fontSize: "11px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase" }}>Booked
                      </span>
                      <figcaption style={{ position: "absolute", left: "14px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Food and drink
                      </figcaption>
                    </figure>
                    <figure style={{ flex: "10 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/romantic-evening-wedding-ptaufiq-photography.jpg" alt="An evening wedding setting" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.85)" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.75) 0%,rgba(12,9,7,.15) 60%)" }} />
                      <figcaption style={{ position: "absolute", left: "14px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Décor and florals
                      </figcaption>
                    </figure>
                    <figure style={{ flex: "9 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/bridal-portrait-outdoor-session-ptaufiq.jpg" alt="A bride’s outdoor portrait" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.85)" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.75) 0%,rgba(12,9,7,.15) 60%)" }} />
                      <figcaption style={{ position: "absolute", left: "14px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Outfits and jewellery
                      </figcaption>
                    </figure>
                    <figure style={{ flex: "7.5 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/wedding-candid-moments-photography.jpg" alt="A candid wedding moment" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.85)" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.75) 0%,rgba(12,9,7,.15) 60%)" }} />
                      <figcaption style={{ position: "absolute", left: "14px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Photography and film
                      </figcaption>
                    </figure>
                    <figure style={{ flex: "4 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet.jpg" alt="A sangeet in Cancún" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.85)" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.75) 0%,rgba(12,9,7,.15) 60%)" }} />
                      <figcaption style={{ position: "absolute", left: "12px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Music
                      </figcaption>
                    </figure>
                    <figure style={{ flex: "7.5 1 0", minWidth: "0", margin: "0", position: "relative", overflow: "hidden", background: "#1A1411" }}>
                      <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/mountain-view-wedding-ptaufiq-photography.jpg" alt="A wedding with a mountain view" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.85)" }} />
                      <span style={{ position: "absolute", inset: "0", background: "linear-gradient(0deg,rgba(12,9,7,.75) 0%,rgba(12,9,7,.15) 60%)" }} />
                      <figcaption style={{ position: "absolute", left: "14px", bottom: "16px", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#F4EEE4" }}>Travel and the rest
                      </figcaption>
                    </figure>
                  </div>
                  <div style={{ display: "flex", gap: "4px", marginTop: "14px" }}>
                    <span style={{ flex: "32 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #C9A96E", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#F4EEE4" }}>₹32L
                    </span>{" "}
                    <span style={{ flex: "15 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #C9A96E", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#F4EEE4" }}>₹15L
                    </span>{" "}
                    <span style={{ flex: "10 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #3E3229", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#C5BAB0" }}>₹10L
                    </span>{" "}
                    <span style={{ flex: "9 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #3E3229", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#C5BAB0" }}>₹9L
                    </span>{" "}
                    <span style={{ flex: "7.5 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #3E3229", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#C5BAB0" }}>₹7.5L
                    </span>{" "}
                    <span style={{ flex: "4 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #3E3229", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#C5BAB0" }}>₹4L
                    </span>{" "}
                    <span style={{ flex: "7.5 1 0", minWidth: "0", paddingTop: "12px", borderTop: "1px solid #3E3229", fontFamily: "'Marcellus',serif", fontSize: "20px", color: "#C5BAB0" }}>₹7.5L
                    </span>
                  </div>
                </div>
              </div>
            </>) : null}{" "}
            {v.tabRun ? (<>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "12px 40px", paddingBottom: "28px" }}>
                <span>
                  <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(26px,2.6vw,36px)", lineHeight: "1.1", color: "#F4EEE4" }}>Sangeet, Friday 12 February
                  </span>
                  <span style={{ display: "block", marginTop: "6px", fontSize: "14px", color: "#9C9289" }}>Villa Rajputana, the lawns · 240 guests
                  </span>
                </span>{" "}
                <span style={{ fontSize: "12px", color: "#9C9289" }}>Sample run sheet · shared with both families and every vendor on the night
                </span>
              </div>
              <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", minWidth: "960px", minHeight: "clamp(340px,34vw,440px)", borderTop: "1px solid #3E3229" }}>
                  <li style={{ flex: "1 1 0", position: "relative", padding: "34px 24px 0 0" }}>
                    <span style={{ position: "absolute", top: "-5px", left: "0", width: "9px", height: "9px", borderRadius: "50%", background: "#0C0907", border: "1px solid #9C9289" }} />
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.4vw,48px)", lineHeight: "1", color: "#F4EEE4", fontVariantNumeric: "tabular-nums" }}>17:30
                    </span>
                    <span style={{ display: "block", marginTop: "18px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Décor handover and a lighting check
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "13px", color: "#9C9289" }}>Amrapali Flower Studio
                    </span>
                  </li>
                  <li style={{ flex: "1 1 0", position: "relative", padding: "34px 24px 0 0", marginTop: "clamp(0px,4vw,56px)" }}>
                    <span style={{ position: "absolute", top: "calc(-5px - clamp(0px,4vw,56px))", left: "0", width: "9px", height: "9px", borderRadius: "50%", background: "#0C0907", border: "1px solid #9C9289" }} />
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.4vw,48px)", lineHeight: "1", color: "#F4EEE4" }}>18:30
                    </span>
                    <span style={{ display: "block", marginTop: "18px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Guests arrive, welcome drinks
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "13px", color: "#9C9289" }}>Shuttles from the hotel every twenty minutes
                    </span>
                  </li>
                  <li style={{ flex: "1 1 0", position: "relative", padding: "34px 24px 0 0" }}>
                    <span style={{ position: "absolute", top: "-5px", left: "0", width: "9px", height: "9px", borderRadius: "50%", background: "#0C0907", border: "1px solid #9C9289" }} />
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.4vw,48px)", lineHeight: "1", color: "#F4EEE4" }}>19:15
                    </span>
                    <span style={{ display: "block", marginTop: "18px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Family performances, seven acts
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "13px", color: "#9C9289" }}>Running order agreed by both sides
                    </span>
                  </li>
                  <li style={{ flex: "1 1 0", position: "relative", padding: "34px 24px 0 0", marginTop: "clamp(0px,4vw,56px)" }}>
                    <span style={{ position: "absolute", top: "calc(-5px - clamp(0px,4vw,56px))", left: "0", width: "9px", height: "9px", borderRadius: "50%", background: "#C9A96E" }} />
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.4vw,48px)", lineHeight: "1", color: "#C9A96E" }}>20:30
                    </span>
                    <span style={{ display: "block", marginTop: "18px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Your entrance
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "13px", color: "#9C9289" }}>Studio Haveli on stage, Vermilion Films at the gate
                    </span>
                  </li>
                  <li style={{ flex: "1 1 0", position: "relative", padding: "34px 24px 0 0" }}>
                    <span style={{ position: "absolute", top: "-5px", left: "0", width: "9px", height: "9px", borderRadius: "50%", background: "#0C0907", border: "1px solid #9C9289" }} />
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.4vw,48px)", lineHeight: "1", color: "#F4EEE4" }}>21:00
                    </span>
                    <span style={{ display: "block", marginTop: "18px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>Dinner service
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "13px", color: "#9C9289" }}>Sohan Table · forty Jain plates marked
                    </span>
                  </li>
                  <li style={{ flex: "1 1 0", position: "relative", padding: "34px 0 0 0", marginTop: "clamp(0px,4vw,56px)" }}>
                    <span style={{ position: "absolute", top: "calc(-5px - clamp(0px,4vw,56px))", left: "0", width: "9px", height: "9px", borderRadius: "50%", background: "#0C0907", border: "1px solid #9C9289" }} />
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "clamp(34px,3.4vw,48px)", lineHeight: "1", color: "#F4EEE4" }}>23:30
                    </span>
                    <span style={{ display: "block", marginTop: "18px", fontSize: "15px", lineHeight: "1.5", color: "#EDE3D3" }}>The last song
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "13px", color: "#9C9289" }}>Venue quiet hours from midnight
                    </span>
                  </li>
                </ol>
              </div>
            </>) : null}{" "}
            {v.tabDec ? (<>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "12px 40px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "'Marcellus',serif", fontSize: "clamp(26px,2.6vw,36px)", lineHeight: "1.1", color: "#F4EEE4" }}>Who is holding what
                </span>{" "}
                <span style={{ fontSize: "12px", color: "#9C9289" }}>Sample decisions · sorted by who has the next move
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", minHeight: "clamp(340px,34vw,440px)" }}>
                <div style={{ flex: "1 1 280px", minWidth: "0", background: "#15100D", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "14px", borderBottom: "1px solid #3E3229" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>With you
                    </span>
                    <span style={{ fontSize: "12px", color: "#9C9289" }}>2
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "16px", padding: "18px 0", borderBottom: "1px solid #241C17" }}>
                    <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/romantic-couple-photoshoot-ptaufiq.jpg" alt="A couple’s portrait session" loading="lazy" style={{ flex: "0 0 64px", width: "64px", height: "80px", objectFit: "cover" }} />
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#EDE3D3" }}>Photographer
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>Three quotes, side by side with your budget
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "16px", padding: "18px 0" }}>
                    <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2019/02/ptaufiq-indian-wedding-costa-mujeres-mexico-destination-mehendi.jpg" alt="A destination mehendi in Costa Mujeres" loading="lazy" style={{ flex: "0 0 64px", width: "64px", height: "80px", objectFit: "cover" }} />
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#EDE3D3" }}>Mehendi artist
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>Two portfolios to look through
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0", background: "#15100D", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "14px", borderBottom: "1px solid #3E3229" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>Waiting on a vendor
                    </span>
                    <span style={{ fontSize: "12px", color: "#9C9289" }}>1
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "16px", padding: "18px 0" }}>
                    <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-wedding-reception-night-photos.jpg" alt="A reception at night" loading="lazy" style={{ flex: "0 0 64px", width: "64px", height: "80px", objectFit: "cover" }} />
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#EDE3D3" }}>Décor
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>Amrapali Flower Studio is preparing a quote
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ flex: "1 1 280px", minWidth: "0", background: "#15100D", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "14px", borderBottom: "1px solid #3E3229" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>Settled
                    </span>
                    <span style={{ fontSize: "12px", color: "#9C9289" }}>2
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "16px", padding: "18px 0", borderBottom: "1px solid #241C17" }}>
                    <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-wedding-photography-boston-ptaufiq.jpg" alt="A luxury wedding venue" loading="lazy" style={{ flex: "0 0 64px", width: "64px", height: "80px", objectFit: "cover" }} />
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#C5BAB0" }}>Venue
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>Villa Rajputana · deposit paid
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "16px", padding: "18px 0" }}>
                    <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/Ptaufiq-Indian-Wedding-Chicago-Marriott-Southwest-at-Burr-Ridge-cake2.jpg" alt="A couple cutting their wedding cake" loading="lazy" style={{ flex: "0 0 64px", width: "64px", height: "80px", objectFit: "cover" }} />
                    <span>
                      <span style={{ display: "block", fontSize: "15px", color: "#C5BAB0" }}>Catering
                      </span>
                      <span style={{ display: "block", marginTop: "4px", fontSize: "13px", lineHeight: "1.5", color: "#9C9289" }}>Sohan Table · tasting booked
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </>) : null}
          </div>
        </article>
        <div style={{ background: "rgba(18,14,11,.6)", borderTop: "1px solid #241C17", borderBottom: "1px solid #241C17" }}>
          <article data-screen-label="06b Chapter 02" aria-labelledby="ch2-h" style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(96px,11vw,150px) clamp(20px,4vw,56px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
              <div style={{ flex: "1 1 460px", maxWidth: "640px" }}>
                <div data-rv="up" style={{ display: "flex", alignItems: "center", gap: "16px", maxWidth: "430px" }}>
                  <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>02
                  </span>
                  <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
                </div>
                <h3 id="ch2-h" data-rv="up" data-rv-d="80" style={{ margin: "22px 0 0", maxWidth: "14em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3vw,46px)", lineHeight: "1.1", color: "#F4EEE4", textWrap: "balance" }}>Find the people who bring it to life
                </h3>
              </div>
              <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>From the first look at a venue to the deposit, every vendor follows the same calm path, and every conversation stays with the decision it belongs to.
              </p>
            </div>
            <ol style={{ listStyle: "none", margin: "clamp(48px,6vw,80px) 0 0", padding: "0", display: "flex", gap: "clamp(16px,2vw,28px)", overflowX: "auto", scrollSnapType: "x proximity", scrollbarWidth: "none" }}>
              <li data-rv="up" style={{ flex: "1 0 clamp(250px,23%,320px)", minWidth: "0", scrollSnapAlign: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>1
                  </span>
                  <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
                </div>
                <div style={{ marginTop: "22px", overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                  <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/scenic-wedding-ptaufiq-photography.jpg" alt="A couple in a scenic landscape" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                </div>
                <p style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>Discover
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Browse by place, category and the feeling you’re after, in India or wherever you’re heading.
                </p>
              </li>
              <li data-rv="up" data-rv-d="80" style={{ flex: "1 0 clamp(250px,23%,320px)", minWidth: "0", scrollSnapAlign: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>2
                  </span>
                  <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
                </div>
                <div role="img" aria-label="Illustration of an enquiry sent to three venues with the wedding dates, celebrations and guest count" style={{ marginTop: "clamp(22px,5vw,78px)", aspectRatio: "4/5", background: "#1A1411", padding: "22px", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>New enquiry · sample
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "16px", fontSize: "12px", color: "#9C9289" }}>To
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: "1.55", color: "#EDE3D3" }}>Villa Rajputana
                    <br />The Lake Pavilion
                    <br />Villa Oleandra
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #3E3229", fontSize: "12px", color: "#9C9289" }}>Dates
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14px", color: "#EDE3D3" }}>11 to 14 February 2027
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "12px", fontSize: "12px", color: "#9C9289" }}>Celebrations
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "4px", fontSize: "14px", color: "#EDE3D3" }}>Mehendi, sangeet, wedding, reception
                  </span>{" "}
                  <span style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #3E3229", fontSize: "12px", color: "#C5BAB0" }}>Written once. Sent to three.
                  </span>
                </div>
                <p style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>Enquire
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Share your dates and celebrations once, not in every message.
                </p>
              </li>
              <li data-rv="up" data-rv-d="160" style={{ flex: "1 0 clamp(250px,23%,320px)", minWidth: "0", scrollSnapAlign: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>3
                  </span>
                  <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
                </div>
                <div role="img" aria-label="Illustration of three photography quotes compared against a budget of seven and a half lakh" style={{ marginTop: "clamp(22px,2.5vw,40px)", aspectRatio: "4/5", background: "#1A1411", padding: "22px", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>Photography and film · sample
                  </span>
                  <div style={{ marginTop: "18px", borderTop: "1px solid #3E3229" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span>
                        <span style={{ display: "block", fontSize: "14px", color: "#EDE3D3" }}>Sahara Wire
                        </span>
                        <span style={{ display: "block", marginTop: "2px", fontSize: "12px", color: "#9C9289" }}>3 events
                        </span>
                      </span>
                      <span style={{ fontSize: "14px", color: "#EDE3D3" }}>₹4.2L
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span>
                        <span style={{ display: "block", fontSize: "14px", color: "#EDE3D3" }}>Vermilion Films
                        </span>
                        <span style={{ display: "block", marginTop: "2px", fontSize: "12px", color: "#9C9289" }}>4 events, 2 shooters
                        </span>
                      </span>
                      <span style={{ fontSize: "14px", color: "#EDE3D3" }}>₹5.1L
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "13px 0", borderBottom: "1px solid #241C17" }}>
                      <span>
                        <span style={{ display: "block", fontSize: "14px", color: "#EDE3D3" }}>Studio Haveli
                        </span>
                        <span style={{ display: "block", marginTop: "2px", fontSize: "12px", color: "#9C9289" }}>4 events, film included
                        </span>
                      </span>
                      <span style={{ fontSize: "14px", color: "#EDE3D3" }}>₹5.8L
                      </span>
                    </div>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "auto", fontSize: "12px", color: "#C5BAB0" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6FAE93" }} />All three sit within your ₹7.5L
                  </span>
                </div>
                <p style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>Compare
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Quotes side by side, next to the budget they affect.
                </p>
              </li>
              <li data-rv="up" data-rv-d="240" style={{ flex: "1 0 clamp(250px,23%,320px)", minWidth: "0", scrollSnapAlign: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>4
                  </span>
                  <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
                </div>
                <div style={{ position: "relative", marginTop: "clamp(22px,6.5vw,100px)", overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                  <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-the-legacy-castle-pompton-plains-new-jersey-ceremony-couple-portraits.jpg" alt="A couple’s ceremony portrait" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  <span style={{ position: "absolute", left: "14px", bottom: "14px", padding: "6px 9px", background: "#F4EEE4", color: "#1E1915", fontSize: "11px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase" }}>Booked · deposit paid
                  </span>
                </div>
                <p style={{ margin: "20px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>Book
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Confirm, pay the deposit and keep the contract with the conversation.
                </p>
              </li>
            </ol>
          </article>
        </div>
        <article data-screen-label="06c Chapter 03" aria-labelledby="ch3-h" style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(96px,11vw,150px) clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 460px", maxWidth: "640px" }}>
              <div data-rv="up" style={{ display: "flex", alignItems: "center", gap: "16px", maxWidth: "430px" }}>
                <span style={{ fontFamily: "'Marcellus',serif", fontSize: "22px", color: "#C9A96E" }}>03
                </span>
                <span style={{ flex: "1", height: "1px", background: "#3E3229" }} />
              </div>
              <h3 id="ch3-h" data-rv="up" data-rv-d="80" style={{ margin: "22px 0 0", maxWidth: "14em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(30px,3vw,46px)", lineHeight: "1.1", color: "#F4EEE4", textWrap: "balance" }}>From the save the date to the day itself
              </h3>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Start with a save the date in a design that is actually Indian. It becomes your wedding website, then the app your guests carry through every event: one link that grows with your wedding. Or hand Noor your list of events, and it builds the whole site, a page and a look for each one.
            </p>
          </div>
          <div data-rv="up" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "28px 48px", marginTop: "clamp(44px,5vw,64px)" }}>
            <div style={{ minWidth: "0" }}>
              <p style={{ margin: "0 0 12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>Choose a design
              </p>
              <div role="group" aria-label="Save the date designs" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {arr(v.tpls).map((t, $index) => (<Fragment key={$index}>
                  <button className="iw-hover-f iw-focus-1" type="button" aria-pressed={t?.pressed} onClick={t?.on} style={sx(`appearance:none;display:flex;align-items:center;gap:12px;min-height:52px;padding:6px 16px 6px 6px;background:transparent;border:1px solid ${t?.bd ?? ""};border-radius:2px;cursor:pointer;text-align:left;transition:border-color .2s ease`)}>
                    <span aria-hidden="true" style={sx(`flex:0 0 38px;width:38px;height:38px;background:${t?.sw ?? ""}`)} />{" "}
                    <span>
                      <span style={sx(`display:block;font-family:'Nunito Sans',sans-serif;font-size:14px;font-weight:700;color:${t?.nc ?? ""}`)}>{t?.name}
                      </span>
                      <span style={{ display: "block", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", color: "#9C9289" }}>{t?.from}
                      </span>
                    </span>
                  </button>
                </Fragment>))}
              </div>
            </div>
            <div style={{ minWidth: "0" }}>
              <p style={{ margin: "0 0 12px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>Your photographs
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {arr(v.sdThumbs).map((p, $index) => (<Fragment key={$index}>
                  <button className="iw-focus-1" type="button" draggable="true" onDragStart={p?.drag} onClick={p?.on} aria-pressed={p?.pressed} aria-label={p?.aria} style={sx(`appearance:none;flex:0 0 52px;width:52px;height:64px;padding:0;border:0;background:#1A1411;cursor:grab;outline:1px solid ${p?.bd ?? ""};outline-offset:2px`)}>
                    <img src={p?.src} alt="" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                  </button>
                </Fragment>))}
              </div>
              <p style={{ margin: "10px 0 0", fontSize: "12px", lineHeight: "1.5", color: "#9C9289" }}>Drag one onto the save the date, or drop in your own.
              </p>
            </div>
          </div>
          <ol style={{ listStyle: "none", margin: "clamp(28px,3vw,40px) 0 0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))", alignItems: "start", gap: "clamp(40px,4vw,56px) clamp(16px,2vw,28px)" }}>
            <li data-rv="up" style={{ minWidth: "0", maxWidth: "440px", width: "100%", justifySelf: "start" }}>
              <div onDragEnter={v.sdOver} onDragOver={v.sdOver} onDragLeave={v.sdLeave} onDrop={v.sdDrop} role="img" aria-label={`Sample save the date for Ananya and Rohan in the ${v.tp?.name ?? ""} design`} style={sx(`aspect-ratio:3/4;border:${v.tp?.bw ?? ""} solid transparent;background:${v.tp?.frame ?? ""};color:${v.tp?.ink ?? ""};padding:22px;display:flex;flex-direction:column;align-items:center;text-align:center`)}>
                <span style={sx(`font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${v.tp?.soft ?? ""}`)}>Save the date
                </span>
                <div style={sx(`position:relative;flex:1 1 0;min-height:120px;width:74%;margin-top:14px;overflow:hidden;border-radius:${v.tp?.arch ?? ""};background:${v.tp?.rule ?? ""}`)}>
                  <img src={v.sdSrc} alt="" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover" }} />{" "}
                  {v.sdOverOn ? (<>
                    <span style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(12,9,7,.55)", color: "#F4EEE4", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", textTransform: "uppercase", pointerEvents: "none" }}>Drop it here
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
              <p style={{ margin: "20px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>01
              </p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>A save the date that looks like you
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Designs drawn from Indian craft, not a stock wedding look. Drop in your photographs and send it tonight.
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
                    <img src={v.sdSrc} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
              <p style={{ margin: "20px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>02
              </p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>It becomes your website
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Schedule, dress notes, travel and stay in one link. Replies land in your guest list, event by event.
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
                    <img src={p?.src} alt="" loading="lazy" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
                  </Fragment>))}
                </div>
              </div>
              <p style={{ margin: "20px 0 0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>03
              </p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Marcellus',serif", fontSize: "26px", lineHeight: "1.1", color: "#F4EEE4" }}>Then the app on the day
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Send an alert to every guest at once. Every photograph they take collects in one album, sorted by event.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px", marginTop: "18px" }}>
                <button className="iw-hover-c iw-focus-a" type="button" onClick={v.sendAlert} style={{ appearance: "none", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", background: "transparent", border: "1px solid #C9A96E", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>{v.sendLabel}
                </button>{" "}
                {v.sendHasNote ? (<>
                  <span style={{ fontSize: "12px", lineHeight: "1.5", color: "#9C9289" }}>{v.sendNote}
                  </span>
                </>) : null}
              </div>
            </li>
          </ol>
        </article>
      </section>
      <section id="celebrations" data-screen-label="07 Celebrations" aria-labelledby="ev-h" style={{ scrollMarginTop: "72px", background: "transparent", color: "#EDE3D3", padding: "clamp(96px,11vw,156px) 0 clamp(80px,9vw,120px)", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
          <div style={{ flex: "1 1 520px", maxWidth: "760px" }}>
            <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Every celebration, its own way
            </p>
            <h2 id="ev-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", maxWidth: "13em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance" }}>Built around the way weddings actually happen.
            </h2>
            <p data-rv="up" data-rv-d="140" style={{ margin: "26px 0 0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Two celebrations or seven. One city or three. Each event keeps its own venue, timings, guest list and vendors, and they still read as one wedding.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div aria-hidden="true" style={{ position: "relative", width: "120px", height: "1px", background: "#3E3229" }}>
              <div style={sx(`position:absolute;top:-1px;height:3px;left:${v.evThumbL ?? ""};width:${v.evThumbW ?? ""};background:#C9A96E;transition:left .15s linear`)} />
            </div>
            <button className="iw-hover-f iw-focus-1" type="button" onClick={v.evPrev} aria-label="Previous celebrations" aria-controls="ev-strip" style={sx(`appearance:none;width:52px;height:52px;display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid #3E3229;border-radius:2px;color:#EDE3D3;font-size:20px;cursor:pointer;opacity:${v.evPrevOp ?? ""};transition:border-color .2s ease,opacity .2s ease`)}>←
            </button>{" "}
            <button className="iw-hover-f iw-focus-1" type="button" onClick={v.evNext} aria-label="Next celebrations" aria-controls="ev-strip" style={sx(`appearance:none;width:52px;height:52px;display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid #3E3229;border-radius:2px;color:#EDE3D3;font-size:20px;cursor:pointer;opacity:${v.evNextOp ?? ""};transition:border-color .2s ease,opacity .2s ease`)}>→
            </button>
          </div>
        </div>
        <div className="iw-focus-g" id="ev-strip" ref={v.evRef} onScroll={v.onEvScroll} onPointerDown={v.evDown} onPointerMove={v.evMove} onPointerUp={v.evUp} onPointerLeave={v.evUp} tabIndex="0" role="region" aria-label="Celebrations, scroll sideways" style={{ display: "flex", alignItems: "flex-start", gap: "clamp(16px,2vw,28px)", marginTop: "clamp(48px,6vw,72px)", padding: "0 max(clamp(20px,4vw,56px), calc((100% - 1320px) / 2 + clamp(20px,4vw,56px))) 8px", overflowX: "auto", scrollSnapType: "x proximity", scrollPaddingLeft: "max(clamp(20px,4vw,56px), calc((100% - 1320px) / 2 + clamp(20px,4vw,56px)))", scrollbarWidth: "none", cursor: "grab", outlineOffset: "-2px" }}>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start" }}>
            <div style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-capadoccia-engagement-9.jpg" alt="A couple’s engagement shoot in Cappadocia" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>01
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>The roka
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Where two families first say yes.
              </span>
            </figcaption>
          </figure>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start", paddingTop: "clamp(0px,4vw,56px)" }}>
            <div style={{ overflow: "hidden", aspectRatio: "3/4", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2019/02/ptaufiq-indian-wedding-costa-mujeres-mexico-destination-mehendi.jpg" alt="A destination mehendi in Costa Mujeres" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>02
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>Mehendi
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>An afternoon of henna, music and long conversations.
              </span>
            </figcaption>
          </figure>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start" }}>
            <div style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-haldi.jpg" alt="A haldi ceremony in Spain" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>03
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>Haldi
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Turmeric, marigolds and the closest family.
              </span>
            </figcaption>
          </figure>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start", paddingTop: "clamp(0px,4vw,56px)" }}>
            <div style={{ overflow: "hidden", aspectRatio: "3/4", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet2.jpg" alt="A sangeet in Cancún" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>04
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>Sangeet
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>The night everyone performs, rehearsed or not.
              </span>
            </figcaption>
          </figure>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start" }}>
            <div style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2019/02/ptaufiq-indian-wedding-rajkot-india-ceremony-4.jpg" alt="A wedding ceremony in Rajkot" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>05
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>The ceremony
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Pheras, nikah, Anand Karaj or a civil vow, whichever is yours.
              </span>
            </figcaption>
          </figure>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start", paddingTop: "clamp(0px,4vw,56px)" }}>
            <div style={{ overflow: "hidden", aspectRatio: "3/4", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ndian-Wedding-Photography-Boston-PTaufiq-Reception-Grand-entrance-2-scaled.jpg" alt="A couple’s grand entrance at their reception" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>06
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>Reception
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>Everyone, finally, in one room.
              </span>
            </figcaption>
          </figure>
          <figure data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", margin: "0", scrollSnapAlign: "start" }}>
            <div style={{ overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
              <img className="iw-hover-9" src="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/conclusion.jpeg" alt="The last moments of a wedding night" loading="lazy" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
            </div>
            <figcaption style={{ paddingTop: "20px" }}>
              <span style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", color: "#9C9289" }}>07
              </span>
              <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>The morning after
              </span>
              <span style={{ display: "block", marginTop: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C5BAB0" }}>A slow brunch for whoever is still standing.
              </span>
            </figcaption>
          </figure>
          <div data-ev="" style={{ flex: "0 0 clamp(250px,25vw,350px)", alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px 0 22px 28px", borderLeft: "1px solid #3E3229", scrollSnapAlign: "start" }}>
            <span style={{ fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.15", color: "#F4EEE4" }}>And whatever is yours.
            </span>{" "}
            <span style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "#C5BAB0" }}>Two of these, all of them, or celebrations we haven’t named. Add the ones you’re having, in the order they’ll happen.
            </span>
          </div>
        </div>
        <p style={{ maxWidth: "1320px", margin: "28px auto 0", padding: "0 clamp(20px,4vw,56px)", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>These are a few celebrations, not a sequence. Traditions vary by family, region and faith. Photography: PTaufiq Photography.
        </p>
      </section>
      <section id="vendors" data-screen-label="08 Vendors" aria-labelledby="vd-h" style={{ scrollMarginTop: "72px", padding: "clamp(104px,12vw,168px) 0 clamp(96px,11vw,150px)", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1 1 440px", maxWidth: "640px" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Vendors and venues
              </p>
              <h2 id="vd-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4" }}>Find your people.
              </h2>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Venues, photographers, décor studios and caterers, chosen the way you’d choose them: by how their work makes you feel. Enquire, compare and book without leaving your plan.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px clamp(40px,6vw,96px)", marginTop: "clamp(56px,7vw,96px)" }}>
            <div role="tablist" aria-label="Vendor categories" aria-orientation="vertical" style={{ flex: "1 1 300px", maxWidth: "440px", borderTop: "1px solid #3E3229" }}>
              {arr(v.cats).map((c, $index) => (<Fragment key={$index}>
                <button className="iw-hover-b iw-focus-1" type="button" role="tab" aria-selected={c?.sel} aria-controls="vd-grid" onClick={c?.on} style={sx(`appearance:none;width:100%;display:flex;align-items:baseline;gap:18px;padding:18px 0;background:none;border:0;border-bottom:1px solid #3E3229;text-align:left;cursor:pointer;color:${c?.color ?? ""};transition:color .25s ease`)}>
                  <span style={{ flex: "0 0 26px", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: ".14em", color: "#C9A96E" }}>{c?.no}
                  </span>{" "}
                  <span style={{ flex: "1", fontFamily: "'Marcellus',serif", fontSize: "clamp(28px,3.2vw,46px)", lineHeight: "1.1" }}>{c?.label}
                  </span>{" "}
                  <span aria-hidden="true" style={sx(`font-size:20px;color:#C9A96E;opacity:${c?.arrow ?? ""};transition:opacity .25s ease`)}>→
                  </span>
                </button>
              </Fragment>))}
              <p style={{ margin: "20px 0 0", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>Sample listings from the IndianWeddings prototype, shown with PTaufiq Photography images. The names are not real vendors.
              </p>
            </div>
            <div id="vd-grid" role="tabpanel" aria-label={v.catLabel} style={{ flex: "2 1 520px", minWidth: "0", display: "flex", alignItems: "flex-start", gap: "clamp(16px,2vw,24px)", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
              {arr(v.vendors).map((v, $index) => (<Fragment key={$index}>
                <a className="iw-focus-h" href="IndianWeddings%20Couples%20Web%20App%20V2.html" aria-label={v?.aria} style={sx(`flex:1 0 clamp(220px,31%,300px);min-width:0;display:block;margin-top:${v?.mt ?? ""};color:#EDE3D3;text-decoration:none;scroll-snap-align:start`)}>
                  <span style={{ display: "block", overflow: "hidden", aspectRatio: "4/5", background: "#1A1411" }}>
                    <img className="iw-hover-9" src={v?.img} alt={v?.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s cubic-bezier(.2,.7,.1,1)" }} />
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "18px", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>{v?.kind}
                  </span>{" "}
                  <span style={{ display: "block", marginTop: "8px", fontFamily: "'Marcellus',serif", fontSize: "24px", lineHeight: "1.12", color: "#F4EEE4" }}>{v?.name}
                  </span>{" "}
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", marginTop: "10px", paddingTop: "12px", borderTop: "1px solid #3E3229" }}>
                    <span style={{ fontSize: "15px", color: "#C5BAB0" }}>{v?.place}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#E8D19A" }}>Enquire
                    </span>
                  </span>
                </a>
              </Fragment>))}
            </div>
          </div>
        </div>
      </section>
      <section id="real-weddings" data-screen-label="09 Real weddings" aria-labelledby="rw-h" style={{ scrollMarginTop: "72px", padding: "clamp(104px,12vw,168px) 0 clamp(96px,11vw,150px)", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "28px 72px" }}>
            <div style={{ flex: "1 1 440px", maxWidth: "680px" }}>
              <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Real weddings
              </p>
              <h2 id="rw-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,68px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance" }}>Weddings that began here.
              </h2>
            </div>
            <p data-rv="up" data-rv-d="140" style={{ flex: "0 1 440px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Every wedding planned here keeps its story: the celebrations, the people who made them, and what the couple would tell you now.
            </p>
          </div>
          <div id="rw-panel" role="tabpanel" aria-labelledby={v.rwLabelledBy} style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "40px clamp(40px,5vw,80px)", marginTop: "clamp(56px,7vw,88px)" }}>
            <div style={{ flex: "1.15 1 440px", minWidth: "0", display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr) minmax(0,1fr)", gap: "4px", minHeight: "clamp(420px,44vw,600px)" }}>
              <div style={{ gridRow: "1 / 3", overflow: "hidden", background: "#1A1411" }}>
                <img src={v.rw?.img} alt={v.rw?.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ overflow: "hidden", background: "#1A1411" }}>
                <img src={v.rw?.a} alt={v.rw?.aAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ overflow: "hidden", background: "#1A1411" }}>
                <img src={v.rw?.b} alt={v.rw?.bAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>{v.rw?.meta}
              </p>
              <h3 style={{ margin: "14px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(34px,3.4vw,52px)", lineHeight: "1.06", color: "#F4EEE4" }}>{v.rw?.names}
              </h3>
              <blockquote style={{ margin: "26px 0 0", padding: "0" }}>
                <p style={{ margin: "0", fontFamily: "'Marcellus',serif", fontSize: "clamp(21px,1.8vw,26px)", lineHeight: "1.38", color: "#EDE3D3", textWrap: "pretty" }}>{"“"}{v.rw?.quote}{"”"}
                </p>
                <footer style={{ marginTop: "12px", fontSize: "13px", color: "#9C9289" }}>{v.rw?.by}
                </footer>
              </blockquote>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "30px", borderTop: "1px solid #3E3229" }}>
                {arr(v.rwFacts).map((f, $index) => (<Fragment key={$index}>
                  <div style={{ flex: "1 1 110px", minWidth: "0", padding: "16px 16px 0 0" }}>
                    <span style={{ display: "block", fontFamily: "'Marcellus',serif", fontSize: "28px", lineHeight: "1.1", color: "#F4EEE4" }}>{f?.n}
                    </span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "12px", lineHeight: "1.45", color: "#9C9289" }}>{f?.l}
                    </span>
                  </div>
                </Fragment>))}
              </div>
              <div style={{ marginTop: "28px", borderTop: "1px solid #3E3229" }}>
                {arr(v.rwTeam).map((m, $index) => (<Fragment key={$index}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "4px 24px", padding: "12px 0", borderBottom: "1px solid #241C17" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".12em", textTransform: "uppercase", color: "#9C9289" }}>{m?.k}
                    </span>
                    <span style={{ fontSize: "15px", color: "#EDE3D3" }}>{m?.v}
                    </span>
                  </div>
                </Fragment>))}
              </div>
              <a className="iw-hover-i iw-focus-a" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", marginTop: "28px", padding: "12px 0 5px", borderBottom: "1px solid #C9A96E", color: "#F4EEE4", fontSize: "15px", fontWeight: "600", textDecoration: "none", transition: "color .2s ease" }}>Read their wedding
              </a>
            </div>
          </div>
          <div role="tablist" aria-label="Real weddings" style={{ display: "flex", flexWrap: "wrap", gap: "0 clamp(16px,2vw,28px)", marginTop: "clamp(40px,5vw,64px)", borderTop: "1px solid #3E3229" }}>
            {arr(v.rwTabs).map((t, $index) => (<Fragment key={$index}>
              <button className="iw-focus-1" type="button" role="tab" id={t?.tid} aria-selected={t?.sel} aria-controls="rw-panel" onClick={t?.on} style={sx(`appearance:none;flex:1 1 220px;display:flex;align-items:center;gap:14px;margin-top:-1px;padding:16px 0;background:none;border:0;border-top:1px solid ${t?.line ?? ""};text-align:left;cursor:pointer;transition:border-color .25s ease`)}>
                <img src={t?.img} alt="" loading="lazy" style={{ flex: "0 0 48px", width: "48px", height: "60px", objectFit: "cover" }} />{" "}
                <span style={{ minWidth: "0" }}>
                  <span style={sx(`display:block;font-family:'Marcellus',serif;font-size:21px;line-height:1.15;color:${t?.nc ?? ""};transition:color .25s ease`)}>{t?.names}
                  </span>
                  <span style={{ display: "block", marginTop: "4px", fontFamily: "'Nunito Sans',sans-serif", fontSize: "12px", color: "#9C9289" }}>{t?.place}
                  </span>
                </span>
              </button>
            </Fragment>))}
          </div>
          <p style={{ margin: "24px 0 0", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>Illustrative couples and quotes, shown with PTaufiq Photography images. Real couples will be featured with their permission.
          </p>
        </div>
      </section>
      <section ref={v.cnRef} data-screen-label="10 Connected" aria-labelledby="cn-h" style={{ background: "rgba(18,14,11,.6)", padding: "clamp(96px,11vw,156px) 0", borderTop: "1px solid #241C17", borderBottom: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,56px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px clamp(48px,7vw,112px)" }}>
          <div style={{ flex: "1 1 360px", maxWidth: "500px" }}>
            <p data-rv="up" style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#C9A96E" }}>Why one place
            </p>
            <h2 id="cn-h" data-rv="up" data-rv-d="80" style={{ margin: "24px 0 0", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(36px,4.4vw,64px)", lineHeight: "1.07", letterSpacing: "-.01em", color: "#F4EEE4", textWrap: "balance" }}>Connected, not scattered.
            </h2>
            <p data-rv="up" data-rv-d="140" style={{ margin: "24px 0 0", fontSize: "17px", lineHeight: "1.65", color: "#C5BAB0", textWrap: "pretty" }}>Every wedding starts the same way: a forwarded quote, a family group, a spreadsheet, a voice note from Nani. When those pieces know about each other, nothing has to be remembered twice.
            </p>
            <button className="iw-hover-c iw-focus-a" type="button" onClick={v.cnToggle} aria-pressed={v.cnPressed} style={{ appearance: "none", display: "inline-flex", alignItems: "center", marginTop: "32px", minHeight: "50px", padding: "0 24px", background: "transparent", border: "1px solid #C9A96E", borderRadius: "2px", color: "#F4EEE4", fontFamily: "'Nunito Sans',sans-serif", fontSize: "14px", fontWeight: "700", letterSpacing: ".03em", cursor: "pointer", transition: "background-color .25s ease,color .25s ease" }}>{v.cnLabel}
            </button>
          </div>
          <div aria-live="polite" style={sx(`flex:1.3 1 460px;min-width:0;position:relative;height:${v.stageH ?? ""}`)}>
            <div aria-hidden="true" style={sx(`position:absolute;top:-18px;bottom:-18px;left:calc(50% - min(210px, 41%) - 18px);width:calc(min(420px, 82%) + 36px);border:1px solid #3E3229;border-radius:6px;opacity:${v.cnPanelOp ?? ""};transition:opacity .6s ease .35s`)} />
            {arr(v.frags).map((f, $index) => (<Fragment key={$index}>
              <div style={sx(`position:absolute;left:${f?.l ?? ""};top:${f?.t ?? ""};width:min(420px, 82%);transform:rotate(${f?.r ?? ""});transition:left ${v.cnDur ?? ""} cubic-bezier(.65,0,.25,1),top ${v.cnDur ?? ""} cubic-bezier(.65,0,.25,1),transform ${v.cnDur ?? ""} cubic-bezier(.65,0,.25,1),background-color .6s ease,border-color .6s ease;transition-delay:${f?.d ?? ""};background:${f?.bg ?? ""};border:1px solid ${f?.bd ?? ""};border-radius:3px;padding:12px 16px`)}>
                <div style={{ display: "grid" }}>
                  <span style={sx(`grid-area:1/1;opacity:${f?.oa ?? ""};transition:opacity .35s ease;transition-delay:${f?.d ?? ""}`)}>
                    <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#9C9289" }}>{f?.la}
                    </span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", lineHeight: "1.45", color: "#C5BAB0" }}>{f?.ta}
                    </span>
                  </span>{" "}
                  <span style={sx(`grid-area:1/1;opacity:${f?.ob ?? ""};transition:opacity .5s ease;transition-delay:${f?.d2 ?? ""}`)}>
                    <span style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: ".15em", textTransform: "uppercase", color: "#C9A96E" }}>{f?.lb}
                    </span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "14.5px", lineHeight: "1.45", color: "#EDE3D3" }}>{f?.tb}
                    </span>
                  </span>
                </div>
              </div>
            </Fragment>))}
          </div>
        </div>
      </section>
      <section data-screen-label="11 Invitation" aria-labelledby="end-h" style={{ position: "relative", minHeight: "min(92svh,860px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0C0907", color: "#F4EEE4" }}>
        <div data-rv="mask" aria-hidden="true" style={{ position: "absolute", inset: "0" }}>
          <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/wedding-couple-sunset-ptaufiq-photography.jpg" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 35%" }} />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(12,9,7,.8) 0%,rgba(12,9,7,.42) 46%,rgba(12,9,7,.08) 100%)" }} />
        </div>
        <div style={{ position: "relative", width: "100%", maxWidth: "1320px", margin: "0 auto", padding: "clamp(120px,16vh,180px) clamp(20px,4vw,56px) clamp(64px,10vh,112px)" }}>
          <h2 id="end-h" data-rv="up" style={{ margin: "0", maxWidth: "11em", fontFamily: "'Marcellus',serif", fontWeight: "400", fontSize: "clamp(40px,5.6vw,92px)", lineHeight: "1.04", letterSpacing: "-.012em", color: "#F4EEE4", textWrap: "balance" }}>Make room for the moments you’ll remember.
          </h2>
          <p data-rv="up" data-rv-d="100" style={{ margin: "28px 0 0", maxWidth: "30em", fontSize: "clamp(16px,1.25vw,19px)", lineHeight: "1.6", color: "#EDE3D3", textWrap: "pretty" }}>Bring your plans, your people and your taste into one place, with Noor beside you, and spend more of your wedding actually in it.
          </p>
          <div data-rv="up" data-rv-d="180" style={{ marginTop: "36px" }}>
            <a className="iw-hover-2 iw-active-3 iw-focus-4" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 34px", background: "#F4EEE4", color: "#1E1915", fontSize: "15px", fontWeight: "700", letterSpacing: ".03em", textDecoration: "none", borderRadius: "2px", transition: "background-color .25s ease,transform .2s ease" }}>Start planning
            </a>
          </div>
        </div>
        <p style={{ position: "absolute", right: "clamp(20px,4vw,56px)", bottom: "20px", margin: "0", fontSize: "12px", color: "#C5BAB0" }}>Photography: PTaufiq Photography
        </p>
      </section>
      <footer data-screen-label="12 Footer" style={{ background: "transparent", color: "#C5BAB0", borderTop: "1px solid #241C17" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "72px clamp(20px,4vw,56px) 36px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "48px" }}>
            <div style={{ flex: "1 1 300px", maxWidth: "420px" }}>
              <span style={{ display: "flex", fontFamily: "'Marcellus',serif", fontSize: "26px", letterSpacing: ".08em", color: "#EDE3D3" }}>INDIAN
                <span style={{ color: "#C9A96E" }}>WEDDINGS
                </span>
              </span>
              <p style={{ margin: "18px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#C5BAB0" }}>A considered way to plan a wedding that feels entirely yours.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 80px" }}>
              <nav aria-label="Explore">
                <p style={{ margin: "0 0 10px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>Explore
                </p>
                <a className="iw-hover-0 iw-focus-1" href="#open-dates" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Open dates
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="#experience" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>The experience
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="#advisor" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>{v.advNav}
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="#planning" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Planning
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="#celebrations" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Celebrations
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="#vendors" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Vendors
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="#real-weddings" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Real weddings
                </a>
              </nav>
              <nav aria-label="Your wedding">
                <p style={{ margin: "0 0 10px", fontSize: "11px", fontWeight: "700", letterSpacing: ".16em", textTransform: "uppercase", color: "#9C9289" }}>Your wedding
                </p>
                <a className="iw-hover-0 iw-focus-1" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Start planning
                </a>{" "}
                <a className="iw-hover-0 iw-focus-1" href="IndianWeddings%20Couples%20Web%20App%20V2.html" style={{ display: "flex", alignItems: "center", minHeight: "40px", fontSize: "15px", color: "#EDE3D3", textDecoration: "none" }}>Sign in
                </a>
              </nav>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px 32px", marginTop: "64px", paddingTop: "24px", borderTop: "1px solid #241C17", fontSize: "12px", lineHeight: "1.6", color: "#9C9289" }}>
            <span>© 2026 IndianWeddings
            </span>{" "}
            <span>All photography by PTaufiq Photography, used for design review. These are not IndianWeddings couples.
            </span>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
