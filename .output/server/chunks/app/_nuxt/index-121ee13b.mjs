import { _ as __nuxt_component_0 } from './UserTable-a296269e.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Inspectores"
    });
    const loading = ref(false);
    const data = ref([]);
    const totalResults = ref(0);
    const errors = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserTable = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto" }, _attrs))}><div class="sm:flex sm:justify-between sm:items-center mb-8"><div class="mb-4 sm:mb-0"><h1 class="text-2xl md:text-3xl text-slate-800 font-bold"> Inspectores </h1></div></div>`);
      if (unref(loading)) {
        _push(`<div class="flex flex-col min-h-[50vh] mx-auto w-max items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-36 w-36 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else if (unref(data).length > 1) {
        _push(ssrRenderComponent(_component_UserTable, {
          data: unref(data),
          models: "Inspectores",
          total: unref(totalResults)
        }, null, _parent));
      } else if (unref(errors).length < 1) {
        _push(`<div><div class="bg-white shadow-lg rounded-sm border border-slate-200 relative"><header class="px-5 py-4"><h2 class="font-semibold text-slate-800"> No se han creado registros a\xFAn </h2></header></div></div>`);
      } else {
        _push(`<div><div class="bg-red-200 shadow-lg rounded-sm border border-red-500 relative px-5 py-4"><header class="font-bold text-red-800 flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg><h2 class="text-lg">Se produjeron los siguientes errores al llamar a BD:</h2></header><!--[-->`);
        ssrRenderList(unref(errors), (error, index) => {
          _push(`<p class="font-semibold text-red-800 text-md"> - ${ssrInterpolate(error)}</p>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agencia/inspectores/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-121ee13b.mjs.map
