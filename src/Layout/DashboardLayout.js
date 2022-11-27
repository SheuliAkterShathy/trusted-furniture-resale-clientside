import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
                  <NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/dashboard/myOrders">My orders</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/dashboard/wishlist">My Wishlist</NavLink>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/dashboard/addProducts">Add products</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/dashboard/myProducts">My products</NavLink>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                {" "}
                <li>
                  <NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/dashboard/allSellers">All Sellers</NavLink>
                </li>{" "}
                <li>
                  <NavLink className={({isActive})=> isActive? 'text-amber-400': undefined} to="/dashboard/allBuyers">All Buyers</NavLink>
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
