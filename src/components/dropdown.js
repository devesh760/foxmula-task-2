import "../App.css";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const DropDown = ({week}) => {
    let [show,setShow] = useState(week==2?true:false)
    let [toggleClass,setToggle] = useState(week===2?'active':'')
    
    let toggleHandler = () =>{
        if(toggleClass === ''){
            setToggle('active')
        }
        else if(toggleClass === 'active'){
            setToggle('deactive')
        }
        else{
            setToggle('active')
        }
        setShow(!show)
    }
  return (
    <div className="drop">
      <div
        onClick={toggleHandler}
        style={{ borderTop: week === 1 ? "none" : "1px solid rgba(0,0,0,0.1)" }}
        className="click"
      >
        <p>WEEK {week}</p>
        <AiOutlineRight
          className="icon"
          style={{ transform:show? "rotate(90deg)" : null }}
        />
      </div>
      <div className={["items", toggleClass,].join(" ")}>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
      </div>
    </div>
  );
};

export default DropDown;
