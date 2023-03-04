/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
		remotePatterns: [
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
