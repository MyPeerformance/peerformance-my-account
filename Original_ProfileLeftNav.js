import "./ProfileLeftNav.css";
import Union from "../assets/Union.png";

const MENU_ITEMS = [
  { id: 1, name: "Study Details" },
  { id: 2, name: "Payments" },
  { id: 3, name: "Account Settings" },
  { id: 4, name: "Security" },
  { id: 5, name: "Manage data access requests" },
];

function ProfileLeftNav({ handleSettingClick, selectedMenu }) {
  return (
    <div>
      <h2 id="profileHeader" style={{ color: "white", marginLeft: "25px" }}>
        <img
          src={Union}
          alt="Settings Icon"
          style={{ marginRight: "10px", position: "absolute", left: "35px" }}
        />
        Manage Account
      </h2>

      <hr className="ProfileHr" />
      <ul className="ProfileLeftNav" role="listbox">
        {MENU_ITEMS.map((item) => (
          <li
            key={item.id}
            role="option"
            value={item.id}
            onClick={(e) => handleSettingClick(e)}
            className={selectedMenu === item.id ? "greenBack" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileLeftNav;
