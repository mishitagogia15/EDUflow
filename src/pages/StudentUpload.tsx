import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const StudentUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
    }, 2000);
  };

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
          <h1 className="text-3xl font-bold text-foreground mb-2">Upload Assignment</h1>
          <p className="text-muted-foreground">Submit your completed assignment for review</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2 text-primary" />
                Assignment Submission
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isUploaded ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="assignment-name">Assignment Name</Label>
                    <Input
                      id="assignment-name"
                      placeholder="e.g., Mathematics Quiz 2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="e.g., Mathematics"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input
                      id="due-date"
                      type="date"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="file-upload">Upload PDF File</Label>
                    <div className="mt-2">
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <div className="text-center">
                          <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            {selectedFile ? selectedFile.name : "Click to select PDF file"}
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional comments or notes for your teacher..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    variant="student"
                    disabled={!selectedFile || isUploading}
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Assignment
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-success/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Assignment Submitted Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your assignment has been uploaded and is now pending review by your teacher.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full">
                      <Link to="/student/submissions">View Submissions</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/student">Back to Dashboard</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentUpload;