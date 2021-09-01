import { ReactComponent as Logo } from "../../images/logo.svg";

const Header = () => {
  return (
    <section className="header-section">
      <article className="header-section-article flex-col flex-col-ai-c">
        <div className="logo">
          <Logo />
        </div>
        <div className="info flex-col flex-col-ai-c">
          <h1>
            Exquisite dining <br /> since 1989
          </h1>
          <div className="paragraph">
            <p className="mobile-paragraph">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </div>
          <button className="btn-dark">BOOK A TABLE</button>
        </div>
      </article>
    </section>
  );
};

export default Header;
