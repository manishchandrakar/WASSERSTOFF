import React, { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from Warehouse</h1>
      <ul>
        {console.log("Data to map:", data)}
        {data.data && (
          <>
            <li>Total Earning: {data.data.totalEarning}</li>
            <li>Sales: {data.data.sales}</li>
            <li>Purchase: {data.data.purchase}</li>
            <li>Users by Country:</li>
            <ul>
              {Object.entries(data.data.usersByCountry).map(([country, value]) => (
                <li key={country}>{country}: {value}</li>
              ))}
            </ul>
          </>
        )}
      </ul>
    </div>
  );
  
}

export default Api;
