import React from "react";
import Searchbar from "./Searchbar";
import {render, screen} from "@testing-library/react"
import { PLACEHOLDER } from "../../utils/constants";


test("component doesn't break app", () => {
    render(<Searchbar placeholder={PLACEHOLDER}/>)

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument()
})