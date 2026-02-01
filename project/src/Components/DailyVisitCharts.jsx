import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const DailyVisitsChart = ({ products, orders }) => {
  // Calculate product sales
  const productSales = products.map(product => {
    const productOrders = orders.filter(order => 
      order.items?.some(item => item.productId === product._id || item.product === product._id)
    );
    
    const totalSold = productOrders.reduce((sum, order) => {
      const item = order.items.find(i => i.productId === product._id || i.product === product._id);
      return sum + (item?.quantity || 0);
    }, 0);
    
    return {
      name: product.name,
      value: totalSold
    };
  });
  
  // Get top 4 products
  const topProducts = productSales
    .sort((a, b) => b.value - a.value)
    .slice(0, 4)
    .map((product, index) => ({
      ...product,
      color: ['#4CAF50', '#2196F3', '#FF9800', '#F44336'][index]
    }));
  
  const totalVisits = topProducts.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate percentages
  const data = topProducts.map(item => ({
    ...item,
    percentage: ((item.value / totalVisits) * 100).toFixed(1)
  }));
  
  // Calculate remaining for circle completion
  const totalPercentage = data.reduce((sum, item) => sum + parseFloat(item.percentage), 0);
  const remaining = 100 - totalPercentage;

  // Generate weekly bar data from recent orders (last 7 days)
  const generateWeeklyData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date();
    const weekData = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dayName = days[date.getDay() === 0 ? 6 : date.getDay() - 1]; // Adjust for Sunday
      
      const dayOrders = orders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate.toDateString() === date.toDateString();
      });
      
      weekData.push({
        day: dayName,
        value: dayOrders.length
      });
    }
    
    return weekData;
  };

  const barData = generateWeeklyData();
  const maxBarValue = Math.max(...barData.map(d => d.value), 1);

  return (
    <div className="daily-visits-card">
      <div className="chart-header">
        <h5 className="chart-title">Daily Visit Insights</h5>
        <div className="dropdown">
          <button className="btn btn-sm btn-link text-muted" type="button">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      <div className="chart-body">
        {/* Bar Chart */}
        <div className="bar-chart-container mb-4">
          <div className="d-flex align-items-end justify-content-around" style={{ height: '120px' }}>
            {barData.map((item, index) => (
              <div key={index} className="bar-item">
                <div 
                  className="bar"
                  style={{ 
                    height: `${(item.value / maxBarValue) * 100}%`,
                    backgroundColor: item.value > (maxBarValue * 0.7) ? '#4CAF50' : '#e0e0e0'
                  }}
                ></div>
                <span className="bar-label">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Circular Progress */}
        <div className="text-center mb-3">
          <span className="badge badge-light">2025</span>
        </div>

        <div className="position-relative" style={{ height: '200px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[...data, { name: 'remaining', value: remaining, color: '#f5f5f5' }]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {[...data, { name: 'remaining', value: remaining, color: '#f5f5f5' }].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-center-text">
            <div className="center-value">{totalVisits.toLocaleString()}</div>
            <div className="center-label">Best Selling Products</div>
          </div>
        </div>

        {/* Legend */}
        <div className="chart-legend mt-3">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: item.color }}></span>
              <span className="legend-text">{item.name}</span>
              <span className="legend-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyVisitsChart;
