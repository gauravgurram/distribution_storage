"use client"
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/page";
import Header from "../Header/page";
import Sidebar from "../Sidebar/page";
import { useEffect, useState } from "react";
import { fetchTruckCategory,fetchVehicle,setVehicleBrand,setVehicleModel,setVehicleTruckCategory,setVehicleNo,setVehiclePurchaseDate,setVehicleRegistration,addVehicle,deleteVehicle,UpdateVehicleId,UpdateVehicle } from "../redux/vehicleslice";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function VehicleDetails() {

  const {truckCategory,vehicleDetails,vehicleId,vehicleBrand,vehicleModel,vehicleRegistration,vehicleNo,vehiclePurchaseDate,vehicleTruckCategory}  = useSelector((state) => state.TruckOperation);

  const [modalOpen, setModalOpen] = React.useState(false);

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchVehicle())
    dispatch(fetchTruckCategory())
  },[dispatch]);
 

    const data = {
        vehicleBrand:vehicleBrand,
        vehicleModel:vehicleModel,
        vehicleRegistration:vehicleRegistration,
        vehicleNo:vehicleNo,
        vehiclePurchaseDate:vehiclePurchaseDate,
        vehicleTruckCategory:vehicleTruckCategory,
    }

    const handleEdit=(id)=>{
      setModalOpen(!modalOpen)
      dispatch(UpdateVehicleId(id))
    }

    const handleUpdate=()=>{
      const data={
        vehicleId:vehicleId,
        vehicleBrand:vehicleBrand,
        vehicleModel:vehicleModel,
        vehicleRegistration:vehicleRegistration,
        vehicleNo:vehicleNo,
        vehiclePurchaseDate:vehiclePurchaseDate,
        vehicleTruckCategory:vehicleTruckCategory,
      }
      dispatch(UpdateVehicle(data))
    }


// <---------------------Validation Start------------------------->

    
const validateForm = () => {
  const errors = {};
  
  if (!vehicleBrand) {
    errors.vehicleBrand = 'Vehical Brand is required.';
  } else {
  
    const stringPattern = /^[A-Za-z]+/;
    if (!stringPattern.test(vehicleBrand)) {
      errors.vehicleBrand = 'Vehical Brand must contain only string characters.';
    } else if (vehicleBrand.length < 3) {
      errors.vehicleBrand = 'Vehical Brand must be at least 3 characters.';
    }
  }
  if (!vehicleModel) {
    errors.vehicleModel = 'Vehical Model is required.';
  } else {
  
    const stringPattern = /^[A-Za-z]+/;
    if (!stringPattern.test(vehicleModel)) {
      errors.vehicleModel = 'Vehical Model must contain only string characters.';
    } else if (vehicleModel.length < 3) {
      errors.vehicleModel = 'Vehical Model must be at least 3 characters.';
    }
  }

  if (!vehicleRegistration) {
    errors.vehicleRegistration = 'Vehicle registration is required.';
  } else {
    // Use a regular expression to check if it's a valid year (4 digits)
    const yearPattern = /^\d{4}$/;
    if (!yearPattern.test(vehicleRegistration)) {
      errors.vehicleRegistration = 'Vehicle registration must be a valid 4-digit year.';
    }
  }

  if (!vehicleNo) {
    errors.vehicleNo = 'Vehical No is required.';
  } 

  if (!vehiclePurchaseDate) {
    errors.vehiclePurchaseDate = 'Vehical Purchase date is required.';
  } 

  if (!vehicleTruckCategory) {
    errors.vehicleTruckCategory = 'Truck Category is required.';
  } 


  setFormErrors(errors);

  return Object.keys(errors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    dispatch(addVehicle(data));
  }
};
// <---------------------Validation End------------------------->




    return (
    <>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <Sidebar/>
    <div class="body-wrapper">
      <Header/>
     
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Add Vehicle</h5>

              <div class="card">
              <div class="card-body">

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Vehicle Brand</label>
                    {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>dispatch(setVehicleBrand(e.target.value))} aria-describedby="emailHelp"/> */}
                    <input type="text" class={`form-control ${formErrors.vehicleBrand ? "is-invalid" : ""}`} id="exampleInputtext1"
                      onChange={(e)=>dispatch(setVehicleBrand(e.target.value))} aria-describedby="textHelp" required />
                    {formErrors.vehicleBrand && <div className="invalid-feedback">{formErrors.vehicleBrand}</div>}
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Vehicle Model</label>

                    <input type="text" class={`form-control ${formErrors.vehicleModel ? "is-invalid" : ""}`} id="exampleInputtext1"
                      onChange={(e)=>dispatch(setVehicleModel(e.target.value))} aria-describedby="textHelp" required />
                    {formErrors.vehicleModel && <div className="invalid-feedback">{formErrors.vehicleModel}</div>}
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Registration Year</label>


                    <input type="text" class={`form-control ${formErrors.vehicleRegistration ? "is-invalid" : ""}`} id="exampleInputtext1"
                      onChange={(e)=>dispatch(setVehicleRegistration(e.target.value))} aria-describedby="textHelp" required />
                    {formErrors.vehicleRegistration && <div className="invalid-feedback">{formErrors.vehicleRegistration}</div>}
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Registration Number</label>


                    <input type="text" class={`form-control ${formErrors.vehicleNo ? "is-invalid" : ""}`} id="exampleInputtext1"
                    onChange={(e)=>dispatch(setVehicleNo(e.target.value))} aria-describedby="textHelp" required />
                    {formErrors.vehicleNo && <div className="invalid-feedback">{formErrors.vehicleNo}</div>}
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Date Of Purchase</label>


                    <input type="date" class={`form-control ${formErrors.vehiclePurchaseDate ? "is-invalid" : ""}`} id="exampleInputtext1"
                        onChange={(e)=>dispatch(setVehiclePurchaseDate(e.target.value))}aria-describedby="textHelp" required />
                      {formErrors.vehiclePurchaseDate && <div className="invalid-feedback">{formErrors.vehiclePurchaseDate}</div>}
                  </div>

                  <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Truck Category</label>
                      <select className={`form-control ${formErrors.vehicleTruckCategory ? "is-invalid" : ""}`} onChange={(e)=>dispatch(setVehicleTruckCategory(e.target.value))}>
                      <option>Select Truck Category</option>
                              {truckCategory && truckCategory.map((course)=>(
                              <option key={course.id} value={course.id}>{course.truck_category}</option>
                              ))}
                        </select>
                        {formErrors.vehicleTruckCategory && <div className="invalid-feedback">{formErrors.vehicleTruckCategory}</div>}
                  </div>


                  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Add</button>

                  </div>
              </div>

        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">List Of Vehicle</h5>
            <br/>
            <div class="col-lg-12 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle text-center table-bordered">
                    <thead class="text-dark fs-4 ">
                      <tr>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Vehicle Id</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Vehicle Brand</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Vehicle Model</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Registration</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Registration Number</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Date Of Purchase</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Truck Category</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Update</h6>
                        </th>

                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Delete</h6>
                        </th>

                      </tr>
                    </thead>
                    <tbody>

                      {vehicleDetails && vehicleDetails.map((client)=>(
                      <tr key={client.vid}>
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{client.vid}</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.marque_vehicule}</h6>
                        </td>

                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.model_vehical}</h6>
                        </td>

                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.register}</h6>
                        </td>

                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.num_categories}</h6>
                        </td>

                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.date_acquisition}</h6>
                        </td>

                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.truck_category}</h6>
                        </td>

                        <td class="border-bottom-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square text-warning" viewBox="0 0 16 16" onClick={()=>handleEdit(client.vid)}>
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        </td>
                        <td class="border-bottom-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16" onClick={()=>dispatch(deleteVehicle(client.vid))}>
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg>                        
                        </td>
                      </tr> 
                      ))}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>

    <>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Update Vehicle Details
          </h5>
          <Button
            aria-label="Close"
            className=" close"
            type="button"
            color="danger"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>X</span>
          </Button>
        </div>

        <ModalBody>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Vehicle Brand</label>
                      <input type="text" class="form-control" Value={vehicleBrand} id="exampleInputEmail1" onChange={(e)=>dispatch(setVehicleBrand(e.target.value))} aria-describedby="emailHelp"/>
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Vehicle Model</label>
                      <input type="text" class="form-control" Value={vehicleModel} id="exampleInputEmail1" onChange={(e)=>dispatch(setVehicleModel(e.target.value))} aria-describedby="emailHelp"/>
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1"  class="form-label">Registration</label>
                      <input type="text" class="form-control" Value={vehicleRegistration} id="exampleInputEmail1" onChange={(e)=>dispatch(setVehicleRegistration(e.target.value))} aria-describedby="emailHelp"/>
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Registration Number</label>
                      <input type="text" class="form-control" Value={vehicleNo} id="exampleInputEmail1" onChange={(e)=>dispatch(setVehicleNo(e.target.value))} aria-describedby="emailHelp"/>
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Date Of Purchase</label>
                      <input type="date" class="form-control" Value={vehiclePurchaseDate} id="exampleInputEmail1" onChange={(e)=>dispatch(setVehiclePurchaseDate(e.target.value))} aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Truck Category</label>
                        <select
                            className='form-control'
                            value={vehicleTruckCategory} 
                            onChange={(e) => dispatch(setVehicleTruckCategory(e.target.value))}
                            >
                            {truckCategory && truckCategory.map((course) => (
                                <option key={course.id} value={course.id}>
                                {course.truck_category}
                                </option>
                            ))}
                            </select>
                    </div>

        </ModalBody>

        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button" onClick={handleUpdate}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </>


            </div>
          </div>
        </div>
        <div class="py-6 px-6 text-center">
          <p class="mb-0 fs-4">Design and Developed by <a href="https://themewagon.com">Team Ingenious</a></p>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
</>
    )
  }
  