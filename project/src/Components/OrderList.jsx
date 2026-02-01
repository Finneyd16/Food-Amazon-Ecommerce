import React from 'react';


const OrderList = ({ orders }) => {
  // Get the 4 most recent orders
  const recentOrders = orders
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { 
      month: 'short', 
      day: '2-digit', 
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusClass = (status) => {
    const statusMap = {
      'delivered': 'success',
      'completed': 'success',
      'paid': 'success',
      'shipped': 'info',
      'processing': 'warning',
      'pending': 'warning',
      'cancelled': 'danger',
      'declined': 'danger',
      'refunded': 'danger'
    };
    return statusMap[status?.toLowerCase()] || 'secondary';
  };

  return (
    <div className="order-list-card">
      <div className="card-header-custom">
        <h5 className="card-title-custom">Order List</h5>
        <div className="dropdown">
          <button className="btn btn-sm btn-link text-muted" type="button">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      <div className="orders-list">
        {recentOrders.length > 0 ? (
          recentOrders.map((order, index) => (
            <div key={order._id || index} className="order-item">
              <div className="order-info">
                <div className="order-number">
                  {order.paymentStatus === 'paid' ? 'Payment from' : 'Process delivery to'} #{order._id?.slice(-6)}
                </div>
                <div className="order-date">{formatDate(order.createdAt)}</div>
              </div>
              <div className="order-details">
                <div className="order-amount">${order.totalAmount?.toFixed(2) || '0.00'}</div>
                <span className={`badge badge-${
                  getStatusClass(order.deliveryStatus || order.paymentStatus)
                } status-badge`}>
                  {order.deliveryStatus === 'delivered' || order.paymentStatus === 'paid' 
                    ? 'Completed' 
                    : order.deliveryStatus || order.paymentStatus || 'Pending'}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
            No orders yet
          </div>
        )}
      </div>
      <div className="card-footer-custom">
        <a href="/admin/orders" className="view-all-link">View All transactions</a>
      </div>
    </div>
  );
};

export default OrderList;
