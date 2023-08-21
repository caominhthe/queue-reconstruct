import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import {
  Button, // @demo remove-current-line
  Text,
  TextField,
} from "../../components"
import { isRTL } from "../../i18n"
import { AppStackScreenProps } from "../../navigators" // @demo remove-current-line
import { colors, spacing } from "../../theme"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { reconstructQueue } from "./solution"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
  _props, // @demo remove-current-line
) {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  const run = () => {
    try {
      const people = JSON.parse(input)
      setResult(JSON.stringify(reconstructQueue(people)))
    } catch (e) {
      setResult("Invalid input")
    }
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text
          testID="welcome-heading"
          style={$welcomeHeading}
          tx="welcomeScreen.readyForLaunch"
          preset="heading"
        />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <TextField
          value={input}
          onChangeText={setInput}
          containerStyle={$textField}
          autoCorrect={false}
          label="Input"
          placeholder="Input people array"
        />
        <Text text="Result:" preset="subheading" />
        <Text style={$textField} text={result} preset="default" />
        <Button testID="next-screen-button" preset="reversed" text="Run" onPress={run} />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexBasis: "25%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexGrow: 1,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
}
const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}
