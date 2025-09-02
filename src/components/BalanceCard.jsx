import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wallet, TrendingDown } from "lucide-react";

export function BalanceCard({ user }) {
  const monthlySpent = user.startBalance - user.currentBalance;
  const spendingRate = (monthlySpent / user.startBalance) * 100;

  return (
    <Card className="bg-gradient-card border-border shadow-medium">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Current Balance
        </CardTitle>
        <Wallet className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">
          ${user.currentBalance.toFixed(2)}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Monthly spending</span>
            <span className="text-foreground font-medium">${monthlySpent.toFixed(2)}</span>
          </div>
          <Progress value={spendingRate} className="h-2" />
          <div className="flex items-center text-xs text-muted-foreground">
            <TrendingDown className="h-3 w-3 mr-1" />
            {spendingRate.toFixed(1)}% of starting balance
          </div>
        </div>
      </CardContent>
    </Card>
  );
}