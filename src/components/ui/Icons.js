import ImageOne from "../../images/beach1.jpg";
import ImageTwo from "../../images/beach2.jpg";
import ImageThree from "../../images/beach3.jpg";
import { Parallax } from "react-parallax";
import styles from "./IconsStyles.module.css";

const Icons = () => {
  const imgOne = ImageOne;
  const imgTwo = ImageTwo;
  const imgThree = ImageThree;
  return (
    <>
      <section className={styles["parttwo-section"]}>
        <div className={styles.stripe}>
          <aside className={styles["parttwo-body"]}>
            <div className={styles["content-container"]}>
              <div className={styles["flex-wrap"]}>
                <div className={styles["art-wrapper"]}>
                  <article className={styles["img-one"]}>
                    <Parallax bgImage={imgOne} strength={200}>
                      <div className={styles["parallaxHeight"]}>
                        <h5>Lorem ipsum</h5>
                        <div className={styles.content}>
                          <h6>
                            <b>Minim veniam</b>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat
                          </p>
                        </div>
                      </div>
                    </Parallax>
                  </article>
                </div>
              </div>
              <div className={styles["flex-wrap"]}>
                <div className={styles["art-wrapper"]}>
                  <article className={styles["img-two"]}>
                    <Parallax bgImage={imgTwo} strength={200}>
                      <div className={styles["parallaxHeight"]}>
                        <h5>Lorem ipsum</h5>
                        <div className={styles.content}>
                          <h6>
                            <b>Minim veniam</b>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat
                          </p>
                        </div>
                      </div>
                    </Parallax>
                  </article>
                </div>
              </div>
              <div className={styles["flex-wrap"]}>
                <div className={styles["art-wrapper"]}>
                  <article className={styles["img-three"]}>
                    <Parallax bgImage={imgThree} strength={200}>
                      <div className={styles["parallaxHeight"]}>
                        <h5>Lorem ipsum</h5>
                        <div className={styles.content}>
                          <h6>
                            <b>Minim veniam</b>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat
                          </p>
                        </div>
                      </div>
                    </Parallax>
                  </article>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
export default Icons;
