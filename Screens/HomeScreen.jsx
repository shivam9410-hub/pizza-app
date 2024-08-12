import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PizzaCard from '../components/PizzaCard';
import { PizzaArray } from '../localization/Pizza';
import { Search } from '../utils/Search';

const HomeScreen = ({ navigation }) => {
  const [pizzaArr, setPizzaArr] = useState(PizzaArray);
  const [filterPizza, setFilterPizza] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [filterPizzaArr, setFilterPizzaArr] = useState([]);

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(), delay);
    };
  };

  // Handle input change
  const handleFilterPizza = useCallback((e) => {

     let text= e.target.value;
    if (e === '') {
      setIsFilter(false);
      setFilterPizzaArr(pizzaArr);
      return;
    }
    
    setIsFilter(true);
    setFilterPizza(text);
    setFilterPizzaArr(Search(pizzaArr, text));
  }, [pizzaArr]);

  const debouncedHandleFilterPizza = (e)=>{debounce(handleFilterPizza(e), 1000);}

  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput
        placeholder="Search your pizza..."
        style={styles.searchBar}
        value={filterPizza}
        onChange={(e)=>{debouncedHandleFilterPizza(e)}}
      />
      <ScrollView contentContainerStyle={styles.weeklyFavourite}>
        {isFilter ? filterPizzaArr.map((pizza) => (
          <PizzaCard key={pizza.id} imgUrl={pizza.imgUrl} name={pizza.Name} />
        )) : pizzaArr.map((pizza) => (
          <PizzaCard key={pizza.id} imgUrl={pizza.imgUrl} name={pizza.Name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchBar: {
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
  },
  weeklyFavourite: {
    backgroundColor: 'red',
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default HomeScreen;
