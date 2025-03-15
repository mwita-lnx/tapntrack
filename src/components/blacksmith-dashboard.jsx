import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { Activity, Hammer, ArrowLeft } from 'lucide-react';
import WrappItUp from './full-wrapp-it-up';

// Sample data for a blacksmith business
const monthlyProduction = [
  { month: 'Jan', knives: 12, swords: 3, tools: 28, decorative: 8, repairs: 15 },
  { month: 'Feb', knives: 15, swords: 2, tools: 26, decorative: 10, repairs: 14 },
  { month: 'Mar', knives: 18, swords: 4, tools: 30, decorative: 7, repairs: 18 },
  { month: 'Apr', knives: 22, swords: 5, tools: 35, decorative: 9, repairs: 20 },
  { month: 'May', knives: 28, swords: 6, tools: 42, decorative: 12, repairs: 22 },
  { month: 'Jun', knives: 32, swords: 8, tools: 38, decorative: 15, repairs: 24 },
  { month: 'Jul', knives: 35, swords: 7, tools: 45, decorative: 20, repairs: 28 },
  { month: 'Aug', knives: 30, swords: 5, tools: 40, decorative: 18, repairs: 25 },
  { month: 'Sep', knives: 25, swords: 4, tools: 36, decorative: 15, repairs: 20 },
  { month: 'Oct', knives: 20, swords: 6, tools: 42, decorative: 12, repairs: 18 },
  { month: 'Nov', knives: 24, swords: 8, tools: 36, decorative: 10, repairs: 16 },
  { month: 'Dec', knives: 28, swords: 10, tools: 30, decorative: 14, repairs: 12 }
];

const monthlyRevenue = [
  { month: 'Jan', revenue: 3800, costs: 1500, target: 3500 },
  { month: 'Feb', revenue: 4100, costs: 1600, target: 4000 },
  { month: 'Mar', revenue: 4500, costs: 1800, target: 4200 },
  { month: 'Apr', revenue: 5200, costs: 2000, target: 4500 },
  { month: 'May', revenue: 6100, costs: 2400, target: 5000 },
  { month: 'Jun', revenue: 6800, costs: 2500, target: 5500 },
  { month: 'Jul', revenue: 7200, costs: 2700, target: 6000 },
  { month: 'Aug', revenue: 6500, costs: 2500, target: 6000 },
  { month: 'Sep', revenue: 5800, costs: 2300, target: 5500 },
  { month: 'Oct', revenue: 5200, costs: 2100, target: 5000 },
  { month: 'Nov', revenue: 5500, costs: 2200, target: 5000 },
  { month: 'Dec', revenue: 6200, costs: 2400, target: 5500 }
];

const materialUsage = [
  { month: 'Jan', steel: 120, coal: 200, iron: 80, copper: 15, other: 25 },
  { month: 'Feb', steel: 135, coal: 190, iron: 75, copper: 20, other: 30 },
  { month: 'Mar', steel: 150, coal: 210, iron: 90, copper: 25, other: 35 },
  { month: 'Apr', steel: 180, coal: 230, iron: 100, copper: 30, other: 40 },
  { month: 'May', steel: 200, coal: 250, iron: 120, copper: 35, other: 45 },
  { month: 'Jun', steel: 220, coal: 270, iron: 130, copper: 40, other: 50 },
  { month: 'Jul', steel: 240, coal: 290, iron: 140, copper: 45, other: 55 },
  { month: 'Aug', steel: 220, coal: 270, iron: 130, copper: 40, other: 50 },
  { month: 'Sep', steel: 200, coal: 250, iron: 110, copper: 35, other: 45 },
  { month: 'Oct', steel: 180, coal: 230, iron: 100, copper: 30, other: 40 },
  { month: 'Nov', steel: 160, coal: 220, iron: 90, copper: 25, other: 35 },
  { month: 'Dec', steel: 190, coal: 240, iron: 110, copper: 30, other: 40 }
];

const customerTypes = [
  { name: 'Collectors', value: 30 },
  { name: 'Homeowners', value: 25 },
  { name: 'Chefs/Culinary', value: 20 },
  { name: 'Historical Reenactors', value: 15 },
  { name: 'Tradespersons', value: 10 }
];

const customerSatisfaction = [
  { month: 'Jan', satisfaction: 4.5 },
  { month: 'Feb', satisfaction: 4.6 },
  { month: 'Mar', satisfaction: 4.7 },
  { month: 'Apr', satisfaction: 4.8 },
  { month: 'May', satisfaction: 4.7 },
  { month: 'Jun', satisfaction: 4.9 },
  { month: 'Jul', satisfaction: 5.0 },
  { month: 'Aug', satisfaction: 4.9 },
  { month: 'Sep', satisfaction: 4.8 },
  { month: 'Oct', satisfaction: 4.7 },
  { month: 'Nov', satisfaction: 4.8 },
  { month: 'Dec', satisfaction: 4.9 }
];

const commissionTimes = [
  { month: 'Jan', averageDays: 14 },
  { month: 'Feb', averageDays: 13 },
  { month: 'Mar', averageDays: 15 },
  { month: 'Apr', averageDays: 12 },
  { month: 'May', averageDays: 14 },
  { month: 'Jun', averageDays: 16 },
  { month: 'Jul', averageDays: 18 },
  { month: 'Aug', averageDays: 15 },
  { month: 'Sep', averageDays: 13 },
  { month: 'Oct', averageDays: 12 },
  { month: 'Nov', averageDays: 14 },
  { month: 'Dec', averageDays: 15 }
];

// Item categories and their production counts
const itemCategoryData = [
  { name: 'Kitchen Knives', value: 289 },
  { name: 'Swords', value: 68 },
  { name: 'Garden/Farm Tools', value: 428 },
  { name: 'Decorative Items', value: 150 },
  { name: 'Repairs/Restorations', value: 232 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

// Calculate annual totals for Wrapped view
const totalItems = monthlyProduction.reduce((sum, month) => 
  sum + month.knives + month.swords + month.tools + month.decorative + month.repairs, 0);

const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
const totalCosts = monthlyRevenue.reduce((sum, month) => sum + month.costs, 0);
const totalProfit = totalRevenue - totalCosts;

const totalSteel = materialUsage.reduce((sum, month) => sum + month.steel, 0);
const totalCoal = materialUsage.reduce((sum, month) => sum + month.coal, 0);

const averageSatisfaction = (customerSatisfaction.reduce((sum, month) => 
  sum + month.satisfaction, 0) / customerSatisfaction.length).toFixed(1);

const averageCommissionTime = Math.round(commissionTimes.reduce((sum, month) => 
  sum + month.averageDays, 0) / commissionTimes.length);

const bestMonth = monthlyRevenue.reduce((best, month) => 
  month.revenue > best.revenue ? month : best, monthlyRevenue[0]);

const mostProductiveMonth = monthlyProduction.reduce((most, month) => {
  const totalItems = month.knives + month.swords + month.tools + month.decorative + month.repairs;
  const mostItems = most.knives + most.swords + most.tools + most.decorative + most.repairs;
  return totalItems > mostItems ? month : most;
}, monthlyProduction[0]);

const mostPopularCategory = itemCategoryData.reduce((highest, category) => 
  category.value > highest.value ? category : highest, itemCategoryData[0]);

// Create data for wrapped component
const wrappedData = [
  {
    title: "Total Items Forged",
    content: totalItems.toString(),
    subtitle: `That's ${Math.round(totalItems / 52)} creations per week!`,
    gradient: "linear-gradient(45deg, var(--amber-600), var(--amber-800))",
    list: [
      `Kitchen Knives: ${itemCategoryData[0].value}`,
      `Garden/Farm Tools: ${itemCategoryData[2].value}`,
      `Repairs/Restorations: ${itemCategoryData[4].value}`,
      `Decorative Items: ${itemCategoryData[3].value}`,
      `Swords: ${itemCategoryData[1].value}`
    ]
  },
  {
    title: "Total Revenue",
    content: `$${totalRevenue.toLocaleString()}`,
    subtitle: `With $${totalProfit.toLocaleString()} profit`,
    gradient: "linear-gradient(45deg, var(--amber-500), var(--amber-700))",
    list: [
      `Best Month: ${bestMonth.month} ($${bestMonth.revenue.toLocaleString()})`,
      `Average Monthly Revenue: $${Math.round(totalRevenue/12).toLocaleString()}`,
      `Total Costs: $${totalCosts.toLocaleString()}`,
      `Profit Margin: ${Math.round((totalProfit/totalRevenue)*100)}%`,
      `Average Sale Value: $${Math.round(totalRevenue/totalItems)}`
    ]
  },
  {
    title: "Materials Used",
    content: `${totalSteel}kg steel`,
    subtitle: `And ${totalCoal}kg of coal to heat your forge`,
    gradient: "linear-gradient(45deg, var(--zinc-700), var(--amber-700))",
    list: [
      `Steel Used: ${totalSteel}kg`,
      `Coal Burned: ${totalCoal}kg`,
      `Iron Used: ${materialUsage.reduce((sum, month) => sum + month.iron, 0)}kg`,
      `Copper Used: ${materialUsage.reduce((sum, month) => sum + month.copper, 0)}kg`,
      `Other Materials: ${materialUsage.reduce((sum, month) => sum + month.other, 0)}kg`
    ]
  },
  {
    title: "Most Popular Creation",
    content: mostPopularCategory.name,
    subtitle: `You made ${mostPopularCategory.value} of these!`,
    gradient: "linear-gradient(45deg, var(--amber-600), var(--zinc-900))",
    list: [
      `${itemCategoryData[0].name}: ${itemCategoryData[0].value} items`,
      `${itemCategoryData[2].name}: ${itemCategoryData[2].value} items`,
      `${itemCategoryData[4].name}: ${itemCategoryData[4].value} items`,
      `${itemCategoryData[3].name}: ${itemCategoryData[3].value} items`,
      `${itemCategoryData[1].name}: ${itemCategoryData[1].value} items`
    ]
  },
  {
    title: "Customer Satisfaction",
    content: `${averageSatisfaction}/5.0`,
    subtitle: "Your customers value your craftsmanship!",
    gradient: "linear-gradient(45deg, var(--amber-500), var(--amber-800))",
    list: [
      `Average Rating: ${averageSatisfaction}/5.0`,
      `Highest Month: ${customerSatisfaction.reduce((highest, month) => month.satisfaction > highest.satisfaction ? month : highest, customerSatisfaction[0]).month} (${customerSatisfaction.reduce((highest, month) => month.satisfaction > highest.satisfaction ? month : highest, customerSatisfaction[0]).satisfaction}/5.0)`,
      `Average Commission Time: ${averageCommissionTime} days`,
      `Top Customer Type: ${customerTypes[0].name} (${customerTypes[0].value}%)`,
      `Second Customer Type: ${customerTypes[1].name} (${customerTypes[1].value}%)`
    ]
  }
];

const BlacksmithDashboard = () => {
  const [view, setView] = useState('monthly');
  const [showWrapped, setShowWrapped] = useState(false);

  if (showWrapped) {
    return <WrappItUp 
      wrappedData={wrappedData} 
      title="Forge Wrapped"
      logoText="Tap & Track"
      logo="Hammer"
      color="amber"
      returnPath="/blacksmith-dashboard"
    />;
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <ArrowLeft className="h-5 w-5 text-zinc-600" />
            </Link>
            <div className="flex items-center gap-2 font-bold text-lg">
              <Hammer className="h-6 w-6 text-amber-600" />
              <span className="tracking-tight text-zinc-800">Blacksmith Dashboard</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setView('monthly')} 
              className={`px-4 py-2 rounded-md text-sm ${view === 'monthly' ? 'bg-amber-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setView('quarterly')} 
              className={`px-4 py-2 rounded-md text-sm ${view === 'quarterly' ? 'bg-amber-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Quarterly
            </button>
            <button 
              onClick={() => setShowWrapped(true)} 
              className="px-4 py-2 rounded-md text-sm bg-amber-700 text-white hover:bg-amber-800 transition-colors"
            >
              Forge Wrapped
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Items Produced Chart */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Items Produced</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyProduction}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="knives" fill="#8884d8" name="Knives" />
                <Bar dataKey="swords" fill="#ff8042" name="Swords" />
                <Bar dataKey="tools" fill="#82ca9d" name="Tools" />
                <Bar dataKey="decorative" fill="#a4de6c" name="Decorative" />
                <Bar dataKey="repairs" fill="#ffc658" name="Repairs" />
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
                <Line type="monotone" dataKey="revenue" stroke="#d97706" strokeWidth={2} name="Revenue" />
                <Line type="monotone" dataKey="costs" stroke="#ef4444" strokeWidth={2} name="Costs" />
                <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Material Usage */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Material Usage (kg)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={materialUsage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="steel" stackId="1" fill="#78716c" name="Steel" />
                <Area type="monotone" dataKey="coal" stackId="1" fill="#1e293b" name="Coal" />
                <Area type="monotone" dataKey="iron" stackId="1" fill="#94a3b8" name="Iron" />
                <Area type="monotone" dataKey="copper" stackId="1" fill="#b45309" name="Copper" />
                <Area type="monotone" dataKey="other" stackId="1" fill="#d1d5db" name="Other" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Types */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Customer Types</h2>
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
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Customer Satisfaction (out of 5)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customerSatisfaction}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[3.5, 5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="satisfaction" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Commission Time */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Average Commission Time (days)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={commissionTimes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 20]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="averageDays" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-amber-800">Your Business at a Glance</h2>
              <p className="text-amber-700 mt-1">Key metrics from your blacksmith business</p>
            </div>
            <button 
              onClick={() => setShowWrapped(true)} 
              className="mt-4 md:mt-0 px-6 py-3 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors flex items-center gap-2"
            >
              View Forge Wrapped
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
              <h3 className="text-sm font-medium text-amber-700 mb-1">Total Items</h3>
              <p className="text-2xl font-bold text-zinc-800">{totalItems}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
              <h3 className="text-sm font-medium text-amber-700 mb-1">Total Revenue</h3>
              <p className="text-2xl font-bold text-zinc-800">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
              <h3 className="text-sm font-medium text-amber-700 mb-1">Best Month</h3>
              <p className="text-2xl font-bold text-zinc-800">{bestMonth.month}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
              <h3 className="text-sm font-medium text-amber-700 mb-1">Avg. Satisfaction</h3>
              <p className="text-2xl font-bold text-zinc-800">{averageSatisfaction}/5.0</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
              <h3 className="text-sm font-medium text-amber-700 mb-1">Top Product</h3>
              <p className="text-2xl font-bold text-zinc-800 truncate">{mostPopularCategory.name}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlacksmithDashboard;