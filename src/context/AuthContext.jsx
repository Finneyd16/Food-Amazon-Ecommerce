import { createContext, useContext, useState, useEffect } from "react";


// Create context
const AuthContext = createContext(null);

// Base API URL from environment variable
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on refresh
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error("Error parsing user from localStorage:", err);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  // LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      const res = await fetch(
        `${API_BASE}/api/fooddocuments/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

       if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed"); // 
      }

      const userData = await res.json();

      // Save user
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return userData;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };

  // LOGOUT FUNCTION
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};