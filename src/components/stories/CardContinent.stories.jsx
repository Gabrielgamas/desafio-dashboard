import React from "react";
import CardContinent from "../CardContinent";

export default {
  title: "Components/CardContinent",
  component: CardContinent,
};

const Template = (args) => <CardContinent {...args} />;

export const Default = Template.bind({});
Default.args = {
  nationality: "Europa", // ou "Ásia", "América", conforme necessário
  attendees: [
    { nationality: "Europa", wage: 50000 },
    { nationality: "Ásia", wage: 40000 },
    { nationality: "América", wage: 45000 },
  ],
};
