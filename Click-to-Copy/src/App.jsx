import { useState } from 'react'
import './App.css'

function App() {

    const [c, setC] = useState("FLASHSALE2023")
    const [t, setT] = useState("คัดลอก")

    function clicked(){
        setT("คัดลอกคูปองแล้ว!!")
        navigator.clipboard.writeText(c)
    }

    return (
        <>
            <div className='body'>

                <div className='container'>
                    <h3>คลิกรับคูปองส่วนลด 50%</h3>
                    <input type="text" className='coupon' defaultValue={c} onChange={(e) => setC(e.target.value)} />
                    <button className='btn' onClick={clicked} >{t}</button>

                </div>

            </div>
        </>

    )
}

export default App

