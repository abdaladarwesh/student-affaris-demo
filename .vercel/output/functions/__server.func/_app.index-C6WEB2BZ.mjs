import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { h as students, v as violations, e as delays, m as medicalCases, C as Card, b as CardHeader, c as CardTitle, a as CardContent, d as absenceByClass } from "./_ssr/mock-data-D0A69S2S.mjs";
import { k as Users, i as TriangleAlert, d as Clock, h as Stethoscope } from "./_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./_libs/recharts.mjs";
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
import "./_libs/lodash.mjs";
import "./_libs/tiny-invariant.mjs";
import "./_libs/react-is.mjs";
import "./_libs/d3-shape.mjs";
import "./_libs/d3-path.mjs";
import "./_libs/react-smooth.mjs";
import "./_libs/prop-types.mjs";
import "./_libs/fast-equals.mjs";
import "./_libs/victory-vendor.mjs";
import "./_libs/d3-scale.mjs";
import "./_libs/internmap.mjs";
import "./_libs/d3-array.mjs";
import "./_libs/d3-time-format.mjs";
import "./_libs/d3-time.mjs";
import "./_libs/d3-interpolate.mjs";
import "./_libs/d3-color.mjs";
import "./_libs/d3-format.mjs";
import "./_libs/recharts-scale.mjs";
import "./_libs/decimal.js-light.mjs";
import "./_libs/eventemitter3.mjs";
function Stat({
  label,
  value,
  icon: Icon,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-12 rounded-xl flex items-center justify-center ${tone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: label })
    ] })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "الرئيسية", description: "نظرة عامة على مؤشرات شؤون الطلاب" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "إجمالي الطلاب", value: students.length, icon: Users, tone: "bg-primary/10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "مخالفات هذا الشهر", value: violations.length, icon: TriangleAlert, tone: "bg-destructive/10 text-destructive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "تأخيرات هذا الأسبوع", value: delays.length, icon: Clock, tone: "bg-accent/20 text-accent-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "حالات طبية", value: medicalCases.length, icon: Stethoscope, tone: "bg-secondary text-secondary-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "متوسط الغياب لكل فصل" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-80 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: absenceByClass, margin: {
        top: 10,
        right: 10,
        left: 0,
        bottom: 10
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "class", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: {
          fill: "var(--muted)"
        }, contentStyle: {
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 8
        }, labelStyle: {
          color: "var(--foreground)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "averageAbsence", fill: "var(--primary)", radius: [6, 6, 0, 0], name: "متوسط أيام الغياب" })
      ] }) }) }) })
    ] })
  ] });
}
export {
  HomePage as component
};
