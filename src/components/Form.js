import React from "react";

const Form = () => {
  return (
    <div className="container bg-light py-3 my-5" >
      <div className="col-sm-12">
        <form className="myform mx-5" method="post"
        >
          <h2 className="text-center">Book Your Appointment</h2>
          <br />
          <div className="row my-3">
            <div className="form-group col-md-6">
              <label className="mb-2" htmlFor="name">Name</label>
              <input
                type="name"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="Email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group ">
            <label className="mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Address"
            />
          </div>
          <div className="row my-3">
            <div className="form-group  col-md-6">
              <label className="mb-2" htmlFor="Number">Number</label>
              <input
                type="text"
                className="form-control"
                id="Number"
                name="number"
                placeholder="Number"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="mb-2" htmlFor="treatment">Treatment</label>
              <select className="form-control" name="treatment" id="treatment">
                <optgroup className="my-1" label="AYURVEDIC TREATEMENT">
                  <option value="Ayurvedic treatment for Hairfall & Hair loss">
                    Ayurvedic treatment for Hairfall & Hair loss
                  </option>
                  <option value="Ayurvedic treatment for Acne & Skin infection">
                    Ayurvedic treatment for Acne & Skin infection
                  </option>
                  <option value="Prakruti Prasikshan">
                    Prakruti Prasikshan
                  </option>
                  <option value="Nadi Prasikshan">Nadi Prasikshan</option>
                  <option value="Ayurvedic Consultation for Hyperacidity">
                    Ayurvedic Consultation for Hyperacidity
                  </option>
                  <option value="Ayurvedic Consultation & management for Diabetes">
                    Ayurvedic Consultation & management for Diabetes
                  </option>
                  <option value="Ayurvedic Consultation for Life style disorder">
                    {" "}
                    Ayurvedic Consultation for Life style disorder{" "}
                  </option>
                  <option value="Ayurvedic Consultation & Treatment plan for Cholesterol">
                    Ayurvedic Consultation & Treatment plan for Cholesterol
                  </option>
                  <option value="Ayurvedic Consultation for Indigesion, Constipation">
                    Ayurvedic Consultation for Indigesion, Constipation
                  </option>
                  <option value="Ayurvedic Consultation & management for Thyroid">
                    Ayurvedic Consultation & management for Thyroid
                  </option>
                  <option value="Ayurvedic Consultation & management for Weight loss & Weight gain">
                    Ayurvedic Consultation & management for Weight loss & Weight
                    gain
                  </option>
                  <option value="Ayurvedic Consultation & management for Spine management">
                    Ayurvedic Consultation & management for Spine management
                  </option>
                  <option value="Ayurvedic treatment & management for Renal problem">
                    Ayurvedic treatment & management for Renal problem
                  </option>
                  <option value="Complete solution for hair problem">
                    Complete solution for hair problem
                  </option>
                  <option value="Ayurvedic treatment & management for Gynac problem">
                    Ayurvedic treatment & management for Gynac problem
                  </option>
                  <option value="Ayurvedic treatment & management for Children">
                    Ayurvedic treatment & management for Children
                  </option>
                </optgroup>
                <optgroup className="my-1" label="PANCHKARMA THERAPIES">
                  <option value="Pada-abhyanga">Pada-abhyanga</option>
                  <option value="Manyabasti">Manyabasti</option>
                  <option value="Janubasti">Janubasti</option>
                  <option value="Katibasti">Katibasti</option>
                  <option value="Herbal Steam">Herbal Steam</option>
                  <option value="Whole Body Massage">Whole Body Massage</option>
                  <option value="medicated Enema">medicated Enema</option>
                  <option value="Shirodhara">Shirodhara</option>
                  <option value="Nasya">Nasya</option>
                  <option value="Netratrapan">Netratrapan</option>
                  <option value="Leeach Therapy">Leeach Therapy</option>
                  <option value="Patra pinda swed">Patra pinda swed</option>
                </optgroup>
                <optgroup className="my-1" label="BEAUTY TREATEMENT">
                  <option value="Ayurvedic facial">Ayurvedic facial</option>
                  <option value="Ayurvedic Hair Spa">Ayurvedic Hair Spa</option>
                  <option value="Pada-abhangya">Pada-abhangya</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="row my-3">
            <div className="form-group col-md-6">
              <label className="mb-2" htmlFor="state">State</label>
              <input
                type="state"
                className="form-control"
                name="state"
                id="state"
                placeholder="Name"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="mb-2" htmlFor="city">City</label>
              <input
                type="city"
                className="form-control"
                name="city"
                id="city"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="form-group col-md-12">
            <div className="form-check my-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label " htmlFor="gridCheck">
                I Agree
              </label>
            </div>
          </div>
          <button type="submit" name="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Form;
