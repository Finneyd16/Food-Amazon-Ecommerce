import { useAuth } from "../../context/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="container my-5">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5>Total Orders</h5>
              <h2>150</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5>Total Products</h5>
              <h2>45</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5>Total Customers</h5>
              <h2>230</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5>Revenue</h5>
              <h2>$12,450</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;