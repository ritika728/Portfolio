import './landing.css'
import DrawerAppBar from "../../Components/Navigation/navigation.jsx";
import { useState } from 'react';
import ContactForm from '../../Components/Contact/contact.jsx'
import Achievements from '../../Components/Achievements/achievement.jsx';
import Projects from '../../Components/Projects/projects.jsx';

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
