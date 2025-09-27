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
      id: '4',
      authority: 'health',
      avatar: 'https://www.cheggindia.com/wp-content/uploads/2023/10/pwd-full-form-1024x543.png',
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
    },
    {
      id: '8',
      authority: 'Education',
      avatar: 'https://swachhbharatmission.gov.in/shs2023/SHS2023/images/logos-jal.png',
    },
    {
      id: '9',
      authority: 'police',
      avatar: 'https://www.developmentaid.org/files/organizationLogos/department-of-water-supply-and-sanitation-government-of-punjab-144726.jpg',
    }
  ];

  return (
    <div className="bg-white">
      {/* Suggestions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 font-semibold text-sm">Different Authorities</p>
          <button className="text-sm text-gray-900 font-semibold hover:text-gray-600">
            See All
          </button>
        </div>

        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={suggestion.avatar} 
                alt={suggestion.authority} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{suggestion.authority}</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm font-semibold hover:text-blue-700">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsList;