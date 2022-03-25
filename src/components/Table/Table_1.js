import React from 'react'
import "./Table_1.css"

const data = [
    { name: "TTF", rank: 1, image: "/images/Papio.jpg"},
    { name: "LWO", rank: 2, image: "/images/dog.jpg"},
    { name: "LHM", rank: 3, image: "/images/shiba.jpg"},
  ];

function Table_1() {
  return (
    <>
      <div className="t1_box">
        <h3>PK Rank</h3>
        <div className="t1_list">
          <div className="t1_imgBx">
            <img src={process.env.PUBLIC_URL + data[0].image} />
          </div>
          <div className="t1_content">
            <h2 className="t1_rank"><small>#</small>{data[0].rank}</h2>
            <h4>{data[0].name}</h4>
          </div>
        </div>
        <div className="t1_list">
          <div className="t1_imgBx">
            <img src={process.env.PUBLIC_URL + data[1].image} />
          </div>
          <div className="t1_content">
            <h2 className="t1_rank"><small>#</small>{data[1].rank}</h2>
            <h4>{data[1].name}</h4>
          </div>
        </div>
        <div className="t1_list">
          <div className="t1_imgBx">
            <img src={process.env.PUBLIC_URL + data[2].image} />
          </div>
          <div className="t1_content">
            <h2 className="t1_rank"><small>#</small>{data[2].rank}</h2>
            <h4>{data[2].name}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table_1