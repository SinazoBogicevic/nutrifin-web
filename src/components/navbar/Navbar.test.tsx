import React from  'react';
import Navbar from './Navbar';
import {render, screen} from "@testing-library/react";
import {APP_TITLE} from "../../utils/constants"



test('renders navbar text', () => {
    render(<Navbar title={APP_TITLE}/>)
    const linkElement = screen.getByText(/Nutrifin/i);
    expect(linkElement).toBeInTheDocument();
})