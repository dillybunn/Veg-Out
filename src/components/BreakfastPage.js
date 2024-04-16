import React, {useState} from "react";
import BreakfastList from "./BreakfastList";
import NavBar from "./NavBar";

function BreakfastPage() {
    
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="menu">
      <NavBar />
      <h2>Breakfast Menu</h2>
      <BreakfastList 
        menuItems={menuItems}
        setMenuItems={setMenuItems}
      />
    </div>
  );
}

export default BreakfastPage;
