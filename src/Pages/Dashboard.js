import React from "react";
import AddCoin from "../Components/AddCoin";
import List from "../Components/List";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <AddCoin />
      <List />
    </div>
  );
}

export default Dashboard;
