import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, f as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-B9c883eC.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$h = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "نظام شؤون الطلاب" },
      { name: "description", content: "نظام إدارة شؤون الطلاب - الحضور، المخالفات، التأخيرات والسجلات الطبية" },
      { name: "author", content: "School Affairs" },
      { property: "og:title", content: "نظام شؤون الطلاب" },
      { property: "og:description", content: "نظام إدارة شؤون الطلاب" },
      { property: "og:type", content: "website" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ar", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$h.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center", dir: "rtl" })
  ] });
}
const $$splitComponentImporter$g = () => import("./login-Duq6Ibr9.mjs");
const Route$g = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "تسجيل الدخول - نظام شؤون الطلاب"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("../_app-CaWORlda.mjs");
const Route$f = createFileRoute("/_app")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("../_app.index-C6WEB2BZ.mjs");
const Route$e = createFileRoute("/_app/")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("../_app.feedback-BeexMazO.mjs");
const Route$d = createFileRoute("/_app/feedback")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("../_app.attendance-Df6p7nH7.mjs");
const Route$c = createFileRoute("/_app/attendance")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("../_app.violations.index-Cd6Ak60o.mjs");
const Route$b = createFileRoute("/_app/violations/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("../_app.students.index-Cpppz4C0.mjs");
const Route$a = createFileRoute("/_app/students/")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("../_app.medical.index-Djue7v0M.mjs");
const Route$9 = createFileRoute("/_app/medical/")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("../_app.leave-requests.index-BLM4BC3x.mjs");
const Route$8 = createFileRoute("/_app/leave-requests/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("../_app.delays.index-rOoTN1Q9.mjs");
const Route$7 = createFileRoute("/_app/delays/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("../_app.violations.new-B4tJUi_e.mjs");
const Route$6 = createFileRoute("/_app/violations/new")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_app.students.new-Dp1OlsLn.mjs");
const Route$5 = createFileRoute("/_app/students/new")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_app.medical.new-C_acPgCq.mjs");
const Route$4 = createFileRoute("/_app/medical/new")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_app.leave-requests.new-LW6EoErU.mjs");
const Route$3 = createFileRoute("/_app/leave-requests/new")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_app.delays.new-klNyvIq6.mjs");
const Route$2 = createFileRoute("/_app/delays/new")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_app.students._id.index-BTXBNLHK.mjs");
const Route$1 = createFileRoute("/_app/students/$id/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_app.students._id.edit-Ig3aSiNB.mjs");
const Route = createFileRoute("/_app/students/$id/edit")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LoginRoute = Route$g.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$h
});
const AppRoute = Route$f.update({
  id: "/_app",
  getParentRoute: () => Route$h
});
const AppIndexRoute = Route$e.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppRoute
});
const AppFeedbackRoute = Route$d.update({
  id: "/feedback",
  path: "/feedback",
  getParentRoute: () => AppRoute
});
const AppAttendanceRoute = Route$c.update({
  id: "/attendance",
  path: "/attendance",
  getParentRoute: () => AppRoute
});
const AppViolationsIndexRoute = Route$b.update({
  id: "/violations/",
  path: "/violations/",
  getParentRoute: () => AppRoute
});
const AppStudentsIndexRoute = Route$a.update({
  id: "/students/",
  path: "/students/",
  getParentRoute: () => AppRoute
});
const AppMedicalIndexRoute = Route$9.update({
  id: "/medical/",
  path: "/medical/",
  getParentRoute: () => AppRoute
});
const AppLeaveRequestsIndexRoute = Route$8.update({
  id: "/leave-requests/",
  path: "/leave-requests/",
  getParentRoute: () => AppRoute
});
const AppDelaysIndexRoute = Route$7.update({
  id: "/delays/",
  path: "/delays/",
  getParentRoute: () => AppRoute
});
const AppViolationsNewRoute = Route$6.update({
  id: "/violations/new",
  path: "/violations/new",
  getParentRoute: () => AppRoute
});
const AppStudentsNewRoute = Route$5.update({
  id: "/students/new",
  path: "/students/new",
  getParentRoute: () => AppRoute
});
const AppMedicalNewRoute = Route$4.update({
  id: "/medical/new",
  path: "/medical/new",
  getParentRoute: () => AppRoute
});
const AppLeaveRequestsNewRoute = Route$3.update({
  id: "/leave-requests/new",
  path: "/leave-requests/new",
  getParentRoute: () => AppRoute
});
const AppDelaysNewRoute = Route$2.update({
  id: "/delays/new",
  path: "/delays/new",
  getParentRoute: () => AppRoute
});
const AppStudentsIdIndexRoute = Route$1.update({
  id: "/students/$id/",
  path: "/students/$id/",
  getParentRoute: () => AppRoute
});
const AppStudentsIdEditRoute = Route.update({
  id: "/students/$id/edit",
  path: "/students/$id/edit",
  getParentRoute: () => AppRoute
});
const AppRouteChildren = {
  AppAttendanceRoute,
  AppFeedbackRoute,
  AppIndexRoute,
  AppDelaysNewRoute,
  AppLeaveRequestsNewRoute,
  AppMedicalNewRoute,
  AppStudentsNewRoute,
  AppViolationsNewRoute,
  AppDelaysIndexRoute,
  AppLeaveRequestsIndexRoute,
  AppMedicalIndexRoute,
  AppStudentsIndexRoute,
  AppViolationsIndexRoute,
  AppStudentsIdEditRoute,
  AppStudentsIdIndexRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  LoginRoute
};
const routeTree = Route$h._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
