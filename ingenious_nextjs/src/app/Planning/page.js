"use client"
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/page";
import Header from "../Header/page";
import Sidebar from "../Sidebar/page";
import { fetchMap } from "../redux/typedistribution";
import { useEffect } from "react";


export default function Planning() {


  const {planMap}  = useSelector((state) => state.typedistribution);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMap())
  },[dispatch]);

  // var truck1  = planMap.reduce((accumulator, planMap) => accumulator + parseInt(planMap.tid), 0);


  return (
  <>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <Sidebar/>
    <div class="body-wrapper">
      <Header/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 m-auto ">
            <div class="row">

              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-12">
                      <div class="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-truck-flatbed" viewBox="0 0 16 16">
  <path d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z"/>
</svg>                   
                        </div>
                        <h6 class="card-title mb-9 fw-semibold">Available trucks (by type) : </h6>
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
                      <div class="col-12">
                      <div class="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-truck-container" viewBox="0 0 16 16">
                      <path d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z"/>
                      </svg>                   

                        </div>
                        <h6 class="card-title mb-9 fw-semibold">Available trucks (by type) : 7</h6>
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
                      <div class="col-12">
                        <div class="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>                    
                        </div>
    <h6 class="card-title mb-9 fw-semibold">Available trucks (by type) : 10</h6>
                        {/* <h4 class="fw-semibold mb-3">$6,820</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
            <h2 class="text-center">Planning</h2>
            <br/>
            <div class="col-lg-12 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Recent Transactions</h5>
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Id</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Driver Details</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Vehicle Details</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Status</h6>
                        </th>
                      
                      </tr>
                    </thead>
                    <tbody>

                    {planMap && planMap.map((client)=>(
                      <tr key={client.mid}>
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{client.mid}</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{client.firstname} {client.lastname}</h6>
                            <span class="fw-normal">{client.n_tel}</span>                          
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{client.marque_vehicule} {client.num_categories}</p>
                        </td>
                        <td class="border-bottom-0">
                          <div class="d-flex align-items-center gap-2">
                            <span class="badge bg-primary rounded-3 fw-semibold">{client.flag_status}</span>
                          </div>
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
      </div>
    </div>
  </div>
  <Footer/>
</>
    )
  }
  