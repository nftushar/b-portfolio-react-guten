import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../Components/Helper/getCSS';
import { getBoxValue } from "./utils/function";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from '@wordpress/element';
import { useEffect } from "react";
import Settings from './Settings';
import "./editor.scss";
import Modal from "./components/Modal";
import { tabController } from '../../Components/Helper/functions';
import { ImagePlaceholder } from '../../Components/ImageControl';

import { registerBlockType } from '@wordpress/blocks';
import Background from '../../Components/Background';

import truncateString from './utils/truncateString'

export default function Edit({ attributes, setAttributes, clientId, ...rest }) {

	useEffect(() => {
		clientId && setAttributes({ clientId: clientId })
	}, [clientId]);

	const { contentPadding, background, cardRadius, titleColor, descColor, projects, gridBackground, isImg, imgPos, btnLabel, btnPadding, btnColors, btnHover, btnRadius, columnGap, columns, rowGap, clientRatingColor, titleTypo, descTypo, btnTypo } = attributes;



	// console.log(cardRadius);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);


	function updateProject(index, property, value) {
		const newProjects = [...projects];
		newProjects[index][property] = value;
		setAttributes({ projects: newProjects });
	}

	// console.log(clientRatingColor);
	return <>
		<style>
			{`
		    	${getTypoCSS(titleTypo)?.googleFontLink}
                ${getTypoCSS(descTypo)?.googleFontLink}
                ${getTypoCSS(btnTypo)?.googleFontLink}



				.bppb-portfolio-item{
					border-radius: ${cardRadius};
				}

				.bppb-portfolio-items{
					padding: ${getBoxValue(contentPadding)};
					${getBackgroundCSS(gridBackground)};
					column-gap: ${columnGap};
					row-gap:${rowGap};
				}

				.bppb-portfolio-item .content h2{
					 color:${titleColor};
					${getTypoCSS(titleTypo)?.styles}	
				}

				.bppb-portfolio-item .content .desc{
					color: ${descColor};
					${getTypoCSS(descTypo)?.styles}
					}

				.bppb-portfolio-item .content .portfolio-view-details-btn {
					${getColorsCSS(btnColors)};
					border-radius: ${btnRadius};
					${getTypoCSS(btnTypo)?.styles};
					padding: ${getBoxValue(btnPadding)}
				}

				.bppb-portfolio-item .content .portfolio-view-details-btn:hover {
					${getColorsCSS(btnHover)};
				}

				.star-rating .star{
                     color: ${clientRatingColor}
				}
					
           `}
		</style>

		<div {...useBlockProps()}>
			<Settings modalOpen={modalOpen} attributes={attributes} setAttributes={setAttributes} updateProject={updateProject} currentIndex={currentIndex} />
			<div className={`bppb-portfolio-wrapper bppb-portfolio-items columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>

				{projects.map((project, index) => {
					const { title, desc, img, background } = project;

					return <div className={`bppb-portfolio-item project-${index}`} key={index} >
						<style>
							{`
						       .project-${index}{
								   background-image: url(${img});
							   }
							`}
						</style>

						<div className="content">
							<RichText
								tagName="h2"
								value={title}
								onChange={(content) => updateProject(index, "title", content)}
								placeholder={__("Enter Title", 'b-Project')}
							/>

							<RichText
								id="myTextarea"
								tagName="div"
								className="desc"
								value={truncateString(desc, 20)}
								onChange={(content) => updateProject(index, "desc", content)}
								placeholder={__("Enter description", 'b-Project')}
							/>

							<button className="portfolio-view-details-btn" onClick={() => {
								setCurrentIndex(index);
								setModalOpen(true);
							}}>{btnLabel} </button>
						</div>
					</div>
				})}

			</div>
			{modalOpen && <Modal setAttributes={setAttributes} attributes={attributes} updateProject={updateProject} currentIndex={currentIndex} project={projects[currentIndex] || {}} setModalOpen={setModalOpen} />}
		</div>
	</>




}
