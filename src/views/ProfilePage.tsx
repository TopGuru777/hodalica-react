import { ProfileSVG } from "components/custom/CustomSVG";
import ProfileAvatar from "components/profile/ProfileAvatar";
import { ProfileDiv } from "components/profile/StyledProfile";
import { PageTitle } from "layouts/StyledLayout";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProfileInfo from "components/profile/ProfileInfo";
import Footer from "layouts/footer";
import { getProfileAction } from "action/action";
import Spinner from "components/custom/Spinner/Spinner";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfileFunc = async () => {
      setLoading(true);
      const res = await getProfileAction();
      setProfile(res);
      setLoading(false);
    };
    getProfileFunc();
  }, []);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <ProfileDiv>
          <PageTitle>
            <ProfileSVG />
            {t("profile.title")}
          </PageTitle>
          <ProfileAvatar
            data={{
              avatar: profile?.attributes?.profilePicture._url,
              title:
                localStorage.getItem("i18nextLng") === "en" ||
                localStorage.getItem("i18nextLng") === "en-US"
                  ? profile?.attributes?.name
                  : profile?.attributes?.nameBS,
              subtitle: profile?.attributes?.city.attributes.name,
            }}
            btnData={profile?.attributes?.category}
          />
          <ProfileInfo data={profile?.attributes} />
        </ProfileDiv>
      )}

      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
