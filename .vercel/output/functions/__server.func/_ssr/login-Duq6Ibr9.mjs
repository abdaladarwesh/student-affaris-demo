import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { B as Button } from "./button-DA2gxxPy.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { G as GraduationCap } from "../_libs/lucide-react.mjs";
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
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }
    toast.success("تم تسجيل الدخول بنجاح");
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-between bg-sidebar text-sidebar-foreground p-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-sidebar-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "size-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl", children: "شؤون الطلاب" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-70", children: "نظام إدارة المدرسة" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold leading-tight mb-4", children: [
          "أهلاً بك في نظام",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "إدارة شؤون الطلاب"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 text-lg", children: "متابعة الحضور، المخالفات، التأخيرات والسجلات الطبية في مكان واحد." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-60", children: "© 2026 جميع الحقوق محفوظة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-32 -bottom-32 size-96 rounded-full bg-accent/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 top-10 size-72 rounded-full bg-sidebar-accent/40 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-6 md:p-12 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "w-full max-w-md space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "شؤون الطلاب" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground", children: "تسجيل الدخول" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "أدخل بياناتك للوصول إلى لوحة التحكم" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "البريد الإلكتروني" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", placeholder: "name@school.edu", value: email, onChange: (e) => setEmail(e.target.value), dir: "ltr", className: "text-left" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "كلمة المرور" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), dir: "ltr", className: "text-left" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full h-11 text-base", children: "دخول" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "نسخة تجريبية - أي بريد وكلمة مرور تعمل" })
    ] }) })
  ] });
}
export {
  LoginPage as component
};
