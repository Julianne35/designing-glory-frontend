import ImageOne from "../../images/texas.jpg";
import ImageTwo from "../../images/newbreed.jpg";
import ImageThree from "../../images/port.jpg";
import { Parallax } from "react-parallax";
import { Button } from "react-bootstrap";
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
              <div id="texas" className={styles["flex-wrap"]}>
                <div className={styles["art-wrapper"]}>
                  <article className={styles["img-one"]}>
                    <Parallax
                      bgImage={imgOne}
                      strength={100}
                      // blur={{ min: -5, max: 7 }}
                    >
                      <div className={styles["parallaxHeight"]}>
                        <h5>Texas-Blessings Website</h5>
                        <div className={styles["content-one"]}>
                          <Button className="btn"><a href="http://jgraphicdesigns.com/tmp/texas-blessings.com/" target="blank">View Website</a></Button>
                        </div>
                      </div>
                    </Parallax>
                  </article>  
                </div>
              </div>
              <div id="newbreed" className={styles["flex-wrap"]}>
                <div className={styles["art-wrapper"]}>
                  <article className={styles["img-two"]}>
                    <Parallax
                      bgImage={imgTwo}
                      strength={50}
                      // blur={{ min: -5, max: 7 }}
                    >
                      <div className={styles["parallaxHeight"]}>
                        <h5>New Breed Rising Website</h5>
                        <div className={styles["content-two"]}>
                          <Button className="btn"><a href="https://newbreedrising.org/" target="blank">View Website</a></Button>
                        </div>
                      </div>
                    </Parallax>
                  </article>
                </div>
              </div>
              <div id="graphicdesign" className={styles["flex-wrap"]}>
                <div className={styles["art-wrapper"]}>
                  <article className={styles["img-three"]}>
                    <Parallax
                      bgImage={imgThree}
                      strength={300}
                      className="bg-three"
                    >
                      <div className={styles["parallaxHeight"]}>
                        <h5>JGraphic Designs Website</h5>
                        <div className={styles["content-three"]}> 
                          <Button className="btn"><a href="http://jgraphicdesigns.com/" target="blank">View Website</a></Button>
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
