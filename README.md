# STYLE LAB 20210201

the steps

* let's delete what we don't need
* create a content folder for images and extra mdx
* install mdx
```
npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react gatsby-remark-images
```
* add the plugin to `config.js`
```
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // defaultLayouts: {
        //   posts: require.resolve("./src/components/posts-layout.js"),
        //   default: require.resolve("./src/components/default-page-layout.js"),
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
```
* add static folder: 
```
mkdir static static/_images
curl -o static/_images/gatsby.jpg "https://i.guim.co.uk/img/media/cc5ff87a032ce6e4144e63a2a1cbe476dbc7cd5a/273_0_3253_1952/master/3253.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=d8da5fd430d3983dc50543a44b3979d4"
```
* then add theme-ui
```
npm i theme-ui gatsby-plugin-theme-ui @theme-ui/presets
```
* and add to config
```
`gatsby-plugin-theme-ui`,
```
* create the shadow theme folder (and, optionally start with a base theme and merge on top of it)
* 