import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/components/sidebar.sass";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#fff",
  width: "11rem",
  textAlign: "left",
  display: "flex",
  justifyContent: "flex-start",
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
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="sidebar-content">
      <div className="dashborad-content">
        <NavLink
          to="/"
          className="sidebar-Navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <CustomButton startIcon={<DashboardIcon />}>Dashboard</CustomButton>
        </NavLink>
        <NavLink
          to="/analytics"
          className="sidebar-Navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <CustomButton startIcon={<InsightsIcon />}>Analytics</CustomButton>
        </NavLink>
      </div>
      <div className="sidebar-refresh">
        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={handleRefresh}
          sx={{ marginTop: "auto", marginBottom: "20px" }}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
