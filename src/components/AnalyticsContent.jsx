import { attendees } from "../data/attendees";
import "../styles/components/analyticscontent.sass";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AnalyticsContent = () => {
  attendees.shift();

  return (
    <div className="analytics-container">
      <div className="analytics-content">
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 820,
            background: "linear-gradient(135deg, #3a5077, #3aa08c)",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Table
            sx={{ minWidth: 650, color: "#fff" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff" }} align="left">
                  Nome
                </TableCell>
                <TableCell sx={{ color: "#fff" }} align="left">
                  Idade
                </TableCell>
                <TableCell sx={{ color: "#fff" }} align="left">
                  Sexo
                </TableCell>
                <TableCell sx={{ color: "#fff" }} align="left">
                  Salário
                </TableCell>
                <TableCell sx={{ color: "#fff" }} align="center">
                  Nacionalidade
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendees.map((attendee) => (
                <TableRow
                  key={attendee.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ color: "#fff" }} component="th" scope="row">
                    {attendee.name}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    {attendee.age}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    {attendee.sex}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    R${attendee.wage},00
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="center">
                    {attendee.nationality}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AnalyticsContent;
