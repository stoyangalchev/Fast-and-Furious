import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Car from './Car';
const car = {
  _id: "1",
  name: "Test Car",
  date: "2016",
  imageUrl: "test.jpg",
  category: "SUV",
};

describe("Car Component", () => {
  test("Show car name", async () => {
    await act(async () => {
      render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router>
            <Car car={car} />
          </Router>
        </AuthContext.Provider>
      );
    });
    expect(screen.getByText(car.name)).toBeInTheDocument();
  });

  test("Show car date", async () => {
    await act(async () => {
      render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router>
            <Car car={car} />
          </Router>
        </AuthContext.Provider>
      );
    });
    expect(screen.getByText(car.date)).toBeInTheDocument();
  });

  test("Show car category", async () => {
    await act(async () => {
      render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router>
            <Car car={car} />
          </Router>
        </AuthContext.Provider>
      );
    });
    expect(screen.getByText(car.category)).toBeInTheDocument();
  });

  test('Show "See more" when authenticated', async () => {
    await act(async () => {
      render(
        <AuthContext.Provider value={{ isAuthenticated: true }}>
          <Router>
            <Car car={car} />
          </Router>
        </AuthContext.Provider>
      );
    });
    expect(screen.getByText(/See more/i)).toBeInTheDocument();
  });

  test('Do not show "See more" when not authenticated', async () => {
    await act(async () => {
      render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router>
            <Car car={car} />
          </Router>
        </AuthContext.Provider>
      );
    });
    expect(screen.queryByText(/See more/i)).not.toBeInTheDocument();
  });
});
