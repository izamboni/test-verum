import { useState } from "react"

const usePicker = () => {
    const [isActive, setIsActive] = useState(false)

    const handlePicker = () => setIsActive(prev => !prev)

    return { isActive, handlePicker }
}

export default usePicker;