import { Component } from 'react';
import LandingLogic from './landingLogic';
import LandingView from './LandingView';

// Hosts LandingLogic the same way the design tool did: the logic object owns
// state and lifecycle, this component re-renders the view when it changes.
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { version: 0 };
    this.logic = new LandingLogic(props);
    this.logic.__host = this;
  }

  __setLogicState(update, cb) {
    const prev = this.logic.state;
    const patch = typeof update === 'function' ? update(prev) : update;
    this.logic.state = { ...prev, ...patch };
    this.setState(s => ({ version: s.version + 1 }), cb);
  }

  componentDidMount() {
    this.logic.componentDidMount();
  }

  componentDidUpdate(prevProps) {
    this.logic.props = this.props;
    this.logic.componentDidUpdate(prevProps);
  }

  componentWillUnmount() {
    this.logic.componentWillUnmount();
  }

  render() {
    this.logic.props = this.props;
    const v = { ...this.props, ...this.logic.renderVals() };
    return <LandingView v={v} />;
  }
}
