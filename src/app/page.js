import {Box, Button, Drawer} from "@mui/material";
import CustomButton from "@/components/CustomButton";
import Hero from "@/components/Hero";

export const dynamic="force-dynamic"

export default function Home() {
  return (
      <Box component={"div"} className={"flex-grow-1"} >
          <Hero/>
      </Box>

  );
}



