import React from "react";

import Image from "../../components/Image";

import "./style.css";

const ProfilePhoto = () => {
    return (
        <div>
            <Image alt = "Profile Photo" src = "./testImg/photo.jpg" className="profile-photo"/>
        </div>
    )
};

export default ProfilePhoto