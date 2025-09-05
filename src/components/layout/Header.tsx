import { Button } from "@/components/ui/button";
import { GraduationCap, Home, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  userType?: "student" | "teacher";
  userName?: string;
}

export const Header = ({ userType, userName }: HeaderProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">EduFlow</span>
            </Link>
            
            {!isHomePage && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/" className="flex items-center space-x-1">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </Button>
            )}
          </div>

          {userType && userName && (
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Welcome back, </span>
                <span className="font-medium text-foreground">{userName}</span>
                <span 
                  className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                    userType === 'student' 
                      ? 'bg-student/10 text-student' 
                      : 'bg-teacher/10 text-teacher'
                  }`}
                >
                  {userType === 'student' ? 'Student' : 'Teacher'}
                </span>
              </div>
              
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};