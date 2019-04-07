import React, { useRef } from 'react'
import { withRouteData, Head } from "react-static";
import Title from '../components/Title'

const Apply = () => {
  const emailInput = useRef()

  const sendEmail = () => {
    fetch('/.netlify/functions/email', {
      method: 'POST',
      body: JSON.stringify({email: emailInput.current.value})
    })
  }

  return (
    <div className="flex-column apply">
      <Head>
        <title>Apply | Hidden Willows Townhomes</title>
      </Head>
      <Title>Apply</Title>
      <form>
        <input type='email' name='email' ref={emailInput}/>
        <button type='button' onClick={sendEmail}>Request Application</button>
      </form>
    </div>
  )
}
export default withRouteData(Apply)
