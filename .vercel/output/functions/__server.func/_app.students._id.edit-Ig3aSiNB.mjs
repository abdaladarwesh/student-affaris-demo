import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { e as useParams, d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { g as getStudent, C as Card, a as CardContent } from "./_ssr/mock-data-D0A69S2S.mjs";
import { I as Input } from "./_ssr/input-C0QjszdI.mjs";
import { L as Label } from "./_ssr/label-JU3yqRBo.mjs";
import { B as Button } from "./_ssr/button-DA2gxxPy.mjs";
import { T as Textarea } from "./_ssr/textarea-DSyJ1nlY.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./_ssr/select-NX1S2Qd-.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { T as Trash2 } from "./_libs/lucide-react.mjs";
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
function EditStudent() {
  const {
    id
  } = useParams({
    from: "/_app/students/$id/edit"
  });
  const navigate = useNavigate();
  const s = getStudent(id);
  if (!s) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/students", children: "العودة" }) }) });
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("تم تحديث بيانات الطالب بنجاح");
    navigate({
      to: "/students/$id",
      params: {
        id: s.id
      }
    });
  };
  const f = (name, label, defaultValue, type = "text") => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: name, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: name, name, defaultValue, type })
  ] }, name);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: `تعديل بيانات: ${s.nameAr}`, description: s.id, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", onClick: () => {
      toast.success("تم حذف الطالب");
      navigate({
        to: "/students"
      });
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4 ml-2" }),
      " حذف الطالب"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-5 md:grid-cols-2", children: [
      f("nameAr", "الاسم (عربي)", s.nameAr),
      f("nameEn", "الاسم (إنجليزي)", s.nameEn),
      f("address", "العنوان", s.address),
      f("phone", "رقم هاتف الطالب", s.phone),
      f("birthDate", "تاريخ الميلاد", s.birthDate, "date"),
      f("nationalNumber", "الرقم القومي", s.nationalNumber),
      f("middleSchoolScore", "مجموع الإعدادية", s.middleSchoolScore),
      f("nationality", "الجنسية", s.nationality),
      f("governorate", "المحافظة", s.governorate),
      f("placeOfBirth", "مكان الولادة", s.placeOfBirth),
      f("schoolEmail", "البريد الإلكتروني", s.schoolEmail, "email"),
      f("fatherName", "اسم الأب", s.fatherName),
      f("fatherJob", "وظيفة الأب", s.fatherJob),
      f("fatherPhone", "هاتف الأب", s.fatherPhone),
      f("motherName", "اسم الأم", s.motherName),
      f("motherJob", "وظيفة الأم", s.motherJob),
      f("motherPhone", "هاتف الأم", s.motherPhone),
      f("grade", "الصف", s.grade),
      f("class", "الفصل", s.class),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "الديانة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.religion, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مسلم", children: "مسلم" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مسيحي", children: "مسيحي" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "النوع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.gender, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ذكر", children: "ذكر" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "أنثى", children: "أنثى" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "الحالة الاجتماعية" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.maritalStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "متزوج", children: "متزوج" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مطلق", children: "مطلق" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "الولي" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.guardian, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "الأب", children: "الأب" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "الأم", children: "الأم" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "آخر", children: "آخر" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "حالة القيد" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.registrationStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مقيد", children: "مقيد" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "غير مقيد", children: "غير مقيد" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "المستندات" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.documentsStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مكتمل", children: "مكتمل" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ناقص", children: "ناقص" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "المصاريف المدرسية" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: s.expenses, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "مدفوع", children: "مدفوع" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "غير مدفوع", children: "غير مدفوع" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "medicalNotes", children: "الحالة الصحية" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "medicalNotes", defaultValue: s.medicalNotes, rows: 3 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex gap-3 justify-end pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => navigate({
          to: "/students/$id",
          params: {
            id: s.id
          }
        }), children: "إلغاء" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "حفظ التعديلات" })
      ] })
    ] }) }) })
  ] });
}
export {
  EditStudent as component
};
