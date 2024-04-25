import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function urlCheck(text: string) {
  const regex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
  return regex.test(text);
}

interface FormUrlData {
  url: string;
}

type UrlProps = {
  url_api: React.Dispatch<React.SetStateAction<string>>;
};

export default function Url({ url_api }: UrlProps) {
  const { register, handleSubmit, watch } = useForm<FormUrlData>();
  const url = watch("url");
  const [isUrl, setIsUrl] = useState<boolean>(true);

  const onSubmit = handleSubmit(() => {});

  useEffect(() => {
    if (url) setIsUrl(urlCheck(url));
    else setIsUrl(true);
  }, [url]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            error={!isUrl}
            variant="outlined"
            label="IP"
            helperText={isUrl ? "" : "O endereço digitado é inválido."}
            fullWidth
            defaultValue="http://127.0.0.1:3000/data"
            {...register("url")}
          />
          <Button type="submit" variant="contained" style={{ borderRadius: "10px", height: "56px" }} disabled={!isUrl}>
            {true ? <NetworkCheckIcon fontSize="large" /> : <TaskAltIcon fontSize="large" />}
          </Button>
        </Stack>
      </form>
    </>
  );
}
