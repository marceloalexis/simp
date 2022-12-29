import React, {useState} from "react";
const CContactForm = ({portalId, formId }) =>{
    const p = 'c-contact-form';
    const [valorName, setValorName] = useState('');
    const [valorLastName, setValorLastName] = useState('');
    const [valorCorreo, setValorCorreo] = useState('');
    const [valorPhone, setValorPhone] = useState('');
    const [valorCompany, setValorCompany] = useState('');
    const [valorMessage, setValorMessage] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorCompany, setErrorCompany] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();

      if (valorName.trim() === '') {
        setErrorName(true);
        return;
      }
      setErrorName(false);

      if (valorLastName.trim() === '') {
        setErrorLastName(true);
        return;
      }
      setErrorLastName(false);

      if (valorPhone.trim() === '') {
        setErrorPhone(true);
        return;
      }
      setErrorPhone(false);

      if (valorCompany.trim() === '') {
        setErrorCompany(true);
        return;
      }
      setErrorCompany(false);

      if (valorMessage.trim() === '') {
        setErrorMessage(true);
        return;
      }
      setErrorMessage(false);
  
      if (valorCorreo.trim() === '') {
        setErrorCorreo(true);
        return;
      }
      setErrorCorreo(false);

      var xhr = new XMLHttpRequest();
      var url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
      var data = {
        "fields":[
            {
                "name": "firstname",
                "value": valorName
            },
            {
                "name": "lastname",
                "value": valorLastName
            },
            {
                "name": "lastname",
                "value": valorLastName
            },
            {
                "name": "email",
                "value": valorCorreo
            },
            {
                "name": "company",
                "value": valorCompany
            },
            {
                "name": "message",
                "value": valorMessage
            },
        ],
        "context": {
            "pageUri": "simpello.vercel.app",
            "pageName": "Simpello"
        }
        }
        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');
    
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) { 
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState == 4 && xhr.status == 400){ 
                alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
            } else if (xhr.readyState == 4 && xhr.status == 403){ 
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
            } else if (xhr.readyState == 4 && xhr.status == 404){ 
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
            }
           }
        // Sends the request 
        
        xhr.send(final_data)

    }
    return(
        <div className={`${p}`}>
            <form onSubmit={handleSubmit}>
                <div className={`${p}__wrapper-field`}>
                    <p className={`${p}__title-first`}>But first, let us know, which department you would like to contact</p>
                </div>
                <div className={`${p}__wrapper-field name-c`}>
                    <p>You should have a name and last name*</p>
                    <div className={`${p}__field`}>
                        <input 
                            id="first_name"
                            type="name"
                            placeholder="Write here your first name"
                            value={valorName}
                            onChange={(event) => setValorName(event.target.value)}
                            required
                        />
                    </div>
                    <div className={`${p}__field`}>
                        <input 
                            id="last_name" 
                            type="name" 
                            placeholder="Write here your last name"
                            value={valorLastName}
                            onChange={(event) => setValorLastName(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>And an e-mail*</p>
                    <div className={`${p}__field`}>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Write here your email"
                            value={valorCorreo}
                            onChange={(event) => setValorCorreo(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>How about a phone number?*</p>
                    <div className={`${p}__field`}>
                        <input 
                            id="phone" 
                            type="tel" 
                            placeholder="Write here your phone number"
                            value={valorPhone}
                            onChange={(event) => setValorPhone(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>Are you contacting on behalf of a company?</p>
                    <div className={`${p}__field`}>
                        <input 
                            id="company" 
                            type="text" 
                            placeholder=""
                            value={valorCompany}
                            onChange={(event) => setValorCompany(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={`${p}__wrapper-field`}>
                    <p>Now write down your message*</p>
                    <div className={`${p}__field`}>
                        <textarea 
                            id="message" 
                            type="text" 
                            placeholder="You message"
                            value={valorMessage}
                            onChange={(event) => setValorMessage(event.target.value)}
                            required
                        />
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