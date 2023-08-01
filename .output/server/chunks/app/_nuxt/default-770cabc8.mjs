import { defineComponent, ref, mergeProps, unref, useSSRContext, onUnmounted, watch, withCtx, openBlock, createBlock, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { useRouter } from 'vue-router';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main$3 = {
  name: "Header",
  props: ["sidebarOpen"],
  components: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 bg-white border-b border-slate-200 z-30" }, _attrs))}><div class="px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16 -mb-px"><div class="flex"><button class="text-slate-500 hover:text-slate-600 lg:hidden" aria-controls="sidebar"${ssrRenderAttr("aria-expanded", $props.sidebarOpen)}><span class="sr-only">Open sidebar</span><svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="16" height="2"></rect><rect x="4" y="11" width="16" height="2"></rect><rect x="4" y="17" width="16" height="2"></rect></svg></button></div><div class="flex items-center space-x-3"><hr class="w-px h-6 bg-slate-200"><button></button></div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  name: "SidebarLinkGroup",
  props: ["activeCondition"],
  setup(props) {
    const expanded = ref(props.activeCondition);
    const handleClick = () => {
      expanded.value = !expanded.value;
    };
    return {
      expanded,
      handleClick
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({
    class: ["px-3 py-2 rounded-sm mb-0.5 last:mb-0", $props.activeCondition && "bg-slate-900"]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {
    handleClick: $setup.handleClick,
    expanded: $setup.expanded
  }, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarLinkGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SidebarLinkGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const storedSidebarExpanded = false;
const _sfc_main$1 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: ["sidebarOpen"],
  setup(__props) {
    const props = __props;
    const trigger = ref(null);
    const sidebar = ref(null);
    const sidebarExpanded = ref(
      storedSidebarExpanded === "true"
    );
    const currentRoute = useRouter().currentRoute.value;
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value)
        return;
      if (!props.sidebarOpen || sidebar.value.contains(target) || trigger.value.contains(target))
        return;
      emit("close-sidebar");
    };
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27)
        return;
      emit("close-sidebar");
    };
    onUnmounted(() => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    });
    watch(sidebarExpanded, () => {
      if (sidebarExpanded.value) {
        document.querySelector("body").classList.add("sidebar-expanded");
      } else {
        document.querySelector("body").classList.remove("sidebar-expanded");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([__props.sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none", "fixed inset-0 bg-slate-900 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200"])}" aria-hidden="true"></div><div id="sidebar" class="${ssrRenderClass([__props.sidebarOpen ? "translate-x-0" : "-translate-x-64", "flex flex-col absolute z-40 left-0 top-0 md:static md:left-auto md:top-auto md:translate-x-0 h-screen overflow-y-scroll md:overflow-y-auto no-scrollbar w-64 md:w-20 md:sidebar-expanded:!w-64 lg:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out"])}"><div class="flex justify-between mb-10 pr-3 sm:px-2"><button class="md:hidden text-slate-500 hover:text-slate-400" aria-controls="sidebar"${ssrRenderAttr("aria-expanded", __props.sidebarOpen)}><span class="sr-only">Close sidebar</span><svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"></path></svg></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="32" height="32" viewBox="0 0 32 32"${_scopeId}><defs${_scopeId}><linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a"${_scopeId}><stop stop-color="#A5B4FC" stop-opacity="0" offset="0%"${_scopeId}></stop><stop stop-color="#A5B4FC" offset="100%"${_scopeId}></stop></linearGradient><linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b"${_scopeId}><stop stop-color="#38BDF8" stop-opacity="0" offset="0%"${_scopeId}></stop><stop stop-color="#38BDF8" offset="100%"${_scopeId}></stop></linearGradient></defs><rect fill="#6366F1" width="32" height="32" rx="16"${_scopeId}></rect><path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5"${_scopeId}></path><path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)"${_scopeId}></path><path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
              }, [
                createVNode("defs", null, [
                  createVNode("linearGradient", {
                    x1: "28.538%",
                    y1: "20.229%",
                    x2: "100%",
                    y2: "108.156%",
                    id: "logo-a"
                  }, [
                    createVNode("stop", {
                      "stop-color": "#A5B4FC",
                      "stop-opacity": "0",
                      offset: "0%"
                    }),
                    createVNode("stop", {
                      "stop-color": "#A5B4FC",
                      offset: "100%"
                    })
                  ]),
                  createVNode("linearGradient", {
                    x1: "88.638%",
                    y1: "29.267%",
                    x2: "22.42%",
                    y2: "100%",
                    id: "logo-b"
                  }, [
                    createVNode("stop", {
                      "stop-color": "#38BDF8",
                      "stop-opacity": "0",
                      offset: "0%"
                    }),
                    createVNode("stop", {
                      "stop-color": "#38BDF8",
                      offset: "100%"
                    })
                  ])
                ]),
                createVNode("rect", {
                  fill: "#6366F1",
                  width: "32",
                  height: "32",
                  rx: "16"
                }),
                createVNode("path", {
                  d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
                  fill: "#4F46E5"
                }),
                createVNode("path", {
                  d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
                  fill: "url(#logo-a)"
                }),
                createVNode("path", {
                  d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
                  fill: "url(#logo-b)"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-8"><div><h3 class="text-xs uppercase text-slate-500 font-semibold pl-3"><span class="hidden md:block md:sidebar-expanded:hidden lg:hidden text-center w-6" aria-hidden="true">\u2022\u2022\u2022</span><span class="md:hidden md:sidebar-expanded:block lg:block">P\xE1ginas</span></h3><ul class="mt-3">`);
      _push(ssrRenderComponent(SidebarLinkGroup, {
        activeCondition: unref(currentRoute).fullPath === "/"
      }, {
        default: withCtx((parentLink, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="${ssrRenderClass([
              unref(currentRoute).fullPath === "/" && "hover:text-slate-200",
              "block text-slate-200 hover:text-white truncate transition duration-150"
            ])}" href="#0"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24"${_scopeId}><path class="${ssrRenderClass([
              unref(currentRoute).fullPath === "/" && "!text-indigo-500",
              "fill-current text-slate-400"
            ])}" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath === "/" && "text-indigo-600",
              "fill-current text-slate-600"
            ])}" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath === "/" && "text-indigo-200",
              "fill-current text-slate-400"
            ])}" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"${_scopeId}></path></svg><span class="text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId}>Inicio</span></div><div class="flex shrink-0 ml-2"${_scopeId}><svg class="${ssrRenderClass([parentLink.expanded && "rotate-180", "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"])}" viewBox="0 0 12 12"${_scopeId}><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"${_scopeId}></path></svg></div></div></a><div class="md:hidden md:sidebar-expanded:block lg:block"${_scopeId}><ul class="${ssrRenderClass([!parentLink.expanded && "hidden", "pl-9 mt-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              custom: ""
            }, {
              default: withCtx(({ href, navigate, isExactActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<li class="mb-1 last:mb-0"${_scopeId2}><a class="${ssrRenderClass([isExactActive && "!text-indigo-500", "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"])}"${ssrRenderAttr("href", href)}${_scopeId2}><span class="text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId2}>Main</span></a></li>`);
                } else {
                  return [
                    createVNode("li", { class: "mb-1 last:mb-0" }, [
                      createVNode("a", {
                        class: ["block text-slate-400 hover:text-slate-200 transition duration-150 truncate", isExactActive && "!text-indigo-500"],
                        href,
                        onClick: navigate
                      }, [
                        createVNode("span", { class: "text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Main")
                      ], 10, ["href", "onClick"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</ul></div>`);
          } else {
            return [
              createVNode("a", {
                class: [
                  "block text-slate-200 hover:text-white truncate transition duration-150",
                  unref(currentRoute).fullPath === "/" && "hover:text-slate-200"
                ],
                href: "#0",
                onClick: withModifiers(($event) => sidebarExpanded.value ? parentLink.handleClick() : sidebarExpanded.value = true, ["prevent"])
              }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "shrink-0 h-6 w-6",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-400",
                          unref(currentRoute).fullPath === "/" && "!text-indigo-500"
                        ],
                        d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-600",
                          unref(currentRoute).fullPath === "/" && "text-indigo-600"
                        ],
                        d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-400",
                          unref(currentRoute).fullPath === "/" && "text-indigo-200"
                        ],
                        d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                      }, null, 2)
                    ])),
                    createVNode("span", { class: "text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Inicio")
                  ]),
                  createVNode("div", { class: "flex shrink-0 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: ["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400", parentLink.expanded && "rotate-180"],
                      viewBox: "0 0 12 12"
                    }, [
                      createVNode("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" })
                    ], 2))
                  ])
                ])
              ], 10, ["onClick"]),
              createVNode("div", { class: "md:hidden md:sidebar-expanded:block lg:block" }, [
                createVNode("ul", {
                  class: ["pl-9 mt-1", !parentLink.expanded && "hidden"]
                }, [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    custom: ""
                  }, {
                    default: withCtx(({ href, navigate, isExactActive }) => [
                      createVNode("li", { class: "mb-1 last:mb-0" }, [
                        createVNode("a", {
                          class: ["block text-slate-400 hover:text-slate-200 transition duration-150 truncate", isExactActive && "!text-indigo-500"],
                          href,
                          onClick: navigate
                        }, [
                          createVNode("span", { class: "text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Main")
                        ], 10, ["href", "onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SidebarLinkGroup, {
        activeCondition: unref(currentRoute).fullPath.includes("comercial")
      }, {
        default: withCtx((parentLink, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("comercial") && "hover:text-slate-200",
              "block text-slate-200 hover:text-white truncate transition duration-150"
            ])}" href="#0"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24"${_scopeId}><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("comercial") && "text-indigo-300",
              "fill-current text-slate-400"
            ])}" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("comercial") && "!text-indigo-600",
              "fill-current text-slate-700"
            ])}" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("comercial") && "text-indigo-500",
              "fill-current text-slate-600"
            ])}" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"${_scopeId}></path></svg><span class="text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId}>Comercial </span></div><div class="flex shrink-0 ml-2"${_scopeId}><svg class="${ssrRenderClass([parentLink.expanded && "rotate-180", "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"])}" viewBox="0 0 12 12"${_scopeId}><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"${_scopeId}></path></svg></div></div></a><div class="md:hidden md:sidebar-expanded:block lg:block"${_scopeId}><ul class="${ssrRenderClass([!parentLink.expanded && "hidden", "pl-9 mt-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/comercial/clientes",
              custom: ""
            }, {
              default: withCtx(({ href, navigate, isExactActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<li class="mb-1 last:mb-0"${_scopeId2}><a class="${ssrRenderClass([isExactActive && "!text-indigo-500", "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"])}"${ssrRenderAttr("href", href)}${_scopeId2}><span class="text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId2}>Clientes</span></a></li>`);
                } else {
                  return [
                    createVNode("li", { class: "mb-1 last:mb-0" }, [
                      createVNode("a", {
                        class: ["block text-slate-400 hover:text-slate-200 transition duration-150 truncate", isExactActive && "!text-indigo-500"],
                        href,
                        onClick: navigate
                      }, [
                        createVNode("span", { class: "text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Clientes")
                      ], 10, ["href", "onClick"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</ul></div>`);
          } else {
            return [
              createVNode("a", {
                class: [
                  "block text-slate-200 hover:text-white truncate transition duration-150",
                  unref(currentRoute).fullPath.includes("comercial") && "hover:text-slate-200"
                ],
                href: "#0",
                onClick: withModifiers(($event) => sidebarExpanded.value ? parentLink.handleClick() : sidebarExpanded.value = true, ["prevent"])
              }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "shrink-0 h-6 w-6",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-400",
                          unref(currentRoute).fullPath.includes("comercial") && "text-indigo-300"
                        ],
                        d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-700",
                          unref(currentRoute).fullPath.includes("comercial") && "!text-indigo-600"
                        ],
                        d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-600",
                          unref(currentRoute).fullPath.includes("comercial") && "text-indigo-500"
                        ],
                        d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                      }, null, 2)
                    ])),
                    createVNode("span", { class: "text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Comercial ")
                  ]),
                  createVNode("div", { class: "flex shrink-0 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: ["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400", parentLink.expanded && "rotate-180"],
                      viewBox: "0 0 12 12"
                    }, [
                      createVNode("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" })
                    ], 2))
                  ])
                ])
              ], 10, ["onClick"]),
              createVNode("div", { class: "md:hidden md:sidebar-expanded:block lg:block" }, [
                createVNode("ul", {
                  class: ["pl-9 mt-1", !parentLink.expanded && "hidden"]
                }, [
                  createVNode(_component_NuxtLink, {
                    to: "/comercial/clientes",
                    custom: ""
                  }, {
                    default: withCtx(({ href, navigate, isExactActive }) => [
                      createVNode("li", { class: "mb-1 last:mb-0" }, [
                        createVNode("a", {
                          class: ["block text-slate-400 hover:text-slate-200 transition duration-150 truncate", isExactActive && "!text-indigo-500"],
                          href,
                          onClick: navigate
                        }, [
                          createVNode("span", { class: "text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Clientes")
                        ], 10, ["href", "onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SidebarLinkGroup, {
        activeCondition: unref(currentRoute).fullPath.includes("agencia")
      }, {
        default: withCtx((parentLink, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("agencia") && "hover:text-slate-200",
              "block text-slate-200 hover:text-white truncate transition duration-150"
            ])}" href="#0"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24"${_scopeId}><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("agencia") && "text-indigo-500",
              "fill-current text-slate-600"
            ])}" d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("agencia") && "text-indigo-300",
              "fill-current text-slate-400"
            ])}" d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"${_scopeId}></path></svg><span class="text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId}>Agencia</span></div><div class="flex shrink-0 ml-2"${_scopeId}><svg class="${ssrRenderClass([parentLink.expanded && "rotate-180", "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"])}" viewBox="0 0 12 12"${_scopeId}><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"${_scopeId}></path></svg></div></div></a><div class="md:hidden md:sidebar-expanded:block lg:block"${_scopeId}><ul class="${ssrRenderClass([!parentLink.expanded && "hidden", "pl-9 mt-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/agencia/inspectores",
              custom: ""
            }, {
              default: withCtx(({ href, navigate, isExactActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<li class="mb-1 last:mb-0"${_scopeId2}><a class="${ssrRenderClass([isExactActive && "!text-indigo-500", "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"])}"${ssrRenderAttr("href", href)}${_scopeId2}><span class="text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId2}>Inspectores</span></a></li>`);
                } else {
                  return [
                    createVNode("li", { class: "mb-1 last:mb-0" }, [
                      createVNode("a", {
                        class: ["block text-slate-400 hover:text-slate-200 transition duration-150 truncate", isExactActive && "!text-indigo-500"],
                        href,
                        onClick: navigate
                      }, [
                        createVNode("span", { class: "text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Inspectores")
                      ], 10, ["href", "onClick"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</ul></div>`);
          } else {
            return [
              createVNode("a", {
                class: [
                  "block text-slate-200 hover:text-white truncate transition duration-150",
                  unref(currentRoute).fullPath.includes("agencia") && "hover:text-slate-200"
                ],
                href: "#0",
                onClick: withModifiers(($event) => sidebarExpanded.value ? parentLink.handleClick() : sidebarExpanded.value = true, ["prevent"])
              }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "shrink-0 h-6 w-6",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-600",
                          unref(currentRoute).fullPath.includes("agencia") && "text-indigo-500"
                        ],
                        d: "M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-400",
                          unref(currentRoute).fullPath.includes("agencia") && "text-indigo-300"
                        ],
                        d: "M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                      }, null, 2)
                    ])),
                    createVNode("span", { class: "text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Agencia")
                  ]),
                  createVNode("div", { class: "flex shrink-0 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: ["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400", parentLink.expanded && "rotate-180"],
                      viewBox: "0 0 12 12"
                    }, [
                      createVNode("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" })
                    ], 2))
                  ])
                ])
              ], 10, ["onClick"]),
              createVNode("div", { class: "md:hidden md:sidebar-expanded:block lg:block" }, [
                createVNode("ul", {
                  class: ["pl-9 mt-1", !parentLink.expanded && "hidden"]
                }, [
                  createVNode(_component_NuxtLink, {
                    to: "/agencia/inspectores",
                    custom: ""
                  }, {
                    default: withCtx(({ href, navigate, isExactActive }) => [
                      createVNode("li", { class: "mb-1 last:mb-0" }, [
                        createVNode("a", {
                          class: ["block text-slate-400 hover:text-slate-200 transition duration-150 truncate", isExactActive && "!text-indigo-500"],
                          href,
                          onClick: navigate
                        }, [
                          createVNode("span", { class: "text-sm font-medium md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Inspectores")
                        ], 10, ["href", "onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SidebarLinkGroup, {
        activeCondition: unref(currentRoute).fullPath.includes("reservas")
      }, {
        default: withCtx((parentLink, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("reservas") && "hover:text-slate-200",
              "block text-slate-200 hover:text-white truncate transition duration-150"
            ])}" href="#0"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24"${_scopeId}><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("reservas") && "text-indigo-500",
              "fill-current text-slate-600"
            ])}" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("reservas") && "text-indigo-500",
              "fill-current text-slate-600"
            ])}" d="M1 1h22v23H1z"${_scopeId}></path><path class="${ssrRenderClass([
              unref(currentRoute).fullPath.includes("reservas") && "text-indigo-300",
              "fill-current text-slate-400"
            ])}" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"${_scopeId}></path></svg><span class="text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200"${_scopeId}>Reservas</span></div><div class="flex shrink-0 ml-2"${_scopeId}><svg class="${ssrRenderClass([parentLink.expanded && "rotate-180", "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"])}" viewBox="0 0 12 12"${_scopeId}><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"${_scopeId}></path></svg></div></div></a><div class="md:hidden md:sidebar-expanded:block lg:block"${_scopeId}><ul class="${ssrRenderClass([!parentLink.expanded && "hidden", "pl-9 mt-1"])}"${_scopeId}></ul></div>`);
          } else {
            return [
              createVNode("a", {
                class: [
                  "block text-slate-200 hover:text-white truncate transition duration-150",
                  unref(currentRoute).fullPath.includes("reservas") && "hover:text-slate-200"
                ],
                href: "#0",
                onClick: withModifiers(($event) => sidebarExpanded.value ? parentLink.handleClick() : sidebarExpanded.value = true, ["prevent"])
              }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "shrink-0 h-6 w-6",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-600",
                          unref(currentRoute).fullPath.includes("reservas") && "text-indigo-500"
                        ],
                        d: "M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-600",
                          unref(currentRoute).fullPath.includes("reservas") && "text-indigo-500"
                        ],
                        d: "M1 1h22v23H1z"
                      }, null, 2),
                      createVNode("path", {
                        class: [
                          "fill-current text-slate-400",
                          unref(currentRoute).fullPath.includes("reservas") && "text-indigo-300"
                        ],
                        d: "M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                      }, null, 2)
                    ])),
                    createVNode("span", { class: "text-sm font-medium ml-3 md:opacity-0 md:sidebar-expanded:opacity-100 lg:opacity-100 duration-200" }, "Reservas")
                  ]),
                  createVNode("div", { class: "flex shrink-0 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: ["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400", parentLink.expanded && "rotate-180"],
                      viewBox: "0 0 12 12"
                    }, [
                      createVNode("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" })
                    ], 2))
                  ])
                ])
              ], 10, ["onClick"]),
              createVNode("div", { class: "md:hidden md:sidebar-expanded:block lg:block" }, [
                createVNode("ul", {
                  class: ["pl-9 mt-1", !parentLink.expanded && "hidden"]
                }, null, 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></div></div><div class="pt-3 hidden md:inline-flex lg:hidden justify-end mt-auto"><div class="px-3 py-2"><button><span class="sr-only">Expand / collapse sidebar</span><svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24"><path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"></path><path class="text-slate-600" d="M3 23H1V1h2z"></path></svg></button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Sidebar = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, {
        "sidebar-open": unref(sidebarOpen),
        onCloseSidebar: ($event) => sidebarOpen.value = false
      }, null, _parent));
      _push(`<div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-indigo-50">`);
      _push(ssrRenderComponent(Header, {
        "sidebar-open": unref(sidebarOpen),
        onToggleSidebar: ($event) => sidebarOpen.value = !unref(sidebarOpen)
      }, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-770cabc8.mjs.map
