import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

// jest.mock("./Form", () => ({
//     ...jest.requireActual("./Form"),
//     handlerSubmit: jest.fn(),
// }));

describe("Form", () => {
    it("Is fired correctly On Submit!", () => {
        const onSubmitMock = jest.fn();
        const onInputChangeMock = jest.fn();

        const handlerSubmitSpy = jest.spyOn(Form.prototype, "handlerSubmit");

        render(
            <Form
                listId="1"
                newInput="1"
                onSubmit={onSubmitMock}
                onInputChange={onInputChangeMock}
            />
        );

        // screen.getByRole("form", { name: "form-test" }).onsubmit =
        //     handleOnSubmitMock;

        fireEvent.change(screen.getByPlaceholderText("Item"), {
            target: { value: "new item" },
        });

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: "Save item" }));

        // Expectations for form submission
        expect(onSubmitMock).toHaveBeenCalled();
        expect(handlerSubmitSpy).toHaveBeenCalled();
    });
});
