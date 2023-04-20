import React from "react";
import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleEvent = () => {
      setIsOnline(true);
    };
    const handleEvent2 = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleEvent);
    window.addEventListener("offline", handleEvent2);

    return () => {
      window.removeEventListener("online", handleEvent);
      window.removeEventListener("offline", handleEvent2);
    };
  }, []);

  return isOnline;
};
export default useOnline;
