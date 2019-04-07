import React from 'react'
import { withRouteData, Head } from "react-static";
import Title from '../components/Title'

const Apply = () => {
  return (
    <div className="flex-column apply">
      <Head>
        <title>Apply | Hidden Willows Townhomes</title>
      </Head>
      <Title>Apply</Title>
      <form name="apply" method="post" action="javascript:alert('Success');" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="apply" />
        <input type='email' name='email'/>
        <button type='submit'>Request Application</button>
      </form>
    </div>
  )
}
export default withRouteData(Apply)
