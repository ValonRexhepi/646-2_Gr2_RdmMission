import React from "react";
import { Page, Document , pdfjs } from "react-pdf";
import Mission_GDR_2022_Regles from "../docs/Mission_GDR_2022_Regles.pdf";
import { Link } from "react-router-dom";

export default function Rules() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
        <div className="container">
            <Link to ="/" className="button">Go Home</Link>
            <div className="pdfdiv">
                <Document file={Mission_GDR_2022_Regles}>
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                </Document>
            </div>
        </div>
    )
}