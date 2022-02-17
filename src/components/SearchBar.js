import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
    );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 12,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;