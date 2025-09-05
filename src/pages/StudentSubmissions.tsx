import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { ArrowLeft, FileText, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";

const StudentSubmissions = () => {
  const assignments = [
    { 
      id: 1, 
      name: "Mathematics Quiz 1", 
      subject: "Mathematics",
      status: "graded" as const, 
      score: "8/10", 
      totalMarks: 10,
      dueDate: "Oct 15, 2024", 
      submittedDate: "Oct 14, 2024",
      feedback: "Good work! Pay attention to calculation steps in question 3."
    },
    { 
      id: 2, 
      name: "Physics Lab Report", 
      subject: "Physics",
      status: "pending" as const, 
      score: "-", 
      totalMarks: 20,
      dueDate: "Oct 20, 2024", 
      submittedDate: "Oct 18, 2024",
      feedback: null
    },
    { 
      id: 3, 
      name: "Chemistry Assignment", 
      subject: "Chemistry",
      status: "late" as const, 
      score: "6/10", 
      totalMarks: 10,
      dueDate: "Oct 10, 2024", 
      submittedDate: "Oct 12, 2024",
      feedback: "Late submission penalty applied. Review organic compounds chapter."
    },
    { 
      id: 4, 
      name: "English Essay", 
      subject: "English",
      status: "graded" as const, 
      score: "18/20", 
      totalMarks: 20,
      dueDate: "Oct 8, 2024", 
      submittedDate: "Oct 7, 2024",
      feedback: "Excellent analysis and structure. Minor grammatical errors in paragraph 2."
    },
    { 
      id: 5, 
      name: "History Project", 
      subject: "History",
      status: "graded" as const, 
      score: "15/15", 
      totalMarks: 15,
      dueDate: "Oct 5, 2024", 
      submittedDate: "Oct 4, 2024",
      feedback: "Outstanding research and presentation. Well done!"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header userType="student" userName="John Doe" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/student" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Track Submissions</h1>
          <p className="text-muted-foreground">Monitor the status of all your submitted assignments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              All Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Assignment</th>
                    <th className="text-left py-3 px-4 font-semibold">Subject</th>
                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Submitted</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Score</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment) => (
                    <tr key={assignment.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-foreground">{assignment.name}</p>
                          {assignment.feedback && (
                            <p className="text-sm text-muted-foreground mt-1 max-w-xs truncate">
                              {assignment.feedback}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">{assignment.subject}</td>
                      <td className="py-4 px-4 text-sm">{assignment.dueDate}</td>
                      <td className="py-4 px-4 text-sm">{assignment.submittedDate}</td>
                      <td className="py-4 px-4">
                        <StatusBadge status={assignment.status} />
                      </td>
                      <td className="py-4 px-4">
                        <span className={`font-medium ${
                          assignment.score === '-' ? 'text-muted-foreground' : 
                          assignment.status === 'graded' ? 'text-success' : 'text-warning'
                        }`}>
                          {assignment.score}
                        </span>
                        {assignment.score !== '-' && (
                          <span className="text-muted-foreground text-sm">/{assignment.totalMarks}</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          {assignment.status === 'graded' && (
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-2">3</div>
              <div className="text-sm text-muted-foreground">Graded Assignments</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-warning mb-2">1</div>
              <div className="text-sm text-muted-foreground">Pending Review</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-danger mb-2">1</div>
              <div className="text-sm text-muted-foreground">Late Submissions</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentSubmissions;