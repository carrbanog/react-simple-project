import MenuItem from "./menu-item"


export default function MenuList({list}){
  return(
    <ul className="menu-list-container">
      {
        list && list.length ? 
        list.map((listItem, index) => {
          // console.log(list);
          return(
            <MenuItem item={listItem} key={index} />
          )
        })
        :null
      }
    </ul>
  )
}