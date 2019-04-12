import React from "react";
import { withRouter } from "react-router-dom";

const divStyle = {
  backgroundColor: "#c1ced9",
  padding: "50px",
  margin: "50px",
  marginTop: "0px"
};

class BillPage extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>Welcome!</h1>
        <h1>Get Started by clicking one of the navigation buttons above.</h1>
      </div>
    );
  }
}

export default withRouter(BillPage);
