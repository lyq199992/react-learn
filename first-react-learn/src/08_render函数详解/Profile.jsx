import React, { memo } from 'react'

const Profile = memo((props) => {
  return (
    <div>Profile: {props.message}</div>
  )
})

export default Profile