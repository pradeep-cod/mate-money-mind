import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, PieChart } from "lucide-react";

export function SpendingInsights({ transactions, currentUserId }) {
  // Filter to user's actual expenses (excluding settlement transactions)
  const userExpenses = transactions.filter(t => 
    t.userId === currentUserId && 
    t.transactionType === 'expense'
  );

  // Calculate spending by category
  const spendingByCategory = userExpenses.reduce((acc, transaction) => {
    const category = transaction.category;
    acc[category] = (acc[category] || 0) + transaction.amount;
    return acc;
  }, {});

  const totalSpending = Object.values(spendingByCategory).reduce((sum, amount) => sum + amount, 0);
  
  // Sort categories by spending amount
  const sortedCategories = Object.entries(spendingByCategory)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5); // Top 5 categories

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'food':
        return '🍽️';
      case 'entertainment':
        return '🎬';
      case 'fitness':
        return '💪';
      case 'travel':
        return '🚊';
      case 'supplements':
        return '💊';
      default:
        return '📄';
    }
  };

  const getCategoryColor = (index) => {
    const colors = [
      'bg-primary/20 text-primary',
      'bg-income/20 text-income',
      'bg-warning/20 text-warning',
      'bg-expense/20 text-expense',
      'bg-muted text-muted-foreground'
    ];
    return colors[index] || colors[4];
  };

  return (
    <Card className="bg-gradient-card border-border shadow-medium">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Spending Insights</CardTitle>
        <PieChart className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4" />
          <span>Total actual spending: </span>
          <span className="font-semibold text-foreground">${totalSpending.toFixed(2)}</span>
        </div>

        <div className="space-y-3">
          {sortedCategories.map(([category, amount], index) => {
            const percentage = (amount / totalSpending) * 100;
            return (
              <div key={category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getCategoryIcon(category)}</span>
                    <span className="font-medium text-sm">{category}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sm">${amount.toFixed(2)}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(index)}`}>
                      {percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>

        {sortedCategories.length === 0 && (
          <div className="text-center py-4 text-muted-foreground text-sm">
            No expense data available
          </div>
        )}
      </CardContent>
    </Card>
  );
}