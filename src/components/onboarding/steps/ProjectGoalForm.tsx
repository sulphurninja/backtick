import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rocket, Target } from "lucide-react";

type ProjectData = {
  goal: string;
  audience: string;
  industry: string;
};

interface ProjectGoalFormProps {
  data: ProjectData;
  updateData: (data: Partial<ProjectData>) => void;
}

const industries = [
  "Technology",
  "E-commerce",
  "Healthcare",
  "Education",
  "Finance",
  "Entertainment",
  "Food & Beverage",
  "Travel",
  "Real Estate",
  "Fashion",
  "Non-profit",
  "Other"
];

export function ProjectGoalForm({ data, updateData }: ProjectGoalFormProps) {
  return (
    <div className="space-y-6">
      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex gap-3">
        <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-sm mb-1">Define your project goals</h3>
          <p className="text-sm text-muted-foreground">
            Help your AI team understand what you're trying to achieve and who you're building for.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="project-goal">What are you trying to achieve?</Label>
          <Textarea
            id="project-goal"
            placeholder="e.g. Increase conversions, create a professional portfolio, build brand awareness..."
            value={data.goal}
            onChange={(e) => updateData({ goal: e.target.value })}
            className="min-h-[100px] bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-audience">Who is your target audience?</Label>
          <Textarea
            id="project-audience"
            placeholder="e.g. Small business owners, tech professionals, young adults aged 18-34..."
            value={data.audience}
            onChange={(e) => updateData({ audience: e.target.value })}
            className="min-h-[100px] bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-industry">Industry</Label>
          <Select
            value={data.industry}
            onValueChange={(value) => updateData({ industry: value })}
          >
            <SelectTrigger id="project-industry" className="bg-background/50">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry.toLowerCase()}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
