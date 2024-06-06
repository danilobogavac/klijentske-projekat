import React from "react";
import { render, screen } from "@testing-library/react";


test("Header contains correct link to home page", () => {
 

  // Pronalaženje linka po tekstu
  const homeLink = screen.queryByText("Rent Car Service");

  
});
