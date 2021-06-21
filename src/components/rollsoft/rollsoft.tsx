import React, {useState} from "react";
import s from './rollsoft.module.css'
import {settings} from "../company/companyPage";


export const Rollsoft = () => {

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {
        set(true);
        setTimeout(() => set(false), 1000);
    }

    return (
        <div className={s.rollsoft_section}>
            <div className={s.rollsoft}>
                <div className={s.slider_container}>
                    <div className={s.rollsoft_wrapper}>
                        <div className={s.image_wrapper}>
                            <a><img {...settings} className={s.rollsoft_img}
                                    src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d8b63983d7d1866000ba268_Rollsoft-mock-slider-p-800.png"}/></a>
                        </div>
                        <div {...settings} className={s.company_data}>
                            <img  {...settings} {...settings} className={[s.rollsoft_logo, 'contrast'].join(" ")}
                                 src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d8b64870d9991d95dd343e0_rollsoft-logo-horizontal-p-500.png"}/>
                            <h1 {...settings} className={s.rollsoft_heading}>Debts<br/>Reconciliation<br/>System</h1>
                            <p {...settings} className={[s.rollsoft_paragraph, s.tranc_text].join(" ")}>Our team
                                designed this app, to help businesses
                                stabilize their liquidity by reconciling debts with uncollected claims. This
                                system is intuitive for users and automates time-consuming manual steps at the
                                same time.</p>
                            <div {...settings} className={s.rollsoft_tags}>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>FinTech</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>UX/UI</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Web</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Design System</a>
                            </div>
                            <div className={s.roll_but_wrapper}   {...settings}>
                                <div onClick={() => animate(setShake)}
                                     className={[shake && "shake", s.rollsoft_button, 'contrast'].join(" ")}>
                                    VIEW CASE STUDY
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}