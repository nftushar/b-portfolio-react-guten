import ReactDOM from "react-dom";
import { useState } from '@wordpress/element';
import { useEffect } from "react";
import truncateString from "./utils/truncateString"
import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../Components/Helper/getCSS';
import { getBoxValue } from "./utils/function";
import { __ } from "@wordpress/i18n";
import "./editor.scss";
import "./style.scss";
import ModalFrontend from "./components/ModalFrontend";

window.addEventListener('DOMContentLoaded', () => {
    const allPortfolios = document.querySelectorAll('.bppb-projects-items');

    allPortfolios.forEach((itemEl) => {
        const attributes = JSON.parse(itemEl.dataset.attributes);

        ReactDOM.render(
            <ProjectRenderer attributes={attributes} />,
            itemEl
        );
    });
});


export const ProjectRenderer = ({ attributes, setAttributes, clientId, ...rest }) => {



    useEffect(() => {
        clientId && setAttributes({ clientId: clientId })
    }, [clientId]);

    const { contentPadding, background, cardRadius, titleColor, descColor, projects, gridBackground, isImg, imgPos, btnLabel, btnPadding, btnColors, btnHover, btnRadius, columnGap, columns, rowGap, titleTypo, descTypo, btnTypo } = attributes;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    return <>


        <style>
            {`
		    	${getTypoCSS(titleTypo)?.googleFontLink}
                ${getTypoCSS(descTypo)?.googleFontLink}
                ${getTypoCSS(btnTypo)?.googleFontLink}

				.bppb-portfolio-items{
					padding: ${getBoxValue(contentPadding)};
					${getBackgroundCSS(gridBackground)};
					border-radius: ${cardRadius};
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
           `}
        </style>


        <div className={`bppb-portfolio-wrapper bppb-portfolio-items columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
            {projects.map((project, index) => {
                const { title, desc, img } = project;

                return <div className={`bppb-portfolio-item project-${index}`} key={index} >
                    <style>
                        {`
						       .project-${index}{
								   background-image: url(${img});
							   }
							`}
                    </style>

                    <div className="content">
                        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                        {desc && <p class="desc" id="myTextarea" dangerouslySetInnerHTML={{ __html: truncateString(desc, 20) }} />}
                        {btnLabel && <button className="portfolio-view-details-btn" onClick={() => {
                            setCurrentIndex(index);
                            setModalOpen(true);
                        }}>{btnLabel} </button>}
                    </div>
                </div>

            }
            )
            }
        </div>
        {modalOpen && <ModalFrontend attributes={attributes} currentIndex={currentIndex} project={projects[currentIndex] || {}} setModalOpen={setModalOpen} />}
    </>
}