import { useRef, useEffect } from "@wordpress/element";
// import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const Modal = ({ project = {}, currentIndex, updateProject, setModalOpen }) => {

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


	const renderClientRating = (rating) => {
		// for(let i = 0; i < 5; i++){
		// 	return 
		// }

		return [...Array(5)].map((item, index) => {
			// console.log(typeof rating, rating)
			if (index < parseInt(rating)) {
				return <div class="star star-full" aria-hidden="true"></div>
			} else if (index < rating && rating % 1 > 0) {
				return <div class="star star-half" aria-hidden="true"></div>
			} else {
				return <div class="star star-empty" aria-hidden="true"></div>
			}
		})
	}

	return (
		<div ref={modalRef} id="portfolio-modal" className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={() => setModalOpen(false)}>
						&times;
					</span>
				</div>
				<div className="modal-body">
					<RichText
						tagName="h1"
						className="heading"
						value={title} />

					<div className="modal-content">
						<div className="row">
							<div className="modal-img slider-wrapper">
								<div className="slider">
									{images?.map((image, index) =>
										<img className={`model-img2 slide  ${index==0 ? " active" : " "}`} src={image}
											alt="Main" />)}
								</div>

								<div className="list-images thumbs">
									
									{images.map((image, index) =>
										<img
											src={image}
											alt=""
											className= {`thumb  ${index==0 ? "active" : " "}`}
										/>)}
								</div>
							</div>
							<div className="modal-text">
								<h3 className="red">Project Details</h3>
								<div className="side-bar">
									<span>Project Name:</span>
									<RichText
										tagName="p"
										className="heading"
										value={title}
										onChange={(content) => updateProject(currentIndex, "title", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span>Project Category:</span>
									<RichText
										tagName="p"
										value={catrgory}
										onChange={(content) => updateProject(currentIndex, "catrgory", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span>Skill:</span>
									<RichText
										tagName="p"
										className="skils"
										value={skils}
										onChange={(content) => updateProject(currentIndex, "skils", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span>Project URL:</span>
									<RichText tagName="p"
										className="red"
										value={projectURL}
										onChange={(content) => updateProject(currentIndex, "projectURL", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span>Client Reviewz:</span>
									<RichText tagName="p"
										value={clientReview}
										onChange={(content) => updateProject(currentIndex, "clientReview", content)}
									/>

								</div>
								<div className="side-bar">
									<span>Client Rating:</span>
									<div class="star-rating">
										&nbsp;{clientRating}&nbsp;
										<span class="screen-reader-text">{clientRating}rating</span>
										{renderClientRating(clientRating)}
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<span>Description :</span>
							<RichText tagName="p"
								className="desc"
								value={desc}
								onChange={(content) => updateProject(currentIndex, "desc", content)}
								inlineToolbar
								allowedFormats={["core/bold", "core/italic"]}
							/>
						</div> <br></br>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
