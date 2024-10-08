// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',             
                destination: '/lab',   
                permanent: true,  
            },
        ];
    },
};

export default nextConfig;
