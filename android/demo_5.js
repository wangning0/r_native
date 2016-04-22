/**
 * Created by wangning on 16/4/22.
 */
var React = require('react-native');
var {StyleSheet,AppRegistry,Text,View,Image,TouchableOpacity} = React;
var images = [
    'http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg'
];
var MyImage = React.createClass({
    getInitialState:function () {
        var imgs = this.props.imgs;
        return {
            imgs:imgs,
            count:0
        }
    },
    goNext:function () {
        var count = this.state.count;
        count++;
        if( count < images.length ){
            this.setState({
                count:count
            })
        }
    },
    goPreviw:function () {
        var count = this.state.count;
        count--;
        if( count >= 0 ){
            this.setState({
                count:count
            })
        }
    },
    render:function () {
        return (
            <View style={[styles.flex]}>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={{uri:this.state.imgs[this.state.count]}}
                        resizeMode="contain"
                    ></Image>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreviw}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
});
var demo_action = React.createClass({
    render:function () {
        return (
            <View style={[styles.flex,{marginTop:40}]}>
                <MyImage imgs={images}></MyImage>
            </View>
        )
    }
});
var styles = StyleSheet.create({
    flex:{
        flex:1,
        alignItems:"center"
    },
    image:{
        borderWidth:1,
        width:300,
        height:200,
        borderRadius:5,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:150,
        width:200
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    btn:{
        width:60,
        height:30,
        borderColor:'#0089FF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20
    }
});

AppRegistry.registerComponent('demo_action',() => demo_action);