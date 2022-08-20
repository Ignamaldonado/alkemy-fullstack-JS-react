import { useState } from 'react'

const useActive = (initialState=false) => {

    const [active, setActive] = useState(initialState)

    const setToggle = () => setActive(!active)

    return {active, setToggle}
}

export default useActive