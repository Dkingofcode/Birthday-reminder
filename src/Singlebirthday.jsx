import React from 'react';

const Singlebirthday = ({ id, name, age, birthday, img, removeBirthday}) => {

  return (
      <article>
        <img src={img} />
         <h2>{name}</h2>
         <h4>{age}</h4>
         <h1>{birthday}</h1>
         <button onClick={removeBirthday(id)}>Remove me</button>
      </article>
  )
}

export default Singlebirthday;