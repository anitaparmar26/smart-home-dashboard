    import React from "react";


    const ButtonDownload: React.FC = () => {
      return (
        <div className="absolute end-0 bottom-0 p-6 m-6">
          <a
            href="https://codescandy.com/"
            target="_blank"
            className="h-10 rounded-md bg-brand text-background inline-flex items-center gap-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </div>
      );
    };

    export default ButtonDownload;
