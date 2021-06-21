import main from "../company/companyPage.module.css";
import s from './why_temy.module.css'
import {relevance} from "../../store/state";
import React from "react";
import {settings} from "../company/companyPage";

export const WhyTemy = () => {

    return <div className={main.body_container}>
        <div className={main.section_container}>
            <div className={s.why_temy_section}>

                <div {...settings} className={[main.heading_2_wrapper, s.rel_subtitle].join(" ")}>
                    <h4 className={main.heading_2}>YOUR TECH PARTNER</h4></div>
                <h1 {...settings} className={[main.main_heading_1, s.rel_title].join(" ")}>Why Temy?</h1>
                <div className={s.rel_items_container}>
                    <div className={s.rel_items}>
                        {relevance.map((e) => <div {...settings} className={s.rel_wrapper}>
                            <img {...settings} className={s.rel_item_img}
                                 src={e.icon}
                                 alt={e.icon.split("_")[1].split(".")[0]}/>
                            <h1 {...settings} className={s.rel_item_title}>{e.title}</h1></div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}