#sudo apt-get install python3-pip
#sudo pip3 install virtualenv 
#virtualenv venv 
#deactivate



cd /home/mostafa/Documents/chatbot
source  chatbot_env/bin/activate
cd chatbot
python3 ./predict_e.py -e 1000  -cs amazon -m "$@"