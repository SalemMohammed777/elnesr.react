import Header from "../Component/header";
import Footer from "../Component/footer";
import MainContent from "../Component/MainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS PAGE</title>
        <meta name="description" content="CSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS" />
      </Helmet>
      <Header />
      <MainContent pageName="CSS PAGE" />
      <Footer />
    </>
  );
};

export default Css;
