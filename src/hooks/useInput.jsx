import { useState } from 'react'

const useInput = (id, label, placeholder, type) => {

    const [state, setState] = useState()
  
    const Input = () => (
        <>
            <div className='modal-input-container'>
            <label 
            className='modal-label'
            htmlFor={id}
            >
                {label}
            </label>

            <input 
            className='modal-input'
            type={type}
            id= {id}
            placeholder={placeholder}
            onChange={e => setState(e.target.value)}
            value={state}
            />
            </div>
        </>
    )


    return [ state , Input ] 
}

export default useInput