import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a counter view", () => {
    render(<Home />);

    const addButton = screen.getByRole("button", {
      name: "Add",
    });

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("renders a counter click", async () => {
    userEvent.setup();
    render(<Home />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", {
        name: "Add",
      })
    );

    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", {
        name: "Add",
      })
    );

    expect(screen.getByText("Count: 2")).toBeInTheDocument();
  });
});
