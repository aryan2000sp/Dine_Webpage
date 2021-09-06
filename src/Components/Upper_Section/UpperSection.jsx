import img1 from "../../images/homepage/enjoyable-place-mobile@2x.jpg";
import img2 from "../../images/homepage/locally-sourced-mobile@2x.jpg";
import { ReactComponent as Curve1 } from "../../images/patterns/pattern-curve-top-right.svg";
import { ReactComponent as Curve2 } from "../../images/patterns/pattern-curve-top-left.svg";
import { ReactComponent as Divide } from "../../images/patterns/pattern-divide.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const UpperSection = () => {
  // The intersection observer for the two articles
  const [article1, inView1] = useInView({
    threshold: 1,
    rootMargin: "400px",
    triggerOnce: true,
  });

  const [article2, inView2] = useInView({
    threshold: 1,
    rootMargin: "400px",
    triggerOnce: true,
  });

  console.log(inView1);
  console.log(inView2);
  return (
    <section className="upper-section">
      {/* ---------------------------------------------- */}
      {/* First Article */}
      <article
        ref={article1}
        className="upper-section-col-1 upper-section-col flex-col flex-col-ai-c"
      >
        {/* ---------------------------------------------- */}
        {/* The curve design*/}
        <div className="design-curve-1">
          <Curve1 className="upper-section-curve-1" />
        </div>
        {/* ---------------------------------------------- */}
        {/* Image div */}
        <motion.div
          className="image1 img"
          initial={{ x: "-100vw", opacity: 0 }}
          // Animate only when inView
          animate={{
            x: inView1 ? "0" : "-100vw",
            opacity: inView1 ? 1 : 0,
          }}
          transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
        >
          <img src={img1} alt="enjoyable-place-mobile@2x" />
        </motion.div>

        {/* ---------------------------------------------- */}
        {/* Info div */}
        <div className="upper-section-info">
          <motion.div
            className="info info-1 flex-col flex-col-ai-c"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{
              x: inView1 ? "0vw" : "100vw",
              opacity: inView1 ? 1 : 0,
            }}
            transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
          >
            <Divide className="divide" />
            <h2>Enjoyable place for all the family</h2>
            <p className="mobile-paragraph">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </motion.div>
        </div>
      </article>
      {/* ---------------------------------------------- */}
      {/* Second Article */}
      <article
        ref={article2}
        className="upper-section-col-2 upper-section-col flex-col flex-col-ai-c"
      >
        {/* ---------------------------------------------- */}
        {/* The curve design */}
        <div className="design-curve-2">
          <Curve2 className="upper-section-curve-2" />
        </div>

        {/* ---------------------------------------------- */}
        {/* The image div */}
        <div style={{ overflow: inView2 ? "visible" : "hidden" }}>
          <motion.div
            className="image2 img"
            initial={{ x: "100vw", opacity: 0, overflow: "hidden" }}
            animate={{
              x: inView2 ? "0vw" : "100vw",
              opacity: inView2 ? 1 : 0,
            }}
            transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
          >
            <img
              src={img2}
              alt="locally-sourced-mobile@2x"
              className="image2"
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------- */}
        {/* The info div */}
        <motion.div
          className="upper-section-info"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{
            x: inView2 ? "0vw" : "-100vw",
            opacity: inView2 ? 1 : 0,
          }}
          transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
        >
          <div className="info info-2 flex-col flex-col-ai-c">
            <Divide className="divide" />
            <h2>The most locally sourced food</h2>
            <p className="mobile-paragraph">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default UpperSection;
