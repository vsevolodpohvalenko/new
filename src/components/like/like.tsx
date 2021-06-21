import s from './like.module.css'
import main from '../company/companyPage.module.css'
import React, {useState} from "react";
import {settings} from "../company/companyPage";

export const Like = () => {

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {
        set(true);
        setTimeout(() => set(false), 1000);
    }

    return <div className={s.like_section}>
        <div className={main.body_container}>
            <div className={"section_container"}>
                <div className={main.heading_container}>
                    <div className={s.like_grid}>
                        <div {...settings} className={[main.heading_2_wrapper, s.left].join(" ")}>
                            <h4 className={main.heading_2}>
                                LEARN MORE <br/> ACT NOW
                            </h4>
                        </div>
                        <div className={s.right}>
                                <h1 {...settings} className={main.main_heading_1}>
                                    Do you have any questions?
                                </h1>
                            <div {...settings} className={[main.grad_wrapper].join(" ")}><h1 className={[main.grad_text, main.main_heading_1].join(" ")}>Let's talk</h1></div>
                            <div className={main.main_button_wrapper}>
                                <a {...settings} href={"/"}>
                                    <div  onClick={() => animate(setShake)} className={[shake && "shake", "contrast", main.main_button].join(" ")}>GET IN TOUCH</div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}