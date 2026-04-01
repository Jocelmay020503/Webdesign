/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  turbopack: {
    root: 'C:\\Users\\User\\OJT\\Design',
    resolveAlias: {
      canvas: 'empty',
    },
  },
}

export default nextConfig
