/**
 * Created by wangning on 16/4/21.
 */
import React,{Component,AppRegistry,Text,View,StyleSheet,PixelRatio} from 'react-native';

class List extends Component {
    render(){
        return(
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    list_item:{
        height:40,
        marginLeft:20,
        marginRight:20,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    },
    list_item_font:{
        fontSize:16
    }
})
export default List;