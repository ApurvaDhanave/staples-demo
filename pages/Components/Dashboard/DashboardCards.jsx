"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem";
import { DashboardData as Data } from "@/Data/ProductTileData";

function DashboardGrid() {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={3}>
    //     <CardItem />
    //     <CardItem />
    //   </Grid>
    //   <Grid item xs={3}>
    //     <Item
    //       sx={{
    //         height: 450,
    //         // width: 100,
    //         // backgroundColor: (theme) =>
    //         //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    //       }}
    //     >
    //       xs=4
    //     </Item>
    //   </Grid>
    //   <Grid item xs={3}>
    //     <Item>xs=4</Item>
    //     <Item>xs=8</Item>
    //   </Grid>
    //   <Grid item xs={3}>
    //     <Item>xs=8</Item>
    //     <Item>xs=8</Item>
    //   </Grid>
    // </Grid>
    // <div style={{ display: "flex", width: "100%" }}>
    //   <div>
    //     <SmallGridCard />
    //     <SmallGridCard />
    //   </div>

    //   <div>
    //     <LargeGridCard />
    //   </div>
    // </div>
    <>
      <Grid container spacing={2}>
        {Data.map((e) => {
          return (
            <>
              <Grid item xs={3}>
                <CardItem data={e} />
              </Grid>
              {/* <Grid item xs={3}>
                <Item
                  sx={{
                    height: 450,
                    // width: 100,
                    // backgroundColor: (theme) =>
                    //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  }}
                >
                  xs=4
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=4</Item>
                <Item>xs=8</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=8</Item>
                <Item>xs=8</Item>
              </Grid> */}
            </>
          );
        })}
      </Grid>
    </>
  );
}
export default DashboardGrid;
