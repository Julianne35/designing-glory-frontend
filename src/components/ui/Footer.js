import FormField from "./FormField";
import style from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <>
      <section className={style["footer-section"]}>
        <div className={style["footer-body"]}>
          <FormField />
        </div>
        <footer className={style["footer-text"]}>© 2021 Designinglory.com</footer>
      </section>
    </>
  );
};
export default Footer;
