import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3 " >
        <div className="col-6 p-5" >
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg: how do I activate F&O, why is my order getting rejected.."/><br/>
            <a href="" className="m-2">Track account opening</a>
             <a href="" className="m-2">Track segment activation</a>
              <a href="" className="m-2">Intraday margins</a>
               <a href="" className="m-2">Kite user manual</a>
        </div>
        <div className="col-6 p-5" >
            <h1 className="fs-3">Featured</h1>
            <ol style={{lineHeight:3}}>
                <li><a href="">Current Takeovers and Delisting – January 2024</a></li>
                 <li><a href="">Latest Intraday leverages – MIS & CO</a></li>
            </ol>
            
        </div>
      </div>
    </section>
  );
}

export default Hero;
