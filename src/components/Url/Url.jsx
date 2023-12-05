import React, {useState} from 'react';
import './Url.css'

const Url = () => {

    const [urlValue, setUrlValue] = useState('');

    const handleUrl = (event) => {
        setUrlValue(event.target.value);
    }

  return (
    <div className='urlContainer'>
      <div className="urlFormWrapper">
          <form action="">
            <label htmlFor="url">
                <input type="text" id='url' name='url' placeholder='Shorten a link here...' onChange={handleUrl}/>
            </label>
            <div className="urlBtn">
                <button type='submit'>Shorten It!</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Url
