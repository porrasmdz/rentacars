import { useSSRContext, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "UserTableItem",
  __ssrInlineRender: true,
  props: ["customer", "value", "models"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<tr${ssrRenderAttrs(_attrs)}><td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="flex items-center"><div class="${ssrRenderClass([__props.models == "Clientes" ? "bg-indigo-500" : "bg-green-500", "w-9 h-9 rounded-full shrink-0 my-2 mr-3"])}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 m-1.5 text-sky-50"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></div><div class="font-medium text-slate-800">${ssrInterpolate(`${__props.customer.Nombre} ${(_a = __props.customer.Apellido) != null ? _a : ""}`)}</div></div></td><td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="text-left">${ssrInterpolate(__props.customer.Email)}</div></td><td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="text-left">${ssrInterpolate(__props.customer.Celular)}</div></td>`);
      if (__props.models == "Clientes") {
        _push(`<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="text-center">${ssrInterpolate(__props.customer.Edad)}</div></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="text-left font-medium text-sky-500"> #${ssrInterpolate(__props.customer.id_Cliente || __props.customer.id_Inspector)}</div></td><td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"><button class="text-slate-400 hover:text-slate-500 rounded-full"><span class="sr-only">Menu</span><svg class="w-8 h-8 fill-current" viewBox="0 0 32 32"><circle cx="16" cy="16" r="2"></circle><circle cx="10" cy="16" r="2"></circle><circle cx="22" cy="16" r="2"></circle></svg></button></td></tr>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserTableItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const User = _sfc_main$1;
const _sfc_main = {
  __name: "UserTable",
  __ssrInlineRender: true,
  props: ["data", "models", "total"],
  emits: ["change-selection"],
  setup(__props, { emit }) {
    ref([
      {
        id: "0",
        name: "Patricia Semklo",
        email: "patricia.semklo@app.com",
        location: "\u{1F1EC}\u{1F1E7} London, UK",
        orders: "24",
        lastOrder: "#123567",
        spent: "$2,890.66",
        refunds: "-",
        fav: true
      },
      {
        id: "1",
        name: "Dominik Lamakani",
        email: "dominik.lamakani@gmail.com",
        location: "\u{1F1E9}\u{1F1EA} Dortmund, DE",
        orders: "77",
        lastOrder: "#779912",
        spent: "$14,767.04",
        refunds: "4",
        fav: false
      },
      {
        id: "2",
        name: "Ivan Mesaros",
        email: "imivanmes@gmail.com",
        location: "\u{1F1EB}\u{1F1F7} Paris, FR",
        orders: "44",
        lastOrder: "#889924",
        spent: "$4,996.00",
        refunds: "1",
        fav: true
      },
      {
        id: "3",
        name: "Maria Martinez",
        email: "martinezhome@gmail.com",
        location: "\u{1F1EE}\u{1F1F9} Bologna, IT",
        orders: "29",
        lastOrder: "#897726",
        spent: "$3,220.66",
        refunds: "2",
        fav: false
      },
      {
        id: "4",
        name: "Vicky Jung",
        email: "itsvicky@contact.com",
        location: "\u{1F1EC}\u{1F1E7} London, UK",
        orders: "22",
        lastOrder: "#123567",
        spent: "$2,890.66",
        refunds: "-",
        fav: true
      },
      {
        id: "5",
        name: "Tisho Yanchev",
        email: "tisho.y@kurlytech.com",
        location: "\u{1F1EC}\u{1F1E7} London, UK",
        orders: "14",
        lastOrder: "#896644",
        spent: "$1,649.99",
        refunds: "1",
        fav: true
      },
      {
        id: "6",
        name: "James Cameron",
        email: "james.ceo@james.tech",
        location: "\u{1F1EB}\u{1F1F7} Marseille, FR",
        orders: "34",
        lastOrder: "#136988",
        spent: "$3,569.87",
        refunds: "2",
        fav: true
      },
      {
        id: "7",
        name: "Haruki Masuno",
        email: "haruki@supermail.jp",
        location: "\u{1F1EF}\u{1F1F5} Tokio, JP",
        orders: "112",
        lastOrder: "#442206",
        spent: "$19,246.07",
        refunds: "6",
        fav: false
      },
      {
        id: "8",
        name: "Joe Huang",
        email: "joehuang@hotmail.com",
        location: "\u{1F1E8}\u{1F1F3} Shanghai, CN",
        orders: "64",
        lastOrder: "#764321",
        spent: "$12,276.92",
        refunds: "-",
        fav: true
      },
      {
        id: "9",
        name: "Carolyn McNeail",
        email: "carolynlove@gmail.com",
        location: "\u{1F1EE}\u{1F1F9} Milan, IT",
        orders: "19",
        lastOrder: "#908764",
        spent: "$1,289.97",
        refunds: "2",
        fav: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-lg rounded-sm border border-slate-200 relative" }, _attrs))}><header class="px-5 py-4"><h2 class="font-semibold text-slate-800"> Total ${ssrInterpolate(__props.models)} <span class="text-slate-400 font-medium">${ssrInterpolate(__props.total)}</span></h2></header><div><div class="overflow-x-auto"><table class="table-auto w-full"><thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200"><tr><th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="font-semibold text-left">Nombre</div></th><th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="font-semibold text-left">Email</div></th><th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="font-semibold text-left">Celular</div></th>`);
      if (__props.models == "Clientes") {
        _push(`<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="font-semibold">Edad</div></th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><div class="font-semibold text-left">Id</div></th><th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"><span class="sr-only">Menu</span></th></tr></thead><tbody class="text-sm divide-y divide-slate-200"><!--[-->`);
      ssrRenderList(__props.data, (customer) => {
        _push(ssrRenderComponent(User, {
          key: customer.id_cliente,
          customer,
          models: __props.models,
          value: customer.id_cliente
        }, null, _parent));
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=UserTable-a296269e.mjs.map
