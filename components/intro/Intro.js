import IntroImage from "./IntroImage.js";
import Button from "../UI/Button";
import PlayButton from "../UI/PlayButton";

const Intro = () => {
  return (
    <div className="Container">
      <div className="Info">
        <h1 className="Title">Премиальные сенсорные светильники для кухни</h1>
        <p className="Text">
          <span class="Text_colored">8 лет</span>
          оснощаем Ваши кухни нашими светильниками по цене производителя.
        </p>
        <p className="Text Text_small">
          <span class="Text_colored">Посмотрите</span>видеопрезентацию о наших
          светильниках!
        </p>
        <PlayButton />
        <Button onClick={handleClick} title="Онлайн конструктор" />
      </div>
      <IntroImage />
    </div>
  );
};

export default Intro;
