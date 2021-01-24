import React, { useRef } from 'react'

function HistoryChart() {
    const chartRef = useRef()
    return (
        <div>
           <canvas ref={chartRef} id='myChart' width={250} height={250}></canvas> 
        </div>
    )
}

export default HistoryChart
