import Navigation from "../components/ui/Nav";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import PartThree from "../components/PartThree";
import Icons from "../components/ui/Icons";
import style from "./MainStyles.module.css";

const Main = () => {
  return (
    <>
      <section>
        <div className={style["nav-bar-top"]}></div>
        <Navigation />
      </section>
      <Header />
      <div className={style["bodyHeight"]}>
        <Icons />
        <PartThree />
      </div>
      <Footer />
    </>
  );
};
export default Main;
