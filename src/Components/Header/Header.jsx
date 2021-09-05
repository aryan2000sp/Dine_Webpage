import { ReactComponent as Logo } from "../../images/logo.svg";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <section className="header-section">
      <article className="header-section-article flex-col flex-col-ai-c">
        <div className="logo">
          <Logo />
        </div>
        <div className="info flex-col flex-col-ai-c">
          <motion.h1
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
          >
            Exquisite dining <br /> since 1989
          </motion.h1>
          <motion.div
            className="paragraph"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 70 }}
          >
            <p className="mobile-paragraph">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </motion.div>
          <motion.button
            className="btn-dark"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 70 }}
          >
            BOOK A TABLE
          </motion.button>
        </div>
      </article>
    </section>
  );
};

export default Header;
