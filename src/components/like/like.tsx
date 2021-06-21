import s from './like.module.css'
import main_style from '../company/companyPage.module.css'
import React, {useState} from "react";
import {settings} from "../company/companyPage";

export const Like = () => {

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {
        set(true);
        setTimeout(() => set(false), 1000);
    }

    return <div className={s.like_section}>
        <div className={main_style.body_container}>
            <div className={"section_container"}>
                <div className={s.heading_container}>
                    <div className={s.like_grid}>
                        <div {...settings} className={[main_style.heading_2_wrapper, s.left].join(" ")}>
                            <h4 className={main_style.heading_2}>
                                LEARN MORE <br/> ACT NOW
                            </h4>
                        </div>
                        <div className={s.right}>
                                <h1 {...settings} className={main_style.main_heading_1}>
                                    Do you have any questions?
                                </h1>

                            <div {...settings} className={[main_style.grad_wrapper].join(" ")}><h1 className={[main_style.grad_text, main_style.main_heading_1].join(" ")}>Let's talk</h1></div>
                            <div className={main_style.main_button_wrapper}>
                                <a {...settings} href={"/"}>
                                    <div  onClick={() => animate(setShake)} className={[shake && "shake", "contrast", main_style.main_button].join(" ")}>GET IN TOUCH</div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}