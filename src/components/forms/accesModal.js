import ReactModal from 'react-modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';
import { stateOfModal } from '../../redux/modal/modalSlice';


const AccesModal = () => {

    const dispatch = useDispatch();

    const sModal = useSelector(stateOfModal);
    const stopModal = () => {
        dispatch(closeModal());
    }

    const customeStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            marginRight: '-50%',
            transform: 'transalte(-50%, -50%)',
            width: '600px',
            height: '600px'
        },
        overlay: {
            backgroundColor: "rgbs(1,1,1,0.75)"
        }
    }


    return (
        <ReactModal
            isOpen={sModal}
            onRequestClose={stopModal}
            style={customeStyles}
            ariaHideApp={false}
        >

        </ReactModal>
    );
};

export default AccesModal;