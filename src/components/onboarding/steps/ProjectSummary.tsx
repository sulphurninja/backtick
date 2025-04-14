import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Target, MessageSquare, Palette } from "lucide-react";

interface ProjectData {
  name: string;
  description: string;
  goal: string;
  audience: string;
  tone: string[];
  colors: string[];
  brandPersonality: string[];
  industry: string;
}

interface ProjectSummaryProps {
  data: ProjectData;
}

export function ProjectSummary({ data }: ProjectSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex gap-3">
        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-sm mb-1">Almost done!</h3>
          <p className="text-sm text-muted-foreground">
            Review your project details before creating your AI team workspace.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <SummarySection
          icon={<Sparkles className="h-5 w-5" />}
          title="Project Details"
          items={[
            { label: "Name", value: data.name },
            { label: "Description", value: data.description || "Not provided" },
            { label: "Industry", value: data.industry || "Not specified" }
          ]}
        />

        <SummarySection
          icon={<Target className="h-5 w-5" />}
          title="Goals & Audience"
          items={[
            { label: "Goal", value: data.goal },
            { label: "Target Audience", value: data.audience || "Not specified" }
          ]}
        />

        <SummarySection
          icon={<MessageSquare className="h-5 w-5" />}
          title="Brand Voice"
          items={[
            {
              label: "Tone",
              value: data.tone.length
                ? data.tone.join(", ")
                : "No tone attributes selected"
            }
          ]}
        />

        <SummarySection
          icon={<Palette className="h-5 w-5" />}
          title="Brand Identity"
          items={[
            {
              label: "Colors",
              customValue: data.colors.length > 0 && (
                <div className="flex gap-2 items-center flex-wrap">
                  {data.colors.map(color => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-md border border-border"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    {data.colors.length} {data.colors.length === 1 ? 'color' : 'colors'} selected
                  </span>
                </div>
              ),
              value: data.colors.length === 0 ? "No colors selected" : ""
            },
            {
              label: "Personality",
              value: data.brandPersonality.length
                ? data.brandPersonality.join(", ")
                : "No personality traits selected"
            }
          ]}
        />
      </div>
    </div>
  );
}

interface SummarySectionProps {
  icon: React.ReactNode;
  title: string;
  items: {
    label: string;
    value?: string;
    customValue?: React.ReactNode;
  }[];
}

function SummarySection({ icon, title, items }: SummarySectionProps) {
  return (
    <Card className="border-border/40">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>

        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-2">
              <div className="text-sm font-medium text-muted-foreground">
                {item.label}:
              </div>
              <div className="col-span-2 text-sm">
                {item.customValue || item.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
