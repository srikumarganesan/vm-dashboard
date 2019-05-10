import React from 'react';
import {configure, shallow} from 'enzyme';
import Backdrop from './Backdrop';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Backdrop />', () => {
    it('should show the Backdrop when the show property is true', () => {
        const showBackdrop = true;
        const editor = shallow(<Backdrop show={showBackdrop} />);
        expect(editor.find('div').length).toEqual(1);
    });

    it('should not show the Backdrop when the show property is false', () => {
        const showBackdrop = false;
        const editor = shallow(<Backdrop show={showBackdrop} />);
        expect(editor.find('div').length).toEqual(0);
    });
});
