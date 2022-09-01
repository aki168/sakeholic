import React from 'react'

const Dots = () => {
  return (
    <div className="d-none d-md-flex justify-content-center py-5">
      <a href="!#" onClick={(e) => e.preventDefault()}
        style={{ width: "12px", height: "12px" }}
        className="ms-2 border rounded-circle bg-dark border-0">
      </a>
      <a href="!#" onClick={(e) => e.preventDefault()}
        style={{ width: "12px", height: "12px" }}
        className="mx-2 border rounded-circle bg-white border-dark">
      </a>
      <a href="!#" onClick={(e) => e.preventDefault()}
        style={{ width: "12px", height: "12px" }}
        className="me-2 border rounded-circle bg-dark border-0">
      </a>
    </div>
  )
}

export default Dots