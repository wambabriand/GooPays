import React from 'react';

function ContactUs (){
    return (<div className="container">

        <div className="row  pt-5">
            <div className="col-md-2"> </div>
            <div className="col-md-8"> 
                <h2 style={{textAlign:'center'}}> Contactez Nous </h2>
                <div className='alert alert-success'>
                    <p>   Nous pouvons vous aider
                    T’chat, email, réseaux sociaux, téléphone... Contactez-nous à tout moment, 
                    nous répondrons avec plaisir. Retrouvez nous rapidemment grâce à la 
                    bulle présente sur tout votre parcours !
                    </p>
                </div> 
                <div className='alert alert-success'>
                    <p>Par appel ou WhatSapp </p>
                    <p>Depuis le Cameroun au (+237) 697979687 ou </p>
                    <p>Depuis l'Italie au (+39) 327 978 2779   ou  (+39) 351 738 8242</p>
                </div>
                <div className='alert alert-success'>
                    <p>Réseaux Sociaux </p>
                    <div className='row'>
                        <div className='col-md-6'>  
                            <p>Facebook </p> 
                        </div>
                        <div className='col-md-6'>  
                            <p>Email: </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>  
                            <p>Instagram </p> 
                        </div>
                        <div className='col-md-6'>  
                            <p>Snapchat </p>
                        </div>
                    </div>
                       
                    
                       
                    
                    
                </div>
            </div>
            <div className="col-md-3"> </div>

        </div>
    </div>);
}

export default ContactUs;
