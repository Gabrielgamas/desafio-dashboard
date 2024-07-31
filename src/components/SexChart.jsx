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

// Registro dos componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SexChart = ({ selectedSex, selectedContinents }) => {
  // Filtra os dados baseados nos sexos e continentes selecionados
  const filteredAttendees = attendees.filter(
    (attendee) =>
      selectedSex[attendee.sex] && selectedContinents[attendee.nationality]
  );

  // Conta a quantidade de homens e mulheres
  const sexCounts = filteredAttendees.reduce((counts, attendee) => {
    const sexLabel = attendee.sex === "male" ? "Homem" : "Mulher";
    counts[sexLabel] = (counts[sexLabel] || 0) + 1;
    return counts;
  }, {});

  // Dados do gráfico
  const data = {
    labels: Object.keys(sexCounts), // ["Homem", "Mulher"]
    datasets: [
      {
        label: "Quantidade",
        data: Object.values(sexCounts), // [quantidade de homens, quantidade de mulheres]
        backgroundColor: ["#FF6384", "#36A2EB"], // Cores para as barras
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite que o gráfico use o tamanho do contêiner
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff", // Cor das legendas na parte superior do gráfico
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
          color: "#ffffff", // Cor do título do eixo X
        },
        ticks: {
          color: "#ffffff", // Cor das legendas do eixo X
        },
        grid: {
          color: "#888888", // Cor das linhas de referência do eixo X
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade",
          color: "#ffffff", // Cor do título do eixo Y
        },
        ticks: {
          color: "#ffffff", // Cor das legendas do eixo Y
        },
        grid: {
          color: "#888888", // Cor das linhas de referência do eixo Y
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
