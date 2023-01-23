import React, { Component } from "react";

class AddSchedule extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Add Schedules</h1>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-control w-25" />
        </div>
        <div className="mb-2">
          <label htmlFor="from" className="form-label">
            from
          </label>
          <input type="time" id="from" className="form-control w-25" />
        </div>
        <div className="mb-2">
          <label htmlFor="to" className="form-label">
            To
          </label>
          <input type="time" id="to" className="form-control w-25" />
        </div>
      </div>
    );
  }
}

export default AddSchedule;
