import FormField from "./FormField";
import style from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <>
      <section className={style["footer-section"]}>
        <div className={style["footer-body"]}>
          <FormField />
        </div>
        <footer className={style["footer-text"]}>@copyright somewebsite.com 2021</footer>
      </section>
    </>
  );
};
export default Footer;
