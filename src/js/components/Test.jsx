import React from 'react';

const Test =(props)=>{
    let ppl= props.test[0].pplData.map((v,i)=>{
        return(
            <div class="col-lg-4" key={i}>
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src={v.img} alt=""/>
                    <h5>{v.name}</h5>
                    <p class="font-weight-light mb-0">"{v.des}"</p>
                </div>
            </div>
        )
    })
    return(
        <div>
 <section class="testimonials text-center bg-light">
    <div class="container">
      <h2 class="mb-5">{props.test[0].h2}</h2>
      <div class="row">
        {ppl}
      </div>
    </div>
  </section>
        </div>
    )
}
export default Test;