import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Works from "./Works";
import Container from "@material-ui/core/Container";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTabs-flexContainer": {
			overflowX: 'auto',
		},
		"& .MuiTabs-root": {
			marginBottom: theme.spacing(3),
			borderBottom: '1px solid #e8e8e8',
		}
	},
}));

export default function SimpleTabs() {
	const classes = useStyles();
	const [url, setCategoryWork] = useState("all");
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setCategoryWork(event.currentTarget.dataset.class);
		// console.log(newValue);
		// setCategoryWork(url + 1)
	};

	return (
		<div className={classes.root}>
			<Tabs value={value} onChange={handleChange}>
				<Tab label="Все" data-class={"all"} />
				<Tab label="Верстка сайтов" data-class={"site"} />
				<Tab label="Лендинг" data-class={"landing"} />
				<Tab label="Конфигураторы" data-class={"configurator"} />
				<Tab label="React" data-class={"react"} />
				<Tab label="Vue" data-class={"vue"} />
				<Tab label="Javascript" data-class={"javascript"} />
			</Tabs>
			<Works filterClass={ url } />
		</div>
	);
}