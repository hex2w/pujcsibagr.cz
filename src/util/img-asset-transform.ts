export default (imgAssets: object) => Object.entries(imgAssets)
    .map(([ path, url ]: any) => ({
        id: path.split(".").shift().replace("/src/", "").replace(/\//g, "-") + "-" + Math.random().toString(36).slice(2, 9),  // generate a unique id for each image
        src: url(),
        alt: path.split("/").pop().split(".").shift(),
    }))
