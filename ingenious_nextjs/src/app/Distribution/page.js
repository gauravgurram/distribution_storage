"use client"
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/page";
import Header from "../Header/page";
import Sidebar from "../Sidebar/page";
import { useEffect, useState } from "react";
import configure from '../../../configure';
import { fetchDistribution ,fetchTypeDistribution,fetchClient,addDistribution,
  setCodeDistribution,setTypeDistribution,setClientId,setComments,setClientCode,
  setAxeDistribution,setDeliveryDate,setQuantity,setVolume,setDeliveryPoint,setExpectedDay,
  fetchDistributionId,setDeliveryName,addDistributionLine,fetchDistributionListId,
  deleteDistributionHeader,fetchDrivers,fetchVehicle,setExecuteDate,setDriver,setVehicle,
  fetchTruckCategory,addPlan,fetchCity,fetchStatusDistribution,setDistributionStatus,setOrderDate,setTruck,setCity,
  setDistance,setImport,addImport,addMap,setSearchQuery,EditPlan,EditPlanFetch} from "../redux/distributionslice";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Link from "next/link";
import { setTruckCategory } from "../redux/vehicleslice";

export default function Distribution() {

  const {distributions,typeDistribution,clientData, codeDistribution,typeofDistribution,clientId,comments,
    clientCodeShip,axeDistribution,deliveryDate,quantity,volume,deliveryPoints,expectedDays,distributionId,
    deliveryName,distributionList,DriverData,vehicleDetails,executeDate,driverId,vehicleNo,truckCategory,city,
    StatusDistribution,distance,cityId,truckCategoryId,orderDate,statusDistributionId,importFile,searchQuery,EditPlanId }  = useSelector((state) => state.distributionSlice);
  
  const [modalOpen, setModalOpen] = React.useState(false);

  const [modalInfo, setModalInfo] = React.useState(false);

  const [modalPlan, setModalPlan] = React.useState(false);

  const [modalEdit, setModalEdit] = React.useState(false);

  const [modalSuccess, setModalSuccess] = React.useState(false);

  const [formErrors, setFormErrors] = useState({});

  const [formErrors1, setFormErrors1] = useState({});


  const [parsedUser, setParsedUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        const parsedUser = JSON.parse(localUser);
        setParsedUser(parsedUser.emailid);
      } else {
        console.log('User data not found.'); 
      }
    }
  }, []);


  const dispatch = useDispatch();

  const handleSearchInputChange=(e)=>{
    dispatch(setSearchQuery(e.target.value));
  }

  const filteredPosts= distributions.filter((post)=>
    post.name_client.toLowerCase().includes(searchQuery.toLowerCase())  
  );


  useEffect(()=>{
    dispatch(fetchDistribution())
    dispatch(fetchTypeDistribution())
    dispatch(fetchClient())
    dispatch(fetchDrivers())
    dispatch(fetchVehicle())
    dispatch(fetchTruckCategory())
    dispatch(fetchCity())
    dispatch(fetchStatusDistribution())
  },[dispatch]);

    const handleCreate=()=>{
      setModalOpen(!modalOpen)
    }

    const data={
      codeDistribution:codeDistribution,
      typeofDistribution:typeofDistribution,
      clientId:clientId,
      comments:comments,
      clientCodeShip:clientCodeShip,
      axeDistribution:axeDistribution,
      deliveryDate:deliveryDate,
      quantity:quantity,
      volume:volume,
      deliveryPoints:deliveryPoints,
      expectedDays:expectedDays,
      deliveryName:deliveryName,

      distance:distance,
      cityId:cityId,
      truckCategoryId:truckCategoryId,
      orderDate:orderDate,
      statusDistributionId:statusDistributionId,
      createdBy:parsedUser,
    }

    const data2={
      quantity:quantity,
      volume:volume,
      deliveryName:deliveryName,
    }

    const data3={
      distributionId:distributionId,
      vehicleNo:vehicleNo,
      executeDate:executeDate,
      driverId:driverId,
    }

    const data4={
      vehicleNo:vehicleNo,
      driverId:driverId,
    }

    const data6={
      distributionId:distributionId,
      typeofDistribution:typeofDistribution,
      axeDistribution:axeDistribution,
      deliveryDate:deliveryDate,
      quantity:quantity,
      volume:volume,
      distance:distance,
      cityId:cityId,
      truckCategoryId:truckCategoryId,
      modifiedby:parsedUser,
    }

    const importdata={
      importFile:importFile,
    }

    // const handleAdd=()=>{
    //   dispatch(addDistribution(data))
    //   dispatch(addDistributionLine(data2))
    // }

    const handleInfo=(id)=>{
      setModalInfo(!modalInfo)
      dispatch(fetchDistributionId(id))
      dispatch(fetchDistributionListId(id))
    }

    const handlePlan=()=>{
      setModalPlan(!modalPlan)
    }

    const handleEdit=(id)=>{
      setModalEdit(!modalEdit)
      dispatch(EditPlanFetch(id))
    }
    
    // const handleSuccess=()=>{
    //   setModalSuccess(!modalSuccess)
    //   dispatch(addPlan(data3))
    //   dispatch(addMap(data4))
    // }

    
    const getFormattedDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      
      // Ensure the month and day have two digits
      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;
      
      return `${year}-${month}-${day}`;
    };
    
    const [minDate, setMinDate] = useState(getFormattedDate());


// <-----------Validation Code Start--------->
const validateForm = () => {
  const errors = {};

  if (!codeDistribution) {
    errors.codeDistribution = 'Code Distribution is required.';
  } else {

    // const stringPattern = /^[A-Za-z]+/;
    // if (!stringPattern.test(firstName)) {
    //   errors.firstName = 'First Name must contain only string characters.';
    // } else if (firstName.length < 3) {
    //   errors.firstName = 'First Name must be at least 3 characters.';
    // }
  }
  if (!typeofDistribution) {
    errors.typeofDistribution = 'Type Of Distribution is required.';
  }
  if (!clientId) {
    errors.clientId = 'Client Id is required.';
  }
  if (!comments) {
    errors.comments = 'Comments is required.';
  }else{
    if (comments.length < 5) {
    errors.comments = "Comments must be at least 5 characters long.";
  }
  }
  if (!clientCodeShip) {
    errors.clientCodeShip = 'Client CodeShip is required.';
  }else {
    const stringPattern = /^[A-Za-z]+/;
    if (!stringPattern.test(clientCodeShip)) {
      errors.clientCodeShip = 'ClientCodeShip must contain  string characters.';
    } else if (clientCodeShip.length < 3) {
      errors.clientCodeShip = 'ClientCodeShip must be at least 3 characters.';
    }
  }
  if (!axeDistribution) {
    errors.axeDistribution = 'AxeDistribution is required.';
  }else {
    const stringPattern = /^[A-Za-z]+/;
    if (!stringPattern.test(axeDistribution)) {
      errors.axeDistribution = 'AxeDistribution must contain  string characters.';
    } else if (axeDistribution.length < 3) {
      errors.axeDistribution = 'AxeDistribution must be at least 3 characters.';
    }
  }
  
  if (!deliveryDate) 
  {
    errors.deliveryDate = 'DeliveryDate is required.';
  }
  

  if (!quantity) {
    errors.quantity = 'Quantity is required.';
  }else {
    const parsedQuantity = parseFloat(quantity);

    if (isNaN(parsedQuantity) || parsedQuantity < 0) {
      errors.quantity = 'Quantity must be a positive number or zero.';
    }
  }
  if (!volume) {
    errors.volume = 'volume is required.';
  }else {
    const parsedVolume = parseFloat(volume);

    if (isNaN(parsedVolume) || parsedVolume <= 0) {
      errors.volume = 'Volume must be a positive number greater than 0.';
    }
  }

  if (!deliveryPoints) {
    errors.deliveryPoints = 'Delivery Points are required';
  }
  else {
    const parsedeliveryPoints = parseFloat(deliveryPoints);

    if (isNaN(parsedeliveryPoints) || parsedeliveryPoints < 0) {
      errors.deliveryPoints = 'Delivery must be a positive number or zero.';
    }
  }


  if (!expectedDays) {
    errors.expectedDays = 'Expected Days are required';
  }else {
    const parsedExpectedDays = parseInt(expectedDays, 10);

    if (isNaN(parsedExpectedDays) || parsedExpectedDays <= 0) {
      errors.expectedDays = 'Expected Days must be a positive integer greater than 0.';
    }
  }
  if (!deliveryName) {
    errors.deliveryName = 'Delivery Name are required';
  }
  if (!distance) {
    errors.distance = 'Distance are required';
  }
  else {
    const parsedistance = parseFloat(distance);
    if (isNaN(parsedistance) || parsedistance < 0) {
      errors.distance = 'Delivery must be a positive number or zero.';
    }
  }

  if (!cityId) {
    errors.cityId = 'City Id are required';
  }
  if (!truckCategoryId) {
    errors.truckCategoryId = 'Truck Category Id are required';
  }
  if (!orderDate) {
    errors.orderDate = 'Order Date are required';
  }
  if (!statusDistributionId) {
    errors.statusDistributionId = 'Status Distribution Id are required';
  }


  setFormErrors(errors);

  return Object.keys(errors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    dispatch(addDistribution(data))
    dispatch(addDistributionLine(data2))
  }
};

// <-----------Validation Code End----------->






const validatePlan = () => {
  const errors = {};

  if (!executeDate) {
    errors.executeDate = 'Executed Date is required.';
  } 
  if (!driverId) {
    errors.driverId = 'Driver Name is required.';
  }
  if (!vehicleNo) {
    errors.vehicleNo = 'Vehicle Number is required.';
  }

  setFormErrors1(errors);

  return Object.keys(errors).length === 0;
};

const handlePlan2 = (e) => {
  e.preventDefault();

  if (validatePlan()) {
     setModalSuccess(!modalSuccess)
      dispatch(addPlan(data3))
      dispatch(addMap(data4))
  }
};



const handlePlan3 = (id) => {
    setModalSuccess(!modalSuccess)
    dispatch(EditPlan(data6))
};


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

                <div class="row">
                    <div class="col-8">
                        <h4 class=" mb-4">Add A List Of Distribution</h4>
                    </div>
                    <div class="col-4 text-end">
                        <button class="btn btn-primary btn-sm" type="button" onClick={handleCreate}>Create A Distribution</button>
                    </div>
                </div>

              <div class="card">
                <div class="card-body">
                    <h5 class="card-title fw-semibold mb-4">Import Distribution</h5>
                    <div class="row">
                        <div class="col-4">
                        <input type="file" class="form-control" onChange={(e)=>dispatch(setImport(e.target.files[0]))} id="exampleInputEmail1"  aria-describedby="emailHelp"/>               
                        </div>
                        <div class="col-4">
                            <button class="btn btn-success" type="submit" onClick={()=>dispatch(addImport(importdata))}>Import</button>
                        </div>
                    </div>
                </div>
              </div>

        <div class="container-fluid">
          <div class="card">
            <div class="card-body">

                <div class="row">
                    <div class="col-8">
                        <h4 class="card-title fw-semibold mb-4">List Of Distribution</h4>
                    </div>
                    <div class="col-4 text-end">
                    <input type="text" placeholder="Search Distribution" value={searchQuery} onChange={handleSearchInputChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>               
                    </div>
                </div>

                <hr/>

                <div class="text-end">
                <a href={`${configure.API_BASE_URL}/api/export`} className="btn btn-success" type="submit">Export</a>
                </div>

                <hr/>

            <br/>
            <div class="col-lg-12 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle text-center table-bordered">
                    <thead class="text-dark fs-4 ">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Distribution Code</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Distribution Type</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Client Name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Comments</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Client Code Ship</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">AXE Distribution</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Delivery Date</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Qty</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Volume</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">No.of Delivery Points</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Expected Days</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Details</h6>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                    {filteredPosts && filteredPosts.map((client)=>(
                      <tr key={client.id}>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">{client.code_distribution}</h6>
                        </td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.type_distribution}</h6>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.name_client}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.comments}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.is_mutual}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.axe_distribution}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.date_delivery}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.qty}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.volume}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.nbr_delivery_points}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.nbr_expected_days}</p>
                        </td>

                      {client.date_execution !== null
                        ?
                          <td class="border-bottom-0">
                          <button type="button" disabled className="btn btn-primary btn-sm">Planned</button>
                          </td>
                          :
                          <td class="border-bottom-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16" onClick={()=>handleInfo(client.dhid)}>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                          </svg>                          
                          </td>
                      }
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


                  <div>
                    <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                      <div className=" modal-header">
                        <h5 className=" modal-title" id="exampleModalLabel">
                          Add New Distribution
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
                          <label for="exampleInputEmail1" class="form-label">Code Distribution</label>
                          <input type="text" class={`form-control ${formErrors.codeDistribution ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setCodeDistribution(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.codeDistribution && <div className="invalid-feedback">{formErrors.codeDistribution}</div>}



                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Type Of Distribution</label>
                          {/* <select className='form-control' onChange={(e) => dispatch(setTypeDistribution(e.target.value))}>
                            <option>Select Type Of Distribution</option>
                            {typeDistribution && typeDistribution.map((course) => (
                              <option value={course.id}>{course.type_distribution}</option>
                            ))}
                          </select> */}

                          <select className={`form-control ${formErrors.typeofDistribution ? "is-invalid" : ""}`} onChange={(e) => dispatch(setTypeDistribution(e.target.value))}>
                            <option>Select Type Of Distribution</option>
                            {typeDistribution && typeDistribution.map((course) => (
                              <option key={course.id} value={course.id}>{course.type_distribution}</option>
                            ))}
                          </select>
                          {formErrors.typeofDistribution && <div className="invalid-feedback">{formErrors.typeofDistribution}</div>}
                        </div>


                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Select Client</label>
                          {/* <select className='form-control' onChange={(e) => dispatch(setClientId(e.target.value))}>
                            <option>Select Client Name</option>
                            {clientData && clientData.map((course) => (
                              <option value={course.id}>{course.name_client}</option>
                            ))}
                          </select> */}

                          <select className={`form-control ${formErrors.typeofDistribution ? "is-invalid" : ""}`} onChange={(e) => dispatch(setClientId(e.target.value))}>
                            <option>Select Client Name</option>
                            {clientData && clientData.map((course) => (
                              <option key={course.id} value={course.id}>{course.name_client}</option>
                            ))}
                          </select>
                          {formErrors.typeofDistribution && <div className="invalid-feedback">{formErrors.typeofDistribution}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Comments</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setComments(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.comments ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setComments(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.comments && <div className="invalid-feedback">{formErrors.comments}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Client Code Ship</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setClientCode(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.clientCodeShip ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setClientCode(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.clientCodeShip && <div className="invalid-feedback">{formErrors.clientCodeShip}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">AXE Distribution</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setAxeDistribution(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.axeDistribution ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setAxeDistribution(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.axeDistribution && <div className="invalid-feedback">{formErrors.axeDistribution}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Delivery Date</label>
                          {/* <input type="date" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setDeliveryDate(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="date" min={minDate} class={`form-control ${formErrors.deliveryDate ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setDeliveryDate(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.deliveryDate && <div className="invalid-feedback">{formErrors.deliveryDate}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Quantity</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setQuantity(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.quantity ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setQuantity(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.quantity && <div className="invalid-feedback">{formErrors.quantity}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Volume</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setVolume(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.volume ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setVolume(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.volume && <div className="invalid-feedback">{formErrors.volume}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">No. of Delivery Points</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setDeliveryPoint(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.deliveryPoints ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setDeliveryPoint(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.deliveryPoints && <div className="invalid-feedback">{formErrors.deliveryPoints}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Expected Days</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setExpectedDay(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.expectedDays ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setExpectedDay(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.expectedDays && <div className="invalid-feedback">{formErrors.expectedDays}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Delivery Name</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setDeliveryName(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.deliveryName ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setDeliveryName(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.deliveryName && <div className="invalid-feedback">{formErrors.deliveryName}</div>}
                        </div>


                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Distance</label>
                          {/* <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setDistance(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="text" class={`form-control ${formErrors.distance ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setDistance(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.distance && <div className="invalid-feedback">{formErrors.distance}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Select City</label>
                          {/* <select className='form-control' onChange={(e) => dispatch(setCity(e.target.value))}>
                            <option>Select City Name</option>
                            {city && city.map((course) => (
                              <option value={course.id}>{course.city}</option>
                            ))}
                          </select> */}


                          <select className={`form-control ${formErrors.cityId ? "is-invalid" : ""}`} onChange={(e) => dispatch(setCity(e.target.value))}>
                            <option>Select City Name</option>
                            {city && city.map((course) => (
                              <option key={course.id} value={course.id}>{course.city}</option>
                            ))}
                          </select>
                          {formErrors.cityId && <div className="invalid-feedback">{formErrors.cityId}</div>}
                        </div>


                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Select Truck Category</label>
                          {/* <select className='form-control' onChange={(e) => dispatch(setTruck(e.target.value))}>
                            <option>Select Truck Category </option>
                            {truckCategory && truckCategory.map((course) => (
                              <option value={course.id}>{course.truck_category}</option>
                            ))}
                          </select> */}

                          <select className={`form-control ${formErrors.cityId ? "is-invalid" : ""}`} onChange={(e) => dispatch(setTruck(e.target.value))}>
                            <option>Select Truck Category Name</option>
                            {truckCategory && truckCategory.map((course) => (
                              <option key={course.id} value={course.id}>{course.truck_category}</option>
                            ))}
                          </select>
                          {formErrors.cityId && <div className="invalid-feedback">{formErrors.cityId}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Order Date</label>
                          {/* <input type="date" class="form-control" id="exampleInputEmail1" onChange={(e) => dispatch(setOrderDate(e.target.value))} aria-describedby="emailHelp" /> */}
                          <input type="date" min={minDate} class={`form-control ${formErrors.orderDate ? "is-invalid" : ""}`} id="exampleInputtext1"
                            onChange={(e) => dispatch(setOrderDate(e.target.value))} aria-describedby="textHelp" required />
                          {formErrors.orderDate && <div className="invalid-feedback">{formErrors.orderDate}</div>}
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Select Distribution Status</label>
                          {/* <select className='form-control' onChange={(e) => dispatch(setDistributionStatus(e.target.value))}>
                            <option>Select Status </option>
                            {StatusDistribution && StatusDistribution.map((course) => (
                              <option value={course.id}>{course.status_distribution}</option>
                            ))}
                          </select> */}

                          <select className={`form-control ${formErrors.statusDistributionId ? "is-invalid" : ""}`} onChange={(e) => dispatch(setDistributionStatus(e.target.value))}>
                            <option>Select Status </option>
                            {StatusDistribution && StatusDistribution.map((course) => (
                              <option key={course.id} value={course.id}>{course.status_distribution}</option>
                            ))}
                          </select>
                          {formErrors.statusDistributionId && <div className="invalid-feedback">{formErrors.statusDistributionId}</div>}


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
                        <Button color="primary" type="button" onClick={handleSubmit}>
                          Add
                        </Button>
                      </ModalFooter>
                    </Modal>
                </div>




      <div>
      <Modal toggle={() => setModalInfo(!modalInfo)} isOpen={modalInfo}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
          Distribution Details {codeDistribution}
          </h5>
          <Button
            aria-label="Close"
            className=" close"
            type="button"
            color="danger"
            onClick={() => setModalInfo(!modalInfo)}
          >
            <span aria-hidden={true}>X</span>
          </Button>
        </div>

        <ModalBody>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Client Name  :  {clientId}</label><br/>
              <label for="exampleInputEmail1" class="form-label">Type Of Distribution  :  {typeofDistribution}</label><br/>
              <label for="exampleInputEmail1" class="form-label">AXE Distribution  :  {axeDistribution}</label><br/>
              <label for="exampleInputEmail1" class="form-label">Quantity  :  {quantity}</label><br/>
              <label for="exampleInputEmail1" class="form-label">Volume  :  {volume}</label>
            </div>

            <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle text-center table-bordered">
                    <thead class="text-dark fs-4 ">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Id Distribution Header</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Bill No.</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Delivery Name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Quantity</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Volume</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Line Order</h6>
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                    {distributionList && distributionList.map((client)=>(
                      <tr key={client.id}>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">{client.id_distribution_header}</h6>
                        </td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.num_bl}</h6>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.name_delivery}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.qty_line}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.volume_line}</p>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.line_order}</p>
                        </td>
                      </tr> 
                    ))}

                    </tbody>
                  </table>
                </div>

        </ModalBody>

        <ModalFooter>
        <Button color="danger" type="button" onClick={()=>dispatch(deleteDistributionHeader(distributionId))}>
            Delete
          </Button>

          <Button color="warning" type="button" onClick={()=>handleEdit(distributionId)}>
            Modify
          </Button>

          <Button color="primary" type="button" onClick={handlePlan}>
            Plan Distribution
          </Button>
        </ModalFooter>
      </Modal>
      </div>



      <div>
      <Modal toggle={() => setModalPlan(!modalPlan)} isOpen={modalPlan}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
          Plan Distribution Details {codeDistribution}
          </h5>
          <Button
            aria-label="Close"
            className=" close"
            type="button"
            color="danger"
            onClick={() => setModalPlan(!modalPlan)}
          >
            <span aria-hidden={true}>X</span>
          </Button>
        </div>

        <ModalBody>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Execution Date</label>
              <input type="date" className={`form-control ${formErrors1.executeDate ? "is-invalid" : ""}`} min={minDate}  id="exampleInputEmail1" onChange={(e)=>dispatch(setExecuteDate(e.target.value))} aria-describedby="emailHelp"/>
              {formErrors1.executeDate && <div className="invalid-feedback">{formErrors1.executeDate}</div>}
            </div>
          
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Driver</label>
                <select className={`form-control ${formErrors1.driverId ? "is-invalid" : ""}`} onChange={(e)=>dispatch(setDriver(e.target.value))}>
                    <option>Select Driver Name</option>
                    {DriverData && DriverData.map((course)=>(
                        <option key={course.id} value={course.id}>{course.firstname+" "+course.lastname}</option>
                        ))}
                </select>
                {formErrors1.driverId && <div className="invalid-feedback">{formErrors1.driverId}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Vehicle</label>
                <select className={`form-control ${formErrors1.vehicleNo ? "is-invalid" : ""}`} onChange={(e)=>dispatch(setVehicle(e.target.value))}>
                    <option>Select Vehicle No.</option>
                    {vehicleDetails && vehicleDetails.map((course)=>(
                        <option key={course.id} value={course.vid}>{course.marque_vehicule+" "+course.num_categories}</option>
                        ))}
                </select>
                {formErrors1.vehicleNo && <div className="invalid-feedback">{formErrors1.vehicleNo}</div>}
            </div>


        </ModalBody>
        <ModalFooter>
        <Button color="success" type="button" onClick={handlePlan2}>
            Plan Distribution
          </Button>
        </ModalFooter>
      </Modal>
      </div>


      <div>
      <Modal toggle={() => setModalSuccess(!modalSuccess)} isOpen={modalSuccess}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
          Plan Distribution Details {codeDistribution}
          </h5>
          <Button
            aria-label="Close"
            className=" close"
            type="button"
            color="danger"
            onClick={() => setModalSuccess(!modalSuccess)}
          >
            <span aria-hidden={true}>X</span>
          </Button>
        </div>
        <ModalBody>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Your Distribution Has Been Successfully Planned</label>
            </div>
        </ModalBody>
      </Modal>
      </div>



      <div>
      <Modal toggle={() => setModalEdit(!modalEdit)} isOpen={modalEdit}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
          Edit Distribution Details {codeDistribution}
          </h5>
          <Button
            aria-label="Close"
            className=" close"
            type="button"
            color="danger"
            onClick={() => setModalEdit(!modalEdit)}
          >
            <span aria-hidden={true}>X</span>
          </Button>
        </div>
        <ModalBody>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Delivery Date</label>
              <input type="date" value={deliveryDate} className="form-control" min={minDate} id="exampleInputEmail1" onChange={(e)=>dispatch(setDeliveryDate(e.target.value))} aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">AXE Distribution</label>
              <input type="text" value={axeDistribution} className="form-control" id="exampleInputEmail1" onChange={(e)=>dispatch(setAxeDistribution(e.target.value))} aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Quantity</label>
              <input type="text" value={quantity} className="form-control" id="exampleInputEmail1" onChange={(e)=>dispatch(setQuantity(e.target.value))} aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Volume</label>
              <input type="text" value={volume} className="form-control" id="exampleInputEmail1" onChange={(e)=>dispatch(setVolume(e.target.value))} aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Distance</label>
              <input type="text" value={distance} className="form-control" id="exampleInputEmail1" onChange={(e)=>dispatch(setDistance(e.target.value))} aria-describedby="emailHelp"/>
            </div>
          
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Select City</label>
                <select className="form-control" onChange={(e)=>dispatch(setCity(e.target.value))}>
                    {city && city.map((course)=>(
                        <option key={course.id} value={course.id}>{course.city}</option>
                        ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Truck Category</label>
                <select className="form-control" onChange={(e)=>dispatch(setTruck(e.target.value))}>
                    <option>Select Truck</option>
                    {truckCategory && truckCategory.map((course)=>(
                        <option key={course.id} value={course.id}>{course.truck_category}</option>
                        ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Type Of Distribution</label>
                <select className="form-control" onChange={(e)=>dispatch(setTypeDistribution(e.target.value))}>
                    <option>Select Type</option>
                    {typeDistribution && typeDistribution.map((course)=>(
                        <option key={course.id} value={course.id}>{course.type_distribution}</option>
                        ))}
                </select>
            </div>

        </ModalBody>
        <ModalFooter>
        <Button color="success" type="button" onClick={handlePlan3}>
            Edit Distribution
          </Button>
        </ModalFooter>
      </Modal>
      </div>









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
  