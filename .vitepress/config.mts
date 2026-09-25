import { createContentLoader, defineConfig, SiteConfig } from 'vitepress'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import path from 'path'

const hostname = 'https://scarletrose.xyz'

const instagramIcon = {
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.25" cy="6.75" r="1.15" fill="currentColor"/></svg>'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scarlet Rose",
  description: "Scarlet Rose's Blog",
  base: '/personal-blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    socialLinks: [
      { icon: instagramIcon, link: 'https://www.instagram.com/scarletrose/', ariaLabel: 'Instagram' }
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
