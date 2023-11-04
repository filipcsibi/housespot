// import React from "react";
// import { View, Text, StyleSheet, Image, Pressable } from "react-native";

// const InfoCard = () => {
//   return (
//     <Pressable
//       style={{
//         height: "100%",
//         width: "100%",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       onPress={() => console.log("InfoCard pressed")}
//     >
//       <View
//         style={{
//           width: "90%",
//           height: "55%",
//           backgroundColor: "white",
//           borderRadius: 10,
//         }}
//       >
//         <Image
//           source={require("../assets/parkare.png")}
//           style={{
//             height: "50%",
//             width: "100%",
//             borderBottomLeftRadius: 10,
//             borderBottomRightRadius: 10,
//           }}
//         ></Image>
//         <View>
//           <Text style={styles.name}>Florin Dumitrache</Text>
//           <Text style={styles.reviewText}>Review: 4.5/5</Text>
//           <Text style={styles.powerText}>Power of Charger: 2r2W</Text>
//           <Text style={styles.priceText}>Price/KWh: $0.8</Text>
//         </View>
//       </View>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "rgba(0, 0, 0, 0.5)",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   roundedBox: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     width: 350,
//     height: 350,
//   },
//   name: {
//     paddingLeft: 10,
//     fontSize: 30,
//     margin: 10,
//     fontWeight: "bold",
//   },
//   reviewText: {
//     paddingLeft: 10,
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   powerText: {
//     paddingLeft: 10,
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   priceText: {
//     paddingLeft: 10,
//     paddingBottom: 10,
//     fontSize: 16,
//   },
// });

// export default InfoCard;
