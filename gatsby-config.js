/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}.local`
})
require('dotenv').config({
  path: `.env`
})

console.log('NODE_ENV:', process.env.NODE_ENV);

const robotsPolicy = process.env.NODE_ENV === 'production' && process.env.GATSBY_DEPLOYMENT_ENV !== 'staging'
  ? [{ userAgent: '*', allow: '/' }]
  : [{ userAgent: '*', disallow: '/' }];


module.exports = {
  pathPrefix: "/anzzahp-gatsby",
  siteMetadata: {
    title: `ANZZA ~bottega di borsa~`,
    description: `ANZZAは東松島の革製バッグ店。オリジナルデザインのバッグ製作・販売、フルオーダーメイド、修理・リメイクサービスを提供。ランドセルリメイクも提供しています。あなたの個性を反映した革製品で、日常に特別な一品を。`,
    image: `/static/images/favicon.ico`,
    siteUrl: `https://anzza.jp`,
    type: `website`,
    icon: "/images/favicon.png",
    keywords: `ANZZA, 革バッグ, ランドセルリメイク, 東松島, バッグ, イージーオーダー, 革リメイク, 革工房, 鞄工舎`,
  },

  plugins: [
    // サイトマップ: クローラ対策
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://anzza.jp',
        sitemap: 'https://anzza.jp/sitemap.xml',
        policy: robotsPolicy
      }
    },

    // Google Analytics: サイトトラッキング
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA4_ID],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/secrets/**"],
          delayOnRouteUpdate: 0,
        },
      },
    },
    // URL正規化
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://anzza.jp`,
        stripQueryString: true,
      },
    },

    // manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ANZZA ~bottega di borsa~`, // アプリ名
        short_name: `ANZZA`, // 短いアプリ名
        description: `The application shows ANZZA, which is a leather bag shop in Higashimatsushima in Japan.`,
        lang: `ja`,
        display: `standalone`,
        icon: `static/images/favicon.png`,
        icons: [
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `icons/icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
        ],
        start_url: `/`,
        background_color: `#FFE200`, // 背景色：蒲公英色
        theme_color: `#FFE200`, // テーマ色
      },
    },

    // filesystems
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },


    "gatsby-plugin-sass",

    "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': 'src', // ルートから'src'ディレクトリを参照
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_S3_BUCKET,
        acl: null,
        // CloudFront設定を追加
        protocol: "https",
        hostname: "anzza.jp",
        cloudfrontDistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
        cloudFrontPatternToInvalidate: "/*"
      },
    },
  ]
};


