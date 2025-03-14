import useApi from "../../hooks/useApi";

export default function ResourceUsageGrafana() {
  return (
    <div className="chaosCharts" id="chaosCharts">
      <h4>Metrics</h4>
      <PodResourceUsageChart></PodResourceUsageChart>
      <WorkloadResourceUsageChart></WorkloadResourceUsageChart>
      <NodeResourceUsageChart></NodeResourceUsageChart>
    </div>
  );
}

function PodResourceUsageChart() {
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
      <div className="chaosResourceList" id="chaosPodList">
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/UDdpyzz7z/prometheus-2-0-stats?orgId=1&from=1741914064312&to=1741917664312&timezone=browser&refresh=1m&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="350"
          height="250"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/UDdpyzz7z/prometheus-2-0-stats?orgId=1&from=1741914064312&to=1741917664312&timezone=browser&refresh=1m&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="350"
          height="250"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/rpfmFFz7z/prometheus-stats?orgId=1&from=1741917445023&to=1741917745023&timezone=browser&var-node=localhost:9090&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="350"
          height="250"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

function WorkloadResourceUsageChart() {
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
      <div className="chaosResourceList" id="chaosWorkloadList">
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/UDdpyzz7z/prometheus-2-0-stats?orgId=1&from=1741914064312&to=1741917664312&timezone=browser&refresh=1m&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="530"
          height="250"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/rpfmFFz7z/prometheus-stats?orgId=1&from=1741917445023&to=1741917745023&timezone=browser&var-node=localhost:9090&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="530"
          height="250"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

function NodeResourceUsageChart() {
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
              Resource usage by node during chaos
            </th>
          </tr>
        </tbody>
      </table>
      <div className="chaosResourceList" id="chaosNodeList">
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/UDdpyzz7z/prometheus-2-0-stats?orgId=1&from=1741914064312&to=1741917664312&timezone=browser&refresh=1m&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="530"
          height="250"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://grafana.133.186.144.45.nip.io/d-solo/rpfmFFz7z/prometheus-stats?orgId=1&from=1741917445023&to=1741917745023&timezone=browser&var-node=localhost:9090&theme=light&panelId=14&__feature.dashboardSceneSolo"
          width="530"
          height="250"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
