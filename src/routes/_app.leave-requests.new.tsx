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

export const Route = createFileRoute("/_app/leave-requests/new")({
  component: NewLeave,
});

function NewLeave() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("تم حفظ طلب الأذن");
    navigate({ to: "/leave-requests" });
  };
  return (
    <div>
      <PageHeader title="طلب أذن جديد" />
      <Card><CardContent className="p-6">
        <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2"><Label>الطالب</Label>
            <Select><SelectTrigger><SelectValue placeholder="اختر الطالب" /></SelectTrigger>
              <SelectContent>{students.map((s) => <SelectItem key={s.id} value={s.id}>{s.nameAr} — {s.class}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label htmlFor="class">الفصل</Label><Input id="class" /></div>
          <div className="space-y-2"><Label htmlFor="date">اليوم</Label><Input id="date" type="date" defaultValue={new Date().toISOString().slice(0,10)} /></div>
          <div className="space-y-2 md:col-span-2"><Label htmlFor="reason">سبب طلب الأذن</Label><Textarea id="reason" rows={3} /></div>
          <div className="space-y-2 md:col-span-2"><Label htmlFor="notes">ملاحظات</Label><Textarea id="notes" rows={2} /></div>
          <div className="md:col-span-2 flex justify-end gap-3"><Button type="button" variant="outline" onClick={() => navigate({ to: "/leave-requests" })}>إلغاء</Button><Button type="submit">حفظ</Button></div>
        </form>
      </CardContent></Card>
    </div>
  );
}
