import React from 'react'
import { useEffect } from 'react'

export default function Alert({list, setAlert, msg, type}) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({show: false, msg: "", type: ""})
        }, 2000)
        return () => clearTimeout(timeout)
    }, [list])

  return (
    <div className={`text-center p-1 font-bold ${type == "error" ? "text-rose-600" : type == "complete" ? "text-green-600" : ""}`}>{msg}</div>
  )
}
