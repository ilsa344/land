import React from 'react';
const Second=(props)=>{
    let lg=props.second[0].row.map((v,i)=>{
        return(
            <div class="col-lg-4" key={i}>
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class={v.icon}></i>
            </div>
            <h3>{v.h3}</h3>
            <p class="lead mb-0">{v.p}</p>
          </div>
        </div>
        )
    })
    return(
        <div>
<section class="features-icons bg-light text-center">
    <div class="container">
      <div class="row">
        {lg}
      </div>
    </div>
  </section>
        </div>
    )
}
export default Second