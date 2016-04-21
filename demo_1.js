/**
 * Created by wangning on 16/4/21.
 * 类似去哪儿网的格局
 */
import React,{
    Component,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    PixelRatio
} from 'react-native';

class demo_action extends Component{
    render(){
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.item,styles.center]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>
                    <View style={[styles.item,styles.lineLeftRight]}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>
                        <View style={[styles.center,styles.flex]}>
                            <Text style={styles.font}>特惠酒店</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                            <Text style={styles.font}>团购</Text>
                        </View>
                        <View style={[styles.center,styles.flex]}>
                            <Text style={styles.font}>客栈.公寓</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        marginLeft:5,
        marginRight:5,
        height:84,
        backgroundColor:'#FF0067',
        flexDirection:'row',
        padding:2,
        borderRadius:5
    },
    item:{
        flex:1,
        height:80
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    flex:{
        flex:1
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    lineLeftRight:{
        borderLeftWidth:2/PixelRatio.get(),
        borderRightWidth:2/PixelRatio.get(),
        borderColor:'#fff'
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff'
    }
});

AppRegistry.registerComponent('demo_action',() => demo_action);
