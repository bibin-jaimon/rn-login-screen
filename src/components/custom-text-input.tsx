import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputFieldPropType {
  value: any;
  onChange: any;
  placeholder: any;
  secureTextEntry?: boolean;
  rightButton?: any;
  error?: any;
}

const InputField = ({
  value,
  onChange,
  placeholder,
  secureTextEntry = false,
  rightButton,
  error,
}: InputFieldPropType) => {
  return (
    <>
      <View style={styles.topView}>
        <Text style={styles.leftLabel}>{placeholder}</Text>
        {rightButton && rightButton}
      </View>
      <TextInput
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChange}
      />
      <Text style={{ color: 'red', marginBottom: 16 }}>{error}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export { InputField };
