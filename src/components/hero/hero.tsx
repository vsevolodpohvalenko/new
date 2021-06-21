import s from "./hero.module.css";
import main from '../company/companyPage.module.css'
import {motion} from "framer-motion";
import {clients} from "../../store/state";
import React, {useEffect, useState} from "react";
import {settings} from "../company/companyPage";

export const Hero = () => {

    const text = [
        "Mobile Apps",
        "Cyber Security",
        "Cloud Solutions",
        "Software QA",
        "Internet of Things",
        "Product Design",
        "Big Data",
    ];

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {

        set(true);
        setTimeout(() => set(false), 1000);
    }

    const [index, setIndex] = useState(0);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (index < 6) {
                setIndex(index + 1);
            } else setIndex(0)
        }, 5000)

        return () => {
            clearInterval(myInterval);
        };
    });

    return <div className={s.hero_section}>
        <div className={main.section_container}>
            <div className={main.heading_container}>
                <div {...settings} className={s.titles_wrapper}>
                    <h4 className={[main.heading_2, main.heading_2_wrapper, s.subtitle_board].join(" ")}>Software
                        Development
                        Company</h4>
                    <div className={s.title_board}>
                        <h1 {...settings} className={[main.main_heading_1].join(" ")}>We deliver</h1>
                        <br/>

                        <div className={main.grad_wrapper}>{text.map((e, i) => index === i && <motion.h1
                            {...settings}
                            initial={{opacity: 0}}
                            animate={{opacity: [0, 1, 0]}}
                            transition={{delay: 0.3, duration: 4}}
                            className={[main.grad_text, main.main_heading_1].join(" ")}>{e}
                        </motion.h1>)}</div>
                        <div {...settings} className={main.main_button_wrapper}>
                            <a href={"/contact"}>
                                <div onClick={() => animate(setShake)}
                                     className={[shake && "shake", main.main_button].join(" ")}>GET IN TOUCH
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div {...settings} className={[main.in_container, s.clients].join(" ")}>
                    <div {...settings} className={[main.clients_left].join(" ")}><h4
                        className={[main.heading_2].join(" ")}>Our
                        Clients</h4></div>
                    <div className={s.clients_right}>
                        {clients.map((e) => <img {...settings} className={s.client}
                                                 src={e.url}
                                                 alt={e.url.split("_")[1].split(".")[0]}/>)}</div>
                </div>
            </div>
        </div>
    </div>
}