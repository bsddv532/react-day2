import React, { useState } from 'react'

const FunctionComponent = () => {

    const [click, setClick] = useState(false)
    const [count, setCount] = useState(0)
 

  return (
    <div>
        <h1>Function Component</h1>

        {
            click && <h3>Conditinal rendering using Function Component</h3> 
        }
        
        <button onClick={() => setClick(!click)}>{click ? <p>HIDE</p> : <p>SHOW</p>}</button>
        <br />
        <button onClick={() => setCount(count+1)}>Button clicked {count} times</button>
    </div>
  )
}

export default FunctionComponent