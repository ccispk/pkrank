import React from 'react'
import UserItem from './UserItem'
import './UserView.css'

function UserView() {
  return (
    <div className="user-view">
        <h1>Participants</h1>
        <div className="user__container">
            <div className="user__wrapper">
                <ul className="user__items">
                    <UserItem src={process.env.PUBLIC_URL + '/images/fox.jpg'} text="CSW"/>
                    <UserItem src={process.env.PUBLIC_URL + '/images/shiba.jpg'} text="LHM"/>
                    <UserItem src={process.env.PUBLIC_URL + '/images/dog.jpg'} text="LWO"/>
                    <UserItem src={process.env.PUBLIC_URL + '/images/Papio.jpg'} text="TTF"/>
                    <UserItem src={process.env.PUBLIC_URL + '/images/cat.jpg'} text="YPM"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UserView