import useApi from "../../hooks/useApi";
import { CHAOS_API_BASE_URL } from "../../config/config";

export default function ChaosDetail({ kind, namespace, name, token }) {
  const cluster = sessionStorage.getItem("cluster");

  console.log("chaosDetail prop namespace: ", namespace);

  const apiUrl =
    CHAOS_API_BASE_URL +
    `/clusters/${cluster}/namespaces/${namespace}/experiments/${kind}/${name}`;

  const data = useApi({ apiUrl, token });
  //   setPodList(
  //     data.items[0].spec.selector.pods[data.items[0].spec.selector.namespaces[0]]
  //   );

  return (
    <>
      {data.items && data.items.length > 0 ? (
        <>
          <h4>Details</h4>
          <Detail data={data}></Detail>
          <h4>Scope</h4>
          <Scope data={data}></Scope>
          <h4>Experiment</h4>
          <Experiment data={data}></Experiment>
          <h4>Run</h4>
          <Run data={data}></Run>
          <h4>Events</h4>
          <Event
            cluster={cluster}
            namespace={namespace}
            uid={data.items[0].metadata.uid}
            token={token}
          ></Event>
        </>
      ) : null}
    </>
  );
}

export function Detail({ data }) {
  return (
    <div className="table_style01">
      <table>
        <caption>Details</caption>
        <colgroup>
          <col width="20%" />
          <col width="80%" />
        </colgroup>
        <tbody className="listTable">
          <tr>
            <th className="left" scope="row">
              Name
            </th>
            <td className="left">{data.items[0].metadata.name}</td>
          </tr>
          <tr>
            <th className="left" scope="row">
              Status
            </th>
            <td className="left">-</td>
          </tr>
          <tr>
            <th className="left">UUID</th>
            <td className="left">{data.items[0].metadata.uid}</td>
          </tr>
          <tr>
            <th className="left" scope="row">
              Namespaces
            </th>
            <td className="left">{data.items[0].metadata.namespace}</td>
          </tr>
          <tr>
            <th className="left" scope="row">
              Created time
            </th>
            <td className="left">{data.items[0].metadata.creationTimestamp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Scope({ data }) {
  return (
    <div className="table_style01">
      <table>
        <caption>Scope</caption>
        <colgroup>
          <col width="20%" />
          <col width="80%" />
        </colgroup>
        <tbody className="listTable">
          <tr>
            <th className="left" scope="row">
              Namespace Selector
            </th>
            <td className="left" id="namespaceSelector">
              {data.items[0].spec.selector.namespaces.join(", ")}
            </td>
          </tr>
          <tr>
            <th className="left" scope="row">
              Label Selectors
            </th>
            <td className="left box" id="labelSelectors">
              {data.items[0].spec.selector.labelSelectors
                ? JSON.stringify(data.items[0].spec.selector.labelSelectors)
                : "-"}
            </td>
          </tr>
          <tr>
            <th className="left" scope="row">
              Selected Pods
            </th>
            <td className="left box" id="selectedPods">
              {data.items[0].spec.selector.pods
                ? Object.values(data.items[0].spec.selector.pods)
                    .flat()
                    .join(", ")
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Experiment({ data }) {
  return (
    <div className="table_style01">
      <table>
        <caption>Experiment</caption>
        <colgroup>
          <col width="20%" />
          <col width="80%" />
        </colgroup>
        <tbody className="listTable" id="experiment">
          <tr>
            <th className="left" scope="row">
              Kind
            </th>
            <td className="left" id="kind">
              {data.items[0].kind}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Run({ data }) {
  return (
    <div className="table_style01">
      <table>
        <caption>Run</caption>
        <colgroup>
          <col width="20%" />
          <col width="80%" />
        </colgroup>
        <tbody className="listTable" id="run">
          <tr>
            <th className="left" scope="row">
              Duration
            </th>
            <td className="left" id="duration">
              {data.items[0].spec.duration
                ? data.items[0].spec.duration
                : "Run continuously"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Event({ cluster, namespace, uid, token }) {
  const apiUrl =
    CHAOS_API_BASE_URL +
    `/clusters/${cluster}/namespaces/${namespace}/experiments/events?event=True&object_id=${uid}&limit=999`;

  const data = useApi({ apiUrl, token });

  return (
    <div className="table_style01">
      <table className="eventTable">
        <caption>Events</caption>
        <colgroup>
          <col width="80%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Message</th>
            <th scope="col">Event Time</th>
          </tr>
        </thead>
        <tbody className="scrollTableList">
          {data.items && data.items.length > 0 ? (
            data.items.map((item) => (
              <tr key={item.id}>
                <td className="left eventFirstColumn">${item.message}</td>
                <td>${item.created_at}</td>
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
  );
}
