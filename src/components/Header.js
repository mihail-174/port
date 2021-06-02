import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// const useStyles = makeStyles((theme) => ({
//     header: {
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: "var(--header-height)",
//         color: "#fff",
//         boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
//         backgroundColor: "#3f51b5",
//         zIndex: 1,
//         "& .container": {
//             display: "grid",
//             gridTemplateColumns: "1fr auto",
//             gridGap: "16px",
//             alignItems: "center",
//             padding: "8px",
//             height: "100%",
//         }
//     },
//     name: {
//         "& span": {
//             fontSize: "18px",
//             fontWeight: "700",
//         }
//     },
//     menu: {
//         margin: 0,
//         padding: 0,
//         display: "flex",
//         "& li": {
//             listStyle: "none",
//         },
//         "& a": {
//             color: "#fff",
//             border: "none",
//             padding: "8px 16px",
//             transition: "all 0.2s ease-in-out",
//             borderRadius: "4px",
//             "&:hover": {
//                 backgroundColor: "#384aae",
//             },
//         }
//     },
// }));

function Header() {
    // const classes = useStyles();
    return (
        <div className={"header"}>
            <div className={"header__inner"}>
                <div className={"header__name"}>
                    <div><span>FrontEnd Портфолио</span></div>
                    <div>Приданников Михаил</div>
                </div>
                <ul className={"header__menu"}>
                    <li>
                        <Link to='/'>Мои работы</Link>
                    </li>
                    <li>
                        <Link to='/about'>Обо мне</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;