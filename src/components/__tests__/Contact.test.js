import Contact from "../Contact";
import '@testing-library/jest-dom';
import { render,screen } from "@testing-library/react";
describe('Contact Us Page Test Case', () => {
    // it and test are one and the same thing 
    // it is alias name for test
    it('Should load contact us component', ()=>{
        render(<Contact/>);
        const heading=screen.getByRole('heading');
        //Assertion 
        expect(heading).toBeInTheDocument();
    });  
    it('Should load button inside contact  component', ()=>{
        render(<Contact/>);
        // const button=screen.getByRole('button');
        const button=screen.getByText('Submit');
        //Assertion 
        expect(button).toBeInTheDocument();
    });   
    it('Should load Input Name inside contact  component', ()=>{
        render(<Contact/>);
        // const button=screen.getByRole('button');
        // const button=screen.getByText('Submit');
        const inputName=screen.getByPlaceholderText('Name');
        //Assertion 
        expect(inputName).toBeInTheDocument();
    });
    it('Should load 2 input boxes on the Contact Component ',()=>{
        render(<Contact/>);
        //Querying
        const inputBoxes=screen.getAllByRole('textbox');
        console.log(inputBoxes.length);
        //Assertion
        inputBoxes.forEach((inputElement)=>{
            expect(inputElement).toBeInTheDocument(); 
        });
        expect(inputBoxes.length).not.toBe(1);
        expect(inputBoxes.length).toBe(2);
    
    });
});

