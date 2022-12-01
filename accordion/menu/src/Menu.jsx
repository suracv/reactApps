import React from 'react'

const Menu = ({items}) => {
  return (
    <div>
      {items.map((menuItem =>{
        const {id,title, img,desc}=menuItem;
        return(
            <div key={id} className='menuItem'>
                <img src={img} alt={title} className='menuImage'/>
                <div className='menuItemHeader'>
                    <h4>{title}</h4>
                    <h5>{desc}</h5>
                </div>
            </div>
        )
      }))}
    </div>
  )
}

export default Menu
