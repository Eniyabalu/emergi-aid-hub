import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Rewards = () => {
  const leaderboard = [
    {
      rank: 1,
      name: "Dr. Priya Kumar",
      coins: 420,
      helpCount: 42,
      badge: "🥇 Top Helper",
      progress: 100,
    },
    {
      rank: 2,
      name: "Kumar Paramedic",
      coins: 350,
      helpCount: 35,
      badge: "🥈 Trusted",
      progress: 83,
    },
    {
      rank: 3,
      name: "Rajesh ASHA Worker",
      coins: 280,
      helpCount: 28,
      badge: "🥉 Helper",
      progress: 67,
    },
    {
      rank: 4,
      name: "Anita Medical Student",
      coins: 150,
      helpCount: 15,
      badge: "🎖️ Newbie",
      progress: 36,
    },
  ];

  const badges = [
    { icon: "🥇", name: "Top Helper", requirement: "40+ helps" },
    { icon: "🥈", name: "Trusted", requirement: "25+ helps" },
    { icon: "🥉", name: "Helper", requirement: "10+ helps" },
    { icon: "🎖️", name: "Newbie", requirement: "1+ helps" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 md:pt-24 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Trophy className="h-12 w-12 mx-auto text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Rewards & HealthCoins</h1>
          <p className="text-muted-foreground">Recognize and reward community helpers</p>
        </div>

        {/* HealthCoins Info */}
        <Card className="p-6 shadow-card gradient-success text-secondary-foreground">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-white/20">
              <Coins className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl">What are HealthCoins?</h3>
              <p className="text-sm opacity-90 mt-1">
                Volunteers earn 10 HealthCoins for each successful help event. Coins can be exchanged for benefits at local health centers.
              </p>
            </div>
          </div>
        </Card>

        {/* Badges */}
        <Card className="p-6 shadow-card">
          <h2 className="font-bold text-lg mb-4">Achievement Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="text-center space-y-2 p-4 rounded-lg bg-muted/50">
                <div className="text-4xl">{badge.icon}</div>
                <p className="font-semibold">{badge.name}</p>
                <p className="text-xs text-muted-foreground">{badge.requirement}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Leaderboard */}
        <Card className="p-6 shadow-elevated">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-xl">Top Volunteers</h2>
            <Award className="h-6 w-6 text-primary" />
          </div>

          <div className="space-y-4">
            {leaderboard.map((volunteer) => (
              <Card key={volunteer.rank} className="p-4 shadow-card hover:shadow-elevated transition-smooth">
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">#{volunteer.rank}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold">{volunteer.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {volunteer.badge}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-primary font-bold">
                          <Coins className="h-5 w-5" />
                          <span className="text-xl">{volunteer.coins}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{volunteer.helpCount} helps</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Progress to next milestone</span>
                        <span>{volunteer.progress}%</span>
                      </div>
                      <Progress value={volunteer.progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Recent Rewards */}
        <Card className="p-6 shadow-card">
          <h2 className="font-bold text-lg mb-4">Recent Coin Awards</h2>
          <div className="space-y-3">
            {[
              { name: "Dr. Priya Kumar", coins: 10, action: "Helped with Chest Pain emergency" },
              { name: "Rajesh ASHA Worker", coins: 10, action: "Provided first aid" },
              { name: "Kumar Paramedic", coins: 10, action: "Arranged ambulance" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-sm">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <Badge className="gradient-success">+{activity.coins} coins</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;
