import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Send, UserRound } from "lucide-react";
import { violations, studentName, getStudent } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/violations/")({
  component: ViolationsPage,
});

function ViolationsPage() {
  return (
    <div>
      <PageHeader
        title="سجل المخالفات"
        description={`عدد المخالفات: ${violations.length}`}
        action={<Button asChild><Link to="/violations/new"><Plus className="size-4 ml-2" />تسجيل مخالفة</Link></Button>}
      />
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>التاريخ</TableHead>
                <TableHead>اسم الطالب</TableHead>
                <TableHead>الفصل</TableHead>
                <TableHead>المخالفة</TableHead>
                <TableHead>الإجراء</TableHead>
                <TableHead className="text-left">إجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {violations.map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="font-mono text-xs">{v.date}</TableCell>
                  <TableCell className="font-medium">{studentName(v.studentId)}</TableCell>
                  <TableCell>{v.class}</TableCell>
                  <TableCell>{v.violation}</TableCell>
                  <TableCell className="text-muted-foreground">{v.procedure}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 justify-start">
                      <Button size="sm" variant="outline" onClick={() => toast.success(`تم إرسال إشعار لولي أمر ${studentName(v.studentId)}`)}>
                        <Send className="size-3.5 ml-1" />ولي الأمر
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => toast.success(`تم إرسال إشعار للطالب ${studentName(v.studentId)}`)}>
                        <UserRound className="size-3.5 ml-1" />الطالب
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
