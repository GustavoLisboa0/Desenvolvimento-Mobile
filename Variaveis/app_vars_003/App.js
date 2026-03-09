import React from "react";
import { View, Text, ScrollView } from "react-native";

function App() {
  const COLORS = {
    primaryBlue: "#003366",
    accentGreen: "#00D2A1",
    bgWhite: "#FFFFFF",
    softGray: "#7B8DBE",
    warningRed: "#FF3B30",
    videoOrange: "#FF9900"
  };

  var headerPadding = 20;
  var cardRadius = 30;
  
  var sectionContainer = {
    backgroundColor: COLORS.bgWhite,
    flex: 1,
    padding: 25,
    borderTopLeftRadius: cardRadius,
    borderTopRightRadius: cardRadius,
  };

  var progressBarStyle = {
    backgroundColor: COLORS.softGray,
    height: 12,
    width: "100%",
    marginTop: 25,
    borderRadius: 10,
    overflow: 'hidden'
  };

  let titleText = "Project 0023R";
  let description = "Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.";
  let progressPercent = "70%";
  let donationOptions = [
    { amount: "$100", label: "Lorem ipsum dolor" },
    { amount: "$50", label: "Lorem ipsum dolor" },
    { amount: "$20", label: "Lorem ipsum dolor" },
    { amount: "$10", label: "Lorem ipsum dolor" }
  ];

  return (
    <View style={{ backgroundColor: COLORS.primaryBlue, flex: 1, paddingTop: 40 }}>
      
      {/* Header  */}
      <View style={{ paddingHorizontal: headerPadding, paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)", height: 40, width: 40 }} />
          <View style={{ height: 30, width: 30 }}>
             <Text style={{ fontSize: 20 }}>🔔</Text>
             <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: COLORS.warningRed, borderRadius: 10, width: 14, height: 14 }} />
          </View>
        </View>
        <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>{"<  "} Technology</Text>
      </View>

      {/* Yellow Section */}
      <View style={{ backgroundColor: COLORS.videoOrange, height: 200, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'rgba(255,255,255,0.4)', height: 70, width: 70, borderRadius: 35 }} />
      </View>

      {/* Content Section */}
      <View style={sectionContainer}>
        <Text style={{ color: COLORS.softGray, fontSize: 22, fontWeight: "bold" }}>{titleText}</Text>
        <Text style={{ color: "gray", marginTop: 10 }}>{description}</Text>

        {/* Progress Bar */}
        <View style={progressBarStyle}>
          <View style={{ backgroundColor: COLORS.accentGreen, width: progressPercent, height: "100%" }} />
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
          <Text style={{ color: COLORS.softGray }}>$0</Text>
          <Text style={{ color: COLORS.softGray }}>$110,000</Text>
        </View>

        {/* Panels Section */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20 }}>
          {donationOptions.map((item, index) => (
            <View key={index} style={{ width: '45%', marginBottom: 15, alignItems: 'center' }}>
              <View style={{ backgroundColor: COLORS.accentGreen, width: '100%', padding: 15, borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>{item.amount}</Text>
              </View>
              <Text style={{ color: "gray", fontSize: 10, marginTop: 4 }}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default App;