import React from "react";
import WageChart from "../WageCharts";

export default {
  title: "Components/WageChart",
  component: WageChart,
};

const Template = (args) => <WageChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  attendees: [
    { wage: 2500 },
    { wage: 5000 },
    { wage: 7500 },
    { wage: 10000 },
    { wage: 15000 },
    { wage: 20000 },
    { wage: 25000 },
  ],
};
