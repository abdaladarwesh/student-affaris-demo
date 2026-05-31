import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/AppLayout";
import { students } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, UserPlus } from "lucide-react";

export const Route = createFileRoute("/_app/students/")({
  component: StudentsList,
});

function StudentsList() {
  const [q, setQ] = useState("");
  const [grade, setGrade] = useState("all");
  const [klass, setKlass] = useState("all");

  const grades = useMemo(() => Array.from(new Set(students.map((s) => s.grade))), []);
  const classes = useMemo(() => Array.from(new Set(students.map((s) => s.class))), []);

  const filtered = students.filter((s) => {
    if (q && !s.nameAr.includes(q) && !s.nameEn.toLowerCase().includes(q.toLowerCase())) return false;
    if (grade !== "all" && s.grade !== grade) return false;
    if (klass !== "all" && s.class !== klass) return false;
    return true;
  });

  return (
    <div>
      <PageHeader
        title="قائمة الطلاب"
        description={`عرض ${filtered.length} من إجمالي ${students.length} طالب`}
        action={
          <Button asChild>
            <Link to="/students/new"><UserPlus className="size-4 ml-2" /> إضافة طالب</Link>
          </Button>
        }
      />

      <Card className="mb-5">
        <CardContent className="p-4 grid md:grid-cols-4 gap-3">
          <div className="relative md:col-span-2">
            <Search className="size-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="ابحث باسم الطالب..." value={q} onChange={(e) => setQ(e.target.value)} className="pr-9" />
          </div>
          <Select value={grade} onValueChange={setGrade}>
            <SelectTrigger><SelectValue placeholder="الصف" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل الصفوف</SelectItem>
              {grades.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={klass} onValueChange={setKlass}>
            <SelectTrigger><SelectValue placeholder="الفصل" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل الفصول</SelectItem>
              {classes.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <Link
            key={s.id}
            to="/students/$id"
            params={{ id: s.id }}
            className="block rounded-xl border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                {s.nameAr.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{s.nameAr}</div>
                <div className="text-xs text-muted-foreground truncate">{s.grade} • {s.class}</div>
              </div>
              <span className="text-xs text-muted-foreground">{s.id}</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground">لا توجد نتائج مطابقة</div>
        )}
      </div>
    </div>
  );
}
