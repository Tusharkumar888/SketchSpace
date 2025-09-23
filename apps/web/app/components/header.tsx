import { Button } from './ui/buttons';
import { Switch } from './ui/switch';
import Logo from "./ui/logo"
import {
  Home,
  FileText,
  HelpCircle,
  Sun,
  Moon,
  Github,
  Star,
  Menu,
} from 'lucide-react';


export function Header() {
  return (
    <header className="fixed pl-2 pr-2 top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left side - Logo and sidebar toggle */}
        <div className="flex items-center gap-4">
         
          {/* Logo */}
            <Logo></Logo>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home className="h-4 w-4" />
            Features
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            Examples
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Documentation
          </Button>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch
            
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Star className="h-4 w-4" />
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}