import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaTachometerAlt,FaShoppingCart,FaThLarge,FaUsers,FaCreditCard,FaUserSlash,FaUserPlus,FaComment,FaSignOutAlt } from "react-icons/fa";
import Header from "../components/Header";

export default function AdminLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Admin</h2>
        <nav>
          <Link to="/admin/dashboard" className="dashboard-link1"><FaTachometerAlt /> Dashboard</Link>
          <Link to="/admin/orders"><FaShoppingCart /> Orders</Link>
          <Link to="/admin/products"><FaThLarge /> Category</Link>
          <Link to="/admin/seller"><FaUsers /> Sellers</Link>
          <Link to="/admin/paymentrequest"><FaCreditCard /> Payment Request</Link>
          <Link to="/admin/sellerdeactivate"><FaUserSlash /> Deactive Sellers</Link>
          <Link to="/admin/sellerrequest"><FaUserPlus /> Sellers Request</Link>
          <Link to="/admin/chatseller"><FaComment /> Chat Seller</Link>
          <Link to="/admin/products"><FaSignOutAlt /> Logout</Link>
        </nav>
      </aside>
      <div className="main-content">
        <Header title="Admin Dashboard" />
        <Outlet />
      </div>
    </div>
  );
}
