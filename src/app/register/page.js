"use client"
import { Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import React from 'react'
import * as yup from "yup";
import axios from 'axios';
import { useState } from "react";
import { BASE_URL } from '@/utils/constant';


const FILE_SIZE = 1024 * 1024 * 10; // 10MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export default function page() {
  const validationSchema = yup.object({
    title:yup.string().required("Title is required"),
    description:yup.string().required("Description is required"),
    price:yup.number().positive().integer().required("price is required"),
    categoryId:yup.number().positive().integer(),
//     images:yup.array().min(1, "At least one file is required").test("fileSize", "File too large", (value) => {
//       console.log("value", value);
//       if(!value){
//           return true
//       }
//       return value.size <= FILE_SIZE;
//   }).test("fileFormat", "Unsupported Format", (value) => {
//       if(!value){
//           return true
//       }
//       return SUPPORTED_FORMATS.includes(value.type);
//   }).required("Required")
  })
//   const uploadImage = async (values) => {
//     try {
//         const response = await axios.post(
//           `${BASE_URL}files/upload`,
//           values.file
//         );
//         console.log(response);
//         setIsLoading(false);
//         return response.data.location;
//       } catch (error) {
//         console.log(error.message);
//         alert(error.message)
//       }
// }

const insertUser = async (data) => {
    let {title, price, description, categoryId, images} = data
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const userData = JSON.stringify({
      title, price, description, categoryId, images
    })

    let requestData = {
        method: "POST",
        headers: myHeaders,
        body: userData,
    }
    const resp= await fetch(`${BASE_URL}products`, requestData)
       return resp.json()
  }
// const postUser = (user) => {
//     fetch("https://api.escuelajs.co/api/v1/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((resp) => resp.json())
//       .then((res) => console.log(res));
//   }
  return (
    <>
      <h1>page</h1>
      <Formik
      initialValues={{
        title:"", price:"", description:"", categoryId:"", images:["PHOTO-2023-05-16-11-26-36.jpg"]
      }}
      validationSchema={validationSchema}
       
      onSubmit={async (values, {setSubmitting}) => {
                // const formData = new FormData();
                // formData.append("files", values.file);
                // const images = await uploadImage({file: formData});
                // console.log("files", images );
                // console.log(values.file)
                // values.images  = images ;

                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    insertUser(values)
                    .then(resp=>{
                        alert("inser user success")
                        console.log(resp)
                    })
                    setSubmitting(false);
                  }, 1000);
      }}
      >
         {
                ({values,isSubmitting}) => (
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                    ISTAD    
                            </a>
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Create a user account
                                    </h1>
                                        <Form 
                                            className="space-y-4 md:space-y-6"
                                        >
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                                <Field type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                                <ErrorMessage 
                                                    name="title"
                                                >
                                                    {msg => <div className="text-red-600">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                                <Field type="number" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                                <ErrorMessage 
                                                    name="price"
                                                >
                                                    {msg => <div className="text-red-600">{msg}</div>}
                                                </ErrorMessage>

                                            </div>
                                            <div>
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <Field type="description" as="textarea" name="description" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                                <ErrorMessage 
                                                    name="password"
                                                >
                                                    {msg => <div className="text-red-600">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div>
                                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                                <Field  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                as="select"
                                                name="categoryId"
                                               >
                                              <option value="0">Please select option</option>
                                              <option value="1">Clothes</option>
                                              <option value="2">Electronics</option>
                                                </Field>
                                                <ErrorMessage 
                                                    name="categoryId"
                                                >
                                                    {msg => <div className="text-red-600">{msg}</div>}
                                                </ErrorMessage>
                                            </div>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                    </div>                                                
                                                    {/* <Field      
                                                        id="dropzone-file" 
                                                        name="images" 
                                                        type="file" 
                                                        className="hidden"
                                                        component={DropFileZone}
                                                    />  */}
                                                </label>
                                                
                                            </div> 
                                            {/* <ErrorMessage 
                                                name="images"
                                            >
                                                {msg => <div className="text-red-600">{msg}</div>}
                                            </ErrorMessage> */}
                                            
                                            <button 
                                                disabled={isSubmitting}
                                                type="submit" class="text-white w-full bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2">
                                                <svg aria-hidden="true" class="w-10 h-3 mr-2 -ml-1" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.812 0L0 63.76H34.492L38.768 53.594H48.542L52.818 63.76H90.784V56.001L94.167 63.76H113.806L117.189 55.837V63.76H196.148L205.749 53.858L214.739 63.76L255.294 63.842L226.391 32.058L255.294 0H215.368L206.022 9.71899L197.315 0H111.418L104.042 16.457L96.493 0H62.073V7.495L58.244 0C58.244 0 28.812 0 28.812 0ZM35.486 9.05399H52.299L71.41 52.29V9.05399H89.828L104.589 40.054L118.193 9.05399H136.519V54.806H125.368L125.277 18.955L109.02 54.806H99.045L82.697 18.955V54.806H59.757L55.408 44.549H31.912L27.572 54.797H15.281C15.281 54.797 35.486 9.05399 35.486 9.05399ZM146.721 9.05399H192.063L205.931 24.034L220.246 9.05399H234.114L213.043 32.049L234.114 54.779H219.617L205.749 39.625L191.361 54.779H146.721V9.05399ZM43.665 16.795L35.924 35.067H51.397L43.665 16.795ZM157.918 18.527V26.879H182.654V36.188H157.918V45.306H185.663L198.555 31.876L186.21 18.519H157.918V18.527Z" fill="white"/></svg>
                                                Create user with formik - ISTAD
                                            </button>
                                            
                                        </Form>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </Formik>  
    </>
  )
}
// function DropFileZone({field, form}){
//     const [previewImage, setPreviewImage] = useState(null);
//     const handleChange = (event) => {
//         const file = event.currentTarget.files[0];
//         form.setFieldValue(field.name, file);
//         setPreviewImage(URL.createObjectURL(file));
//     }
//     return(
//         <> 
//             <input
//                 id="dropzone-file" 
//                 type="file"
//                 name="images"
//                 onChange={handleChange}
//                 className="hidden"
//                 multiple
//             />
//             {previewImage && (
//                 <img 
//                     src={previewImage} 
//                     alt="preview" 
//                     className="mt-2 h-20 w-full" />
//             )}
//         </>
//     )
// }


