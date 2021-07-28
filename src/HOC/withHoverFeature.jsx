import React from "react";

function withHoverFeature(Component, handleHover = () => {}) {
  return class WithHoverFeature extends React.Component {
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
      handleHover(true);
    }
    handleMouseLeave() {
      this.setState({ isTooltip: false });
      handleHover(false);
    }
    render() {
      const type = typeof Component;
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {type === "function" ? (
            <Component {...this.props} isHover={this.state.isTooltip} />
          ) : (
            Component
          )}
        </div>
      );
    }
  };
}

export default withHoverFeature;
