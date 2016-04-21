/**
 * Created by wangning on 16/4/21.
 */
import React,{
    Component,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    PixelRatio
} from 'react-native';
import Header from './header';
import List from './list';
import ImportantNews from './importantNews';

class demo_action extends Component{
    render(){
        return (
            <View style={styles.flex}>
                <Header></Header>
                <List title='香港旅游业遭"倒春寒" 导游做保安挣外快'></List>
                <List title='桂林餐馆现5000元"天价鱼" 官方:已查封'></List>
                <List title='3米长巨鳄上演骇人"鳄吃鳄"'></List>
                <ImportantNews news={['哈哈哈','啦啦啦','桂林餐馆现5000元桂林餐馆现桂林餐馆现5000元桂林餐馆现5000元5000元桂林餐馆现5000元桂林餐馆现5000元桂林餐馆现5000元']}></ImportantNews>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    }
});

AppRegistry.registerComponent('demo_action',() => demo_action);
