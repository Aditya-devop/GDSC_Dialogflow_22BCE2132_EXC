# GDSC_Dialogflow_22BCE2132_EXC
This is GDSC VIT Vellore EXC project made by Aditya Shriwal (22BCE2132) during the course that solves the problem of ordering food contactless using Google Dialogflow for personalized website instead of depending on third party delivery apps

![Screenshot 2024-11-16 200635](https://github.com/user-attachments/assets/103de0a8-22e3-439c-b945-491b92642687)
![Screenshot 2024-11-16 200715](https://github.com/user-attachments/assets/df982970-12fc-484a-83d2-46904dff352b)
![{CCC907E1-53F3-47F4-B0F5-27B67AA41F59}](https://github.com/user-attachments/assets/3780f154-b6e0-46ce-b77e-f51998d4cc34)

![Screenshot 2024-11-16 200726](https://github.com/user-attachments/assets/fd088723-630f-4834-a2a0-885a9e3aa090)
![Screenshot 2024-11-16 200737](https://github.com/user-attachments/assets/c7192bbf-3116-405e-9f39-dbe338fe5a55)
![Screenshot 2024-11-16 231001](https://github.com/user-attachments/assets/16d246c0-ed0b-45c1-8e48-c15b611c56b4)


Directory structure
===================
backend: Contains Python FastAPI backend code
db: contains the dump of the database. you need to import this into your MySQL db by using MySQL workbench tool
dialogflow_assets: this has training phrases etc. for our intents
frontend: website code

Install these modules for backend
==================================

pip install mysql-connector
pip install "fastapi[all]"

OR just run pip install -r backend/requirements.txt to install both in one shot

To start fastapi backend server
================================
1. Go to backend directory in your command prompt or vs code terminal
2. Run this command: uvicorn main:app --reload
![Screenshot 2024-11-16 222816](https://github.com/user-attachments/assets/180ff08c-1d81-4dd8-9bf1-e29e593cc919)

ngrok for https tunneling
================================
1. To install ngrok, go to https://ngrok.com/download and install ngrok version that is suitable for your OS
2. Extract the zip file and place ngrok.exe in a folder.
3. Run the following command to add your authtoken in terminal--> ngrok config add-authtoken <token>
4. Open windows command prompt or in the vs code terminal, go to that folder and run this command: ngrok http 8000
![Screenshot 2024-11-16 223027](https://github.com/user-attachments/assets/280d5ef0-c398-4b50-984b-6db7d43d450b)


This is tunnneling so that our local host http is forwarded to https which is secured by tunneling.
Now this https url can used for our Google dialogflow fulfillment webhook url
Link to my Exdine dialogflow chatbot -> https://dialogflow.cloud.google.com/#/agent/exdine-chatbot-for-food-d-mlfx/fulfillment
I have given access to "gdg@vit.ac.in" as a developer so that they can change webhook url to hit the responses of queries from backend
![Screenshot 2024-11-16 223304](https://github.com/user-attachments/assets/0ffdc403-9f00-44d5-a7ce-37d42e2a8a79)

NOTE: ngrok can timeout. you need to restart the session if you see session expired message.

Now the Google Chatbot is ready to use. You can add new orders and track it.
![Screenshot 2024-11-16 225723](https://github.com/user-attachments/assets/45f76703-7740-435b-82a9-73c386693c68)

The database Schema is:
1. Food Items:
![Screenshot 2024-11-16 200026](https://github.com/user-attachments/assets/9b34ca66-0bd2-49c0-8589-872eb8fb9c15)

2. Orders:

![Screenshot 2024-11-16 200043](https://github.com/user-attachments/assets/542cf998-faca-4419-aadc-c15663781cec)

3. Order_tracking:

![Screenshot 2024-11-16 200037](https://github.com/user-attachments/assets/63788fd4-55c2-4044-870d-48122b4dabcd)


