import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const SuggestionsList = () => {
  const { user } = useAuth();

  const suggestions = [
    {
      id: '1',
      authority: 'public works',
      avatar: 'https://www.cheggindia.com/wp-content/uploads/2023/10/pwd-full-form-1024x543.png',
    },
    {
      id: '2',
      authority: 'sanitation/solid waste',
      avatar: 'https://swachhbharatmission.gov.in/shs2023/SHS2023/images/logos-jal.png',
    },
    {
      id: '3',
      authority: 'water supply',
      avatar: 'https://www.developmentaid.org/files/organizationLogos/department-of-water-supply-and-sanitation-government-of-punjab-144726.jpg',
    },
    
    {
      id: '5',
      authority: 'fire service',
      avatar: 'https://swachhbharatmission.gov.in/shs2023/SHS2023/images/logos-jal.png',
    },
    {
      id: '6',
      authority: 'urban development',
      avatar: 'https://www.developmentaid.org/files/organizationLogos/department-of-water-supply-and-sanitation-government-of-punjab-144726.jpg',
    },
    {
      id: '7',
      authority: 'parks recreation',
      avatar: 'https://www.cheggindia.com/wp-content/uploads/2023/10/pwd-full-form-1024x543.png',
    }
   
    
  ];

  return (

    <div className="bg-white p-2">
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 mb-4">
        <span className="text-lg font-bold">+</span>
        Report Issue
      </button>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-500 font-semibold text-sm">Different Authorities</p>
        <button className="text-sm text-gray-900 font-semibold hover:text-gray-600">
          See All
        </button>
      </div>

      {/* Scrollable Grid Container */}
      <div
        className="overflow-y-auto hide-scrollbar"
        style={{ maxHeight: '600px' }}
      >
        <div className="grid grid-cols-2 gap-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={suggestion.avatar}
                alt={`Avatar for ${suggestion.authority}`}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p className="font-semibold text-sm mb-2 capitalize">{suggestion.authority}</p>
              <button className="text-blue-500 text-sm font-semibold hover:text-blue-700">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default SuggestionsList;
