import React, { useEffect, useState, useContext } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Cntx } from "./context/context";
import logo from "./Styleguide/logo_horizontal.svg";
import homeIcon from "./Styleguide/home.svg";
import arrowNext from "./Styleguide/arrow-next.svg";
import bell from "./Styleguide/bell.svg";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  getUser,
  removeUserSession
} from "./Utils/Common";
import {
  getNotificationsData,
  updateNotificationData,
  deleteNotificationData
} from "./store/dashboardActions";
import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "./store/dashboard";
import {
  onNewNotification,
  offSocketNewNotificationListener
} from "./Socket/socket";
import { peerformanceGreen, peerformanceMenuText } from "./colours";

function NavigationHeader(props) {
  const dispatch = useDispatch();
  const user = getUser();
  const history = useHistory();

  const notificationsData = useSelector(
    (state) => state.dashboard.notificationsData
  ).slice().reverse();

  const unReadNotifications = notificationsData.filter(
    (x) => x.isRead === 0
  ).length;

  useEffect(() => {
    dispatch(getNotificationsData());
    const listener = (notification) => {
      dispatch(dashboardActions.addNotification(notification));
    };
    onNewNotification(listener);
    return () => {
      offSocketNewNotificationListener(listener);
    };
  }, [dispatch]);

  const markAsRead = (notiId) => {
    dispatch(updateNotificationData(notiId));
  };

  const deleteNotification = (notiId) => {
    dispatch(deleteNotificationData(notiId));
  };

  const handleLogout = () => {
    removeUserSession();
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ paddingTop: "15px" }}>
        <div className="col-sm-3" style={{ color: "white", width: "355px" }}>
          <a className="navbar-brand" href="/">
            <img
              src={props.logo || logo}
              alt="Peerformance Logo"
              width="260"
              style={{ paddingLeft: "2%" }}
            />
          </a>
        </div>

        <div className="col-md-5" style={{ color: "white", width: "650px", paddingTop: "9px" }}>
          <div className="navbar-row main-navbar">
            <div className="noPadding">
              <img src={homeIcon} alt="Home" width="16" height="22" style={{ paddingBottom: "2px" }} />
              <a href="/dashboard" style={{ color: peerformanceGreen, fontSize: "13px", marginLeft: "5px", textDecoration: "none" }}>Home</a>
            </div>
            <div className="noPadding">
              <a href="https://www.mypeerformance.com/" target="_blank" rel="noopener noreferrer" style={{ color: peerformanceMenuText, fontSize: "13px", textDecoration: "none" }}>About</a>
            </div>
          </div>
        </div>

        <div className="col" style={{ paddingTop: "9px", marginRight: "0px" }}>
          <div className="float-end navbar-right" style={{ paddingRight: "20px" }}>
            <NavDropdown
              title="My Account"
              id="nav-dropdown"
              className="my-account"
              style={{ color: peerformanceMenuText, fontSize: "13px", textDecoration: "none" }}
            >
              <div className="triangle-dropdown"></div>
              <NavDropdown.Item>
                <Link style={{ all: "unset" }} to="/profile?source=1">
                  <div className="dropitem">
                    <p style={{ marginBottom: "0" }}>Study Details</p>
                    <img src={arrowNext} alt="" width="25px" />
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ all: "unset" }} to="/profile?source=2">
                  <div className="dropitem">
                    <p style={{ marginBottom: "0" }}>Payments</p>
                    <img src={arrowNext} alt="" width="25px" />
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ all: "unset" }} to="/profile?source=3">
                  <div className="dropitem">
                    <p style={{ marginBottom: "0" }}>Account Settings</p>
                    <img src={arrowNext} alt="" width="25px" />
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ all: "unset" }} to="/profile?source=4">
                  <div className="dropitem">
                    <p style={{ marginBottom: "0" }}>Security</p>
                    <img src={arrowNext} alt="" width="25px" />
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ all: "unset" }} to="/profile?source=5">
                  <div className="dropitem">
                    <p style={{ marginBottom: "0" }}>Data Requests</p>
                    <img src={arrowNext} alt="" width="25px" />
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                <div className="dropitem">
                  <p style={{ marginBottom: "0" }}>Log Out</p>
                  <img src={arrowNext} alt="" width="25px" />
                </div>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="notification-dropdown"
              autoClose="outside"
              title={
                <span style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon icon={faBell} />
                  {unReadNotifications > 0 && (
                    <span
                      style={{
                        backgroundColor: "#eb5886",
                        borderRadius: "10px",
                        color: "white",
                        padding: "0px 5px",
                        fontSize: "10px",
                        position: "absolute",
                        top: 0,
                        left: "8px",
                      }}
                    >
                      {unReadNotifications}
                    </span>
                  )}
                </span>
              }
            >
              {notificationsData?.map((n) => (
                <NavDropdown.Item
                  key={n.id}
                  style={{ background: "#161c3a", border: "1px solid #353b65" }}
                  eventKey={`3.${n.id}`}
                  className={`notification_item ${+n.isRead === 0 ? "border-left" : ""}`}
                >
                  <div className="notification">
                    <b>Study Update</b>
                    <p>{n.notification}</p>
                    <div className="notiContent">
                      {n.isRead === 0 && (
                        <span
                          onClick={() => markAsRead(n.id)}
                          style={{ color: "#36d481", marginRight: "20px", cursor: "pointer" }}
                        >
                          Mark as read
                        </span>
                      )}
                      <span
                        onClick={() => deleteNotification(n.id)}
                        style={{ color: "#e75e88", marginRight: "10rem", cursor: "pointer" }}
                      >
                        Delete
                      </span>
                      <span style={{ color: "#8F96B4", fontSize: "14px" }}>
                        {new Date(n.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
