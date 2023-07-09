import React, { useState } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import { FacebookShareButton,FacebookIcon, WhatsappShareButton,WhatsappIcon, TwitterShareButton, TwitterIcon } from "react-share";
const ShareButton = ({ url, title, description }) => {
    const handleShare = async () => {
        let shareData = undefined
        try {

            const response = await fetch(url);
            const blob = await response.blob()
            const image = [new File([blob], 'image.jpg', {
                type: blob.type,
            })]
            const message = (`${title} \n${description}\nLink to image : ${url}\n`).toString();

            shareData = {
                url: message,
                description:description,
                title: title,
                text: message,
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
        <>
            <BrowserView>
                <button className='btn btn-primary form-control my-1'><FacebookShareButton url={url}  quote={title}><FacebookIcon size={20} round/> Share on Facebook</FacebookShareButton></button><br/>
                <button className='btn btn-success w-100 my-1'><WhatsappShareButton url={url} title={title}><WhatsappIcon size={20} round/> Share on WhatsApp</WhatsappShareButton></button><br/>
                <button className='btn btn-info w-100 my-1'><TwitterShareButton  url={url}  title={title}><TwitterIcon size={20} round/> Share on Twitter</TwitterShareButton></button>
            </BrowserView>
            <MobileView>
                <button className='btn btn-outline-success my-2 form-control' onClick={handleShare}>Share</button>
            </MobileView>
        </>
    )
}
export default ShareButton