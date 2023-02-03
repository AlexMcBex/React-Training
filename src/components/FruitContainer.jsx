import { useState } from "react";
import Item from './Item'
import List from './List'

const FruitContainer = (props) =>{
    const [filter, setFilter] = useState('')
    const [fruitToDisplay, setFruit] = useState(props.fruit)

    const handleFilterChange = (e) =>{
        e.preventDefault()
       setFilter(e.target.value)
       let filterValue = e.target.value
        const filteredFruitList = props.fruit.filter(fruit =>{
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        setFruit(filteredFruitList, filterValue)
        // console.log(filterValue)
    }

    return (
        <>
        <Item value={filter} onChange={handleFilterChange}/>
        <List fruits={fruitToDisplay}/>
        </>
    )
}

export default FruitContainer