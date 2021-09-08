import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface ExpenseProps {
    color?: string,
    width?: number,
    height?: number,
}

const  ExpenseIcon = ({height = 40, width = 40, color = "#FFF"}: ExpenseProps)=>{
    return (
        <Svg
            height = {height}
            width = {width}
            viewBox="0 0 576 512"
        >
            <Path
                fill= {color}
                fillRule = "evenodd"
                d="M306.34,343.86c0,19.95-13.05,33.74-36.17,38v8c0,5.22-1.68,6.9-6.9,6.9H249.11c-5,0-6.9-1.68-6.9-6.9v-7.64c-18.27-2.8-30.2-11.93-36-27.22q-2.52-7.27,5-10.06l12.68-4.48c5.41-2,8-.93,10.44,4.48,3,7.64,9.88,11.37,20.51,11.37,14.17,0,21.25-3.92,21.25-11.94,0-7.45-7.27-9.88-22-11.37-10.44-1.31-15.85-1.87-25.36-5.59a32.36,32.36,0,0,1-11.55-6.53c-5.78-5-10.63-14.54-10.63-26.65,0-19.58,12.49-33,35.61-36.72v-7.65c0-5,1.86-6.71,6.9-6.71h14.17c5.22,0,6.9,1.68,6.9,6.71v7.65c15.1,2.61,25.73,10.62,32.06,24.23,2.8,5.22,1.49,8-4.29,10.44L285.09,298c-5,2.24-7.46,1.49-10.26-3.73-3.73-7.27-8.57-10.81-18.82-10.81-13.23,0-18.83,2.8-18.83,10.81,0,6.9,7.83,9.51,22.18,11a130,130,0,0,1,21.25,3.54,36.42,36.42,0,0,1,10.07,4.29C299.07,318.14,307.09,327.83,306.34,343.86ZM256,512c-324.62,0-150.83-289-99.09-365.56a38.35,38.35,0,0,1,.39-62.75L145,58.64A40.77,40.77,0,0,1,147,19,39.72,39.72,0,0,1,180.64,0a50.09,50.09,0,0,1,37.72,17.09,50,50,0,0,1,75.28,0A50,50,0,0,1,331.28,0,39.75,39.75,0,0,1,365,19a40.77,40.77,0,0,1,2,39.64l-12.28,25a38.35,38.35,0,0,1,.39,62.75C406.83,223,580.62,512,256,512ZM166.4,115.2A12.81,12.81,0,0,0,179.2,128H332.8a12.8,12.8,0,0,0,0-25.6H179.2A12.81,12.81,0,0,0,166.4,115.2ZM168,47.38,182.42,76.8H329.58L344,47.38a15.32,15.32,0,0,0-.73-14.9,14.09,14.09,0,0,0-12.06-6.88,24.79,24.79,0,0,0-22.8,15.59,15.92,15.92,0,0,1-29.54,0,24.58,24.58,0,0,0-45.75,0,15.92,15.92,0,0,1-29.53,0A24.82,24.82,0,0,0,180.72,25.6a14.06,14.06,0,0,0-12,6.88A15.32,15.32,0,0,0,168,47.38ZM329.1,153.6H182.92C141.08,213,61.87,351.95,99.39,426.92,119.15,466.39,171.84,486.4,256,486.4s136.88-20,156.62-59.51C450.19,351.75,371,212.91,329.1,153.6Z"
            />
        </Svg>
    )
}

export default ExpenseIcon;