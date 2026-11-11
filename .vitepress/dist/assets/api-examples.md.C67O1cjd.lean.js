import { u as useData, c as createElementBlock, o as openBlock, ag as createStaticVNode, j as createBaseVNode, t as toDisplayString, k as unref, a as createTextVNode } from "./chunks/framework.Dtd-3Tr8.js";
const __pageData = JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}');
const __default__ = { name: "api-examples.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const { site, theme, page, frontmatter } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createStaticVNode("", 6)),
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
