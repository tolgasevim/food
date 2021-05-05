import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = ( price ) => {
    console.log(price);
    return results.filter( result =>
      {
        return result.price === price;
      });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <Text>We have found {filterResultsByPrice('$').length} results</Text>

      <ResultsList title='Low Cost' results={filterResultsByPrice('$')}    />
      <ResultsList title='Medium' results={filterResultsByPrice('$$')}     />
      <ResultsList title='Expensive' results={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
