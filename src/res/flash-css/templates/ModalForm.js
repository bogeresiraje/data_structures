import React from 'react';
import PropTypes from 'prop-types';


export const ModalForm = (props) => {
    const { closeForm, title, handleTitle, artiste, handleArtiste, videoID, handleVideoID, submit } = props;

    return (
        <div className='modal'>
            <div className='modal-content'>
            <form onSubmit={ submit } >
                <div className='center-blue-heading'>Edit Song</div>

                <div className='group'>
                    <label htmlFor='title' className='input-label' >Title</label>
                    <input type='text' id='title' className='input' value={ title } onChange={ handleTitle } />
                </div>

                <div className='group'>
                    <label htmlFor='title' className='input-label' >Artiste</label>
                    <input type='text' id='title' className='input' value={ artiste } onChange={ handleArtiste } />
                </div>

                <div className='group'>
                    <label htmlFor='title' className='input-label' >Youtube Video ID</label>
                    <input type='text' id='title' className='input' value={ videoID } onChange={ handleVideoID } />
                </div>

                <div className='flex-container' >
                    <input type='button' className='center-btn-outline' value='cancel'
                        onClick={ () => closeForm() }
                    />
                    <input type='submit' className='center-btn-outline' value='update' />
                </div>
            </form>
            </div>
        </div>
    );
};

ModalForm.propTypes = {
    videoID: PropTypes.string.isRequired,
}
