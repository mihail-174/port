import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: "1px solid rgba(152,166,173,.2)",
        padding: "19px 24px 20px",
        color: "#98a6ad",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "32px",
    },
    counter: {
      "& a": {
          border: "none",
      }
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className="copyright">{new Date().getFullYear()} © Михаил174</div>
            {/*<div className={classes.counter}>*/}
            {/*    <a href="https://www.liveinternet.ru/click" target="_blank">*/}
            {/*        <img src="https://counter.yadro.ru/logo?26.1" title="" alt="" />*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    )
}
