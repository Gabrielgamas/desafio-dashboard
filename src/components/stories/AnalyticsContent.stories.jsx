import React from "react";
import AnalyticsContent from "../AnalyticsContent";

export default {
  title: "Components/AnalyticsContent",
  component: AnalyticsContent,
};

const Template = (args) => <AnalyticsContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "Alice", age: 25, salary: 50000, sex: "F", continent: "Europe" },
    { name: "Bob", age: 30, salary: 60000, sex: "M", continent: "Asia" },
    // Adicione mais dados conforme necessário
  ],
};
