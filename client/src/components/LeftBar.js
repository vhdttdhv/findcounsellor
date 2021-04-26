import { React, useState } from "react";
import "./LeftBar.css";
import { Button } from "@material-ui/core";
function LeftBar() {
  const SMALLSIZE = "10%";
  const BIGSIZE = "40%";
  const [leftbarSize, setleftbarSize] = useState(BIGSIZE);

  const resizeLeftbar = () => {
    if (leftbarSize === BIGSIZE) setleftbarSize(SMALLSIZE);
    else setleftbarSize(BIGSIZE);
  };
  return (
    <div className="leftbar" style={{ width: leftbarSize }}>
      <Button
        fullWidth={true}
        onClick={resizeLeftbar}
        color="secondary"
        variant="text"
      >
        <div className="leftbar-item leftbar-firsti">
          <i className="fas fa-bars"></i>
        </div>
      </Button>

      <Button fullWidth={true} color="primary" variant="text">
        <div className="leftbar-item">
          <i className="far fa-calendar-plus"></i>
          {leftbarSize === BIGSIZE ? "Upcoming" : ""}
        </div>
      </Button>

      <Button fullWidth={true} color="secondary" variant="text">
        <div className="leftbar-item">
          <i className="fas fa-history"></i>
          {leftbarSize === BIGSIZE ? "History" : ""}
        </div>
      </Button>

      <Button fullWidth={true} color="secondary" variant="text">
        <div className="leftbar-item">
          <i className="fas fa-plus"></i>
          {leftbarSize === BIGSIZE ? "New" : ""}
        </div>
      </Button>
    </div>
  );
}

export default LeftBar;
