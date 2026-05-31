import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { h as students, C as Card, a as CardContent } from "./_ssr/mock-data-D0A69S2S.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./_ssr/select-NX1S2Qd-.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { a as Check, X } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-arrow.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
function AttendancePage() {
  const [date, setDate] = reactExports.useState((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [klass, setKlass] = reactExports.useState("1أ");
  const list = students.filter((s) => s.class === klass);
  const [status, setStatus] = reactExports.useState({});
  const set = (id, v) => setStatus((p) => ({
    ...p,
    [id]: v
  }));
  const counts = {
    present: list.filter((s) => status[s.id] === "present").length,
    absent: list.filter((s) => status[s.id] === "absent").length,
    leave: list.filter((s) => status[s.id] === "leave").length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "تسجيل الحضور اليومي", description: "حدد اليوم والفصل ثم سجل حضور الطلاب" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 grid md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: date, onChange: (e) => setDate(e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: klass, onValueChange: setKlass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "الفصل" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Array.from(new Set(students.map((s) => s.class))).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex items-center justify-end gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-700 font-medium", children: [
          "حاضر: ",
          counts.present
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive font-medium", children: [
          "غائب: ",
          counts.absent
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent-foreground font-medium", children: [
          "إذن: ",
          counts.leave
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", children: list.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold", children: s.nameAr.charAt(0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: s.nameAr }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.id })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: status[s.id] === "present" ? "default" : "outline", onClick: () => set(s.id, "present"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 ml-1" }),
            "حاضر"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: status[s.id] === "absent" ? "destructive" : "outline", onClick: () => set(s.id, "absent"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4 ml-1" }),
            "غائب"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: status[s.id] === "leave" ? "secondary" : "outline", onClick: () => set(s.id, "leave"), children: "إذن" })
        ] })
      ] }, s.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => toast.success(`تم حفظ الحضور بتاريخ ${date}`), children: "حفظ الحضور" }) })
    ] }) })
  ] });
}
export {
  AttendancePage as component
};
