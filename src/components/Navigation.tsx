import { NavLink } from "react-router-dom";
import { AlertCircle, Users, MessageSquare, FileText, Trophy, TrendingUp } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: AlertCircle, label: "SOS" },
    { to: "/volunteers", icon: Users, label: "Volunteers" },
    { to: "/communication", icon: MessageSquare, label: "Chat" },
    { to: "/ledger", icon: FileText, label: "Ledger" },
    { to: "/rewards", icon: Trophy, label: "Rewards" },
    { to: "/insights", icon: TrendingUp, label: "Insights" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elevated z-50 md:top-0 md:bottom-auto">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-around md:justify-center md:gap-8 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
