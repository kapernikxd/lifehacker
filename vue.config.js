module.exports = {
    publicPath: '',
    css: {
        loaderOptions: {
            sass: {
                prependDate: ' @import "@/assets/css/style.scss"; '
            }
        }
    }
}