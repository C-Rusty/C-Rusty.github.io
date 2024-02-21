import { Box, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import { setModalState, setSelectedDocument } from "../../../store/ModalLegalReducer";
import '../../../styles/footer/utilities/Legal.scss'

const Legal = () => {

    const { t } = useTranslation();

    const isModalOpen: boolean = useSelector<IRootState, boolean>(state => state.modalLegalReducer.isOpen);
    const selectedDocument: string = useSelector<IRootState, string>(state => state.modalLegalReducer.document);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setModalState(false));
        dispatch(setSelectedDocument(`none`));
    };
    
    return (
        <Modal
            open={isModalOpen}
            onClose={handleClose}
            className="modal-legal"
        >
            <Box className="modal-legal__inner">
                <div className="container">
                    {selectedDocument === `terms`&&
                        <h1>Terms</h1>
                    }
                    {selectedDocument === `privacy`&&
                        <h1>Privacy</h1>
                    }
                    <button onClick={handleClose}></button>
                </div>
            </Box>
        </Modal>
    );
};

export default Legal; 