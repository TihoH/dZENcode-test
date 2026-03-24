import logoImg from "../../assets/images/logo/Logo.png";
import clases from "./header.module.css";
import HeaderSearch from "./HeaderSearch";
import HeaderTopMenu from "./HeaderTopMenu";

export default function Header() {

  return (
    <div className={clases.header}>
      <div className={clases.headerLogoSearch}>
        <img className={clases.headerLogo} src={logoImg} alt="logo" />
        <HeaderSearch />
        </div>
        <HeaderTopMenu />
    </div>
  );
}
