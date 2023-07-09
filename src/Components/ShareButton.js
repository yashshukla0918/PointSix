import React from 'react'

const ShareButton = ({url}) => {
   
    const handleShare = async () =>{
        try {
            await navigator.share({
                url:url
            });
            console.log('Image Shared Successfully...');
        } catch (error) {
            console.error('Error Sharing Image : ',error);
        }
    }
    
    return (
    <button className='btn btn-outline-success my-2 form-control' onClick={handleShare}>Share</button>
  )
}
export  default ShareButton