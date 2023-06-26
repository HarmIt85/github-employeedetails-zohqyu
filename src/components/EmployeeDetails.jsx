import React, { Component } from 'react';
import EmployeeDashboard from './EmployeeDashboard';
import sampleData from './sampleData';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeedatas: [],
      initEmpData: sampleData,
    };
  }
  componentDidMount() {
    let coreEmpData = JSON.parse(localStorage.getItem('employeeData'));
    if (coreEmpData) {
      this.setState({
        employeedatas: coreEmpData,
      });
    } else {
      localStorage.setItem(
        'employeeData',
        JSON.stringify(this.state.initEmpData)
      );
      this.setState({
        employeedatas: JSON.parse(localStorage.getItem('employeeData')),
      });
    }
  }

  render() {
    return (
      <div>
        <div className="body-bg">
          <div className="common-title">Employee Details</div>
          <div className="data-table">
            <div className="data-table-heading-row">
              <div className="data-table-heading-col">id</div>
              <div className="data-table-heading-col">First Name</div>
              <div className="data-table-heading-col">Last Name</div>
              <div className="data-table-heading-col">Experience</div>
              <div className="data-table-heading-col">Salary</div>
            </div>
            {this.state.employeedatas.map((employee, index) => (
              <EmployeeDashboard employee={employee} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default EmployeeDetails;
