import { Button } from './ui/buttons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/imageWithFallback';
import {
  Pen,
  Users,
  Layers,
  Share2,
  Zap,
  Globe,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Download,
  Play,
  Heart,
  MessageSquare,
  Palette,
  Shapes,
  Type,
  Move,
  HelpCircle,
} from 'lucide-react';

interface LandingDashboardProps {
  sidebarOpen: boolean;
}

export function LandingDashboard() {
  const features = [
    {
      icon: Pen,
      title: 'Intuitive Drawing Tools',
      description: 'Professional-grade sketching tools with pressure sensitivity and natural brush dynamics.',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, see changes instantly across all devices.',
      color: 'text-green-500'
    },
    {
      icon: Layers,
      title: 'Advanced Layer System',
      description: 'Organize your work with unlimited layers, blend modes, and non-destructive editing.',
      color: 'text-purple-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Your sketches are automatically saved and synced across all your devices.',
      color: 'text-orange-500'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share your work with a simple link, export in multiple formats, or embed anywhere.',
      color: 'text-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures smooth drawing experience even with complex projects.',
      color: 'text-yellow-500'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Sketches Created', value: '2M+', icon: Pen },
    { label: 'Countries', value: '120+', icon: Globe },
    { label: 'Uptime', value: '99.9%', icon: Zap }
  ];

  const tools = [
    { icon: Pen, name: 'Freehand Brush', description: 'Natural drawing with pressure sensitivity' },
    { icon: Shapes, name: 'Vector Shapes', description: 'Perfect geometric shapes and paths' },
    { icon: Type, name: 'Text Tool', description: 'Rich text editing with custom fonts' },
    { icon: Palette, name: 'Color Picker', description: 'Advanced color selection and palettes' },
    { icon: Move, name: 'Transform', description: 'Scale, rotate, and position elements' },
    { icon: Layers, name: 'Layer Manager', description: 'Organize with unlimited layers' }
  ];

  return (
    <main className={`flex-1 transition-all duration-300 `}>
      <div className={`container py-8 space-y-12 `}>
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Star className="h-3 w-3 mr-1" />
               Web-based Sketching Tool
            </Badge>
            <h1 className="max-w-4xl mx-auto">
              Create, Collaborate, and Share Your Ideas with SketchPad
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              The most intuitive web-based sketching application that brings your ideas to life. 
              Draw, design, and collaborate with teams worldwide in real-time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Start Sketching Now
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              View Examples
            </Button>
          </div>

          <div className="mt-8">
            {/* Enhanced sketch canvas mockup */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
                {/* Canvas toolbar */}
                <div className="flex items-center justify-between mb-4 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-medium">My Sketch - Untitled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                      Auto-saved
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">A</div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">S</div>
                      <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">+</div>
                    </div>
                  </div>
                </div>

                {/* Main canvas area */}
                <div className="bg-background rounded-xl border-2 border-dashed border-border/40 relative overflow-hidden" style={{ minHeight: '400px' }}>
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" className="text-muted-foreground">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Drawing elements */}
                  <div className="absolute inset-6">
                    {/* Main wireframe sketch */}
                    <svg width="300" height="200" className="text-primary/70" style={{ position: 'absolute', top: '20px', left: '20px' }}>
                      {/* Header wireframe */}
                      <rect x="0" y="0" width="280" height="40" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
                      <rect x="10" y="10" width="60" height="20" fill="currentColor" opacity="0.3" rx="2"/>
                      <rect x="220" y="15" width="50" height="10" fill="none" stroke="currentColor" strokeWidth="1" rx="1"/>
                      
                      {/* Navigation */}
                      <rect x="0" y="50" width="280" height="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
                      <circle cx="20" cy="65" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <line x1="35" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="1"/>
                      
                      {/* Content area */}
                      <rect x="0" y="90" width="180" height="100" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
                      <rect x="190" y="90" width="90" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5"/>
                      
                      {/* Content blocks */}
                      <rect x="10" y="105" width="160" height="15" fill="currentColor" opacity="0.2"/>
                      <rect x="10" y="125" width="120" height="8" fill="currentColor" opacity="0.1"/>
                      <rect x="10" y="138" width="140" height="8" fill="currentColor" opacity="0.1"/>
                      
                      {/* Buttons */}
                      <rect x="10" y="160" width="50" height="20" fill="none" stroke="currentColor" strokeWidth="2" rx="10"/>
                      <rect x="70" y="160" width="50" height="20" fill="currentColor" opacity="0.3" rx="10"/>
                    </svg>

                    {/* Flowchart elements */}
                    <svg width="200" height="150" className="text-blue-500" style={{ position: 'absolute', top: '60px', right: '40px' }}>
                      {/* Flowchart nodes */}
                      <rect x="70" y="10" width="60" height="30" fill="none" stroke="currentColor" strokeWidth="2" rx="15"/>
                      <text x="100" y="28" fontSize="10" fill="currentColor" textAnchor="middle">Start</text>
                      
                      <rect x="70" y="60" width="60" height="30" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
                      <text x="100" y="78" fontSize="10" fill="currentColor" textAnchor="middle">Process</text>
                      
                      <polygon points="100,110 120,130 100,150 80,130" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <text x="100" y="133" fontSize="8" fill="currentColor" textAnchor="middle">Decision</text>
                      
                      {/* Arrows */}
                      <path d="M100 40 L100 60" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <path d="M100 90 L100 110" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                        </marker>
                      </defs>
                    </svg>

                    {/* Freehand sketch */}
                    <svg width="150" height="100" className="text-green-500" style={{ position: 'absolute', bottom: '40px', left: '40px' }}>
                      <path d="M10 50 Q30 20 50 50 T90 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M20 70 Q40 85 60 70 Q80 55 100 70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="120" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M110 50 L130 70 M130 50 L110 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                    {/* Text annotations */}
                    <div className="absolute top-16 right-20 transform rotate-12">
                      <div className="bg-yellow-200 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-200 px-2 py-1 text-xs rounded shadow-lg">
                        Great idea! 💡
                      </div>
                    </div>
                    
                    <div className="absolute bottom-24 right-16">
                      <div className="bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-200 px-2 py-1 text-xs rounded shadow-lg">
                        Need to refine this
                      </div>
                    </div>
                  </div>

                  {/* Active collaboration cursors */}
                  <div className="absolute top-32 left-48 animate-pulse">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-500">
                        <path d="M2 2L14 8L8 9L7 15L2 2Z" fill="currentColor"/>
                      </svg>
                      <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">Alex</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-20 right-32 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-purple-500">
                        <path d="M2 2L14 8L8 9L7 15L2 2Z" fill="currentColor"/>
                      </svg>
                      <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">Sarah</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced tool palette */}
                <div className="absolute top-24 right-6 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-3 shadow-xl">
                  <div className="flex flex-col gap-3">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Tools</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center group cursor-pointer hover:bg-primary/30 transition-colors">
                        <Pen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-muted hover:bg-accent flex items-center justify-center group cursor-pointer transition-colors">
                        <Shapes className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-muted hover:bg-accent flex items-center justify-center group cursor-pointer transition-colors">
                        <Type className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-muted hover:bg-accent flex items-center justify-center group cursor-pointer transition-colors">
                        <Move className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      </div>
                    </div>
                    
                    <div className="border-t border-border/50 pt-2 mt-1">
                      <div className="text-xs font-medium text-muted-foreground mb-2">Colors</div>
                      <div className="flex gap-1">
                        <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-background shadow-sm cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-background shadow-sm cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-background shadow-sm cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-background shadow-sm cursor-pointer"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layers panel */}
                <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-3 shadow-xl w-48">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Layers</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-xs font-medium flex-1">Wireframes</span>
                      <div className="w-4 h-4 rounded bg-muted"></div>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg cursor-pointer">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span className="text-xs text-muted-foreground flex-1">Sketches</span>
                      <div className="w-4 h-4 rounded bg-muted"></div>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg cursor-pointer">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span className="text-xs text-muted-foreground flex-1">Notes</span>
                      <div className="w-4 h-4 rounded bg-muted"></div>
                    </div>
                  </div>
                </div>

                {/* Floating feature indicators */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20 shadow-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-full flex items-center justify-center border border-green-500/20 shadow-lg">
                  <Cloud className="h-8 w-8 text-green-500" />
                </div>
                <div className="absolute top-1/2 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-full flex items-center justify-center border border-blue-500/20 shadow-lg">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>

                {/* Subtle animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="space-y-1">
                  <div className="font-medium">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Features Grid */}
        <section className="space-y-8 px-4">
          <div className="text-center space-y-4">
            <h2>Why Choose SketchPad?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to bring your creative vision to life, all in your browser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-accent ${feature.color}`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools Showcase */}
        <section className="space-y-8 px-4">
          <div className="text-center space-y-4">
            <h2>Professional Tools at Your Fingertips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access a complete set of drawing and design tools, optimized for web performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                <div className="p-2 rounded-md bg-primary/10">
                  <tool.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline">Collaboration</Badge>
              <h2>Work Together in Real-Time</h2>
              <p className="text-muted-foreground">
                Invite team members to collaborate on your sketches. See cursors, changes, and comments 
                in real-time. Perfect for design reviews, brainstorming sessions, and remote teamwork.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Real-time cursor tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Live commenting system</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Version history & rollback</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Permission management</span>
              </div>
            </div>

            <Button className="gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwdGVhbXdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Platform Compatibility */}
        <section className="space-y-8 px-4">
          <div className="text-center space-y-4">
            <h2>Works Everywhere</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No downloads required. SketchPad runs directly in your browser on any device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2">Web Browser</h3>
                <p className="text-sm text-muted-foreground">
                  Works in Chrome, Firefox, Safari, and Edge. No plugins needed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2">Mobile & Tablet</h3>
                <p className="text-sm text-muted-foreground">
                  Touch-optimized interface with gesture support for mobile devices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Cloud className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2">Cloud Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic saving and sync across all your devices and platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community & Support */}
        <section className="bg-accent/50 rounded-xl p-8 text-center space-y-6 ">
          <div className="space-y-4">
            <h2>Join Our Creative Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of artists, designers, and creators. Share your work, 
              get feedback, and learn new techniques.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Join Community
            </Button>
            <Button variant="outline" className="gap-2">
              <Heart className="h-4 w-4" />
              View Gallery
            </Button>
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>24/7 Support</span>
              <span>•</span>
              <span>Video Tutorials</span>
              <span>•</span>
              <span>Active Community</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 py-12 ">
          <div className="space-y-4">
            <h2>Ready to Start Creating?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join thousands of creators who use SketchPad to bring their ideas to life. 
              Start sketching today – no account required!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 px-8">
              <Play className="h-5 w-5" />
              Start Sketching Free
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <HelpCircle className="h-5 w-5" />
              View Documentation
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}