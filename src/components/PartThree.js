import SwiperMode from "./ui/SwiperMode";
import style from "./PartThreeStyles.module.css";

const PartThree = () => {
  return (
    <>
      <section className={style["section-three-a"]}>
          <h1>Lorem ipsum </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque elit ullamcorper dignissim cras tincidunt. Tristique
          magna sit amet purus gravida. Arcu vitae elementum curabitur vitae
          nunc.
        </p>
      </section>
      <div className={style.container}><SwiperMode /></div>
      <section className={style["section-three-b"]}>
          <h1>Lorem ipsum </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque elit ullamcorper dignissim cras tincidunt. Tristique
          magna sit amet purus gravida. Arcu vitae elementum curabitur vitae
          nunc.
        </p>
      </section>
    </>
  );
};
export default PartThree;
