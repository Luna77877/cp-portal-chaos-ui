import { useParams } from "react-router-dom";
import ResourceUsageGrafana from "./ResourceUsageGrafana";
import ChaosDetail from "./ChaosDetail";

export default function ExperimentDetailPage() {
  const { kind, namespace, name } = useParams();
  const token = sessionStorage.getItem("token");

  console.log("detailPage param namespace: ", namespace);

  return (
    <div className="notice">
      {kind === "StressChaos" ? (
        <ResourceUsageGrafana></ResourceUsageGrafana>
      ) : null}
      <ChaosDetail
        kind={kind}
        namespace={namespace}
        name={name}
        token={token}
      ></ChaosDetail>
    </div>
  );
}
