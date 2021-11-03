import Button from "components/custom/Button/Button";
import { BeautySVG } from "components/custom/CustomSVG";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  AvatarDesc,
  AvatarDiv,
  AvatarSubTitle,
  AvatarTitle,
  BeautyButtonDiv,
  ProfileAvatarDiv,
} from "./StyledProfile";

type AvatarData = {
  data: any;
};

const ProfileAvatar = ({ data }: AvatarData) => {
  const { t } = useTranslation();
  return (
    <ProfileAvatarDiv>
      <AvatarDiv>
        <img src={data?.avatar} alt="profile avatar" />
        <AvatarDesc>
          <AvatarTitle>{data?.title}</AvatarTitle>
          <AvatarSubTitle>{data?.subtitle}</AvatarSubTitle>
        </AvatarDesc>
      </AvatarDiv>
      <BeautyButtonDiv>
        <Button
          value={
            <>
              {t("buttons.beauty")}
              <BeautySVG />
            </>
          }
          onClick={() => {}}
          color="#8CA4FF"
          borderLine="#8CA4FF"
          font="#ffffff"
        />
      </BeautyButtonDiv>
    </ProfileAvatarDiv>
  );
};

export default ProfileAvatar;
