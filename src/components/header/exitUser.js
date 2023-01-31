
export const exitUser = (navigate) => {
    localStorage.removeItem('token');
    localStorage.removeItem('person');
    localStorage.setItem('isLogin', "false")
    navigate('/login', {replace: true})
}