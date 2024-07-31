import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/components/sidebar.sass";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#fff",
  width: "11rem",
  textAlign: "left", // Alinha o texto à esquerda
  display: "flex", // Necessário para aplicar text-align corretamente
  justifyContent: "flex-start", // Alinha o texto à esquerda no eixo horizontal
  paddingLeft: "16px",
  marginBottom: "5px",
  borderEndEndRadius: "16px",
  borderTopRightRadius: "16px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#232d464a",
    borderEndEndRadius: "16px",
    borderTopRightRadius: "16px",
  },
});

const activeStyle = {
  borderLeft: "4px solid white",
  color: "#fff",
  backgroundColor: "#3aa08c",
  borderEndEndRadius: "16px",
  borderTopRightRadius: "16px",
};

const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <div className="dashborad-content">
        <NavLink
          to="/"
          className="sidebar-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <CustomButton startIcon={<DashboardIcon />}>Dashboard</CustomButton>
        </NavLink>
        <NavLink
          to="/analytics"
          className="sidebar-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <CustomButton startIcon={<InsightsIcon />}>Analytics</CustomButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
