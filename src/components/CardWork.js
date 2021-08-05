import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	// maxWidth: 345,
	// 	maxWidth: "none",
	// 	height: "100%",
	// 	display: "flex",
	// 	flexDirection: "column",
	// 	"& .MuiCardContent-root": {
	// 		flex: 1,
	// 		display: "flex",
	// 		flexDirection: "column",
	// 		justifyContent: "flex-start",
	// 	},
	// 	"& .MuiCardMedia-root": {
	// 		width: "100%"
	// 	}
	// },
	// media: {
	// 	height: 294,
	// 	borderBottom: "1px solid #dfdfdf"
	// },
	// chips: {
	// 	display: 'flex',
	// 	// justifyContent: 'center',
	// 	// flexWrap: 'wrap',
	// 	'& > *': {
	// 		margin: theme.spacing(0.5),
	// 	}
	// }

	// card: {
	// 	border: "1px solid var(--border-color)",
	// 	borderRadius: "var(--border-radius)",
	// 	backgroundColor: "#fff",
	// 	overflow: "hidden",
	// 	boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.02)",
	// 	display: "flex",
	// 	flexDirection: "column",
	// 	"& img": {
	// 		maxWidth: "100%",
	// 		// height: "auto",
	// 		height: "297px",
	// 		borderBottom: "1px solid lightgray",
	// 	}
	// },
	// cardInfo: {
	// 	display: "grid",
	// 	gridGap: "8px",
	// 	padding: "16px",
	// 	flex: 1,
	// },
	// cardName: {
	// 	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	// 	fontWeight: 400,
	// },
	// cardTags: {
	// 	display: "flex",
	// 	gridGap: "8px",
	// },
	// cardTag: {
	// 	border: "1px solid rgba(0, 0, 0, 0.23)",
	// 	height: "24px",
	// 	color: "rgba(0, 0, 0, 0.87)",
	// 	cursor: "default",
	// 	fontSize: "14px",
	// 	borderRadius: "16px",
	// 	padding: "0 8px",
	// },
	// cardBtns: {
	// 	display: "flex",
	// 	flexDirection: "row-reverse",
	// 	alignItems: "flex-end",
	// 	justifyContent: "space-between",
	// 	gridGap: "8px",
	// 	marginTop: "16px",
	// },

}));

export default function CardWork(props) {
	const classes = useStyles();

	return (
		<div className={`teaser-work`}>
			<div className={"field-image"}>
				<Link
					to={{
						pathname: "/work/"+props.data.system,
						propsData: props.data,
					}}
				>
					<img src={"images/works/" + props.data.system + "/preview.jpg"} alt=""/>
				</Link>
			</div>
			<div className={"field-group-info"}>
				<div className={"field-name"}>{ props.data.name }</div>
				<div className={"field-group-tags"}>
					{ props.data.site && <div className={"field-tag"}>Верстка сайта</div> }
					{ props.data.landing && <div className={"field-tag"}>Верстка страницы</div> }
					{ props.data.configurator && <div className={"field-tag"}>Configurator</div> }
					{ props.data.vue && <div className={"field-tag"}>Vue</div> }
					{ props.data.react && <div className={"field-tag"}>React</div> }
					{ props.data.javascript && <div className={"field-tag"}>Javascript</div> }
				</div>
				<div className={"field-group-btns"}>
					<Link
						to={{
							pathname: "/work/"+props.data.system,
							propsData: props.data,
						}}
						className={"btn btn-primary"}
					>Подробнее</Link>
					{/*{ props.data.url && <a className={""} href={`http://${props.data.url}`} target={"_blank"}>Перейти на сайт</a> }*/}
					{ props.data.demo && <a className={""} href={props.data.demo} target={"_blank"}>Посмотреть демо</a> }
				</div>
			</div>
		</div>
	);
}