import Layout from "../components/Layout.js";
import Intro from "../components/intro/Intro.js";
import Price from "../components/price/Price.js";

const Main = () => {
    return (
        <>
            <Layout>
                <Intro />
                <Price />
            </Layout>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                }
            `}</style>
        </>
    );
};

export default Main;
