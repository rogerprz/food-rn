import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('ramen')
  const [searchApi, results, errorMessage] = useResults();
  
  const filterResultsByPrice = (price)=>{
  return results.filter(result => {
    return result.price === price;
  } 
  );
}
  console.log(results[0]);
  return (
    <View>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={()=>searchApi(term)}
          />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title='Cost Effective' results={filterResultsByPrice('$')}/>
      <ResultsList title='Bit Pricier'results={filterResultsByPrice('$$')}/>
      <ResultsList title='Big Spender'results={filterResultsByPrice('$$$')}/>

    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;