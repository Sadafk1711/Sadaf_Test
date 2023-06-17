
import React, { useState } from 'react';
import './AdmissionForm.css';


const AdmissionForm = () => {
 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Course:', course);

    setName('');
    setAge('');
    setGender('');
    setCourse('');
  };

  return (
    <div className="admission-form">
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:*</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='This is a required field.'required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:*</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder='This is a required field.' required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:*</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder='This is a required field.' required >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:*</label>
          <input type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder='This is a required field.' required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;

