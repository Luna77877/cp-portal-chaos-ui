import { useEffect, useState } from "react";
import Api from "../utils/Api";
import { HOST_UI_URL } from "../config/config";

export default function Events() {
  const [sessionToken, setSessionToken] = useState(null);
  console.log("sessionTokenEvents : ", sessionToken);

  useEffect(() => {
    const handleMessage = async (event) => {
      const data = await event.data;
      if ((await event.origin) !== HOST_UI_URL) {
        return;
      }
      console.log("data : ", data);
      setSessionToken(data);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="notice">
      <h3>List</h3>
      {sessionToken && <Api sessionToken={sessionToken} />}
    </div>
  );
}
