const YoutubeMusic = (props) => {
  const { className } = props;
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 99 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_123_14230)">
        <path
          d="M49.5 100C76.8381 100 99 77.6142 99 50C99 22.3858 76.8381 0 49.5 0C22.1619 0 0 22.3858 0 50C0 77.6142 22.1619 100 49.5 100Z"
          fill="#FF0000"
        />
        <path
          d="M49.5 26.1363C62.4938 26.1363 73.125 36.8181 73.125 49.9999C73.125 63.1817 62.55 73.8635 49.5 73.8635C36.45 73.8635 25.875 63.1817 25.875 49.9999C25.875 36.8181 36.5062 26.1363 49.5 26.1363ZM49.5 23.8635C35.2125 23.8635 23.625 35.5681 23.625 49.9999C23.625 64.4317 35.2125 76.1363 49.5 76.1363C63.7875 76.1363 75.375 64.4317 75.375 49.9999C75.375 35.5681 63.7875 23.8635 49.5 23.8635Z"
          fill="white"
        />
        <path
          d="M40.5 63.0682L62.4375 49.4319L40.5 36.9319V63.0682Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_123_14230">
          <rect width="99" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeMusic;
