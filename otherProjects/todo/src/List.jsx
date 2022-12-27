import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
function List({items,removeItem,editItem}) {
  return (
    <div className='todoList'>
        {items.map((item)=>{
            const {id,title}=item
            return(
                <article key={id} className='todoItem'>
                    <p className='title'>{title}</p>
                    <div className="btnContainer">
                    <button className='editBtn' onClick={() =>editItem(id)}><FaEdit/></button>
                    <button className='deleteBtn' onClick={() =>removeItem(id)}><FaTrash/></button>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List
