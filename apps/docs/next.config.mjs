// /** @type {import('next').NextConfig} */
// const nextConfig = {

// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',             
                destination: '/pharmacy',   
                permanent: true,  
            },
        ];
    },
};

export default nextConfig;

