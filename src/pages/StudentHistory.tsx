import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { ArrowLeft, History, Award, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StudentHistory = () => {
  const monthlyStats = [
    { month: "October 2024", assignments: 5, avgScore: "85%", bestScore: "20/20" },
    { month: "September 2024", assignments: 8, avgScore: "88%", bestScore: "19/20" },
    { month: "August 2024", assignments: 6, avgScore: "82%", bestScore: "18/20" },
  ];

  const badges = [
    { name: "Fast Submitter", description: "Consistently submits before deadline", earned: true },
    { name: "Consistent Performer", description: "Maintains steady performance", earned: true },
    { name: "Perfect Score", description: "Achieved 100% on an assignment", earned: true },
    { name: "Top Performer", description: "Scored in top 10% of class", earned: false },
  ];

  const detailedHistory = [
    { 
      id: 1, 
      assignment: "History Project", 
      subject: "History", 
      date: "Oct 5, 2024",
      score: "15/15",
      percentage: "100%",
      questions: [
        { q: "Q1: Ancient Civilizations", marks: "5/5" },
        { q: "Q2: Medieval Period", marks: "5/5" },
        { q: "Q3: Modern History", marks: "5/5" },
      ],
      feedback: "Outstanding research and presentation. Well done!"
    },
    { 
      id: 2, 
      assignment: "English Essay", 
      subject: "English", 
      date: "Oct 8, 2024",
      score: "18/20",
      percentage: "90%",
      questions: [
        { q: "Q1: Grammar & Structure", marks: "8/8" },
        { q: "Q2: Content & Analysis", marks: "7/8" },
        { q: "Q3: Creativity", marks: "3/4" },
      ],
      feedback: "Excellent analysis and structure. Minor grammatical errors in paragraph 2."
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Academic History</h1>
          <p className="text-muted-foreground">View your complete academic performance and achievements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <h4 className="font-medium text-foreground">{stat.month}</h4>
                    <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Assignments:</span>
                        <p className="font-medium">{stat.assignments}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Average:</span>
                        <p className="font-medium text-success">{stat.avgScore}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Best:</span>
                        <p className="font-medium text-primary">{stat.bestScore}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {badges.map((badge, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${badge.earned ? 'bg-success/5 border-success/20' : 'bg-muted/50 border-border'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-medium ${badge.earned ? 'text-success' : 'text-muted-foreground'}`}>
                        {badge.name}
                      </h4>
                      {badge.earned && <Award className="h-4 w-4 text-success" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Performance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-student/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-1">85%</p>
                  <p className="text-sm text-muted-foreground">Overall Average</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-xl font-bold text-success">19</p>
                    <p className="text-xs text-muted-foreground">Total Assignments</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-xl font-bold text-primary">3</p>
                    <p className="text-xs text-muted-foreground">Perfect Scores</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Improvement Trend</p>
                  <div className="flex items-center justify-center text-success">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">+3% this month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <History className="h-5 w-5 mr-2 text-primary" />
              Question-wise Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {detailedHistory.map((assignment) => (
                <div key={assignment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{assignment.assignment}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.subject} • {assignment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-success">{assignment.score}</p>
                      <p className="text-sm text-muted-foreground">({assignment.percentage})</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Question Breakdown:</h4>
                      <div className="space-y-2">
                        {assignment.questions.map((question, qIndex) => (
                          <div key={qIndex} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{question.q}</span>
                            <span className="font-medium">{question.marks}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Teacher Feedback:</h4>
                      <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                        {assignment.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentHistory;