import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useState } from '@wordpress/element'
import Settings from './Settings'
import "./editor.scss";
import Modal from "./components/Modal";


export default function Edit({ attributes, setAttributes }) {
	const { projects } = attributes;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const updateAllProject = (property, value) => {
		const newProjects = [...projects];

		newCards.map((social, index) => {
			newProjects[index][property] = value;
		});
		setAttributes({ projects: newProjects });
	};
	
	return (
		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateCard={updateAllProject} />
			<div className="bppb-portfolio-wrapper bppb-portfolio-items">
				{projects.map((project, index) => {
					const { title, desc, btnLabel } = project;
					return <div className="bppb-portfolio-item">
						<div className="content">
							<h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
							<div className="desc" dangerouslySetInnerHTML={{ __html: desc }}>
							</div>
							<button className="portfolio-view-details-btn" onClick={() => {
								setCurrentIndex(index);
								setModalOpen(true);
							}}>{btnLabel}</button>
						</div>
					</div>
				})}

			</div>
			{modalOpen && <Modal setAttributes={setAttributes} project={projects[currentIndex] || {}} setModalOpen={setModalOpen} />}
		</div>
	);
}
