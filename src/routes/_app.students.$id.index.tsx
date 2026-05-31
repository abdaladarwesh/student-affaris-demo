import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Pencil, Trash2 } from "lucide-react";
import { delays, getStudent, medicalCases, violations } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/students/$id/")({
  component: StudentProfile,
});

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="text-sm font-medium">{value || "—"}</div>
    </div>
  );
}

function StudentProfile() {
  const { id } = useParams({ from: "/_app/students/$id/" });
  const navigate = useNavigate();
  const s = getStudent(id);

  if (!s) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">الطالب غير موجود</h2>
        <Button asChild><Link to="/students">العودة للقائمة</Link></Button>
      </div>
    );
  }

  const sViolations = violations.filter((v) => v.studentId === s.id);
  const sDelays = delays.filter((d) => d.studentId === s.id);
  const sMedical = medicalCases.filter((m) => m.studentId === s.id);

  return (
    <div>
      <PageHeader
        title={s.nameAr}
        description={`${s.id} • ${s.grade} • الفصل ${s.class}`}
        action={
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/students/$id/edit" params={{ id: s.id }}><Pencil className="size-4 ml-2" /> تعديل</Link>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive"><Trash2 className="size-4 ml-2" /> حذف</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>تأكيد حذف الطالب</AlertDialogTitle>
                  <AlertDialogDescription>
                    هل أنت متأكد من حذف الطالب <strong>{s.nameAr}</strong>؟ لن يعود الطالب يظهر في النظام.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>إلغاء</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      toast.success("تم حذف الطالب بنجاح");
                      navigate({ to: "/students" });
                    }}
                  >
                    تأكيد الحذف
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-5">
        <Card><CardContent className="p-4">
          <div className="text-xs text-muted-foreground">حالة القيد</div>
          <Badge variant={s.registrationStatus === "مقيد" ? "default" : "destructive"} className="mt-2">{s.registrationStatus}</Badge>
        </CardContent></Card>
        <Card><CardContent className="p-4">
          <div className="text-xs text-muted-foreground">المستندات</div>
          <Badge variant={s.documentsStatus === "مكتمل" ? "default" : "destructive"} className="mt-2">{s.documentsStatus}</Badge>
        </CardContent></Card>
        <Card><CardContent className="p-4">
          <div className="text-xs text-muted-foreground">المصاريف</div>
          <Badge variant={s.expenses === "مدفوع" ? "default" : "destructive"} className="mt-2">{s.expenses}</Badge>
        </CardContent></Card>
        <Card><CardContent className="p-4">
          <div className="text-xs text-muted-foreground">إجمالي أيام الغياب</div>
          <div className="text-2xl font-bold mt-1">{(parseInt(s.id.slice(-2)) % 8) + 1} يوم</div>
        </CardContent></Card>
      </div>

      <Card className="mb-5">
        <CardHeader><CardTitle>البيانات الشخصية</CardTitle></CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-3">
          <Field label="الاسم (عربي)" value={s.nameAr} />
          <Field label="الاسم (إنجليزي)" value={s.nameEn} />
          <Field label="النوع" value={s.gender} />
          <Field label="تاريخ الميلاد" value={s.birthDate} />
          <Field label="مكان الولادة" value={s.placeOfBirth} />
          <Field label="الجنسية" value={s.nationality} />
          <Field label="المحافظة" value={s.governorate} />
          <Field label="الديانة" value={s.religion} />
          <Field label="الرقم القومي" value={s.nationalNumber} />
          <Field label="رقم الهاتف" value={s.phone} />
          <Field label="البريد الإلكتروني" value={s.schoolEmail} />
          <Field label="العنوان" value={s.address} />
          <Field label="مجموع الإعدادية" value={s.middleSchoolScore} />
          <Field label="الحالة الصحية" value={s.medicalNotes} />
        </CardContent>
      </Card>

      <Card className="mb-5">
        <CardHeader><CardTitle>بيانات ولي الأمر</CardTitle></CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-3">
          <Field label="اسم الأب" value={s.fatherName} />
          <Field label="وظيفة الأب" value={s.fatherJob} />
          <Field label="هاتف الأب" value={s.fatherPhone} />
          <Field label="اسم الأم" value={s.motherName} />
          <Field label="وظيفة الأم" value={s.motherJob} />
          <Field label="هاتف الأم" value={s.motherPhone} />
          <Field label="الحالة الاجتماعية" value={s.maritalStatus} />
          <Field label="الولي" value={s.guardian} />
        </CardContent>
      </Card>

      <Card className="mb-5">
        <CardHeader><CardTitle>المخالفات ({sViolations.length})</CardTitle></CardHeader>
        <CardContent>
          {sViolations.length === 0 ? <div className="text-sm text-muted-foreground">لا توجد مخالفات</div> : (
            <Table>
              <TableHeader><TableRow><TableHead>التاريخ</TableHead><TableHead>المخالفة</TableHead><TableHead>الإجراء</TableHead></TableRow></TableHeader>
              <TableBody>{sViolations.map((v) => (<TableRow key={v.id}><TableCell>{v.date}</TableCell><TableCell>{v.violation}</TableCell><TableCell>{v.procedure}</TableCell></TableRow>))}</TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card className="mb-5">
        <CardHeader><CardTitle>التأخيرات ({sDelays.length})</CardTitle></CardHeader>
        <CardContent>
          {sDelays.length === 0 ? <div className="text-sm text-muted-foreground">لا توجد تأخيرات</div> : (
            <Table>
              <TableHeader><TableRow><TableHead>التاريخ</TableHead><TableHead>وقت الحضور</TableHead><TableHead>ملاحظات</TableHead></TableRow></TableHeader>
              <TableBody>{sDelays.map((d) => (<TableRow key={d.id}><TableCell>{d.date}</TableCell><TableCell>{d.arrivalTime}</TableCell><TableCell>{d.notes || "—"}</TableCell></TableRow>))}</TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>الحالات الطبية ({sMedical.length})</CardTitle></CardHeader>
        <CardContent>
          {sMedical.length === 0 ? <div className="text-sm text-muted-foreground">لا توجد حالات طبية مسجلة</div> : (
            <Table>
              <TableHeader><TableRow><TableHead>التاريخ</TableHead><TableHead>نوع المرض</TableHead><TableHead>ملاحظات</TableHead></TableRow></TableHeader>
              <TableBody>{sMedical.map((m) => (<TableRow key={m.id}><TableCell>{m.date}</TableCell><TableCell>{m.illnessType}</TableCell><TableCell>{m.notes || "—"}</TableCell></TableRow>))}</TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
