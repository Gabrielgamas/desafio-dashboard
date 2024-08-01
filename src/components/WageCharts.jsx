import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import PropTypes from "prop-types";
import "../styles/components/wagecharts.sass";

const WageChart = ({ attendees }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const wageRanges = [1000, 6000, 11000, 16000, 21000, 26000, 31000];

    const wageCounts = wageRanges.map((_, index) => {
      const min = wageRanges[index];
      const max = wageRanges[index + 1] || Infinity;
      return attendees.filter(
        (attendee) => attendee.wage >= min && attendee.wage < max
      ).length;
    });

    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: wageRanges
          .slice(0, -1)
          .map((w, index) => `${w}-${wageRanges[index + 1] - 1}`),
        datasets: [
          {
            label: "Número de Pessoas",
            data: wageCounts,
            borderColor: "#3aa08c",
            backgroundColor: "transparent",
            borderWidth: 2,
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
              text: "Intervalo de Salário",
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
              text: "Número de Pessoas",
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
  }, [attendees]);

  return (
    <div className="grafic-wage-container">
      <canvas ref={chartRef} />
    </div>
  );
};

WageChart.propTypes = {
  attendees: PropTypes.array.isRequired,
};

export default WageChart;
