import React from "react";
import { Header } from "../src";
import ReactDOM from "react-dom";

describe("Tests Header", () => {
  it("Render Header", () => {
    const div = document.createElement('header');
    ReactDOM.render(<Header title="Olá mundo" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})