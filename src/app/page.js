import {Button} from "@mui/material";
import CustomButton from "@/components/CustomButton";

export const dynamic="force-dynamic"

export default function Home() {
  return (
      <div>
        This is the Home Page
          <Button variant="contained" color="primary">
              Hello MUI
          </Button>
          <CustomButton/>
      </div>

  );
}



