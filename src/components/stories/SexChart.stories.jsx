import React from "react";
import SexChart from "../SexChart";

export default {
  title: "Components/SexChart",
  component: SexChart,
};

const Template = (args) => <SexChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedSex: {
    male: true, // Define se o sexo masculino está selecionado
    female: true, // Define se o sexo feminino está selecionado
  },
  selectedContinents: {
    Europa: true, // Define se o continente Europa está selecionado
    América: true, // Define se o continente América está selecionado
    Ásia: true, // Define se o continente Ásia está selecionado
  },
};
