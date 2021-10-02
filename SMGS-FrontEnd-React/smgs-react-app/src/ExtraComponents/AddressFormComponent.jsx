const AddressForm = () => {
  return (
    <div className="container">
      <form className="form-horizontal address-form">
        <h2> Address Details:-</h2>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Address*</strong>
          <div className="col-sm-10">
            <input
              type="text"
              placeholder="Address_line"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Address_line2*</strong>
          <div className="col-sm-10">
            <input
              type="text"
              placeholder="Address_line2"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-4">
              <strong className="col-sm-3 control-label">Country* </strong>
            </div>
            <div className="col-sm-4">
              <strong className="col-sm-2 control-label">State* </strong>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <input
                type="email"
                placeholder="Country"
                className="form-control"
                name=""
                disabled
                value="india"
              />
            </div>
            <div className="col-sm-4">
              <input
                placeholder="State"
                className="form-control"
                name=""
                disabled
                value="maharashtra"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-4">
              <strong className="col-sm-3 control-label">City* </strong>
            </div>
            <div className="col-sm-4">
              <strong className="col-sm-2 control-label">Area* </strong>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <input placeholder="City" className="form-control" name="" />
            </div>
            <div className="col-sm-4">
              <input placeholder="Area" className="form-control" name="" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-4">
              <strong className="col-sm-3 control-label">PinCode* </strong>
            </div>
          </div>
          <div className="col-sm-4">
            <input
              type="number"
              max="999999"
              placeholder="ex.(444604)"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-9 col-sm-offset-3">
            <span className="help-block">*Required fields</span>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-3">
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-success ">Back to login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;

/*==========================================  Address form  =================================*/

/*
    .address-form{
        max-width: 530px;
        padding: 15px;
        margin: 0 auto;
        border-radius: 0.3em;
        background-color: #f2f2f2;
        margin-bottom: 155px;
        
    }
    
    .address-form h2 { 
        font-family: 'Open Sans' , sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #000000;
        margin-top: 5%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 4px;
     } */
