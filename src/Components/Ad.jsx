import React from "react"
import ad_video from "../assets/images/ad/adVideo.png"
import audio from "../assets/images/ad/Audio.png"
import thumbs from "../assets/images/ad/Thumbs Up.png"
 
import ratings from "../assets/images/ad/Ratings.png"

import stud_reg from "../assets/images/ad/Student Registration.png"
import num from "../assets/images/ad/$445.png"

import "../assets/styles/ad.css"
export default function Ad() {
    return (
    <div className="ad">
            <div className="ad-left">
                <section className="ad-nav">
                    <li className="nav-li">Home</li>
                    <li className="tg">&gt;</li>
                    <li className="nav-li">Courses</li>
                    <li className="tg">&gt;</li>
                    <li className="scrum">Scrum</li>
                </section>

                <section className="ad-main">
                    <h1 className="ad-title">Certified ScrumMaster (CSM)® Training & Certification</h1>
                    <div className="ad-content">Accelerate your career by becoming a Certified ScrumMaster®. Our two-day CSM training course will take you through everything you need to know about Scrum. Accelerate your career by becoming a Certified ScrumMaster®. Our two-day CSM training course will take you through everything you need to know about Scrum.</div>
                    <ul className="ad-pts">
                        <li><img src={thumbs}/>99% Exam Pass Rate</li>
                       

                        <li><img src={stud_reg}/>10+ Industry Leading Trainers</li>
                        <li><img src={audio}/>15+ Workshops in a Month</li>
                        <li><img src={audio}/>15+ Workshops in a Month</li>
                    </ul>
                    <img className="ad-img" src={ratings}/>
                </section>
            </div>
        <div className="ad-right">
            <img src={ad_video} className="ad_video" />
            <section className="labels">
                <div className="row1">
                <div className="btn--best_seller">Best Seller</div>
                <div className="btn--tag"><img src={thumbs} className="ad-icon"/>100% positive reviews (1.9k)</div>
                </div>
                <div className="row2">
                <div className="btn--tag"><img src={stud_reg} className="ad-icon"/>1000+ students</div>
                <div className="btn--tag"><img src={audio} className="ad-icon"/>English</div>
                </div>
            </section>
            <div style={{color : " #9A9A9A",fontFamily: "Inter"}} className="line">
                Starting from <span className="line-mid" ><del style={{color : " #9A9A9A"}}>$995</del></span><img src={num} className="num"/>
            </div>
            
        </div>
    </div>

    
    )
}