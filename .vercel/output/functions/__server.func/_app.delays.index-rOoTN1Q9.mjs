import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { C as Card, a as CardContent, e as delays, s as studentName } from "./_ssr/mock-data-D0A69S2S.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { f as Plus } from "./_libs/lucide-react.mjs";
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
function DelaysPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "سجل التأخيرات", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/delays/new", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 ml-2" }),
      "تسجيل تأخير"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "اسم الطالب" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "الفصل" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "اليوم" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "وقت الحضور" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "ملاحظات" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: delays.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: studentName(d.studentId) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: d.class }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: d.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono", children: d.arrivalTime }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: d.notes || "—" })
      ] }, d.id)) })
    ] }) }) })
  ] });
}
export {
  DelaysPage as component
};
