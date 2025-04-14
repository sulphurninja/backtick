import { Label } from "@/components/ui/label";
import { MessageSquare, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ProjectData = {
  tone: string[];
};

interface ProjectToneFormProps {
  data: ProjectData;
  updateData: (data: Partial<ProjectData>) => void;
}

const toneOptions = [
  "Professional",
  "Friendly",
  "Casual",
  "Formal",
  "Playful",
  "Authoritative",
  "Technical",
  "Inspirational",
  "Minimalist",
  "Luxurious",
  "Innovative",
  "Traditional",
  "Bold",
  "Conservative",
  "Creative"
];

export function ProjectToneForm({ data, updateData }: ProjectToneFormProps) {
  const toggleTone = (tone: string) => {
    const newTones = data.tone.includes(tone)
      ? data.tone.filter(t => t !== tone)
      : [...data.tone, tone];

    updateData({ tone: newTones });
  };

  return (
    <div className="space-y-6">
      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex gap-3">
        <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
        <h3 className="font-medium text-sm mb-1">Define your tone and voice</h3>
          <p className="text-sm text-muted-foreground">
            Select the tone attributes that best represent your brand's voice and personality.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="block mb-3">Select up to 5 tone attributes</Label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map((tone) => (
              <Badge
                key={tone}
                variant={data.tone.includes(tone) ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1.5 text-sm ${
                  data.tone.includes(tone)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
                onClick={() => toggleTone(tone)}
              >
                {tone}
              </Badge>
            ))}
          </div>
        </div>

        {data.tone.length > 0 && (
          <div className="mt-6 bg-accent/30 p-4 rounded-lg flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm mb-1">Tone Preview</h3>
              <p className="text-sm text-muted-foreground">
                Your brand voice will be {data.tone.slice(0, -1).join(", ")}
                {data.tone.length > 1 ? ` and ${data.tone[data.tone.length - 1]}` : ""}.
                This will guide your AI team in creating content that matches your brand personality.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
