// Importing code//////////////////////////
// npm package under this//////////////////
var formatTime = require ('minutes-seconds-milliseconds')
var React = require ('react-native');
var {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
} = React;




// Create component////////////////////////
var StopWatch = React.createClass({
    getInitialState: function () {
        return {
            timeElapsed: null
        }
    },
    render: function() {
        
        return <View style = {styles.container}>
            <View style = {[styles.header, this.border('yellow')]}> 
                <View style = {[styles.timerWrapper, this.border('red')]}> 
                     <Text style= {styles.timer}>
                        {formatTime(this.state.timeElapsed)}
                    </Text>
                </View>
                <View style = {[styles.buttonWrapper, this.border('green')]}> 
                    {this.startStopButton()}
                    {this.lapButtom()} 
                </View>
            </View>
                
                
                
            <View style = {[styles.footer, this.border ('blue')]}> 
                <Text>
                    I am a list of Laps
                </Text>    
            </View>                 
        </View>
    },
    
    
    startStopButton: function () {
        return <TouchableHighlight 
            underlayColor= "gray"
            onPress= {this.handleStartPress}
            style= {[styles.startButton, styles.button]}
        >
            <Text>
                Start
            </Text>
        </TouchableHighlight>
    },
    
    lapButtom: function () {
        return <View style= {styles.button}>
            <Text>
                Lap
            </Text>
        </View>
    },
    
    handleStartPress: function () {
        var startTime= new Date();

        
        setInterval (() => { 
            this.setState({
                timeElapsed: new Date() - startTime
            });
        }, 30);
        
        
    },
    
    border: function (color) {
        return {
            borderColor: color,
            borderWidth: 4
        }
    }
});





// Style component///////////////////////
var styles = StyleSheet.create({
    
    container: {
        flex: 1, // fills entire screen
        alignItems: 'stretch'
    },
    
    header: {  // Yellow
        flex: 1 
    },
    
    footer: {  // Blue
        flex: 1
    },
    
    timerWrapper: { // Red
        flex: 5, // takes up 5/8 of space
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    buttonWrapper: { // Green
        flex: 3, // takes up 3/8 of space
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    
    timer: {
        fontSize: 50
    },
    
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    startButton: {
        borderColor: '#00CC00'
    }
});





// Show component ES2015 Syntax//////////
AppRegistry.registerComponent('stopwatch', () => StopWatch);