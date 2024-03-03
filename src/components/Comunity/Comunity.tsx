import React from "react";
import { Login } from "@mui/icons-material";

const comunity = ({ width }) => {
  return (
    <div className="app__awards-comunity">
      <div className="app__awards-comunity-info">
        <p>
          <span>Join our Undertale community! </span>
          {width > 800 && (
            <span>
              Share theories, fanart, memes, and more. Connect with fans and
              explore the universe together. See you there!
            </span>
          )}
        </p>
        <a href="#">
          GO <Login style={{ fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default comunity;
