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
  Button,
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

  const [profiles, setProfiles] = useState([]);
  const [profileName, setProfileName] = useState("");
  const [error, setError] = useState("");

  const saveProfile = () => {
    if (profileName.trim() === "") {
      setError("O nome do perfil não pode estar vazio.");
      return;
    }

    if (profiles.length >= 5) {
      setError("Você pode salvar no máximo 5 perfis.");
      return;
    }

    const newProfile = {
      name: profileName,
      continents: selectedContinents,
      sex: selectedSex,
    };

    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
    setProfileName("");
    setError("");
  };

  const loadProfile = (name) => {
    const profile = profiles.find((p) => p.name === name);
    if (profile) {
      setSelectedContinents(profile.continents);
      setSelectedSex(profile.sex);
    }
  };

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
      <Box className="profile-manager" display="flex" flexDirection="column">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Typography variant="h6" sx={{ color: "#ffffff" }}>
            Perfis Salvos
          </Typography>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <Button
                  key={profile.name}
                  onClick={() => loadProfile(profile.name)}
                  sx={{ margin: 1, background: "#3a5077", color: "white" }}
                >
                  {profile.name}
                </Button>
              ))
            ) : (
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Nenhum perfil salvo.
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          paddingBottom="20px"
        >
          <Box display="flex" className="input-profile-container">
            <Box className="input-profile-content">
              <input
                id="profile-name"
                type="text"
                value={profileName}
                placeholder="Nome do Perfil"
                onChange={(e) => setProfileName(e.target.value)}
                className="profile-name"
              />
              <Button
                className="profile-save-buttom"
                onClick={saveProfile}
                sx={{
                  margin: 1,
                  background: "#3aa08c",
                  color: "white",
                  height: "30px",
                }}
              >
                Salvar Perfil
              </Button>
            </Box>
            {error && (
              <Typography variant="body2" sx={{ color: "red", marginTop: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
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
