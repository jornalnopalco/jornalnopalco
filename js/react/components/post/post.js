import React from 'react';
import Util from '../../util';


export default class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = props.content;
    }

    navigate(e){
        e.preventDefault();
        this.props.navigate({id:this.state.id, link:this.state.link});
    }

    render(){
        let img;
        if(this.state.img){
            img = <div className="image pull-left">
                    <a onClick={this.navigate.bind(this)} href={this.state.link}>
                        <img className="img-responsive" src={this.state.img} />
                    </a>
                </div>;
            }
        return (
            <li>
                <div>
                    {img}
                    <a onClick={this.navigate.bind(this)} href={this.state.link}>
                        <time dateTime={this.state.post_date}>
                            {Util.formatDate(new Date(this.state.post_date))}
                        </time>
                        <h1>{this.state.title}</h1>
                        <h2>{this.state.place}</h2>
                    </a>
                </div>
            </li>
        );
    }

}
