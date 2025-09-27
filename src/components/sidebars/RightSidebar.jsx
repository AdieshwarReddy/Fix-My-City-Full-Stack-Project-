import React from 'react';
import SuggestionsList from '../suggestions/SuggestionsList';
import TrendingSection from '../trending/TrendingSection';

const RightSidebar = () => {
  return (
    <div className="pt-8 space-y-8 sticky top-8">
      <SuggestionsList />
    </div>
  );
};

export default RightSidebar;
