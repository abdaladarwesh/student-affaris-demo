import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { medicalCases, studentName } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/medical/")({
  component: MedicalPage,
});

function MedicalPage() {
  return (
    <div>
      <PageHeader title="سجل الحالات الطبية"
        action={<Button asChild><Link to="/medical/new"><Plus className="size-4 ml-2" />تسجيل حالة طبية</Link></Button>}
      />
      <Card><CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader><TableRow>
            <TableHead>اسم الطالب</TableHead><TableHead>الفصل</TableHead><TableHead>التاريخ</TableHead><TableHead>نوع المرض</TableHead><TableHead>ملاحظات</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {medicalCases.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{studentName(m.studentId)}</TableCell>
                <TableCell>{m.class}</TableCell>
                <TableCell className="font-mono text-xs">{m.date}</TableCell>
                <TableCell>{m.illnessType}</TableCell>
                <TableCell className="text-muted-foreground">{m.notes || "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
