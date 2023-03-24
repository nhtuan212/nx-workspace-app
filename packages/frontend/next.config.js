/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
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
        ],
    },
};

module.exports = nextConfig;
