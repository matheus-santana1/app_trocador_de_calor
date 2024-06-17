import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Url from "../components/Url/url.tsx";
import Chart from "../components/Chart/chart.tsx";
import Slider from "../components/Slider/slider.tsx";
import Select from "../components/Select/select.tsx";
import StatusBar from "../components/StatusBar/statusbar.tsx";
import Info from "../components/Info/info.tsx";
import { useSystem, MensuaringMessage, ConnectMessage } from "../system/system.tsx";
import useWebSocketDefault, { Options } from "react-use-websocket";

function App() {
  const { connected, url, setSendMessage, setSystem } = useSystem();

  const socketOptions: Options = {
    onClose: () => {},
    onMessage: (message) => {
      onMessageAction(JSON.parse(message.data));
    },
  };
  const { sendMessage } = useWebSocketDefault(url, socketOptions);

  function onMessageAction(data: ConnectMessage | MensuaringMessage) {
    if ("connect" in data) {
      setSystem({
        status: "connect",
      });
    }
  }

  useEffect(() => {
    setSendMessage(sendMessage);
  }, [url]);

  return (
    <>
      <Url />
      <Stack direction="row" spacing={3} marginTop={5}>
        <Select disable={!connected}></Select>
        <Slider disable={!connected}></Slider>
      </Stack>
      <Chart disable={!connected}></Chart>
      <Info disable={!connected} />
      <StatusBar></StatusBar>
    </>
  );
}

export default App;
