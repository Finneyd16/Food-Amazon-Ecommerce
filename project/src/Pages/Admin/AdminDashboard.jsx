import React, { useState, useEffect } from 'react';
import { useAuth } from "../../context/AuthContext";
import Sidebar from '../../Components/Sidebar.jsx';
import MetricCard from '../../Components/MetricCard.jsx';
import DistributionChart from '../../Components/DistributionChart.jsx';
import DailyVisitsChart from '../../Components/DailyVisitCharts.jsx';
import BestSellingProducts from '../../Components/BestSellingProducts.jsx';
import NewCustomersList from '../../Components/NewCustomersList.jsx';
import OrderList from '../../Components/OrderList.jsx';


const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

const fetchDashboardData = async () => {
  try {
    setLoading(true);
    
    const token = user?.token;
    
    if (!token) {
      console.error('No token found');
      window.location.href = '/login';
      return;
    }
    
    const fetchOptions = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    };
    
    const [overviewRes, ordersRes, productsRes, customersRes] = await Promise.all([
      fetch('http://localhost:3001/api/fooddocuments/dashboard/overview', fetchOptions),
      fetch('http://localhost:3001/api/fooddocuments/dashboard/recent-orders?limit=50', fetchOptions),
      fetch('http://localhost:3001/api/fooddocuments/dashboard/products', fetchOptions), // CHANGED: Use /products instead of /top-products
      fetch('http://localhost:3001/api/fooddocuments/dashboard/customers', fetchOptions)
    ]);

    // Check for auth errors
    if (overviewRes.status === 400 || overviewRes.status === 401) {
      console.error('Token expired or invalid');
      logout();
      window.location.href = '/login';
      return;
    }

    const overviewData = await overviewRes.json();
    const ordersData = await ordersRes.json();
    const productsData = await productsRes.json();
    const customersData = await customersRes.json();

    setStats({
      totalOrders: overviewData.totalOrders,
      totalProducts: overviewData.totalProducts,
      totalCustomers: overviewData.totalCustomers,
      totalRevenue: overviewData.totalRevenue,
    });

    setOrders(ordersData);
    setProducts(productsData);
    setCustomers(customersData);
    
    setLoading(false);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    setLoading(false);
  }
};

  // Transform real data into the format needed for MetricCards
  const metrics = [
    {
      title: 'Total Distribution (Yearly)',
      value: `$${stats.totalRevenue.toFixed(2)}`,
      change: '+4.2%',
      isPositive: true,
      subtitle: `Total from ${stats.totalOrders} orders`
    },
    {
      title: 'Total Distribution (Daily)',
      value: `$${(stats.totalRevenue / 365).toFixed(2)}`,
      change: '+0.5%',
      isPositive: true,
      subtitle: 'Average daily revenue'
    },
    {
      title: 'Total Distribution (Weekly)',
      value: `$${(stats.totalRevenue / 52).toFixed(2)}`,
      change: '-2.3%',
      isPositive: false,
      subtitle: 'Average weekly revenue'
    },
    {
      title: 'Total Distribution (Monthly)',
      value: `$${(stats.totalRevenue / 12).toFixed(2)}`,
      change: '+2.1%',
      isPositive: true,
      subtitle: 'Average monthly revenue'
    }
  ];

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed}
        user={user}
        logout={logout}
      />
      
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        {/* Header */}
        <div className="dashboard-header d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-0">Dashboard</h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="position-relative mr-3">
              <i className="fas fa-bell" style={{ fontSize: '20px', color: '#666' }}></i>
              <span className="badge badge-danger badge-pill notification-badge">
                {orders.filter(o => o.orderStatus === 'Pending').length}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <img 
                src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=4CAF50&color=fff`}
                alt={user?.name || 'User'}
                className="rounded-circle mr-2"
                style={{ width: '40px', height: '40px' }}
              />
              <span className="font-weight-medium">{user?.name || 'Admin'}</span>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="row mb-4">
          {metrics.map((metric, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6 mb-3" key={index}>
              <MetricCard {...metric} />
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="row mb-4">
          <div className="col-lg-8 mb-3">
            <DistributionChart orders={orders} />
          </div>
          <div className="col-lg-4 mb-3">
            <DailyVisitsChart products={products} orders={orders} />
          </div>
        </div>

        {/* Tables Row */}
        <div className="row mb-4">
          <div className="col-lg-7 mb-3">
            <BestSellingProducts products={products} />
          </div>
          <div className="col-lg-5 mb-3">
            <div className="row">
              <div className="col-12 mb-3">
                <NewCustomersList customers={customers} />
              </div>
              <div className="col-12">
                <OrderList orders={orders} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;