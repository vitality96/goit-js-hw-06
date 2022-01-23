const formElement = document.querySelector('.login-form');


const onFormSubmit = event => {
    event.preventDefault();

    const elementForm = event.currentTarget.elements;

    const email = elementForm.email.value;
    const password = elementForm.password.value;

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