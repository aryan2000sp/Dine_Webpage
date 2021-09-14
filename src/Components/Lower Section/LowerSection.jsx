import data from "./data";
import { ReactComponent as Curve } from "../../images/patterns/pattern-curve-top-right.svg";
import { useState } from "react";

const LowerSection = () => {
  const [index, setIndex] = useState(0);
  const displayData = data[index];
  const [activateEvent, setActivateEvent] = useState([true, false, false]);

  const handleDisplayEvent = (index) => {
    if (index === 0) {
      setActivateEvent([true, false, false]);
      setIndex(0);
    } else if (index === 1) {
      setActivateEvent([false, true, false]);
      setIndex(1);
    } else if (index === 2) {
      setActivateEvent([false, false, true]);
      setIndex(2);
    }
  };

  console.log(displayData.img[0]);
  return (
    <section className="lower-section flex-col flex-col-ai-c">
      {/* Div for the curve design */}
      <div className="wrapper">
        <div className="lower-section-curve-design">
          <Curve />
        </div>
        <div className="lower-section-image">
          {/* Use picture tag to change the image according to viewport size */}
          <picture>
            <source media="(min-width: 1300px)" srcSet={displayData.img[2]} />
            <source media="(min-width: 768px)" srcSet={displayData.img[1]} />
            <source media="(min-width: 375px)" srcSet={displayData.img[0]} />
            <img src={displayData.img[0]} alt={displayData.title} />
          </picture>
        </div>

        <div className="lower-section-main flex-col flex-col-ai-c">
          <div className="btn-container flex-col flex-col-ai-c">
            <h3
              className="light-heading headings"
              onClick={() => handleDisplayEvent(0)}
              style={{ opacity: activateEvent[0] ? 1 : 0.5 }}
            >
              FAMILY GATHERING
              {activateEvent[0] && <hr className="under-line" />}
            </h3>
            <h3
              className="light-heading headings"
              onClick={() => handleDisplayEvent(1)}
              style={{ opacity: activateEvent[1] ? 1 : 0.5 }}
            >
              SPECIAL EVENTS
              {activateEvent[1] && <hr className="under-line" />}
            </h3>
            <h3
              className="light-heading headings"
              onClick={() => handleDisplayEvent(2)}
              style={{ opacity: activateEvent[2] ? 1 : 0.5 }}
            >
              SOCIAL EVENTS
              {activateEvent[2] && <hr className="under-line" />}
            </h3>
          </div>
          <article className="info flex-col flex-col-ai-c">
            <h2>{displayData.title}</h2>
            <p className="mobile-paragraph">{displayData.text}</p>
            <button className="btn-dark">BOOK A TABLE</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LowerSection;
