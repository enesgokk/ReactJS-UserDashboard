import React from 'react'
import Profile from "../icons/Profile.png"
import CreditCart from "../icons/CreditCard.png"
import CloudServer from "../icons/CloudServer.png"
import Settings from "../icons/Setting.png"

const Sidebar = () => {
    return (
        <div className="backgroundSidebar">
                <a href="#"> <img src={Profile}/> Faturalar</a>
                <a href="#"> <img src={CreditCart}/> Odeme Yöntemleri</a>
                <a href="#"> <img src={CloudServer}/> Hizmetler</a>
                <a href="#"> <img src={Settings}/> Ayarlar</a>
        </div>
    )
}
export default Sidebar;
