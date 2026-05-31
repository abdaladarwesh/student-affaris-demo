import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { h as students, C as Card, a as CardContent } from "./_ssr/mock-data-D0A69S2S.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./_ssr/select-NX1S2Qd-.mjs";
import { U as UserPlus, S as Search } from "./_libs/lucide-react.mjs";
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
function StudentsList() {
  const [q, setQ] = reactExports.useState("");
  const [grade, setGrade] = reactExports.useState("all");
  const [klass, setKlass] = reactExports.useState("all");
  const grades = reactExports.useMemo(() => Array.from(new Set(students.map((s) => s.grade))), []);
  const classes = reactExports.useMemo(() => Array.from(new Set(students.map((s) => s.class))), []);
  const filtered = students.filter((s) => {
    if (q && !s.nameAr.includes(q) && !s.nameEn.toLowerCase().includes(q.toLowerCase())) return false;
    if (grade !== "all" && s.grade !== grade) return false;
    if (klass !== "all" && s.class !== klass) return false;
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "قائمة الطلاب", description: `عرض ${filtered.length} من إجمالي ${students.length} طالب`, action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/students/new", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-4 ml-2" }),
      " إضافة طالب"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 grid md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "ابحث باسم الطالب...", value: q, onChange: (e) => setQ(e.target.value), className: "pr-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: grade, onValueChange: setGrade, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "الصف" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "كل الصفوف" }),
          grades.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: g, children: g }, g))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: klass, onValueChange: setKlass, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "الفصل" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "كل الفصول" }),
          classes.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: [
      filtered.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/students/$id", params: {
        id: s.id
      }, className: "block rounded-xl border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold", children: s.nameAr.charAt(0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: s.nameAr }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
            s.grade,
            " • ",
            s.class
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: s.id })
      ] }) }, s.id)),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center py-12 text-muted-foreground", children: "لا توجد نتائج مطابقة" })
    ] })
  ] });
}
export {
  StudentsList as component
};
