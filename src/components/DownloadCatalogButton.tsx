"use client";
import React from "react";

export default function DownloadCatalogButton({
  className = "",
  children = "Download Our Catalog",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Open in new tab for download or viewing
    window.open("/main_catalog.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className={className}
      onClick={handleDownload}
      type="button"
    >
      {children}
    </button>
  );
}
