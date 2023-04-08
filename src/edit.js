import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../Components/Helper/getCSS';
import { getBoxValue } from "./utils/function";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from '@wordpress/element';
import { useEffect } from "react";
import Settings from './Settings';
import "./editor.scss";
import Modal from "./components/Modal";

import { registerBlockType } from '@wordpress/blocks';
import Background from '../../Components/Background';

// import "./style.scss"
export default function Edit({ attributes, setAttributes, clientId, ...rest }) {
	// export default function Edit({ attributes, setAttributes, }) {

	// const { gridBackground, imgPos, isImg } = attributes;



	useEffect(() => {
		clientId && setAttributes({ clientId: clientId })
	}, [clientId]);

	const { background, titleColor, descColor, projects, gridBackground, btnLabel, btnPadding, btnColors, btnHover, btnRadius, columnGap, columns, rowGap, titleTypo, descTypo, btnTypo } = attributes;

	// const { HoverColor, HoverBgColor } = btnHover;
	// console.log(titleColor);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	// console.log(btnRadius);

	function updateProject(index, property, value) {
		const newProjects = [...projects];
		newProjects[index][property] = value;
		setAttributes({ projects: newProjects });
	}

	// console.log(gridBackground);

	return <>
		{/* <Settings attributes={attributes} setAttributes={setAttributes} updateProject={updateProject} /> */}
		{/* {console.log(btnRadius)} */}

		<style>
			{`
		    	${getTypoCSS(titleTypo)?.googleFontLink}
                ${getTypoCSS(descTypo)?.googleFontLink}
                ${getTypoCSS(btnTypo)?.googleFontLink}

		  .bppb-portfolio-item .content h2{
			  color: ${titleColor};
			  ${getTypoCSS(titleTypo)?.styles}

			}
		 .bppb-portfolio-item .content .desc{
			  color: ${descColor};
			  ${getTypoCSS(descTypo)?.styles}

			}
			.bppb-portfolio-item .content .portfolio-view-details-btn {
				  
 			        ${getBackgroundCSS(btnColors)};
                     border-radius: ${btnRadius};
                    ${getTypoCSS(btnTypo)?.styles};
                    padding: ${getBoxValue(btnPadding)}
			}

			.bppb-portfolio-item .content .portfolio-view-details-btn:hover {
				${getBackgroundCSS(btnHover)};
			}
			
			.bppb-portfolio-items{
				grid-template-columns: repeat(${columns}, 1fr);
				${getBackgroundCSS(gridBackground)}
				column-gap: ${columnGap};
				row-gap:${rowGap};
			}

			.portfolio-view-details-btn{
				padding: ${getBoxValue(btnPadding)}
			}
		
        `}
		</style>

		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateProject={updateProject} />
			<div className={`bppb-portfolio-wrapper bppb-portfolio-items columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
				{projects.map((project, index) => {
					const { title, desc, background } = project;

					// console.log(background);

					return <div className="bppb-portfolio-item">
						<div className="content">

							<RichText
								tagName="h2"
								value={title}
								onChange={(content) => updateProject(index, "title", content)}
								placeholder={__("Enter Title", 'b-Project')}
							/>

							<RichText
								tagName="div"
								className="desc"
								value={desc}
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
			{modalOpen && <Modal setAttributes={setAttributes} updateProject={updateProject} currentIndex={currentIndex} project={projects[currentIndex] || {}} setModalOpen={setModalOpen} />}
		</div>
	</>
}
