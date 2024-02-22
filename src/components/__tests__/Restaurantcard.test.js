import Restaurantcard from "../Restaurantcard"
import MOCK_DATA from "./Mock/resCardMock.json";
import '@testing-library/jest-dom';
import { render,screen } from "@testing-library/react";
it('should render RestaurantCar component with props Data',()=>{
    render(<Restaurantcard resObj={MOCK_DATA}/>);
    const name=screen.getByText('Varalakshmi Tiffins');
    expect(name).toBeInTheDocument();
});

it('should render WithPromoted RestaurantCard component with props Data HOC',()=>{
    render(<Restaurantcard resObj={MOCK_DATA}/>);
    const name=screen.getByText('Varalakshmi Tiffins');
    expect(name).toBeInTheDocument();
});