import React from 'react';


const Sidebar = ({ collapsed, setCollapsed, user, logout }) => {
  const menuItems = [
    { icon: 'fas fa-th-large', label: 'Dashboard', active: true, href: '/admin/dashboard' },
    { icon: 'fas fa-shopping-cart', label: 'Orders', href: '/admin/orders' },
    { icon: 'fas fa-users', label: 'Customers', href: '/admin/customers' },
    { icon: 'fas fa-box', label: 'Inventory', href: '/admin/products' },
    { icon: 'fas fa-bell', label: 'Notifications', href: '/admin/notifications' },
    { icon: 'fas fa-chart-bar', label: 'Reviews', href: '/admin/reviews' },
    { icon: 'fas fa-cog', label: 'Settings', href: '/admin/settings' }
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="d-flex align-items-center">
          <div className="logo-icon">
            <i className="fas fa-leaf"></i>
          </div>
          {!collapsed && <span className="logo-text ml-2">360 Organic Foodie</span>}
        </div>
      </div>

      <div className="sidebar-search">
        {!collapsed && (
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white border-right-0">
                <i className="fas fa-search text-muted"></i>
              </span>
            </div>
            <input 
              type="text" 
              className="form-control border-left-0" 
              placeholder="Search here..."
            />
          </div>
        )}
        {collapsed && (
          <div className="text-center">
            <i className="fas fa-search text-muted"></i>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className={`sidebar-nav-item ${item.active ? 'active' : ''}`}
            title={collapsed ? item.label : ''}
          >
            <i className={item.icon}></i>
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button 
          onClick={logout}
          className="sidebar-nav-item logout-btn" 
          title={collapsed ? 'Logout' : ''}
          style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}
        >
          <i className="fas fa-sign-out-alt"></i>
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
