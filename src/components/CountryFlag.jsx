import React from 'react';

const CountryFlag = ({ country, className = "" }) => {
  const countryData = {
    canada: { code: "CA", name: "Canada" },
    usa: { code: "US", name: "USA" },
    australia: { code: "AU", name: "Australia" },
    uk: { code: "GB", name: "UK" },
    schengen: { code: "EU", name: "EU" },
    "new-zealand": { code: "NZ", name: "New Zealand" },
    germany: { code: "DE", name: "Germany" },
    ireland: { code: "IE", name: "Ireland" },
    georgia: { code: "GE", name: "Georgia" }
  };

  const data = countryData[country] || { code: "??", name: "Unknown" };

  return (
    <div className={`flag-display ${className}`}>
      {data.code !== "??" ? (
        <img 
          src={`https://flagsapi.com/${data.code}/flat/32.png`}
          alt={`${data.name} flag`}
          className="w-8 h-6 object-cover rounded"
        />
      ) : (
        <div className="flag-fallback bg-gray-600 text-white rounded-md px-2 py-1 text-sm font-bold">
          {data.code}
        </div>
      )}
    </div>
  );
};

export default CountryFlag;
