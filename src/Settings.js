import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";

import {
    RangeControl,
    TabPanel,
    PanelBody,
    PanelRow,
    TextControl,
    TextareaControl,
    __experimentalBoxControl as BoxControl,
    __experimentalUnitControl as UnitControl,
    Button,
    Dashicon,
    SelectControl,
    ToggleControl,
} from "@wordpress/components";

import "./editor.scss";

// import { getBoxValue } from "../src/utils/function";
import Title from "../../Components/Title";
import BColor from "../../Components/BColor";
import Background from "../../Components/Background";
import ColorsControl from "../../Components/ColorsControl";
import Typography from "../../Components/Typography";
import MultiShadowControl from "../../Components/MultiShadowControl";

import BDevice from "../../Components/BDevice";
import { InlineMediaUpload } from "../../Components/MediaControl";
import { gearIcon } from "../../Components/Helper/icons";

export default function ({ attributes, setAttributes, modalOpen, updateProject, currentIndex }) {

    const {
        cardRadius,
        projects,
        layout,
        gridBackground,
        theme,
        columns,
        columnGap,
        rowGap,
        isImg,
        imgPos,
        projectShadow,
        imgHeight,
        contentPadding,
        modalTitleTypo,
        modalTitleColor,
        titleColor,
        titleTypo,
        descColor,
        descTypo,
        btnColors,
        btnHover,
        btnLabel,
        btnAlign,
        btnTypo,
        btnPadding,
        btnRadius,
        modalContentTypo,
        modalContentColor,
        modalLableTypo,
        modalLabelColor,
        modalHeadingTypo,
        modalHeadingColor

    } = attributes;
    // console.log(projects[0].title);


    const [device, setDevice] = useState("desktop");

    const onAddProject = () => {
        const newCrads = [
            ...projects,
            {
                "background": {
                    "color": "#ffff"
                },
                "img": "https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large",
                "catrgory": "Android",
                "skils": "Android",
                "projectURL": "https:example.com",
                "clientReview": "Some content will go here",
                "clientRating": "5",
                "image": "https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large",
                "title": "This is my title",
                "titleColor": "#000",
                "desc": "This is my description",
                "descColor": "#f00",
                "btnUrl": "https://www.google.com/",
                "btnColors": {
                    "color": "#f0f0f"
                },
                "images": [
                    "https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large",
                    "https://mobimg.b-cdn.net/v3/fetch/97/972d3a28a4f23240915d1c48776ce013.jpeg",
                ]
            }
        ];
        setAttributes({ projects: newCrads });
    };


    function handleProjectDelete(index) {
        const newProjects = [...projects];
        newProjects.splice(index, 1);
        setAttributes({ projects: newProjects });
    }

    const onDuplicateProject = (e, index) => {
        e.preventDefault();
        const newProjects = [...projects];
        newProjects.splice(index, 0, projects[index]);
        setAttributes({ projects: newProjects });
    };

    // const [clientRating, setClientRating] = useState(2);

    function ImageDelete(index) {
        const newImages = [...projects[currentIndex].images];
        newImages.splice(index, 1);
        updateProject(currentIndex, 'images', newImages);
    }

    const { title, catrgory, skils, projectURL, clientRating, clientReview, desc, } = projects[currentIndex];


    return <InspectorControls>
        {modalOpen ?
            <>
                <TabPanel className="bPlTabPanel"
                    activeClass="activeTab"
                    tabs={[
                        { name: "general", title: "General" },
                        { name: "style", title: "Style" },
                    ]} >
                    {(tab) => <>
                        {tab.name === 'general' && <>{/* Project Modal open */}
                            <PanelBody className="bPlPanelBody"
                                title={__("Project Images", "b-projects")}>
                                {projects[currentIndex].images.map((image, index) => {
                                    return <PanelRow> <InlineMediaUpload
                                        value={image}
                                        onChange={(val) => {
                                            const newImages = [...projects[currentIndex].images];
                                            newImages[index] = val;
                                            updateProject(currentIndex, 'images', newImages);
                                        }}
                                        placeholder={__("Enter Image URL", "b-projects")} />

                                        <Button className='button button-primary'
                                            onClick={() => {
                                                ImageDelete(index)
                                            }}
                                            icon={'trash'}></Button>
                                    </PanelRow>
                                })}
                                <div className="image-upload">
                                    <Button variant="primary" onClick={() => {
                                        const newImages = [...projects[currentIndex].images];
                                        newImages.push(' ');
                                        updateProject(currentIndex, 'images', newImages);
                                    }}>{__("Add New Image", "b-projects")}</Button>

                                </div>
                            </PanelBody>
                            <PanelBody className="bPlPanelBody" initialOpen={false}
                                title={__("Project Content", "b-projects")}>

                                <Title>{__("Title:", "b-projects")}</Title>
                                <TextControl value={(projects[currentIndex].title)}
                                    onChange={(content) => updateProject(currentIndex, "title", content)} >
                                </TextControl>

                                <Title>{__("Catrgory:", "b-projects")}</Title>
                                <TextControl value={(projects[currentIndex].catrgory)}
                                    onChange={(content) => updateProject(currentIndex, "catrgory", content)} >
                                </TextControl>

                                <Title>{__("Skils:", "b-projects")}</Title>
                                <TextControl value={(projects[currentIndex].skils)}
                                    onChange={(content) => updateProject(currentIndex, "skils", content)} >
                                </TextControl>

                                <Title>{__("ProjectURL:", "b-projects")}</Title>
                                <TextControl value={(projects[currentIndex].projectURL)}
                                    onChange={(content) => updateProject(currentIndex, "projectURL", content)} >
                                </TextControl>

                                <Title>{__("Client Rating:", "b-projects")}</Title>
                                <RangeControl
                                    // label={__("Client Rating")}
                                    value={clientRating}
                                    onChange={(val) => {
                                        updateProject(currentIndex, 'clientRating', parseFloat(val));
                                    }}
                                    step={.5}
                                    min={1}
                                    max={5} />

                                <Title>{__("ClientReview:", "b-projects")}</Title>
                                <TextareaControl value={(projects[currentIndex].clientReview)}
                                    onChange={(content) => updateProject(currentIndex, "clientReview", content)} >
                                </TextareaControl>


                                <Title>{__("Description:", "b-projects")}</Title>
                                <TextareaControl value={(projects[currentIndex].desc)}
                                    onChange={(content) => updateProject(currentIndex, "desc", content)} >
                                </TextareaControl>

                            </PanelBody></>}
                        {tab.name === 'style' && <>
                        
                            <PanelBody className="bPlPanelBody" title={__("Title typo", "b-Projects")} initialOpen={true}>
                                <Typography
                                    label={__("Label Typo", "b-projects")}
                                    value={modalTitleTypo}
                                    onChange={(val) => setAttributes({ modalTitleTypo: val })} />

                                <BColor
                                    label={__("Color", "b-projects")}
                                    value={modalTitleColor}
                                    onChange={(val) => setAttributes({ modalTitleColor: val })} />


                            </PanelBody>

                            <PanelBody className="bPlPanelBody" title={__("Heading typo", "b-Projects")} initialOpen={true}>
                                <Typography
                                    label={__("Label Typo", "b-projects")}
                                    value={modalHeadingTypo}
                                    onChange={(val) => setAttributes({ modalHeadingTypo: val })} />

                                <BColor
                                    label={__("Color", "b-projects")}
                                    value={modalHeadingColor}
                                    onChange={(val) => setAttributes({ modalHeadingColor: val })} />
                            </PanelBody>

                            <PanelBody className="bPlPanelBody" title={__("Label typo", "b-Projects")} initialOpen={true}>
                                <Typography
                                    label={__("Label Typo", "b-projects")}
                                    value={modalLableTypo}
                                    onChange={(val) => setAttributes({ modalLableTypo: val })} />

                                <BColor
                                    label={__("Color", "b-projects")}
                                    value={modalLabelColor}
                                    onChange={(val) => setAttributes({ modalLabelColor: val })} />


                            </PanelBody>

                            <PanelBody className="bPlPanelBody" title={__("Content Typo", "b-Projects")} initialOpen={false}>

                                <Typography
                                    label={__("Content Typo", "b-projects")}
                                    value={modalContentTypo}
                                    onChange={(val) => setAttributes({ modalContentTypo: val })} />

                                <BColor
                                    label={__("Color", "b-projects")}
                                    value={modalContentColor}
                                    onChange={(val) =>
                                        setAttributes({ modalContentColor: val })
                                    } />
                            </PanelBody>
                        </>}
                    </>}
                </TabPanel>



            </> : <TabPanel
                className="bPlTabPanel"
                activeClass="activeTab"
                tabs={[
                    { name: "general", title: "General" },
                    { name: "style", title: "Style" },
                ]} >
                {(tab) => <>
                    {"general" === tab.name && <>
                        <PanelBody
                            className="bPlPanelBody"
                            title={__("Add or Remove Projects", "b-projects")} >

                            {projects.map((project, index) => {
                                const {
                                    background,
                                    img,
                                    btnUrl,
                                    clientRating,
                                } = project;

                                return <PanelBody
                                    className="bPlPanelBody"
                                    title={`This is project ${index + 1}`}
                                    initialOpen={false} >

                                    <Background
                                        label={__("Background", "b-projects")}
                                        value={Background}
                                        onChange={(val) =>
                                            updateProject(index, "Background", val)
                                        }
                                        isImage={false}
                                    />

                                    {isImg && <Title>{__("Image Url:", "b-projects")}</Title>}
                                    {isImg && <InlineMediaUpload
                                        value={img}
                                        onChange={(val) => updateProject(index, "img", val)}
                                        placeholder={__("Enter Image URL", "b-projects")}
                                    />}

                                    {btnUrl && <Title>{__("Button Url:", "b-projects")}</Title>}
                                    {btnUrl && <TextControl
                                        value={btnUrl}
                                        onChange={(content) =>
                                            updateProject(index, "btnUrl", content)
                                        }
                                    />}
                                    <PanelRow className="itemAction mt20">
                                        {1 < projects?.length && <Button className="removeItem" onClick={() => handleProjectDelete(index)}>
                                            <Dashicon icon="no" /> Delete
                                        </Button>}

                                        <Button className="duplicateItem" onClick={(e) => onDuplicateProject(e, index)}>
                                            {gearIcon} Duplicate
                                        </Button>
                                    </PanelRow>
                                </PanelBody>
                            })}

                            <div className="addItem mt15">
                                <Button onClick={() => onAddProject()}>
                                    Add New Project
                                </Button>
                            </div>
                        </PanelBody>

                        <PanelBody title={__("Layout", "b-projects")} className="bPlPanelBody" initialOpen={false}>
                            <SelectControl
                                label={__("Layout", "b-projects")}
                                labelPosition="left"
                                value={layout}
                                onChange={(val) => {
                                    let deskCol = 2;
                                    if (val == "vertical") {
                                        deskCol = 3;
                                    }
                                    setAttributes({ layout: val, columns: { ...columns, desktop: deskCol } });
                                }}
                                options={[
                                    { label: "Vertical", value: "vertical" },
                                    { label: "Horizontal", value: "horizontal" },
                                ]} />

                            <Title>{__("Button Label:", "b-projects")}</Title>
                            <TextControl
                                value={btnLabel}
                                onChange={(val) => {
                                    setAttributes({ btnLabel: val })
                                }} />

                            <PanelRow className="mt20">
                                <Title className="mb5">
                                    {__("Columns:", "b-projects")}
                                </Title>
                                <BDevice
                                    device={device}
                                    onChange={(val) => setDevice(val)}
                                />
                            </PanelRow>


                            <UnitControl
                                className="mt20"
                                label={__("Column Gap", "b-projects")}
                                labelPosition="left"
                                value={columnGap}
                                onChange={(val) => setAttributes({ columnGap: val })}
                            />

                            <UnitControl
                                className="mt20"
                                label={__("Row Gap", "b-projects")}
                                labelPosition="left"
                                value={rowGap}
                                onChange={(val) => setAttributes({ rowGap: val })}
                            />
                        </PanelBody>


                        <PanelBody title={__("Elements", "b-projects")} className="bPlPanelBody" initialOpen={false}>
                            <ToggleControl
                                label={__("Show Image", "b-projects")}
                                checked={isImg}
                                onChange={(val) => setAttributes({ isImg: val })}
                            />

                            {isImg && <>
                                {/* <SelectControl
                                    className="mt20"
                                    label={__("Image Position", "b-projects")}
                                    labelPosition="left"
                                    value={imgPos}
                                    onChange={(val) => setAttributes({ imgPos: val })}
                                    options={[
                                        {
                                            label: "vertical" === layout ? "Top" : "Left",
                                            value: "first",
                                        },
                                        {
                                            label: "vertical" === layout ? "Bottom" : "Right",
                                            value: "last",
                                        },
                                    ]}
                                /> */}
                            </>}
                        </PanelBody>
                    </>}

                    {"style" === tab.name && <>
                        <PanelBody className="bPlPanelBody" title={__("Projects", "b-projects")} initialOpen={true}>
                            {/* isImage={false} */}
                            <Background
                                label={__("background", "b-projects")}
                                defaults={{ color: "#000" }}
                                value={gridBackground}
                                onChange={(val) => setAttributes({ gridBackground: val })} />

                            <PanelRow className="mt20">
                                <BoxControl
                                    label={__("Content Padding", "b-projects")}
                                    values={contentPadding}
                                    resetValues={{
                                        "top": "0px",
                                        "right": "0x",
                                        "bottom": "0px",
                                        "left": "0px"
                                    }}
                                    onChange={(value) => setAttributes({ contentPadding: value })} />
                            </PanelRow>
                            <UnitControl
                                className="mt20"
                                label={__("Border Radiousz", "b-projects")}
                                labelPosition="left"
                                value={cardRadius}
                                onChange={(val) => setAttributes({ cardRadius: val })} />

                            <MultiShadowControl
                                className="mt20"
                                value={projectShadow}
                                onChange={(val) => setAttributes({ projectShadow: val })}
                                produce={produce} />
                        </PanelBody>

                        <PanelBody className="bPlPanelBody" title={__("Title", "b-projects")} initialOpen={false}>
                            <Typography
                                label={__("Typography", "b-projects")}
                                value={titleTypo}
                                onChange={(val) => setAttributes({ titleTypo: val })}
                            />

                            <BColor
                                label={__("Color", "b-projects")}
                                value={titleColor}
                                onChange={(val) =>
                                    setAttributes({ titleColor: val })
                                }
                            />

                        </PanelBody>

                        <PanelBody className="bPlPanelBody" title={__("Description", "b-projects")} initialOpen={false}>
                            <Typography
                                label={__("Typography", "b-projects")}
                                value={descTypo}
                                onChange={(val) => setAttributes({ descTypo: val })}
                            />

                            <BColor
                                label={__("Color", "b-projects")}
                                value={descColor}
                                onChange={(val) =>
                                    setAttributes({ descColor: val })
                                }
                            />
                        </PanelBody>


                        {/* Button */}
                        <PanelBody initialOpen={false} title={__("Button", "b-projects")} className="bPlPanelBody">
                            <Typography
                                label={__("Typography", "b-projects")}
                                value={btnTypo}
                                onChange={(val) => setAttributes({ btnTypo: val })}
                            />

                            <SelectControl
                                className="mt20"
                                label={__("Alignment", "b-projects")}
                                labelPosition="left"
                                value={btnAlign}
                                onChange={(val) => setAttributes({ btnAlign: val })}
                                options={[
                                    { label: "Left", value: "left" },
                                    { label: "Center", value: "center" },
                                    { label: "Right", value: "right" },
                                ]}
                            />

                            <ColorsControl
                                className="mt20"
                                label={__("Colorz", "b-projects")}
                                value={btnColors}
                                onChange={(val) => setAttributes({ btnColors: val })}
                            />
                            <ColorsControl
                                label={__("Hover Color", "b-projects")}
                                value={btnHover}
                                onChange={(val) => setAttributes({ btnHover: val })}
                            />

                            <PanelRow className="mt20">
                                <BoxControl
                                    label={__("Paddig", "b-projects")}
                                    values={btnPadding}
                                    resetValues={{
                                        "top": "0px",
                                        "right": "0x",
                                        "bottom": "0px",
                                        "left": "0px"
                                    }}
                                    onChange={(val) => setAttributes({ btnPadding: val })}
                                />
                            </PanelRow>

                            <UnitControl
                                className="mt20"
                                label={__("Border Radious", "b-projects")}
                                labelPosition="left"
                                value={btnRadius}
                                onChange={(val) => setAttributes({ btnRadius: val })} />
                        </PanelBody>
                    </>}
                </>}
            </TabPanel>
        }

    </InspectorControls >
}