import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(3),
  textAlign: "center",
  height: 450,
  borderRadius: 10,
  color: theme.palette.text.secondary,
}));
const LargeGridCard = (props) => {
  const [cardData, setCardData] = useState(props?.data);

  return (
  
        <Item>
          <Typography variant="h5" component="div">
            {cardData?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardData?.description}
          </Typography>
          <Link
            href={cardData?.linkDetails?.link}
            target="_blank"
            rel="noopener"
          >
            {cardData?.linkDetails?.linkDesc}
          </Link>
        </Item>
    
  );
};
export default LargeGridCard;
