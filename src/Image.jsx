import './Image.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Image({imageURL, author}){
    const [count, setCount] = useState(0);
    return (
        <div className="Image">
            <img className='imgTag' src={imageURL} alt=""/>
            <span className='author'>  {author}</span>
            <span style={{float:"right", marginRight:"10px"}}>
                <Button
                    onClick={() => {
                    setCount( (count) => count+1 )
                    }}
                >
                    {count}<FavoriteIcon sx={{color:'#e5383b',margin:"3px"}}/>
                </Button>
            </span>

        </div>
    );
}
