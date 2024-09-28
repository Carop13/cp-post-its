import { render, screen } from "@testing-library/react";
import Item from "./Item";

describe("Item", () => {
    it("Renders correctly!", () => {
        render(<Item item={{ id: "1", text: "gato" }} />);

        const elem = screen.getByText("gato");

        expect(elem).toBeInTheDocument();
    });
});
