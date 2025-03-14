import useApi from "../../hooks/useApi";
import { CHAOS_API_BASE_URL } from "../../config/config";

export default function ResourceUsageChart({ name, token, podList }) {
  return (
    <div className="chaosCharts" id="chaosCharts">
      <h4>Metrics</h4>
      <PodResourceUsageChart
        name={name}
        token={token}
        podList={podList}
      ></PodResourceUsageChart>
      <WorkloadResourceUsageChart></WorkloadResourceUsageChart>
      <NodeResourceUsageChart></NodeResourceUsageChart>
    </div>
  );
}

export function PodResourceUsageChart({ name, token, podList }) {
  const apiUrl =
    CHAOS_API_BASE_URL +
    `/clusters/${sessionStorage.getItem(
      "cluster"
    )}/namespaces/${sessionStorage.getItem(
      "nameSpace"
    )}/experiments/resourceUsageByPod/${name}?
  podList=${podList}`;

  const data = useApi({ apiUrl, token });

  return (
    <div className="chaosChart table_style01">
      <table>
        <caption>Metrics</caption>
        <colgroup>
          <col width="100%" />
        </colgroup>
        <tbody className="listTable">
          <tr>
            <th className="left" scope="row">
              Resource usage by selected Pods during chaos
            </th>
          </tr>
        </tbody>
      </table>
      <div className="chaosResourceList" id="chaosPodList"></div>
      <ol id="resourceUsageByPodCharts">
        <li>
          <canvas
            id="cpuUsageByPodChart"
            style={{
              height: "300px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></canvas>
        </li>
        <li>
          <canvas
            id="memoryUsageByPodChart"
            style={{
              height: "300px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></canvas>
        </li>
        <li>
          <canvas
            id="appStatusUsageByPodChart"
            style={{
              height: "300px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></canvas>
        </li>
      </ol>
    </div>
  );
}

export function WorkloadResourceUsageChart() {
  return (
    <div className="chaosChart table_style01">
      <table>
        <caption>Metrics</caption>
        <colgroup>
          <col width="100%" />
        </colgroup>
        <tbody className="listTable">
          <tr>
            <th className="left" scope="row">
              Resource usage by workload for selected Pods during chaos
            </th>
          </tr>
        </tbody>
      </table>
      <div className="chaosResourceList" id="chaosWorkloadList"></div>
      <ol id="resourceUsageByWorkloadCharts">
        <li>
          <canvas
            id="cpuUsageByWorkloadChart"
            style={{
              height: "300px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></canvas>
        </li>
        <li>
          <canvas
            id="memoryUsageByWorkloadChart"
            style={{
              height: "300px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></canvas>
        </li>
      </ol>
    </div>
  );
}

export function NodeResourceUsageChart() {}
