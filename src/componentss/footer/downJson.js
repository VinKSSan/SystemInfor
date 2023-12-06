import React from 'react';

const FileDownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
//baixar
  return (
    <button onClick={handleDownload}>
      Baixar grafana Dash
    </button>
  );
};

export default FileDownloadButton;

