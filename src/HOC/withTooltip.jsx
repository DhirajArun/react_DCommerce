import React from "react";

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      isTooltip: false,
    };

    constructor(props) {
      super(props);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      this.setState({ isTooltip: true });
    }
    handleMouseLeave() {
      this.setState({ isTooltip: false });
    }
    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Component {...this.props} isTooltip={this.state.isTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
