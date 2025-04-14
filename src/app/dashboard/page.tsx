import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PlusCircle,
  MessageSquare,
  Code,
  PenTool,
  Megaphone,
  Rocket,
  ArrowRight,
  Clock,
  CheckCircle2,
  Sparkles,
  Zap,
  Brain,
  Layers
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-background to-secondary/5 p-8">
        <div className="absolute inset-0 bg-grid-foreground/[0.02]"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <Badge className="bg-primary/10 text-primary border-0 mb-2">
              Build anything with AI
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Your Complete AI Team</h1>
            <p className="text-muted-foreground max-w-[45ch]">
              Design, develop, write, and market your projects with an integrated AI team that works together.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                New Project
              </Button>
              <Button variant="outline">
                Tour the Platform
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 relative flex items-center justify-center">
            <div className="relative grid grid-cols-2 gap-2 md:gap-4">
              {[
                { icon: <Code className="h-5 w-5" />, color: "bg-blue-500/80", title: "Developer" },
                { icon: <PenTool className="h-5 w-5" />, color: "bg-violet-500/80", title: "Designer" },
                { icon: <MessageSquare className="h-5 w-5" />, color: "bg-green-500/80", title: "Copywriter" },
                { icon: <Megaphone className="h-5 w-5" />, color: "bg-amber-500/80", title: "Marketer" }
              ].map((item, i) => (
                <div key={i} className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl flex flex-col items-center justify-center gap-2 bg-background/80 backdrop-blur border border-border/60 shadow-md">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Project selector */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border border-border/40 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-amber-500"></div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Active Projects</CardTitle>
              <Button variant="ghost" size="sm" className="gap-1">
                <PlusCircle className="h-4 w-4" />
                <span>New</span>
              </Button>
            </div>
            <CardDescription>Your ongoing projects and their progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {[
                {
                  name: "E-commerce Rebrand",
                  progress: 68,
                  status: "In Progress",
                  icon: "ER",
                  iconBg: "bg-violet-500/20",
                  iconColor: "text-violet-500"
                },
                {
                  name: "Mobile App Launch",
                  progress: 34,
                  status: "Design Phase",
                  icon: "MA",
                  iconBg: "bg-blue-500/20",
                  iconColor: "text-blue-500"
                },
                {
                  name: "SEO Campaign",
                  progress: 92,
                  status: "Final Review",
                  icon: "SC",
                  iconBg: "bg-amber-500/20",
                  iconColor: "text-amber-500"
                }
              ].map((project, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer p-2 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className={`w-12 h-12 rounded-md ${project.iconBg} ${project.iconColor} flex items-center justify-center font-semibold text-sm flex-shrink-0`}>
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium truncate">{project.name}</h3>
                      <Badge variant="outline" className="flex-shrink-0 text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={project.progress} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{project.progress}%</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40">
          <CardHeader>
            <CardTitle>Your AI Team</CardTitle>
            <CardDescription>Start collaborating with your AI specialists</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Developer AI",
                icon: <Code className="h-5 w-5" />,
                color: "bg-blue-500/20 text-blue-500",
                desc: "Code, architecture, debugging"
              },
              {
                name: "Designer AI",
                icon: <PenTool className="h-5 w-5" />,
                color: "bg-violet-500/20 text-violet-500",
                desc: "UI/UX, graphics, branding"
              },
              {
                name: "Copywriter AI",
                icon: <MessageSquare className="h-5 w-5" />,
                color: "bg-green-500/20 text-green-500",
                desc: "Content, copy, messaging"
              },
              {
                name: "Marketer AI",
                icon: <Megaphone className="h-5 w-5" />,
                color: "bg-amber-500/20 text-amber-500",
                desc: "Strategy, SEO, campaigns"
              }
            ].map((role, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer group">
                <div className={`w-10 h-10 rounded-md ${role.color} flex items-center justify-center flex-shrink-0`}>
                  {role.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium">{role.name}</h3>
                  <p className="text-xs text-muted-foreground">{role.desc}</p>
                </div>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Capabilities showcase */}
      <section>
        <Tabs defaultValue="workflow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">From Idea to Launch</h2>
            <TabsList>
              <TabsTrigger value="workflow">Workflow</TabsTrigger>
              <TabsTrigger value="history">Activity</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="workflow">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Ideate",
                  description: "Brainstorm concepts with AI assistance",
                  icon: <Brain className="h-5 w-5" />,
                  color: "bg-blue-500/10 text-blue-500"
                },
                {
                  title: "Design",
                  description: "Create beautiful UIs and brand assets",
                  icon: <PenTool className="h-5 w-5" />,
                  color: "bg-violet-500/10 text-violet-500"
                },
                {
                  title: "Develop",
                  description: "Build and implement your projects",
                  icon: <Code className="h-5 w-5" />,
                  color: "bg-green-500/10 text-green-500"
                },
                {
                  title: "Launch",
                  description: "Go to market with full support",
                  icon: <Rocket className="h-5 w-5" />,
                  color: "bg-amber-500/10 text-amber-500"
                }
              ].map((step, i) => (
                <Card key={i} className="border border-border/40 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 h-1 w-full bg-gradient-to-r from-primary/40 to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <CardHeader className="pb-2">
                    <div className={`w-10 h-10 rounded-md ${step.color} flex items-center justify-center mb-2`}>
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="gap-1 px-0 text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="border border-border/40">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your team's latest work across all projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Landing page redesign completed",
                      time: "2 hours ago",
                      agent: "Designer AI",
                      icon: <CheckCircle2 className="h-4 w-4" />,
                      color: "text-green-500"
                    },
                    {
                      action: "Authentication API documentation",
                      time: "Yesterday",
                      agent: "Developer AI",
                      icon: <Code className="h-4 w-4" />,
                      color: "text-blue-500"
                    },
                    {
                      action: "Email marketing campaign copy",
                      time: "2 days ago",
                      agent: "Copywriter AI",
                      icon: <MessageSquare className="h-4 w-4" />,
                      color: "text-violet-500"
                    },
                    {
                      action: "Social media strategy review",
                      time: "Last week",
                      agent: "Marketer AI",
                      icon: <Megaphone className="h-4 w-4" />,
                      color: "text-amber-500"
                    }
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                      <div className={`mt-0.5 ${activity.color}`}>{activity.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{activity.action}</span>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.agent}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <Card className="border border-border/40">
              <CardHeader>
                <CardTitle>Project Analytics</CardTitle>
                <CardDescription>Performance metrics across all your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "AI Conversations", value: "143", change: "+12%", icon: <MessageSquare className="h-4 w-4" /> },
                    { label: "Assets Created", value: "38", change: "+7%", icon: <Layers className="h-4 w-4" /> },
                    { label: "Time Saved", value: "48 hrs", change: "+22%", icon: <Clock className="h-4 w-4" /> },
                    { label: "Project Completion", value: "68%", change: "+5%", icon: <CheckCircle2 className="h-4 w-4" /> }
                  ].map((stat, i) => (
                    <div key={i} className="bg-secondary/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-primary">{stat.icon}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs font-medium text-green-500">{stat.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Most Active Project</div>
                      <Badge variant="outline" className="text-xs font-normal">E-commerce Rebrand</Badge>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Progress value={68} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground">68% Complete</span>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Team Collaboration</div>
                      <Badge variant="outline" className="text-xs font-normal">High Activity</Badge>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="bg-blue-500 text-primary-foreground">D</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background -ml-3">
                        <AvatarFallback className="bg-violet-500 text-primary-foreground">P</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background -ml-3">
                        <AvatarFallback className="bg-green-500 text-primary-foreground">C</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background -ml-3">
                        <AvatarFallback className="bg-amber-500 text-primary-foreground">M</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to action */}
      <section className="mt-6">
        <Card className="border-primary/20 bg-gradient-to-br from-background via-primary/5 to-background">
          <CardContent className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Ready to accelerate your workflow?</h3>
                </div>
                <p className="text-muted-foreground max-w-[60ch]">
                  Get your entire product lineup from concept to launch with our AI-powered team. Save time, reduce costs, and build better products.
                </p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Button variant="outline">Learn More</Button>
                <Button className="gap-2">
                  <Zap className="h-4 w-4" />
                  Start Building
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
