import React from "react";
import Hero from "./Hero";
import {render, screen} from "@testing-library/react";
import {WELCOME_MESSAGE} from "../../utils/constants";

test("renders welcome message and button", () => {
    render(<Hero title={WELCOME_MESSAGE}/>);
    const linkElement = screen.getByText(/Find out what's in the food you eat/i);
    expect(linkElement).toBeInTheDocument();

})