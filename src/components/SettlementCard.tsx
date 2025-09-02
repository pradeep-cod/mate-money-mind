import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Settlement } from "@/data/mockData";
import { ArrowUpRight, ArrowDownLeft, CheckCircle } from "lucide-react";

interface SettlementCardProps {
  currentUser: User;
  users: User[];
  pendingSettlements: Settlement[];
  onSettleUp: (settlement: Settlement) => void;
}

export function SettlementCard({ currentUser, users, pendingSettlements, onSettleUp }: SettlementCardProps) {
  const userOwes = pendingSettlements.filter(s => s.fromUserId === currentUser.id);
  const userIsOwed = pendingSettlements.filter(s => s.toUserId === currentUser.id);
  
  const totalOwed = userOwes.reduce((sum, s) => sum + s.amount, 0);
  const totalOwesTo = userIsOwed.reduce((sum, s) => sum + s.amount, 0);
  const netBalance = totalOwesTo - totalOwed;

  const getUserName = (userId: string) => users.find(u => u.id === userId)?.name || 'Unknown';

  return (
    <Card className="bg-gradient-card border-border shadow-medium">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Settlement Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Net Balance */}
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold">
            {netBalance >= 0 ? (
              <span className="text-income">+${netBalance.toFixed(2)}</span>
            ) : (
              <span className="text-expense">${Math.abs(netBalance).toFixed(2)}</span>
            )}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {netBalance >= 0 ? "You are owed" : "You owe"}
          </div>
        </div>

        {/* Individual settlements */}
        <div className="space-y-3">
          {userOwes.map((settlement, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-expense/5 rounded-lg border border-expense/20">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-expense" />
                <div>
                  <div className="font-medium text-sm">You owe {getUserName(settlement.toUserId)}</div>
                  <div className="text-xs text-muted-foreground">Pending payment</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-expense">${settlement.amount.toFixed(2)}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onSettleUp(settlement)}
                  className="text-xs"
                >
                  Settle Up
                </Button>
              </div>
            </div>
          ))}

          {userIsOwed.map((settlement, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-income/5 rounded-lg border border-income/20">
              <div className="flex items-center gap-2">
                <ArrowDownLeft className="h-4 w-4 text-income" />
                <div>
                  <div className="font-medium text-sm">{getUserName(settlement.fromUserId)} owes you</div>
                  <div className="text-xs text-muted-foreground">Waiting for payment</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-income">+${settlement.amount.toFixed(2)}</span>
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Pending
                </Badge>
              </div>
            </div>
          ))}

          {userOwes.length === 0 && userIsOwed.length === 0 && (
            <div className="text-center py-4 text-muted-foreground text-sm">
              All settled up! 🎉
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}