import React, { useState, useEffect } from "react";

function Art() {
  const [count, setCount] = useState(10);  

	useEffect(() => {
    if(count > 20){
      document.getElementById('countNumber').style.color = "red";
    } else {
      document.getElementById('countNumber').style.color ="blue";
    }
  },
  [count]);

	return (
    <div>
				<h1> No: <span id="countNumber">{count}</span>.</h1>
				<button onClick={() => setCount(count + 1)}>Tăng giá trị</button><br/>
        <button onClick={() => setCount(count * 2)}>Giảm giá trị</button>
			</div>
	)}; 
// this is life 
export default Art;
