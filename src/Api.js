import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const BASE_URL = "";

  const TOKEN = "";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log("data : ", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
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
