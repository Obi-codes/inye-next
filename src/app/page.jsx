"use client";
import React from "react";
import dynamic from "next/dynamic";
import profile1 from "../../../public/assets/DefaultPic.png";
import { useState } from "react";
const GalleryDetailed = dynamic(
  () => import("@/personComp/GalleryDetailed"),
  { ssr: false }
);

// import CreateProject from "src/adminComp/CreateProject/index.js";
import OverViewBtn from "@/personComp/OverviewAndBtn";
import style from './AdminHomePage.module.css'
import NoReporting from "@/adminComp/NoReporting";
import TrackingProgress from "@/adminComp/TrackingProgress";
import {TodayDate} from "@/toolkit/actions";
import {ProjectNameDisplay} from "@/toolkit/actions"
const AdminHomePage = () => {
  const data = {
    id: 1,
    profilePic: profile1,
    name: ProjectNameDisplay(),
    date: TodayDate(),           
    quantity: "30 Person",
    amount: "$250",
  };

  const adminButtonArray = [
    {
      id: 1,
      title: "Gallery", //dashboard
    },
    {
      id: 2,
      title: "Reporting",
    },
  ];
  const [selectedButton, setSelectedButton] = useState(1);
  const [showTrackingProgress, setShowTrackingProgress] = useState(false);
  const [showReporting, setShowReporting] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    setShowTrackingProgress(buttonId === 'Dashboard');

  };
  const handleNoReportingButtonClick = () => {
    setShowTrackingProgress(true);
  };
  const handleBackFromDetailView = () => {
    setShowDetailView(false); // Set state to hide the detailed view
  };
  const backButton = showDetailView ? (
    <button className={style.backButton} onClick={handleBackFromDetailView}>{"< Back "}</button>
  ) : null;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#141316",
      height: "150vh",
      flex: 1,
    }}>

      <div className={style.mainDiv} style={{ width: "90%", padding: "3vw" }}>
        <OverViewBtn
          btnArray={adminButtonArray}
          overViewCss={style.overViewCss}
          backButton={backButton}
          selectedButton={selectedButton}
          setSelectedButton={handleButtonClick}
        />
        {!showReporting ? (
          <GalleryDetailed
            showTrackingProgress={showTrackingProgress}
            setShowTrackingProgress={setShowTrackingProgress}
            selectedButton={selectedButton}
            setSelectedButton={handleButtonClick}
            item={data}
            setShowReporting={setShowReporting}
            setShowDetailView={setShowDetailView}
          />
        ) : showTrackingProgress ? (<TrackingProgress setShowTrackingProgress={setShowTrackingProgress} />)
          : <NoReporting
            showTrackingProgress={showTrackingProgress}
            setShowTrackingProgress={setShowTrackingProgress}
            selectedButton={selectedButton}
            setSelectedButton={handleButtonClick}
            item={data}
            showDetailView={showDetailView}
            setShowDetailView={setShowDetailView}
            setShowReporting={setShowReporting} progressPage handleButtonClick={handleNoReportingButtonClick} />
        }
      </div>
    </div>
  )
}

export default AdminHomePage;
