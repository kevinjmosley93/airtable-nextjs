import React, { useState } from 'react'

const data = ({ newBud }) => {
  const [info, setInfo] = useState([])
  newBud.map(bud => {
    console.log('this is data', bud)
  })
  return <>this is data</>
}

export default data
