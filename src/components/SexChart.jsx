import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { attendees } from "../data/attendees";
import "../styles/components/sexcharts.sass";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SexChart = ({ selectedSex, selectedContinents }) => {
  const filteredAttendees = attendees.filter(
    (attendee) =>
      selectedSex[attendee.sex] && selectedContinents[attendee.nationality]
  );

  const sexCounts = filteredAttendees.reduce((counts, attendee) => {
    const sexLabel = attendee.sex === "male" ? "Homem" : "Mulher";
    counts[sexLabel] = (counts[sexLabel] || 0) + 1;
    return counts;
  }, {});

  const data = {
    labels: Object.keys(sexCounts),
    datasets: [
      {
        label: "Quantidade",
        data: Object.values(sexCounts),
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} pessoas`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sexo",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#888888",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#888888",
        },
      },
    },
  };

  return (
    <div className="grafic-sex-container">
      <Bar data={data} options={options} />
    </div>
  );
};

SexChart.propTypes = {
  selectedSex: PropTypes.shape({
    male: PropTypes.bool.isRequired,
    female: PropTypes.bool.isRequired,
  }).isRequired,
  selectedContinents: PropTypes.shape({
    Europa: PropTypes.bool.isRequired,
    América: PropTypes.bool.isRequired,
    Ásia: PropTypes.bool.isRequired,
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SexChart;
