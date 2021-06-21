import React, {useState} from 'react'
import s from './fcg.module.css'
import {settings} from "../company/companyPage";

export const Fcg = () => {

    const [shake, setShake] = useState(false);

    const animate = (set: any) => {
        set(true);
        setTimeout(() => set(false), 1000);
    }

    return <div className={s.fcg_section}>
        <div className={s.fcg_slider}>
            <div className={'slider_container'}>
                <div className={s.fcg_col}>
                    <div className={s.fcg_img_container}>
                        <a {...settings} href="https://www.temy.co/customers-collection/fcg"><img
                            src='https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5de530883719a1cebbf41b5f_fcg-intro.gif'
                            alt=""/>
                        </a>
                    </div>
                    <div className={s.fcg_content_container}>
                        <div className={s.fcg_content}>
                            <img {...settings} alt={'fcg_logo'}
                                 src={'https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5de5397c747d415ed28299f3_fcg-logo-ed.svg'}
                                 className={s.logo}/>
                            <a href="https://www.temy.co/customers-collection/fcg">
                                <h1 {...settings} className={s.fcg_heading}>
                                    <strong className={s.bold_text}>QA Automation service
                                    </strong>
                                </h1>
                            </a>
                            <p {...settings} className={s.fcg_paragraph}>
                                Frontier Car Group helps automotive sales sector through technology, infrastructure
                                creation and the promotion. The company develops, launches, and runs digital
                                marketplaces enabling their ventures to disrupt used-automotive markets.
                            </p>
                            <div {...settings} className={s.fcg_tags}>
                                <a href="/" className={[s.tag, s.tag_text].join(" ")}>QA</a>
                                <a href="/" className={[s.tag, s.tag_text].join(" ")}>Automation</a>
                                <a href="/" className={[s.tag, s.tag_text].join(" ")}>Automotive</a>
                                <a href="/" className={[s.tag, s.tag_text].join(" ")}>Web</a>
                                <a href="/" className={[s.tag, s.tag_text].join(" ")}>Mobile</a>
                            </div>
                            <div {...settings}>
                            <div  onClick={() => animate(setShake)} className={[shake && "shake", s.fcg_button, 'contrast'].join(" ")}>
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