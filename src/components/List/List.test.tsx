import { render, screen, fireEvent } from "@testing-library/react";
import List from "./List";

describe("List", () => {
    it("Renders correctly!", () => {
        render(<List list={[{ id: "1", text: "gato" }]} />);

        const elem = screen.getByText("gato");

        expect(elem).toBeInTheDocument();
    });
});
