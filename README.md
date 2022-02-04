# SoftwareDesign
Software Engineering Group Project Spring 2022

### Contributors:
  Luke Ryktarsyk,
  Duong Nguyen,
  Stephanie Younes,
  Stran Dutton,
  Patrick SA

___

## Setup Instructions for contributing
### Clone Repo
Clone the repository your preferred method (eg IDE or directly with `git`)
#### Example
```bash
#From terminal in IDE or local terminal using bash or zsh
#cd into directory to store the git repo
cd school/class/
#Clone the repository in present working directory in a directory called SoftwareDesign
git clone https://github.com/LukeRykta/SoftwareDesign
```

### Install npm packages
While in the git directory (eg school/class/SoftwareDesign), run the following commands.
```bash
#Install express, mongoose, and dotenv
npm install express
npm install mongoose
npm install dotenv

#Setting up React
npm install concurrently --save-dev
npm install nodemon --save-dev

#Install Axios
cd client
npm install axios
cd ..
```

### Testing web app
```bash
#Be sure to be in your git repo directory (eg school/class/SoftwareDesign), run the following
npm run dev
```
The page should open in your default browser.

___

### Insomnia Client Setup for API dev
1. Download the client at <https://insomnia.rest/download>
2. Launch the client
3. Hover over "create" and select "request collection"
  -  Provide a custom name (is arbitrary)
  -  Click Create
  
  
  
  ![pic1](https://user-images.githubusercontent.com/90591648/152615685-96d7fcba-25ab-4b78-9c8d-d7b04a48dfd4.png)
  
4. Click the "+" (plus) icon and select "New Request"
  - Provide a custom name (is arbitrary)
  - Click "Create"

![pic2](https://user-images.githubusercontent.com/90591648/152616088-5396b7bb-108e-46fd-a3df-75765bcb28ea.png)

5.Paste `localhost:5000/api/todos` in the address bar at the top.
  - Click "Body" to get a dropdown and select "JSON"
  - Click "Send" next to the address bar

![pic3](https://user-images.githubusercontent.com/90591648/152616352-69092446-f1e6-4cf9-905f-ff19d3d1ebbd.png)

6. You should now see a preview section populated with relevant information on the right side of the screen.
