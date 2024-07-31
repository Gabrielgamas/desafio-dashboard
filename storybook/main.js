module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
  viteFinal: (config) => {
    return config;
  },
};
