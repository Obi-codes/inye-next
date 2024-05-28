import React, { Fragment } from "react";
import CustomImage from "@/customComponents/ImageComp";
import { Box, ListItem, ListItemText } from "@mui/material";
import RightArrow from "../../../public/assets/rightarrow.png";

const ListItems = ({ array }) => {
  return (
    <Fragment>
      {array?.map((item, i) => (
        <ListItem
          key={`${item.id}.${i}`}
          sx={{
            p: 4,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgba(255, 206, 33, 0.03)",
              p: 1,
              mr: 4,
            }}
          >
            <CustomImage
              src={item.mainImage}
              alt={item.alt}
              width={22}
              height={22}
              unoptimized={false}
            />
          </Box>
          <ListItemText
            primary={item.title}
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "-0.6px",
              fontFamily: "SF Pro Display",
            }}
          />
          <CustomImage
            src={RightArrow}
            alt={"arrow"}
            width={22}
            height={22}
            unoptimized={false}
          />
        </ListItem>
      ))}
    </Fragment>
  );
};

export default ListItems;
