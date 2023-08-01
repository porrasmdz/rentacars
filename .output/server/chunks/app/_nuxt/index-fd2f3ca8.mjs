import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RecentUsersTable",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "\xDAltimos Registros"
    },
    targetRoute: {
      type: String,
      default: "/comercial/clientes"
    },
    data: {
      type: Array
    }
  },
  setup(__props) {
    const props = __props;
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200" }, _attrs))}><header class="px-5 py-4 border-b border-slate-100"><h2 class="font-semibold text-slate-800">${ssrInterpolate(props.title)}</h2></header><div class="p-3"><div><header class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"> Recientes </header><ul class="my-1"><!--[-->`);
      ssrRenderList((_a = __props.data) == null ? void 0 : _a.slice(0, 5), (item, index) => {
        var _a2;
        _push(`<li class="flex px-2"><div class="${ssrRenderClass([item.Apellido == null ? "bg-green-500" : "bg-indigo-500", "w-9 h-9 rounded-full shrink-0 my-2 mr-3"])}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 m-1.5 text-sky-50"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></div><div class="grow flex items-center border-b border-slate-100 text-sm py-2"><div class="grow flex justify-between"><div class="self-center"><span class="font-medium text-slate-800 hover:text-slate-900">${ssrInterpolate(item.Apellido == null ? "Inspector" : "")} ${ssrInterpolate(item.Nombre)} ${ssrInterpolate((_a2 = item.Apellido) != null ? _a2 : "")}</span> ha sido registrado </div><div class="shrink-0 self-end ml-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "font-medium text-indigo-500 hover:text-indigo-600",
          to: { path: __props.targetRoute }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ver Todos<span class="hidden sm:inline text-xl"${_scopeId}> \u2192</span>`);
            } else {
              return [
                createTextVNode("Ver Todos"),
                createVNode("span", { class: "hidden sm:inline text-xl" }, " \u2192")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecentUsersTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Page"
    });
    ref(false);
    const dataInspectors = ref([]);
    const dataCliente = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RecentUsersTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto" }, _attrs))}><div class="relative bg-gradient-to-r from-indigo-200/60 to-indigo-50 p-4 sm:p-6 rounded-sm overflow-hidden mb-8"><div class="relative"><h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-1"> Bienvenid@ de vuelta\u{1F44B} </h1><p>A continuaci\xF3n, el resumen de Rentacars:</p></div></div><div class="grid grid-cols-12 gap-6">`);
      _push(ssrRenderComponent(_component_RecentUsersTable, {
        data: unref(dataCliente),
        title: "\xDAltimos Clientes"
      }, null, _parent));
      _push(ssrRenderComponent(_component_RecentUsersTable, {
        data: unref(dataInspectors),
        title: "\xDAltimos Inspectores",
        "target-route": "/agencia/inspectores"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fd2f3ca8.mjs.map
