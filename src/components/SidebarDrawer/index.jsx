"use client";
import React from "react";
import { Box, Drawer, List, Typography } from "@mui/material";
import { colorSchema } from "@/utils/color";
import CustomImage from "@/customComponents/ImageComp";
import CutIcon from "../../../public/assets/times-square.png";
import UserIcon from "../../../public/assets/user.png";
import ProjectsIcon from "../../../public/assets/folder.png";
import AccountsIcon from "../../../public/assets/users.png";
import BankAccountIcon from "../../../public/assets/inbox.png";
import ListItems from "./listItem";

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const authUser =
    typeof localStorage !== "undefined" &&
    localStorage?.getItem("inyeUserData");

  const listArray = [
    {
      id: 1,
      title: "Edit Admin Profile",
      mainImage: UserIcon,
      alt: "user",
    },
    {
      id: 2,
      title: "Edit Projects",
      mainImage: ProjectsIcon,
      alt: "projects",
    },
    {
      id: 3,
      title: "Switch Accounts",
      mainImage: AccountsIcon,
      alt: "accounts",
    },
    {
      id: 4,
      title: "Connect Bank Account",
      mainImage: BankAccountIcon,
      alt: "bank_account",
    },
  ];

  const personsListArray = [
    {
      id: 1,
      title: "Edit Profile",
      mainImage: UserIcon,
      alt: "user",
    },
    {
      id: 2,
      title: "Connect Bank Account",
      mainImage: BankAccountIcon,
      alt: "bank_account",
    },
    {
      id: 3,
      title: "Switch Accounts",
      mainImage: AccountsIcon,
      alt: "accounts",
    },
  ];

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      //   onClose={}
      sx={{
        backdropFilter: "blur(3px)",
        "& .MuiDrawer-paper": {
          borderTopLeftRadius: "25px",
          borderBottomLeftRadius: "25px",
        },
      }}
      variant="temporary"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: 200, sm: 250, md: 450, lg: 450, xl: 460, xxl: 475 },
          height: "100%",
          backgroundColor: colorSchema.innerBackground,
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Box
          sx={{
            display: "flex",
            p: 4,
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: 40,
              letterSpacing: "-1.2px",
              fontWeight: 800,
              color: "white",
              fontFamily: "SF Pro Display",
            }}
          >
            Menu
          </Typography>
          <CustomImage
            src={CutIcon}
            alt="cut"
            width={26}
            height={2}
            unoptimized={true}
            key={"cut"}
            onClick={toggleDrawer(false)}
            style={{
              cursor: "pointer",
            }}
          />
        </Box>
        <List>
          <ListItems
            array={authUser?.type === "admin" ? listArray : personsListArray}
          />
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
