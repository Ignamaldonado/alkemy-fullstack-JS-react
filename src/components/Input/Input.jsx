

const Input = ({ id, label, type, placeholder, setValue, value }) => {
  return (
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
    id={id}
    placeholder={placeholder}
    onChange={setValue}
    value={value}
    />
    </div>
    </>
  )
}

export default Input