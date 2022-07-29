import React from 'react'

const Tag = ({ tag }) => {
  return (
    <div style={{ padding: "10px", 
    marginLeft: "5px", marginRight: "5px",
    backgroundColor: "pink", borderRadius: "15px", justifyContent: "space-evenly" }}>#{tag}</div>
  )
}

export default Tag