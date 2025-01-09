import React from 'react'
import loading from './s3.gif'

const Spinner = () => {

    return (
      <div className='text-center my-4'>
        <img src={loading}  alt="" style={{width: '60px'}} />
      </div>
    )

}

export default Spinner
