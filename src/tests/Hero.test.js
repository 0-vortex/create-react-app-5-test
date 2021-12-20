import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, screen} from "@testing-library/react";
import Hero from "../components/Hero";
import {axe, toHaveNoViolations} from "jest-axe";
import {data} from "./mocks";
import {BrowserRouter} from "react-router-dom";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(
    <BrowserRouter>
      <Hero user={data.user} />
    </BrowserRouter>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("renders the pizza svg", () => {
  render(
    <BrowserRouter>
      <Hero user={data.user} />
    </BrowserRouter>,
  );
  const button = screen.getByAltText("pizza");
  expect(button).toHaveAttribute("src");
});
