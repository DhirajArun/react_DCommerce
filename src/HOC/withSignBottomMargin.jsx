import React from "react";

export default function withSignBottomMargin(Component) {
  class withSignBottomMargin extends React.Component {
    render() {
      const { btm, ...rest } = this.props;
      return (
        <div className={btm ? "btm-oo" : ""}>
          <Component {...rest} />
        </div>
      );
    }
  }
  withSignBottomMargin.defaultProps = {
    btm: true,
  };
  return withSignBottomMargin;
}
