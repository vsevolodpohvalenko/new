import React, {useState} from 'react'
import s from './reali.module.css'
import {settings} from "../company/companyPage";

export const Reali = () => {

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {
        set(true);
        setTimeout(() => set(false), 1000);
    }

    return <div className={s.reali_section}>
        <div className={s.reali_slider}>
            <div className={'slider_container'}>
                <div className={s.reali_col}>
                    <div className={s.reali_img_container}>
                        <a {...settings} href="https://www.temy.co/customers-collection/reali"><img
                            src="https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d946ec77a88109c9aeb9d68_reali-mock.png"
                            alt=""/>
                        </a>
                    </div>
                    <div className={s.reali_content_container}>
                        <div className={s.reali_content}>
                            <img {...settings} alt={'reali_logo'} src={'https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d56b6a3d1dccfb36490a06f_8986c8bb-120e-49eb-b579-07d289156873-1546548100796.png'} className={s.logo}/>
                            <a href="https://www.temy.co/customers-collection/reali">
                                <h1 {...settings} className={s.reali_heading}>
                                    <strong className={s.bold_text}>Reali Price
                                        Predictor
                                    </strong>
                                </h1>
                            </a>
                            <p {...settings} className={s.reali_paragraph}>
                                We developed a neural network that is trained to predict the prices of houses.
                            </p>
                            <div {...settings} className={s.reali_tags}>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Real Estate</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Web</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Big Data</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>Machine Learning</a>
                                <a href="#" className={[s.tag, s.tag_text].join(" ")}>AI</a>
                            </div>
                            <div {...settings}>
                            <div onClick={() => animate(setShake)} className={[shake && "shake", s.reali_button, 'contrast'].join(" ")}>
                                VIEW CASE STUDY
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}