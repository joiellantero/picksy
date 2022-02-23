# Name Roulette Web

Name Roulette Web is an open-source webapp version of [Name Roulette](https://github.com/joiellantero/name-roulette).

[![Visit - webapp](https://img.shields.io/badge/Visit-webapp-2ea44f?style=for-the-badge&logo=vercel)](https://nameroulette.vercel.app)

## Features

1. The webapp runs on the client side. Once it loads, there's really no need for any internet connection.

2. State Persistence
   1. I used `recoil` as the state management library for this project and shown below are the states that is saved in the local storage.
      1. Theme (light or dark mode)
      2. Settings Side Bar (if pinned or not)
      3. Names list
      4. Winner prompt message
      5. Remove name toggle

3. File Upload
   1. Accept one .txt or .csv file at a time.
      > There is an existing Chromium bug but, I added a temporary solution until the bug is fixed. You may view my solution [here.](#miscellaneous)
   2. The files uploaded are not uploaded to a database. The contents of the files are only read.
      > Take note that the contents read will be saved to the names list and it is one of the states saved to your local storage.
   
## Getting Started

### Host your own

1. Vercel
2. Netlify
3. Heroku

### Local Deployment

1. Clone the repository or download the latest release
   
   ```shell
   git clone https://github.com/joiellantero/name-roulette-web.git
   ```

3. Install the dependencies

   ```shell
   npm install
   ```

4. Deploy the webapp locally

   ```shell
   npm run dev
   ```

### Customization

1. Changing the theme colors of the webapp is done in the `tailwind.config.js` file. 
2. Simply update the hex values of the colors to change the theme colors.
3. For more information regarding tailwind css, visit this [link](https://tailwindcss.com/docs/theme#header).

## Miscellaneous

1. [MacOS Chromium Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=646941)
   1. The file upload should only allow .txt and .csv files but, MacOS Chromium browsers consider .txt like text/*. Thus, .py, .php, .js files and the like also become accepted filetypes. Here's another [reference](https://stackoverflow.com/questions/39508849/accept-attribute-for-inputtype-file-allows-other-extensions) to the bug.
   2. Current Solution:
      1. In the meantime, what I did was check the file extension again in my `handleUpload` function and added error handling for invalid file types.
        
          ```javascript
          const handleUpload = async (e) => {
            e.preventDefault();
            let file = e.target.files[0];
            let allowedExtensions = /(\.csv|\.txt)$/i;
            if (file){
              if (allowedExtensions.exec(file.name)){
                let reader = new FileReader();
                reader.onload = async (e) => {
                  let content = e.target.result;
                  props.onUpload(content);
                }
                reader.readAsText(file);
              } else {
                alert("Only plain text (.txt) and comma-separated-value (.csv) files are allowed.");
              }
            }
          }
          ```

## Author

- Joie Llantero

## Contributors

- All contributions are welcome!

## Support Me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W5AOIF9)

## License
