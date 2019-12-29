import React from "react";

import css from "./IntroImage.scss";

export class IntroImage extends React.Component {
  state = {
    lamp: "golden"
  };
  render() {
    return (
      <div className={css.Container}>
        <div className={css.ChooseBlock}>
          <p className={css.Text}>Выберите цвет светильника</p>
          <div className={css.Points}>
            <div
              className={css.Point + " " + css.Point_golden}
              onClick={() => this.setState({ lamp: "golden" })}
            />
            <div
              className={css.Point + " " + css.Point_white}
              onClick={() => this.setState({ lamp: "white" })}
            />
            <div
              className={css.Point + " " + css.Point_black}
              onClick={() => this.setState({ lamp: "black" })}
            />
            <div
              className={css.Point + " " + css.Point_grey}
              onClick={() => this.setState({ lamp: "grey" })}
            />
          </div>
        </div>
        <img className={css.ManImage} src="/1_block/man.png" alt="man" />
        <div className={css.Lamp}>
          <img
            className={css.LampImage}
            src={`/1_block/colored_lamps/${this.state.lamp}.png`}
            alt="lamp"
          />
        </div>
      </div>
    );
  }
}

export default IntroImage;
