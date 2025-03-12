import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Api({ apiUrl, token }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    async function fetchData() {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: token,
          },
        });
        setData(response.data);
        setLoading(false);
        console.log("data : ", response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return data;
}
