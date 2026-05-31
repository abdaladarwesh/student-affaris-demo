import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "تسجيل الدخول - نظام شؤون الطلاب" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }
    toast.success("تم تسجيل الدخول بنجاح");
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-sidebar text-sidebar-foreground p-12 relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-sidebar-accent flex items-center justify-center">
            <GraduationCap className="size-7" />
          </div>
          <div>
            <div className="font-bold text-xl">شؤون الطلاب</div>
            <div className="text-sm opacity-70">نظام إدارة المدرسة</div>
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            أهلاً بك في نظام<br />إدارة شؤون الطلاب
          </h2>
          <p className="opacity-80 text-lg">
            متابعة الحضور، المخالفات، التأخيرات والسجلات الطبية في مكان واحد.
          </p>
        </div>
        <div className="text-xs opacity-60">© 2026 جميع الحقوق محفوظة</div>
        <div className="absolute -left-32 -bottom-32 size-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-20 top-10 size-72 rounded-full bg-sidebar-accent/40 blur-3xl" />
      </div>

      <div className="flex items-center justify-center p-6 md:p-12 bg-background">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-6">
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
              <GraduationCap className="size-5" />
            </div>
            <div className="font-bold">شؤون الطلاب</div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">تسجيل الدخول</h1>
            <p className="text-sm text-muted-foreground mt-2">أدخل بياناتك للوصول إلى لوحة التحكم</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input id="email" type="email" placeholder="name@school.edu" value={email} onChange={(e) => setEmail(e.target.value)} dir="ltr" className="text-left" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} dir="ltr" className="text-left" />
          </div>
          <Button type="submit" className="w-full h-11 text-base">دخول</Button>
          <p className="text-xs text-muted-foreground text-center">نسخة تجريبية - أي بريد وكلمة مرور تعمل</p>
        </form>
      </div>
    </div>
  );
}
