import React, {useRef, useEffect} from "react"
import {PhotoCard} from "../PhotoCard"

export const ListOfPhotoCard = () => {
    return (
        <ul>
            {
                [1,2,3,4].map(photo => (<PhotoCard key={photo}/>))
            }
        </ul>
    )
}