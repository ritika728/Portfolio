import './landing.css'
import DrawerAppBar from "../../Components/Navigation/navigation";
import { useState } from 'react';
import ContactForm from '../../Components/Contact/contact'

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
           
        <ContactForm/>
        </>
    )
}
export default Landing;