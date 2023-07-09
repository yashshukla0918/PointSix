import React from 'react'

const ShareButton = ({ url, title, description}) => {

    const handleShare = async () => {
        let shareData = undefined
        try {

            const response = await fetch(url);
            const blob = await response.blob()
            const image = [new File([blob], 'image.jpg', {
                type: blob.type,
            })]
            const message =`${title} \n${description}\nLink to image : ${url}\n`;
            shareData = {
                url: message,
                title: title,
                text: description,
                files: image
            }

            if (navigator.canShare) {
                if (navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                    console.log('Image Shared Successfully...');
                }
                else {
                    console.log("Unable to share image");
                }
            }


        } catch (error) {
            console.error('Error Sharing Image : ', error);
        }



    }

    return (
        <button className='btn btn-outline-success my-2 form-control' onClick={handleShare}>Share</button>
    )
}
export default ShareButton