import React from 'react'

function Movieheading(props) {
  return (
      <div className="col ms-4 mt-4">
        <h3>{props.heading}</h3>
      </div>
  );
}

export default Movieheading