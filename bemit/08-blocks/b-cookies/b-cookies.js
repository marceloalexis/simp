import React, {useState, useEffect} from "react"
import OContainer from "../../07-objects/o-container/o-container"
import OCol from "../../07-objects/o-col/o-col"
import Cookies from "js-cookie"
import classNames from "classnames"


const BCookies = () => {

    const p = 'b-cookies';
    const cookiesSlug = 'simpello';
    const necessaryCookiesName = 'a-cookies__necesary-cookies-' + cookiesSlug;
    const [isVisibleAdvice, setIsVisibleAdvice] = useState(true);

    const arrayClasses = [
        { [`${p}`]       : p},
        { [`is-active`]  : isVisibleAdvice }
    ]

    let classes = classNames(arrayClasses);
    classes = classes.split(' ').join(' | ');

    const handleDeclineAll = () => {
        Cookies.set(necessaryCookiesName, 'disallow');
        setIsVisibleAdvice(true);
    }

    const handleAcceptAll = () =>{
        Cookies.set(necessaryCookiesName, 'accept' , { expires: 30 });
        setIsVisibleAdvice(true);
    }

    useEffect(() => {
        const necessaryCookies = Cookies.get(necessaryCookiesName);

        if(necessaryCookies){
            setIsVisibleAdvice(false);
        }else{
            setIsVisibleAdvice(true);
        }

    }, []);

    return(
        
        <div className={`${classes}`}>
            <OContainer p={p}>
                <OCol p={p} cols={{sm:4 , md:4 , lg:7 }} extraClasses={'cc'}>
                    <div className={`${p}__wrapper`}>
                        <div className={`${p}__content`}>
                            <p>When browsing this website, your connection and browsing
                            data is processed by Simpello.com to maintain the security 
                            of the website and, if you give us your consent, to obtain 
                            statistical information about your browsing aggregated with 
                            that of other users, personalize content for you and create 
                            advertising audiences. You can exercise your rights and obtain more information 
                            by accessing our privacy and cookies policy.</p>
                        </div>
                    </div>
                </OCol>
                <OCol p={p} cols={{sm:4 , md:2 , lg:3 }} extraClasses={'cb'}>
                    <div className={`${p}__wrapper btns-c`}>
                        <span onClick={handleAcceptAll} className={'button-cookies wh'}>Reject</span>
                        <span onClick={handleDeclineAll} className={'button-cookies bb'}>Accept</span>
                    </div>
                </OCol>
            </OContainer>
        </div>
    )
}

export default BCookies