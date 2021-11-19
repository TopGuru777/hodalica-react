import { ProfileSVG } from "components/custom/CustomSVG";
import ProfileAvatar from "components/profile/ProfileAvatar";
import { ProfileDiv } from "components/profile/StyledProfile";
import { PageTitle } from "layouts/StyledLayout";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProfileInfo from "components/profile/ProfileInfo";
import Footer from "layouts/footer";
import { getProfileAction } from "action/action";
import Spinner from "components/custom/Spinner/Spinner";
import ProfileContext from "context/profile";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const { profileContext, setProfileContext } = useContext<any>(ProfileContext);

  useEffect(() => {
    const getProfileFunc = async () => {
      setLoading(true);
      const res = await getProfileAction();
      setProfileContext(res);
      setProfile(res);
      setLoading(false);
    };
    if (profileContext) setProfile(profileContext);
    else getProfileFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <ProfileDiv>
        <PageTitle>
          <ProfileSVG />
          {t("profile.title")}
        </PageTitle>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </ProfileDiv>

      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
