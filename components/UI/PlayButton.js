import css from "./PlayButton.scss";

const PlayButton = ({ onClick }) => (
    <div className={css.External}>
        <div className={css.Internal}>
            <div className={css.Back}>
                <img
                    // className={css.LampImage}
                    src="/icons/media-play-symbol.svg"
                    alt="lamp"
                />
            </div>
        </div>
    </div>
);

export default PlayButton;
