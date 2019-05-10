import React from 'react';
import {configure, shallow} from 'enzyme';
import Input from './Input';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Input />', () => {
    it('renders an Input element', () => {
        const editor = shallow(<Input/>);
        expect(editor.find('input').length).toEqual(1);
    });

    it('should take the passed element config', () => {
        const elementConfig = {
            type: 'number',
            placeholder: 'Longitude'
        };
        const editor = shallow(<Input elementConfig={elementConfig}/>);
        const placeholder = 'placeholder="Longitude"';
        const type = 'number';
        const output = editor.find('input').html();
        expect(output.indexOf(placeholder) > -1).toEqual(true);
        expect(output.indexOf(type) > -1).toEqual(true);
    });

    it('should show validation message when the invalid and touched props are true', () => {
        const editor = shallow(<Input invalid='true' touched='true' />);
        const validationMsg = 'Please enter a valid value!';
        expect(editor.find('p').text()).toEqual(validationMsg);
    });
});