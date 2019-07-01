import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';


class Post extends Component{

    constructor(){
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likeToogled(){
        this.setState({
            liked: !this.state.liked   
        })
    }
    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1 );
        const imageSelection = this.props.item % 2 == 0 ? "https://lh3.googleusercontent.com/ADG-6tA04xKgtxf0V1RB5dJC1NN8K5iLv8WwqNVpBISVvCnTDExWJoo2KmoVJJBd489cp4rzW7atO4hXBFfTvraHRg" : "https://lh3.googleusercontent.com/txKRqRMU6h6-0X_W4XLVDFgfDBQotGazb6_ZMqgJJuNN9udYinVTTrPO4BGrMlNYq_yQGY3tJK2x_X_dpcZeq_H9";

        const dog = imageSelection + "=s" + imageHeight + "-c";

        const profile = "https://lh3.googleusercontent.com/SsVhsXyX_XHR8j4hYjzSgkTOt6vKXYtn0laBgqlt8wOPCeDwm_F8RZg05MTzQFwGlOVlzJRHVyNpRwQIeTIRPYASzw"
        
        const heartIconColor = this.state.liked ? 'rgb(252,61,57)' : null;
        
        return(
            <View>
                {/* View responsavel por renderizar as informações do usuario */}
                <View style={styles.userBar}>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.userPic}
                            source={{ uri: profile}}
                        />
                        <Text style={{ left: 10, color: "black"}}>heyimluk</Text>
                    </View>

                    <View style={{alignItems: "center"}}>
                        <Text style={{ fontSize: 30, color: "black" }}>...</Text>
                    </View>
                
                </View>
                {/* Renderiza a imagem do post com efeito de opacidade ao clicar */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={()=>
                        { this.likeToogled() }
                    }>
                        <Image
                            style={{ width: this.state.screenWidth, height: 400 }}
                            source={{ uri: dog }}
                        />
                </TouchableOpacity>
                {/* Renderiza os botões de interação abaixo do post */}
                <View style={styles.iconBar}>
                    <Image
                        style={[
                            styles.icon,
                            { tintColor: heartIconColor }
                        ]}
                        source={config.images.heartIcon}
                    />
                    <Image style={styles.icon} source={config.images.bubbleIcon}/>
                    <Image style={styles.icon} source={config.images.arrowIcon}/>
                </View>
                {/* Renderiza o contador de likes */}
                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { width: 20, height: 20 }]}
                        source={config.images.heartIcon}
                    />
                    <Text>128 Likes</Text>
                </View>
            </View>
        );
    }
}

// Todo estilo do app é declarado a baixo
const styles = StyleSheet.create({
    tempNav: {
        width:100 + "%",
        height: 45,
        backgroundColor: "rgb(245,245,245)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
        
    },

    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        width:40,
        height:40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: "100%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },

    icon:{
        width: 30,
        height: 30,
        marginLeft: 15
    }

});

export default Post;