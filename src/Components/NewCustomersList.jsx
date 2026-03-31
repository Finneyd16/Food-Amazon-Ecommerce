import React from 'react';


const NewCustomersList = ({ customers }) => {
  // Get the 4 most recent customers
  const recentCustomers = customers
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div className="new-customers-card">
      <div className="card-header-custom">
        <h5 className="card-title-custom">New Customers List</h5>
        <div className="dropdown">
          <button className="btn btn-sm btn-link text-muted" type="button">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      <div className="customers-list">
        {recentCustomers.length > 0 ? (
          recentCustomers.map((customer, index) => (
            <div key={customer._id || index} className="customer-item">
              <div className="d-flex align-items-center">
                <img 
                  src={`https://ui-avatars.com/api/?name=${customer.name || 'User'}&background=${
                    ['FF6B6B', '4ECDC4', '95E1D3', 'F38181', '4CAF50'][index % 5]
                  }&color=fff`}
                  alt={customer.name}
                  className="customer-avatar"
                />
                <div className="customer-info">
                  <div className="customer-name">{customer.name || 'Unknown'}</div>
                  <div className="customer-email">{customer.email || 'No email'}</div>
                </div>
              </div>
              <button className="btn btn-sm btn-link text-muted">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
            No customers yet
          </div>
        )}
      </div>
      <div className="card-footer-custom">
        <a href="/admin/customers" className="view-more-link">View more</a>
      </div>
    </div>
  );
};

export default NewCustomersList;
