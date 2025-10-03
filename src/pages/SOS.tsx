import { useState } from "react";
import { AlertCircle, Mic, Video, MessageSquare, Heart, Thermometer, Car, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SOS = () => {
  const { toast } = useToast();
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  const [triageResult, setTriageResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const symptoms = [
    { id: "chest", icon: Heart, label: "Chest Pain", color: "text-red-500" },
    { id: "fever", icon: Thermometer, label: "Fever", color: "text-orange-500" },
    { id: "accident", icon: Car, label: "Accident", color: "text-yellow-500" },
    { id: "medicine", icon: Pill, label: "Need Medicine", color: "text-blue-500" },
  ];

  const handleSOS = async () => {
    if (!selectedSymptom) {
      toast({
        title: "Select a symptom",
        description: "Please select what kind of help you need",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate offline mesh network
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "📡 Mesh Network Active",
      description: "Alert sent device-to-device (no internet needed)",
    });

    // AI Triage simulation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let result = "";
    switch (selectedSymptom) {
      case "chest":
        result = "🚨 Doctor Needed Urgently";
        break;
      case "accident":
        result = "🏥 Hospital Required Immediately";
        break;
      case "fever":
      case "medicine":
        result = "👥 Volunteer Can Help";
        break;
    }
    
    setTriageResult(result);
    setIsProcessing(false);
    
    toast({
      title: "AI Triage Complete",
      description: result,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-24 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">HealthLink Emergency</h1>
          <p className="text-muted-foreground">Get immediate help in health emergencies</p>
        </div>

        {/* SOS Button */}
        <div className="flex justify-center py-8">
          <button
            onClick={handleSOS}
            disabled={isProcessing}
            className="relative w-48 h-48 rounded-full gradient-emergency text-emergency-foreground font-bold text-xl shadow-emergency animate-pulse-emergency hover:scale-105 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <AlertCircle className="h-16 w-16 mx-auto mb-2" />
            {isProcessing ? "Processing..." : "SOS"}
          </button>
        </div>

        {/* Alert Method */}
        <Card className="p-6 shadow-card">
          <h2 className="font-semibold text-lg mb-4">Send Alert Via:</h2>
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
              <MessageSquare className="h-6 w-6" />
              <span className="text-xs">Text</span>
            </Button>
            <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
              <Mic className="h-6 w-6" />
              <span className="text-xs">Voice</span>
            </Button>
            <Button variant="outline" className="flex flex-col gap-2 h-auto py-4">
              <Video className="h-6 w-6" />
              <span className="text-xs">Video</span>
            </Button>
          </div>
        </Card>

        {/* Symptom Selection */}
        <Card className="p-6 shadow-card">
          <h2 className="font-semibold text-lg mb-4">What kind of help do you need?</h2>
          <div className="grid grid-cols-2 gap-3">
            {symptoms.map((symptom) => (
              <Button
                key={symptom.id}
                variant={selectedSymptom === symptom.id ? "default" : "outline"}
                onClick={() => setSelectedSymptom(symptom.id)}
                className="flex flex-col gap-2 h-auto py-4"
              >
                <symptom.icon className={`h-8 w-8 ${selectedSymptom === symptom.id ? '' : symptom.color}`} />
                <span className="text-sm">{symptom.label}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Triage Result */}
        {triageResult && (
          <Card className="p-6 shadow-elevated gradient-card animate-fade-in border-primary">
            <div className="text-center space-y-2">
              <AlertCircle className="h-12 w-12 mx-auto text-primary" />
              <h3 className="font-bold text-xl">AI Triage Assessment</h3>
              <p className="text-lg font-semibold text-primary">{triageResult}</p>
              <p className="text-sm text-muted-foreground">Volunteers have been notified</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SOS;
