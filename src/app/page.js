import {Box, Button, Drawer} from "@mui/material";
import CustomButton from "@/components/CustomButton";

export const dynamic="force-dynamic"

export default function Home() {
  return (
      <Box component={"div"} sx={{flexGrow: 1}}>

          <h2> This is the Home Page</h2>

          <Button variant="contained" color="primary">
              Hello MUI
          </Button>
          <CustomButton/>
      </Box>

  );
}



