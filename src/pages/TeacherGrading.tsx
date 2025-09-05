import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "@/components/ui/status-badge";
import { ArrowLeft, FileText, Save, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TeacherGrading = () => {
  const [grades, setGrades] = useState({
    q1: "8",
    q2: "7", 
    q3: "9"
  });
  
  const [feedback, setFeedback] = useState("Good work! Pay attention to calculation steps in question 2.");

  const assignment = {
    studentName: "Alice Johnson",
    assignmentName: "Mathematics Quiz 1",
    subject: "Mathematics",
    submittedDate: "Oct 14, 2024",
    dueDate: "Oct 15, 2024",
    questions: [
      { id: "q1", question: "Solve the quadratic equation: x² + 5x + 6 = 0", maxMarks: 10 },
      { id: "q2", question: "Find the derivative of f(x) = 3x³ + 2x² - 5x + 1", maxMarks: 8 },
      { id: "q3", question: "Calculate the area under the curve y = x² from x = 0 to x = 3", maxMarks: 12 }
    ]
  };

  const totalMarks = assignment.questions.reduce((sum, q) => sum + q.maxMarks, 0);
  const earnedMarks = Object.values(grades).reduce((sum, grade) => sum + parseInt(grade || "0"), 0);
  const percentage = Math.round((earnedMarks / totalMarks) * 100);

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
          <h1 className="text-3xl font-bold text-foreground mb-2">Grade Assignment</h1>
          <p className="text-muted-foreground">Review and grade student submission</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Assignment Details
                  </div>
                  <StatusBadge status="pending" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Student</p>
                    <p className="font-medium text-foreground">{assignment.studentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Assignment</p>
                    <p className="font-medium text-foreground">{assignment.assignmentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Subject</p>
                    <p className="font-medium text-foreground">{assignment.subject}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Submitted</p>
                    <p className="font-medium text-foreground">{assignment.submittedDate}</p>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">PDF Document:</p>
                  <div className="flex items-center justify-between p-3 bg-background border rounded">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">mathematics_quiz_1_alice.pdf</span>
                    </div>
                    <Button size="sm" variant="outline">View PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Question-wise Grading</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {assignment.questions.map((question, index) => (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="mb-3">
                        <h4 className="font-medium text-foreground mb-2">
                          Question {index + 1} (Max: {question.maxMarks} marks)
                        </h4>
                        <p className="text-sm text-muted-foreground">{question.question}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <label className="text-sm font-medium text-foreground">Marks Awarded:</label>
                          <Input
                            type="number"
                            min="0"
                            max={question.maxMarks}
                            value={grades[question.id as keyof typeof grades]}
                            onChange={(e) => setGrades(prev => ({
                              ...prev,
                              [question.id]: e.target.value
                            }))}
                            className="mt-1 w-24"
                          />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          / {question.maxMarks}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Grading Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-teacher/10 rounded-lg">
                    <p className="text-3xl font-bold text-teacher mb-1">{earnedMarks}/{totalMarks}</p>
                    <p className="text-sm text-muted-foreground">Total Score</p>
                  </div>
                  
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">{percentage}%</p>
                    <p className="text-sm text-muted-foreground">Percentage</p>
                  </div>

                  <div className="space-y-2">
                    {assignment.questions.map((question, index) => (
                      <div key={question.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Q{index + 1}:</span>
                        <span className="font-medium">
                          {grades[question.id as keyof typeof grades] || 0}/{question.maxMarks}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Write your feedback for the student..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[120px] mb-4"
                />
                
                <div className="space-y-2">
                  <Button variant="teacher" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Grade & Feedback
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherGrading;