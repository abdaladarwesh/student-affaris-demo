import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { students } from "@/lib/mock-data";
import { toast } from "sonner";
import type { FormEvent } from "react";

export const Route = createFileRoute("/_app/medical/new")({
  component: NewMedical,
});

function NewMedical() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("تم تسجيل الحالة الطبية");
    navigate({ to: "/medical" });
  };
  return (
    <div>
      <PageHeader title="تسجيل حالة طبية" />
      <Card><CardContent className="p-6">
        <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2"><Label>الطالب</Label>
            <Select><SelectTrigger><SelectValue placeholder="اختر الطالب" /></SelectTrigger>
              <SelectContent>{students.map((s) => <SelectItem key={s.id} value={s.id}>{s.nameAr} — {s.class}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label htmlFor="class">الفصل</Label><Input id="class" /></div>
          <div className="space-y-2"><Label htmlFor="date">التاريخ</Label><Input id="date" type="date" defaultValue={new Date().toISOString().slice(0,10)} /></div>
          <div className="space-y-2"><Label htmlFor="sphone">هاتف الطالب</Label><Input id="sphone" /></div>
          <div className="space-y-2"><Label htmlFor="pphone">هاتف ولي الأمر</Label><Input id="pphone" /></div>
          <div className="space-y-2 md:col-span-2"><Label htmlFor="illness">نوع المرض</Label><Input id="illness" /></div>
          <div className="space-y-2 md:col-span-2"><Label htmlFor="notes">ملاحظات</Label><Textarea id="notes" rows={3} /></div>
          <div className="md:col-span-2 flex justify-end gap-3"><Button type="button" variant="outline" onClick={() => navigate({ to: "/medical" })}>إلغاء</Button><Button type="submit">حفظ</Button></div>
        </form>
      </CardContent></Card>
    </div>
  );
}
