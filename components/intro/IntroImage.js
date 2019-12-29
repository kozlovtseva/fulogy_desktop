import React from "react";

export class IntroImage extends React.Component {
  state = {
    lamp: "golden"
  };
  render() {
    return (
      <div className="Container">
        <div className="ChooseBlock">
          <p className="Text">Выберите цвет светильника</p>
          <div className="Points">
            <div
              className="Point Gold"
              onClick={() => this.setState({ lamp: "golden" })}
            />
            <div
              className="Point White"
              onClick={() => this.setState({ lamp: "white" })}
            />
            <div
              className="Point Black"
              onClick={() => this.setState({ lamp: "black" })}
            />
            <div
              className="Point Grey"
              onClick={() => this.setState({ lamp: "grey" })}
            />
          </div>
        </div>
        <img className="ManImage" src="#" alt="man" />
        <img
          className="LampImage"
          src={`/colored_lamps/${this.state.lamp}.png`}
          alt="lamp"
        />
      </div>
    );
  }
}

export default IntroImage;
