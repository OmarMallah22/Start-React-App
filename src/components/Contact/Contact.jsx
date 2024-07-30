import React, { Component } from "react";
import style from "./Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className={style.contact}>
          <div className="container">
            <h2>contact me</h2>
            <div className={style.divider}>
              <i class="fa-solid fa-star fa-xlg"></i>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto mt-5">
                <div className={style.form}>
                  <div className="form-group ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-3 mb-3 border-none width-100 form-control"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="p-3 mb-3 border-none width-100 form-control"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="p-3 mb-3 border-none width-100 form-control"
                    />
                  </div>
                  <div className="form-group ">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary "
                      value={"send"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
