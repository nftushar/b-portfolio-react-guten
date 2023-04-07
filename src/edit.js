import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../Components/Helper/getCSS';
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from '@wordpress/element'
import { useEffect } from "react";
import Settings from './Settings'
import "./editor.scss";
import Modal from "./components/Modal";

import { registerBlockType } from '@wordpress/blocks';

// import "./style.scss"
export default function Edit({ attributes, setAttributes, clientId, ...rest }) {
	// export default function Edit({ attributes, setAttributes, }) {

	// const { gridBackground, imgPos, isImg } = attributes;

	// console.log(attributes.gridbackground);


	useEffect(() => {
		clientId && setAttributes({ clientId: clientId })
	}, [clientId]);

	const { background, projects, gridBackground, btnLabel, columnGap,columns, rowGap, titleTypo, descTypo, btnTypo } = attributes;

	// console.log(gridBackground);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	// console.log(background);

	function updateProject(index, property, value) {
		const newProjects = [...projects];
		newProjects[index][property] = value;
		setAttributes({ projects: newProjects });
	}



	return <>
		{/* <Settings attributes={attributes} setAttributes={setAttributes} updateProject={updateProject} /> */}

		<style>
			{/* .wp-block-create-block-b-portfolio-block {
				background-color:
				gridbackground
			} */}
			{`

		    	${getTypoCSS(titleTypo)}
                ${getTypoCSS(descTypo)}


		.wp-block-create-block-b-portfolio-block {
		   ${getBackgroundCSS(gridBackground)}
		}

		.bppb-portfolio-items{
			column-gap: ${columnGap};
			row-gap:${rowGap};
		}

		.portfolio-view-details-btn{
			
		}
	
        `}
		</style>

		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateProject={updateProject} />
			<div className={`bppb-portfolio-wrapper bppb-portfolio-items columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
				{projects.map((project, index) => {
					const { title, desc } = project;
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
							{/* {console.log(gridBackground)} */}
						</div>
					</div>
				})}

			</div>
			{modalOpen && <Modal setAttributes={setAttributes} updateProject={updateProject} currentIndex={currentIndex} project={projects[currentIndex] || {}} setModalOpen={setModalOpen} />}
		</div>
	</>
}
