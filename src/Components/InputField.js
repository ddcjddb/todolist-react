import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleAdd(text) {
    if (text.length > 0) {
      this.props.handleAdd(text);
    }
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        <input
          className="input-field"
          type="text"
          value={this.state.text}
          placeholder="请输入事项"
          onChange={this.handleChange}
        />
        <input
          className="input-button"
          type="submit"
          value="添加"
          onClick={() => this.handleAdd(this.state.text)}
        />
      </div>
    );
  }
}
