import React from 'react'
import style from './ConfirmationCancel.module.css'
import cancelBtn from '../../../public/assets/cancelBtn.png'

import BackBtnHeading from '../BackBtnandHeadingComponent/BackBtnHeading'
import Image from 'next/image'

const ConfirmationCancel = () => {

    const headText = <>Thank you! We've canceled your contribution to <br />
    <span className={style.amount}>
    Healthcare Project.
    </span>  You will receive email receipt </>

    // 
  return (
    <div className={style.mainDiv}>
         <Image
       src={cancelBtn}
       alt="calender"
       width={22}
       height={10}
       unoptimized={false}
       style={{
         borderRadius: "50%",
         marginTop: '-0.5vw',
         marginLeft: '38vw',
         marginBottom: '2vw'
       }}/>
        <BackBtnHeading headText={headText} hideBtn />
       
    </div>
  )
}

export default ConfirmationCancel
