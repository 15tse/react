import React,{useState} from 'react';

function FormComponent() {
   const[formData,setFormData] = useState({});

   function handleInputChange (event) {
       const {name,value} = event.target;
        setFormData({...formData,[name]:value});

    }
   function handleSubmit(event){
        event.preventDefault();
       console.log(formData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange}  />
            <input type="text" name="email" placeholder="Email" onChangeCapture={handleInputChange} />
            <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
            <button type="submit" value="submit" >submit</button>
        </form>
        <span>name: {formData.name}</span><br/>
        <span>email: {formData.email}</span><br/>
        <span>phone: {formData.phone}</span><br/>

        </>
    );
}

export default FormComponent;