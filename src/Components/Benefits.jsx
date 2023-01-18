import React from "react";
import "../assets/styles/benefits.css"
import frame from "../assets/images/benefits/Frame.png"
export default function Benefits(){
    return (
        <div className="bene_page">
        <div className="benefits">
            <div>
            <strong style={{fontSize:"26px",display: "block",paddingTop:"55px",paddingBottom:"34px",fontFamily:"Manrope"}}>Key Benefits</strong>

            <div className="tags">
                <div className="col1">
                    <li style={{marginBottom:"30.5px"}}><div className="btn-bene btn-1"></div>Average Salary: <strong style={{paddingLeft:"3px"}}>$116K</strong></li>
                    <li style={{marginBottom:"30.5px"}}><div className="btn-bene btn-2"></div>Average Salary Growth:<strong style={{paddingLeft:"3px"}}> 24%</strong> </li>
                    <li><div className="btn-bene btn-3"></div><strong>Top Job roles</strong></li>
                </div>
                <div className="col2">
                <li style={{marginBottom:"30.5px"}}><div className="btn-bene btn-4"></div><strong style={{paddingRight:"3px"}}>Top 20 </strong>Highest Paying Jobs</li>
                    <li style={{marginBottom:"30.5px"}}><div className="btn-bene btn-5"></div><strong style={{paddingRight:"3px"}}>Top companies </strong>Hiring</li>
                    <li ><div className="btn-bene btn-6"></div><strong style={{paddingRight:"3px"}}> Top companies </strong>Hiring</li>
                </div>
                
            </div>
            </div>
            <div style={{marginRight:"125px",display:"block"}}>
              
                <img src={frame} className="imgg" />
            </div>


        </div>
        </div>
    )
}