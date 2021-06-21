import React, {useState} from "react";
import s from './footer.module.css'
import {settings} from "../../company/companyPage";

export const Footer = () => {

    const [shakeCompany, setShakeCompany] = useState(false);
    const [shakeWork, setShakeWork] = useState(false);
    const [shakeCareers, setShakeCareers] = useState(false);
    const [shakeContact, setShakeContact] = useState(false);

    const animate = (set:any) => {

        set(true);
        setTimeout(() => set(false), 1000);
    }

    return <div className={s.footer}>
        <div {...settings}  className={s.footer_logo}>
            <img alt={"logo-simple.svg"}
                 src="https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5dbc29afc0a72841e8d7e045_temy-logo-simple.svg"/>
        </div>
        <div {...settings} className={s.foot_bar}>
            <div className={s.footer_navbar}>
            <div className={s.links_wrapper}>
                <a onClick = {() => animate(setShakeCompany)} className = {[shakeCompany && "shake"].join(" ")} href={"/"}>Company</a>
                <a onClick = {() => animate(setShakeWork)} className = {[shakeWork && "shake"].join(" ")} href={"/"}>Work</a>
                <a onClick = {() => animate(setShakeCareers)} className = {[shakeCareers && "shake"].join(" ")} href={"/"}>Careers</a>
                <a onClick = {() => animate(setShakeContact)} className = {[shakeContact && "shake"].join(" ")} href={"/"}>Contact us</a>
            </div>
            </div>
        </div>
        <div className={s.widgets}>
            <a {...settings} className={s.logoText}>REVIEW ON</a>
            <a {...settings} target={"_blank"}
               href={'https://clutch.co/profile/temy?utm_source=widget&utm_medium=widget_2&utm_campaign=widget&utm_content=logo'}
               className={s.clutch}/>
            <div {...settings} className={s.stars}>
                <img  className={s.star}
                     src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g data-name="Layer 2"><path class="cls-1" d="M5.94 9.38l-3.11 1.88a.5.5 0 01-.75-.54l.83-3.53L.17 4.81a.5.5 0 01.29-.87l3.6-.31L5.48.3a.5.5 0 01.92 0l1.41 3.33 3.61.31a.49.49 0 01.28.87L9 7.19l.82 3.53a.5.5 0 01-.74.54z" data-name="Layer 1"/></g></svg>'}/>
                <img className={s.star}
                     src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g data-name="Layer 2"><path class="cls-1" d="M5.94 9.38l-3.11 1.88a.5.5 0 01-.75-.54l.83-3.53L.17 4.81a.5.5 0 01.29-.87l3.6-.31L5.48.3a.5.5 0 01.92 0l1.41 3.33 3.61.31a.49.49 0 01.28.87L9 7.19l.82 3.53a.5.5 0 01-.74.54z" data-name="Layer 1"/></g></svg>'}/>
                <img className={s.star}
                     src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g data-name="Layer 2"><path class="cls-1" d="M5.94 9.38l-3.11 1.88a.5.5 0 01-.75-.54l.83-3.53L.17 4.81a.5.5 0 01.29-.87l3.6-.31L5.48.3a.5.5 0 01.92 0l1.41 3.33 3.61.31a.49.49 0 01.28.87L9 7.19l.82 3.53a.5.5 0 01-.74.54z" data-name="Layer 1"/></g></svg>'}/>
                <img className={s.star}
                     src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g data-name="Layer 2"><path class="cls-1" d="M5.94 9.38l-3.11 1.88a.5.5 0 01-.75-.54l.83-3.53L.17 4.81a.5.5 0 01.29-.87l3.6-.31L5.48.3a.5.5 0 01.92 0l1.41 3.33 3.61.31a.49.49 0 01.28.87L9 7.19l.82 3.53a.5.5 0 01-.74.54z" data-name="Layer 1"/></g></svg>'}/>
                <img className={s.star}
                     src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><g data-name="Layer 2"><path class="cls-1" d="M5.94 9.38l-3.11 1.88a.5.5 0 01-.75-.54l.83-3.53L.17 4.81a.5.5 0 01.29-.87l3.6-.31L5.48.3a.5.5 0 01.92 0l1.41 3.33 3.61.31a.49.49 0 01.28.87L9 7.19l.82 3.53a.5.5 0 01-.74.54z" data-name="Layer 1"/></g></svg>'}/>
            </div>
            <a {...settings} className={s.reviews}>7 REVIEWS</a>
        </div>
        <div  className={s.footer_links}>
            <img {...settings}
                src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d63c562a93ad99078d5957b_youtube.svg"}/>
            <img {...settings} src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d63c5625bf4d8af872b35ab_medium.svg"}/>
            <img {...settings}
                src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5e8c9318915e52b2da25dd18_behance.svg"}/>
        </div>
        <p className={s.copyright}>© Team Technologies Development Center LLP - software development company, founded in
            the year 2014</p>

    </div>

}