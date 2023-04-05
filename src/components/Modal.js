import { useRef, useEffect } from "@wordpress/element";

const Modal = ({ project = {}, setAttributes, setModalOpen }) => {
	// console.log(setModalOpen);

	const {
		title,
		catrgory,
		skils,
		images,
		desc,
		clientRating,
		clientReview,
		projectURL,
	} = project;

	// console.log(image);


	const modalRef = useRef(null);

	useEffect(() => {
		if (modalRef.current) {
			var slides = jQuery(modalRef.current).find(".slider").children();
			var thumbs = jQuery(modalRef.current).find(".thumbs").children();
			var currentSlide = 0;

			// Show the first slide and thumbnail
			slides.eq(currentSlide).addClass("active");
			thumbs.eq(currentSlide).addClass("active");

			// Change slide on thumbnail click
			thumbs.click(function () {
				// Remove active class from current slide and thumbnail
				slides.eq(currentSlide).removeClass("active");
				thumbs.eq(currentSlide).removeClass("active");

				// Set current slide to clicked thumbnail index
				currentSlide = jQuery(this).index();

				// Add active class to new slide and thumbnail
				slides.eq(currentSlide).addClass("active");
				thumbs.eq(currentSlide).addClass("active");
			});
		}
	}, []);

	return (
		<div ref={modalRef} id="portfolio-modal" className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={() => setModalOpen(false)}>
						&times;
					</span>
				</div>
				<div className="modal-body">
					<h1 className="heading">{title}</h1>
					<div className="modal-content">
						<div className="row">
							<div className="modal-img slider-wrapper">
								<div className="slider">

									{images?.map((image, index) => 
											<img
												className="model-img2 slide active" src={image}
												alt="Main"
											/>
										)}
								</div>

								<div className="list-images thumbs">
									{/* {console.log(image)} */}

									{images.map((image, index) => 
											<img
												src={image}
												alt=""
												className="thumb active"
											/>)}


									{/* <img
										src="https://images.unsplash.com/photo-1529785501650-9baa7e39c327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
										alt=""
										className="thumb active"
									/> */}
									{/* <img
										src={image}
										alt=""
										className="thumb"
									/>
									<img
										src={image}
										alt=""
										className="thumb"
									/> */}
								</div>
							</div>
							<div className="modal-text">
								<h3 className="red">Project Details</h3>
								<div className="side-bar">
									<span>Project Name:</span>
									<p>{title}</p>
								</div>
								<div className="side-bar">
									<span>Project Category:</span>
									<p>{catrgory}</p>
								</div>
								<div className="side-bar">
									<span>Skill:</span>
									<p>{skils}</p>
								</div>
								<div className="side-bar">
									<span>Project URL:</span>
									<p className="red">{projectURL}</p>
								</div>
								<div className="side-bar">
									<span>Client Review:</span>
									<p>
										{clientReview}
									</p>
								</div>
								<div className="side-bar">
									<span>Client Rating:</span>
									<div class="star-rating">
										&nbsp;   {clientRating} &nbsp;
										<span class="screen-reader-text">1.9 rating</span>
										<div class="star star-full" aria-hidden="true"></div>
										<div class="star star-half" aria-hidden="true"></div>
										<div class="star star-empty" aria-hidden="true"></div>
										<div class="star star-empty" aria-hidden="true"></div>
										<div class="star star-empty" aria-hidden="true"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<span>Description :</span>
							<p className="desc">
								{desc}
							</p>
						</div> <br></br>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
