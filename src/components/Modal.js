import { useRef, useEffect } from '@wordpress/element'

const Modal = ({ project = {}, setAttributes, setModalOpen }) => {
    const { title, desc, clientRating, clientReview, category, skils, projectURL } = project;

    const modalRef = useRef(null);


    useEffect(() => {
        if (modalRef.current) {
            var slides = jQuery(modalRef.current).find('.slider').children();
            var thumbs = jQuery(modalRef.current).find('.thumbs').children();
            var currentSlide = 0;

            // Show the first slide and thumbnail
            slides.eq(currentSlide).addClass('active');
            thumbs.eq(currentSlide).addClass('active');

            // Change slide on thumbnail click
               thumbs.click(function () {
                // Remove active class from current slide and thumbnail
                slides.eq(currentSlide).removeClass('active');
                thumbs.eq(currentSlide).removeClass('active');

                // Set current slide to clicked thumbnail index
                currentSlide = jQuery(this).index();

                // Add active class to new slide and thumbnail
                slides.eq(currentSlide).addClass('active');
                thumbs.eq(currentSlide).addClass('active');
            });
        }

    }, []);


    return (
        <div ref={modalRef} id="portfolio-modal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                </div>
                <div className="modal-body">
                    <h1 className="heading">Projects 6</h1>
                    <div className="modal-content">
                        <div className="row">
                            <div className="modal-img slider-wrapper">
                                <div className="slider">
                                    <img
                                        className="model-img2 slide active"
                                        src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Main"
                                    />
                                    <img
                                        className="model-img2 slide"
                                        src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
                                        alt="Main"
                                    />
                                    <img
                                        className="model-img2 slide"
                                        src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Main"
                                    />
                                </div>
                                <div className="list-images thumbs">
                                    <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="thumb active" />
                                    <img src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000" alt="" className="thumb" />
                                    <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="thumb" />
                                </div>
                            </div>
                            <div className="modal-text">
                                <h3 className="red">Project Details</h3>
                                <div className="side-bar">
                                    <span>Project Name:</span>
                                    <p>project 6</p>
                                </div>
                                <div className="side-bar">
                                    <span>Project Category:</span>
                                    <p>Android, test</p>
                                </div>
                                <div className="side-bar">
                                    <span>Skill:</span>
                                    <p>Android</p>
                                </div>
                                <div className="side-bar">
                                    <span>Project URL:</span>
                                    <p className="red">www.abc.com</p>
                                </div>
                                <div className="side-bar">
                                    <span>Client Review:</span>
                                    <p>
                                        GS Plugin team did perfect job. It was a pleasure to work
                                        with him. He understood the work from first day. Thank you
                                        for being a member of our team. Highly recommended.
                                    </p>
                                </div>
                                <div className="side-bar">
                                    <span>Client Rating:</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <span>Description :</span>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Sequi fugiat mollitia, modi aperiam quae unde minus voluptas
                                incidunt error at natus aut illum nam itaque adipisci neque
                                cumque alias repellendus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal