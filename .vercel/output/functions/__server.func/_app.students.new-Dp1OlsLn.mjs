import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { C as Card, a as CardContent, h as students } from "./_ssr/mock-data-D0A69S2S.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { L as Label } from "./_ssr/label-JU3yqRBo.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { T as Textarea } from "./_ssr/textarea-DSyJ1nlY.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./_ssr/select-NX1S2Qd-.mjs";
import { t as toast } from "./_libs/sonner.mjs";
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
import "./_libs/lucide-react.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
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
const fields = [{
  name: "nameAr",
  label: "الاسم (عربي)"
}, {
  name: "nameEn",
  label: "الاسم (إنجليزي)"
}, {
  name: "address",
  label: "العنوان"
}, {
  name: "phone",
  label: "رقم هاتف الطالب"
}, {
  name: "birthDate",
  label: "تاريخ ميلاد الطالب",
  type: "date"
}, {
  name: "nationalNumber",
  label: "الرقم القومي للطالب"
}, {
  name: "middleSchoolScore",
  label: "مجموع الطالب في المدرسة الإعدادية"
}, {
  name: "nationality",
  label: "الجنسية"
}, {
  name: "governorate",
  label: "المحافظة"
}, {
  name: "placeOfBirth",
  label: "مكان الولادة"
}, {
  name: "schoolEmail",
  label: "البريد الإلكتروني الموحد لامتحانات الإعدادية",
  type: "email"
}, {
  name: "fatherName",
  label: "اسم الأب"
}, {
  name: "fatherJob",
  label: "وظيفة الأب"
}, {
  name: "fatherNationalNumber",
  label: "الرقم القومي للأب"
}, {
  name: "fatherPhone",
  label: "رقم هاتف الأب"
}, {
  name: "motherName",
  label: "اسم الأم"
}, {
  name: "motherJob",
  label: "وظيفة الأم"
}, {
  name: "motherNationalNumber",
  label: "الرقم القومي للأم"
}, {
  name: "motherPhone",
  label: "رقم هاتف الأم"
}];
function AddStudent() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const newId = `STU-${1e3 + students.length}`;
    toast.success(`تم حفظ الطالب بنجاح - الرقم: ${newId}`);
    navigate({
      to: "/students"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "إضافة طالب جديد", description: "املأ البيانات التالية لتسجيل طالب جديد في النظام" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-5 md:grid-cols-2", children: [
      fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: f.name, children: f.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: f.name, name: f.name, type: f.type ?? "text" })
      ] }, f.name)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "النوع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "ذكر", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ذكر", children: "ذكر" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "أنثى", children: "أنثى" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "الديانة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "مسلم", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مسلم", children: "مسلم" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مسيحي", children: "مسيحي" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "الحالة الاجتماعية للوالدين" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "متزوج", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "متزوج", children: "متزوج" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مطلق", children: "مطلق" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "الولي" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "الأب", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "الأب", children: "الأب" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "الأم", children: "الأم" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "آخر", children: "شخص آخر" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "medicalNotes", children: "الحالة الصحية (اختياري)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "medicalNotes", placeholder: "أي ملاحظات طبية...", rows: 3 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex gap-3 justify-end pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => navigate({
          to: "/students"
        }), children: "إلغاء" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "حفظ الطالب" })
      ] })
    ] }) }) })
  ] });
}
export {
  AddStudent as component
};
