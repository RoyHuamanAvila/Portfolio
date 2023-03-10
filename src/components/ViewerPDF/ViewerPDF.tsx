import React from 'react';
import './styles/ViewerPDF.scss';
import { Viewer, Worker } from '@react-pdf-viewer/core'
export interface ViewerPDFProps { }

const ViewerPDF: React.FC<ViewerPDFProps> = () => {
	return (
		<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js'>
			<Viewer fileUrl={'src\files\C.V.RoyHuaman.pdf'} />
		</Worker>
	)
};

export default ViewerPDF;
