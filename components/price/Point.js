import css from "./Point.scss";

const Point = ({ item }) => (
    <div className={css.Point}>
        <div className={css.Number}>{item.number}</div>
        <div className={css.Text}>{item.text}</div>
    </div>
);

export default Point;
