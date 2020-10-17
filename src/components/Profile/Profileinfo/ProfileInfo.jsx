import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import HookProfileStatus from "./HookProfileStatus";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
            <HookProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;