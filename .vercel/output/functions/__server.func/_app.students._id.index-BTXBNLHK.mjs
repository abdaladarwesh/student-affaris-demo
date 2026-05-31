import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { e as useParams, d as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./_ssr/AppLayout-BrYJRoLB.mjs";
import { g as getStudent, v as violations, e as delays, m as medicalCases, C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./_ssr/mock-data-D0A69S2S.mjs";
import { B as Button, b as buttonVariants } from "./_ssr/button-DA2gxxPy.mjs";
import { B as Badge } from "./_ssr/badge-DyfXZgLs.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-DhIrzwGX.mjs";
import { R as Root2, b as Trigger2, P as Portal2, a as Content2, T as Title2, D as Description2, C as Cancel, A as Action, O as Overlay2 } from "./_libs/radix-ui__react-alert-dialog.mjs";
import { c as cn } from "./_ssr/utils-H80jjgLf.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { P as Pencil, T as Trash2 } from "./_libs/lucide-react.mjs";
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
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-dialog.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/tailwind-merge.mjs";
const AlertDialog = Root2;
const AlertDialogTrigger = Trigger2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: value || "—" })
  ] });
}
function StudentProfile() {
  const {
    id
  } = useParams({
    from: "/_app/students/$id/"
  });
  const navigate = useNavigate();
  const s = getStudent(id);
  if (!s) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-2", children: "الطالب غير موجود" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/students", children: "العودة للقائمة" }) })
    ] });
  }
  const sViolations = violations.filter((v) => v.studentId === s.id);
  const sDelays = delays.filter((d) => d.studentId === s.id);
  const sMedical = medicalCases.filter((m) => m.studentId === s.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: s.nameAr, description: `${s.id} • ${s.grade} • الفصل ${s.class}`, action: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/students/$id/edit", params: {
        id: s.id
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "size-4 ml-2" }),
        " تعديل"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4 ml-2" }),
          " حذف"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "تأكيد حذف الطالب" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
              "هل أنت متأكد من حذف الطالب ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: s.nameAr }),
              "؟ لن يعود الطالب يظهر في النظام."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "إلغاء" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => {
              toast.success("تم حذف الطالب بنجاح");
              navigate({
                to: "/students"
              });
            }, children: "تأكيد الحذف" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "حالة القيد" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.registrationStatus === "مقيد" ? "default" : "destructive", className: "mt-2", children: s.registrationStatus })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "المستندات" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.documentsStatus === "مكتمل" ? "default" : "destructive", className: "mt-2", children: s.documentsStatus })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "المصاريف" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.expenses === "مدفوع" ? "default" : "destructive", className: "mt-2", children: s.expenses })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "إجمالي أيام الغياب" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold mt-1", children: [
          parseInt(s.id.slice(-2)) % 8 + 1,
          " يوم"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "البيانات الشخصية" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-5 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الاسم (عربي)", value: s.nameAr }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الاسم (إنجليزي)", value: s.nameEn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "النوع", value: s.gender }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "تاريخ الميلاد", value: s.birthDate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "مكان الولادة", value: s.placeOfBirth }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الجنسية", value: s.nationality }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "المحافظة", value: s.governorate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الديانة", value: s.religion }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الرقم القومي", value: s.nationalNumber }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "رقم الهاتف", value: s.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "البريد الإلكتروني", value: s.schoolEmail }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "العنوان", value: s.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "مجموع الإعدادية", value: s.middleSchoolScore }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الحالة الصحية", value: s.medicalNotes })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "بيانات ولي الأمر" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-5 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "اسم الأب", value: s.fatherName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "وظيفة الأب", value: s.fatherJob }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "هاتف الأب", value: s.fatherPhone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "اسم الأم", value: s.motherName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "وظيفة الأم", value: s.motherJob }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "هاتف الأم", value: s.motherPhone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الحالة الاجتماعية", value: s.maritalStatus }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الولي", value: s.guardian })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
        "المخالفات (",
        sViolations.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: sViolations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "لا توجد مخالفات" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "التاريخ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "المخالفة" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "الإجراء" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sViolations.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.violation }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.procedure })
        ] }, v.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
        "التأخيرات (",
        sDelays.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: sDelays.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "لا توجد تأخيرات" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "التاريخ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "وقت الحضور" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "ملاحظات" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sDelays.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: d.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: d.arrivalTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: d.notes || "—" })
        ] }, d.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
        "الحالات الطبية (",
        sMedical.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: sMedical.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "لا توجد حالات طبية مسجلة" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "التاريخ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "نوع المرض" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "ملاحظات" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sMedical.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: m.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: m.illnessType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: m.notes || "—" })
        ] }, m.id)) })
      ] }) })
    ] })
  ] });
}
export {
  StudentProfile as component
};
