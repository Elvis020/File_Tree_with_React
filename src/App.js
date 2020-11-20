import React, { useState } from "react";
import "./app.css";
function App() {
  return (
    <>
      <Folder name="My_Desktop">
        <Folder name="Music">
          <File name="all_star.mp3" />
          <File name="express.mp4" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications" />
    </>
  );
}
const Folder = ({ name, children }) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div>
      <span onClick={() => setisOpen(!isOpen)} style={{ cursor: "pointer" }}>
        <i className=" blue folder icon"></i>
        <i className={`${isOpen ? "caret down icon" : "caret right icon"}`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};
const File = ({ name }) => {
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    mp3: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };
  return (
    <h5 className="spacey">
      <span>
        <i className={`${fileIcons[fileExtension]} icon`}></i>
      </span>
      {name}
    </h5>
  );
};
export default App;
