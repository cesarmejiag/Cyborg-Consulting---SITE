const { src, dest, watch, series } = require('gulp')
    , sass = require('gulp-sass')
    , autoprefixer = require('gulp-autoprefixer')
    , uglify = require('gulp-uglify')
    , ts = require('gulp-typescript')
    , favicons = require('gulp-favicons')
    , webp = require('gulp-webp')
    , livereload = require('gulp-livereload')
    , merge = require('merge-stream')
    , rename = require('gulp-rename')


const srcPath = {
    fonts: 'source/fonts',
    images: 'source/images',
    scripts: 'source/scripts',
    sass: 'source/sass',
    ts: 'source/typescript',
    root: 'source'
}

const destPath = {
    styles: 'html/fragment/themes/cyborgconsulting/design/styles',
    fonts: 'html/fragment/themes/cyborgconsulting/design/fonts',
    images: 'html/fragment/themes/cyborgconsulting/design/images',
    scripts: 'html/fragment/themes/cyborgconsulting/design/scripts',
    root: 'html/fragment/themes/cyborgconsulting'
}


/**
 * Generate dependencies files.
 * @param {function} callback 
 */
function dependencies(callback) {
    const files = [
        `node_modules/requirejs/require.js`
    ]

    const requirejs = src(files[0])
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename = `${path.basename}.min`
        }))
        .pipe(dest(`${destPath.scripts}`))

    return merge(requirejs)
}


/**
 * Generate favicons for all devices.
 * @param {function} callback 
 */
function favico(callback) {
    const settings = {
        appName: "PL App",
        appShortName: "PL App",
        appDescription: "This is an App created with pl-boilerplate",
        developerName: "César Mejía",
        developerURL: "http://cesarmejia.me/",
        background: "#020307",
        path: "/favicons",
        url: "http://cesarmejia.me/",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/?homescreen=1",
        version: 1.0,
        logging: false,
        html: `${destPath}/index.html`,
        pipeHTML: true,
        replace: true,
        icons: {
            android: false,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            opengraph: false,
            twitter: false,
            windows: false,
            yandex: false
        }
    }

    return src(`${srcPath.root}/favicon.png`)
        .pipe(favicons(settings))
        .pipe(dest(`${destPath.root}/favicons`))
}


/**
 * Copy fonts to production folder.
 * @param {function} callback 
 */
function fonts(callback) {
    const files = `${srcPath.fonts}/*.{eot,woff,woff2,ttf,svg,otf}`

    return src(files)
        .pipe(dest(`${destPath.fonts}`))
}


/**
 * Copy images to production folder.
 * @param {function} callback 
 */
function images(callback) {
    const files = `${srcPath.images}/**.{jpg,jpeg,png,svg,webp}`

    return src(files)
        .pipe(dest(`${destPath.images}`))
}


/**
 * Compiles sass files to generate production styles.
 * @param {function} callback 
 */
function scss(callback) {
    const sassSettings = {
        outputStyle: 'compressed'
    }

    const autoprefixerSettings = {
        cascade: false
    }

    return src(`${srcPath.sass}/styles.scss`)
        .pipe(sass(sassSettings))
        .pipe(autoprefixer(autoprefixerSettings))
        .pipe(dest(`${destPath.styles}`))

}


/**
 * Compiles ts files to generate production scripts.
 * @param {function} callback 
 */
function typescript(callback) {
    const files = [
        `${srcPath.ts}/scripts.ts`
    ]

    const settings = {
        allowJs: true,
        module: 'amd',
        noImplicitAny: false,
        removeComments: true,
        preserveConstEnums: true,
        outDir: `${destPath.scripts}`,
        outFile: `scripts.js`,
        rootDir: `${srcPath.ts}`,
        sourceMap: true,
        target: 'ES5'
    }

    return src(files)
        .pipe(ts(settings))
        .pipe(uglify())
        .pipe(dest(`${destPath.scripts}`))
}


/**
 * Handle watch event.
 * @param {function} callback 
 */
function watcher(callback) {
    const files = [
        `${srcPath.fonts}/**/*.{otf,ttf,woff,svg}`,
        `${srcPath.imgs}/**/*.{jpg,jpeg,svg,png}`,
        `${srcPath.sass}/**/*.scss`,
        `${srcPath.ts}/**/*.ts`
    ]

    livereload.listen()

    return watch(files, series(scss, typescript))
}


/**
 * Copy images to production folder.
 * @param {function} callback 
 */
function webpImages(callback) {
    const files = `${srcPath.images}/**/*.{jpg,jpge,png,tiff,webp}`

    return src(`${files}`)
        .pipe(webp())
        .pipe(`${destPath.images}`)

}


exports.dependencies = dependencies
exports.favico = favico
exports.fonts = fonts
exports.images = images
exports.scss = scss
exports.typescript = typescript
exports.watcher = watcher
exports.webpImages = webpImages

exports.build = series(dependencies, favico, fonts, images, scss, typescript)
