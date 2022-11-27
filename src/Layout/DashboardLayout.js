import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myOrders">My orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">My Wishlist</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProducts">Add products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My products</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                {" "}
                <li>
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>{" "}
                <li>
                  <Link to="/dashboard/allBuyers">All Buyers</Link>
                </li>{" "}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
