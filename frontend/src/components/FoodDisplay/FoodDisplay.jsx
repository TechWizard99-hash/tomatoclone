import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
    const filteredList = food_list.filter(
      (item) => category === "All" || category === item.category
    )
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {filteredList.length === 0 ? (
              <p className="no-items-msg">
                {food_list.length === 0
                  ? "No dishes added yet. Add items from the Admin panel."
                  : `No dishes in "${category}". Add "${category}" items from the Admin panel.`}
              </p>
            ) : (
              filteredList.map((item, index) => (
                <FoodItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))
            )}
        </div>
    </div>
  )
}

export default FoodDisplay