import axios from 'axios'
import { MouseEventHandler, useState } from 'react'
import '../RightBase/RightBase.css'

const RightBase = () => {

    const [data, setData] = useState({})
    const [screen, setScreen] = useState("")
    const [firstType, setFirstType] = useState("")
    const [secondType, setSecondType] = useState("")

    const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
    const pokemonNumber = screen

    const search = () => {
        axios.get(`${API_URL}${pokemonNumber}`)
            .then(res => {
                setData(res)
            })
    }

    let screenText: string = screen

    const numPad = () => {
        let numPadButtons: JSX.Element[] = []

        for (let i = 1; i < 10; i++) {
            numPadButtons.push(
                <button
                    onClick={() => {
                        if (screenText.length < 3 || screenText === "") {
                            screenText = screenText + String(i)
                            setScreen(screenText)
                        } console.log(data)
                    }}
                    key={i}
                    className='numpad-button'
                >{i}</button>
            )
        }

        return numPadButtons
    }

    return (
        <div id='right-base'>

            <div id='right-screen'>
                <p>{screen}</p>
            </div>


            <div id='numpad-container'>
                {numPad()}
                <div className='numpad-button' >0</div>
            </div>


            <div id='white-button-container'>
                <div className='white-button' onClick={search}>Search</div>
                <div className='white-button' onClick={() => { setScreen("") }}>Clear</div>
            </div>

            <div id='type-display-container'>
                <div id='type-displayer-left' className='type-displayer'>{firstType}</div>
                <div id='type-displayer-right' className='type-displayer'>{secondType}</div>
            </div>

        </div>
    )
}

export default RightBase