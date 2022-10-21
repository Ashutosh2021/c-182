import react from 'react';
import { Image, View } from 'react-native';

const Filter1=({
    face:{
        bounds:{
            size:{width:faceWidth , height:faceHeight}
        },
        leftEyePosition,
        rightEyePosition
    }
})=>{

    var glassesWidth = faceWidth
    var glassesHeight = faceHeight/3

    const transformAngle=(
        angleRad = Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x))
        ) => angleRad*180/Math.PI

    return(
        <View style={{
            position:"absolute",
            left:leftEyePosition.x-0.675*glassesWidth,
            top:leftEyePosition.y-0.5*glassesHeight,
        }}>
            <Image source={require("../assets/glasses.png")} style={
                {
                    width:glassesWidth,
                    height:glassesHeight,
                    resizeMode:"contain",
                    transform:[{rotate:`${transformAngle()}deg`}]
                }
            }/>
        </View>
    )
}



export default Filter1