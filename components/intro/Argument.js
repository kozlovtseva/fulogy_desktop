import css from "./Argument.scss";

const Argument = ({ item }) => (
  <div className={css.Argument}>
    <div className={css.Icon}>
      <img src={`/icons/${item.icon}.svg`} alt={item.icon} />
    </div>
    <div className={css.Text}>{item.text}</div>
  </div>
);

export default Argument;
