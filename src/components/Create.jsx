import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Button, Checkbox, Form } from 'semantic-ui-react';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [progress, setProgress] = useState(0)
  let history = useNavigate();

  const postData = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      firstName,
      lastName,
      checkbox,
    }).then(() => {
      history('/read');
    })
  }

  const handleButtonClick = () => {
    if (!checkbox) {
      return;
    }
    postData();   
    setProgress(100); 
  }

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='I agree to the Terms and Conditions'
            onChange={(e) => setCheckbox(!checkbox)}
            checked={checkbox}
          />
        </Form.Field>
        <Button
          type='submit'
          onClick={handleButtonClick}
          disabled={!checkbox}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}