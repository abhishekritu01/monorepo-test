// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',             
                destination: '/billing',   
                permanent: true,  
            },
        ];
    },
};

export default nextConfig;
