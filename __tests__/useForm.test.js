import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import useForm from "../index";

const mockData = {
    email: "something@gmail.com",
    password: "password123!!"
}

const FormComponent = ({onSubmit}) => {
    const [submitAction] = useForm(onSubmit)
    return (
        <form onSubmit={submitAction}>
            <input name="email" defaultValue={mockData.email} />
            <input name="password" defaultValue={mockData.password} />
            <input name="signup" type="checkbox" defaultChecked={true}/>
            <button type="submit">Submit</button>
        </form>
    )
}

test("form renders fine enough hook", async () => {
    render(
      <FormComponent /> 
    );
  
    const formNode = [...document.querySelectorAll("form input")].length;

    expect(formNode).toEqual(3);
});

test("data is to be in expected format", async () => {
    let returnedData; 
    const getData = (data) => {returnedData = data}
    
    const { getByText } = render(
      <FormComponent onSubmit={getData} /> 
    );
  
    const formNode = document.querySelector("form");
  
    fireEvent.submit(formNode)

    expect(returnedData).toEqual({...mockData, signup: true});
});


test("getData is fired when form is submitted", async () => {
  const getData = jest.fn()
  
  const { getByText } = render(
    <FormComponent onSubmit={getData} /> 
  );

  const formNode = document.querySelector("form");

  fireEvent.submit(formNode)

  expect(getData).toHaveBeenCalled();
});