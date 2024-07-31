import React from "react";
import MenuList from "../MenuList";

export default {
  title: "Components/MenuList",
  component: MenuList,
};

const Template = (args) => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Dashboard", route: "/" },
    { label: "Analytics", route: "/analytics" },
    // Adicione mais itens conforme necessário
  ],
};
