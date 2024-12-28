import React from 'react'

const PropsComponent = (props) => {
  return (
    <div>
      <>
        <h2>{props.name}</h2>
        <h2>{props.id}</h2>
        <h2>{props.phone}</h2>
      </>
    </div>
  )
}

export default PropsComponent
