import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { students } from "@/lib/mock-data";
import type { FormEvent } from "react";

export const Route = createFileRoute("/_app/students/new")({
  component: AddStudent,
});

const fields: { name: string; label: string; type?: string }[] = [
  { name: "nameAr", label: "الاسم (عربي)" },
  { name: "nameEn", label: "الاسم (إنجليزي)" },
  { name: "address", label: "العنوان" },
  { name: "phone", label: "رقم هاتف الطالب" },
  { name: "birthDate", label: "تاريخ ميلاد الطالب", type: "date" },
  { name: "nationalNumber", label: "الرقم القومي للطالب" },
  { name: "middleSchoolScore", label: "مجموع الطالب في المدرسة الإعدادية" },
  { name: "nationality", label: "الجنسية" },
  { name: "governorate", label: "المحافظة" },
  { name: "placeOfBirth", label: "مكان الولادة" },
  { name: "schoolEmail", label: "البريد الإلكتروني الموحد لامتحانات الإعدادية", type: "email" },
  { name: "fatherName", label: "اسم الأب" },
  { name: "fatherJob", label: "وظيفة الأب" },
  { name: "fatherNationalNumber", label: "الرقم القومي للأب" },
  { name: "fatherPhone", label: "رقم هاتف الأب" },
  { name: "motherName", label: "اسم الأم" },
  { name: "motherJob", label: "وظيفة الأم" },
  { name: "motherNationalNumber", label: "الرقم القومي للأم" },
  { name: "motherPhone", label: "رقم هاتف الأم" },
];

function AddStudent() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newId = `STU-${1000 + students.length}`;
    toast.success(`تم حفظ الطالب بنجاح - الرقم: ${newId}`);
    navigate({ to: "/students" });
  };

  return (
    <div>
      <PageHeader title="إضافة طالب جديد" description="املأ البيانات التالية لتسجيل طالب جديد في النظام" />
      <Card>
        <CardContent className="p-6">
          <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
            {fields.map((f) => (
              <div key={f.name} className="space-y-2">
                <Label htmlFor={f.name}>{f.label}</Label>
                <Input id={f.name} name={f.name} type={f.type ?? "text"} />
              </div>
            ))}

            <div className="space-y-2">
              <Label>النوع</Label>
              <Select defaultValue="ذكر">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ذكر">ذكر</SelectItem>
                  <SelectItem value="أنثى">أنثى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>الديانة</Label>
              <Select defaultValue="مسلم">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="مسلم">مسلم</SelectItem>
                  <SelectItem value="مسيحي">مسيحي</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>الحالة الاجتماعية للوالدين</Label>
              <Select defaultValue="متزوج">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="متزوج">متزوج</SelectItem>
                  <SelectItem value="مطلق">مطلق</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>الولي</Label>
              <Select defaultValue="الأب">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="الأب">الأب</SelectItem>
                  <SelectItem value="الأم">الأم</SelectItem>
                  <SelectItem value="آخر">شخص آخر</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="medicalNotes">الحالة الصحية (اختياري)</Label>
              <Textarea id="medicalNotes" placeholder="أي ملاحظات طبية..." rows={3} />
            </div>

            <div className="md:col-span-2 flex gap-3 justify-end pt-2">
              <Button type="button" variant="outline" onClick={() => navigate({ to: "/students" })}>إلغاء</Button>
              <Button type="submit">حفظ الطالب</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
