import '../LeftBase/LeftBase.css'

const LeftBase = () => {
    return (
        <div id='left-base'>

            <div id='leds-container'>

                <div id='big-led'></div>

                <div id='small-led-container'>
                    <div className='small-led' id='green-led'></div>
                    <div className='small-led' id='red-led'></div>
                    <div className='small-led' id='yellow-led'></div>
                </div>

            </div>



            <div id='screen-container'>
                <div id='screen-border'>
                    <div id='screen'>

                    </div>
                </div>
            </div>



            <div id='bottom'>
                <div id='bottom-container'>
                    <div id='round-button'></div>
                    <div id='green-screen'></div>

                    <div id='d-pad'>
                        <div className='d-pad-button'></div>
                        <div className='d-pad-button'></div>
                        <div></div>
                        <div className='d-pad-button'></div>
                        <div className='d-pad-button'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBase