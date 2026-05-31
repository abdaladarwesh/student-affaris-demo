import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocation, d as useNavigate, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { G as GraduationCap, L as LayoutDashboard, k as Users, U as UserPlus, C as CalendarCheck, i as TriangleAlert, d as Clock, F as FileText, h as Stethoscope, M as MessageSquareText, e as LogOut } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/", label: "الرئيسية", icon: LayoutDashboard },
  { to: "/students", label: "الطلاب", icon: Users },
  { to: "/students/new", label: "إضافة طالب", icon: UserPlus },
  { to: "/attendance", label: "الحضور اليومي", icon: CalendarCheck },
  { to: "/violations", label: "المخالفات", icon: TriangleAlert },
  { to: "/delays", label: "التأخيرات", icon: Clock },
  { to: "/leave-requests", label: "الأذونات", icon: FileText },
  { to: "/medical", label: "الحالات الطبية", icon: Stethoscope },
  { to: "/feedback", label: "ملاحظات المعلمين", icon: MessageSquareText }
];
function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-64 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 border-b border-sidebar-border flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-sidebar-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg leading-tight", children: "شؤون الطلاب" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-70", children: "نظام إدارة المدرسة" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto", children: nav.map((item) => {
        const active = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/60 text-sidebar-foreground/90"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
            ]
          },
          item.to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate({ to: "/login" }),
          className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-sidebar-accent/60 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "تسجيل الخروج" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) })
  ] });
}
function PageHeader({ title, description, action }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-bold text-foreground", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description })
    ] }),
    action
  ] });
}
export {
  AppLayout as A,
  PageHeader as P
};
