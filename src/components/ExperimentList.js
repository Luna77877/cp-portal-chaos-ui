import useApi from "../hooks/useApi";
import { CHAOS_API_BASE_URL, HOST_NAME, NAMESPACE } from "../config/config";
import { Link } from "react-router-dom";

export default function ExperimentList() {
  let limit = 10;
  let offset = 0;
  let allItemCount = 0;
  let searchName = "";

  const apiUrl =
    CHAOS_API_BASE_URL +
    HOST_NAME +
    NAMESPACE +
    "/experiments?&limit=" +
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
          <caption>Experiments List</caption>
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="25%" />
            <col width="25%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Kind</th>
              <th scope="col">Name</th>
              <th scope="col">Namespace</th>
              <th scope="col">Created Time</th>
            </tr>
          </thead>
          <tbody className="listTable">
            {data.items && data.items.length > 0 ? (
              data.items.map((item) => (
                <tr key={item.metadata.uid}>
                  <td>-</td>
                  <td>{item.kind}</td>
                  <td>
                    <Link to={`/detail/${item.kind}/${item.metadata.name}`}>
                      {item.metadata.name}
                    </Link>
                  </td>
                  <td>{item.metadata.namespace}</td>
                  <td>
                    {item.metadata.creationTimestamp
                      .replace("T", " ")
                      .replace("Z", "")}
                  </td>
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
