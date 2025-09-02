# Mate-Money-Mind: Split & Budget Tracker

A modern, responsive web application that helps friends track shared expenses and manage budgets effectively. Built with React, Vite, and Tailwind CSS.

## 🚀 How to Run the App

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Mate-Money-Mind
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📸 Example Screenshots

_[Screenshots will be added here]_

- Main Dashboard with Balance Overview
- Transaction History with Category Filtering
- Spending Insights with Visual Charts
- Settlement Summary and Management

## 🎨 Design Decisions

### 1. **Component Architecture**

- **Modular Design**: Each major feature is a separate, reusable component
- **Single Responsibility**: Components focus on one specific functionality
- **Props-based Communication**: Clean data flow between parent and child components

### 2. **UI/UX Philosophy**

- **Clarity First**: Information hierarchy designed for quick understanding
- **Progressive Disclosure**: Show essential info first, details on demand
- **Visual Consistency**: Unified color scheme, spacing, and typography
- **Responsive Design**: Mobile-first approach with desktop enhancements

### 3. **Data Visualization Strategy**

- **Tab-based Navigation**: Logical grouping of related information
- **Card-based Layout**: Easy scanning and comparison of data
- **Color Coding**: Intuitive use of colors (green for income, red for expenses)
- **Progress Indicators**: Visual representation of spending vs. budget

### 4. **User Experience Considerations**

- **User Selector**: Easy switching between different user perspectives
- **Real-time Updates**: Immediate feedback on settlement actions
- **Filtering & Sorting**: Quick access to relevant transaction data
- **Toast Notifications**: Clear feedback for user actions

### 5. **Technical Implementation Choices**

- **React Hooks**: Modern state management with useState and useEffect
- **Tailwind CSS**: Rapid development with consistent design system
- **Component Libraries**: shadcn/ui for polished, accessible components
- **Mock Data Structure**: Flexible data model for future backend integration

## 🔮 Features Considered But Not Implemented

### 1. **Advanced Analytics**

- **Monthly/Yearly Trends**: Historical spending patterns over time
- **Budget Alerts**: Notifications when approaching spending limits
- **Category Budgets**: Individual budget limits per expense category
- **Spending Predictions**: AI-powered future expense forecasting

### 2. **Enhanced User Management**

- **User Profiles**: Detailed user information and preferences
- **Group Management**: Support for more than two users
- **User Permissions**: Different access levels and roles
- **User Avatars**: Visual identification and personalization

### 3. **Financial Features**

- **Currency Support**: Multi-currency expense tracking
- **Receipt Upload**: Photo/document storage for transactions
- **Recurring Expenses**: Automatic transaction creation
- **Export Functionality**: PDF/CSV reports for accounting

### 4. **Social Features**

- **Expense Sharing**: Social media integration for expense sharing
- **Comments & Notes**: Discussion threads on shared expenses
- **Expense Challenges**: Gamification elements for budget goals
- **Group Chat**: Built-in communication for expense coordination

### 5. **Advanced UI Elements**

- **Dark Mode**: Theme switching capability
- **Customizable Dashboard**: Drag-and-drop widget arrangement
- **Advanced Charts**: Interactive D3.js visualizations
- **Mobile App**: Native mobile application development

### 6. **Data & Security**

- **Offline Support**: PWA capabilities for offline usage
- **Data Encryption**: Enhanced security for financial information
- **Backup & Sync**: Cloud storage and cross-device synchronization
- **Audit Trail**: Complete history of all financial changes

## 🏗️ Technical Architecture

### Frontend Stack

- **Framework**: React 18 with modern hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **State Management**: React hooks for local state
- **Routing**: React Router for navigation

### Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
├── data/               # Mock data and data models
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── ui/                 # shadcn/ui components
```

### Key Components

- **BalanceCard**: Current balance and spending overview
- **SettlementCard**: Settlement summary and management
- **TransactionList**: Transaction history with filtering
- **SpendingInsights**: Category-based spending analysis
- **UserSelector**: User switching functionality

## 🎯 Problem-Solving Approach

### 1. **Core Problem Analysis**

- **Payables & Receivables**: Clear visualization of who owes whom
- **True Spending vs. Advance Payments**: Distinction for accurate budgeting
- **Multiple Transaction Handling**: Complex expense scenarios

### 2. **Solution Design**

- **Net Balance Calculation**: Automatic computation of overall position
- **Category-based Analysis**: Understanding spending patterns
- **Settlement Simulation**: UI-based settlement management
- **Real-time Updates**: Immediate state changes for user feedback

### 3. **User Experience Focus**

- **Information Hierarchy**: Most important data prominently displayed
- **Actionable Insights**: Clear next steps for users
- **Error Prevention**: Validation and confirmation for critical actions
- **Accessibility**: Screen reader support and keyboard navigation

## 🚀 Future Enhancements

### Phase 2 Features

- Backend integration with real-time data
- User authentication and data persistence
- Advanced reporting and analytics
- Mobile app development

### Phase 3 Features

- Multi-user group support
- Advanced financial tools
- Integration with banking APIs
- Machine learning insights

## 📝 License

This project is created for educational and portfolio purposes.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
