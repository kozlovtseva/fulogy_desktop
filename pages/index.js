import Layout from "../components/Layout.js";
import Intro from "../components/intro/Intro.js";

const Main = () => {
  return (
    <>
      <Layout>
        <Intro />
      </Layout>
      <style jsx global>{`
        body {
          box-sizing: border-box;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Main;
