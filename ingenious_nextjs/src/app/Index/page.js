"use client"
import Link from "next/link";
import Footer from "../Footer/page";
import Header from "../Header/page";
import Sidebar from "../Sidebar/page";
import { setLoginStatusNull } from "../redux/adminuserregister";
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import Login from "../Login/page";


export default function Index() {

const { loginstatus }  = useSelector((state) => state.adminuserregister);

const [roleid, setRoleId] = useState('');

const dispatch = useDispatch();

useEffect(() => {
  const localUser = localStorage.getItem('user');
  setRoleId(localStorage.getItem('roleid'));
  if (localUser===null) 
  {
    return <Login/>
  } 
  else 
  {
    toast.success('Login Success', { toastId: '7' });
    dispatch(setLoginStatusNull());
  }
}, [dispatch]);

    return (
    <>
                <ToastContainer />

  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <Sidebar/>
    <div class="body-wrapper">
      <Header/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 m-auto text-center">
            <div class="row ">

            <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-8 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                        <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
                      </svg><br/><br/>
                        <Link href="/Index" class="card-title mb-9 fw-semibold">Dashboard</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          {roleid == 1?
            
          <>
           <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-8 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>  <br/><br/>
                        <Link href="/Planning" class="card-title mb-9 fw-semibold">Planning</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
</svg>  <br/><br/>
                        <Link href="/Clients" class="card-title mb-9 fw-semibold">Client Management</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          

            <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>  <br/><br/>
                        <Link href="/Distribution" class="card-title mb-9 fw-semibold">Distribution</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
</svg>  <br/><br/>
                      <Link href="/StatusDistribution" class="card-title mb-9 fw-semibold">Distribution Status</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
  <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
</svg>  <br/><br/>
                      <Link href="/TypeDistribution" class="card-title mb-9 fw-semibold">Distribution Type</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

          </>
          
          :
          <>

<div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
  <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
</svg><br/><br/>
                      <Link href="/City" class="card-title mb-9 fw-semibold">City Management</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>  <br/><br/>
                      <Link href="/TruckCategory" class="card-title mb-9 fw-semibold">Truck Management</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16">
  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
</svg><br/><br/>
                      <Link href="/VehicleDetails" class="card-title mb-9 fw-semibold">Vehicle Management</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16">
  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.75 1.75 0 0 1-.088.395l-.318.906.213.242a.75.75 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
  <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.75.75 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914l2.345-3.048Zm4.22-4.215-.494-.494.205-1.843a1.93 1.93 0 0 0 .006-.067l1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
</svg>  <br/><br/>
                      <Link href="/Driver" class="card-title mb-9 fw-semibold">Driver Management</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16">
  <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.75 1.75 0 0 1-.088.395l-.318.906.213.242a.75.75 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
  <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.75.75 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914l2.345-3.048Zm4.22-4.215-.494-.494.205-1.843a1.93 1.93 0 0 0 .006-.067l1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
</svg>  <br/><br/>
                      <Link href="/Role" class="card-title mb-9 fw-semibold">Role Management</Link>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              



            
          </>

          }
        
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
  