import React from 'react'

function UserItem(props) {
  return (
    <>
        <li className="user__item">
                <div className="user__item__link">
                    <figure className="user__item__pic-wrap">
                        <img src={props.src} alt="" className="user__item__img"/>
                    </figure>
                </div>
                <div className="user__item__info">
                    <h5 className="user__item__text">{props.text}</h5>
                </div>
            </li>
    </>
  )
}

export default UserItem