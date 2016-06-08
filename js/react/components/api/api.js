
const PATH = "/jpapi";
const PATH_DEV = "/jornalnopalco2/jpapi";

class Api {
    constructor(){
    }

    getPath(){
        return ("production" !== process.env.NODE_ENV) ? PATH_DEV : PATH;
    }

    getPosts(opts){
        opts.api = "post";
        return this._fetchAPI(opts);
    }

    getPost(opts){
        opts.api = `post/post/${opts.id}`;
        return this._fetchAPI(opts);
    }

    _fetchAPI(args){
        let { callback=(err, data)=>false, filter={}, page=0, api } = args || {};
        $.ajax({
            url:this._getEndpointUrl(api, page),
            data:filter,
            dataType:"json",
            method:"GET",
            success:(data) => callback(null, data),
            error:(jqXHR, textStatus, error) => callback({
                    message:textStatus,
                    error:error
                })
        });
    }

    _getEndpointUrl(api, page){
        if(!api) throw "Undefined endpoint";
        if(api == "wpjson"){
            return this.getPath()+"/wp-json/wp/v2/posts";
        }
        let path = api;
        if(page){
            path = path.concat(`/page/${page}`);
        }
        // let path = this.getEndpointPath(api);
        return this.getPath().concat(`/${path}`);
    }

}

const api = new Api;
export default api;
