import React from "react";
import AgeChart from "../AgeChart";

export default {
  title: "Components/AgeChart",
  component: AgeChart,
};

const Template = (args) => <AgeChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [10, 20, 30, 40], // Exemplo de dados para faixas etárias
  labels: ["0-18", "19-30", "31-45", "46+"], // Rótulos das faixas etárias
};
