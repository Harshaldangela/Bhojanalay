import React from 'react';
import '../index.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Adarsh Bhojanalay Dashboard</h1>
      <p>Your ultimate destination for managing all your meal orders and dining experiences efficiently.</p>

      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Upcoming Orders</h2>
          <p>Check your upcoming meal orders. Review details, make changes, or add new items to your order.</p>
          <button>View My Orders</button>
        </section>

        <section className="dashboard-section">
          <h2>Order History</h2>
          <p>Look back at the delicious meals you've enjoyed at Adarsh Bhojanalay. Relive the experience and share your feedback with others.</p>
          <button>View Order History</button>
        </section>

        <section className="dashboard-section">
          <h2>Special Offers</h2>
          <p>As a valued customer, you get access to exclusive deals and discounts on your favorite dishes. Don't miss out!</p>
          <button>Explore Offers</button>
        </section>

        <section className="dashboard-section">
          <h2>Account Settings</h2>
          <p>Manage your personal information, payment methods, and preferences for a seamless dining experience.</p>
          <button>Manage Settings</button>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
