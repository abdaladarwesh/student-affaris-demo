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

export const Route = createFileRoute("/_app/violations/new")({
  component: NewViolation,
});

function NewViolation() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("تم تسجيل المخالفة بنجاح");
    navigate({ to: "/violations" });
  };
  return (
    <div>
      <PageHeader title="تسجيل مخالفة جديدة" />
      <Card>
        <CardContent className="p-6">
          <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label>الطالب</Label>
              <Select><SelectTrigger><SelectValue placeholder="اختر الطالب" /></SelectTrigger>
                <SelectContent>{students.map((s) => <SelectItem key={s.id} value={s.id}>{s.nameAr} — {s.class}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label htmlFor="date">التاريخ</Label><Input id="date" type="date" defaultValue={new Date().toISOString().slice(0,10)} /></div>
            <div className="space-y-2"><Label htmlFor="class">اسم الفصل</Label><Input id="class" /></div>
            <div className="space-y-2"><Label htmlFor="ref">جهة التحويل</Label><Input id="ref" /></div>
            <div className="space-y-2"><Label htmlFor="proc">الإجراء المتبع</Label><Input id="proc" /></div>
            <div className="space-y-2 md:col-span-2"><Label htmlFor="v">المخالفة</Label><Textarea id="v" rows={3} /></div>
            <div className="space-y-2"><Label htmlFor="sig">التوقيع (اسم المسجل)</Label><Input id="sig" /></div>
            <div className="space-y-2 md:col-span-2"><Label htmlFor="notes">ملاحظات</Label><Textarea id="notes" rows={2} /></div>
            <div className="md:col-span-2 flex justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => navigate({ to: "/violations" })}>إلغاء</Button>
              <Button type="submit">حفظ المخالفة</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
