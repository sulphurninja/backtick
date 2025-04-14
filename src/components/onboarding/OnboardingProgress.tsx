import React from "react";
import { Check } from "lucide-react";

interface OnboardingProgressProps {
  currentStep: number;
  steps: { name: string; icon: React.ReactNode }[];
}

export function OnboardingProgress({ currentStep, steps }: OnboardingProgressProps) {
  return (
    <div className="hidden md:flex items-center gap-2 px-1">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={`h-px w-8 transition-colors ${
                  index <= currentStep ? "bg-primary" : "bg-border"
                }`}
              />
            )}

            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : isCompleted
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span>{step.icon}</span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                {step.name}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
