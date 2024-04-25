import { useState } from "react";
import Url from "../components/url.tsx";
import Chart from "../components/chart.tsx";

function App() {
  const [UrlAPI, setUrlApi] = useState<string>("");
  console.log(UrlAPI);

  return (
    <>
      <Url url_api={setUrlApi} />
      <Chart></Chart>
    </>
  );
}

export default App;
