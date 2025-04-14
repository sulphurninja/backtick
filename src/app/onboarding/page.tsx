"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles, Rocket, Palette, MessageSquare, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  ProjectNameForm,
  ProjectGoalForm,
  ProjectToneForm,
  ProjectBrandingForm,
  ProjectSummary
} from "@/components/onboarding/steps";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const steps = [
  { name: "Project Name", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Goal", icon: <Rocket className="h-5 w-5" /> },
  { name: "Tone", icon: <MessageSquare className="h-5 w-5" /> },
  { name: "Branding", icon: <Palette className="h-5 w-5" /> },
  { name: "Summary", icon: <Zap className="h-5 w-5" /> },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    goal: "",
    audience: "",
    tone: [] as string[],
    colors: [] as string[],
    brandPersonality: [] as string[],
    industry: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData({ ...formData, ...data });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleComplete = () => {
    // Save project data and redirect to dashboard
    console.log("Project created:", formData);
    router.push("/dashboard");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ProjectNameForm data={formData} updateData={updateFormData} />;
      case 1:
        return <ProjectGoalForm data={formData} updateData={updateFormData} />;
      case 2:
        return <ProjectToneForm data={formData} updateData={updateFormData} />;
      case 3:
        return <ProjectBrandingForm data={formData} updateData={updateFormData} />;
      case 4:
        return <ProjectSummary data={formData} />;
      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "";
      case 1:
        return formData.goal.trim() !== "";
      case 2:
        return formData.tone.length > 0;
      case 3:
        return formData.colors.length > 0 || formData.brandPersonality.length > 0;
      default:
        return true;
    }
  };

  // Calculate progress percentage for progress bar
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;


  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      {/* Exit button */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground gap-1.5"
          asChild
        >
          <Link href="/dashboard">
            <X className="h-4 w-4" />
            <span className="text-sm">Exit Setup</span>
          </Link>
        </Button>
      </div>


      <div className="w-full max-w-4xl mx-auto">
        <Card className="border-border/40 shadow-lg bg-background/60 backdrop-blur-sm">
          {/* Linear progress bar at the very top */}
          <div className="w-full h-1 bg-secondary">
            <Progress value={progressPercentage} className="h-full rounded-none" />
          </div>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">Create your project</h1>
                <p className="text-muted-foreground">Let's set up your AI team workspace</p>
              </div>
              <OnboardingProgress currentStep={currentStep} steps={steps} />
            </div>
          </CardHeader>

          <CardContent className="px-4 md:px-8 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="py-4 min-h-[350px]"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </CardContent>

          <CardFooter className="flex justify-between px-4 md:px-8 py-6 border-t border-border/30">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="gap-2"
            >
              {currentStep === steps.length - 1 ? 'Create Project' : 'Next'}
              {currentStep !== steps.length - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Backtick AI-Powered Teams • v0.1 Alpha</p>
      </div>
    </div>
  );
}
