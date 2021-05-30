import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SimpleTabs from "../components/SimpleTabs";
import {Switch} from "react-router-dom";
import BackToTop from "../components/BackToTop";

const useStyles = makeStyles((theme) => ({
	anchorToTop: {
		marginBottom: theme.spacing(3)
	},
	// paper: {
	//     padding: theme.spacing(2),
	//     textAlign: 'center',
	//     color: theme.palette.text.secondary,
	// },
}));

function Front() {
	const classes = useStyles();

	return (
		<div className="app-wrapper front-page">
			<Header/>
			<div className={"content"}>
				<h1 className={"page-title"}>Мои работы</h1>
				<SimpleTabs/>
			</div>
			<Footer/>
		</div>
	)
}
export default Front;