import Header from "./header/Header.js";
import css from "./Layout.scss";

const Layout = props => {
    return (
        <div className={css.Container}>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
