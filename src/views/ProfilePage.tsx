import { ProfileSVG } from "components/custom/CustomSVG";
import ProfileAvatar from "components/profile/ProfileAvatar";
import { ProfileDiv } from "components/profile/StyledProfile";
import { PageTitle } from "layouts/StyledLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import avatarImg from "assets/avatar/6.png";
import image from "assets/img/Yume Sushi_0 3.png";
import ProfileInfo from "components/profile/ProfileInfo";

const ProfilePage: React.FC = () => {
  const profileData: any = {
    avatar: avatarImg,
    title: "Wiara Care",
    subtitle: "Sarajevo",
    phone: "+378 33 680 400",
    location: "Kalibunar, 72273 Travnik, Bosnia",
    image: image,
    Bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    schedule: [
      { day: "Monday", time: "8:00 - 23:00" },
      { day: "Tuesday", time: "8:00 - 23:00" },
      { day: "Wednesday", time: "13:00 - 23:00" },
      { day: "Thursday", time: "15:00 - 23:00" },
      { day: "Friday", time: "9:00 - 17:00" },
      { day: "Saturday", time: "9:00 - 18:00" },
      { day: "Sunday", time: "8:00 - 23:00" },
    ],
  };
  const { t } = useTranslation();
  return (
    <ProfileDiv>
      <PageTitle>
        <ProfileSVG />
        {t("profile.title")}
      </PageTitle>
      <ProfileAvatar
        data={{
          avatar: profileData.avatar,
          title: profileData.title,
          subtitle: profileData.subtitle,
        }}
      />
      <ProfileInfo data={profileData} />
    </ProfileDiv>
  );
};

export default ProfilePage;
