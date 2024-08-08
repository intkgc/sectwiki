import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sect Wiki 📚",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    /*{
      provider: "plausible",
    },*/
    locale: "ru-RU",
    baseUrl: "intkgc.github.io/sectwiki",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ebf9fa",
          lightgray: "#b0e0e6",
          gray: "#4682b4",
          darkgray: "#000000",
          dark: "#cd5c5c",
          secondary: "#FF6347",
          tertiary: "#20b2aa",
          highlight: "#a7cfd440",
          textHighlight: "#ffeb3b"
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#8b4513",
          darkgray: "#d4d4d4",
          dark: "#d2691e",
          secondary: "#ff7f50",
          tertiary: "#ff6347",  
          highlight: "#82402840",
          textHighlight: "#ffa07a"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
