// Todo: Include all the shit you need

// Start a functional component & think of props you may need

// Create a user context to store the users info incase you need it

// We want to think about the fields we will need when we click the submit button which will way make post request to the back end login route. 

// export the component

function LoginComponent() {
    const [password, setPassword] = useState()
    function handleSubmit() {
        // post with the value of password/username states & if validated in the backend then great
        // render any alerts that the backend sends back by doing something response.body.errors? 
    }

    return (
        <>
        {
            // Render TextBox(name="Username", label="Name", type....
            // Render TextBox(name="Password", label="Password",  value = password...)
        }
        </>
    )
}

function TextBox(is_date_input, value, label, type) {


    return (
        <>
        {
            // Input field with label and name

            // input field can have an onChange={handleValidate} inside the input box.
        }
        </>
    )
}