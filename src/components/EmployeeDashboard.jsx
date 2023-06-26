import React from 'react';
import '../styles/Employeedata.css';

class EmployeeDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      propsData: props.employee,
    };
    this.editEmployeeData = this.editEmployeeData.bind(this);
    this.updateEmployeeData = this.updateEmployeeData.bind(this);
  }

  editEmployeeData(e) {
    let thisText = e.target.innerHTML;
    if (thisText == 'Edit') {
      this.setState({ isEditMode: true });
      e.target.innerHTML = 'Save';
    } else if (thisText == 'Save') {
      this.setState({ isEditMode: false });
      e.target.innerHTML = 'Edit';
    }
  }
  updateEmployeeData(e) {
    //
    var parentNodeId = e.target.closest('.data-table-row').getAttribute('id');
    var editedEmpId = parentNodeId.split('_')[1];
    var editedKeyName = e.target.getAttribute('data-key');
    let empData = JSON.parse(localStorage.getItem('employeeData'));
    let updatedEmpData = empData.forEach((emp, index) => {
      if (emp.id === editedEmpId) {
        empData[index][editedKeyName] = e.target.value;
        return false;
      }
    });
    localStorage.setItem('employeeData', JSON.stringify(empData));
  }

  render() {
    return (
      <div className="data-table-row" id={`row_${this.state.propsData.id}`}>
        <div className="data-table-data-col">{this.state.propsData.id}</div>
        <div className="data-table-data-col">
          <input
            data-key="firstName"
            className={
              this.state.isEditMode ? 'tb-edit-mode' : 'tb-non-edit-mode'
            }
            type="text"
            defaultValue={this.state.propsData.firstName}
            onChange={this.updateEmployeeData}
          />
        </div>
        <div className="data-table-data-col">
          {this.state.propsData.lastName}
        </div>
        <div className="data-table-data-col">
          {this.state.propsData.Experience}
        </div>
        <div className="data-table-data-col">{this.state.propsData.Salary}</div>
        <div className="data-table-data-col scol">
          <a className="data-table-data-link" onClick={this.editEmployeeData}>
            Edit
          </a>
        </div>
      </div>
    );
  }
}

export default EmployeeDashboard;
