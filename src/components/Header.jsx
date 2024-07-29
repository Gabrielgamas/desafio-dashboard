import "../styles/components/header.sass";
import DatasetIcon from "@mui/icons-material/Dataset";
import MenuListComposition from "./MenuList";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        {" "}
        <DatasetIcon fontSize="large" />
        DataAnalytics
      </div>
      <div className="header-container">
        <div className="header-content">
          <MenuListComposition />
        </div>
      </div>
    </div>
  );
};

export default Header;
