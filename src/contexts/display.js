import React, { useState } from "react"

export const DisplayContext = React.createContext()

const DisplayProvider = ({ children }) => {
  const [introHeight, setIntroHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)

  const config = {
    introHeight,
    setIntroHeight,
    footerHeight,
    setFooterHeight,
  }

  return (
    <DisplayContext.Provider value={config}>{children}</DisplayContext.Provider>
  )
}

export default DisplayProvider
