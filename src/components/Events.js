import Api from "../utils/Api";

export default function Events() {
  const token = sessionStorage.getItem("token");
  console.log("experi token :", token);

  return (
    <div className="notice">
      <h3>List</h3>
      <Api token={token} />
    </div>
  );
}
