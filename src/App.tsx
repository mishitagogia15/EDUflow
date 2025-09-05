import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import StudentUpload from "./pages/StudentUpload";
import StudentSubmissions from "./pages/StudentSubmissions";
import StudentHistory from "./pages/StudentHistory";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherGrading from "./pages/TeacherGrading";
import TeacherStudents from "./pages/TeacherStudents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/upload" element={<StudentUpload />} />
          <Route path="/student/submissions" element={<StudentSubmissions />} />
          <Route path="/student/history" element={<StudentHistory />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/grading" element={<TeacherGrading />} />
          <Route path="/teacher/students" element={<TeacherStudents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
