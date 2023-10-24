import React, { useEffect, useState } from "react";
import api from "../services/Api";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import modalStyle from "./Modal.module.css";
import { CharacterSlider } from "./characterSlider";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from "swiper/modules";


export function Modal(props: any) {
    const [comic, setComic] = useState();
    const { status, setStatus } = props;

    async function getData() {
        await api
            .get("/comics/" + props.modalId, {
                params: {
                    ts: import.meta.env.VITE_APP_API_TSL,
                    apikey: import.meta.env.VITE_APP_API_KEY,
                    hash: import.meta.env.VITE_APP_API_HASH
                }
            })
            .then( ( response: { data: React.SetStateAction<undefined>; } ) => setComic( response.data ) )
            .catch( ( err: string ) => {
                console.log( "An error ocourring " + err)
            } );
    }
    
    useEffect(() => {
         getData();
    }, []); 

    function closeButton(_event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setStatus(false)
    }
    
    if ( typeof comic !== 'undefined' ) {
        const charactersList = comic.data.results[0].characters.items

        return (
            <div id="modal-box"  className={modalStyle.modal} > 
                <div className={modalStyle.modalBody}>
                    <div id="close_button" className={modalStyle.close} onClick={ event => closeButton( event ) }>x</div>
                    <div> 
                        <img src={ comic.data.results[0].thumbnail.path + "." + comic.data.results[0].thumbnail.extension } />
                    </div>
                    <div className={modalStyle.modalDescription}>
                        <h2> { comic.data.results[0].title } </h2>
                        <div>
                            { ReactHtmlParser(comic.data.results[0].description) }
                        </div> 
                        <h4 className={modalStyle.character_list_title}> Character list </h4>
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={3}
                            modules={[Navigation]}
                            navigation
                            pagination={{ clickable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            >
                            {
                                charactersList.map( ( character: any ) => {
                                    let characterId = character.resourceURI.replace("http://gateway.marvel.com/v1/public/characters/", "")
                                    return (
                                        <SwiperSlide >
                                            <CharacterSlider key={characterId} characterId={characterId} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        )
    } 
}