export default function(context) {
  return {
    httpEndpoint: 'https://strapi-hertha.herokuapp.com/graphql',
    getAuth: () => `Bearer ${process.env.cmsApiToken}`
  }
}