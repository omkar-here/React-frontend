import React from "react";
import "../assets/styles/topics.css"
import fixed_width from "../assets/images/skills/fixed-width.png"
export default function Topics(){
    return (
    <div className="topic">
        <div style={{textAlign: "center",letterSpacing: "0.005em",fontSize: "1.5rem",color: "#FB5741",paddingTop:"3.5rem",fontFamily:"Inter"}}>Curriculum</div>
         <div style={{fontStyle: "normal",fontWeight: "800",fontSize: "2.6rem",lineHeight: "3.6rem",textAlign:"center",fontFamily:"Manrope"}}>Topics covered</div>
        <section className="topic_sec">
        <div className="tiless_topic" >
            <div className="tilee_topic" style={{width: "22.6rem",
                    height: "14.8rem",padding: "1.5rem 4.0rem 3.5rem 1.5rem"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"1.5rem",color:"#252B42",fontFamily:"Inter",fontWeight:"bold"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "22.6rem",
                    height: "14.8rem",padding: "1.5rem 4.0rem 3.5rem 1.5rem"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"1.5rem",color:"#252B42",fontFamily:"Inter",fontWeight:"bold"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "22.6rem",
                    height: "14.8rem",padding: "1.5rem 4.0rem 3.5rem 1.5rem"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"1.5rem",color:"#252B42",fontFamily:"Inter",fontWeight:"bold"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "22.6rem",
                    height: "14.8rem",padding: "1.5rem 4.0rem 3.5rem 1.5rem"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"1.5rem",color:"#252B42",fontFamily:"Inter",fontWeight:"bold"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "22.6rem",
                    height: "14.8rem",padding: "1.5rem 4.0rem 3.5rem 1.5rem"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"1.5rem",color:"#252B42",fontFamily:"Inter",fontWeight:"bold"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "22.6rem",
                    height: "14.8rem",padding: "1.5rem 4.0rem 3.5rem 1.5rem"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"1.5rem",color:"#252B42",fontFamily:"Inter",fontWeight:"bold"}}>Scrum lifecycle</div></div>
               
            </div>
        </div>
        <div className="curriculum">Download Curriculum</div>
        </section>
    </div>
    )
}