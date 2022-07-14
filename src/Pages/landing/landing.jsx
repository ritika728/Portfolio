import './landing.css'
import DrawerAppBar from "../../components/navigation/navigation";
import { useState } from 'react';
import ContactForm from '../../components/contact/contact'
import Achievements from '../../components/achievements/achievements';
import Projects from '../../components/projects/projects';

function Landing() {
    const [navBg, setNavBg] = useState(false);
    const changeBackground = () => {
        if (window.scrollY>=75) {
            setNavBg(true);
        }
        else {
            setNavBg(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            {
                navBg === true ? (
                    <>
                        <div className='ch'>
                            <DrawerAppBar />
                        </div>
                    </>

                ) : (
                    <>
                        <DrawerAppBar />
                    </>
                )
            }
        <Projects/>
        <Achievements/>
        <ContactForm/>
        </>
    )
}
 export default Landing;