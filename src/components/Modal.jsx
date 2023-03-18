import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}



export default function Modal({error, setError}) {


    return(
         <>
            {/* <div style={OVERYLAY_STYLES} /> */}
            <div style={MODAL_STYLES}>
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Fetch Error</h2>
                            <p>There was an error fetching the data.</p>
                            <button onClick={() => setError(!error)}>Close</button>
                        </div>
                    </div>
                </div>
            </>
            )
        }
