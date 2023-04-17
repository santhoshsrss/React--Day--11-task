import * as yup from "yup";
 

export const basicschema = yup.object().shape({
    studentid: yup.
    number()
    .positive()
    .integer()
    .min(5)
    .required("Please enter the number"),
    
    firstname: 
    yup.string()
    .min(5)
    .required("please enter your name"),
    
    email: 
    yup.string()
    .email()
    .required("please enter your email address"),
    
    bookname: 
    yup.string()
    .required("Please enter the book name"),
    
    authorname: 
    yup.string()
    .required("please enter the author name"),
    
    booknumber: 
    yup.number()
    .min(3)
    .required("please enter the book number"),

})