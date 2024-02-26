import { Provider } from 'react-redux';
import Header from '../Header';
import { render ,screen,fireEvent} from '@testing-library/react';
import appStore from '../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
it('should load Header Componenet with a login button' ,()=>{
    render(<Provider store={appStore}><BrowserRouter><Header></Header></BrowserRouter></Provider>);
    const loginButton=screen.getByRole('button',{name:'Login'});
    // const loginButton=screen.getByText('Login');
    // const cartItems=screen.getByText('Cart-(0)');
    const cartItems=screen.getByText(/Cart/);

    expect(loginButton).toBeInTheDocument();
});
it('should load Header Component with a Cart Item' ,()=>{
    render(<Provider store={appStore}><BrowserRouter><Header></Header></BrowserRouter></Provider>);
    const loginButton=screen.getByRole('button',{name:'Login'});
    // const loginButton=screen.getByText('Login');
    // const cartItems=screen.getByText('Cart-(0)');
    const cartItems=screen.getByText(/Cart/);

    expect(loginButton).toBeInTheDocument();
});

it('should change Login Button to Logout on click' ,()=>{
    render(<Provider store={appStore}><BrowserRouter><Header></Header></BrowserRouter></Provider>);
    const loginButton=screen.getByRole('button',{name:'Login'});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole('button',{name:'Logout'});

    expect(logoutButton).toBeInTheDocument();
});