import React from 'react';
import Select from 'react-select-me';

// IMPORTANT If you want to provide default styles you have to import them
import 'react-select-me/lib/ReactSelectMe.css';

const options = [
  { value: 1, label: 'Europe' },
  { value: 2, label: 'Asia' },
  { value: 3, label: 'US' },
  { value: 4, label: 'Australia' },
];

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (

      <div className="template">

        <h3>Please select your Region:</h3>
        <Select options={options} value={this.state.value} onChange={this.onChange} />

      </div>
    );
  }
}
