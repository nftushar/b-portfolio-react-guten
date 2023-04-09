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
        btnRadius
    } = attributes;
    // console.log(btnLabel);

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
                "clientRating": "4.5",
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
                    "https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large",
                ]
            }
        ];
        setAttributes({ projects: newCrads });
    };


    function handleProjectDelete(index) {
        const newCrads = [...projects];
        newCrads.splice(index, 1);
        setAttributes({ projects: newCrads });
    }

    const onDuplicateProject = (e, index) => {
        e.preventDefault();
        const newProjects = [...projects];
        newProjects.splice(index, 0, projects[index]);
        setAttributes({ projects: newProjects });
    };

    // const updateAllProject = (property, value) => {
    //     const newProjects = [...projects];

    //     newProjects.map((social, index) => {
    //         newProjects[index][property] = value;
    //     });
    //     setAttributes({ projects: newProjects });
    // };

    return <InspectorControls>
        {modalOpen ?
            <PanelBody className="bPlPanelBody"
                title={__("Project Modal", "b-projects")}>
                {/* Project Modal open */}
                {projects[currentIndex].images.map((image, index) => {
                    return <InlineMediaUpload
                        value={image}
                        onChange={(val) => {
                            const newImages = [...projects[currentIndex].images];
                            newImages[index] = val;
                            updateProject(currentIndex, 'images', newImages);
                        }}
                        placeholder={__("Enter Image URL", "b-projects")}
                    />
                })}

                <Button variant="primary" onClick={() => {
                    const newImages = [...projects[currentIndex].images];
                    newImages.push(' ');
                    updateProject(currentIndex, 'images', newImages);
                }}>{__("Add New Image", "b-projects")}</Button>

                {/* const {img} = project; */}


                {/* { isImg && <Title>{__("Image Url:", "b-projects")}</Title> } */}
                {/* {
                        isImg &&
                    } */}

                {/* Project Modal end */}
            </PanelBody> : <TabPanel
                className="bPlTabPanel"
                activeClass="activeTab"
                tabs={[
                    { name: "general", title: "General" },
                    { name: "style", title: "Style" },
                ]}
            >
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
                                } = project;
                                // console.log(background)
                                // console.log()
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
                                    {/* { console.log(background)} */}

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
                                // { console.log(btnLabel) }
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
                                ]}

                            />

                            <TextControl
                                label={__("Button Label", "b-project")}
                                value={btnLabel}

                                onChange={(val) => {
                                    setAttributes({ btnLabel: val })
                                }}
                            />


                            {/* <SelectControl
                            className="mt20"
                            label={__("Theme", "b-projects")}
                            labelPosition="left"
                            value={theme}
                            onChange={(val) => {
                                setAttributes({ theme: val });

                                "default" === val &&
                                    (setAttributes({
                                        columns: { ...columns, desktop: 3 },
                                        layout: "vertical",
                                        titleColor: "#000",
                                        descColor: "#000",
                                        isImg: true,
                                        imgPos: "first",
                                        projectPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                                        btnColors: { color: "#fff", bg: "#4527a4", },
                                        btnHovColors: { color: "#fff", bg: "#fe6601", }
                                    }),
                                        updateAllProject("background", { color: "#fff" })
                                    );

                                "theme1" === val &&
                                    (setAttributes({
                                        columns: { ...columns, desktop: 3 },
                                        layout: "vertical",
                                        titleColor: "#000",
                                        descColor: "#000",
                                        isImg: true,
                                        imgPos: "last",
                                        projectPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                                        btnColors: { color: "#fff", bg: "#4527a4", },
                                        btnHovColors: { color: "#fff", bg: "#fe6601", }
                                    }),
                                        updateAllProject("background", { color: "#fff" })
                                    );

                                "theme2" === val &&
                                    (setAttributes({
                                        columns: { ...columns, desktop: 3 },
                                        layout: "vertical",
                                        titleColor: "#000",
                                        descColor: "#000",
                                        isImg: true,
                                        imgPos: "first",
                                        projectPadding: { top: "15px", right: "15px", bottom: "15px", left: "15px" },
                                        btnColors: { color: "#fff", bg: "#4527a4", },
                                        btnHovColors: { color: "#fff", bg: "#fe6601", }
                                    }),
                                        updateAllProject("background", { color: "#fff" })
                                    );

                                "theme3" === val &&
                                    (setAttributes({
                                        columns: { ...columns, desktop: 2 },
                                        layout: "horizontal",
                                        titleColor: "#000",
                                        descColor: "#000",
                                        isImg: true,
                                        imgPos: "first",
                                        projectPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                                        btnColors: { color: "#fff", bg: "#4527a4", },
                                        btnHovColors: { color: "#fff", bg: "#fe6601", }
                                    }),
                                        updateAllProject("background", { color: "#fff" })
                                    );

                                "theme4" === val &&
                                    (setAttributes({
                                        columns: { ...columns, desktop: 3 },
                                        layout: "vertical",
                                        isImg: true,
                                        imgPos: "first",
                                        titleColor: "#fff",
                                        descColor: "#fff",
                                        projectPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                                        btnColors: { color: "#fff", bg: "#000", },
                                        btnHovColors: { color: "#ffffffb3", bg: "#000000b3", }
                                    }),
                                        updateAllProject("background", { color: "#570DF8" })
                                    );
                            }}
                            options={[
                                { label: "Default", value: "default" },
                                { label: "Theme 1", value: "theme1" },
                                { label: "Theme 2", value: "theme2" },
                                { label: "Theme 3", value: "theme3" },
                                { label: "Theme 4", value: "theme4" },
                            ]}
                        /> */}

                            <PanelRow className="mt20">
                                <Title className="mb5">
                                    {__("Columns:", "b-projects")}
                                </Title>
                                <BDevice
                                    device={device}
                                    onChange={(val) => setDevice(val)}
                                />
                            </PanelRow>
                            <RangeControl
                                value={columns[device]}
                                onChange={(val) => {
                                    setAttributes({ columns: { ...columns, [device]: val } });
                                }}
                                min={1}
                                max={6}
                                step={1}
                                beforeIcon="grid-view"
                            />

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
                                <SelectControl
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
                                />

                                {/* <UnitControl
                                    className="mt20"
                                    label={__("Image Height", "b-projects")}
                                    labelPosition="left"
                                    value={imgHeight}
                                    onChange={(val) => setAttributes({ imgHeight: val })} /> */}
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


                        {/* Project */}
                        {/* <PanelBody initialOpen={false}
                        title={__("Project", "b-projects")}
                        className="bPlPanelBody">

                        <BoxControl
                            label={__("Paddign", "b-projects")}
                            values={projectPadding}
                            resetValues={{
                                "top": "0px",
                                "right": "0x",
                                "bottom": "0px",
                                "left": "0px"
                            }}
                            onChange={(value) => setAttributes({ projectPadding: value })} />

                        <UnitControl
                            className="mt20"
                            label={__("Border radious", "b-projects")}
                            labelPosition="left"
                            value={projectRadius}
                            onChange={(val) => setAttributes({ projectRadius: val })} />

                        <MultiShadowControl
                            className="mt20"
                            value={projectShadow}
                            onChange={(val) => setAttributes({ projectShadow: val })}
                            produce={produce} />
                    </PanelBody> */}


                        {/* Content */}
                        {/* <PanelBody initialOpen={false}
                        title={__("Content", "b-projects")}
                        className="bPlPanelBody">
                        <SelectControl
                            label={__("Alignment", "b-projects")}
                            labelPosition="left"
                            value={contentAlign}
                            onChange={(val) => setAttributes({ contentAlign: val })}
                            options={[
                                { label: "Left", value: "left" },
                                { label: "Center", value: "center" },
                                { label: "Right", value: "right" },
                            ]}
                        />

                        <PanelRow className="mt20">
                            <BoxControl
                                label={__("Paddign", "b-projects")}
                                values={contentPadding}
                                resetValues={{
                                    "top": "0px",
                                    "right": "0x",
                                    "bottom": "0px",
                                    "left": "0px"
                                }}
                                onChange={(value) =>
                                    setAttributes({ contentPadding: value })
                                }
                            />
                        </PanelRow>
                    </PanelBody> */}


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
                            {/* {console.log(btnColors.bgColor)} */}
                            <ColorsControl
                                label={__("Hoverz Color", "b-projects")}
                                value={btnHover}
                                onChange={(val) => setAttributes({ btnHover: val })}

                            />

                            <PanelRow className="mt20">
                                <BoxControl
                                    label={__("Paddign", "b-projects")}
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
            </TabPanel>}

    </InspectorControls>
}