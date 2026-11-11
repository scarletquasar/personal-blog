import { u as useData, c as createElementBlock, o as openBlock, ag as createStaticVNode, j as createBaseVNode, t as toDisplayString, k as unref, a as createTextVNode } from "./chunks/framework.Dtd-3Tr8.js";
const __pageData = JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}');
const __default__ = { name: "api-examples.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const { site, theme, page, frontmatter } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createStaticVNode('<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;script setup&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Results</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Theme Data</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Page Data</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Page Frontmatter</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>', 6)),
        createBaseVNode("pre", null, toDisplayString(unref(theme)), 1),
        _cache[1] || (_cache[1] = createBaseVNode("h3", {
          id: "page-data",
          tabindex: "-1"
        }, [
          createTextVNode("Page Data "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#page-data",
            "aria-label": 'Permalink to "Page Data"'
          }, "​")
        ], -1)),
        createBaseVNode("pre", null, toDisplayString(unref(page)), 1),
        _cache[2] || (_cache[2] = createBaseVNode("h3", {
          id: "page-frontmatter",
          tabindex: "-1"
        }, [
          createTextVNode("Page Frontmatter "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#page-frontmatter",
            "aria-label": 'Permalink to "Page Frontmatter"'
          }, "​")
        ], -1)),
        createBaseVNode("pre", null, toDisplayString(unref(frontmatter)), 1),
        _cache[3] || (_cache[3] = createBaseVNode("h2", {
          id: "more",
          tabindex: "-1"
        }, [
          createTextVNode("More "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#more",
            "aria-label": 'Permalink to "More"'
          }, "​")
        ], -1)),
        _cache[4] || (_cache[4] = createBaseVNode("p", null, [
          createTextVNode("Check out the documentation for the "),
          createBaseVNode("a", {
            href: "https://vitepress.dev/reference/runtime-api#usedata",
            target: "_blank",
            rel: "noreferrer"
          }, "full list of runtime APIs"),
          createTextVNode(".")
        ], -1))
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
