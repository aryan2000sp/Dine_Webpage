import { ReactComponent as Divide } from "../../images/patterns/pattern-divide.svg";
import salmon from "../../images/homepage/salmon-mobile@2x.jpg";
import beef from "../../images/homepage/beef-mobile@2x.jpg";
import chocolate from "../../images/homepage/chocolate-mobile@2x.jpg";
const MiddleSection = () => {
  return (
    <section className="middle-section">
      <div className="middle-section-menu flex-col flex-col-ai-c">
        <div className="title-section">
          <article className="title-menu flex-col flex-col-ai-c">
            <Divide className="divide-design" />
            <h2>A few highlights from our menu</h2>
            <p className="mobile-paragraph">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </article>
        </div>

        <div className="menu-items">
          <article className="menu-item">
            <div className="image-1 img">
              <img src={salmon} alt="salmon-dish" />
            </div>
            <div className="info">
              <h2>Seared Salmon Fillet</h2>
              <p className="mobile-paragraph">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </article>
          <hr className="under-line" />

          <article className="menu-item">
            <div className="image-2 img">
              <img src={beef} alt="beef-dish" />
            </div>
            <div className="info">
              <h2>Rosemary Filet Mignon</h2>
              <p className="mobile-paragraph">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </article>
          <hr className="under-line" />

          <article className="menu-item">
            <div className="image-3 img">
              <img src={chocolate} alt="chocolate-dish" />
            </div>
            <div className="info">
              <h2>Summer Fruit Chocolate Mousse</h2>
              <p className="mobile-paragraph">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
