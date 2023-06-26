import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import styles from "../sass/_em-artistProfile.module.scss";
const MusicDetails = () => {
  return (
    <>
        <div className={`${styles["em-db-content"]}`}>
        <div
          className={`${styles["em-db-content-title"]} d-flex align-items-center justify-content-between`}
        >
          <BsArrowLeftCircle className={styles["em-db-content-title-icon"]} />
          <h2>I Don’t Think That I Like Her</h2>
        </div>

        <div
          className={`${styles["em-db-content-body"]} grid lg:grid-cols-3 grid-cols-1 p-3 mt-2 space-x-2`}
        ></div>

        <div className= "grid lg:grid-cols-2 grid-cols-1 p-3  space-x-2">
          <div className="grid1">
               <img className="w-[363px] left-[46px] h-[366px] rounded-2xl" src="https://via.placeholder.com/363x366" />
               </div>

               <div className='left-[46px] grid grid-cols-2 gap-4'>
               <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="text-neutral-400 text-[16px] font-medium leading-tight">Track Title</div>
      <div className="text-neutral-50 text-[16px] font-medium leading-tight">I Don’t Think That I Like Her</div>
    </div>

               </div>
            </div>


            df
            
        </div>

        

    </>
  )
}

export default MusicDetails