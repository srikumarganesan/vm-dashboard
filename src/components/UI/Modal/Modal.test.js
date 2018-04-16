import React from 'react';
import {configure, shallow} from 'enzyme';
import Modal from './Modal';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Modal />', () => {
   it('should show the modal when the show property is true', () => {
       const showModal = true;
       const editor = shallow(<Modal show={showModal} />);
       console.log(editor.find('div').html());
       expect(editor.find('div').prop('style')).toHaveProperty('opacity', '1');
   });

    it('should not show the modal when the show property is false', () => {
        const showModal = false;
        const editor = shallow(<Modal show={showModal} />);
        console.log(editor.find('div').html());
        expect(editor.find('div').prop('style')).toHaveProperty('opacity', '0');
    });
});
