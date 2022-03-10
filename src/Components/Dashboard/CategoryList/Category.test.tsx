import { render } from "@testing-library/react";
import CategoryList from "./CategoryList";
import ReactDOM from 'react-dom'


describe("here we will check fetch", () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<CategoryList />, container);
}
)