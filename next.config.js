/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['camelcapital.vc'],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'camelcapital.vc',
            port: '',
            pathname: '**',
        }, ]
    }
}

module.exports = nextConfig