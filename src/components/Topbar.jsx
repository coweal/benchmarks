import React from "react";
import './../css/components/Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="headline">
          <span className="headlineText">Online Community Management Benchmarks</span>
        </div>
        <div className="clarification">
          <span className="clarificationText">These benchmarks are based on <a href='https://practical-cm.com/t/public-online-community-management-industry-benchmarks/19'>analysis</a> of publicly available online communities. Last update of the benchmarks was on March 10th, 2025. Have any questions or suggestions? Please post them on <a href='https://practical-cm.com/'>practical-cm.com</a> or <a href="mailto:nicolas.chabanovsky@gmail.com" target="_blank">send me an email</a></span>
        </div>
      </div>
    </div>
  );
}
export default Topbar;