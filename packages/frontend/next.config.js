/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
		// allowFutureImage: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ucarecdn.com',
			},
			{
				protocol: 'http',
				hostname: 'via.placeholder.com',
			},
            {
                protocol: 'https',
				hostname: 'i.dummyjson.com',
            },
            {
                protocol: 'https',
				hostname: 'images.pexels.com',
            },
        ],
    },
};

module.exports = nextConfig;
