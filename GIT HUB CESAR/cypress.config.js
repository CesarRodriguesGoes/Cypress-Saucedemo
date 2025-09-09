const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com", // 👈 site alvo
    setupNodeEvents(on, config) {
      // plugins/eventos aqui
    },
  },
});
