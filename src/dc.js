// Small runtime pieces the converted design relies on.

// Base class for the page logic. Mirrors the design tool's DCLogic contract:
// setState merges into this.state right away (so later reads in the same
// handler see the new value), then asks the host component to re-render.
export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.__host = null;
  }
  setState(update, cb) {
    if (this.__host) this.__host.__setLogicState(update, cb);
  }
  forceUpdate() {
    if (this.__host) this.__host.forceUpdate();
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  /** The flat object the view renders against (merged over props). */
  renderVals() {
    return {};
  }
}

const kebabToCamel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/** Inline CSS text ("a:b;c:d") to a React style object. Objects pass through. */
export function sx(style) {
  if (typeof style !== 'string') return style || undefined;
  const o = {};
  for (const decl of style.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    o[prop.startsWith('--') ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  return o;
}

/** Lists rendered with .map(): anything that isn't an array renders nothing. */
export const arr = list => (Array.isArray(list) ? list : []);
