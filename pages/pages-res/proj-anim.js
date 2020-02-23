function turnBackMeow() { 
    document.body.style.opacity="0"; 
    setTimeout( ( function () { 
        window.location.replace("../index.html"); 
        document.getElementById("project-info").style.opacity="1"; 
    } ), 500);
}

function projInfo(s) { 
    document.getElementById("project-info").style.display="inline"; 
    document.getElementById("project-view").zIndex="1"; 
    document.getElementById("project-info").style.zIndex="1"; 
    document.getElementById("project-wrap").style.filter="blur(10px)"; 
    document.getElementById("bg").style.filter="blur(10px)"; 
    if(s === "instacart"){

        document.getElementById("project-view").innerHTML="<img src = './pages-media/inst.gif' height='300px' width='300px'>";

        document.getElementById("project-name").innerHTML="<a href = 'https://github.com/Phankd/INSTACART-MACHINE-LEARNING-CHALLENGE'>A Take on Apriori</a>"; 

        document.getElementById("project-desc").innerHTML="The test involved being tasked to create an optimal predictive model that allowed for the accurate predictions of future shopping time based on quantities and types of produced that were planned on being purchased. A random forest was used."
    }


    else if(s === "kickstarter"){
        
        document.getElementById("project-view").innerHTML="<img src = './pages-media/ml.png' width = 300px style = 'margin-top: 50px'>";

        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/KPhans/Capstone-Project'>An Exemplary Kickstarter</a>"; 

        document.getElementById("project-desc").innerHTML="This project aims to explore the difficulties and hardships in the world of entrepreneurship. Our problem lies: What are the factors that favour success over failure for any Kickstarter and what are the determinants for overfunding. To solve this problem, I will be implementing a few machine techniques after appropriate data cleansing such as logistic regression and KNN regression. Afterwards, we will compare performance measures such as recall and deploy ensemble techniques in order to create one model with the strengths from both the previous models.";
    }


    else if(s === "twitter"){

        document.getElementById("project-view").innerHTML="<img src = './pages-media/nlp.png' width = 300px style = 'margin-top: 50px'>";

        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/Phankd/NLP-AND-SENTIMENT-ANLAYSIS-WITH-TWEETS-CHALLENGE' style='font-size:18pt'>Twitter Fingers</a>"; 

        document.getElementById("project-desc").innerHTML="This small project uses apache pig and spark to perform preliminary sentiment analysis and natural language processing on movie tweets."; 
    }


    else if(s === "plotly"){

        document.getElementById("project-view").innerHTML="<img src = './pages-media/plot.gif' width = 300px'>";

        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/plotly/dash-sample-apps'>Dash a Web Framework</a>"; 

        document.getElementById("project-desc").innerHTML="While at plotly, I have been responsible for creating numerous web applications that are displayed on the Dash Gallery. Few of which are <br></br> <a href= 'https://dash-gallery.plotly.host/dash-oil-and-gas/'>https://dash-gallery.plotly.host/dash-oil-and-gas/</a> <br></br> <a href= 'https://dash-gallery.plotly.host/dash-oil-gas-ternary/'>https://dash-gallery.plotly.host/dash-oil-gas-ternary/</a><br></br> <a href= 'https://dash-gallery.plotly.host/dash-brain-viewer/'>https://dash-gallery.plotly.host/dash-brain-viewer/</a><br></br> <a href= 'https://dash-gallery.plotly.host/dash-salesforce-crm/'>https://dash-gallery.plotly.host/dash-salesforce-crm/</a> <br></br> Note: All applications are property of Plotly Technologies."; 
    }

    else if(s === "neural"){

        document.getElementById("project-view").innerHTML="<img src = './pages-media/neural.gif' width = 300px style = 'margin-top: 50px'>";

        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/KPhans/PlasticMobile/blob/master/PlasticMobile.py' style='font-size:18pt'>Neural Nets (Unfinished)</a>"; 

        document.getElementById("project-desc").innerHTML="This project uses TFlearn to derive results from image classification via neural networks. 6 convolutional layers are used."; 
    }

    else if(s === "churn"){

        document.getElementById("project-view").innerHTML="<img src = './pages-media/churn.png' width = 300px style = 'margin-top: 50px'>";

        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/Phankd/ROGERS-CUSTOMER-CHURN-ML' style='font-size:18pt'>Once a Churner, Always a Churner</a>"; 

        document.getElementById("project-desc").innerHTML="Lead a project tasked with performing an exploratory analysis followed by Machine Learning in order to predict future churners and prevent them. This project makes use of the open source ML program WEKA, created by the University of Waikato - New Zealand."; 
    }

    else if(s === "cyto"){

        document.getElementById("project-view").innerHTML="<img src = './pages-media/cyto.gif' width = 300px style = 'margin-top: 50px'>";

        document.getElementById("project-desc").innerHTML="Coming soon! A cytoscape application depicting the web like hierarchy of an organization."; 
    }
    
    setTimeout( ( function () { 
        document.getElementById("project-info").style.opacity="1"; 
    } ), 100);
}

function hideProjInfo() {     

    document.getElementById("project-info").style.opacity="0";

    document.getElementById("project-wrap").style.filter="none"; 

    document.getElementById("bg").style.filter="none"; 
    
    setTimeout( ( function () {       

        document.getElementById("project-info").style.display="none"; 
        document.getElementById("project-view").zIndex="-1"; 
        document.getElementById("project-info").style.zIndex="-1"; 
        document.getElementById("project-view").innerHTML="";
    } ), 1000);
    
}
function test(){
    alert("it worked"); 
}