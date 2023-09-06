import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(3),
  textAlign: "center",
  height: 200,
  borderRadius: 10,
  color: theme.palette.text.secondary,
}));
const SmallGridCard = (props) => {
  const [cardData, setCardData] = useState(props?.data);

  return (
 
  
        <Item>
          <Typography
            variant="h6"
            style={{ color: '#000'}}
          >
            {/* {cardData?.heading ? cardData?.heading : "Heading"} */}
            Heading
          </Typography>
          <Typography variant="h3" color="text.primary">
            <Typography variant="h5" color="text.primary">
              {/* {cardData?.currency || "currency"} */}
              currency
            </Typography>
            {cardData?.pricing || "price details"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {cardData?.subHeading || "Sub heading"} */}
            "Sub heading"
          </Typography>
          <Link
            href={cardData?.linkDetails?.link}
            target="_blank"
            rel="noopener"
          >
            {/* {cardData?.linkDetails?.linkDesc} */}
            linkDesc
          </Link>
        </Item>
   

  );
};
export default SmallGridCard;
