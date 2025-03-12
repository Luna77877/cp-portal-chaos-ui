import useApi from "../hooks/useApi";
import { CHAOS_API_BASE_URL, HOST_NAME, NAMESPACE } from "../config/config";

export default function Events() {
  let limit = 10;
  let offset = 0;
  let allItemCount = 0;
  let searchName = "";

  const apiUrl =
    CHAOS_API_BASE_URL +
    HOST_NAME +
    NAMESPACE +
    "/experiments/events?event=True&limit=" +
    limit +
    "&offset=" +
    offset +
    "&searchName=";

  const token = sessionStorage.getItem("token");
  const data = useApi({ apiUrl, token });

  return (
    <div className="notice">
      <h3>List</h3>
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
              <tr>
                <td colSpan="6">No Data.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
