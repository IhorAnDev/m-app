import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
           {/* <div>
                <img className={s.wall} src='https://img1.goodfon.ru/wallpaper/nbig/2/c3/priroda-kanada-gory-ozera-les-3801.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            <ProfileStatus/>
            </div>
        </div>
    )
}
export default ProfileInfo;