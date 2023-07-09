import React, { useState } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import { FacebookShareButton,FacebookIcon, WhatsappShareButton,WhatsappIcon, TwitterShareButton, TwitterIcon } from "react-share";



const ShareButton = ({ url, title, description }) => {
    
    //this function run on mobile view browsers
    const handleShare = async () => {
        //initialize shareable data varibale
        let shareData = undefined
        try {
            //getting image data from image url
            const response = await fetch(url);

            //converting image data into blob
            const blob = await response.blob()

            //making array of files for share data
            const image = [new File([blob], 'image.jpg', {
                type: blob.type,
            })]

            //populating shareable data
            shareData = {
                url: url,
                title: "Random Image",
                text: "Random Image Assignment",
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
            //this wrapper activate on big screen web browser laptops, desktops
            <BrowserView>
                <button className='btn btn-primary form-control my-1'><FacebookShareButton url={url}  quote={title}><FacebookIcon size={20} round/> Share on Facebook</FacebookShareButton></button><br/>
                <button className='btn btn-success w-100 my-1'><WhatsappShareButton url={url} title={title}><WhatsappIcon size={20} round/> Share on WhatsApp</WhatsappShareButton></button><br/>
                <button className='btn btn-info w-100 my-1'><TwitterShareButton  url={url}  title={title}><TwitterIcon size={20} round/> Share on Twitter</TwitterShareButton></button>
            </BrowserView>

            //this wrapper activate on mobile phones
            <MobileView>
                <button className='btn btn-outline-success my-2 form-control' onClick={handleShare}>Share</button>
            </MobileView>
        </>
    )
}
export default ShareButton