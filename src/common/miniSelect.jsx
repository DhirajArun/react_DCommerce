import React, { Component } from "react";
import SelectArrow from "./selectArrow";

class MiniSelect extends Component {
  state = { isClicked: false };
  selectedOption = React.createRef();

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    if (this.selectedOption.current.contains(e.target)) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  render() {
    const { options, selected, onSelect } = this.props;
    return (
      <div ref={this.selectedOption} className="mini-select">
        <div className="mini-select-title-wrapper">
          <p className="mini-select-title">{options[selected].sLabel}</p>
          <SelectArrow />
        </div>
        <ul
          className="mini-select"
          style={{
            display: this.state.isClicked ? "block" : "none",
          }}
        >
          {options.map((option, index) => (
            <li
              key={option.sLabel}
              className="mini-select"
              onClick={() => {
                onSelect(index);
                this.setState({ isClicked: false });
              }}
            >
              {option.fLabel}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MiniSelect;
