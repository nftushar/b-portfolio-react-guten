import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";
// console.log("hello");
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
    contentAlign
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

export default function ({ attributes, setAttributes, updateProject }) {
    const {
        projects,
        layout,
        theme,
        columns,
        columnGap,
        rowGap,
        isImg,
        imgPos,
        background,
        padding,
        projectPadding,
        projectShadow,
        imgHeight,
        contentPadding,
        titleColor,
        titleTypo,
        descColor,
        descTypo,
        btnColors,
        btnHovColors,
        btnAlign,
        btnTypo,
        btnPadding,
        projectRadius,
        btnRadius
    } = attributes;
    // console.log(projectRadius)

    const [device, setDevice] = useState("desktop");

    const onAddProject = () => {
        const newCrads = [
            ...projects,
            {
                background: projects?.[0]?.background || {
                    color: '#fff'
                },
                img: "",
                title: `Title of the ${projects?.length + 1} number project`,
                desc: `Description of the ${projects?.length + 1} number project`,
                btnLabal: projects?.[0]?.btnLabal || 'Button',
                btnUrl: "#",
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

    const updateAllProject = (property, value) => {
        const newProjects = [...projects];

        newProjects.map((social, index) => {
            newProjects[index][property] = value;
        });
        setAttributes({ projects: newProjects });
    };

    return <InspectorControls>
        <TabPanel
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
                        title={__("Add or Remove Projects", "info-projects")}
                    >
                        {projects.map((project, index) => {
                            const {
                                background,
                                img,
                                btnLabal,
                                btnUrl
                            } = project;
                            // console.log(project.btnLabal)
                            return <PanelBody
                                className="bPlPanelBody"
                                title={`This is project ${index + 1}`}
                                initialOpen={false}
                            >
                                <Background
                                    label={__("Background", "info-projects")}
                                    value={background}
                                    onChange={(val) =>
                                        updateProject(index, "background", val)
                                    }
                                    isImage={false}
                                />

                                {isImg && <InlineMediaUpload
                                    value={img}
                                    onChange={(val) => updateProject(index, "img", val)}
                                    placeholder={__("Enter Image URL", "info-projects")}
                                />}

                                {/* <BColor
									label={__("Description Color", "info-projects")}
									value={descColor}
									onChange={(val) =>
										updateProject(index, "descColor", val)
									}
								/> */}

                                {btnLabal && <Title>{__("Button Url:", "info-projects")}</Title>}
                                {btnLabal && <TextControl
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
                                <Dashicon icon="plus" /> Add New Project
                            </Button>
                        </div>
                    </PanelBody>


                    <PanelBody title={__("Layout", "info-projects")} className="bPlPanelBody" initialOpen={false}>
                        <SelectControl
                            label={__("Layout", "info-projects")}
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

                        <SelectControl
                            className="mt20"
                            label={__("Theme", "info-projects")}
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
                        />

                        <PanelRow className="mt20">
                            <Title className="mb5">
                                {__("Columns:", "info-projects")}
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
                            label={__("Column Gap", "info-projects")}
                            labelPosition="left"
                            value={columnGap}
                            onChange={(val) => setAttributes({ columnGap: val })}
                        />

                        <UnitControl
                            className="mt20"
                            label={__("Row Gap", "info-projects")}
                            labelPosition="left"
                            value={rowGap}
                            onChange={(val) => setAttributes({ rowGap: val })}
                        />
                    </PanelBody>


                    <PanelBody title={__("Elements", "info-projects")} className="bPlPanelBody" initialOpen={false}>
                        <ToggleControl
                            label={__("Show Image", "info-projects")}
                            checked={isImg}
                            onChange={(val) => setAttributes({ isImg: val })}
                        />

                        {isImg && <>
                            <SelectControl
                                className="mt20"
                                label={__("Image Position", "info-projects")}
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

                            <UnitControl
                                className="mt20"
                                label={__("Image Height", "info-projects")}
                                labelPosition="left"
                                value={imgHeight}
                                onChange={(val) => setAttributes({ imgHeight: val })} />
                        </>}
                    </PanelBody>
                </>}

                {"style" === tab.name && <>
                    <PanelBody className="bPlPanelBody" title={__("Projects", "info-projects")} initialOpen={true}>
                        <Background
                            label={__("background", "info-projects")}
                            defaults={{ color: "#0000" }}
                            value={background}
                            onChange={(val) => setAttributes({ background: val })} />

                        <PanelRow className="mt20">
                            <BoxControl
                                label={__("Paddign", "info-projects")}
                                values={padding}
                                resetValues={{
                                    "top": "0px",
                                    "right": "0x",
                                    "bottom": "0px",
                                    "left": "0px"
                                }}
                                onChange={(value) => setAttributes({ padding: value })} />
                        </PanelRow>

                    </PanelBody>


                    {/* Project */}
                    <PanelBody initialOpen={false}
                        title={__("Project", "info-projects")}
                        className="bPlPanelBody">

                        <BoxControl
                            label={__("Paddign", "info-projects")}
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
                            label={__("Border radious", "info-projects")}
                            labelPosition="left"
                            value={projectRadius}
                            onChange={(val) => setAttributes({ projectRadius: val })} />

                        <MultiShadowControl
                            className="mt20"
                            value={projectShadow}
                            onChange={(val) => setAttributes({ projectShadow: val })}
                            produce={produce} />
                    </PanelBody>


                    {/* Content */}
                    <PanelBody initialOpen={false}
                        title={__("Content", "info-projects")}
                        className="bPlPanelBody">
                        <SelectControl
                            label={__("Alignment", "info-projects")}
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
                                label={__("Paddign", "info-projects")}
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
                    </PanelBody>


                    <PanelBody className="bPlPanelBody" title={__("Title", "info-projects")} initialOpen={false}>
                        <Typography
                            label={__("Typography", "info-projects")}
                            value={titleTypo}
                            onChange={(val) => setAttributes({ titleTypo: val })}
                        />

                        <BColor
                            label={__("Color", "info-projects")}
                            value={titleColor}
                            onChange={(val) =>
                                setAttributes({ titleColor: val })
                            }
                        />
                    </PanelBody>


                    <PanelBody className="bPlPanelBody" title={__("Description", "info-projects")} initialOpen={false}>
                        <Typography
                            label={__("Typography", "info-projects")}
                            value={descTypo}
                            onChange={(val) => setAttributes({ descTypo: val })}
                        />

                        <BColor
                            label={__("Color", "info-projects")}
                            value={descColor}
                            onChange={(val) =>
                                setAttributes({ descColor: val })
                            }
                        />
                    </PanelBody>


                    {/* Button */}
                    <PanelBody initialOpen={false} title={__("Button", "info-projects")} className="bPlPanelBody">
                        <Typography
                            label={__("Typography", "info-projects")}
                            value={btnTypo}
                            onChange={(val) => setAttributes({ btnTypo: val })}
                        />

                        <SelectControl
                            className="mt20"
                            label={__("Alignment", "info-projects")}
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
                            label={__("Colors", "info-projects")}
                            value={btnColors}
                            onChange={(val) => setAttributes({ btnColors: val })}

                        />

                        <ColorsControl
                            label={__("Hover Colors", "info-projects")}
                            value={btnHovColors}
                            onChange={(val) => setAttributes({ btnHovColors: val })}

                        />

                        <PanelRow className="mt20">
                            <BoxControl
                                label={__("Paddign", "info-projects")}
                                values={btnPadding}
                                resetValues={{
                                    "top": "0px",
                                    "right": "0x",
                                    "bottom": "0px",
                                    "left": "0px"
                                }}
                                onChange={(value) => setAttributes({ btnPadding: value })}
                            />
                        </PanelRow>

                        <UnitControl
                            className="mt20"
                            label={__("Border Radious", "info-projects")}
                            labelPosition="left"
                            value={btnRadius}
                            onChange={(val) => setAttributes({ btnRadius: val })} />
                    </PanelBody>
                </>}
            </>}
        </TabPanel>
    </InspectorControls>
}