import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Define the API URL
    const apiUrl = 'alb-developmentenv-ser-1634225868.us-west-2.elb.amazonaws.com:4000/node-express/api/self/profile';

    // Define custom headers


    // Make the GET request using Axios with custom headers
    axios.get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        if (response ===  200) {}
        setData(response.data.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  console.log("data11111", data)

  return (
    <div className="App">
      <h1>  {data ? data : <h1>disconnect</h1>}
      </h1>
    </div>
  );
}

export default App;
