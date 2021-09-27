import React from "react";
import { Parallax } from "react-parallax";
import { Button } from "react-bootstrap";
import style from "./HeaderStyle.module.css";
import headerImg from "../../images/headerImg.jpg";

const Header = () => {
  const imageDemo = headerImg;
  return (
    <>
      <div className={style["styles"]}>
        <Parallax
          bgImage={imageDemo}
          className={style["parallax-img"]}
          strength={200}
        >
          {/* blur={{ min: -11, max: 11 }} */}
          <div className={style["header-border-1"]}>
            <div className={style["header-border-2"]}>
              <section>
                <div className={style["parallaxHeight"]}>
                  <div className={style["innerHtml"]}>
                    <b>Header</b> Title
                  </div>
                  <aside className={style["header-aside-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </aside>
                  <aside>
                    <Button className={style["header-btn"]} variant="light">
                      Click Me
                    </Button>
                  </aside>
                </div>
              </section>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};
export default Header;
