import React, { Component} from 'react';
import { Post } from '../presentation';
import { FlatList } from 'react-native';

class PostFeed extends Component{
    //Metodo que redezira o componente Post passando 'Item' para ser acessado pelo props em InstaClone
    _renderPost({item}){
        return <Post item={item} />;
    }
    
    _returnKey(item){
        return item.toString();
    }
    //Gero uma lista de 20 componentes, atribuio uma key para cada publicação e chamo um medotodo para renderizar o componente Post
    render(){
        return <FlatList
            data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
            />;
    }

}

export default PostFeed;