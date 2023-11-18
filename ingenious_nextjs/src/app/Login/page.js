"use client"
import Link from "next/link";
import { setEmail,setPassword,login} from "../redux/adminuserregister";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
import Image from 'next/image'

export default function Login() {

  const { email,password,loginstatus}  = useSelector((state) => state.adminuserregister);

  useEffect(()=>{
    if (loginstatus === 'fail') {
        toast.error("Wrong Credentials",{
            toastId:'01'
        });
    }
},[loginstatus]);


  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});
  const data = {
    email: email,
    password: password,
  }

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    } else {
      try {
        const data1 = {
          email: email,
        }
        dispatch(emailcheck(data1));


        if (emailchecking === 'success') {
          errors.email = 'Email already exists.';
        } else {
          return true;
        }

      } catch (error) {

        console.error('API request error:', error);
      }
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else {

      if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters.';
      }

      if (!/[A-Za-z]/.test(password)) {
        errors.password = 'Password must contain at least one letter (string character).';
      }

      if (!/@/.test(password)) {
        errors.password = 'Password must contain the "@" symbol.';
      }
    }


    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(login(data));
    }
  };

  return (
    <>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
       <div class="d-flex align-items-center justify-content-center w-100">
         <div class="row justify-content-center w-100">
           <div class="col-md-8 col-lg-6 col-xxl-3">
             <div class="card mb-0">
              <div class="card-body">
                    <Link href="/Login" class="text-nowrap logo-img text-center d-block py-3 w-100">
                      <Image src="/assets/images/logos/dark-logo.jpg" width="220" height="130" alt="Picture of the author" />
                    </Link>
                    <h5 class="text-center">Login</h5>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Username</label>
                      {/* <input type="email" class="form-control" onChange={(e)=>dispatch(setEmail(e.target.value))} id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                      <input type="email" class={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                        onChange={(e) => dispatch(setEmail(e.target.value))} id="exampleInputEmail1" aria-describedby="emailHelp"
                        required />
                      {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      {/* <input type="password" class="form-control" onChange={(e)=>dispatch(setPassword(e.target.value))} id="exampleInputPassword1"/> */}
                      <input type="password" class={`form-control ${formErrors.password ? "is-invalid" : ""}`} id="exampleInputPassword1"
                        onChange={(e) => dispatch(setPassword(e.target.value))} required />
                      {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                      <div class="form-check">
                      <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" />
                      <label class="form-check-label text-dark" for="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                      {/* <a class="text-primary fw-bold" href="./index.html">Forgot Password ?</a> */}
                    </div>
                    <Link href="/Index" onClick={handleSubmit} class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</Link>
                          <ToastContainer />
                    <div class="d-flex align-items-center justify-content-center">
                    <p class="fs-4 mb-0 fw-bold">New to Distribution?</p>
                    <Link class="text-primary fw-bold ms-2" href="/Registration">Create an account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Script src="assets/libs/jquery/dist/jquery.min.js"></Script>
  <Script src="assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}
