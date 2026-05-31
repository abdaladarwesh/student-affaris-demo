import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const arabicNames = [
  "أحمد محمد علي",
  "محمود حسن إبراهيم",
  "يوسف خالد سعيد",
  "عمر طارق فؤاد",
  "مريم سامي رمضان",
  "فاطمة عبدالله النجار",
  "نور الدين شريف",
  "حسام أيمن صبري",
  "كريم وليد عبدالعزيز",
  "سارة محمود زكي",
  "ليلى أحمد العشري",
  "زياد عماد فتحي"
];
const englishNames = [
  "Ahmed Mohamed Ali",
  "Mahmoud Hassan Ibrahim",
  "Youssef Khaled Said",
  "Omar Tarek Fouad",
  "Mariam Sami Ramadan",
  "Fatma Abdullah Elnaggar",
  "Nour Eldin Sherif",
  "Hossam Ayman Sabry",
  "Karim Walid Abdelaziz",
  "Sara Mahmoud Zaki",
  "Laila Ahmed Eloshary",
  "Ziad Emad Fathy"
];
const grades = ["الصف الأول الثانوي", "الصف الثاني الثانوي", "الصف الثالث الثانوي"];
const classes = ["1أ", "1ب", "2أ", "2ب", "3أ", "3ب"];
const students = arabicNames.map((n, i) => ({
  id: `STU-${1e3 + i}`,
  nameAr: n,
  nameEn: englishNames[i],
  address: "القاهرة - مدينة نصر - شارع عباس العقاد",
  phone: `0101234${String(5670 + i).padStart(4, "0")}`,
  birthDate: `200${5 + i % 3}-0${i % 9 + 1}-1${i % 9}`,
  nationalNumber: `3050${String(1e7 + i * 137).padStart(11, "0")}`.slice(0, 14),
  middleSchoolScore: `${260 + i}`,
  gender: i % 3 === 0 ? "أنثى" : "ذكر",
  nationality: "مصري",
  governorate: "القاهرة",
  placeOfBirth: "القاهرة",
  schoolEmail: `student${1e3 + i}@moe.edu.eg`,
  religion: i % 5 === 0 ? "مسيحي" : "مسلم",
  fatherName: `الأب: ${n.split(" ").slice(1).join(" ")}`,
  fatherJob: "موظف",
  fatherNationalNumber: `2870${String(2e7 + i * 211).padStart(11, "0")}`.slice(0, 14),
  fatherPhone: `0122345${String(1230 + i).padStart(4, "0")}`,
  motherName: `الأم: السيدة ${n.split(" ")[0]}`,
  motherJob: "ربة منزل",
  motherNationalNumber: `2880${String(3e7 + i * 173).padStart(11, "0")}`.slice(0, 14),
  motherPhone: `0102345${String(6780 + i).padStart(4, "0")}`,
  maritalStatus: i % 7 === 0 ? "مطلق" : "متزوج",
  guardian: i % 7 === 0 ? "الأم" : "الأب",
  medicalNotes: i % 4 === 0 ? "حساسية من الفول السوداني" : void 0,
  grade: grades[i % 3],
  class: classes[i % classes.length],
  registrationStatus: i % 11 === 0 ? "غير مقيد" : "مقيد",
  documentsStatus: i % 5 === 0 ? "ناقص" : "مكتمل",
  expenses: i % 4 === 0 ? "غير مدفوع" : "مدفوع"
}));
const violations = [
  { id: "V-1", studentId: "STU-1000", date: "2025-05-10", class: "1أ", violation: "تأخر متكرر في الحصص", referringAuthority: "المشرف العام", procedure: "إنذار شفهي", signedBy: "أ. محمد عبده" },
  { id: "V-2", studentId: "STU-1002", date: "2025-05-12", class: "2أ", violation: "استخدام الموبايل أثناء الحصة", referringAuthority: "معلم الفصل", procedure: "مصادرة الموبايل لليوم", signedBy: "أ. سامية فؤاد" },
  { id: "V-3", studentId: "STU-1005", date: "2025-05-15", class: "3أ", violation: "مشاجرة في الفناء", referringAuthority: "وكيل المدرسة", procedure: "استدعاء ولي الأمر", signedBy: "أ. خالد رمضان" }
];
const delays = [
  { id: "D-1", studentId: "STU-1001", class: "1ب", date: "2025-05-20", arrivalTime: "07:45", notes: "زحام في المواصلات" },
  { id: "D-2", studentId: "STU-1003", class: "2ب", date: "2025-05-21", arrivalTime: "08:10" },
  { id: "D-3", studentId: "STU-1006", class: "1أ", date: "2025-05-22", arrivalTime: "07:55" }
];
const leaveRequests = [
  { id: "L-1", studentId: "STU-1004", class: "2ب", date: "2025-05-18", reason: "زيارة طبية", status: "موافق" },
  { id: "L-2", studentId: "STU-1007", class: "3أ", date: "2025-05-19", reason: "ظرف عائلي", status: "قيد المراجعة" }
];
const medicalCases = [
  { id: "M-1", studentId: "STU-1000", class: "1أ", date: "2025-05-08", studentPhone: "01012345670", parentPhone: "01223451230", illnessType: "صداع شديد", notes: "تم نقله للحجرة الطبية" },
  { id: "M-2", studentId: "STU-1008", class: "2أ", date: "2025-05-14", studentPhone: "01012345678", parentPhone: "01223451238", illnessType: "ارتفاع في الحرارة", notes: "تم إبلاغ ولي الأمر" }
];
const feedbacks = [
  { id: "F-1", studentId: "STU-1000", teacherName: "أ. محمد عبده", date: "2025-05-01", feedback: "طالب متميز في الرياضيات، يحتاج لتحسين الانضباط في حصة اللغة العربية." },
  { id: "F-2", studentId: "STU-1002", teacherName: "أ. سامية فؤاد", date: "2025-05-03", feedback: "تحسن ملحوظ في الأداء خلال الشهر الأخير." },
  { id: "F-3", studentId: "STU-1005", teacherName: "أ. خالد رمضان", date: "2025-05-09", feedback: "يحتاج إلى متابعة أكثر من ولي الأمر في حل الواجبات." }
];
const absenceByClass = classes.map((c, i) => ({
  class: c,
  averageAbsence: 2 + i * 3 % 7 + (i % 2 ? 0.5 : 0)
}));
const getStudent = (id) => students.find((s) => s.id === id);
const studentName = (id) => getStudent(id)?.nameAr ?? id;
export {
  Card as C,
  CardContent as a,
  CardHeader as b,
  CardTitle as c,
  absenceByClass as d,
  delays as e,
  feedbacks as f,
  getStudent as g,
  students as h,
  leaveRequests as l,
  medicalCases as m,
  studentName as s,
  violations as v
};
