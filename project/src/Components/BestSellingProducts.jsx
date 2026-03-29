import React from 'react';

const BestSellingProducts = ({ products }) => {
  // Just show first 5 products 
  const displayProducts = products.slice(0, 5);

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
            {displayProducts && displayProducts.length > 0 ? (
              displayProducts.map((product, index) => (
                <tr key={product._id || index}>
                  <td>
                    <div className="product-name">{product.name || 'N/A'}</div>
                    <div className="product-id">#{product._id?.slice(-6) || 'N/A'}</div>
                  </td>
                  <td className="stock-cell">{product.quantity || product.stock || 0}</td>
                  <td className="amount-cell">${product.price?.toFixed(2) || '0.00'}</td>
                  <td>
                    <span className={`badge badge-${
                      (product.quantity || product.stock || 0) > 0 ? 'success' : 'danger'
                    } status-badge`}>
                      {(product.quantity || product.stock || 0) > 0 ? 'In Stock' : 'Out Of Stock'}
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