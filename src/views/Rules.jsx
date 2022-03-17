import React from "react";
import { Page, Document , pdfjs } from "react-pdf";
import Mission_GDR_2022_Regles from "../docs/Mission_GDR_2022_Regles.pdf";
import { Link } from "react-router-dom";
import styles from "../styles/app.module.css"

export default function Rules() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
        <div>
            <Link to ="/" className={styles.button}>Go Home</Link>
            <div className={styles.pdfdiv}>
                <Document file={Mission_GDR_2022_Regles}>
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                </Document>
            </div>
        </div>
    )
}