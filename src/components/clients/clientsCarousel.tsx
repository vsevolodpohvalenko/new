import React from 'react';
// @ts-ignore
import Slider from 'infinite-react-carousel';
import s from './clientsCarousel.module.css'
import './slider_modifying.css'
import {settings} from "../company/companyPage";

export const ClientsCarousel = ({clients_representatives} :any) => {

    return (
        <div {...settings} className={s.slider}>
            <Slider  {...settings}>
                {clients_representatives.map((e: any, i: number) => <div {...settings} className={s.slide_wrapper} key={i}>
                        <div className={s.slide}>
                            <div {...settings} className={[s.slide_left].join(" ")}><h4 className={s.subheading}>WHAT OUR CLIENTS
                                SAY</h4></div>
                            <img {...settings}  alt={'Shape'} className={s.comma} src={'https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d5be935da745a6d959c72b0_Combined%20Shape.svg'}/>
                            <div   className={s.quote}><p>{e.quote}</p></div>
                            <img {...settings}  alt={e.avatar} className={s.avatar} src={e.avatar}/>
                            <div  className={s.c_data}>
                            <div  className={s.author_name}>{e.name}</div>
                            <div  className={s.author_position}>{e.position}</div>
                            <div className={s.youtube}>
                                <img {...settings} alt={'youtube'} src={'https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5d5be89ebb48f71c826c6f7a_youtube.svg'}/>
                                <a {...settings} href={e.youtube} rel="noreferrer" target="_blank" className={s.link}>Watch video Feedback</a>
                            </div>
                            </div>
                                <img {...settings} alt={'logo'} className={s.logo} src={e.logo}/>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    );
}