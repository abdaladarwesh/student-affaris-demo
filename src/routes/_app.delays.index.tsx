import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { delays, studentName } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/delays/")({
  component: DelaysPage,
});

function DelaysPage() {
  return (
    <div>
      <PageHeader title="سجل التأخيرات"
        action={<Button asChild><Link to="/delays/new"><Plus className="size-4 ml-2" />تسجيل تأخير</Link></Button>}
      />
      <Card><CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader><TableRow>
            <TableHead>اسم الطالب</TableHead><TableHead>الفصل</TableHead><TableHead>اليوم</TableHead><TableHead>وقت الحضور</TableHead><TableHead>ملاحظات</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {delays.map((d) => (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{studentName(d.studentId)}</TableCell>
                <TableCell>{d.class}</TableCell>
                <TableCell className="font-mono text-xs">{d.date}</TableCell>
                <TableCell className="font-mono">{d.arrivalTime}</TableCell>
                <TableCell className="text-muted-foreground">{d.notes || "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
