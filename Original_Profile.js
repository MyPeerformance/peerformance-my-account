import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import NavigationHeader from "../NavBar";
import ProfileLeftNav from "./ProfileLeftNav";
import ProfileStudyData from "./ProfileStudyData";
import ProfilePayments from "./ProfilePayments";
import AccountSettings from "../my-account/AccountSettings";

// Styles
import "./Profile.css";

function Profile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sourceNum = parseInt(queryParams.get("source"));

  const [renderOptions, setRenderOptions] = useState(sourceNum || 1);
  const [selectedMenu, setSelectedMenu] = useState(sourceNum || 1);

  function RenderSettings() {
    if (renderOptions === 1) return <ProfileStudyData />;
    if (renderOptions === 2) return <ProfilePayments />;
    if (renderOptions === 3) return <AccountSettings />;
    return null;
  }

  useEffect(() => {
    const newSource = parseInt(queryParams.get("source"));
    if (!isNaN(newSource)) {
      setRenderOptions(newSource);
      setSelectedMenu(newSource);
    }
  }, [sourceNum]);

  function handleSettingClick(e) {
    const value = parseInt(e.target.value);
    setSelectedMenu(value);
    setRenderOptions(value);
  }

  return (
    <div style={{ backgroundColor: "rgb(35, 45, 83)", minHeight: "100vh", overflow: "auto" }}>
      <NavigationHeader />

      <div
        className="row"
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          height: "calc(100vh - 60px)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            color: "white",
            width: "328px",
            padding: "2rem 2rem 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ marginLeft: "13px" }}>
            <ProfileLeftNav handleSettingClick={handleSettingClick} selectedMenu={selectedMenu} />
          </div>
        </div>

        <div style={{ width: "20px" }}>
          <div
            style={{
              borderLeft: "2px solid #313B65",
              height: "100%",
              marginTop: "0",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            padding: "2rem 2rem 4rem",
            overflowY: "auto",
            marginTop: "0",
          }}
        >
          {RenderSettings()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
