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

    const ageRanges = [18, 28, 38, 48, 58, 68, 78];

    const ageCounts = ageRanges.map((start, index) => {
      const end = ageRanges[index + 1] || 100;
      return attendees.filter(({ age }) => age >= start && age < end).length;
    });

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
              color: "#ffffff",
            },
            grid: {
              color: "#888888",
            },
          },
          y: {
            title: {
              display: true,
              text: "Quantidade de Pessoas",
              color: "#ffffff",
            },
            ticks: {
              color: "#ffffff",
            },
            grid: {
              color: "#888888",
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffffff",
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
