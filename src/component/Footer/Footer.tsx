import React from "react";
import {FormattedDate, useIntl} from "react-intl";

const Footer = () => {
    const intl = useIntl();
    return (
        <>
            <div className="container_infos_footer">
                <ul className="infos_footer">
                    <li>Contact</li>
                    <li>jessica.rigaud.wd@gmail.com</li>
                    <li>Chambéry - 73000</li>
                </ul>
                <ul className="infos_footer">
                    <li>Réseaux Sociaux</li>
                    <li>Linkedin</li>
                    <li>GitHub</li>
                </ul>
  
                <p>{intl.formatDate(Date.now())}</p>
            </div>
        </>
    );
}

export default Footer;