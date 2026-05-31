import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { absenceByClass, students, violations, delays, medicalCases } from "@/lib/mock-data";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Users, AlertTriangle, Clock, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/_app/")({
  component: HomePage,
});

function Stat({ label, value, icon: Icon, tone }: { label: string; value: number | string; icon: any; tone: string }) {
  return (
    <Card>
      <CardContent className="p-5 flex items-center gap-4">
        <div className={`size-12 rounded-xl flex items-center justify-center ${tone}`}>
          <Icon className="size-6" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function HomePage() {
  return (
    <div>
      <PageHeader title="الرئيسية" description="نظرة عامة على مؤشرات شؤون الطلاب" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Stat label="إجمالي الطلاب" value={students.length} icon={Users} tone="bg-primary/10 text-primary" />
        <Stat label="مخالفات هذا الشهر" value={violations.length} icon={AlertTriangle} tone="bg-destructive/10 text-destructive" />
        <Stat label="تأخيرات هذا الأسبوع" value={delays.length} icon={Clock} tone="bg-accent/20 text-accent-foreground" />
        <Stat label="حالات طبية" value={medicalCases.length} icon={Stethoscope} tone="bg-secondary text-secondary-foreground" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>متوسط الغياب لكل فصل</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer>
              <BarChart data={absenceByClass} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="class" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  cursor={{ fill: "var(--muted)" }}
                  contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }}
                  labelStyle={{ color: "var(--foreground)" }}
                />
                <Bar dataKey="averageAbsence" fill="var(--primary)" radius={[6, 6, 0, 0]} name="متوسط أيام الغياب" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
