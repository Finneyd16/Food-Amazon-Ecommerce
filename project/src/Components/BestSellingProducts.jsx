import React from 'react';


const BestSellingProducts = ({ products, orders }) => {
  // Calculate sales for each product
  const productSales = products.map(product => {
    const productOrders = orders.filter(order => 
      order.items?.some(item => item.productId === product._id || item.product === product._id)
    );
    
    const totalSold = productOrders.reduce((sum, order) => {
      const item = order.items.find(i => i.productId === product._id || i.product === product._id);
      return sum + (item?.quantity || 0);
    }, 0);
    
    const totalRevenue = productOrders.reduce((sum, order) => {
      const item = order.items.find(i => i.productId === product._id || i.product === product._id);
      return sum + ((item?.price || 0) * (item?.quantity || 0));
    }, 0);
    
    return {
      ...product,
      totalSold,
      totalRevenue
    };
  });
  
  // Sort by revenue and take top 5
  const topProducts = productSales
    .sort((a, b) => b.totalRevenue - a.totalRevenue)
    .slice(0, 5);

  return (
    <div className="best-selling-card">
      <div className="card-header-custom">
        <h5 className="card-title-custom">Best-Selling Products</h5>
        <a href="/admin/products" className="see-all-link">See All</a>
      </div>
      <div className="table-responsive">
        <table className="table table-hover product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.length > 0 ? (
              topProducts.map((product, index) => (
                <tr key={product._id || index}>
                  <td>
                    <div className="product-name">{product.name}</div>
                    <div className="product-id">#{product._id?.slice(-6) || 'N/A'}</div>
                  </td>
                  <td className="stock-cell">{product.totalSold || 0}</td>
                  <td className="amount-cell">${product.totalRevenue?.toFixed(2) || '0.00'}</td>
                  <td>
                    <span className={`badge badge-${
                      (product.stock || product.quantity || 0) > 0 ? 'success' : 'danger'
                    } status-badge`}>
                      {(product.stock || product.quantity || 0) > 0 ? 'In Stock' : 'Out Of Stock'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestSellingProducts;
