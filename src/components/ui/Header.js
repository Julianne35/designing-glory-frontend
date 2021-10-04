import React from "react";
import { Parallax } from "react-parallax";
import style from "./HeaderStyle.module.css";
import headerImg from "../../images/gold.svg";
import { Button } from "react-bootstrap";

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
                    <b>Designing </b>Glory
                  </div>
                  <aside className={style["header-aside-text"]}>
                    <p>
                      Designed and established with your goals and needs in
                      mind.
                    </p>
                    <div className={style["header-sub-text"]}>
                      <em>
                        Dedicated, developed, responsive websites and
                        applications.
                      </em>
                    </div>
                    <p>
                      Portfolio, Small Business, Blog, Online or Personalized
                      App, with Designing Glory, rest assured you are in good
                      hands.
                    </p>
                    <Button variant="dark">
                      <a
                        href="https://calendly.com/juliannedrager/website-app-consoltation"
                        target="blank"
                        className="a--btn-dark"
                      >
                        Sehedule Consultion
                      </a>
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
