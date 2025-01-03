import React from "react";
import StolenBikesDisplay from "../feature/stolenBikes/pages/StolenBikesDisplay";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const ManagementRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StolenBikesDisplay />} />
    </Routes>
  );
};

export default ManagementRoute;
