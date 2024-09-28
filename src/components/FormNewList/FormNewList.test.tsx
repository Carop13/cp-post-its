import { render, screen, fireEvent } from "@testing-library/react";
import FormNewList from "./FormNewList";

describe("Form", () => {
    it("Is fired correctly On Submit!", () => {
        render(<FormNewList />);

        const handleOnSubmitMock = jest.fn();

        screen.getByRole("form", { name: "form-test" }).onsubmit =
            handleOnSubmitMock;

        fireEvent.change(screen.getByPlaceholderText("Item"), {
            target: { value: "new item" },
        });

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: "Save item" }));

        // Expectations for form submission
        expect(handleOnSubmitMock).toHaveBeenCalled();
    });
});
