const formElement = document.querySelector('.login-form');



const onFormSubmit = event => {
    event.preventDefault();

    const formElement = event.currentTarget.elements;

    const email = formElement.email.value;
    const password = formElement.password.value;

        if (email === "" || password === "") {
            alert('All fields must be filled!!!');
        } else {
            const dataForm = {
                email,
                password,
            };
            console.log(dataForm);
            formElement.reset();
        };
};

formElement.addEventListener('submit', onFormSubmit);