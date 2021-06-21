import s from "./yupmu.module.css";
import React, {useState} from "react";
import {settings} from "../company/companyPage";

export const Yumpu = () => {

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {
        set(true);
        setTimeout(() => set(false), 1000);
    }

    return (
        <div className={s.yumpu_section}>
            <div className={s.lesara}>
                <div className={"slider_container"}>
                    <div className={s.yumpu_wrapper}>

                        <div className={s.company_data}>
                            <a className={s.yumpu_logo}>
                                <img {...settings}
                                    src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5e96f6cd875f7b86180cd9c4_Yumpu_Logo_RGB-p-500.png"}/>
                            </a>
                            <a {...settings} className={s.a_heading}><h1 className={s.yumpu_heading}>Yumpu News</h1></a>
                            <p {...settings} className={[s.yumpu_paragraph, s.tranc_text].join(" ")}>We have developed a mobile app
                                where users can discover and read digital versions of magazines.</p>
                            <div {...settings} className={s.yumpu_tags}>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Publishing</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>EBooks</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>IOS</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Android</a>
                            </div>
                            <div {...settings}>
                            <div onClick={() => animate(setShake)} className={[shake && "shake", "constrast", s.lesara_button].join(" ")}>
                                VIEW CASE STUDY
                            </div>
                                </div>
                        </div>
                        <div className={s.image_wrapper}>
                            <a className={s.img_block}><img {...settings} className={s.yumpu_img}
                                                            src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5e8f204eb1c84d03b52cf7e9_cover-yumpu-ios-app-p-500.png"}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}