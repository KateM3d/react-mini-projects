import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

it("should increment the counter on every click", () => {
    render( < Counter / > );

    //0 times clicked before clicking
    const text0 = screen.getByText(/0 times/i);
    expect(text0).toBeInTheDocument();

    const button = screen.getByRole("button");

    //click Add 1
    fireEvent.click(button);
    const text1 = screen.getByText(/1 times/i);
    expect(text1).toBeInTheDocument();

    //click Add 1 (another time)
    fireEvent.click(button);
    const text2 = screen.getByText(/2 times/i);
    expect(text2).toBeInTheDocument();
});