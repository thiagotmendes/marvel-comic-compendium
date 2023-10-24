import React, { Key, useEffect, useState } from "react";
import api from "../services/Api";

import { Modal } from "../components/Modal";

import style from "./Home.module.css";

interface ComicData {
    data: {
        results: {
            id: Key | null | undefined;
            title: string;
            thumbnail: {
                path: string;
                extension: string;
            };
        }[];
    }  
}

export function Home() {
    const [comics, setComics] = useState<ComicData | null>(null);
    const [modal, setModal] = useState();
    const [status, setStatus ] = useState(false);

    async function getData() {
        await api
            .get<ComicData>("/comics", {
                params: {
                    ts: import.meta.env.VITE_APP_API_TSL,
                    apikey: import.meta.env.VITE_APP_API_KEY,
                    hash: import.meta.env.VITE_APP_API_HASH
                }
            })
            .then( ( response: { data: React.SetStateAction<ComicData | null> } ) => setComics( response.data ) )
            .catch( ( err: string ) => {
                console.log( "An error ocourring " + err)
            } );
    }

    useEffect( () => {
        getData()
    }, []); 
   
    function addModalToPage( _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, comicId: any ) {
        setModal( comicId );
        setStatus( true );
        _event.preventDefault();
    }

    if ( comics && comics?.data.results.length > 0 ) {
        const comicList = comics?.data.results

        return (
            <>
                <div className="grid grid-cols-4 gap-6">
                {
                    comicList.map ( ( comic ) =>  {
                        return(
                            <a href="#" key={comic.id} className={style.box} onClick={ event => addModalToPage( event, comic.id ) }  > 
                                <div className={style.box_img}>  <img src={ comic.thumbnail.path + "." + comic.thumbnail.extension } alt="" className="" /> </div>
                                <div className={style.title}>
                                { comic.title } 
                                </div>
                            </a>
                        )
                    })
                }
                </div>
                {status && <Modal status={status} setStatus={setStatus} modalId={modal} />}
            </>
        )
    }

    

}