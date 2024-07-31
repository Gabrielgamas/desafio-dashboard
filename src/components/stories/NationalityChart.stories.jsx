import React from "react";
import NationalityChart from "../NationalityChart";

export default {
  title: "Components/NationalityChart",
  component: NationalityChart,
};

const Template = (args) => <NationalityChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedContinents: {
    Europa: true,
    Ásia: true,
    América: true,
  },
};
