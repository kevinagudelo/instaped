import React from "react";
import { Imge, Anchor } from "./styles";

const DEFAULT_IMAGE = 'https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg'
export const Category = ({cover = DEFAULT_IMAGE , path, emoji='?'})=>(

    <Anchor href={path}>
        <Imge src={cover}/>
        {emoji}
    </Anchor>
)