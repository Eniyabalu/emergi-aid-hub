import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Activity, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Insights = () => {
  const trends = [
    {
      condition: "Fever Cases",
      trend: "Rising",
      change: "+23%",
      region: "Village A",
      severity: "medium",
    },
    {
      condition: "Accident Reports",
      trend: "Stable",
      change: "-5%",
      region: "Village B",
      severity: "low",
    },
    {
      condition: "Chest Pain",
      trend: "Rising",
      change: "+12%",
      region: "Village C",
      severity: "high",
    },
  ];

  const predictions = [
    {
      alert: "Potential Fever Outbreak",
      confidence: 87,
      action: "Increase awareness campaigns",
      timeline: "Next 7 days",
    },
    {
      alert: "Medicine Stock Alert",
      confidence: 92,
      action: "Restock common medicines",
      timeline: "Next 3 days",
    },
    {
      alert: "Volunteer Shortage",
      confidence: 78,
      action: "Recruit more volunteers",
      timeline: "Next 14 days",
    },
  ];

  const getSeverityColor = (severity: string) => {
    if (severity === "high") return "text-red-500 bg-red-500/10";
    if (severity === "medium") return "text-yellow-500 bg-yellow-500/10";
    return "text-green-500 bg-green-500/10";
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-24 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <TrendingUp className="h-12 w-12 mx-auto text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Predictive Health Insights</h1>
          <p className="text-muted-foreground">AI-powered analysis of health trends</p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 shadow-card gradient-medical text-primary-foreground">
            <Activity className="h-8 w-8 mb-2" />
            <p className="text-3xl font-bold">156</p>
            <p className="text-sm opacity-90">Total Cases This Month</p>
          </Card>
          <Card className="p-6 shadow-card gradient-success text-secondary-foreground">
            <TrendingUp className="h-8 w-8 mb-2" />
            <p className="text-3xl font-bold">23%</p>
            <p className="text-sm opacity-90">Increase in Preventive Care</p>
          </Card>
          <Card className="p-6 shadow-card gradient-emergency text-emergency-foreground">
            <AlertTriangle className="h-8 w-8 mb-2" />
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm opacity-90">Active Alerts</p>
          </Card>
        </div>

        {/* Health Trends */}
        <Card className="p-6 shadow-elevated">
          <h2 className="font-bold text-xl mb-6">Regional Health Trends</h2>
          <div className="space-y-4">
            {trends.map((trend, index) => (
              <Card key={index} className="p-4 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{trend.condition}</h3>
                      <Badge className={getSeverityColor(trend.severity)}>
                        {trend.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{trend.region}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{trend.trend}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${trend.change.startsWith('+') ? 'text-red-500' : 'text-green-500'}`}>
                      {trend.change}
                    </p>
                    <p className="text-xs text-muted-foreground">vs last month</p>
                  </div>
                </div>

                {/* Simple Bar Chart */}
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      trend.severity === 'high' ? 'bg-red-500' :
                      trend.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.abs(parseInt(trend.change))}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* AI Predictions */}
        <Card className="p-6 shadow-elevated border-primary">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h2 className="font-bold text-xl">AI Predictions & Recommendations</h2>
          </div>
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <Card key={index} className="p-4 shadow-card bg-muted/30">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{prediction.alert}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Recommended: {prediction.action}
                    </p>
                  </div>
                  <Badge variant="outline">{prediction.timeline}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-semibold">{prediction.confidence}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${prediction.confidence}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Heat Map Info */}
        <Card className="p-6 shadow-card gradient-card">
          <h2 className="font-bold text-lg mb-4">Geographic Analysis</h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-center p-8">
            <div>
              <MapPin className="h-16 w-16 mx-auto text-primary mb-4" />
              <p className="font-semibold text-lg">Regional Health Map</p>
              <p className="text-sm text-muted-foreground mt-2">
                Visual representation of health trends across different villages
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>Low Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span>Medium Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span>High Risk</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Insights;
