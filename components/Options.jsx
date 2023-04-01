import React from 'react'

const Options = () => {
    const sortByAge = () =>{
        console.log('hi')
    }
  return (
    <div className='container-flex py-2 px-3'>
        <div className="row">
            <div className="col text-end">
                <button onClick={sortByAge} className='btn btn-primary'>Sort by age</button>
            </div>
        </div>

    </div>
  )
}

export default Options