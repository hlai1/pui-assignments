import React, { useState, useEffect } from 'react';
import './App.css';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
}


const rollList = (props) => {
    const [rollList, setrollList] = useLocalStorage("rollList", [
      {name: "All", color: "black"}
    ]);
    const [newCategory, setNewCategory] = useState("");
    const [isAddingNew, setAddingNew] = useState(false);
    const filterButtonHandler = props.filterButtonHandler;
  
    const addNewCategory = () => {
      if (newCategory.length > 0) {
        let newCategoryItem = {
          name: newCategory,
          color: colorList[(rollList.length - 1) % 5],
        }
        setrollList([...rollList, newCategoryItem]);
      }
  
      // Close the new category input and reset the value
      setAddingNew(!isAddingNew);
      setNewCategory("");
    }
  
    const handleCategoryChange = (event) => {
      setNewCategory(event.target.value);
    }
  
    return (
      <div>
        <p>Show Category:</p>
        {rollList.map(
          (category, idx) => {
            return <button key={idx} style={{...categoryButtonStyle, backgroundColor: category.color}} 
            onClick={() => {filterButtonHandler(category.name)}}>{category.name}</button>
          }
        )}
        
        <div><button style={{...categoryButtonStyle, backgroundColor: "#212121"}} onClick={addNewCategory}>+ Add</button></div>
        {isAddingNew && <form>
          <input placeholder="New Category"
            name="dummy" maxLength="10" onChange={handleCategoryChange} value={newCategory}>
          </input>
        </form>}
      </div>
    );
  
  }
  
  export default rollList;