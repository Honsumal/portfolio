import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import styled from "styled-components"
import emailjs from '@emailjs/browser'

const Input = styled.input`
  font-size: 1em;
  border-radius: 3px;
  margin: 1em;
  padding: ${props => props.size};
  overflow-wrap: "break-word"
`;

const MessageInput = styled.textarea`
  width: 50%
`

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrMessage('Your email address is invalid');
      return;
    } else if (!name) {
      setErrMessage('Please enter your name')
      return;
    } else if (!message) {
      setErrMessage('Please enter a message in your email')
      return;
    } 

    const fullMessage = message.concat(' Reply to: ', email)

    // Handle Email Send
    emailjs.send("service_n9ljrsq","template_cqlqoql",{
      from_name: name,
      message: fullMessage,
      }).then((result) => {
        console.log(result.text)
        setEmail('');
        setName('');
        setMessage('');
        alert(`Email has been sent!`)
      }, (error) => {
        console.log(error.text)
        alert(`Something went wrong, please try again`)
      });
  }

  return (
    <div>
      <br></br>
      <h1 className='centered'>Contact Me</h1>
      <p>Please fill in the form below to contact me. Alternatively, click the link in the footer to be directed to your email app of choice.</p>
      <form className="form">
        <h4>Email</h4>
        <Input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          size = '0.5em'
        />
        <h4>Your Name</h4>
        <Input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          size = '0.5em'
        />
        <h4>Email Message</h4>
        <MessageInput
          value = {message}
          name = 'message'
          onChange={handleInputChange}
          type="message"
          placeholder = "Email Message"
          rows = {5}
          size = '5em'
        />

        <button onClick={handleFormSubmit}>
          Send
        </button>
      </form>
      {errMessage && (
        <div>
          <p className="error-text">{errMessage}</p>
        </div>
      )}
      <script type="text/javascript">
        (function(){
            emailjs.init("4ZHfidS7IRAPGItnw")
        })();
      </script>
    </div>
  );
}

export default Contact
