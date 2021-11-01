import React from "react"
import './Footer.css'

const Footer = () => <footer className="page-footer font-small blue pt-4 mt-5">
    <div className="container-fluid text-center text-md-left background-color p-5">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
    <h5 className="text-uppercase  fs-1 fw-bolder">24 Hours Services</h5>
                <h4 className="text-white">Contuct Our Tem-Member Services </h4>
                    <br />
                    <h6 className="text-white"> +8801725148821</h6>
                    <h6 className="text-white"> +8801743454455</h6>
                    <h6 className="text-white"> +8801724354545</h6>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
             <h5 className=" text-warning fs-1 fw-bolder text-uppercase">Book This Services </h5>
             <br />
                <ul className="list-unstyled">
                <i className="fas fs-1 fa-route"></i>
                    <br />
                    <br />
                    <i className="fas fs-1 fa-suitcase-rolling"></i>
                 
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase  fs-1 fw-bolder"> ALL Services </h5>
             <ul className="list-unstyled">
            <li><a className="text-warning" href="/home">Home</a></li>
            <li><a className="text-warning" href="/services">Services</a></li>
            <li><a className="text-warning" href="/about">About Us</a></li>
            <li><a className="text-warning" href="/contuct">Contuct Us</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright by: <b>  PH-Travel</b>
    </div>

</footer>

export default Footer