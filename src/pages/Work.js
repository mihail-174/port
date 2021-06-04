import React, {useState} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import SimpleTabs from "../components/SimpleTabs";
import BackToTop from "../components/BackToTop";
import {makeStyles} from "@material-ui/core/styles";
import dataWorks from "../dataWorks";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
	anchorToTop: {
		marginBottom: theme.spacing(3)
	},
	paper: {
		padding: theme.spacing(2)
	},
}));

// function generate(element) {
// 	return [0, 1, 2].map((value) =>
// 		React.cloneElement(element, {
// 			key: value,
// 		}),
// 	);
// }

function Work(props) {
	const classes = useStyles();
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	// const id = parseInt(props.match.params.id) - 1;
	const id = props.match.params.id;
	document.documentElement.scrollTop = 0;

	let workData = dataWorks.filter(item=> {
		if ( item.id === parseInt(id) ) {
			return item;
		}
	});
	workData = workData[0];

	let desktopGallery = null;
	if (typeof workData["gallery-desktop"] != 'undefined') {
		desktopGallery = workData["gallery-desktop"].map((elem, key) => {
			return (
				<img
					key={key}
					src={`images/works/${workData.system}/${elem}`}
					alt={ workData.name }
				/>
			)
		});
	}

	let mobileGallery = null;
	if (typeof workData["gallery-mobile"] != 'undefined') {
		mobileGallery = workData["gallery-mobile"].map((elem, key) => {
			return (
				<img
					key={key}
					src={`images/gallery/${workData.preview}/${elem}`}
					alt={workData.name}
				/>
			)
		});
	}

	return (
		<div className="app-wrapper work-page">
			<Header/>
			<div className={"content"}>

				<div className={"to-back-page"} onClick={props.history.goBack}>назад</div>

				<div className={`work work-${workData.id}`}>
					<div className={"work__card"}>
						{/*<img*/}
						{/*	className={"work__image"}*/}
						{/*	src={"/images/preview/" + workData.preview + ".jpg"}*/}
						{/*	alt=""*/}
						{/*/>*/}
						<h1 className="work__name">{ workData.name }</h1>
						{
							workData.descr &&
							<div className={"work__description-1"}>
								<div dangerouslySetInnerHTML={ { __html: workData.descr } }></div>
							</div>
						}
						{/*<div className={"work__description-2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </div>*/}

						{
							workData.configurator
								?
								""
								:
								<div className={"work__view"}>
									<div className={"work__view-item"}>
										<span>CMS</span>
										<div>{workData.cms ? workData.cms : "—"}</div>
									</div>
									<div className={"work__view-item"}>
										<span>Время</span>
										<div>{workData.time ? workData.time : "—"}</div>
									</div>
									<div className={"work__view-item"}>
										<span>Использовано</span>
										<div>{workData.used ? workData.used : "—"}</div>
									</div>
								</div>
						}
					</div>
					{/*<div className={"work__gallery"}>*/}
					{/*	<img*/}
					{/*		className={""}*/}
					{/*		src={"images/gallery/" + workData.gallery}*/}
					{/*		alt=""*/}
					{/*	/>*/}
					{/*</div>*/}
					{
						desktopGallery &&
						<div className={"work__desktop-gallery"}>
							{ desktopGallery }
						</div>
					}
					{/*{*/}
					{/*	mobileGallery &&*/}
					{/*	<div className={"work__mobile-gallery"}>*/}
					{/*		<h4>Мобильная версия</h4>*/}
					{/*		{ mobileGallery }*/}
					{/*	</div>*/}
					{/*}*/}
				</div>


			</div>
			<Footer/>
		</div>
	)
}
export default Work;