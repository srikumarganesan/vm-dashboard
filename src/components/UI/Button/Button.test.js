import React from 'react';
import {configure, shallow} from 'enzyme';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Button />', () => {
    it('should disable the button when the disabled value is true', () => {
        let disableButton = true;
        const editor = shallow(<Button disabled={disableButton}/>);
        expect(editor.find('button').html().indexOf('disabled') > -1 ).toEqual(true);
    });

    it('should not disable the button when the disabled value is false', () => {
        let disableButton = false;
        const editor = shallow(<Button disabled={disableButton}/>);
        expect(editor.find('button').html().indexOf('disabled') > -1 ).toEqual(false);
    });
});