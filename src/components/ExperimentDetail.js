import useApi from "../hooks/useApi";
import { CHAOS_API_BASE_URL, HOST_NAME, NAMESPACE } from "../config/config";
import { useParams } from "react-router-dom";

export default function ExperimentDetail() {
  const kind = useParams().kind;
  const name = useParams().name;
  console.log("kind: ", kind);
  console.log("name: ", name);

  const apiUrl =
    CHAOS_API_BASE_URL +
    HOST_NAME +
    NAMESPACE +
    "/experiments/" +
    kind +
    "/" +
    name;

  const token = sessionStorage.getItem("token");
  const data = useApi({ apiUrl, token });
  console.log("dataDetail: ", data);
  let namespace;
  let selectedPods;
  if (data.items) {
    namespace = data.items[0].metadata.namespace;
    // selectedPods = data.items[0].spec.selector.pods.${namespace};
  }
  console.log("selectedPods: ", selectedPods);

  return (
    <>
      {data.items && data.items.length > 0 ? (
        <div class="notice">
          <div class="chaosCharts" id="chaosCharts"></div>
          <h4>Details</h4>
          <div class="table_style01">
            <table>
              <caption>Details</caption>
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <tbody class="listTable">
                <tr>
                  <th class="left" scope="row">
                    Name
                  </th>
                  <td class="left">{data.items[0].metadata.name}</td>
                </tr>
                <tr>
                  <th class="left" scope="row">
                    Status
                  </th>
                  <td class="left">-</td>
                </tr>
                <tr>
                  <th class="left">UUID</th>
                  <td class="left">{data.items[0].metadata.uid}</td>
                </tr>
                <tr>
                  <th class="left" scope="row">
                    Namespaces
                  </th>
                  <td class="left">{namespace}</td>
                </tr>
                <tr>
                  <th class="left" scope="row">
                    Created time
                  </th>
                  <td class="left">
                    {data.items[0].metadata.creationTimestamp}
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Scope</h4>
            <div class="table_style01">
              <table>
                <caption>Scope</caption>
                <colgroup>
                  <col width="20%" />
                  <col width="80%" />
                </colgroup>
                <tbody class="listTable">
                  <tr>
                    <th class="left" scope="row">
                      Namespace Selector
                    </th>
                    <td class="left" id="namespaceSelector">
                      -
                    </td>
                  </tr>
                  <tr>
                    <th class="left" scope="row">
                      Label Selectors
                    </th>
                    <td class="left box" id="labelSelectors">
                      -
                    </td>
                  </tr>
                  <tr>
                    <th class="left" scope="row">
                      Selected Pods
                    </th>
                    <td class="left box" id="selectedPods">
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div>No Data.</div>
      )}
    </>
  );
}
