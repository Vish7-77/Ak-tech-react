import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuc = () => {
  const searchQuery =useSearchParams()[0]
  const refnum = searchQuery.get('reference')
  return (
    <div><h1>
      
      payment successful
      </h1>
      
      <h2>
        reference id :  {refnum }
      </h2>
      </div>
  )
}

export default PaymentSuc