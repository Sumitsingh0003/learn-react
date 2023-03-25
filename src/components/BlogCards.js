import React from "react";
import CardArr from "./CardsArra";

const BlogCards = () => {
  return (
    <>
      <section className="cards bg-gray">
        <div className="container">
          <div className="row">
            {CardArr.map((val, ind) => {
              return (
                <React.Fragment key={ind}>
                  <div className="col-md-4" >
                    <div className="cards_bx">
                      <img src={val.cardImg} alt="props" />
                      <div className="card_cont_bx">
                        <h3>{val.cardName}</h3>
                        <p>{val.cardCont}</p>
                        <a href="#." className="blog_btn">
                          {val.cardBtn}
                        </a>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCards;
