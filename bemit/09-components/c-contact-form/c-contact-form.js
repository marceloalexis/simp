import React from "react";
const CContactForm = ({dataContact}) =>{

    const p = 'c-contact-form';

    return(
        <div className={`${p}`}>
            <form>
                <div className={`${p}__wrapper-field`}>
                    <p className={`${p}__title-first`}>But first, let us know, which department you would like to contact</p>
                    <div className={`${p}__field-radio`}>
                        <input id="corporate" type="radio" name="department_contact" value="Corporate"  />
                        <label htmlFor={"corporate"} >Corporate</label>
                    </div>
                    <div className={`${p}__field-radio`}>
                        <input id="finance" type="radio" name="department_contact" value="Finance"  />
                        <label htmlFor={"finance"}  >Finance</label>
                    </div>
                    <div className={`${p}__field-radio`}>
                        <input id="mkt" type="radio" name="department_contact" value="Sales & Marketing"  />
                        <label htmlFor={"mkt"}  >Sales & Marketing</label>
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>You should have a name and last name*</p>
                    <div className={`${p}__field`}>
                        <input id="full_name" type="name" placeholder="Write here your full name"/>
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>And an e-mail*</p>
                    <div className={`${p}__field`}>
                        <input id="full_name" type="email" placeholder="Write here your email"/>
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>How about a phone number?*</p>
                    <div className={`${p}__field`}>
                        <input id="full_name" type="tel" placeholder="Write here your phone number"/>
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>Are you contacting on behalf of a company?</p>
                    <div className={`${p}__field`}>
                        <input id="full_name" type="text" placeholder=""/>
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>Now write down your message*</p>
                    <div className={`${p}__field`}>
                        <textarea id="full_name" type="text" placeholder="You message"/>
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <div className={`${p}__field-submit`}>
                    <input type="submit" value="Send"/>
                    </div>    
                </div>
            </form>
        </div>
    )
}
export default CContactForm