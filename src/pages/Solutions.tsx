import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SolutionsOverview from './solutions/SolutionsOverview';
import FullstackSolutions from './solutions/FullstackSolutions';
import CybersecuritySolutions from './solutions/CybersecuritySolutions';
import DataEngineeringSolutions from './solutions/DataEngineeringSolutions';

const Solutions = () => {
  return (
    <Routes>
      <Route index element={<SolutionsOverview />} />
      <Route path="fullstack" element={<FullstackSolutions />} />
      <Route path="cybersecurity" element={<CybersecuritySolutions />} />
      <Route path="data-engineering" element={<DataEngineeringSolutions />} />
    </Routes>
  );
};

export default Solutions;