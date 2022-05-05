import { useState } from "react";

function useToggle(initialValue = false) {
  // Saving the piece of state that we recieve from prop
  const [state, setState] = useState(initialValue)

  const toggle = () => {
    setState(!state)
  }
  return [state, toggle]
}

export default useToggle;