import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import HookProfileStatus from "./HookProfileStatus";
import userPhoto from "../../../assets/img/user.webp";


const ProfileInfo = ({isOwner,profile,status,updateStatus,savePhoto}) => {
    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e)=>{
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ||  userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <HookProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;