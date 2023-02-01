export const exitUser = (navigate, setIsLogin) => {
    localStorage.removeItem('userTokenFroLogin');
    localStorage.removeItem('personInformation');
    setIsLogin(false);
    navigate('/login', {replace: true})
    localStorage.setItem('isLogin', "false")
}