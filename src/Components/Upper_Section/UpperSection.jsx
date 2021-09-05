import img1 from "../../images/homepage/enjoyable-place-mobile@2x.jpg";
import img2 from "../../images/homepage/locally-sourced-mobile@2x.jpg";
import { ReactComponent as Curve1 } from "../../images/patterns/pattern-curve-top-right.svg";
import { ReactComponent as Curve2 } from "../../images/patterns/pattern-curve-top-left.svg";
import { ReactComponent as Divide } from "../../images/patterns/pattern-divide.svg";
const UpperSection = () => {
  return (
    <>
      <section className="upper-section">
        <article className="upper-section-col-1 upper-section-col flex-col flex-col-ai-c">
          <div className="design-curve-1">
            <Curve1 className="upper-section-curve-1" />
          </div>
          <img src={img1} alt="enjoyable-place-mobile@2x" className="image1" />
          <div className="info info-1 flex-col flex-col-ai-c">
            <Divide className="divide" />
            <h2>Enjoyable place for all the family</h2>
            <p className="mobile-paragraph">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </article>
        <article className="upper-section-col-2 upper-section-col flex-col flex-col-ai-c">
          <div className="design-curve-2">
            <Curve2 className="upper-section-curve-2" />
          </div>
          <img src={img2} alt="locally-sourced-mobile@2x" className="image2" />
          <div className="info info-2 flex-col flex-col-ai-c">
            <Divide className="divide" />
            <h2>The most locally sourced food</h2>
            <p className="mobile-paragraph">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </article>
      </section>
      <section style={{ background: "black" }}>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
      </section>
    </>
  );
};

export default UpperSection;
