const Item = (props) =>{

    return(
        <>
        <label htmlFor='fruit-filter'>Filter these fruits</label>
        <input type="text" name="" id="fruit-filter" value={props.value} onChange={props.onChange} />
        </>
    )
}
export default Item