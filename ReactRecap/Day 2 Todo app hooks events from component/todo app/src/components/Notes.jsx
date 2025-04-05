import React from 'react';

const Notes = ({ data = [] }) => {
  return (
    <div className='show-notes'>
      {
        data.length === 0 ? (
          <p>No Data found</p>
        ) : (
          <ul>
            {
              data.map((item, index) => (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p><strong>Description :</strong> {item.description}</p>
                  <p><strong>Content :</strong> {item.content}</p>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
};

export default Notes;
