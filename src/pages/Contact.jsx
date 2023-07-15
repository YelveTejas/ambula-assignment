import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 

 
    const [formErrors, setFormErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };
  
    const validateForm = () => {
      let errors = {};
      if (!formData.name) {
        errors.name = "Name is required";
      }
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid email address";
      }
      if (!formData.message) {
        errors.message = "Message is required";
      }
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Do something with the form data, e.g., send it to a backend server
        console.log(formData);
        // Reset the form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setFormErrors({});
      }
    };
  
    return (
      <Box w="400px" margin="auto" mt="1cm">
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!formErrors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <FormErrorMessage>{formErrors.name}</FormErrorMessage>
          </FormControl>
          <FormControl mt="10px" isInvalid={!!formErrors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <FormErrorMessage>{formErrors.email}</FormErrorMessage>
          </FormControl>
          <FormControl mt="10px" isInvalid={!!formErrors.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
            <FormErrorMessage>{formErrors.message}</FormErrorMessage>
          </FormControl>
          <Button mt="10px" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    );
  }

export default Contact