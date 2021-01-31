"use strict";

/*
<div class="userCard">
        <div class="userPhoto">
            <img src="https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg" alt="user photo">
        </div>
        <div class="userStat">
            <div class="userStatValue">
                <p>183</p>
                <p>92778</p>
                <p>30</p>
            </div>
            <div class="userStatName">
                <p>shots</p>
                <p>followers</p>
                <p>projects</p>
            </div>

        </div>
        <div class="userButton">
            <p>Follow</p>
        </div>

    </div>
    */

    const divUserCardElem = document.createElement("div");
    divUserCardElem.classList.add("userCard");

    const divUserPhotoElem = document.createElement("div");
    divUserPhotoElem.classList.add("userPhoto");

    const imgElem = document.createElement("img");
    imgElem.src="https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg";
    imgElem.alt = "user photo";

    divUserPhotoElem.append(imgElem);
    divUserCardElem.append(divUserPhotoElem);

    const divUserStatElem = document.createElement("div");
    divUserStatElem.classList.add("userStat");

    const divUserStatValueElem = document.createElement("div");
    divUserStatValueElem.classList.add("userStatValue");

    let p = document.createElement("p");
    p.innerHTML="183";
    divUserStatValueElem.append(p);

    p = document.createElement("p");
    p.innerHTML="92778";
    divUserStatValueElem.append(p);

    p = document.createElement("p");
    p.innerHTML="30";

    divUserStatValueElem.append(p);

    divUserStatElem.append(divUserStatValueElem);
    
    const divUserStatNameElem = document.createElement("div");
    divUserStatNameElem.classList.add("userStatName");

    p = document.createElement("p");
    p.innerHTML="shots";
    divUserStatNameElem.append(p);

    p = document.createElement("p");
    p.innerHTML="followers";
    divUserStatNameElem.append(p);

    p = document.createElement("p");
    p.innerHTML="followers";
    divUserStatNameElem.append(p);

    divUserStatElem.append(divUserStatNameElem);

    divUserCardElem.append(divUserStatElem);

    const divUserButtonElem = document.createElement("div");
    divUserButtonElem.classList.add("userButton");
    p = document.createElement("p");
    p.innerHTML="Follow";
    divUserButtonElem.append(p);
    divUserCardElem.append(divUserButtonElem);

    document.body.append(divUserCardElem);


    
    

    

    
    

    

    
    
    
    


    
   
    


    

    

    
    
    
   

    

