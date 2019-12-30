import css from "./Argument.scss";

const Argument = ({ item }) => (
    <div className={css.Argument}>
        <div className={css.Icon}>
            {item.icon === "tap" ? ( //для отдельной стилизации пункта (есть наклон и дополнительный символ)
                <div className={css.TapIcon}>
                    <img
                        className={css.TapImage}
                        src={`/icons/${item.icon}.svg`}
                        alt={item.icon}
                    />
                    <div className={css.Cross} />
                </div>
            ) : (
                <img src={`/icons/${item.icon}.svg`} alt={item.icon} /> //для всех остальных
            )}
        </div>
        <div className={css.Text}>{item.text}</div>
    </div>
);

export default Argument;
