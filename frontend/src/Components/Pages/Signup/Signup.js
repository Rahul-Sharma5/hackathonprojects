import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <>
            <div class="px-5 py-3 p-lg-0">
                <div class="d-flex justify-content-center">
                    <div class="col-12 col-md-9 col-lg-7 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                        <div className='container-fluid'>
                            <div class="row">
                                <div class="col-lg-10 col-md-9 col-xl-12 mx-auto">
                                    <div class="text-center mb-12">
                                        <span class="d-inline-block d-lg-block h1 mb-lg-6 me-3">👋</span>
                                        <h1 class="ls-tight font-bolder h2">
                                            Registration Now
                                        </h1>

                                    </div>
                                    <form class="mb-3">
                                        <div class="row mb-5">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="full_name">Full name</label>
                                                    <input type="text" class="form-control" id="full_name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="email">Email</label>
                                                    <input type="email" class="form-control" id="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row g-5">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="dob">DOB</label>
                                                    <input type="date" class="form-control" id="dob" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="account_number">Account number</label>
                                                    <input type="text" class="form-control" id="account_number" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="state">State</label>
                                                    <input type="text" class="form-control" id="state" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="district">District</label>
                                                    <input type="text" class="form-control" id="district" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="aadhar_number">Aadhar Number</label>
                                                    <input type="text" class="form-control" id="aadhar_number" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="password">Password</label>
                                                    <input type="text" class="form-control" id="password" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="form-label" for="confirm_password">Confirm Password</label>
                                                    <input type="text" class="form-control" id="confirm_password" />
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <button class="btn btn-primary w-full mt-5">
                                                Sign up
                                            </button>
                                        </div>
                                    </form>
                                    <div class="my-3">
                                        <small>have an account?</small>
                                        <a href="/login" class="text-warning text-sm font-semibold"> Sign in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
