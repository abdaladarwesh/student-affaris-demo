import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { students } from "@/lib/mock-data";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/attendance")({
  component: AttendancePage,
});

function AttendancePage() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [klass, setKlass] = useState("1أ");
  const list = students.filter((s) => s.class === klass);
  const [status, setStatus] = useState<Record<string, "present" | "absent" | "leave">>({});

  const set = (id: string, v: "present" | "absent" | "leave") =>
    setStatus((p) => ({ ...p, [id]: v }));

  const counts = {
    present: list.filter((s) => status[s.id] === "present").length,
    absent: list.filter((s) => status[s.id] === "absent").length,
    leave: list.filter((s) => status[s.id] === "leave").length,
  };

  return (
    <div>
      <PageHeader title="تسجيل الحضور اليومي" description="حدد اليوم والفصل ثم سجل حضور الطلاب" />

      <Card className="mb-5">
        <CardContent className="p-4 grid md:grid-cols-4 gap-3">
          <div><Input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
          <Select value={klass} onValueChange={setKlass}>
            <SelectTrigger><SelectValue placeholder="الفصل" /></SelectTrigger>
            <SelectContent>
              {Array.from(new Set(students.map((s) => s.class))).map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <div className="md:col-span-2 flex items-center justify-end gap-4 text-sm">
            <span className="text-emerald-700 font-medium">حاضر: {counts.present}</span>
            <span className="text-destructive font-medium">غائب: {counts.absent}</span>
            <span className="text-accent-foreground font-medium">إذن: {counts.leave}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {list.map((s) => (
              <div key={s.id} className="flex items-center gap-3 p-4">
                <div className="size-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">{s.nameAr.charAt(0)}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{s.nameAr}</div>
                  <div className="text-xs text-muted-foreground">{s.id}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant={status[s.id] === "present" ? "default" : "outline"} onClick={() => set(s.id, "present")}><Check className="size-4 ml-1" />حاضر</Button>
                  <Button size="sm" variant={status[s.id] === "absent" ? "destructive" : "outline"} onClick={() => set(s.id, "absent")}><X className="size-4 ml-1" />غائب</Button>
                  <Button size="sm" variant={status[s.id] === "leave" ? "secondary" : "outline"} onClick={() => set(s.id, "leave")}>إذن</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex justify-end">
            <Button onClick={() => toast.success(`تم حفظ الحضور بتاريخ ${date}`)}>حفظ الحضور</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
