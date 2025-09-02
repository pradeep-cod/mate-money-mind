import { useState } from "react";
import { mockData } from "@/data/mockData";
import { UserSelector } from "@/components/UserSelector";
import { BalanceCard } from "@/components/BalanceCard";
import { SettlementCard } from "@/components/SettlementCard";
import { TransactionList } from "@/components/TransactionList";
import { SpendingInsights } from "@/components/SpendingInsights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Receipt, BarChart3, Users } from "lucide-react";

const Index = () => {
  const [selectedUserId, setSelectedUserId] = useState("u1");
  const [pendingSettlements, setPendingSettlements] = useState([...mockData.pendingSettlements]);
  
  const currentUser = mockData.users.find(u => u.id === selectedUserId);
  
  if (!currentUser) {
    return <div>User not found</div>;
  }

  const handleSettleUp = (settlement) => {
    // Simulate settling up - remove from pending settlements
    setPendingSettlements(prev => prev.filter(s => 
      !(s.fromUserId === settlement.fromUserId && 
        s.toUserId === settlement.toUserId && 
        s.amount === settlement.amount)
    ));
    
    const otherUser = mockData.users.find(u => u.id === settlement.toUserId);
    toast({
      title: "Settlement completed!",
      description: `Successfully paid $${settlement.amount.toFixed(2)} to ${otherUser?.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Split & Budget Tracker
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Track shared expenses and manage your budget
              </p>
            </div>
            <UserSelector 
              users={[...mockData.users]}
              selectedUserId={selectedUserId}
              onUserChange={setSelectedUserId}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Balance Overview */}
          <div className="lg:col-span-1">
            <BalanceCard user={currentUser} />
          </div>
          
          {/* Settlement Summary */}
          <div className="lg:col-span-2">
            <SettlementCard 
              currentUser={currentUser}
              users={[...mockData.users]}
              pendingSettlements={pendingSettlements}
              onSettleUp={handleSettleUp}
            />
          </div>
        </div>

        {/* Detailed Views */}
        <div className="bg-card/30 border border-border/50 rounded-lg p-6">
          <Tabs defaultValue="transactions" className="space-y-6">
            <TabsList className="flex w-full h-12 bg-muted/50 border border-border/50 rounded-lg overflow-hidden">
              <TabsTrigger 
                value="transactions" 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:border-r data-[state=active]:border-border/50 transition-all duration-200 rounded-none"
              >
                <Receipt className="h-4 w-4" />
                <span className="font-medium">Transactions</span>
              </TabsTrigger>
              <TabsTrigger 
                value="insights" 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:border-r data-[state=active]:border-border/50 transition-all duration-200 rounded-none"
              >
                <BarChart3 className="h-4 w-4" />
                <span className="font-medium">Insights</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settlements" 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 rounded-none"
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">Settlements</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="space-y-6">
              <TransactionList 
                transactions={[...mockData.transactions]}
                currentUser={currentUser}
                users={[...mockData.users]}
              />
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <SpendingInsights 
                transactions={[...mockData.transactions]}
                currentUserId={selectedUserId}
              />
            </TabsContent>

            <TabsContent value="settlements" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SettlementCard 
                  currentUser={currentUser}
                  users={[...mockData.users]}
                  pendingSettlements={pendingSettlements}
                  onSettleUp={handleSettleUp}
                />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Settlement History</h3>
                  {mockData.pastSettlements.map((settlement) => (
                    <div key={settlement.id} className="p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">
                            {mockData.users.find(u => u.id === settlement.fromUserId)?.name} → {mockData.users.find(u => u.id === settlement.toUserId)?.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {settlement.date && new Date(settlement.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="font-semibold text-income">+${settlement.amount.toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;