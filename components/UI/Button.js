import css from "./Button.scss";

const Button = ({ onClick, title }) => (
    <>
        <button className={css.Button} onClick={onClick}>
            {title}
        </button>
    </>
);

export default Button;
