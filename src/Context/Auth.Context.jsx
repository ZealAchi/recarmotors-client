import React, { useState, createContext } from 'react'

export const AuthContext = createContext()
const initialData = {
  data: {
    token: undefined,
    role: undefined,
    name: undefined,

  }
}
export default function AuthContextProvider({ children }) {
  const [state, setState] = useState(initialData)
  const changeState = (value) => {
    setState({ ...state, data: { ...value } })
  }
  return (
    <AuthContext.Provider value={{ ...state, changeState }}>
      {children}
    </AuthContext.Provider>
  )
}