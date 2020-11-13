import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <!-- Include the CesiumJS JavaScript and CSS files -->
  <script src="https://cesium.com/downloads/cesiumjs/releases/1.75/Build/Cesium/Cesium.js"></script>
  <link href="https://cesium.com/downloads/cesiumjs/releases/1.75/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
  <style type="text/css">
    html,body {
      margin:0px;
      height:100%;
      overflow:hidden;
    }
    /* -32px for the console bar that JSFiddle adds. */
    #cesiumContainer {
      height:calc(100%);
    }
  </style>
</head>
<body>
  <div id="cesiumContainer"></div>
</body>
</html>
`;
const Onboarding = () => {
  return (
    // <View style={{ flex: 1, backgroundColor: "cyan" }}>
    //   <Text></Text>
    // </View>
    <View style={{ flex: 1 }}>
      <WebView
        source={{ html: HTML }}
        //style={{ marginTop: 20 }}
        // source={{
        //   uri:
        //     "https://birchlabs.co.uk/linguabrowse/infopages/obsol/rnw_iframe_test.html",
        // }}
        automaticallyAdjustContentInsets={false}
        /* Must be populated in order for `messagingEnabled` to be `true` to activate the
         * JS injection user scripts, consistent with current behaviour. This is undesirable,
         * so needs addressing in a follow-up PR. */
        /* We read the colourToUse property in each frame to recolour each frame */
        injectedJavaScript={`
            Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjUzNWU4My1hOTgxLTRhMmItOGYwMS0wYjJiM2UxZTkwNjEiLCJpZCI6Mzc2MDMsImlhdCI6MTYwNTI0NzcxOX0.8RI2WSoRueoV5lwitkLTkV22wpywHCTxV6MLX_UXQio';
            const viewer = new Cesium.Viewer('cesiumContainer');    

              `}
      />
    </View>
  );
};

export default Onboarding;
