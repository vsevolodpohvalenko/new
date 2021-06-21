import React, { useState} from 'react'
import s from './header.module.css'
import cn from "classnames";
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () =>{

    const [active, setActive] = useState(false)
    const [shakeCompany, setShakeCompany] = useState(false);
    const [shakeWork, setShakeWork] = useState(false);
    const [shakeCareers, setShakeCareers] = useState(false);
    const [shakeContact, setShakeContact] = useState(false);

    const animate = (set:any) => {

        set(true);
        setTimeout(() => set(false), 1000);
    }

    return <div>
        <header className={cn({ [s.active] : active},s.header)}>
            <a href="/" className={s.logo}><img alt={"temy-logo-simple"} className={s.logo_img} src={"https://assets.website-files.com/5d2593d4e31f05ed4edd50f5/5dbc29afc0a72841e8d7e045_temy-logo-simple.svg"}/></a>
            <div  onClick={() => setActive(!active)} className={cn({[s.active]: active}, s.menu_toggle)}><FontAwesomeIcon style={{fontSize: '20px'}} icon={faBars} /></div>
            <nav className={cn({ [s.active] : active})}>
                <ul >
                    <li><NavLink onClick = {() => animate(setShakeCompany)} className = {[shakeCompany && "shake", s.link].join(" ")} to="/company">Company</NavLink></li>
                    <li><NavLink onClick = {() => animate(setShakeWork)} className = {[shakeWork && "shake", s.link].join(" ")} to="/work">Work</NavLink></li>
                    <li><NavLink onClick = {() => animate(setShakeCareers)} className = {[shakeCareers && "shake", s.link].join(" ")} to="#">Careers</NavLink></li>
                    <li><NavLink onClick = {() => animate(setShakeContact)} className = {[shakeContact && "shake", s.link, s.contact].join(" ")} to="#">Contact us</NavLink></li>
                </ul>
            </nav>
            <div className={s.clearfix}/>
        </header>
    </div>
}