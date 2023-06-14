import React ,{ useState } from 'react'
import "./profile.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import horizontalMoreAction  from "../img/horizontalMoreAction.png"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Profile = () => {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  // Method for upload post 

  const [showPost, setShowPost] = useState(false);

  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true); 

  return (  <div>
    <div className="container shadow mt-3 p-4">
<div className="row">
<div className="col-md-6 d-flex flex-column">
    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Profile Image"  className="img-fluid p-2 profile-pic" />
<p className="ms-3 fs-5 fw-bold">john_doe</p>
<p className="ms-3 fs-5 ">John Doe</p>
<p className="ms-3 fs-5 ">FullStack Developer @ <a href="#" target="_blank" rel="noopener noreferrer">ObifyConsulting</a> |Follow @ <a href="">johndoe</a> | </p>
<p className="ms-3 fs-5 ">My Portfolio on <a href="#">www.johndow.com/</a></p>
</div>
<div className="col-md-6 d-flex flex-column justify-content-between mt-3">
    
    <div className="d-flex justify-content-equal">
        <div className="count-section pe-5 text-center fw-bold">
            <h4>4</h4>
            <p>Posts</p>
            
        </div>
        <div className="count-section px-5 text-center fw-bold">
            <h4>168</h4>
            <p>Followers</p>
           
        </div>
        <div className="ps-5 text-center fw-bold">
            <h4>175</h4>
            <p>Following</p>
        
        </div>
       
        </div>
        {/* Upper Profile Section  */}
         <div className='mx-auto mx-md-0 mt-4'>
             <button type="submit" className="custom-btn-white custom-btn  me-md-3"> 
                    <span className="fs-6 "> Edit Profile </span></button>
                    <button type="submit" className="custom-btn-white custom-btn me-md-3"> 
                    <span className="fs-6" onClick={handlePostShow}>Upload Posts </span></button>
                    </div>
    </div>
</div>
                                                {/* Gallery Section  */}
                                    <div className="row my-3">
                                        <div className="col-12"><hr />
                                        </div>
                               </div>

                                          {/* Card Section  */}
<div className="row mb-4"> 
                                             {/* Card 1 */}
                <div className="col-md-4 col-sm-12"><div class="card"  onClick={handleShow}>
            <img src="https://plus.unsplash.com/premium_photo-1674530449818-76542e0a84d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fEZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Flower Image" />
            
            </div>
</div>
<div className="col-md-4 col-sm-12"> 
                                        {/* Card 2 */}
                        <div class="card mb-md-4" onClick={handleShow}>
                        <img src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fEZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                       
                        </div>
</div>
<div className="col-md-4 col-sm-12"> 
                                                {/* Card 3  */}
        <div class="card " onClick={handleShow} >
        <img src= "https://plus.unsplash.com/premium_photo-1674530449818-76542e0a84d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fEZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Flower Image" />
       
</div>
</div>


</div>

{/* Row 2 of Cards  */}
<div className="row"> 
                                             {/* Card 1 */}
                <div className="col-md-4 col-sm-12"><div class="card" onClick={handleShow} >
            <img src="https://plus.unsplash.com/premium_photo-1674530449818-76542e0a84d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fEZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Flower Image" />
        
            </div>
</div>
<div className="col-md-4 col-sm-12"> 
                                        {/* Card 2 */}
                        <div class="card" onClick={handleShow}  >
                        <img src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fEZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                       
                        </div>
</div>
<div className="col-md-4 col-sm-12"> 
                                                {/* Card 3  */}
        <div class="card" onClick={handleShow} >
        <img src= "https://plus.unsplash.com/premium_photo-1674530449818-76542e0a84d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fEZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Flower Image" />
        
</div>
</div>


</div>
    </div>   


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body> <div className="row">
            <div className="col-md-6">
                {/* Left Courausal  */}
                <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1612806527197-42af2b64884a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1580600301354-0ce8faef576c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" className="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            </div>
            <div className="col-md-6"> 
            {/* Right Part of PopuP  */}
                       <div className="col-md-6 ">
        <div className="row">
    <div className="col-md-6 d-flex">
    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Profile Image"  className="p-2 post-profile-pic" />
    <div className='d-flex flex-column justify-content-center mt-2 ms-2'>
    <p className='fs-6 fw-bold'>John Doe</p>
    <p className='location'>Description</p>
    </div>
    <div className="dropdown ms-5">
    <a className="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
    <img src={horizontalMoreAction} className="float-end fs-3 p-2 mt-2 fa-solid fa-info" alt="more-img" />
    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pen-to-square me-1"></i> Edit Post</a></li>
      <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash-can me-1"></i> Delete </a></li>
    </ul>
  </div>
    </div>
     
    </div>
    <div className="row">
    <div className="col-12 ">
        <span  className='text-muted p-2'>2 Hours Ago</span>
    </div>
    </div>
    <div className="row">
    <div className="col-12 ms-2 mt-2">

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusamus omnis! Itaque delectus beatae architecto, voluptates quod dignissimos? Facere, harum.</p>
    </div>
    </div>
    <div className="row my-3">
    <div className="col-6 d-flex ">
    <i className="ps-2 fs-4 fa-sharp fa-regular fa-heart"></i>
    <i className="ps-3 fs-4 fa-regular fa-comment"></i>
    <i className="ps-3 fs-4 fa-solid fa-location-arrow"></i>

    </div>
    <div className="col-md-12 mt-3 ms-2">
    <span className='fw-bold fs-6  pe-2'>200 likes</span>
    </div>
    </div>   
        </div>
        </div>
</div>        

        </Modal.Body>
      
      </Modal>

      {/* Modal / Popup for upload post  */}

       <Modal show={showPost} onHide={handlePostClose} size='lg' centered>
      
         
        <Modal.Header closeButton>
        <span className='fw-bold fs-5'> Upload Post</span>
      </Modal.Header>


   
        <Modal.Body>
      <div className="row">
      <div className="col-md-6 col-sm-12 mb-3 p-2">
      <div className="upload-box">
      <div className='dropZoneContainer'>
      <input name="file" type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif"  />
      <div className='dropZoneOverlay'>
      {/* {image.preview && <img alt='uploded img' src={image.preview} width='200' height='200'/>} */}
      <i className="fa-solid fa-cloud-arrow-up fs-1"></i> <br />Upload Photo from Computer</div>
      
      </div>
      
      </div>
      </div>
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-between mb-3">
      
      <div className="row">
      <div className="col-sm-12 mb-3">
      <div className="form-floating">
      <textarea className="form-control" placeholder="Add Caption" id="floatingTextarea"></textarea>
      <label for="floatingTextarea">Add Caption</label>
    </div>
      </div>
      <div className="col-sm-12 mb-3">
      <div className="form-floating mb-3">
        <input   type="text" className="form-control " id="floatingInput" placeholder="Location"/>
        <label for="floatingInput"><i className="fa-solid fa-location-dot"></i> Add Location</label>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-sm-12 mb-3">


      <button   className="custom-btn custom-btn-post float-end ">
      <span className='fs-6 fw-600'>Post</span> 
      </button>
      </div>
  
      </div>
      </div>
      </div>
      </Modal.Body>
    
      </Modal>
    </div>
  )
}

export default Profile