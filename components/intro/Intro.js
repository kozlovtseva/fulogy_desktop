import IntroImage from "./IntroImage.js";
import Button from "../UI/Button";
import PlayButton from "../UI/PlayButton";

import css from "./Intro.scss";

const Intro = () => {
  return (
    <div className={css.Container}>
      <div className={css.Info}>
        <h1 className={css.Title}>
          Премиальные сенсорные светильники для кухни
        </h1>
        <p className={css.Text}>
          <span className={css.Text_colored}>8 лет </span>
          оснощаем Ваши кухни нашими светильниками по цене производителя.
        </p>
        <div className={css.Video}>
          <div className={css.Video__Text}>
            <p className={css.Text + " " + css.Text_small}>
              <span className={css.Text_colored}>Посмотрите </span>
              видеопрезентацию о наших светильниках!
            </p>
          </div>
          <PlayButton />
        </div>
        <Button title="Онлайн конструктор" />
      </div>
      <IntroImage />
    </div>
  );
};

export default Intro;
