import React from "react";
import Layout from "../components/Layout";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";

const Profile = () => {
  return (
    <Layout>

        <div className="row">
          <div className="col-4"> <ProfileLeft /></div>
          <div className="col-8"> <ProfileRight /></div>
        </div>

    </Layout>
  );
};

export default Profile;
