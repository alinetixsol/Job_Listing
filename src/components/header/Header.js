import desktopBg from "../../assets/images/bg-header-desktop.svg";
import mobileBg from "../../assets/images/bg-header-mobile.svg";
import useDataStore from "../../store/store";
import Filters from "../filters/Filters";

export default function Header() {
  const dataLength = useDataStore((store) => store.languageFilters);
  return (
    <div className="header-container">
      <div className="backgroun-image">
        <img
          src={desktopBg}
          alt="background color"
          width={"100%"}
          className="bgDesktop"
        />
        <img
          src={mobileBg}
          alt="background color"
          width={"100%"}
          className="bgMobile"
        />
      </div>
      {dataLength.length > 0 && <Filters />}
    </div>
  );
}
