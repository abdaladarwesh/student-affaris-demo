import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { feedbacks, studentName } from "@/lib/mock-data";
import { MessageSquareText } from "lucide-react";

export const Route = createFileRoute("/_app/feedback")({
  component: FeedbackPage,
});

function FeedbackPage() {
  return (
    <div>
      <PageHeader title="ملاحظات المعلمين" description="ملاحظات وتقييمات المعلمين عن الطلاب" />
      <div className="grid gap-4 md:grid-cols-2">
        {feedbacks.map((f) => (
          <Card key={f.id}>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-accent/30 text-accent-foreground flex items-center justify-center shrink-0">
                  <MessageSquareText className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="font-semibold">{f.teacherName}</div>
                    <div className="text-xs text-muted-foreground font-mono">{f.date}</div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">عن الطالب: {studentName(f.studentId)}</div>
                  <p className="text-sm leading-relaxed">{f.feedback}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
