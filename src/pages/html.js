import Header from "../Component/header";
import Footer from "../Component/footer";
import MainContent from "../Component/MainContent";
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML PAGE</title>
        <meta name="description" content="######################" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML PAGE" />
      <Footer />
    </>
  );
};

export default Html;
