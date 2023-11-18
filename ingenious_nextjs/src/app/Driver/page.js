"use client" 
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/page";
import Header from "../Header/page";
import Sidebar from "../Sidebar/page";
import { useEffect, useState } from "react";
import { fetchDrivers,fetchTruckCategory,deleteDriverData,UpdateDriverId, setFname, setLname, setNum_cin, setPermit, setPhone, addDrivers,UpdateDrivers } from '../redux/driverslice';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export default function Driver() {

  const { DriverData,truckCategory,fname,lname,phone,num_cin,num_permit_to_drive,driverId} = useSelector((state) => state.DriverOperation);

  const [modalOpen, setModalOpen] = React.useState(false);

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrivers());
    dispatch(fetchTruckCategory());
  }, [dispatch]);


  const data = {
    fname:fname,
    lname:lname,
    num_cin:num_cin,
    num_permit_to_drive:num_permit_to_drive,
    phone:phone,
  }

  const handleEdit=(id)=>{
    setModalOpen(!modalOpen)
    dispatch(UpdateDriverId(id))
  }

  const handleUpdate=()=>{
    const data={
        driverId:driverId,
        fname:fname,
        lname:lname,
        num_cin:num_cin,
        num_permit_to_drive:num_permit_to_drive,
        phone:phone,
    }
    dispatch(UpdateDrivers(data))
  }


  const validateForm = () => {
    const errors = {};

    if (!fname) {
      errors.fname = 'First Name is required.';
    } else {

      const stringPattern = /^[A-Za-z]+$/;
      if (!stringPattern.test(fname)) {
        errors.fname = 'First Name must contain only string characters.';
      } else if (fname.length < 3) {
        errors.fname = 'First Name must be at least 3 characters.';
      }
    }


    if (!lname) {
      errors.lname = 'Last name is required.';
    } else {
      const stringPattern = /^[A-Za-z]+$/;
      if (!stringPattern.test(lname)) {
        errors.lname = 'Last Name must contain only string characters.';
      } else if (lname.length < 3) {
        errors.lname = 'Last Name must be at least 3 characters.';
      }
    }

    if (!num_cin) {
      errors.num_cin = "Licens No is required";
    }else {
      if (num_cin.length !== 10) {
        errors.num_cin = "License number must be 10 digits long.";
      }
    }
    if (!num_permit_to_drive) {
      errors.num_permit_to_drive = "Permit  is required";
    }


    if (!phone) {
      errors.phone = "phone is required";
    }else {
      const cleanedPhone = phone.replace(/[^\d]/g, '');
      if (cleanedPhone.length !== 10) {
        errors.phone = "Phone number must be a valid 10-digit number.";
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(addDrivers(data));
    }
  };


  return (
    <>
      <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />
        <div class="body-wrapper">
          <Header />

          <div class="container-fluid">
            <div class="container-fluid">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title fw-semibold mb-4">Add New Driver</h5>

                  <div class="card">
                  <div class="card-body">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="text" class={`form-control ${formErrors.fname ? "is-invalid" : ""}`} id="exampleInputtext1"
                          onChange={(e) => dispatch(setFname(e.target.value))}aria-describedby="textHelp" required />
                        {formErrors.fname && <div className="invalid-feedback">{formErrors.fname}</div>}
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setLname(e.target.value))} aria-describedby="emailHelp" /> */}
                        <input type="text" class={`form-control ${formErrors.lname ? "is-invalid" : ""}`} id="exampleInputtext1"
                          onChange={(e) => dispatch(setLname(e.target.value))} aria-describedby="textHelp" required />
                        {formErrors.lname && <div className="invalid-feedback">{formErrors.lname}</div>}
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">License No.</label>
                        {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setNum_cin(e.target.value))} aria-describedby="emailHelp" /> */}
                        <input type="text" class={`form-control ${formErrors.num_cin ? "is-invalid" : ""}`} id="exampleInputtext1"
                          onChange={(e) => dispatch(setNum_cin(e.target.value))} aria-describedby="textHelp" required />
                        {formErrors.num_cin && <div className="invalid-feedback">{formErrors.num_cin}</div>}
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Permit To Drive</label>
                        <select className='form-control' onChange={(e) => dispatch(setPermit(e.target.value))} class={`form-control ${formErrors.num_permit_to_drive ? "is-invalid" : ""}`} required>
                          
                        <option>Select Truck Category</option>
                              {truckCategory && truckCategory.map((course)=>(
                              <option key={course.id} value={course.id}>{course.truck_category}</option>
                              ))}
                        
                        </select>
                        {formErrors.num_permit_to_drive && <div className="invalid-feedback">{formErrors.num_permit_to_drive}</div>}
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="text" class={`form-control ${formErrors.phone ? "is-invalid" : ""}`} id="exampleInputtext1"
                          onChange={(e) => dispatch(setPhone(e.target.value))} aria-describedby="textHelp" required />
                        {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                      </div>
                      <button type="submit" onClick={handleSubmit} class="btn btn-primary">Add</button>
                      </div>
                  </div>

                  <div class="container-fluid">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title fw-semibold mb-4">List Of Drivers</h5>
                        <br />
                        <div class="col-lg-12 d-flex align-items-stretch">
                          <div class="card w-100">
                            <div class="card-body p-4">
                              <div class="table-responsive">
                                <table class="table text-nowrap mb-0 align-middle text-center table-bordered">
                                  <thead class="text-dark fs-4 ">
                                    <tr>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Id</h6>
                                      </th>
                                      <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">First Name</h6>
                                      </th>
                                      <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Last Name</h6>
                                      </th>
                                      <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">License No.</h6>
                                      </th>
                                      <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Permit_to_Drive</h6>
                                      </th>
                                      <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Phone</h6>
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

                                    {DriverData && DriverData.map((driver) => (
                                      <tr key={driver.id}>
                                        <td class="border-bottom-0">
                                          <h6 class="fw-semibold mb-0">{driver.id}</h6>
                                          </td>
                                          <td class="border-bottom-0">
                                          <h6 class="fw-semibold mb-0">{driver.firstname}</h6>
                                          </td>
                                        <td class="border-bottom-0">
                                          <h6 class="fw-semibold mb-1">{driver.lastname}</h6>
                                        </td>
                                        <td class="border-bottom-0">
                                          <p class="mb-0 fw-normal">{driver.num_cin}</p>
                                        </td>
                                        <td class="border-bottom-0">
                                          <p class="mb-0 fw-normal">{driver.truck_category}</p>
                                        </td>
                                        <td class="border-bottom-0">
                                          <p class="mb-0 fw-normal">{driver.n_tel}</p>
                                        </td>
                                        <td class="border-bottom-0">

                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square text-warning" viewBox="0 0 16 16" onClick={()=>handleEdit(driver.id)}>
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                          </svg>
                                        </td>

                                        <td class="border-bottom-0">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16" onClick={() => dispatch(deleteDriverData(driver.id))}>
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
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
            Update Driver Details
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
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="text" class="form-control" Value={fname} id="exampleInputEmail1" onChange={(e) => dispatch(setFname(e.target.value))} aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" Value={lname} id="exampleInputEmail1" onChange={(e) => dispatch(setLname(e.target.value))} aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">License No.</label>
                        <input type="text" class="form-control" Value={num_cin} id="exampleInputEmail1" onChange={(e) => dispatch(setNum_cin(e.target.value))} aria-describedby="emailHelp" />
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Permit_to_Drive</label>
                        {/* <input type="text" class="form-control" Value={num_permit_to_drive} id="exampleInputEmail1" onChange={(e) => dispatch(setPermit(e.target.value))} aria-describedby="emailHelp" /> */}

                        <select className='form-control' onChange={(e) => dispatch(setPermit(e.target.value))}>
                            <option>Select Truck Category</option>
                              {truckCategory && truckCategory.map((course)=>(
                              <option key={course.id} value={course.id}>{course.truck_category}</option>
                              ))}
                        </select>
                    </div>

                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="text" class="form-control" Value={phone} id="exampleInputEmail1" onChange={(e) => dispatch(setPhone(e.target.value))} aria-describedby="emailHelp" />
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
      <Footer />
      
    </>
    
  )
}
