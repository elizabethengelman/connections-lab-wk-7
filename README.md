# Arboreal Neighbors Serverside

## Get started

- `npm install`
- `npm start`
- navigate to [http://localhost:3000/](http://localhost:3000/)

## Notes
When I first tried to submit an image file, it was 15.3 MB and I ran into an issue on the server where the app ran out of memory. When I resized the image to about 1 MB and tried to again, I worked. I may do some more digging into why this is happening. Though it makes sense that uploading a larger image into memory would be more of a strain on the server, I'm not sure why a 15 MB image would cause the server to exceed the 512 MB available memory.
## Resources

- uploading a file: https://attacomsian.com/blog/uploading-files-nodejs-express
- https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript
- https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_showing_thumbnails_of_user-selected_images
- https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader
  - I ended up not going with this approach, because the next tutorial I found on digital ocean's blog seemed to be a bit easier. But, if I want to try this route, I think it would mean handling the file contents on the client side. The FileReader docs say that you can web workers. I'm not sure if that's necessary since I can push that to the backend, but it may be fun to try that out since I don't have much familiarity with web workers.
- https://www.digitalocean.com/community/tutorials/js-file-reader
  - This blog mentions using FormData which allows you to append things to a FormData object which can be submitted straight to fetch!
  - This article also seems to show how to handle a file client-side. I wonder what the benefit is of doing this client-side vs server-side? Maybe it allows you do make the changes to the page, after the upload is complete, without a re-render.
- https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
