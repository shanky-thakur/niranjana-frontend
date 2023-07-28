import React from 'react'

const BookComponent = (props) => {
  return (
    <>
      <div style={{ marginLeft: "12%", border: "none" }}>
        <div
          className="card bg-transparent text-centre mx-20 my-3"
          style={{ border: "none" }}
        >
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.tag}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="background.avif"
            className="card-img-top"
            style={{ border: "none" }}
          />
          <div
            className="card-body bg-transparent text-center"
            style={{ border: "none" }}
          >
            <h5 className="card-title text-center" style={{ color: "white" }}>
              {props.title}
            </h5>
            <a
              href={props.link}
              target="_blanck"
              className="btn btn-sm btn-primary text-center"
            >
              open
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookComponent