import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { Link } from 'react-router-dom';
import { Tractor, ArrowLeft } from 'lucide-react';
import WrappItUp from './full-wrapp-it-up';

// Sample data - would come from API/database in real implementation
const sampleData = {
  dairyCows: {
    milk_yield: [
      { date: '2023-01-01', value: 28.5 },
      { date: '2023-01-02', value: 29.2 },
      { date: '2023-01-03', value: 27.8 },
      { date: '2023-01-04', value: 30.1 },
      { date: '2023-01-05', value: 31.2 },
      { date: '2023-01-06', value: 29.5 },
      { date: '2023-01-07', value: 28.9 },
    ],
    milk_fat: [
      { date: '2023-01-01', value: 3.8 },
      { date: '2023-01-08', value: 3.9 },
      { date: '2023-01-15', value: 4.0 },
      { date: '2023-01-22', value: 3.7 },
    ],
    feed_consumed: [
      { date: '2023-01-01', value: 52 },
      { date: '2023-01-02', value: 51 },
      { date: '2023-01-03', value: 53 },
      { date: '2023-01-04', value: 50 },
      { date: '2023-01-05', value: 52 },
      { date: '2023-01-06', value: 51 },
      { date: '2023-01-07', value: 50 },
    ]
  },
  layingHens: {
    egg_count: [
      { date: '2023-01-01', value: 842 },
      { date: '2023-01-02', value: 856 },
      { date: '2023-01-03', value: 834 },
      { date: '2023-01-04', value: 862 },
      { date: '2023-01-05', value: 851 },
      { date: '2023-01-06', value: 848 },
      { date: '2023-01-07', value: 860 },
    ],
    feed_conversion: [
      { date: '2023-01-01', value: 2.1 },
      { date: '2023-01-08', value: 2.0 },
      { date: '2023-01-15', value: 1.9 },
      { date: '2023-01-22', value: 1.8 },
    ]
  },
  dairyGoats: {
    milk_yield: [
      { date: '2023-01-01', value: 4.2 },
      { date: '2023-01-02', value: 4.5 },
      { date: '2023-01-03', value: 4.3 },
      { date: '2023-01-04', value: 4.7 },
      { date: '2023-01-05', value: 4.6 },
      { date: '2023-01-06', value: 4.4 },
      { date: '2023-01-07', value: 4.5 },
    ]
  },
  sheep: {
    body_condition: [
      { date: '2023-01-01', value: 3.2 },
      { date: '2023-01-08', value: 3.3 },
      { date: '2023-01-15', value: 3.4 },
      { date: '2023-01-22', value: 3.5 },
    ]
  }
};

// Sample Farm Wrapped data
const farmWrappedData = {
  year: 2023,
  farmHighlights: {
    topPerformer: {
      animalType: 'dairyCows',
      metric: 'milk_yield',
      value: '8,245 gallons',
      percentAboveLastYear: 12
    },
    mostConsistent: {
      animalType: 'layingHens',
      metric: 'egg_count',
      valueDescription: '99.2% lay rate consistency'
    },
    efficiency: {
      improvement: '8.4% better feed conversion',
      savings: '$4,320 in feed costs'
    }
  },
  animalHighlights: {
    dairyCows: {
      bestDay: {
        date: '2023-05-15',
        metric: 'milk_yield',
        value: 32.5,
        percentAboveAverage: 18.5
      },
      mostImproved: {
        metric: 'somatic_cell_count',
        improvementPercent: 24.3,
        description: 'Healthier udders, better milk quality'
      },
      totalProduction: {
        total: 8245,
        unit: 'gallons of milk',
        valuePerAnimal: 1824
      }
    },
    layingHens: {
      bestDay: {
        date: '2023-04-12',
        metric: 'egg_count',
        value: 986,
        percentAboveAverage: 15.2
      },
      mostImproved: {
        metric: 'feed_conversion',
        improvementPercent: 12.3,
        description: 'More eggs with less feed'
      },
      totalProduction: {
        total: 28560,
        unit: 'eggs',
        valuePerAnimal: 285.6
      }
    }
  }
};

// Prepare wrapped data for the component
const wrappedData = [
  {
    title: "Your Top Performer",
    content: "Dairy Cows",
    subtitle: `Producing ${farmWrappedData.farmHighlights.topPerformer.value}`,
    gradient: "linear-gradient(45deg, var(--green-600), var(--green-800))",
    list: [
      `${farmWrappedData.farmHighlights.topPerformer.percentAboveLastYear}% increase from last year`,
      `Best day: ${farmWrappedData.animalHighlights.dairyCows.bestDay.date}`,
      `${farmWrappedData.animalHighlights.dairyCows.bestDay.value} gallons on best day`,
      `${farmWrappedData.animalHighlights.dairyCows.bestDay.percentAboveAverage}% above average`,
      `${farmWrappedData.animalHighlights.dairyCows.totalProduction.valuePerAnimal} gallons per cow`
    ]
  },
  {
    title: "Egg Production",
    content: "28,560 eggs",
    subtitle: `That's ${Math.round(28560/365)} eggs every day!`,
    gradient: "linear-gradient(45deg, var(--green-500), var(--green-700))",
    list: [
      `Best day: ${farmWrappedData.animalHighlights.layingHens.bestDay.date}`,
      `${farmWrappedData.animalHighlights.layingHens.bestDay.value} eggs on best day`,
      `${farmWrappedData.animalHighlights.layingHens.bestDay.percentAboveAverage}% above average`,
      `${farmWrappedData.animalHighlights.layingHens.totalProduction.valuePerAnimal} eggs per hen`,
      `${farmWrappedData.farmHighlights.mostConsistent.valueDescription}`
    ]
  },
  {
    title: "Feed Efficiency",
    content: "8.4% better",
    subtitle: `Saving ${farmWrappedData.farmHighlights.efficiency.savings} this year`,
    gradient: "linear-gradient(45deg, var(--green-700), var(--zinc-800))",
    list: [
      `${farmWrappedData.farmHighlights.efficiency.improvement}`,
      `Laying hens improved ${farmWrappedData.animalHighlights.layingHens.mostImproved.improvementPercent}%`,
      `${farmWrappedData.animalHighlights.layingHens.mostImproved.description}`,
      `Dairy cows improved ${farmWrappedData.animalHighlights.dairyCows.mostImproved.improvementPercent}%`,
      `${farmWrappedData.animalHighlights.dairyCows.mostImproved.description}`
    ]
  },
  {
    title: "Total Production",
    content: "8,245 gallons",
    subtitle: "Of milk from your dairy cows",
    gradient: "linear-gradient(45deg, var(--green-600), var(--zinc-700))",
    list: [
      `${farmWrappedData.animalHighlights.dairyCows.totalProduction.total} ${farmWrappedData.animalHighlights.dairyCows.totalProduction.unit}`,
      `${farmWrappedData.animalHighlights.dairyCows.totalProduction.valuePerAnimal} gallons per cow`,
      `${farmWrappedData.animalHighlights.layingHens.totalProduction.total} eggs from your hens`,
      `${farmWrappedData.animalHighlights.layingHens.totalProduction.valuePerAnimal} eggs per hen`,
      `Your dairy goats produced 982 gallons of milk`
    ]
  },
  {
    title: "Your Farm Year",
    content: "Outstanding",
    subtitle: `Here's to an even better ${farmWrappedData.year + 1}!`,
    gradient: "linear-gradient(45deg, var(--green-500), var(--green-800))",
    list: [
      "Overall productivity up 14.2%",
      "Animal health improved across all species",
      "Feed efficiency saved $4,320",
      "Market prices improved 6.8%",
      "New sustainable practices implemented"
    ]
  }
];

// Color palette for different animal types and metrics
const colors = {
  dairyCows: {
    primary: '#4285F4',
    secondary: '#8AB4F8'
  },
  layingHens: {
    primary: '#FBBC05',
    secondary: '#FDE293'
  },
  dairyGoats: {
    primary: '#34A853',
    secondary: '#81C995'
  },
  sheep: {
    primary: '#EA4335',
    secondary: '#F28B82'
  }
};

// Main app component
const FarmMetricsApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedAnimal, setSelectedAnimal] = useState('dairyCows');
  const [selectedMetric, setSelectedMetric] = useState('milk_yield');
  const [timeframe, setTimeframe] = useState('week');
  const [showFarmWrapped, setShowFarmWrapped] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (showFarmWrapped) {
    return <WrappItUp 
      wrappedData={wrappedData} 
      title="Farm Wrapped"
      logoText="Tap & Track"
      logo="Farm"
      color="green"
      returnPath="/farm-metrics"
    />;
  }

  // Simple data entry form
  const DataEntryForm = () => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Recorded ${selectedMetric} = ${value} for ${selectedAnimal}`);
      setValue('');
    };
    
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
        <h3 className="text-lg font-semibold mb-4 text-zinc-800">Record New Data</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700">Animal Type</label>
            <select 
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md"
              value={selectedAnimal}
              onChange={(e) => setSelectedAnimal(e.target.value)}
            >
              <option value="dairyCows">Dairy Cows</option>
              <option value="layingHens">Laying Hens</option>
              <option value="dairyGoats">Dairy Goats</option>
              <option value="sheep">Sheep</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zinc-700">Metric</label>
            <select 
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              {selectedAnimal === 'dairyCows' && (
                <>
                  <option value="milk_yield">Milk Yield (lbs)</option>
                  <option value="milk_fat">Milk Fat (%)</option>
                  <option value="feed_consumed">Feed Consumed (lbs)</option>
                </>
              )}
              {selectedAnimal === 'layingHens' && (
                <>
                  <option value="egg_count">Egg Count</option>
                  <option value="feed_conversion">Feed Conversion</option>
                </>
              )}
              {selectedAnimal === 'dairyGoats' && (
                <>
                  <option value="milk_yield">Milk Yield (lbs)</option>
                </>
              )}
              {selectedAnimal === 'sheep' && (
                <>
                  <option value="body_condition">Body Condition</option>
                </>
              )}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zinc-700">Value</label>
            <input 
              type="number" 
              step="0.1"
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zinc-700">Date</label>
            <input 
              type="date" 
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md"
              defaultValue={new Date().toISOString().substr(0, 10)}
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
          >
            Record Data
          </button>
        </form>
      </div>
    );
  };

  // Dashboard with charts
  const Dashboard = () => {
    // Prep data for charts
    const chartData = sampleData[selectedAnimal][selectedMetric] || [];
    
    // Calculate stats
    const values = chartData.map(item => item.value);
    const average = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
    const max = values.length ? Math.max(...values) : 0;
    const min = values.length ? Math.min(...values) : 0;
    
    return (
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-zinc-800">
              {selectedAnimal === 'dairyCows' ? 'Dairy Cows' : 
               selectedAnimal === 'layingHens' ? 'Laying Hens' :
               selectedAnimal === 'dairyGoats' ? 'Dairy Goats' : 'Sheep'} - {selectedMetric.replace('_', ' ')}
            </h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setTimeframe('week')}
                className={`px-3 py-1 rounded-md text-sm ${timeframe === 'week' ? 'bg-green-100 text-green-800' : 'bg-zinc-100 text-zinc-800'}`}
              >
                Week
              </button>
              <button 
                onClick={() => setTimeframe('month')}
                className={`px-3 py-1 rounded-md text-sm ${timeframe === 'month' ? 'bg-green-100 text-green-800' : 'bg-zinc-100 text-zinc-800'}`}
              >
                Month
              </button>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={formatDate}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`${value}`, selectedMetric.replace('_', ' ')]}
                  labelFormatter={formatDate}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  name={selectedMetric.replace('_', ' ')}
                  stroke={colors[selectedAnimal].primary} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-sm text-zinc-500">Average</p>
              <p className="text-xl font-semibold text-zinc-800">{average.toFixed(1)}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-sm text-zinc-500">Maximum</p>
              <p className="text-xl font-semibold text-zinc-800">{max.toFixed(1)}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-sm text-zinc-500">Minimum</p>
              <p className="text-xl font-semibold text-zinc-800">{min.toFixed(1)}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DataEntryForm />
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200">
            <h3 className="text-lg font-semibold mb-4 text-zinc-800">Recent Activity</h3>
            <div className="space-y-3">
              {chartData.slice(0, 5).map((entry, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-zinc-600">{formatDate(entry.date)}</span>
                  <span className="font-medium">{entry.value} {selectedMetric === 'milk_yield' ? 'lbs' : 
                                                             selectedMetric === 'milk_fat' ? '%' : 
                                                             selectedMetric === 'egg_count' ? 'eggs' : ''}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setShowFarmWrapped(true)}
              className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
            >
              View Farm Wrapped 2023
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-zinc-600" />
            </Link>
            <div className="flex items-center gap-2 font-bold text-lg">
              <Tractor className="h-6 w-6 text-green-600" />
              <span className="tracking-tight text-zinc-800">Farm Metrics</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-md text-sm ${activeTab === 'dashboard' ? 'bg-green-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 rounded-md text-sm ${activeTab === 'reports' ? 'bg-green-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Reports
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-md text-sm ${activeTab === 'settings' ? 'bg-green-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
            >
              Settings
            </button>
            <button 
              onClick={() => setShowFarmWrapped(true)}
              className="px-4 py-2 rounded-md text-sm bg-green-700 text-white hover:bg-green-800 transition-colors ml-2"
            >
              Farm Wrapped
            </button>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedAnimal('dairyCows')}
            className={`px-4 py-2 rounded-full text-sm ${selectedAnimal === 'dairyCows' ? 'bg-blue-100 text-blue-800 border-2 border-blue-500' : 'bg-white border border-zinc-200'}`}
          >
            Dairy Cows
          </button>
          <button 
            onClick={() => setSelectedAnimal('layingHens')}
            className={`px-4 py-2 rounded-full text-sm ${selectedAnimal === 'layingHens' ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-500' : 'bg-white border border-zinc-200'}`}
          >
            Laying Hens
          </button>
          <button 
            onClick={() => setSelectedAnimal('dairyGoats')}
            className={`px-4 py-2 rounded-full text-sm ${selectedAnimal === 'dairyGoats' ? 'bg-green-100 text-green-800 border-2 border-green-500' : 'bg-white border border-zinc-200'}`}
          >
            Dairy Goats
          </button>
          <button 
            onClick={() => setSelectedAnimal('sheep')}
            className={`px-4 py-2 rounded-full text-sm ${selectedAnimal === 'sheep' ? 'bg-red-100 text-red-800 border-2 border-red-500' : 'bg-white border border-zinc-200'}`}
          >
            Sheep
          </button>
        </div>
        
        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'reports' && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h2 className="text-xl font-semibold mb-4 text-zinc-800">Reports</h2>
              <p className="text-zinc-600">Reports functionality would be implemented here.</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <h2 className="text-xl font-semibold mb-4 text-zinc-800">Settings</h2>
              <p className="text-zinc-600">Settings functionality would be implemented here.</p>
            </div>
          )}
        </main>

        <div className="lg:hidden mt-6 flex justify-center gap-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1 rounded-md text-sm ${activeTab === 'dashboard' ? 'bg-green-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('reports')}
            className={`px-3 py-1 rounded-md text-sm ${activeTab === 'reports' ? 'bg-green-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
          >
            Reports
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-1 rounded-md text-sm ${activeTab === 'settings' ? 'bg-green-600 text-white' : 'bg-zinc-200 text-zinc-700'}`}
          >
            Settings
          </button>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-green-800">Your Farm at a Glance</h2>
              <p className="text-green-700 mt-1">Key metrics from your farm operations</p>
            </div>
            <button 
              onClick={() => setShowFarmWrapped(true)} 
              className="mt-4 md:mt-0 px-6 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              View Farm Wrapped
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmMetricsApp;