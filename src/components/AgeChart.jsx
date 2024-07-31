import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import PropTypes from "prop-types";
import { attendees } from "../data/attendees";
import "../styles/components/agecharts.sass";

const AgeChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Definindo os intervalos de idades
    const ageRanges = [18, 28, 38, 48, 58, 68, 78];
    // Contando o número de pessoas em cada intervalo de idade
    const ageCounts = ageRanges.map((start, index) => {
      const end = ageRanges[index + 1] || 100; // Assume 100 como idade máxima para o último intervalo
      return attendees.filter(({ age }) => age >= start && age < end).length;
    });

    // Criando o gráfico de linha com Chart.js
    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ageRanges.map((start, index) => {
          const end = ageRanges[index + 1] || 78;
          return `${start}-${end - 1}`;
        }),
        datasets: [
          {
            label: "Quantidade de Pessoas",
            data: ageCounts,
            borderColor: "#ffffff",
            backgroundColor: "transparent",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Faixa Etária",
              color: "#ffffff",
            },
            ticks: {
              color: "#ffffff", // Cor das legendas do eixo X
            },
            grid: {
              color: "#888888", // Cor das linhas de referência do eixo X
            },
          },
          y: {
            title: {
              display: true,
              text: "Quantidade de Pessoas",
              color: "#ffffff",
            },
            ticks: {
              color: "#ffffff", // Cor das legendas do eixo X
            },
            grid: {
              color: "#888888", // Cor das linhas de referência do eixo X
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff", // Cor das legendas na parte superior do gráfico
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="grafic-age-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

AgeChart.propTypes = {
  attendees: PropTypes.array.isRequired,
};

export default AgeChart;
