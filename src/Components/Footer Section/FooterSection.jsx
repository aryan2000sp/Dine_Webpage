import { ReactComponent as Logo } from "../../images/logo.svg";

const FooterSection = () => {
  return (
    <footer className="footer-section flex-col flex-col-ai-c">
      <div className="footer-section-logo">
        <Logo className="logo" />
      </div>
      <div className="footer-section-main flex-col flex-col-ai-c">
        <article className="col-1 col">
          <h3 className="light-heading">Marthwaite, Sedbergh</h3>
          <h3 className="light-heading">Cumbria</h3>
          <h3 className="light-heading">+00 44 123 4567</h3>
        </article>
        <article className="col-2 col">
          <h3 className="light-heading">OPEN TIMES</h3>
          <h3 className="light-heading">MON - FRI: 09:00 AM - 10:00 PM</h3>
          <h3 className="light-heading">SAT - SUN: 09:00 AM - 11:30 PM</h3>
        </article>
      </div>
    </footer>
  );
};

export default FooterSection;
