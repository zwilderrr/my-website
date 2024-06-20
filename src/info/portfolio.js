import React from "react";

export const portfolio = [
  {
    title: "BlobStarsNFT",
    website: (
      <a href="https://blobstars.io" target="_blank" rel="noopener noreferrer">
        https://blobstars.io
      </a>
    ),
    tagline:
      "BlobStars are a nod to EIP-4844 and a bright beacon of light for the kind crypto folks bringing important, often misunderstood, change to the world",
    description: [
      "830 unique holders minted 2,692 BlobStars generating ~$22,000 USD in 6 months.",
      "Designed, wrote, and deployed every part of the project, including the NFTs, the smart contract, the website, the crypto wallet integration, and all copy.",
    ],
  },
  {
    title: "GreetMe",
    website: (
      <a
        href="https://master.d2bf28se2n7bfx.amplifyapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://getgreet.me/chrome
      </a>
    ),
    tagline:
      "Five-star rated Google Chrome extension that helps keep you calm, composed, and task-focused",
    description: [
      "Syncs and stores user data with Google’s StorageArea API to create a fast, fully secure, consistent user experience wherever the user is signed into Chrome",
      "Integrates with the Unsplash API via a proxy server deployed on Heroku, built with Express, and which handles logging and error handling",
    ],
  },
];
