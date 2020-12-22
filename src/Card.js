import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='outer'>
      <div className='inner'>
        <h3
          contentEditable='true' 
          data-placeholder='Title comes here'
          suppressContentEditableWarning={true}>{data.title}
        </h3>
        <div 
          contentEditable='true' 
          data-placeholder='Subtitle comes here' 
          className='subtitle'
          suppressContentEditableWarning={true}>{data.subtitle}
        </div>

        <div className='line'></div>

        <div className='content'>Contrary to popular belief, 
          Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin 
          literature from 45 BC, making it over 2000 years old. </div>

        <div className='line'></div>

        <div 
          contentEditable='true' 
          data-placeholder='Footer comes here' 
          className='footer'
          suppressContentEditableWarning={true}>{data.footer}
        </div>
      </div>
    </div>
  )
}

export default Card;
