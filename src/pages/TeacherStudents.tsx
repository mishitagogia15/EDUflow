import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { ArrowLeft, Search, Users, FileText, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TeacherStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const students = [
    {
      id: "STU001",
      name: "Alice Johnson",
      class: "10A",
      email: "alice.johnson@school.edu",
      totalAssignments: 8,
      completedAssignments: 7,
      avgScore: 87,
      lastSubmission: "Oct 18, 2024",
      status: "active" as const
    },
    {
      id: "STU002", 
      name: "Bob Smith",
      class: "10A",
      email: "bob.smith@school.edu",
      totalAssignments: 8,
      completedAssignments: 6,
      avgScore: 82,
      lastSubmission: "Oct 15, 2024",
      status: "active" as const
    },
    {
      id: "STU003",
      name: "Carol Brown", 
      class: "10B",
      email: "carol.brown@school.edu",
      totalAssignments: 8,
      completedAssignments: 8,
      avgScore: 91,
      lastSubmission: "Oct 19, 2024",
      status: "active" as const
    },
    {
      id: "STU004",
      name: "David Wilson",
      class: "9A", 
      email: "david.wilson@school.edu",
      totalAssignments: 6,
      completedAssignments: 4,
      avgScore: 78,
      lastSubmission: "Oct 12, 2024",
      status: "pending" as const
    },
    {
      id: "STU005",
      name: "Emma Davis",
      class: "10A",
      email: "emma.davis@school.edu", 
      totalAssignments: 8,
      completedAssignments: 8,
      avgScore: 94,
      lastSubmission: "Oct 19, 2024",
      status: "active" as const
    }
  ];

  const classes = ["all", "9A", "10A", "10B"];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === "all" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-primary";
    if (score >= 70) return "text-warning";
    return "text-danger";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userType="teacher" userName="Dr. Sarah Wilson" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/teacher" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Management</h1>
          <p className="text-muted-foreground">View and manage student profiles and performance</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
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

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-success to-accent p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">86%</p>
                  <p className="text-sm text-muted-foreground">Avg Performance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary to-primary-glow p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">Submission Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-warning to-danger p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Need Attention</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Student Directory
              </div>
              <div className="flex space-x-2">
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm bg-background"
                >
                  {classes.map(cls => (
                    <option key={cls} value={cls}>
                      {cls === "all" ? "All Classes" : `Class ${cls}`}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Student</th>
                    <th className="text-left py-3 px-4 font-semibold">Class</th>
                    <th className="text-left py-3 px-4 font-semibold">Progress</th>
                    <th className="text-left py-3 px-4 font-semibold">Avg Score</th>
                    <th className="text-left py-3 px-4 font-semibold">Last Submission</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-foreground">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.id}</p>
                          <p className="text-xs text-muted-foreground">{student.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                          {student.class}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {student.completedAssignments}/{student.totalAssignments}
                          </span>
                          <div className="w-full bg-muted rounded-full h-2 mt-1">
                            <div 
                              className="bg-success h-2 rounded-full" 
                              style={{
                                width: `${(student.completedAssignments / student.totalAssignments) * 100}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`font-bold ${getPerformanceColor(student.avgScore)}`}>
                          {student.avgScore}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm">{student.lastSubmission}</td>
                      <td className="py-4 px-4">
                        <StatusBadge 
                          status={student.status === "active" ? "graded" : "pending"} 
                        />
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="teacher">
                            Grade
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredStudents.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No students found matching your search criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeacherStudents;