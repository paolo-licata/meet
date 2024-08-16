import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: '1px',
      borderStyle: 'solid',
      fontWeight: 'bolder',
      borderRadius: '10px',
      borderColor: this.color,
      textAlign: 'center',
      fontSize: '12px',
      margin: '10px 0',
      padding: '10px',
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(57, 125, 191)'; // blue
    this.bgColor = 'rgb(194, 217, 239)'; // light blue
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(227, 55, 41)'; // red
    this.bgColor = 'rgb(239, 197, 194)'; // light red
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(239, 154, 10)'; // orange
    this.bgColor = 'rgb(255, 225, 140)'; // light orange
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
