import { car } from "./Car";
import { render, screen } from "@testing-library/react";
import { AuthProvider } from "../../../contexts/AuthContext";

describe("car", () => {
  const car = {
    imageUrl: "https://softuni.bg/Files/Courses/wordpressfordevelopers.png",

    name: "car Test",
    date: "2016",
  };
  test("Show car name", () => {
    render(
      <AuthProvider>
        <car car={car} />
      </AuthProvider>
    );
    expect(screen.getByText(car.name)).toBeInTheDocument();
  });
  test("Show car date", () => {
    render(
      <AuthProvider>
        <car car={car} />
      </AuthProvider>
    );
    expect(screen.getByText(car.date)).toBeInTheDocument();
  });

  test("Show image", () => {
    render(
      <AuthProvider>
        <car car={car} />
      </AuthProvider>
    );
    const alt = screen.getByAltText("carPic");
    expect(alt.src).toContain(car.imageUrl);
  });
});
