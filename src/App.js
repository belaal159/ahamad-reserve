import React, { useState } from 'react';

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    position: '',
    wage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { ...formData };
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
    setFormData({
      name: '',
      age: '',
      country: '',
      position: '',
      wage: ''
    });
  };

  const handleDelete = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Planner list</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>หัวเรื่อง:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>วันที่:</label>
          <input type="date" className="form-control" name="age" value={formData.age} onChange={handleChange} />
        </div>
       
        <div className="form-group">
          <label>เวลา:</label>
          <input type="text" className="form-control" name="position" value={formData.position} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>วันนี้ทำอะไร: </label>
          <input type="text" className="form-control" name="wage" value={formData.wage} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      <h2 className="mt-4"> เป้าหมาย </h2>
      <ul className="list-group">
        {employees.map((employee, index) => (
          <li className="list-group-item" key={index}>
            Name: {employee.name}, Age: {employee.age}, Country: {employee.country}, Position: {employee.position}, Wage: {employee.wage}
            <button className="btn btn-danger ml-2" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeManagement;
