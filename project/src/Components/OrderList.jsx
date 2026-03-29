import React from 'react';

const OrderList = ({ orders }) => {
  console.log('Recent Orders:', orders);

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
      'Delivered': 'success',
      'Completed': 'success',
      'Paid': 'success',
      'Shipped': 'info',
      'Processing': 'warning',
      'Pending': 'warning',
      'Cancelled': 'danger',
      'Declined': 'danger'
    };
    return statusMap[status] || 'secondary';
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
        {orders && orders.length > 0 ? (
          orders.slice(0, 4).map((order, index) => (
            <div key={order._id || index} className="order-item">
              <div className="order-info">
                <div className="order-number">
                  {order.paymentStatus === 'Paid' ? 'Payment from' : 'Process delivery to'} #{order._id?.slice(-6)}
                </div>
                <div className="order-date">{formatDate(order.createdAt)}</div>
              </div>
              <div className="order-details">
                <div className="order-amount">${order.totalAmount?.toFixed(2) || '0.00'}</div>
                <span className={`badge badge-${
                  getStatusClass(order.orderStatus || order.paymentStatus)
                } status-badge`}>
                  {order.orderStatus === 'Delivered' || order.paymentStatus === 'Paid' 
                    ? 'Completed' 
                    : order.orderStatus || order.paymentStatus || 'Pending'}
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