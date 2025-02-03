module.exports = {
    flags: {
        DEV_SSR: false
    },
    siteMetadata: {
        title: `Bürgler Business Solutions`,
        description: `We build things for the web`,
        author: `Bürgler Business Solutions`,
        siteUrl: `https://b-business-solutions.ch`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/locales`,
                name: `locale`
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`,
                languages: [`en`, `de`],
                defaultLanguage: `de`,
                siteUrl: `https://b-business-solutions.ch/`,
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false
                    },
                    keySeparator: false,
                    nsSeparator: false
                },
            }
        }
    ],
}