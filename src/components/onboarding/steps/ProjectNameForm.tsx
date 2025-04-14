import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

type ProjectData = {
  name: string;
  description: string;
};

interface ProjectNameFormProps {
  data: ProjectData;
  updateData: (data: Partial<ProjectData>) => void;
}

export function ProjectNameForm({ data, updateData }: ProjectNameFormProps) {
  return (
    <div className="space-y-6">
      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex gap-3">
        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-sm mb-1">Let's name your project</h3>
          <p className="text-sm text-muted-foreground">
            This will be the foundation for your AI team workspace. Be descriptive to help your AI team understand the scope.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="project-name">Project Name</Label>
          <Input
            id="project-name"
            placeholder="e.g. E-commerce Rebrand, Portfolio Website, Mobile App"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-description">Project Description (optional)</Label>
          <Textarea
            id="project-description"
            placeholder="Briefly describe what you're building and its purpose..."
            value={data.description}
            onChange={(e) => updateData({ description: e.target.value })}
            className="min-h-[120px] bg-background/50"
          />
        </div>
      </div>
    </div>
  );
}
