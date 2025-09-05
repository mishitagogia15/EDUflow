import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { Users, FileText, Award, BookOpen, Search, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const pendingGrading = [
    { id: 1, studentName: "Alice Johnson", assignment: "Math Quiz 1", submitted: "2 hours ago" },
    { id: 2, studentName: "Bob Smith", assignment: "Physics Lab", submitted: "1 day ago" },
    { id: 3, studentName: "Carol Brown", assignment: "Chemistry Test", submitted: "3 days ago" },
  ];

  const classStats = [
    { className: "Class 10A", avgScore: "87%", totalStudents: 32, pendingSubmissions: 5 },
    { className: "Class 10B", avgScore: "82%", totalStudents: 28, pendingSubmissions: 8 },
    { className: "Class 9A", avgScore: "91%", totalStudents: 30, pendingSubmissions: 2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header userType="teacher" userName="Dr. Sarah Wilson" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Manage students, grade assignments, and track class performance</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-teacher p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">90</p>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary to-primary-glow p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">Pending Grading</p>
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
                  <p className="text-2xl font-bold text-foreground">86%</p>
                  <p className="text-sm text-muted-foreground">Class Average</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-warning to-primary p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Active Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input placeholder="Enter Student ID..." className="flex-1" />
                <Button variant="teacher">
                  <Search className="h-4 w-4 mr-2" />
                  Find Student
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Input placeholder="Enter Class ID..." className="flex-1" />
                <Button variant="outline">
                  View Class Insights
                </Button>
              </div>

              <Button asChild className="w-full" variant="default">
                <Link to="/teacher/upload-assignment">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Assignment
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Grading</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingGrading.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-foreground">{item.studentName}</p>
                      <p className="text-sm text-muted-foreground">{item.assignment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{item.submitted}</p>
                      <StatusBadge status="pending" />
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="link" asChild className="w-full mt-4">
                <Link to="/teacher/grading">View All Pending →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Class Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Class</th>
                    <th className="text-left py-3 px-4 font-semibold">Students</th>
                    <th className="text-left py-3 px-4 font-semibold">Average Score</th>
                    <th className="text-left py-3 px-4 font-semibold">Pending</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {classStats.map((classItem, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{classItem.className}</td>
                      <td className="py-3 px-4">{classItem.totalStudents}</td>
                      <td className="py-3 px-4">
                        <span className="text-success font-medium">{classItem.avgScore}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-warning font-medium">{classItem.pendingSubmissions}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeacherDashboard;