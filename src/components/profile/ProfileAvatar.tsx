import React from "react";
import Button from "components/custom/Button/Button";
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
  btnData: any;
};

const ProfileAvatar = ({ data, btnData }: AvatarData) => {
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
              {btnData?.attributes.name}
              <img
                src={btnData?.attributes.icon._url}
                alt={btnData?.attributes.icon._name}
                color="white"
              />
            </>
          }
          onClick={() => {}}
          color={"#" + btnData?.attributes.color}
          borderLine={"#" + btnData?.attributes.color}
          font="#ffffff"
        />
      </BeautyButtonDiv>
    </ProfileAvatarDiv>
  );
};

export default ProfileAvatar;
