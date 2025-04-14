import { Label } from "@/components/ui/label";
import { Palette, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HexColorPicker } from "react-colorful";
import type { ReactNode } from "react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type ProjectData = {
  colors: string[];
  brandPersonality: string[];
};

interface ProjectBrandingFormProps {
  data: ProjectData;
  updateData: (data: Partial<ProjectData>) => void;
}

const personalityTraits = [
  "Innovative", "Traditional", "Reliable", "Cutting-edge",
  "Playful", "Serious", "Luxurious", "Accessible",
  "Bold", "Subtle", "Eco-friendly", "Tech-focused",
  "Minimal", "Detailed", "Youthful", "Timeless"
];

export function ProjectBrandingForm({ data, updateData }: ProjectBrandingFormProps) {
  const [currentColor, setCurrentColor] = useState("#4f46e5");

  const togglePersonality = (trait: string) => {
    const newTraits = data.brandPersonality.includes(trait)
      ? data.brandPersonality.filter(t => t !== trait)
      : [...data.brandPersonality, trait];

    updateData({ brandPersonality: newTraits });
  };

  const addColor = () => {
    if (data.colors.includes(currentColor) || data.colors.length >= 5) return;
    updateData({ colors: [...data.colors, currentColor] });
  };

  const removeColor = (color: string) => {
    updateData({ colors: data.colors.filter(c => c !== color) });
  };

  return (
    <div className="space-y-6">
      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex gap-3">
        <Palette className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-sm mb-1">Define your brand's visual style</h3>
          <p className="text-sm text-muted-foreground">
            Choose colors and personality traits that represent your brand identity.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="block">Brand Colors (select up to 5)</Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {React.createElement(HexColorPicker as any, {
                color: currentColor,
                onChange: setCurrentColor,
                className: "w-full",
                "aria-label": "Choose color",
              })}

              <div className="flex gap-2">
                <div
                  className="h-10 flex-grow rounded-md border border-border"
                  style={{ backgroundColor: currentColor }}
                />
                <Button
                  onClick={addColor}
                  disabled={data.colors.length >= 5 || data.colors.includes(currentColor)}
                >
                  Add Color
                </Button>
              </div>
            </div>

            <div>
              <Label className="block mb-2">Selected Colors</Label>
              {data.colors.length === 0 ? (
                <p className="text-sm text-muted-foreground">No colors selected yet</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {data.colors.map((color) => (
                    <div
                      key={color}
                      className="flex items-center gap-2 p-2 rounded-md border border-border"
                    >
                      <div
                        className="h-6 w-6 rounded-md border border-border flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-mono flex-grow">{color}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeColor(color)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="block">Brand Personality</Label>
          <div className="flex flex-wrap gap-2">
            {personalityTraits.map((trait) => (
              <Badge
                key={trait}
                variant={data.brandPersonality.includes(trait) ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1.5 text-sm ${data.brandPersonality.includes(trait)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
                  }`}
                onClick={() => togglePersonality(trait)}
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
