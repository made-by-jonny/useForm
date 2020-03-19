# useForm

Basic hook for forms that will transform data on submit to an object format, it relys on the developer to be using the html validations on inputs. 



### Usage

For now just copy index.js into your project, will create npm module soon. 

useForm should be given a function that you want to pass data to do fire once form is submitted. useForm returns 

- submitAction, this is the submit action to pass to a form element. 
- formData, the data that has been submited by the form
- updateFormData, if you want to update the data manually without having to submit. 

names of inputs will be used as keys in object

#### In Action 

```
const FormComponent = ({onSubmit}) => {
    const [submitAction] = useForm(onSubmit)
    return (
        <form onSubmit={submitAction}>
            <input name="email" required/>
            <input name="password" type="password" required/>
            <input name="signup" type="checkbox" />
            <button type="submit">Submit</button>
        </form>
    )
}


<FormComponent onSubmit={postData}/>


The postData function would get this as a parameter assuming:

email = test@test.com
password = somepassword1234!!!
signup was checked

{
    email: "test@test.com",
    password: "somepassword1234!!!",
    signup: true
}

```



