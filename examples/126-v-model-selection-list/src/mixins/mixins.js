// mixins.js -
export default {
    methods:{
        getImgUrl(img){
            // WebPack function require() - https://vue-loader.vuejs.org/guide/asset-url.html#asset-url-handling
            return require('../assets/countries/' + img);
        }
    }
}
