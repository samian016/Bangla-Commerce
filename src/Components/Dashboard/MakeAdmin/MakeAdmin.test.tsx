import Makeadmin from './MakeAdmin'
import ReactDOM from 'react-dom'
import { fireEvent, render, screen } from '@testing-library/react';
describe('Make Admin testing', () => {
    test('Rendaring without pain',() => {
        const div = document.createElement('div');
        ReactDOM.render(<Makeadmin />, div);
    })



    test("checking first", () => {
        render(<Makeadmin />);
        const page = screen.getByText("Make New Admin");
        expect(page).toBeInTheDocument();
    })
    test('input field find', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Makeadmin />, container);
        // eslint-disable-next-line testing-library/no-node-access
        const input = container.querySelectorAll('input');
        expect(input).toHaveLength(1);
        expect(input[0].name).toBe('admin-Email');
    })
    test('passes input value', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Makeadmin />, container);
        // eslint-disable-next-line testing-library/no-node-access
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(1);
        // eslint-disable-next-line testing-library/no-node-access
        const Buttons = container.querySelectorAll('Button');
        expect(Buttons).toHaveLength(1);
        const input = inputs[0];
        const Button = Buttons[0];
        fireEvent.submit(Button);
        fireEvent.change(input, { target: {value: 'walidbinjashim@gmail.com'}})
    })
})