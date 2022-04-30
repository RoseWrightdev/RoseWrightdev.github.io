import React, { Component } from "react";

import * as THREE from "three";


class ThreejsPreview extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  }

export default ThreejsPreview