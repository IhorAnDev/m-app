import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return             <div className={s.content}>
        <div>
            <img  src='https://img1.goodfon.ru/wallpaper/nbig/2/c3/priroda-kanada-gory-ozera-les-3801.jpg'/>

        </div>
        <div>
            <img
                src='https://s.starladder.com/uploads/user_logo/3/3/a/5/thumb_270_dbb1e4500882f7efa41a1b8ee4eb3c74.jpg'/>

            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>

}
export default Profile;