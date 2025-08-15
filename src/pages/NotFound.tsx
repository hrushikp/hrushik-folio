import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-background">404</span>
        </div>
        <h1 className="text-4xl font-sora font-bold gradient-text mb-4">Page Not Found</h1>
        <p className="text-text-medium mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a different location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero">
            <Link to="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
