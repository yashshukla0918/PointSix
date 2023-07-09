import React from 'react'

export const Modal = ({url,description,title}) => {
    return (
        <div className="modal  fade" id='share' tabIndex='-1' aria-hidden="true">
            <div className=" modal-sm modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row text-center'>
                            <div className="col-md-4"><a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&description=${description}&picture=${url}&caption=${title}`} target='_blank'><i className="fa fa-facebook" aria-hidden="true"></i><br/>Facebook</a></div>
                            <div className="col-md-4"><a href={`whatapp:/send?text=${title+'\n'+description+'\n'+url}`} target='_blank'><i className="fa fa-whatsapp" aria-hidden="true"></i><br/>WhatsApp</a></div>
                            <div className="col-md-4"><a href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(title+'\n'+'\n'+description+'\n')}`} target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i><br/>Twitter</a></div>
                        </div>
                    </div>
                </div>
            </div>
             {/*<button className="" data-bs-toggle="modal" data-bs-target="#share">Share</button>*/}
        </div>
    )
}
