import NationalityChart from "./NationalityChart";
import SexChart from "./SexChart";
import "../styles/components/dashboardcontent.sass";
import { useState } from "react";
import AgeChart from "./AgeChart";
import WageChart from "./WageCharts";
import { attendees } from "../data/attendees";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";
import CardContinent from "./CardContinent";

const DashboardContent = () => {
  const [selectedContinents, setSelectedContinents] = useState({
    Europa: true,
    América: true,
    Ásia: true,
  });

  const [selectedSex, setSelectedSex] = useState({
    male: true,
    female: true,
  });

  const handleCheckboxChange = (continent) => {
    setSelectedContinents((prevState) => ({
      ...prevState,
      [continent]: !prevState[continent],
    }));
  };

  const handleSexCheckboxChange = (gender) => {
    setSelectedSex((prevState) => ({
      ...prevState,
      [gender]: !prevState[gender],
    }));
  };

  const nationalities = ["Europa", "Ásia", "América"];

  return (
    <div className="dashboard-content">
      <Typography variant="h3" sx={{ color: "#ffffff", fontWeight: "bold" }}>
        Dashboard
      </Typography>
      <div className="card-container">
        {nationalities.map((nationality) => (
          <CardContinent
            key={nationality}
            nationality={nationality}
            attendees={attendees}
          />
        ))}
      </div>
      <Box className="checkbox-container">
        <div className="checkbox-content">
          <Typography variant="h6" sx={{ color: "#ffffff" }}>
            Continentes
          </Typography>
          <FormGroup>
            <Box display="flex" flexDirection="row">
              {Object.keys(selectedContinents).map((continent) => (
                <FormControlLabel
                  key={continent}
                  control={
                    <Checkbox
                      checked={selectedContinents[continent]}
                      onChange={() => handleCheckboxChange(continent)}
                      color="primary"
                    />
                  }
                  label={continent}
                />
              ))}
            </Box>
          </FormGroup>
        </div>

        <div className="checkbox-content">
          <Typography variant="h6" sx={{ color: "#ffffff" }}>
            Sexo
          </Typography>
          <FormGroup>
            <Box display="flex" flexDirection="row">
              {Object.keys(selectedSex).map((gender) => (
                <FormControlLabel
                  key={gender}
                  control={
                    <Checkbox
                      checked={selectedSex[gender]}
                      onChange={() => handleSexCheckboxChange(gender)}
                      color="primary"
                    />
                  }
                  label={gender === "male" ? "Homem" : "Mulher"}
                />
              ))}
            </Box>
          </FormGroup>
        </div>
      </Box>
      <div className="chart">
        <NationalityChart selectedContinents={selectedContinents} />
        <SexChart
          selectedSex={selectedSex}
          selectedContinents={selectedContinents}
        />
      </div>

      <AgeChart attendees={attendees} />
      <WageChart attendees={attendees} />
    </div>
  );
};

export default DashboardContent;
