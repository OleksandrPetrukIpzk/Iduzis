
export const dateToday = new Date();
export const isLoginUser = JSON.parse(localStorage.getItem('isLogin'));
export const startYear = 2021;
export const userName = localStorage.getItem('personInformation');
export const pathLogin = '/login';
export const pathRegistrationUser = '/registration';
export const pathMainPage = '/main';
export const formParametrs = {
    max: 40,
    min: 1,
    required: true,
    maxLength: 80
}
export const objectsForRegistration = [{
    type: 'text',
    placeholder: 'User Name',
    name: 'username'
},
    {
        type: 'email',
        placeholder: 'Email',
        name: 'email'
    },
    {
        type: 'password',
        placeholder: 'Password',
        name: 'password'
    },
    {
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword'
    }]
export const tabInfo = ['All', 'Active', 'Complete'];