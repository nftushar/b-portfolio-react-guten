import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from '@wordpress/element'
import Settings from './Settings'
import "./editor.scss";
import Modal from "./components/Modal";

import { registerBlockType } from '@wordpress/blocks';



// import "./style.scss"

export default function Edit({ attributes, setAttributes }) {
	const { projects, btnLabel } = attributes;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	function updateProject(index, property, value) {
		// console.log("hello");
		const newProjects = [...projects];
		newProjects[index][property] = value;
		setAttributes({ projects: newProjects });
		// console.log(setAttributes);
	}

	return (
		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateProject={updateProject} />
			<div className="bppb-portfolio-wrapper bppb-portfolio-items">
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

						</div>
					</div>
				})}

			</div>
			{modalOpen && <Modal setAttributes={setAttributes} updateProject={updateProject} currentIndex={currentIndex} project={projects[currentIndex] || {}} setModalOpen={setModalOpen} />}
		</div>
	);
}
