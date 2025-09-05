import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { BookOpen, Users, GraduationCap, FileText, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-teacher/5">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <GraduationCap className="h-16 w-16 text-primary mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EduFlow
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline assignment management with our comprehensive platform for students and teachers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-student/30">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-student w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-shadow">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Student Portal</h3>
              <p className="text-muted-foreground mb-6">
                Upload assignments, track submissions, view grades and feedback from your teachers
              </p>
              <Button asChild variant="student">
                <Link to="/student">Access Student Dashboard</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-teacher/30">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-teacher w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-shadow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Teacher Portal</h3>
              <p className="text-muted-foreground mb-6">
                Grade assignments, manage students, create reports and track class performance
              </p>
              <Button asChild variant="teacher">
                <Link to="/teacher">Access Teacher Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Easy Upload</h4>
            <p className="text-muted-foreground text-sm">Simple PDF upload system for quick assignment submission</p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Real-time Grading</h4>
            <p className="text-muted-foreground text-sm">Question-wise marking with detailed feedback</p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Progress Tracking</h4>
            <p className="text-muted-foreground text-sm">Monitor submission history and performance insights</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;