import React, { ReactNode, useEffect, useState } from "react";
import api from "../services/Api";

import style from "./CharacterSlider.module.css";

interface CharacterData {
    data: {
        results: {
            name: String;
            description: String
            thumbnail: {
                path: string;
                extension: string;
            };
        }[]
    }
}

export function CharacterSlider(props: any,) {
    const characterId = props.characterId;

    const [ characters, setCharacters ] = useState<CharacterData | null>(null);
    

    async function getData() {
        await api
            .get<CharacterData>("/characters/" + characterId, {
                params: {
                    ts: import.meta.env.VITE_APP_API_TSL,
                    apikey: import.meta.env.VITE_APP_API_KEY,
                    hash: import.meta.env.VITE_APP_API_HASH
                }
            })
            .then( ( response: { data: React.SetStateAction<CharacterData | null> } ) => setCharacters( response.data ) )
            .catch( ( err: string ) => {
                console.log( "An error ocourring " + err)
            } );
    }

    useEffect( () => {
        getData()
    }, []); 

    if ( typeof characters !== 'undefined' ) {
        return (
            <div className={style.character_slider_box}>
                <div>  <img src={ characters?.data.results[0].thumbnail.path + "." + characters?.data.results[0].thumbnail.extension } alt="" className="" /> </div>
                <div>
                {characters?.data.results[0].name}
                </div>
            </div>
        )
    }
}