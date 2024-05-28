import React from 'react'
import style from './GalleryView.module.css'
import GalleryCard from "../GalleryCardComponent/GalleryCard";
import OverViewBtn from "../OverviewAndBtnComponent/OverViewBtn";
import { galleryItems } from "../../utils/data";

const GalleryView = () => {
  return (
    <div className={style.mainDiv}>
      <OverViewBtn />
      <div className={style.galleryCardDiv}>
        {galleryItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GalleryView
