import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, Video, Play, Pause } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Communication = () => {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [callActive, setCallActive] = useState(false);

  const handleStartCall = () => {
    setCallActive(true);
    toast({
      title: "Call Connected",
      description: "Two-way communication established",
    });
  };

  const handleEndCall = () => {
    setCallActive(false);
    toast({
      title: "Call Ended",
      description: "Communication session closed",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <MessageSquare className="h-12 w-12 mx-auto text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Two-Way Communication</h1>
          <p className="text-muted-foreground">Connect with volunteers via voice or video</p>
        </div>

        {/* Communication Interface */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Family Side */}
          <Card className="p-6 shadow-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Family</h3>
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                {callActive ? (
                  <div className="text-center space-y-2">
                    <Video className="h-12 w-12 mx-auto text-primary animate-pulse" />
                    <p className="text-sm text-muted-foreground">Video Active</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Video className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mt-2">Camera off</p>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  variant={isRecording ? "destructive" : "default"}
                  onClick={() => setIsRecording(!isRecording)}
                  className="flex-1"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  {isRecording ? "Stop" : "Record"}
                </Button>
                <Button variant="outline">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Volunteer Side */}
          <Card className="p-6 shadow-card border-primary">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Volunteer (Dr. Priya)</h3>
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                {callActive ? (
                  <div className="text-center space-y-2">
                    <Video className="h-12 w-12 mx-auto text-secondary animate-pulse" />
                    <p className="text-sm text-muted-foreground">Volunteer Online</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Video className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mt-2">Waiting to connect</p>
                  </div>
                )}
              </div>

              <p className="text-sm text-muted-foreground bg-secondary/10 p-3 rounded-lg">
                "I'm on my way. Can you describe the symptoms in detail?"
              </p>
            </div>
          </Card>
        </div>

        {/* Call Controls */}
        <Card className="p-6 shadow-card">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {!callActive ? (
              <Button onClick={handleStartCall} size="lg" className="gradient-medical">
                <Video className="h-5 w-5 mr-2" />
                Start Video Call
              </Button>
            ) : (
              <Button onClick={handleEndCall} size="lg" variant="destructive">
                End Call
              </Button>
            )}
          </div>
        </Card>

        {/* Voice Alert Playback */}
        <Card className="p-6 shadow-card">
          <h3 className="font-semibold text-lg mb-4">Recent Voice Alert</h3>
          <div className="flex items-center gap-4 bg-muted p-4 rounded-lg">
            <Button size="icon" variant="outline">
              <Play className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">0:15 / 0:45</p>
            </div>
            <span className="text-sm font-medium">Emergency Alert - Chest Pain</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Communication;
