import ReactModal from 'react-modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';
import { stateOfModal } from '../../redux/modal/modalSlice';
import ModalForm from './modalForm';


const AccesModal = () => {

    const dispatch = useDispatch();

    const sModal = useSelector(stateOfModal);
    const stopModal = () => {
        dispatch(closeModal());
    }

    const customeStyles = {
        content: {
            top: '18%',
            left: '33.5%',
            right: 'auto',
            marginRight: '-50%',
            transform: 'transalte(-50%, -50%)',
            width: '400px',
            height: '400px'
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
            <div className='modal-wrapper'>
                <h3>Verificacion de usuario.</h3>
                <ModalForm />
            </div>
        </ReactModal>
    );
};

export default AccesModal;