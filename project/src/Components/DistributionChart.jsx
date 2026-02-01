import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DistributionChart = ({ orders }) => {
  // Generate last 10 months of data from orders
  const generateChartData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const chartData = [];
    
    for (let i = 9; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthName = months[date.getMonth()];
      
      // Filter orders for this month
      const monthOrders = orders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate.getMonth() === date.getMonth() && 
               orderDate.getFullYear() === date.getFullYear();
      });
      
      // Calculate totals for this month
      const totalRevenue = monthOrders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
      
      // Split into categories (you can adjust this logic based on your order types)
      const paidOrders = monthOrders.filter(o => o.paymentStatus === 'paid');
      const deliveredOrders = monthOrders.filter(o => o.deliveryStatus === 'delivered');
      
      chartData.push({
        month: monthName,
        retailSales: Math.round(paidOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0) / 100),
        literacySales: Math.round(deliveredOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0) / 100),
        foodAid: Math.round((totalRevenue - paidOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0)) / 100)
      });
    }
    
    return chartData;
  };

  const data = generateChartData();

  return (
    <div className="distribution-chart-card">
      <div className="chart-header">
        <h5 className="chart-title">Distribution Trends</h5>
        <div className="chart-controls">
          <div className="btn-group btn-group-sm" role="group">
            <button type="button" className="btn btn-outline-secondary">Retail Sales</button>
            <button type="button" className="btn btn-outline-secondary">Literacy Sales</button>
            <button type="button" className="btn btn-outline-secondary active">Monthly</button>
          </div>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#666', fontSize: 12 }}
              axisLine={{ stroke: '#e0e0e0' }}
            />
            <YAxis 
              tick={{ fill: '#666', fontSize: 12 }}
              axisLine={{ stroke: '#e0e0e0' }}
            />
            <Tooltip 
              contentStyle={{ 
                background: '#fff', 
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                fontSize: '12px'
              }}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="circle"
            />
            <Line 
              type="monotone" 
              dataKey="retailSales" 
              stroke="#4CAF50" 
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Retail Sales"
            />
            <Line 
              type="monotone" 
              dataKey="literacySales" 
              stroke="#FF9800" 
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Delivered Orders"
            />
            <Line 
              type="monotone" 
              dataKey="foodAid" 
              stroke="#2196F3" 
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Pending"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DistributionChart;
