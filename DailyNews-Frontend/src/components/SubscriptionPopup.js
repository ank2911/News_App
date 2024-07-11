import React from 'react';
import {Modal,Button} from 'react-bootstrap';
function SubscriptionPopup({show,onHide,onDontShowAgain}) {
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Buy Subscription to Read More</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src='URL' alt='URL'/>
            <p>Get the best news experience by subscribing our service add some more text here</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={onDontShowAgain}>
                Don't show me again
            </Button>
            <Button variant='primary' onClick={onHide}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default SubscriptionPopup