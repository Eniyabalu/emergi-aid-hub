import { Card } from "@/components/ui/card";
import { FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Ledger = () => {
  const ledgerEntries = [
    {
      id: "REQ-001",
      timestamp: "2024-10-03 14:32",
      symptom: "Chest Pain",
      helpedBy: "Dr. Priya Kumar",
      action: "Doctor Visit + Medicine",
      status: "Completed",
    },
    {
      id: "REQ-002",
      timestamp: "2024-10-03 12:15",
      symptom: "Fever",
      helpedBy: "Rajesh ASHA Worker",
      action: "First Aid + Temperature Check",
      status: "Completed",
    },
    {
      id: "REQ-003",
      timestamp: "2024-10-03 09:45",
      symptom: "Accident",
      helpedBy: "Kumar Paramedic",
      action: "Ambulance Arranged + Hospital Admission",
      status: "Completed",
    },
    {
      id: "REQ-004",
      timestamp: "2024-10-03 08:20",
      symptom: "Need Medicine",
      helpedBy: "Anita Medical Student",
      action: "Medicine Delivery",
      status: "Completed",
    },
    {
      id: "REQ-005",
      timestamp: "2024-10-03 15:10",
      symptom: "Fever",
      helpedBy: "Pending",
      action: "Waiting for volunteer",
      status: "In Progress",
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === "Completed") return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    if (status === "In Progress") return <Clock className="h-4 w-4 text-yellow-500" />;
    return <AlertCircle className="h-4 w-4 text-red-500" />;
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-24 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <FileText className="h-12 w-12 mx-auto text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Community Ledger</h1>
          <p className="text-muted-foreground">Transparent record of all help events</p>
        </div>

        {/* Info Card */}
        <Card className="p-6 shadow-card gradient-card border-primary">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Blockchain-Powered Transparency</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Every help event is securely recorded and cannot be edited. This ensures trust and accountability in the community.
              </p>
            </div>
          </div>
        </Card>

        {/* Ledger Table */}
        <Card className="shadow-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Request ID</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Timestamp</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Symptom</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Helped By</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Action Taken</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {ledgerEntries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                        {entry.id}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {entry.timestamp}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">{entry.symptom}</Badge>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">
                      {entry.helpedBy}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {entry.action}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(entry.status)}
                        <span className="text-sm">{entry.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 shadow-card text-center">
            <p className="text-3xl font-bold text-primary">24</p>
            <p className="text-sm text-muted-foreground mt-1">Total Help Events</p>
          </Card>
          <Card className="p-6 shadow-card text-center">
            <p className="text-3xl font-bold text-secondary">12</p>
            <p className="text-sm text-muted-foreground mt-1">Active Volunteers</p>
          </Card>
          <Card className="p-6 shadow-card text-center">
            <p className="text-3xl font-bold text-accent">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ledger;
