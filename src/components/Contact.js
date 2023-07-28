import React from "react";

const Contact = () => {
  return (
    <>
      <div className="card mb-3" style={{marginTop:"7%",marginLeft:"2%",marginRight:"2%",backgroundColor:"#C0C0C0",borderRadius:"17px",border:"2px solid black"}}>
        <div className="row g-0">
          <div className="col-md-4" >
            <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="img-fluid rounded-start" alt="error" style={{border:"1px solid black"}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize:"170%"}}>Mail</h5>
              <p className="card-text" style={{fontSize:"150%"}}>
                for any query or complaint feel free to reach us out via e-mail by clicking the link provided below
              </p>
              <p className="card-text">
                <small className="text-body-secondary" style={{fontSize:"110%"}}>
                  click the link below to compose a mail to us
                </small>
              </p>
              <a href="mailto:thakurdeepanshu420@gmail.com" target="_blanck" alt="error"><button type="button" className="btn btn-primary" style={{border:"1px solid black"}}>Compose</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{marginTop:"7%",marginLeft:"2%",marginRight:"2%",backgroundColor:"#C0C0C0",borderRadius:"17px",border:"2px solid black"}}>
        <div className="row g-0">
          <div className="col-md-4" >
            <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="img-fluid rounded-start" alt="error" style={{border:"1px solid black"}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize:"170%"}}>LinkedIn</h5>
              <p className="card-text" style={{fontSize:"150%"}}>
              follow the link below to view my linkedin profile and feel free to communicate your ideas and suggestions.
              </p>
              <p className="card-text">
                <small className="text-body-secondary" style={{fontSize:"110%"}}>
                  view the profile
                </small>
              </p>
              <a href="https://www.linkedin.com/in/deepanshu-thakur-92a17a262" target="_blanck" alt="error"><button type="button" className="btn btn-primary" style={{border:"1px solid black"}}>View</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
