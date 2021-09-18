import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface PlusProps {
    color?: string,
    width?: number,
    height?: number,
}

const  PlusIcon = ({height = 40, width = 40, color = "#FFF"}: PlusProps) =>{
    return (
        <Svg
            height = {height}
            width = {width}
            viewBox="0 0 448 512"
        >
            <Path
                fill= {color}
                fillRule = "evenodd"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
        </Svg>
    )
}

export default PlusIcon;