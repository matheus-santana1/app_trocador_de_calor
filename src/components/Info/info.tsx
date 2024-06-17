import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import { useSystem } from "../../system/system";
import Typography from "@mui/material/Typography";

type InfoProps = {
  disable: boolean;
};

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Info(props: InfoProps) {
  const { status, sendMessage, setSystem } = useSystem();

  function ButtonClick() {
    setSystem({ status: "mensuaring" });
    sendMessage("Enviado");
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" flex={1} sx={{ width: "100%" }}>
        <Button variant="contained" disabled={props.disable} onClick={ButtonClick}>
          Teste
        </Button>
      </Box>
      {status == "mensuaring" && <LinearProgressWithLabel value={12} />}
    </>
  );
}
