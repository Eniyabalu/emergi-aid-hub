import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Phone, MapPin, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Volunteers = () => {
  const { toast } = useToast();

  const volunteers = [
    {
      id: 1,
      name: "Dr. Priya Kumar",
      role: "Doctor",
      badge: "Verified",
      distance: "0.5 km",
      rating: 5,
      helpCount: 42,
    },
    {
      id: 2,
      name: "Rajesh ASHA Worker",
      role: "ASHA Worker",
      badge: "Trusted",
      distance: "1.2 km",
      rating: 4.8,
      helpCount: 28,
    },
    {
      id: 3,
      name: "Anita Medical Student",
      role: "Medical Student",
      badge: "Helper",
      distance: "2.1 km",
      rating: 4.5,
      helpCount: 15,
    },
    {
      id: 4,
      name: "Kumar Paramedic",
      role: "Paramedic",
      badge: "Verified",
      distance: "3.4 km",
      rating: 4.9,
      helpCount: 35,
    },
  ];

  const handleNotify = (name: string) => {
    toast({
      title: "Volunteer Notified",
      description: `${name} has been alerted about the emergency`,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Users className="h-12 w-12 mx-auto text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Nearby Volunteers</h1>
          <p className="text-muted-foreground">Verified helpers ready to assist</p>
        </div>

        {/* Active Alert Banner */}
        <Card className="p-4 gradient-emergency text-emergency-foreground shadow-elevated">
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 animate-pulse" />
            <div>
              <p className="font-semibold">Active Emergency Alert</p>
              <p className="text-sm opacity-90">Villager needs help (Chest Pain) → Doctor required</p>
            </div>
          </div>
        </Card>

        {/* Volunteers List */}
        <div className="grid gap-4">
          {volunteers.map((volunteer) => (
            <Card key={volunteer.id} className="p-6 shadow-card hover:shadow-elevated transition-smooth">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{volunteer.name}</h3>
                      <p className="text-sm text-muted-foreground">{volunteer.role}</p>
                    </div>
                    <Badge variant={volunteer.badge === "Verified" ? "default" : "secondary"}>
                      <Award className="h-3 w-3 mr-1" />
                      {volunteer.badge}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{volunteer.distance} away</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⭐ {volunteer.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🤝 {volunteer.helpCount} helps</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleNotify(volunteer.name)}
                    className="w-full md:w-auto gradient-medical"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Notify Volunteer
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
