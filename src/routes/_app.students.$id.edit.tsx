import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getStudent } from "@/lib/mock-data";
import { toast } from "sonner";
import type { FormEvent } from "react";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/_app/students/$id/edit")({
  component: EditStudent,
});

function EditStudent() {
  const { id } = useParams({ from: "/_app/students/$id/edit" });
  const navigate = useNavigate();
  const s = getStudent(id);

  if (!s) return <div className="text-center py-20"><Button asChild><Link to="/students">العودة</Link></Button></div>;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("تم تحديث بيانات الطالب بنجاح");
    navigate({ to: "/students/$id", params: { id: s.id } });
  };

  const f = (name: string, label: string, defaultValue?: string, type = "text") => (
    <div className="space-y-2" key={name}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} defaultValue={defaultValue} type={type} />
    </div>
  );

  return (
    <div>
      <PageHeader title={`تعديل بيانات: ${s.nameAr}`} description={s.id}
        action={<Button variant="destructive" onClick={() => { toast.success("تم حذف الطالب"); navigate({ to: "/students" }); }}><Trash2 className="size-4 ml-2" /> حذف الطالب</Button>}
      />
      <Card>
        <CardContent className="p-6">
          <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
            {f("nameAr", "الاسم (عربي)", s.nameAr)}
            {f("nameEn", "الاسم (إنجليزي)", s.nameEn)}
            {f("address", "العنوان", s.address)}
            {f("phone", "رقم هاتف الطالب", s.phone)}
            {f("birthDate", "تاريخ الميلاد", s.birthDate, "date")}
            {f("nationalNumber", "الرقم القومي", s.nationalNumber)}
            {f("middleSchoolScore", "مجموع الإعدادية", s.middleSchoolScore)}
            {f("nationality", "الجنسية", s.nationality)}
            {f("governorate", "المحافظة", s.governorate)}
            {f("placeOfBirth", "مكان الولادة", s.placeOfBirth)}
            {f("schoolEmail", "البريد الإلكتروني", s.schoolEmail, "email")}
            {f("fatherName", "اسم الأب", s.fatherName)}
            {f("fatherJob", "وظيفة الأب", s.fatherJob)}
            {f("fatherPhone", "هاتف الأب", s.fatherPhone)}
            {f("motherName", "اسم الأم", s.motherName)}
            {f("motherJob", "وظيفة الأم", s.motherJob)}
            {f("motherPhone", "هاتف الأم", s.motherPhone)}
            {f("grade", "الصف", s.grade)}
            {f("class", "الفصل", s.class)}

            <div className="space-y-2"><Label>الديانة</Label>
              <Select defaultValue={s.religion}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="مسلم">مسلم</SelectItem><SelectItem value="مسيحي">مسيحي</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>النوع</Label>
              <Select defaultValue={s.gender}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="ذكر">ذكر</SelectItem><SelectItem value="أنثى">أنثى</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>الحالة الاجتماعية</Label>
              <Select defaultValue={s.maritalStatus}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="متزوج">متزوج</SelectItem><SelectItem value="مطلق">مطلق</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>الولي</Label>
              <Select defaultValue={s.guardian}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="الأب">الأب</SelectItem><SelectItem value="الأم">الأم</SelectItem><SelectItem value="آخر">آخر</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>حالة القيد</Label>
              <Select defaultValue={s.registrationStatus}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="مقيد">مقيد</SelectItem><SelectItem value="غير مقيد">غير مقيد</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>المستندات</Label>
              <Select defaultValue={s.documentsStatus}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="مكتمل">مكتمل</SelectItem><SelectItem value="ناقص">ناقص</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>المصاريف المدرسية</Label>
              <Select defaultValue={s.expenses}><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="مدفوع">مدفوع</SelectItem><SelectItem value="غير مدفوع">غير مدفوع</SelectItem></SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="medicalNotes">الحالة الصحية</Label>
              <Textarea id="medicalNotes" defaultValue={s.medicalNotes} rows={3} />
            </div>

            <div className="md:col-span-2 flex gap-3 justify-end pt-2">
              <Button type="button" variant="outline" onClick={() => navigate({ to: "/students/$id", params: { id: s.id } })}>إلغاء</Button>
              <Button type="submit">حفظ التعديلات</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
