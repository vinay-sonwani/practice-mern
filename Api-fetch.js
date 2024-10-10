import React, { useEffect, useState } from 'react';

const GetDataComponent = () => {
  const [data, setData] = useState([]);  // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null);  // State for error handling

  useEffect(() => {
    // Fetch data from API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);  // Set data from the API to the state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError(error.message); // Set error message if something goes wrong
        setLoading(false);
      });
  }, []);  // Empty dependency array ensures this runs once on component mount

  if (loading) return <p>Loading...</p>;  // Show loading text while fetching data
  if (error) return <p>Error: {error}</p>;  // Show error message if there's an error

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetDataComponent;


// Async and await -------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';

// const GetDataComponent = () => {
//   const [data, setData] = useState([]);  // State to store fetched data
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null);  // State for error handling

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);  // Set data from the API to the state
//       } catch (error) {
//         setError(error.message); // Set error message if something goes wrong
//       } finally {
//         setLoading(false); // Set loading to false after fetch attempt
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);  // Empty dependency array ensures this runs once on component mount

//   if (loading) return <p>Loading...</p>;  // Show loading text while fetching data
//   if (error) return <p>Error: {error}</p>;  // Show error message if there's an error

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map(user => (
//           <li key={user.id}>
//             {user.name} ({user.email})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetDataComponent;
