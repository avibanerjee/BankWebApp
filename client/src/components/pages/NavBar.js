import React from "react";
import { withRouter } from "react-router-dom";

const divStyle = {
  backgroundColor: "#4e74a6",
  padding: "50px",
  margin: "50px",
  marginTop: "0px"
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.routeChangeAcc = this.routeChangeAcc.bind(this);
    this.routeChangeTrans = this.routeChangeTrans.bind(this);
    this.routeChangeBills = this.routeChangeBills.bind(this);
    this.routeChangeATMs = this.routeChangeATMs.bind(this);
  }

  render() {
    //don't render nav bar on login or registration
    const displayNav = !(
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/registration"
    );
    return (
      <div>
        {displayNav ? (
          <div style={divStyle}>
            <h1 style={{ color: "#ffffff" }}>Online Bank</h1>
            <button onClick={this.routeChangeAcc}>Accounts</button>
            <button onClick={this.routeChangeTrans}>Transfers</button>
            <button onClick={this.routeChangeBills}>Pay Bills</button>
            <button onClick={this.routeChangeATMs}>ATMs</button>
          </div>
        ) : (
          <h1 style={divStyle}>Welcome to Online Banking</h1>
        )}
      </div>
    );
  }

  /**
   * Couldn't figure out how to pass var as parameter, so seperate routing per button for now
   */
  routeChangeAcc = () => {
    this.props.history.push({
      uid: this.props.location.state.uID,
      pathname: "/accounts",
      state: { uID: 2 }
    });
  };
  routeChangeTrans() {
    this.props.history.push("transfers");
  }
  routeChangeBills() {
    this.props.history.push("bills");
  }
  routeChangeATMs() {
    this.props.history.push("atms");
    console.log(this.state);
    console.log(this.props);
  }
}

export default withRouter(NavBar);