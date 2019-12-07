# How to install virtualenv:

### Install **pip** first

    sudo apt-get install python3-pip

### Then install **virtualenv** using pip3

    sudo pip3 install virtualenv 

### Now create a virtual environment 

    virtualenv venv 

>you can use any name insted of **venv**

### Active your virtual environment:    
    
    source venv/bin/activate


## [AppleSupport](https://twitter.com/AppleSupport)
![Apple](conversations/apple.png)
## [AmazonHelp](https://twitter.com/AmazonHelp)
![Amazon](conversations/amazon.png)
## [Uber_Support](https://twitter.com/Uber_Support)
![Uber](conversations/uber.png)
## [Delta](https://twitter.com/Delta)
![Delta](conversations/delta.png)
## [SpotifyCares](https://twitter.com/SpotifyCares)
![Spotify](conversations/spotify.png)

## Installation 
```bash
pip3 install -r requirements.txt
python3 -m spacy download en
```

```

## Pre-trained models
Run following commands in root of this repository to download pre-trained customer service chatbots.

```bash
wget https://www.dropbox.com/s/ibm49gx1gefpqju/pretrained-models.zip
unzip pretrained-models.zip
rm pretrained-models.zip
sudo chmod +x predict.py
```

Now you can "talk" with customer service chatbots using `predict.py` script. Following customer service chatbots are 
available: `apple,amazon,uber,delta,spotify`. Following example shows how to run `apple` customer service chatbot:
```bash
./predict.py -cs apple
```
