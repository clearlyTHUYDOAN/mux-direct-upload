import React from 'react';
import axios from 'axios';
import * as UpChunk from '@mux/upchunk';
import './Button.css';

function Button() {
  return (
    <div className="button-container">
      <h1>File upload button</h1>
      <label htmlFor="file-upload">Select a video file:</label>

        <input type="file"
              id="file-upload" name="file-upload"/ >
    </div>
  );
}

export default Button;
