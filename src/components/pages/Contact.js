import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import styled from "styled-components"

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
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'title') {
      setTitle(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrMessage('Your email address is invalid');
      return;
    } else if (!title) {
      setErrMessage('Please enter a title for your email')
      return;
    } else if (!message) {
      setErrMessage('Please enter a message in your email')
      return;
    } 

    // Handle Email Send

    setEmail('');
    setTitle('');
    setMessage('');
    alert(`Email has been sent!`);
  }

  return (
    <div>
      <br></br>
      <h1 className='centered'>Contact Me</h1>
      <form className="form">
        <h4>Email</h4>
        <Input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          size = '0.5em'
        />
        <h4>Email Title</h4>
        <Input
          value={title}
          name="title"
          onChange={handleInputChange}
          type="text"
          placeholder="email title"
          size = '0.5em'
        />
        <h4>Email Message</h4>
        <MessageInput
          value = {message}
          name = 'message'
          onChange={handleInputChange}
          type="message"
          placeholder = "email message"
          rows = {5}
          size = '5em'
        />
        <br></br>
        <button onClick={handleFormSubmit}>
          Send
        </button>
      </form>
      {errMessage && (
        <div>
          <p className="error-text">{errMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact
