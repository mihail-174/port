import React from "react";

export default function Footer() {
    return (
        <div className={"footer"}>
            <div className="copyright">{new Date().getFullYear()} © Михаил174</div>
            <div className={"counter"}>

                <div dangerouslySetInnerHTML={{ __html: `
                    <!--LiveInternet logo--><a href="https://www.liveinternet.ru/click"
                    target="_blank"><img src="https://counter.yadro.ru/logo?26.3"
                    title="LiveInternet: показано число посетителей за сегодня"
                    alt="" style={"border:0"} width="88" height="15"/></a><!--/LiveInternet-->
                ` }} />

            </div>
        </div>
    )
}
