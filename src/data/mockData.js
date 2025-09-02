// Mock data based on the provided schema

export const mockData = {
  users: [
    {
      id: "u1",
      name: "User A",
      startBalance: 2130,
      currentBalance: 1000
    },
    {
      id: "u2",
      name: "User B",
      startBalance: 2300,
      currentBalance: 1000
    }
  ],
  groupTransactions: [
    {
      id: "grp-t1",
      payerId: "u1",
      amount: 120,
      category: "Food",
      description: "Dinner at hawker centre",
      date: "2025-08-21T19:30:00.000Z",
      split: [
        {
          userId: "u1",
          share: 60,
          paid: true,
          transactionId: "ind-t1"
        },
        {
          userId: "u2",
          share: 60,
          paid: true,
          transactionId: "ind-t7"
        }
      ],
      hasSettlement: true,
      settlementId: "sett-t1"
    },
    {
      id: "grp-t2",
      payerId: "u2",
      amount: 80,
      category: "Entertainment",
      description: "Movie night",
      date: "2025-08-22T20:00:00.000Z",
      split: [
        {
          userId: "u1",
          share: 40,
          paid: true,
          transactionId: "ind-t8"
        },
        {
          userId: "u2",
          share: 40,
          paid: true,
          transactionId: "ind-t2"
        }
      ],
      hasSettlement: true,
      settlementId: "sett-t1"
    },
    {
      id: "grp-t3",
      payerId: "u1",
      amount: 70,
      category: "Fitness",
      description: "Gym membership",
      date: "2025-08-22T20:00:00.000Z",
      split: [
        {
          userId: "u1",
          share: 35,
          paid: true,
          transactionId: "ind-t3"
        },
        {
          userId: "u2",
          share: 35,
          paid: true,
          transactionId: "ind-t9"
        }
      ],
      hasSettlement: true,
      settlementId: "sett-t1"
    },
    {
      id: "grp-t4",
      payerId: "u2",
      amount: 70,
      category: "Travel",
      description: "Train ticket",
      date: "2025-08-23T20:00:00.000Z",
      split: [
        {
          userId: "u1",
          share: 35,
          paid: true,
          transactionId: "ind-t10"
        },
        {
          userId: "u2",
          share: 35,
          paid: true,
          transactionId: "ind-t4"
        }
      ],
      hasSettlement: true,
      settlementId: "sett-t1"
    },
    {
      id: "grp-t5",
      payerId: "u2",
      amount: 100,
      category: "Supplements",
      description: "Vitamin C",
      date: "2025-08-24T20:00:00.000Z",
      split: [
        {
          userId: "u1",
          share: 50,
          paid: false,
          transactionId: "ind-t13"
        },
        {
          userId: "u2",
          share: 50,
          paid: true,
          transactionId: "ind-t5"
        }
      ],
      hasSettlement: false
    },
    {
      id: "grp-t6",
      payerId: "u1",
      amount: 70,
      category: "Food",
      description: "Supper",
      date: "2025-08-24T20:00:00.000Z",
      split: [
        {
          userId: "u1",
          share: 35,
          paid: true,
          transactionId: "ind-t6"
        },
        {
          userId: "u2",
          share: 35,
          paid: false,
          transactionId: "ind-t14"
        }
      ],
      hasSettlement: false
    }
  ],
  transactions: [
    {
      id: "ind-t1",
      transactionType: "expense",
      userId: "u1",
      amount: 60,
      category: "Food",
      description: "Dinner at hawker centre",
      date: "2025-08-21T19:30:00.000Z",
      groupTransactionDetails: {
        outOfPocket: 120,
        groupTransactionId: "grp-t1",
        toReceive: {
          u2: {
            amount: 60,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t12"
          }
        }
      }
    },
    {
      id: "ind-t7",
      transactionType: "expense",
      userId: "u2",
      amount: 60,
      category: "Food",
      description: "Dinner at hawker centre",
      date: "2025-08-21T19:30:00.000Z",
      groupTransactionDetails: {
        groupTransactionId: "grp-t1",
        paidTo: {
          u1: {
            amount: 60,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t11"
          }
        }
      }
    },
    {
      id: "ind-t2",
      transactionType: "expense",
      userId: "u2",
      amount: 40,
      category: "Entertainment",
      description: "Movie night",
      date: "2025-08-22T20:00:00.000Z",
      groupTransactionDetails: {
        outOfPocket: 80,
        groupTransactionId: "grp-t2",
        toReceive: {
          u1: {
            amount: 40,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t11"
          }
        }
      }
    },
    {
      id: "ind-t8",
      transactionType: "expense",
      userId: "u1",
      amount: 40,
      category: "Entertainment",
      description: "Movie night",
      date: "2025-08-22T20:00:00.000Z",
      groupTransactionDetails: {
        groupTransactionId: "grp-t2",
        paidTo: {
          u2: {
            amount: 40,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t12"
          }
        }
      }
    },
    {
      id: "ind-t3",
      transactionType: "expense",
      userId: "u1",
      amount: 35,
      category: "Fitness",
      description: "Gym membership",
      date: "2025-08-22T20:00:00.000Z",
      groupTransactionDetails: {
        outOfPocket: 70,
        groupTransactionId: "grp-t3",
        toReceive: {
          u2: {
            amount: 35,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t12"
          }
        }
      }
    },
    {
      id: "ind-t9",
      transactionType: "expense",
      userId: "u2",
      amount: 35,
      category: "Fitness",
      description: "Gym membership",
      date: "2025-08-22T20:00:00.000Z",
      groupTransactionDetails: {
        groupTransactionId: "grp-t3",
        paidTo: {
          u1: {
            amount: 35,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t11"
          }
        }
      }
    },
    {
      id: "ind-t4",
      transactionType: "expense",
      userId: "u2",
      amount: 35,
      category: "Travel",
      description: "Train ticket",
      date: "2025-08-23T20:00:00.000Z",
      groupTransactionDetails: {
        outOfPocket: 70,
        groupTransactionId: "grp-t4",
        toReceive: {
          u1: {
            amount: 35,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t11"
          }
        }
      }
    },
    {
      id: "ind-t10",
      transactionType: "expense",
      userId: "u1",
      amount: 35,
      category: "Travel",
      description: "Train ticket",
      date: "2025-08-23T20:00:00.000Z",
      groupTransactionDetails: {
        groupTransactionId: "grp-t4",
        paidTo: {
          u2: {
            amount: 35,
            hasPaid: true,
            settlementId: "sett-t1",
            transactionId: "ind-t12"
          }
        }
      }
    },
    {
      id: "ind-t5",
      transactionType: "expense",
      userId: "u2",
      amount: 50,
      category: "Supplements",
      description: "Vitamin C",
      date: "2025-08-24T20:00:00.000Z",
      groupTransactionDetails: {
        outOfPocket: 100,
        groupTransactionId: "grp-t5",
        toReceive: {
          u1: {
            amount: 50,
            hasPaid: false
          }
        }
      }
    },
    {
      id: "ind-t13",
      transactionType: "expense",
      userId: "u1",
      amount: 50,
      category: "Supplements",
      description: "Vitamin C",
      date: "2025-08-24T20:00:00.000Z",
      groupTransactionDetails: {
        groupTransactionId: "grp-t5",
        paidTo: {
          u2: {
            amount: 50,
            hasPaid: false
          }
        }
      }
    },
    {
      id: "ind-t6",
      transactionType: "expense",
      userId: "u1",
      amount: 35,
      category: "Food",
      description: "Supper",
      date: "2025-08-24T20:00:00.000Z",
      groupTransactionDetails: {
        outOfPocket: 70,
        groupTransactionId: "grp-t6",
        toReceive: {
          u2: {
            amount: 35,
            hasPaid: false
          }
        }
      }
    },
    {
      id: "ind-t14",
      transactionType: "expense",
      userId: "u2",
      amount: 35,
      category: "Food",
      description: "Supper",
      date: "2025-08-24T20:00:00.000Z",
      groupTransactionDetails: {
        groupTransactionId: "grp-t6",
        paidTo: {
          u1: {
            amount: 35,
            hasPaid: false
          }
        }
      }
    },
    {
      id: "ind-t11",
      transactionType: "settlement-expense",
      userId: "u2",
      amount: 20,
      category: "Settlements",
      description: "Group settlements",
      date: "2025-08-28T19:30:00.000Z",
      groupTransactionDetails: {
        groupTransactionIds: ["grp-t1", "grp-t2", "grp-t3", "grp-t4"],
        paidTo: {
          u1: {
            amount: 20,
            hasPaid: true
          }
        }
      }
    },
    {
      id: "ind-t12",
      transactionType: "settlement-income",
      userId: "u1",
      amount: 20,
      category: "Settlements",
      description: "Group settlements",
      date: "2025-08-28T19:30:00.000Z",
      groupTransactionDetails: {
        intoPocket: 20,
        groupTransactionIds: ["grp-t1", "grp-t2", "grp-t3", "grp-t4"],
        toReceive: {
          u2: {
            amount: 20,
            hasPaid: true
          }
        }
      }
    }
  ],
  pendingSettlements: [
    {
      fromUserId: "u1",
      toUserId: "u2",
      amount: 15,
      status: "pending",
      transactionsIds: ["ind-t5", "ind-t6"]
    }
  ],
  pastSettlements: [
    {
      id: "sett-t1",
      fromUserId: "u2",
      toUserId: "u1",
      amount: 20,
      status: "completed",
      date: "2025-08-28T19:30:00.000Z",
      groupTransactionsIds: ["grp-t1", "grp-t2", "grp-t3", "grp-t4"]
    }
  ]
};