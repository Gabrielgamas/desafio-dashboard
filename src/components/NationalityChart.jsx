import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import PropTypes from "prop-types";
import { attendees } from "../data/attendees";
import "../styles/components/nationalitycharts.sass";

const NationalityChart = ({ selectedContinents }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const continentCounts = attendees.reduce((acc, attendee) => {
      const continent = attendee.nationality;
      if (selectedContinents[continent]) {
        acc[continent] = (acc[continent] || 0) + 1;
      }
      return acc;
    }, {});

    const series = Object.values(continentCounts);
    const labels = Object.keys(continentCounts);

    chartInstance.current = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data: series,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#ffffff", // Cor das labels da legenda
            },
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) =>
                `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`,
            },
          },
        },
      },
    });
  }, [selectedContinents]);

  return (
    <div className="grafic-nationality-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

NationalityChart.propTypes = {
  selectedContinents: PropTypes.object.isRequired,
};

export default NationalityChart;
