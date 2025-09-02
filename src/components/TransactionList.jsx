import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Receipt, ArrowUpRight, ArrowDownLeft, RefreshCw } from "lucide-react";
import { useState } from "react";

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
    case 'settlements':
      return '💸';
    default:
      return '📄';
  }
};

const getTransactionIcon = (type) => {
  switch (type) {
    case 'expense':
      return <Receipt className="h-4 w-4" />;
    case 'income':
      return <ArrowDownLeft className="h-4 w-4 text-income" />;
    case 'settlement-expense':
      return <ArrowUpRight className="h-4 w-4 text-expense" />;
    case 'settlement-income':
      return <ArrowDownLeft className="h-4 w-4 text-income" />;
    default:
      return <RefreshCw className="h-4 w-4" />;
  }
};

const getTransactionTypeLabel = (type) => {
  switch (type) {
    case 'expense':
      return 'Expense';
    case 'income':
      return 'Income';
    case 'settlement-expense':
      return 'Settlement Paid';
    case 'settlement-income':
      return 'Settlement Received';
    default:
      return 'Transaction';
  }
};

export function TransactionList({ transactions, currentUser, users }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Get user's transactions only
  const userTransactions = transactions.filter(t => t.userId === currentUser.id);
  
  // Get unique categories
  const categories = Array.from(new Set(userTransactions.map(t => t.category))).filter(cat => cat !== 'Settlements');
  
  // Filter transactions
  const filteredTransactions = selectedCategory === "all" 
    ? userTransactions 
    : userTransactions.filter(t => t.category === selectedCategory);

  // Sort by date (newest first)
  const sortedTransactions = filteredTransactions.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getUserName = (userId) => users.find(u => u.id === userId)?.name || 'Unknown';

  return (
    <Card className="bg-gradient-card border-border shadow-medium">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">Transaction History</CardTitle>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sortedTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-xl">{getCategoryIcon(transaction.category)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{transaction.description}</span>
                    {getTransactionIcon(transaction.transactionType)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {format(new Date(transaction.date), 'MMM d, yyyy • h:mm a')}
                  </div>
                  {transaction.groupTransactionDetails.outOfPocket && (
                    <div className="text-xs text-pending mt-1">
                      Out of pocket: ${transaction.groupTransactionDetails.outOfPocket.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${
                  transaction.transactionType === 'income' || transaction.transactionType === 'settlement-income'
                    ? 'text-income' 
                    : 'text-expense'
                }`}>
                  {transaction.transactionType === 'income' || transaction.transactionType === 'settlement-income' 
                    ? '+' : '-'}${transaction.amount.toFixed(2)}
                </div>
                <Badge variant="secondary" className="text-xs mt-1">
                  {getTransactionTypeLabel(transaction.transactionType)}
                </Badge>
              </div>
            </div>
          ))}
          
          {sortedTransactions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No transactions found for this category
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}