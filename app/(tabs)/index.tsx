import CustomButton from "@/components/buttons/CustomButton";
import Display from "@/components/display/Display";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function BasicScreen() {
  const [display, setDisplay] = useState<number>(0);

  // Calculator inputs are originally strings that need to be converted to numbers
  let stringInputs: string[] = [];

  // String inputs converted to numbers
  let numberInputs: number[] = [];

  let operators: string[] = [];

  const handlePressButton = (title: string) => {
    if (!isNaN(Number(title)) || title === ".") {
      // console.log(Number(title));
      stringInputs.push(title);
    } else if (
      title === "÷" ||
      title === "𝗑" ||
      title === "-" ||
      title === "+"
    ) {
      // Concatenate list
      const concatString = stringInputs.join("");

      // Convert concatString to number and append to numberInputs
      const stringNumber = Number(concatString);
      numberInputs.push(stringNumber);

      operators.push(title);

      stringInputs.length = 0;
    } else if (title === "=" && stringInputs.length !== 0) {
      // Concatenate list
      const concatString = stringInputs.join("");

      // Convert concatString to number and append to numberInputs
      const stringNumber = Number(concatString);
      numberInputs.push(stringNumber);

      // console.log(title);
      const operation = performOperation(numberInputs, operators)
      setDisplay(operation)

      stringInputs.length = 0;
      numberInputs.length = 0;
      operators.length = 0;
    }
    // console.log(stringInputs);
    // console.log(numberInputs);
    // console.log(operators);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display calculatorInput={display}></Display>
      <View style={styles.buttonParentContainer}>
        <View style={styles.buttonChildContainer}>
          <CustomButton
            title={"AC"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"+/-"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"%"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"÷"}
            onPressButton={handlePressButton}
          ></CustomButton>
        </View>
        <View style={styles.buttonChildContainer}>
          <CustomButton
            title={"7"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"8"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"9"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"𝗑"}
            onPressButton={handlePressButton}
          ></CustomButton>
        </View>
        <View style={styles.buttonChildContainer}>
          <CustomButton
            title={"4"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"5"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"6"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"-"}
            onPressButton={handlePressButton}
          ></CustomButton>
        </View>
        <View style={styles.buttonChildContainer}>
          <CustomButton
            title={"1"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"2"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"3"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"+"}
            onPressButton={handlePressButton}
          ></CustomButton>
        </View>
        <View style={styles.buttonChildContainer}>
          <CustomButton
            title={"0"}
            size={"large"}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"."}
            onPressButton={handlePressButton}
          ></CustomButton>
          <CustomButton
            title={"="}
            onPressButton={handlePressButton}
          ></CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 16,
  },
  buttonParentContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  buttonChildContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

const performOperation = (numbers: number[], operators: string[]) => {
  let result = 0;

  operators.forEach(operator => {
    switch (operator) {
      case "+":
        result += numbers.reduce((prev, curr) => prev + curr);
        break;
      case "-":
        result += numbers.reduce((prev, curr) => prev - curr);
        break;
      case "𝗑":
        result += numbers.reduce((prev, curr) => prev * curr);
        break;
      case "÷":
        result += numbers.reduce((prev, curr) => prev / curr);
        break;
      default:
        console.error("Invalid operator");
    }
  })
  return result;
};
