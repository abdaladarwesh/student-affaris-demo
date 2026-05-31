import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { leaveRequests, studentName } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/leave-requests/")({
  component: LeaveListPage,
});

function LeaveListPage() {
  return (
    <div>
      <PageHeader title="طلبات الأذن"
        action={<Button asChild><Link to="/leave-requests/new"><Plus className="size-4 ml-2" />طلب أذن جديد</Link></Button>}
      />
      <Card><CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader><TableRow>
            <TableHead>اسم الطالب</TableHead><TableHead>الفصل</TableHead><TableHead>اليوم</TableHead><TableHead>سبب طلب الأذن</TableHead><TableHead>الحالة</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {leaveRequests.map((l) => (
              <TableRow key={l.id}>
                <TableCell className="font-medium">{studentName(l.studentId)}</TableCell>
                <TableCell>{l.class}</TableCell>
                <TableCell className="font-mono text-xs">{l.date}</TableCell>
                <TableCell>{l.reason}</TableCell>
                <TableCell><Badge variant={l.status === "موافق" ? "default" : "secondary"}>{l.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
