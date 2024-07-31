import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/components/cardcontinent.sass";

const imageMap = {
  Europa: "/image/europe.png",
  Ásia: "/image/asia.png",
  América: "/image/americas.png",
};

const CardContinent = ({ nationality, attendees }) => {
  // Filtra os participantes pela nacionalidade
  const filteredAttendees = attendees.filter(
    (attendee) => attendee.nationality === nationality
  );

  // Calcula a média dos salários
  const totalWage = filteredAttendees.reduce(
    (total, attendee) => total + attendee.wage,
    0
  );

  const averageWage =
    filteredAttendees.length > 0 ? totalWage / filteredAttendees.length : 0;

  return (
    <Card sx={{ borderRadius: "20px" }} className="card">
      <CardContent className="card-content">
        <Typography
          style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}
          gutterBottom
        >
          {nationality}
        </Typography>
        <Typography
          style={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
        >
          Média Salarial:
        </Typography>
        <Typography
          className="card-wage-value"
          style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
        >
          R${averageWage.toFixed(2)}
        </Typography>
        <Typography className="card-count" color="text.secondary">
          {filteredAttendees.length} Pessoas
        </Typography>
      </CardContent>
      <img
        src={imageMap[nationality]}
        alt={`${nationality} background`}
        style={{ width: "200px", height: "200px" }}
      />
    </Card>
  );
};

export default CardContinent;
