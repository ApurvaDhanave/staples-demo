import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(3),
  textAlign: "left",
  height: 200,
  borderRadius: 10,
  color: theme.palette.text.secondary,
  position: "relative",
}));

const CardItem = (props) => {
  const [cardData, setCardData] = useState(props?.data);
  const height = cardData?.cardType === "large card" ? 450 : 200;
  const router = useRouter();
  const handleOnClick = () => {
    console.log("heloooo");
    // Use router.push to navigate to the desired page
    router.push("/Components/cart/ShoppingCart"); // Replace '/another-page' with the actual URL you want to navigate to
  };
  return (
    <Item
      style={{ height }}
      sx={{
        backgroundImage: `url(${cardData.image})`,
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
      onClick={handleOnClick}
    >
      {/* Content inside the card */}
      {/* <Typography variant="h7" style={{ color: "#000" }}>
        {cardData?.promoMessage}
      </Typography>
      <Typography variant="h3" color="text.primary">
        {cardData?.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {cardData?.title}
      </Typography>
      <Link href={cardData?.learnMoreLink} target="_blank" rel="noopener">
        {/* {cardData?.linkDetails?.linkDesc} */}

      {/* </Link> */}
    </Item>
  );
};

export default CardItem;
