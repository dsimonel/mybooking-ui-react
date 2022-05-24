import { useContext } from "react";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";
import "./navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  function traducir() {
    console.log("Cambiar l");
    locale === "en" ? changeLocale("es") : changeLocale("en");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Lungta Booking</span>
        <div className="navItems">
          <button className="navButton">{t("register")}</button>
          <button className="navButton">{t("login")}</button>
          <button className="navButton" onClick={() => traducir()}>
            {t('language')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
