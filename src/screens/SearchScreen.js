import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('ramen')
  const [searchApi, results, errorMessage] = useResults();

    return (
    <View>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={()=>searchApi(term)}
          />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;