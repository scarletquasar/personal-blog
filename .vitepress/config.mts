import { createContentLoader, defineConfig, SiteConfig } from 'vitepress'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import path from 'path'

const hostname = 'https://scarletrose.xyz'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scarlet Rose",
  description: "Scarlet Rose's Blog",
  base: '/personal-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  },
buildEnd: async (config: SiteConfig) => {
    const feed = new Feed({
      title: 'Scarlet Rose',
      description: 'Technical and personal blog',
      id: hostname,
      link: hostname,
      language: 'en',
      copyright:
        'Copyright (c) 2025-present, Scarlet Rose'
    })

    // You might need to adjust this if your Markdown files 
    // are located in a subfolder
    const posts = await createContentLoader('posts/*.md', {
      excerpt: true,
      render: true
    }).load()
  
    posts.sort(
      (a, b) =>
        +new Date(b.frontmatter.date as string) -
        +new Date(a.frontmatter.date as string)
    )
  
    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: 'Scarlet Rose',
            email: 'scarlet@growly-group.xyz',
            link: 'https://scarletrose.xyz'
          }
        ],
        date: frontmatter.date
      })
    }
  
    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
  }
})
