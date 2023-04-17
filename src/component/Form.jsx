import'./form.css'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import{basicschema} from "./yupfile.jsx"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const onSubmit = (values, actions ) => {
  console.log(values);
  console.log(actions);
  
  actions.resetForm();
};



export function BasicForm() {
  const {values,errors, handleBlur, isSubmitting, touched, handleChange, handleSubmit} =useFormik({
    initialValues:{
      studentid:'',
      firstname:'',
      email:'',
      bookname:'',
      authorname:'',
      booknumber:''
    },
    validationSchema:basicschema,
    onSubmit,
  })
  console.log(errors)

  return (
    <div className="form">
      <div className="title">Library mangement</div>
      <div className="input234">
        <form onSubmit={handleSubmit} className='input'>
          
         
          <TextField  
          value={values.studentid}
          onChange={handleChange}
          onBlur={handleBlur}
          id="studentid" 
          type="text" 
          name="studentid"
          label="Student ID" 
          variant="outlined" />
          {errors.studentid && touched.studentid && <p className='error'>{errors.studentid}</p>}
      
          
          <TextField
           value={values.firstname}
           onChange={handleChange}
           onBlur={handleBlur}
          id="firstname" 
          type="text" 
          name="firstname"            
          label="Student Name" 
          variant="outlined" />
          {errors.firstname && touched.firstname && <p className='error'>{errors.firstname}</p>}
      
          
          <TextField 
           value={values.email}
           onChange={handleChange}
           onBlur={handleBlur}
          id="email" 
          type="email" 
          name="email"           
          label="Student Email" 
          variant="outlined" />
          {errors.email && touched.email && <p className='error'>{errors.email}</p>}
        
          
          <TextField
           value={values.bookname}
           onChange={handleChange}
           onBlur={handleBlur}
          id="bookname" 
          type="text" 
          name="bookname"         
          label="Book Name" 
          variant="outlined" />
          {errors.bookname && touched.bookname && <p className='error'>{errors.bookname}</p>}
         
          
          <TextField 
           value={values.authorname}
           onChange={handleChange}
           onBlur={handleBlur}
          id="authorname" 
          type="text" 
          name="authorname"          
          label="Author Name" 
          variant="outlined" />
          
          {errors.authorname && touched.authorname && <p className='error'>{errors.authorname}</p>}
          
          <TextField 
           value={values.booknumber}
           onChange={handleChange}
           onBlur={handleBlur}
          id="booknumber" 
          type="text" 
          name="booknumber"        
          label="Book Number" 
          variant="outlined" />
          
          {errors.booknumber && touched.booknumber && <p className='error'>{errors.booknumber}</p>}

          <Button 
          disabled={isSubmitting} 
          variant="contained" 
          type='submit'>
          
            Submit
          
          </Button>
        
        </form>
      
      </div>
      
    </div>
  );
}
