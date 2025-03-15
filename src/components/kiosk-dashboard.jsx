import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { Store, ArrowLeft } from 'lucide-react';
import WrappItUp from './full-wrapp-it-up';

const KioskDashboard = () => {
  const [timeframe, setTimeframe] = useState('monthly');
  const [showWrapped, setShowWrapped] = useState(false);
  
  // Sample data - in a real app this would come from your database
  const weeklyData = [
    { name: 'Mon', sales: 4000, visitors: 2400 },
    { name: 'Tue', sales: 3000, visitors: 1398 },
    { name: 'Wed', sales: 2000, visitors: 9800 },
    { name: 'Thu', sales: 2780, visitors: 3908 },
    { name: 'Fri', sales: 5890, visitors: 4800 },
    { name: 'Sat', sales: 2390, visitors: 3800 },
    { name: 'Sun', sales: 1490, visitors: 1300 },
  ];

  const monthlyData = [
    { name: 'Jan', revenue: 24000, expenses: 18000, profit: 6000 },
    { name: 'Feb', revenue: 26000, expenses: 19500, profit: 6500 },
    { name: 'Mar', revenue: 27000, expenses: 20000, profit: 7000 },
    { name: 'Apr', revenue: 29000, expenses: 21000, profit: 8000 },
    { name: 'May', revenue: 31000, expenses: 21500, profit: 9500 },
    { name: 'Jun', revenue: 34000, expenses: 22000, profit: 12000 },
    { name: 'Jul', revenue: 32000, expenses: 21000, profit: 11000 },
    { name: 'Aug', revenue: 30000, expenses: 20500, profit: 9500 },
    { name: 'Sep', revenue: 33000, expenses: 22000, profit: 11000 },
    { name: 'Oct', revenue: 35000, expenses: 23000, profit: 12000 },
    { name: 'Nov', revenue: 37000, expenses: 24000, profit: 13000 },
    { name: 'Dec', revenue: 40000, expenses: 25000, profit: 15000 }
  ];

  const annualData = [
    { name: '2020', growth: 4, satisfaction: 75 },
    { name: '2021', growth: -2, satisfaction: 68 },
    { name: '2022', growth: 7, satisfaction: 82 },
    { name: '2023', growth: 12, satisfaction: 88 },
    { name: '2024', growth: 15, satisfaction: 92 },
  ];

  const customerData = [
    { name: 'New', value: 400 },
    { name: 'Returning', value: 300 },
    { name: 'Loyal', value: 300 },
  ];

  const productCategories = [
    { name: 'Food & Beverage', value: 45 },
    { name: 'Household Items', value: 25 },
    { name: 'Personal Care', value: 15 },
    { name: 'Stationery', value: 10 },
    { name: 'Miscellaneous', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const totalSales = weeklyData.reduce((sum, item) => sum + item.sales, 0);
  const totalVisitors = weeklyData.reduce((sum, item) => sum + item.visitors, 0);
  const bestDay = weeklyData.reduce((best, item) => 
    item.sales > best.sales ? item : best, weeklyData[0]);
  
  const totalRevenue = monthlyData.reduce((sum, item) => sum + item.revenue, 0);
  const totalProfit = monthlyData.reduce((sum, item) => sum + item.profit, 0);
  const bestMonth = monthlyData.reduce((best, item) => 
    item.profit > best.profit ? item : best, monthlyData[0]);
  
  const averageGrowth = annualData.reduce((sum, item) => sum + item.growth, 0) / annualData.length;
  const averageSatisfaction = annualData.reduce((sum, item) => sum + item.satisfaction, 0) / annualData.length;

  // Prepare data for the WrappItUp component
  const wrappedData = [
    {
      title: "Total Annual Revenue",
      content: `$${(totalRevenue).toLocaleString()}`,
      subtitle: `That's a ${annualData[annualData.length-1].growth}% increase from last year`,
      gradient: "linear-gradient(45deg, var(--blue-600), var(--blue-800))",
      list: [
        `Best month: ${bestMonth.name} ($${bestMonth.revenue.toLocaleString()})`,
        `Profit margin: ${Math.round((totalProfit/totalRevenue)*100)}%`,
        `Average monthly revenue: $${Math.round(totalRevenue/monthlyData.length).toLocaleString()}`,
        `Highest daily revenue: $${Math.max(...weeklyData.map(day => day.sales)).toLocaleString()}`,
        `Annual expenses: $${monthlyData.reduce((sum, month) => sum + month.expenses, 0).toLocaleString()}`
      ]
    },
    {
      title: "Customer Insights",
      content: `${totalVisitors.toLocaleString()}`,
      subtitle: "Total customer visits this period",
      gradient: "linear-gradient(45deg, var(--blue-500), var(--blue-700))",
      list: [
        `New customers: ${customerData[0].value} (${Math.round((customerData[0].value / (customerData[0].value + customerData[1].value + customerData[2].value)) * 100)}%)`,
        `Returning customers: ${customerData[1].value} (${Math.round((customerData[1].value / (customerData[0].value + customerData[1].value + customerData[2].value)) * 100)}%)`,
        `Loyal customers: ${customerData[2].value} (${Math.round((customerData[2].value / (customerData[0].value + customerData[1].value + customerData[2].value)) * 100)}%)`,
        `Average satisfaction: ${Math.round(averageSatisfaction)}%`,
        `Busiest day: ${bestDay.name} with ${bestDay.visitors} visitors`
      ]
    },
    {
      title: "Product Performance",
      content: productCategories[0].name,
      subtitle: `Top category at ${productCategories[0].value}% of sales`,
      gradient: "linear-gradient(45deg, var(--blue-700), var(--zinc-800))",
      list: productCategories.map(category => `${category.name}: ${category.value}% of sales`)
    },
    {
      title: "Growth Trends",
      content: `${annualData[annualData.length-1].growth}%`,
      subtitle: "Annual growth rate",
      gradient: "linear-gradient(45deg, var(--blue-600), var(--zinc-700))",
      list: [
        `5-year average growth: ${averageGrowth.toFixed(1)}%`,
        `Best year: ${annualData.reduce((best, year) => year.growth > best.growth ? year : best, annualData[0]).name} (${annualData.reduce((best, year) => year.growth > best.growth ? year : best, annualData[0]).growth}%)`,
        `Customer satisfaction trend: ${annualData[annualData.length-1].satisfaction > averageSatisfaction ? "Improving" : "Declining"}`,
        `Current satisfaction: ${annualData[annualData.length-1].satisfaction}%`,
        `Growth forecast for 2025: ${Math.round(annualData[annualData.length-1].growth * 1.1)}%`
      ]
    },
    {
      title: "Business Health",
      content: "Strong",
      subtitle: "Your kiosk is outperforming 82% of similar businesses",
      gradient: "linear-gradient(45deg, var(--blue-500), var(--blue-800))",
      list: [
        `Profit margin: ${Math.round((totalProfit/totalRevenue)*100)}%`,
        `Customer retention: ${Math.round((customerData[1].value + customerData[2].value) / (customerData[0].value + customerData[1].value + customerData[2].value) * 100)}%`,
        `Year-over-year growth: ${annualData[annualData.length-1].growth}%`,
        `Expense ratio: ${Math.round(monthlyData.reduce((sum, month) => sum + month.expenses, 0) / totalRevenue * 100)}%`,
        `Overall business score: 8.4/10`
      ]
    }
  ];

  const calculateHighlights = () => {
    if (timeframe === 'weekly') {
      return {
        title: "This Week's Wrap",
        stats: [
          { label: "Total Sales", value: `$${totalSales.toLocaleString()}` },
          { label: "Total Visitors", value: totalVisitors.toLocaleString() },
          { label: "Best Sales Day", value: bestDay.name },
          { label: "Sales per Visitor", value: `$${(totalSales/totalVisitors).toFixed(2)}` }
        ]
      };
    } else if (timeframe === 'monthly') {
      return {
        title: "Monthly Business Wrapped",
        stats: [
          { label: "Total Revenue", value: `$${totalRevenue.toLocaleString()}` },
          { label: "Total Profit", value: `$${totalProfit.toLocaleString()}` },
          { label: "Profit Margin", value: `${((totalProfit/totalRevenue)*100).toFixed(1)}%` },
          { label: "Best Month", value: bestMonth.name }
        ]
      };
    } else {
      return {
        title: "Your Annual Business Wrapped",
        stats: [
          { label: "Years Tracked", value: annualData.length },
          { label: "Avg. Annual Growth", value: `${averageGrowth.toFixed(1)}%` },
          { label: "Avg. Satisfaction", value: `${averageSatisfaction.toFixed(1)}%` },
          { label: "Growth Trend", value: annualData[annualData.length-1].growth > averageGrowth ? "⬆️ Up" : "⬇️ Down" }
        ]
      };
    }
  };

  const highlights = calculateHighlights();

  if (showWrapped) {
    return <WrappItUp 
      wrappedData={wrappedData} 
      title="Kiosk Wrapped"
      logoText="Tap & Track"
      logo="Store"
      color="blue"
      returnPath="/kiosk-dashboard"
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
              <Store className="h-6 w-6 text-blue-600" />
              <span className="tracking-tight text-zinc-800">Kiosk Dashboard</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setTimeframe('weekly')}
              className={`px-4 py-2 rounded-md text-sm ${timeframe === 'weekly' ? 'bg-blue-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Weekly
            </button>
            <button 
              onClick={() => setTimeframe('monthly')}
              className={`px-4 py-2 rounded-md text-sm ${timeframe === 'monthly' ? 'bg-blue-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setTimeframe('annual')}
              className={`px-4 py-2 rounded-md text-sm ${timeframe === 'annual' ? 'bg-blue-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Annual
            </button>
            <button 
              onClick={() => setShowWrapped(true)} 
              className="px-4 py-2 rounded-md text-sm bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            >
              Business Wrapped
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Main chart based on timeframe */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">
              {timeframe === 'weekly' ? 'Weekly Performance' : 
              timeframe === 'monthly' ? 'Monthly Revenue & Profit' : 'Annual Growth & Satisfaction'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {timeframe === 'weekly' ? (
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#3b82f6" name="Sales ($)" />
                  <Bar dataKey="visitors" fill="#22c55e" name="Visitors" />
                </BarChart>
              ) : timeframe === 'monthly' ? (
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Revenue ($)" />
                  <Area type="monotone" dataKey="profit" stackId="2" stroke="#22c55e" fill="#22c55e" name="Profit ($)" />
                </AreaChart>
              ) : (
                <LineChart data={annualData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="growth" stroke="#3b82f6" strokeWidth={2} name="Growth (%)" />
                  <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#22c55e" strokeWidth={2} name="Satisfaction (%)" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
          
          {/* Customer Segments */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800">Customer Segments</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={customerData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {customerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Products Categories */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-zinc-800">Product Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={productCategories}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value) => [`${value}%`, 'Sales Share']}/>
              <Bar dataKey="value" fill="#3b82f6" name="Percentage" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Highlights Section - Spotify Wrapped style */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl shadow-sm border border-blue-200 mb-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {highlights.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 text-center transform transition-transform hover:scale-105">
                <h3 className="text-sm text-blue-500">{stat.label}</h3>
                <p className="text-2xl font-bold text-zinc-800">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tips Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
          <h2 className="text-lg font-semibold mb-3 text-zinc-800">Tips Based on Your Data</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Insight</span>
              <span className="text-zinc-600">
                {timeframe === 'weekly' 
                  ? 'Wednesday shows high visitor count but lower sales. Consider special promotions.'
                  : timeframe === 'monthly'
                  ? 'Your profit margin has increased every month. Keep optimizing your cost structure.'
                  : 'Customer satisfaction correlates with your business growth. Focus on maintaining high quality.'}
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Action</span>
              <span className="text-zinc-600">
                {timeframe === 'weekly' 
                  ? 'Weekend traffic is dropping. Consider extending Friday promotions to attract weekend customers.'
                  : timeframe === 'monthly'
                  ? `${bestMonth.name} showed exceptional growth. Analyze what worked well and apply it to other months.`
                  : 'Your 2021 dip coincided with lower satisfaction scores. Prioritize customer experience during challenging times.'}
              </span>
            </li>
          </ul>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => setShowWrapped(true)} 
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              View Business Wrapped
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KioskDashboard;