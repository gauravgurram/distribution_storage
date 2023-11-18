"use client"
import Link from "next/link";
import { setFirstName,setLastName,setEmail,setPassword,setRole, addRegister,fetchRoles} from "../redux/adminuserregister";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Registration() {

  const { roles,firstName,lastName,email,password,role,ExistedMail,loading }  = useSelector((state) => state.adminuserregister);

  const dispatch = useDispatch();

  const [formErrors, setFormErrors] = useState({});

  const data = {
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    role:role
  }


  useEffect(()=>{
    dispatch(fetchRoles())
  },[dispatch]);

  console.log(ExistedMail)

// <!-------------------Validation Section------------------!>


const validateForm = () => {
  const errors = {};

  if (!firstName) {
    errors.firstName = 'First Name is required.';
  } else {
    const stringPattern = /^[A-Za-z]+$/; // Updated regex pattern to only allow alphabetic characters
    if (!stringPattern.test(firstName)) {
      errors.firstName = 'First Name must contain only alphabetic characters.';
    } else if (firstName.length < 3) {
      errors.firstName = 'First Name must be at least 3 characters.';
    }
  }


  if (!lastName) {
    errors.lastName = 'LastName is required.';
  } else {
    const stringPattern = /^[A-Za-z]+$/;
    if (!stringPattern.test(lastName)) {
      errors.lastName = 'Last Name must contain only string characters.';
    } else if (lastName.length < 3) {
      errors.lastName = 'Last Name must be at least 3 characters.';
    }
  }

  if (!email) {
    errors.email = 'Email is required.';
  } 
  else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid.';
  }


  if (!password) {
    errors.password = 'Password is required.';
  } else {
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
    } else {
      if (!/[A-Za-z]/.test(password)) {
        errors.password = 'Password must contain at least one letter (string character).';
      }
      if (!/@/.test(password)) {
        errors.password = 'Password must contain the "@" symbol.';
      }
    }
  }

  if (!role) {
    errors.role = "Role is required";
  }

  setFormErrors(errors);

  return Object.keys(errors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    dispatch(addRegister(data));
  }
};

// <!-------------------Validation Section------------------!>


if(loading)
{
 return(
   <>
   <h1 className="text-center">Loading</h1>
   </>
 )
}

else
{
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
                    <Link href="/Registration" class="text-nowrap logo-img text-center d-block py-3 w-100">
                      <Image src="/assets/images/logos/dark-logo.jpg" width="180" height="130" alt="Picture" />
                    </Link>
                    <div class="mb-3">
                      <label for="exampleInputtext1" class="form-label">First Name</label>
                      <input type="text" class={`form-control ${formErrors.firstName ? "is-invalid" : ""}`} id="exampleInputtext1"
                        onChange={(e) => dispatch(setFirstName(e.target.value))} aria-describedby="textHelp" required />
                      {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputtext1" class="form-label">Last Name</label>
                      <input type="text" class={`form-control ${formErrors.lastName ? "is-invalid" : ""}`} id="exampleInputtext1"
                        onChange={(e) => dispatch(setLastName(e.target.value))} aria-describedby="textHelp" required />
                      {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email Address</label>
                      <input type="email" class={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                        onChange={(e) => dispatch(setEmail(e.target.value))} id="exampleInputEmail1" aria-describedby="emailHelp"
                        required />
                      {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                    </div>

                    <div class="mb-4">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class={`form-control ${formErrors.password ? "is-invalid" : ""}`} id="exampleInputPassword1"
                        onChange={(e) => dispatch(setPassword(e.target.value))} required />
                      {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Role</label>
                      <select className={`form-control ${formErrors.role ? "is-invalid" : ""}`} onChange={(e) => dispatch(setRole(e.target.value))}>
                        <option>---Select Role---</option>
                        {roles && roles.map((course) => (
                          <option key={course.id} value={course.id}>{course.role_title}</option>
                        ))}
                      </select>
                      {formErrors.role && <div className="invalid-feedback">{formErrors.role}</div>}
                    </div>

                    <button type="submit" onClick={handleSubmit} class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</button>

                    <div class="d-flex align-items-center justify-content-center">
                      <p class="fs-4 mb-0 fw-bold">Already have an Account?</p>
                      <Link class="text-primary fw-bold ms-2" href="/Login">Sign In</Link>
                    </div>

                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Script src="../assets/libs/jquery/dist/jquery.min.js"></Script>
  <Script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
      </>
    )
  }
  }
  