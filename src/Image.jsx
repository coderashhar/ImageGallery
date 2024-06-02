import './Image.css';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Image({imageURL, author}){
    const [liked, setLiked] = useState(false);
    return (
        <div className="Image">
            <img className='imgTag' src={imageURL} alt=""/>
            <p className='author'> - {author}</p>
        </div>
    );
}
