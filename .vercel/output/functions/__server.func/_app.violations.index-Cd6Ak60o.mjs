import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { v as violations, C as Card, a as CardContent, s as studentName } from "./_ssr/mock-data-D0A69S2S.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { f as Plus, g as Send, j as UserRound } from "./_libs/lucide-react.mjs";
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
function ViolationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "سجل المخالفات", description: `عدد المخالفات: ${violations.length}`, action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/violations/new", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 ml-2" }),
      "تسجيل مخالفة"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "التاريخ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "اسم الطالب" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "الفصل" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "المخالفة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "الإجراء" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-left", children: "إجراءات" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: violations.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: v.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: studentName(v.studentId) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.class }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.violation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: v.procedure }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => toast.success(`تم إرسال إشعار لولي أمر ${studentName(v.studentId)}`), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5 ml-1" }),
            "ولي الأمر"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => toast.success(`تم إرسال إشعار للطالب ${studentName(v.studentId)}`), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "size-3.5 ml-1" }),
            "الطالب"
          ] })
        ] }) })
      ] }, v.id)) })
    ] }) }) })
  ] });
}
export {
  ViolationsPage as component
};
