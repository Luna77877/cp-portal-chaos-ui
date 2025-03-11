import React, { useState, useEffect } from "react";
import axios from "axios";
import { CHAOS_API_BASE_URL, HOST_NAME, NAMESPACE } from "../config/config";

export default function Api({ sessionToken }) {
  const API_URL =
    CHAOS_API_BASE_URL +
    "/clusters/" +
    HOST_NAME +
    "/namespaces/" +
    NAMESPACE +
    "/experiments/events?event=True&limit=10&offset=0&searchName=";
  console.log("sessionToken : ", sessionToken);

  console.log("API_URL: ", API_URL);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionToken) return;

    async function fetchData() {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
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

  return (
    <div className="table_style01">
      <table>
        <caption>Events List</caption>
        <colgroup>
          <col width="16%" />
          <col width="11%" />
          <col width="11%" />
          <col width="11%" />
          <col width="35%" />
          <col width="16%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">UUID</th>
            <th scope="col">Namespaces</th>
            <th scope="col">Name</th>
            <th scope="col">Kind</th>
            <th scope="col">Message</th>
            <th scope="col">Event Time</th>
          </tr>
        </thead>
        <tbody className="listTable">
          {data.items && data.items.length > 0 ? (
            data.items.map((item) => (
              <tr key={item.id}>
                <td>{item.object_id}</td>
                <td>{item.namespace}</td>
                <td>{item.name}</td>
                <td>{item.kind}</td>
                <td>{item.message}</td>
                <td>{item.created_at}</td>
              </tr>
            ))
          ) : (
            <p>No items available.</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
