import React from 'react';


export default class AjaxComponent extends React.Component{

    constructor(props){
        super(props);
        // this.props = props;
    }

    loadApi(endpoint, callback, opts){
        // callback
        if(typeof callback != "function" && (!Array.isArray(callback) || typeof callback.callback != "function")) throw "Unable to load content without a callback function";

        $.ajax({
            url:this.getEndpointUrl(endpoint),
            data:this.formatParameters(opts),
            dataType:"json",
            method:"GET",
            success:function(data){
                return callback(null, data);
            }.bind(this),
            error:function(jqXHR, textStatus, error){
                return callback({
                    message:textStatus,
                    error:error
                });
            }.bind(this)
        });
    }

    getEndpointUrl(endpoint){
        if(!endpoint) throw "Endpoint undefined";

        let path = this.getEndpointPath(endpoint);
        return "/jornalnopalco2".concat(path);
    }

    getEndpointPath(endpoint){

        switch (endpoint) {
            case "cover":
                return '/jpapi/cover';
                break;
            case 'post':
                return '/jpapi/post';
            default:
                return "/";

        }
    }

    formatParameters(params){
        // TODO: extract required parameters from options
        return params;
    }

}