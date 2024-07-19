import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

type DisplayProps = {
    calculatorInput: number
}

const Display = (props: DisplayProps) => {
  return (
    <View style={styles.display}>
      <Text>{props.calculatorInput}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    display: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingRight: 20
    }
  });

export default Display