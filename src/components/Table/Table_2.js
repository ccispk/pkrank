import React from 'react'
import "./Table_2.css"

const data = [
    { name: "YPM", rank: 1, image: "/images/cat.jpg"},
    { name: "CSW", rank: 2, image: "/images/fox.jpg"},
  ];

function Table_2() {
  return (
    <>
      <div className="t2_box">
        <h3>Poor Rank</h3>
        <div className="t2_list">
          <div className="t2_imgBx">
            <img src={process.env.PUBLIC_URL + data[0].image} />
          </div>
          <div className="t2_content">
            <h2 className="t2_rank"><small>#</small>{data[0].rank}</h2>
            <h4>{data[0].name}</h4>
          </div>
        </div>
        <div className="t2_list">
          <div className="t2_imgBx">
            <img src={process.env.PUBLIC_URL + data[1].image} />
          </div>
          <div className="t2_content">
            <h2 className="t2_rank"><small>#</small>{data[1].rank}</h2>
            <h4>{data[1].name}</h4>
          </div>
        </div>

      </div>
    </>
  )
}

export default Table_2