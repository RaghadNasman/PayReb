// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// import {NextConfig} from 'next';
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);