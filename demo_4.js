var React = require('react-native');
var {StyleSheet,Text,AppRegistry,View,TextInput} = React;
var onePt = 1/React.PixelRatio.get();
var Search = React.createClass({
    getInitialState:function () {
        return {
            show:false
        }
    },
    getValue:function (value) {
        var text = value;
        this.setState({
            show:true,
            value:text
        })
    },
    hide:function (value) {
        this.setState({
            show:false,
            value:value
        })
    },
    render:function () {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',height:45}}>
                    <View style={{flex:1}}>
                        <TextInput
                            returnKeyType="search"
                            style={{height:45,borderWidth:1,marginLeft:5,paddingLeft:5,borderRadius:5,borderColor:'#ccc'}}
                            placeholder="请输入关键字"
                            onEndEditing={this.hide.bind(this,this.state.value)}
                            onChangeText={this.getValue}
                            value={this.state.value}
                        ></TextInput>
                    </View>
                    <View style={{width:45,justifyContent:'center',alignItems:'center',height:45,backgroundColor:'#23BEFF',marginRight:10,marginLeft:-10}}>
                        <Text onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
                    </View>
                </View>
                {this.state.show?
                    <View style={{marginTop:onePt,marginLeft:5,marginRight:5,height:200,borderTopWidth:onePt,borderColor:'#ccc'}}>
                        <Text style={{fontSize:16,padding:5,paddingTop:10,paddingBottom:10,borderWidth:onePt,borderColor:'#ddd'}} onPress={this.hide.bind(this,this.state.value+'嗯那')} numberOfLines={1} numberOfLines={1}>{this.state.value}嗯那</Text>
                        <Text style={{fontSize:16,padding:5,paddingTop:10,paddingBottom:10,borderWidth:onePt,borderColor:'#ddd'}} onPress={this.hide.bind(this,this.state.value+'哈哈')} numberOfLines={1} numberOfLines={1}>{this.state.value}哈哈</Text>
                        <Text style={{fontSize:16,padding:5,paddingTop:10,paddingBottom:10,borderWidth:onePt,borderColor:'#ddd'}} onPress={this.hide.bind(this,this.state.value+'啦啦')} numberOfLines={1} numberOfLines={1}>{this.state.value}啦啦</Text>
                    </View>
                    : null
                }
            </View>
        )
    }
});

var demo_action = React.createClass({
    render:function () {
        return (
            <View style={[styles.flex,styles.topStatus]}>
                <Search></Search>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    flex:{
        flex:1
    },
    flexDirection:{
        flexDirection:'row'
    },
    topStatus:{
        marginTop:25
    },
    input:{
        height:45,
        borderWidth:1,
        marginLeft:5,
        paddingLeft:5,
        borderColor:'#ccc',
        borderRadius:4
    },
    btn:{
        width:55,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent:'center',
        alignItems:'center'
    },
    search:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    }
});

AppRegistry.registerComponent('demo_action',() => demo_action);/**
 * Created by wangning on 16/4/22.
 */
