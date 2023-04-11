import { useRef, useEffect } from "@wordpress/element";
// import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { getTypoCSS } from "../../../Components/Helper/getCSS";


const ModalFrontend = ({ attributes, project = {}, currentIndex, updateProject, setModalOpen }) => {

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

	const { clientId, modalContentTypo, modalLableTypo, modalContentColor, modalLabelColor, modalTitleTypo, modalTitleColor, modalHeadingTypo,
		modalHeadingColor } = attributes;

	// console.log(modalTitleColor);

	useEffect(() => {
		if (modalRef.current) {
			var slides = jQuery(modalRef.current).find(".slider").children();
			var thumbs = jQuery(modalRef.current).find(".thumbs").children(':not(.modal-img-upload)');
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
	}, [images]);



	const renderClientRating = (rating) => {
		return [...Array(5)].map((item, index) => {
			console.log(typeof rating, rating)
			if (index < parseInt(rating)) {
				return <span class="dashicons dashicons-star-filled star"></span>
			} else if (index < rating && rating % 1 > 0) {
				return <div class="dashicons dashicons-star-half star" aria-hidden="true"></div>
			} else {
				return <div class="dashicons dashicons-star-empty star" aria-hidden="true"></div>
			}
		})
	}

	useEffect(() => {
		modalRef.current?.addEventListener('click', function (e) {
			if (e.target.classList.contains('modal')) {
				setModalOpen(false);
			}
		})
	}, [])



	return <>

		<style>
			{`
			    .modal-${clientId} .modalTitleTypo{
						${getTypoCSS(modalTitleTypo)?.styles};
						color:${modalTitleColor}
				}

				.modal-${clientId} .modalHeadingTypo{
					${getTypoCSS(modalHeadingTypo)?.styles};
				color:${modalHeadingColor}
				} 		


				.modal-${clientId} .modalContentTypo {
						${getTypoCSS(modalContentTypo)?.styles};
						color:${modalContentColor}
				}
				.modal-${clientId} .modalLableTypo {
						${getTypoCSS(modalLableTypo)?.styles};
						color: ${modalLabelColor}
				}

           `}
		</style>


		<div ref={modalRef} id="portfolio-modal" className={`modal-${clientId} modal`} >
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={() => setModalOpen(false)}>
						&times;
					</span>
				</div>
				<div className="modal-body">
					<RichText
						tagName="h1"
						className="heading modalTitleTypo"
						value={title} />

					<div className="modal-content">
						<div className="row">
							<div className="modal-img slider-wrapper">
								<div className="slider">
									{images?.map((image, index) =>
										<img className={`model-img2 slide  ${index == 0 ? " active" : " "}`} src={image}
											alt="Main" />)}
								</div>

								<div className="list-images thumbs">

									{images.map((image, index) => {
										return <img
											src={image}
											alt=""
											className={`thumb ${index == 0 ? "active" : " "}`}
										/>
									})}

									<MediaUploadCheck>
										<MediaUpload
											onSelect={val => {
												const newImages = [...images];
												newImages.push(val.url);
												updateProject(currentIndex, 'images', newImages);
											}}
											render={({ open }) => <Button className='button button-primary modal-img-upload' onClick={open} icon={'plus'}></Button>}
										/>
									</MediaUploadCheck>
								</div>
							</div>
							<div className="modal-text">
								<h3 className="red modalHeadingTypo">Project Details</h3>
								<div className="side-bar">
									<span className="modalLableTypo" >Project Name:</span>
									{title && <p class="title" className="heading modalContentTypo"
										id="myTextarea" dangerouslySetInnerHTML={{ __html: (title) }} />}
								</div>

								<div className="side-bar">
									<span className="modalLableTypo">Project Category:</span>

									{catrgory && <p class="catrgory" className="modalContentTypo"
										id="myTextarea" dangerouslySetInnerHTML={{ __html: (catrgory) }} />}

								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Skill:</span>

									{skils && <p class="skils" className="skils modalContentTypo"
										id="myTextarea" dangerouslySetInnerHTML={{ __html: (skils) }} />}

								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Project URL:</span>

									{projectURL && <p class="projectURL" className="heading modalContentTypo"
										id="myTextarea" dangerouslySetInnerHTML={{ __html: (projectURL) }} />}

								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Client Reviewz:</span>
									{clientReview && <p class="clientReview" className="modalContentTypo"
										id="myTextarea" dangerouslySetInnerHTML={{ __html: (clientReview) }} />}
								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Client Rating:</span>
									<div class="star-rating">
										&nbsp;{clientRating}&nbsp;
										<span class="screen-reader-text">{clientRating}rating</span>
									</div>
									{renderClientRating(clientRating)}
								</div>
							</div>
						</div>
						<div className="footer">
							<span className="modalLableTypo">Description :</span>

							{title && <p class="desc" className="modalContentTypo desc"
								id="myTextarea" dangerouslySetInnerHTML={{ __html: (desc) }} />}
						</div> <br></br>
					</div>
				</div>
			</div>
		</div>
	</>
};

export default ModalFrontend;