import Data from "../../data";
import Point from "./Point";
import Button from "../UI/Button";

import css from "./Price.scss";

const Price = () => {
    return (
        <div className={css.Container}>
            <div className={css.LeftSide}>
                <h2 className={css.Title}>стоимость</h2>
                <p className={css.Text}>
                    Стоимость погонного метра светильника fulogy от
                    <span className={css.Text_colored}> 2000 </span>руб.
                </p>
                <h3 className={css.Subtitle}>в цену входит:</h3>
                <Button title="Заказать звонок" />
                <p className={css.Text + " " + css.Text_small}>
                    или звоните по телефону:
                </p>
                <p className={css.Tel}>+7-(800)-505-65-33</p>
                <div className={css.Icons}>
                    <a className={css.Icon} href="#">
                        <img src="/icons/whatsapp.svg" alt="whatsapp" />
                    </a>
                    <a className={css.Icon} href="#">
                        <img src="/icons/viber.svg" alt="viber" />
                    </a>
                    <a className={css.Icon} href="#">
                        <img src="/icons/telegram.svg" alt="telegram" />
                    </a>
                </div>
            </div>
            <div className={css.pricePoints}>
                {Data.pricePoints.map((item, i) => (
                    <Point key={i} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Price;
