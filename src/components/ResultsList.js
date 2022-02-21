import { FlatList, StyleSheet, Text, View } from 'react-native';

const ResultsList = ({title, results}) => {
    return (
    <View>
      <Text style={styles.backgroundStyle}>{title}</Text>
      <Text style={styles.backgroundStyle}>{results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (<Text>{item.name}</Text>);
        }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default ResultsList;