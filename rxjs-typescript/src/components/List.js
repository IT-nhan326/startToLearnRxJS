
const List = props =>{
    const itemList = props.items.map(item=>(
        <li>{item}</li>
    ))


    return itemList
}

export default List