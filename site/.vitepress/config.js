import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Кнап Юлія",
  description: "Звіт Кнап Юлія",

  // replace knu-template with name of your repository
  base: "/Knap/",

  themeConfig: {
    nav: [{ text: "Лабораторні", link: "/labs/1" }],

    sidebar: [
      {
        text: "Лабораторні роботи",
        items: [{ text: "Лабораторна робота №1", link: "/labs/1" }],
      },
    ],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
})
export default defineConfig({
   title: "Кнап Юлія",
  description: "Звіт Кнап Юлія",

  // replace knu-template with name of your repository
  base: "/Knap/",

  themeConfig: {
     nav: [{ text: "Лабораторні", link: "/labs/2" }],
            
    sidebar: [
      {
        text: "Лабораторні роботи",
        items: [{ text: "Лабораторна робота №2", link: "/labs/2" }],
      },
    ],
     // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ], 
  },
})
export default defineConfig({
   title: "Кнап Юлія",
  description: "Звіт Кнап Юлія",

  // replace knu-template with name of your repository
  base: "/Knap/",

  themeConfig: {
     nav: [{ text: "Лабораторні", link: "/labs/3" }],
            
    sidebar: [
      {
        text: "Лабораторні роботи",
        items: [{ text: "Лабораторна робота №3", link: "/labs/3" }],
      },
    ],
     // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ], 
  },
})
