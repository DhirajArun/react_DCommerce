import React, { Component } from "react";
import SelectArrow from "./selectArrow";
import InputError from "./inputError";

// The name CSelect means CustomSelect

class CSelect extends Component {
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

  getClassName() {
    const { error, maxContent } = this.props;
    let className = maxContent
      ? "c-select-maxcontent sign"
      : "c-select-full sign";
    if (error) {
      return `${className} sign-error`;
    }
    return className;
  }

  render() {
    const { options, name, value, onSelect, error, itemLabelName } = this.props;
    let { displayLabelName } = this.props;
    displayLabelName = displayLabelName ? displayLabelName : itemLabelName;

    return (
      <div ref={this.selectedOption} className="c-select">
        <div className={this.getClassName()}>
          <p className="c-select-title">{options[value][displayLabelName]}</p>
          <SelectArrow />
        </div>
        <InputError error={error} />
        <ul
          className="c-select"
          style={{
            display: this.state.isClicked ? "block" : "none",
          }}
        >
          {options.map((option, index) => (
            <li
              key={option.sLabel}
              className="c-select"
              onClick={() => {
                onSelect({ name, value: index });
                this.setState({ isClicked: false });
              }}
            >
              {option[itemLabelName]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CSelect.defaultProps = {
  itemLabelName: "label",
  maxContent: true,
};

export default CSelect;

//props
//itemLabelName -- name of property
//displayLabelName -- name of property
//onSelect -- for handling change
//selectedValue -- the selected value
//maxContent -- width will be maximum to content default is true
