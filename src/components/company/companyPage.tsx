import React from 'react'
import s from './companyPage.module.css'
import {Header} from "../layout/header/header";
import {Footer} from '../layout/footer/footer'
import {ClientsCarousel} from '../clients/clientsCarousel';
import {Rollsoft} from "../rollsoft/rollsoft";
import {Yumpu} from "../yumpu/yumpu";
import {Reali} from "../reali/reali";
import {Fcg} from "../fcg/fcg";
import {Like} from "../like/like";
import {clients_representatives} from "../../store/state";
import {WhyTemy} from "../why_temy/why_temy";
import {Hero} from "../hero/hero";


export const settings = {
    'data-aos': "fade-up",
    'data-aos-delay': "0",
    'data-aos-duration': "1000",
};

export const CompanyPage = () => {
    return (
        <div>
            <Header/>
            <div className={s.content}>
                <Hero/>
                <div className={s.slider_container}>
                    <div className={s.body_container}>
                        <div className={s.slide5}>
                            <div className={s.feedback_content}>
                                <ClientsCarousel clients_representatives={clients_representatives}/>
                            </div>
                        </div>
                    </div>
                </div>
                <WhyTemy/>
                <Rollsoft/>
                <Yumpu/>
                <Reali/>
                <Fcg/>
                <div className={s.slider_container}>
                    <div className={s.body_container}>
                        <div className={s.slide5}>
                            <div className={s.feedback_content}>
                                <ClientsCarousel clients_representatives={clients_representatives}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Like/>
            </div>
            <Footer/>
        </div>
    )
}