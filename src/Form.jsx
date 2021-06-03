import React from "react";

const Form = () => {
  return (
    <>
      <div className="container overflow-hidden mt-5 ">
        <div className="row ">
          <div className="col-sm-8">
            <div className="form">
              <h5>Send your message</h5>
              <form>
                <div className="row">
                  <div className="col-sm-4 col-12 me-5">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-sm-4 col-12">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-12 me-5">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="col-sm-4 col-12">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div class="form-floating">
                      <textarea
                        class="form-control message"
                        placeholder="Message"
                        id="floatingTextarea2"
                      ></textarea>
                      <label for="floatingTextarea2" className="mess">
                        Message
                      </label>
                    </div>
                    <button type="button" class="btn btn-warning">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="doc">
              <button type="button" class="btn btn-warning">
                <i class="fas fa-file-pdf"></i>
                Download.Doc
                <i class="fas fa-download"></i>
              </button>
              <button type="button" class="btn btn-warning">
                <i class="fas fa-file-pdf"></i>
                Download.Pdf
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
