import React from 'react'
import style from './ReportView.module.css'
import ProfileDiv from '../ProfileDivComponent/ProfileDiv'
import profile4 from '../../../public/assets/profile4.png'
import profileRectangle from '../../../public/assets/reportProfile.png'

import ReportBox from './ReportBox/ReportBox'
import OverViewBtn from '../OverviewAndBtnComponent/OverViewBtn'

const ReportView = () => {
  const items = [
    { id: 1, profilePic: profileRectangle, name: 'Healthcare Project', date: '24/08/2024', time: '02:12:54', amount: '$300' },
    { id: 2, profilePic: profileRectangle, name: 'Education Project', date: '25/08/2024', time: '03:28:04', amount: '$400' },
    { id: 3, profilePic: profileRectangle, name: 'Construction Project', date: '26/08/2024', time: '19:46:45', amount: '$500' },
  ];
  return (
    <div className={style.mainDiv}>
<OverViewBtn/>
    <div className={style.reportDiv}>
      <ProfileDiv item={items[0]} />
      <hr style={{ border: '0', height: '1px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.05)', marginBottom: 0 }} />
      <div className={style.tagsDiv}>
        <span className={style.nameTags}> Project Name</span>
        <span  style={{ marginRight: '-3vw' }}className={style.nameTags}>Reports Date</span>
        <span style={{ marginRight: '1vw' }} className={style.nameTags}>Hours Tracked</span>
      </div>

      {items.map((item) => (
        <ReportBox key={item.id} item={item} />
      ))}
    </div>
    </div>

  )
}

export default ReportView
