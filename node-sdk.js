const Mux = require('@mux/mux-node');
const fs = require('fs')
const fetch = require('node-fetch');

const { createWriteStream } = require('fs');
const { createReadStream } = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');

const dotenv = require('dotenv');
dotenv.config();

const { Video, Data } = new Mux(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);
const muxClient = new Mux();

// Create an asset
(async () => {
  try {
      // This works even with using require so I don't believe the true friction is from using require instead of import
      const upload = await Video.Uploads.create({
        new_asset_settings: { playback_policy: 'public' },
      });

      console.log('upload', upload);

      // This 200s
      // However, the request example in the docs is outdated so I switched to node-fetch
      const uploadUrlResponse = await fetch(upload.url, { method: 'PUT',  
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify({}), // this might need to be something
        },
       });

      console.log('uploadUrlResponse', uploadUrlResponse);

      // This does not work.
      // The URL you get back from the upload API is resumable, and the file can be uploaded using a `PUT` request (or a series of them).
      await fs.createReadStream('./short-video-example.mov').pipe(uploadUrlResponse);

      // * This sort of works but the video ends up being invalid. based on these docs https://github.com/node-fetch/node-fetch#streams *
      // const streamPipeline = promisify(pipeline);

      // await streamPipeline(upload.url, createWriteStream('short-video-example.mov'));

      // The upload may not be updated immediately, but shortly after the upload is finished you'll get a `video.asset.created` event and the upload will now have a status of `asset_created` and a new `asset_id` key.
      const updatedUpload = await Video.Uploads.get(upload.id);
      
      console.log('updatedUpload', updatedUpload); 

  } catch (error) {
    console.log('There was an error!', error);
  }
})();