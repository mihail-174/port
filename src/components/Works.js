import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CardWork from "../components/CardWork";
import dataWorks from "../dataWorks";

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexGrow: 1,
	// },
	// paper: {
	// 	padding: theme.spacing(2),
	// 	textAlign: 'center',
	// 	color: theme.palette.text.secondary,
	// },
	// workList: {
	// 	display: "grid",
	// 	gridTemplateColumns: "repeat(4, 1fr)",
	// 	// gridTemplateColumns: "repeat(auto-fill, minmax(313px, 1fr))",
	// 	gridGap: "12px",
	// },

}));

function Works(props) {
	const classes = useStyles();
	let work = [];
	if (props.filterClass === "all") {
		work = dataWorks.filter(item => {
			if (item.all) {
				return item
			}
		});
	}
	if (props.filterClass === "site") {
		work = dataWorks.filter(item => {
			if (item.site) {
				return item
			}
		});
	}
	if (props.filterClass === "landing") {
		work = dataWorks.filter(item => {
			if (item.landing) {
				return item
			}
		});
	}
	if (props.filterClass === "configurator") {
		work = dataWorks.filter(item => {
			if (item.configurator) {
				return item
			}
		});
	}
	if (props.filterClass === "react") {
		work = dataWorks.filter(item => {
			if (item.react) {
				return item
			}
		});
	}
	if (props.filterClass === "vue") {
		work = dataWorks.filter(item => {
			if (item.vue) {
				return item
			}
		});
	}
	if (props.filterClass === "javascript") {
		work = dataWorks.filter(item => {
			if (item.javascript) {
				return item
			}
		});
	}

	return (
		<div className={"block-works"}>
			<p className={"block-works__count"}>
				Количество работ: { work.length } шт.
			</p>

			{/*<Grid container spacing={3}>*/}
			<div className={"block-works__content"}>
				{
					work.map((item, key) => {
						return (
							<CardWork key={key} data={item} />
							// <Grid className={classes.root} key={key} item xs={6} sm={4}>
							// {/*<Paper className={classes.paper}>*/}
							// {/*	<CardWork/>*/}
							// {/*	{ item.name }*/}
							// {/*</Paper>*/
							// 							// {/*</Grid>*/}}
						)
					})
				}
			</div>
			{/*</Grid>*/}
		</div>
	)
}
export default Works;