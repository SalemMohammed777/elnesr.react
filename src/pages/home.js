import Header from "../Component/header";
import Footer from "../Component/footer";
import MainContent from "../Component/MainContent";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME PAGE</title>
        <meta name="description" content="HOMEEEEEEEEEEEEEEEEEEEEEE" />
      </Helmet>
      <Header />
      <MainContent pageName="HOME PAGE" />
      <Footer />
    </>
  );
};

export default Home;
