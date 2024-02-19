import React from 'react'
import img from './img/demo.webp'


const Card = ({ data }) => {

    return (

        <>
            {
                data.map((val, ind) => {
                    return (
                        <React.Fragment>
                        
                        <div className='col-md-3' style={{marginTop:"100px"}}>
                                <div class="card">
                                    <img src={val.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        
                                        <h5 class="card-title">{val.title}</h5>
                                        <p class="card-text">{val.Dese}</p>
                                        <a href="#" class="btn btn-primary">Add To Cart</a>
                                    </div>
                                </div>
                        </div>
                            

                        </React.Fragment>
                    )
                })
            }
        </>
    )



}
export default Card