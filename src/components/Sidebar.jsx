import { Button } from "@mui/material";
import "../styles/components/sidebar.sass";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#636363",
  width: "11rem",
  textAlign: "left", // Alinha o texto à esquerda
  display: "flex", // Necessário para aplicar text-align corretamente
  justifyContent: "flex-start", // Alinha o texto à esquerda no eixo horizontal
  paddingLeft: "16px",
  marginBottom: "5px",
  "&:hover": {
    color: "#74319b",
    backgroundColor: "#b0a0d63a",
  },
});

const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <div className="dashborad-content">
        <h4>Dashboard</h4>
        <CustomButton startIcon={<DashboardIcon />} className="custom-button">
          Default
        </CustomButton>
        <CustomButton startIcon={<InsightsIcon />} className="custom-button">
          Analytics
        </CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
