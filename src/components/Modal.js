import { useRef, useEffect } from "@wordpress/element";
// import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { getTypoCSS } from "../../../Components/Helper/getCSS";

const Modal = ({ attributes, project = {}, currentIndex, updateProject, setModalOpen }) => {

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
						value={title}
						onChange={(content) => updateProject(currentIndex, "title", content)}
					// inlineToolbar
					// allowedFormats={["core/bold", "core/italic"]}
					/>

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
											render={({ open }) => <Button
												className='button button-primary modal-img-upload' onClick={open} icon={'cloud-upload'}></Button>}
										/>
									</MediaUploadCheck>
								</div>
							</div>
							<div className="modal-text">
								<h3 className="red modalHeadingTypo">Project Details</h3>
								<div className="side-bar">
									<span className="modalLableTypo" >Project Name:</span>
									<RichText
										tagName="p"
										className="heading modalContentTypo"
										value={title}
										onChange={(content) => updateProject(currentIndex, "title", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Project Category:</span>
									<RichText
										tagName="p"
										className="modalContentTypo"
										value={catrgory}
										onChange={(content) => updateProject(currentIndex, "catrgory", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Skill:</span>
									<RichText
										tagName="p"
										className="skils modalContentTypo"
										value={skils}
										onChange={(content) => updateProject(currentIndex, "skils", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Project URL:</span>
									<RichText tagName="p"
										className="red modalContentTypo"
										value={projectURL}
										onChange={(content) => updateProject(currentIndex, "projectURL", content)}
										inlineToolbar
										allowedFormats={["core/bold", "core/italic"]}
									/>
								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Client Reviewz:</span>
									<RichText tagName="p"
										className="modalContentTypo"
										value={clientReview}
										onChange={(content) => updateProject(currentIndex, "clientReview", content)}
									/>

								</div>
								<div className="side-bar">
									<span className="modalLableTypo">Client Rating:</span>
									<div class="star-rating">
										&nbsp;{clientRating}&nbsp;
										<span class="screen-reader-text">{clientRating}rating</span>
										{renderClientRating(clientRating)}
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<span className="modalLableTypo">Description :</span>
							<RichText tagName="p"
								className="modalContentTypo desc"
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
	</>
};

export default Modal;
