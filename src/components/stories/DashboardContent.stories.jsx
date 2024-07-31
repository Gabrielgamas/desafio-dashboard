import React from "react";
import DashboardContent from "../DashboardContent";

export default {
  title: "Components/DashboardContent",
  component: DashboardContent,
};

const Template = (args) => <DashboardContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Propriedades de exemplo para mostrar diferentes configurações do dashboard
  chartsData: {
    age: [10, 20, 30],
    salary: [40000, 50000, 60000],
    sex: { male: 60, female: 40 },
    nationality: { Europe: 50, Asia: 30, America: 20 },
  },
  savedProfiles: [
    { name: "Profile 1", settings: { ageRange: "18-30", sex: "All" } },
    // Adicione mais perfis conforme necessário
  ],
};
