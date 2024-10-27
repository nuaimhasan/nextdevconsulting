import { useEffect } from "react";

export default function ReadMore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>ReadMore</div>;
}
