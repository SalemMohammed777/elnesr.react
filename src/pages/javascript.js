import Header from "../Component/header";
import Footer from "../Component/footer";
import MainContent from "../Component/MainContent";
import { Helmet } from "react-helmet-async";
const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JAVASCRIPT PAGE</title>
        <meta name="description" content="*****************************" />
      </Helmet>
      <Header />
      <MainContent pageName="JAVASCRIPT PAGE" />
      <Footer />
    </>
  );
};

export default Javascript;
