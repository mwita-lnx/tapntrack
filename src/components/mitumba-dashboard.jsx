import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { ShirtIcon, ArrowLeft } from 'lucide-react';
import WrappItUp from './full-wrapp-it-up';

// Sample data for a mitumba (second-hand clothing) business
const monthlySales = [
  { month: 'Jan', mens: 380, womens: 520, childrens: 210, shoes: 150, accessories: 90 },
  { month: 'Feb', mens: 420, womens: 540, childrens: 230, shoes: 160, accessories: 95 },
  { month: 'Mar', mens: 450, womens: 580, childrens: 250, shoes: 180, accessories: 110 },
  { month: 'Apr', mens: 520, womens: 620, childrens: 280, shoes: 200, accessories: 120 },
  { month: 'May', mens: 580, womens: 650, childrens: 300, shoes: 220, accessories: 130 },
  { month: 'Jun', mens: 550, womens: 630, childrens: 290, shoes: 210, accessories: 125 },
  { month: 'Jul', mens: 530, womens: 610, childrens: 270, shoes: 200, accessories: 115 },
  { month: 'Aug', mens: 560, womens: 640, childrens: 310, shoes: 230, accessories: 140 },
  { month: 'Sep', mens: 600, womens: 680, childrens: 330, shoes: 250, accessories: 150 },
  { month: 'Oct', mens: 630, womens: 700, childrens: 350, shoes: 260, accessories: 160 },
  { month: 'Nov', mens: 650, womens: 720, childrens: 360, shoes: 270, accessories: 165 },
  { month: 'Dec', mens: 680, womens: 750, childrens: 380, shoes: 290, accessories: 180 }
];

const monthlyRevenue = [
  { month: 'Jan', revenue: 58500, costs: 32000, target: 55000 },
  { month: 'Feb', revenue: 62000, costs: 33500, target: 60000 },
  { month: 'Mar', revenue: 68000, costs: 36000, target: 65000 },
  { month: 'Apr', revenue: 74000, costs: 38500, target: 70000 },
  { month: 'May', revenue: 78000, costs: 40000, target: 75000 },
  { month: 'Jun', revenue: 75000, costs: 39000, target: 75000 },
  { month: 'Jul', revenue: 72000, costs: 37500, target: 75000 },
  { month: 'Aug', revenue: 76000, costs: 39500, target: 75000 },
  { month: 'Sep', revenue: 82000, costs: 42000, target: 80000 },
  { month: 'Oct', revenue: 85000, costs: 43500, target: 80000 },
  { month: 'Nov', revenue: 87000, costs: 44500, target: 85000 },
  { month: 'Dec', revenue: 92000, costs: 47000, target: 90000 }
];

const inventoryTurnover = [
  { month: 'Jan', mens: 12, womens: 15, childrens: 10, shoes: 8, accessories: 6 },
  { month: 'Feb', mens: 13, womens: 16, childrens: 11, shoes: 9, accessories: 7 },
  { month: 'Mar', mens: 14, womens: 17, childrens: 12, shoes: 10, accessories: 8 },
  { month: 'Apr', mens: 15, womens: 18, childrens: 13, shoes: 11, accessories: 9 },
  { month: 'May', mens: 16, womens: 19, childrens: 14, shoes: 12, accessories: 10 },
  { month: 'Jun', mens: 15, womens: 18, childrens: 13, shoes: 11, accessories: 9 },
  { month: 'Jul', mens: 14, womens: 17, childrens: 12, shoes: 10, accessories: 8 },
  { month: 'Aug', mens: 15, womens: 18, childrens: 13, shoes: 11, accessories: 9 },
  { month: 'Sep', mens: 16, womens: 19, childrens: 14, shoes: 12, accessories: 10 },
  { month: 'Oct', mens: 17, womens: 20, childrens: 15, shoes: 13, accessories: 11 },
  { month: 'Nov', mens: 18, womens: 21, childrens: 16, shoes: 14, accessories: 12 },
  { month: 'Dec', mens: 19, womens: 22, childrens: 17, shoes: 15, accessories: 13 }
];

const balesPurchased = [
  { month: 'Jan', premium: 4, grade1: 8, grade2: 12 },
  { month: 'Feb', premium: 5, grade1: 8, grade2: 12 },
  { month: 'Mar', premium: 5, grade1: 9, grade2: 13 },
  { month: 'Apr', premium: 6, grade1: 10, grade2: 14 },
  { month: 'May', premium: 6, grade1: 11, grade2: 15 },
  { month: 'Jun', premium: 5, grade1: 10, grade2: 14 },
  { month: 'Jul', premium: 5, grade1: 9, grade2: 13 },
  { month: 'Aug', premium: 6, grade1: 10, grade2: 14 },
  { month: 'Sep', premium: 6, grade1: 11, grade2: 15 },
  { month: 'Oct', premium: 7, grade1: 12, grade2: 16 },
  { month: 'Nov', premium: 7, grade1: 12, grade2: 16 },
  { month: 'Dec', premium: 8, grade1: 13, grade2: 17 }
];

const customerTypes = [
  { name: 'Retail Customers', value: 65 },
  { name: 'Small Resellers', value: 20 },
  { name: 'Boutique Shops', value: 10 },
  { name: 'Online Buyers', value: 5 }
];

const customerSatisfaction = [
  { month: 'Jan', satisfaction: 4.2 },
  { month: 'Feb', satisfaction: 4.3 },
  { month: 'Mar', satisfaction: 4.4 },
  { month: 'Apr', satisfaction: 4.5 },
  { month: 'May', satisfaction: 4.6 },
  { month: 'Jun', satisfaction: 4.5 },
  { month: 'Jul', satisfaction: 4.4 },
  { month: 'Aug', satisfaction: 4.5 },
  { month: 'Sep', satisfaction: 4.6 },
  { month: 'Oct', satisfaction: 4.7 },
  { month: 'Nov', satisfaction: 4.8 },
  { month: 'Dec', satisfaction: 4.9 }
];

const productCategoryData = [
  { name: "Women's Clothing", value: 40 },
  { name: "Men's Clothing", value: 30 },
  { name: "Children's Clothing", value: 15 },
  { name: "Shoes", value: 10 },
  { name: "Accessories", value: 5 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

// Calculate annual totals for Wrapped view
const totalItemsSold = monthlySales.reduce((sum, month) => 
  sum + month.mens + month.womens + month.childrens + month.shoes + month.accessories, 0);

const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
const totalCosts = monthlyRevenue.reduce((sum, month) => sum + month.costs, 0);
const totalProfit = totalRevenue - totalCosts;

const totalBales = balesPurchased.reduce((sum, month) => 
  sum + month.premium + month.grade1 + month.grade2, 0);

const averageSatisfaction = (customerSatisfaction.reduce((sum, month) => 
  sum + month.satisfaction, 0) / customerSatisfaction.length).toFixed(1);

const bestMonth = monthlyRevenue.reduce((best, month) => 
  month.revenue > best.revenue ? month : best, monthlyRevenue[0]);

const bestSellingCategory = productCategoryData.reduce((best, category) => 
  category.value > best.value ? category : best, productCategoryData[0]);

const averageInventoryTurnover = (inventoryTurnover.reduce((sum, month) => {
  const avgPerMonth = (month.mens + month.womens + month.childrens + month.shoes + month.accessories) / 5;
  return sum + avgPerMonth;
}, 0) / inventoryTurnover.length).toFixed(1);

// Create data for wrapped component
const wrappedData = [
  {
    title: "Total Items Sold",
    content: totalItemsSold.toLocaleString(),
    subtitle: `That's approximately ${Math.round(totalItemsSold / 365)} items every day!`,
    gradient: "linear-gradient(45deg, var(--purple-600), var(--purple-800))",
    list: [
      `Women's Clothing: ${monthlySales.reduce((sum, month) => sum + month.womens, 0).toLocaleString()} items`,
      `Men's Clothing: ${monthlySales.reduce((sum, month) => sum + month.mens, 0).toLocaleString()} items`,
      `Children's Clothing: ${monthlySales.reduce((sum, month) => sum + month.childrens, 0).toLocaleString()} items`,
      `Shoes: ${monthlySales.reduce((sum, month) => sum + month.shoes, 0).toLocaleString()} items`,
      `Accessories: ${monthlySales.reduce((sum, month) => sum + month.accessories, 0).toLocaleString()} items`
    ]
  },
  {
    title: "Total Revenue",
    content: `$${(totalRevenue/1000).toFixed(0)}K`,
    subtitle: `With $${(totalProfit/1000).toFixed(0)}K profit`,
    gradient: "linear-gradient(45deg, var(--purple-500), var(--purple-700))",
    list: [
      `Best month: ${bestMonth.month} ($${bestMonth.revenue.toLocaleString()})`,
      `Average monthly revenue: $${Math.round(totalRevenue/12).toLocaleString()}`,
      `Total costs: $${totalCosts.toLocaleString()}`,
      `Profit margin: ${Math.round((totalProfit/totalRevenue)*100)}%`,
      `Average item value: $${Math.round(totalRevenue/totalItemsSold)}`
    ]
  },
  {
    title: "Total Bales Purchased",
    content: totalBales.toString(),
    subtitle: `That's about ${Math.round(totalBales/12)} bales per month`,
    gradient: "linear-gradient(45deg, var(--purple-700), var(--zinc-800))",
    list: [
      `Premium bales: ${balesPurchased.reduce((sum, month) => sum + month.premium, 0)}`,
      `Grade 1 bales: ${balesPurchased.reduce((sum, month) => sum + month.grade1, 0)}`,
      `Grade 2 bales: ${balesPurchased.reduce((sum, month) => sum + month.grade2, 0)}`,
      `Most bales in a month: ${Math.max(...balesPurchased.map(month => month.premium + month.grade1 + month.grade2))}`,
      `Least bales in a month: ${Math.min(...balesPurchased.map(month => month.premium + month.grade1 + month.grade2))}`
    ]
  },
  {
    title: "Best Selling Category",
    content: bestSellingCategory.name,
    subtitle: `Making up ${bestSellingCategory.value}% of total sales`,
    gradient: "linear-gradient(45deg, var(--purple-600), var(--zinc-700))",
    list: productCategoryData.map(category => `${category.name}: ${category.value}% of sales`)
  },
  {
    title: "Customer Satisfaction",
    content: `${averageSatisfaction}/5.0`,
    subtitle: "Your customers love your selection!",
    gradient: "linear-gradient(45deg, var(--purple-500), var(--purple-800))",
    list: [
      `Average rating: ${averageSatisfaction}/5.0`,
      `Highest month: ${customerSatisfaction.reduce((highest, month) => month.satisfaction > highest.satisfaction ? month : highest, customerSatisfaction[0]).month} (${customerSatisfaction.reduce((highest, month) => month.satisfaction > highest.satisfaction ? month : highest, customerSatisfaction[0]).satisfaction}/5.0)`,
      `${customerTypes[0].name}: ${customerTypes[0].value}% of customers`,
      `${customerTypes[1].name}: ${customerTypes[1].value}% of customers`,
      `${customerTypes[2].name}: ${customerTypes[2].value}% of customers`
    ]
  }
];

const MitumbaDashboard = () => {
  const [view, setView] = useState('monthly');
  const [showWrapped, setShowWrapped] = useState(false);

  if (showWrapped) {
    return <WrappItUp 
      wrappedData={wrappedData} 
      title="Mitumba Wrapped"
      logoText="Tap & Track"
      logo="Shirt"
      color="purple"
      returnPath="/mitumba-dashboard"
    />;
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-zinc-600" />
            </Link>
            <div className="flex items-center gap-2 font-bold text-lg">
              <ShirtIcon className="h-6 w-6 text-purple-600" />
              <span className="tracking-tight text-zinc-800">Mitumba Dashboard</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setView('monthly')} 
              className={`px-4 py-2 rounded-md text-sm ${view === 'monthly' ? 'bg-purple-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setView('quarterly')} 
              className={`px-4 py-2 rounded-md text-sm ${view === 'quarterly' ? 'bg-purple-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Quarterly
            </button>
            <button 
              onClick={() => setShowWrapped(true)} 
              className="px-4 py-2 rounded-md text-sm bg-purple-700 text-white hover:bg-purple-800 transition-colors"
            >
              Mitumba Wrapped
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Items Sold Chart */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Items Sold by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mens" fill="#8884d8" name="Men's" />
                <Bar dataKey="womens" fill="#8bc34a" name="Women's" />
                <Bar dataKey="childrens" fill="#ffc658" name="Children's" />
                <Bar dataKey="shoes" fill="#ff8042" name="Shoes" />
                <Bar dataKey="accessories" fill="#a4de6c" name="Accessories" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue & Costs */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Revenue & Costs</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#4caf50" strokeWidth={2} name="Revenue" />
                <Line type="monotone" dataKey="costs" stroke="#f44336" strokeWidth={2} name="Costs" />
                <Line type="monotone" dataKey="target" stroke="#9c27b0" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Inventory Turnover */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Inventory Turnover Rate (days)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inventoryTurnover}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mens" stroke="#8884d8" strokeWidth={2} name="Men's" />
                <Line type="monotone" dataKey="womens" stroke="#8bc34a" strokeWidth={2} name="Women's" />
                <Line type="monotone" dataKey="childrens" stroke="#ffc658" strokeWidth={2} name="Children's" />
                <Line type="monotone" dataKey="shoes" stroke="#ff8042" strokeWidth={2} name="Shoes" />
                <Line type="monotone" dataKey="accessories" stroke="#a4de6c" strokeWidth={2} name="Accessories" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bale Purchases */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Bales Purchased by Grade</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={balesPurchased}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="premium" stackId="1" fill="#9c27b0" name="Premium" />
                <Area type="monotone" dataKey="grade1" stackId="1" fill="#4caf50" name="Grade 1" />
                <Area type="monotone" dataKey="grade2" stackId="1" fill="#2196f3" name="Grade 2" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Types */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Customer Segments</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={customerTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {customerTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Customer Satisfaction Rating (out of 5)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customerSatisfaction}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[3.5, 5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="satisfaction" stroke="#ff5722" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-purple-800">Your Business at a Glance</h2>
              <p className="text-purple-700 mt-1">Key metrics from your mitumba business</p>
            </div>
            <button 
              onClick={() => setShowWrapped(true)} 
              className="mt-4 md:mt-0 px-6 py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              View Mitumba Wrapped
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-sm font-medium text-purple-700 mb-1">Total Items</h3>
              <p className="text-2xl font-bold text-zinc-800">{totalItemsSold.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-sm font-medium text-purple-700 mb-1">Total Revenue</h3>
              <p className="text-2xl font-bold text-zinc-800">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-sm font-medium text-purple-700 mb-1">Best Month</h3>
              <p className="text-2xl font-bold text-zinc-800">{bestMonth.month}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-sm font-medium text-purple-700 mb-1">Avg. Satisfaction</h3>
              <p className="text-2xl font-bold text-zinc-800">{averageSatisfaction}/5.0</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-sm font-medium text-purple-700 mb-1">Top Category</h3>
              <p className="text-2xl font-bold text-zinc-800 truncate">{bestSellingCategory.name}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MitumbaDashboard;