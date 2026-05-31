import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { C as Card, a as CardContent, l as leaveRequests, s as studentName } from "./_ssr/mock-data-D0A69S2S.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { B as Badge } from "./_ssr/badge-DyfXZgLs.mjs";
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
function LeaveListPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "طلبات الأذن", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leave-requests/new", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 ml-2" }),
      "طلب أذن جديد"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "اسم الطالب" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "الفصل" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "اليوم" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "سبب طلب الأذن" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "الحالة" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: leaveRequests.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: studentName(l.studentId) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: l.class }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: l.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: l.reason }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: l.status === "موافق" ? "default" : "secondary", children: l.status }) })
      ] }, l.id)) })
    ] }) }) })
  ] });
}
export {
  LeaveListPage as component
};
