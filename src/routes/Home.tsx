import React, { useEffect, useState } from "react";
import api from "../services/Api";

import { Modal } from "../components/Modal";

import style from "./Home.module.css";

export function Home() {
    const [comics, setComics] = useState(  );
    const [modal, setModal] = useState();
    const [status, setStatus ] = useState(false);

    async function getData() {
        await api
            .get("/comics", {
                params: {
                    ts: import.meta.env.VITE_APP_API_TSL,
                    apikey: import.meta.env.VITE_APP_API_KEY,
                    hash: import.meta.env.VITE_APP_API_HASH
                }
            })
            .then( ( response: { data: React.SetStateAction<undefined>; } ) => setComics( response.data ) )
            .catch( ( err: string ) => {
                console.log( "An error ocourring " + err)
            } );
    }

    useEffect( () => {
        getData()
    }, []); 
   
    function addModalToPage( _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, comicId: React.Key | null | undefined ) {
        setModal( comicId );
        setStatus( true );
        _event.preventDefault();
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-6">
            {
                comics?.data.results.map ( ( comic: { id: React.Key | null | undefined; thumbnail: { path: string; extension: string; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; } ) =>  {
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