import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Upload, FileText, Clock, Award, History, Download } from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const recentAssignments = [
    { id: 1, name: "Mathematics Quiz 1", status: "graded" as const, score: "8/10", dueDate: "Oct 15, 2024", submittedDate: "Oct 14, 2024" },
    { id: 2, name: "Physics Lab Report", status: "pending" as const, score: "-", dueDate: "Oct 20, 2024", submittedDate: "Oct 18, 2024" },
    { id: 3, name: "Chemistry Assignment", status: "late" as const, score: "6/10", dueDate: "Oct 10, 2024", submittedDate: "Oct 12, 2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header userType="student" userName="John Doe" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">Manage your assignments and track your progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-student p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Total Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-success to-accent p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-warning to-danger p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="student" className="w-full">
                <Link to="/student/upload">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Assignment
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/student/submissions">
                  <FileText className="h-4 w-4 mr-2" />
                  Track Submissions
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/student/history">
                  <History className="h-4 w-4 mr-2" />
                  View History
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Report Card
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{assignment.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Due: {assignment.dueDate} • Submitted: {assignment.submittedDate}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">{assignment.score}</span>
                      <StatusBadge status={assignment.status} />
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="link" asChild className="w-full mt-4">
                <Link to="/student/submissions">View All Assignments →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;