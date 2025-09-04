//code for canvas
function myCanvas() {
    var STR = 3
    var INT = 3
    var DEX = 3
    var instinct = 0
    var anthropology = 0
    var wisdom = 0
    var perception = 0
    var listen = 0
    var smell = 0
    var fight = 0

    //get information from input
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth*1.42;
    let CS = document.getElementById("CS")
    let avatar = document.getElementById("avatar")
    var job = document.getElementById("job")
    if(job.value == "傭兵（マーシナリー）"){
        STR = STR+1
        INT = INT-1
        instinct = instinct +1
    }else if(job.value == "機械技師（エンジニア）"){
        STR = STR+1
        DEX = DEX-1
        anthropology = anthropology+1
    }else if(job.value == "学者（スカラー）"){
        INT = INT+1
        STR = STR-1
        wisdom = wisdom +1
    }else if(job.value == "医者（ドクター）"){
        INT = INT+1
        DEX = DEX-1
        perception = perception +1
    }else if(job.value == "盗賊（シーカー）"){
        DEX = DEX+1
        INT = INT-1
        listen = listen+1
    }else if(job.value == "商人（マーチャンター）"){
        DEX = DEX+1
        STR = STR-1
        smell = smell+1
    }
    var name = document.getElementById("name")
    var race = document.getElementById("race")
    var gender = document.getElementById("gender")
    var age = document.getElementById("age")
    var attack = document.getElementById("attack")
    var attack2 = document.getElementById("attack2")
    var typnum = 0
    if(type.value == "carnivore"){
        typnum = 0
        STR = STR+1
    }else if(type.value == "herbivore"){
        typnum = 1
        DEX = DEX+1
    }else if(type.value == "omnivore"){
        typnum = 2
        INT = INT+1
    }
    var anima = 50

    var exskill = document.getElementById("exskill")

    if(exskill.value == "本能"){
        instinct = instinct +1

        if(job.value == "傭兵（マーシナリー）"){
            anima = anima - 30
        } else {
            anima = anima -20
        }
    }else if (exskill.value == "人類学"){
        anthropology = anthropology +1
    
        if(job.value == "機械技師（エンジニア）"){
            anima = anima - 30
        } else {
            anima = anima -20
        }
    }else if (exskill.value == "知恵"){
        wisdom = wisdom +1

        if(job.value == "学者（スカラー）"){
            anima = anima - 30
        } else {
            anima = anima -20
        }
    }else if (exskill.value == "観察"){
        perception = perception +1

        if(job.value == "医者（ドクター）"){
            anima = anima - 30
        } else {
            anima = anima -20
        }
    }else if (exskill.value == "聴覚"){
        listen = listen +1

        if(job.value == "盗賊（シーカー）"){
            anima = anima - 30
        } else {
            anima = anima -20
        }
    }else if (exskill.value == "嗅覚"){
        smell = smell +1

        if(job.value == "商人（マーチャンター）"){
            anima = anima - 30
        } else {
            anima = anima -20
        }
    }else if (exskill.value == "戦闘技能"){
        fight = fight +1
        anima = anima -30
    }

//printing the informetion from getelementbyid
    var colour = document.getElementById("colour")
    ctx.drawImage(CS,0,0,canvas.width,canvas.width*1.42);
    ctx.font = canvas.width*0.03+"px Arial";
    ctx.fillText(name.value, canvas.width*0.62, canvas.width*0.155);
    ctx.fillText(race.value, canvas.width*0.62, canvas.width*0.235);
    ctx.fillText(job.value, canvas.width*0.62, canvas.width*0.3);
    ctx.fillText(gender.value, canvas.width*0.62, canvas.width*0.36);
    ctx.fillText(age.value, canvas.width*0.85, canvas.width*0.36);
    ctx.fillText(attack.value, canvas.width*0.6, canvas.width*1.038);
    ctx.fillText(attack2.value, canvas.width*0.6, canvas.width*1.085);
    

    // make a circle that symbolizes the animal classification
    ctx.beginPath();
    ctx.ellipse(canvas.width*0.92, (canvas.width*0.19)+(canvas.width*typnum*0.02), (canvas.width*0.012), (canvas.width*0.025), Math.PI / 2, 0, 2 * Math.PI);
    ctx.lineWidth = canvas.width*0.002;
    ctx.strokeStyle = colour.value;
    ctx.stroke();

    //positions in a list
    const statusSTRX = 0.755
    const statusSTRY = [0.54,0.505,0.47,0.437];
    const statusINTX = [0.813,0.843,0.873,0.9];
    const statusINTY = [0.64,0.657,0.674,0.69];
    const statusDEXX = [0.698,0.668,0.64,0.612];
    const statusDEXY = [0.64,0.657,0.674,0.69];


    // make character status parameters
    ctx.beginPath();
    //starting STR position
    ctx.moveTo(canvas.width*statusSTRX,canvas.width*statusSTRY[STR-2]);
    //line to INT
    ctx.lineTo(canvas.width*statusINTX[INT-2],canvas.width*statusINTY[INT-2]);
    //line to DEX
    ctx.lineTo(canvas.width*statusDEXX[DEX-2],canvas.width*statusDEXY[DEX-2]);
    //close the line
    ctx.lineTo(canvas.width*(statusSTRX+0.0005),canvas.width*statusSTRY[STR-2]);
    ctx.strokeStyle = colour.value;
    ctx.stroke();

    // fill character status parameters 
    ctx.beginPath();
    //starting STR position
    ctx.moveTo(canvas.width*statusSTRX,canvas.width*statusSTRY[STR-2]);
    //line to INT
    ctx.lineTo(canvas.width*statusINTX[INT-2],canvas.width*statusINTY[INT-2]);
    //line to DEX
    ctx.lineTo(canvas.width*statusDEXX[DEX-2],canvas.width*statusDEXY[DEX-2]);
    //close the line
    ctx.lineTo(canvas.width*(statusSTRX+0.0005),canvas.width*statusSTRY[STR-2]);
    ctx.globalAlpha = 0.5
    ctx.fillStyle = colour.value;
    ctx.fill();

    // make a rectangle that symbolizes remaining anima
    ctx.fillStyle = colour.value;
    ctx.fillRect(canvas.width*0.2,canvas.width*0.83, canvas.width*0.0073*anima,canvas.width*0.04);

    // make skill parameters
    ctx.globalAlpha = 1
    ctx.strokeRect(canvas.width*0.15,canvas.width*1.008, canvas.width*0.046*(instinct+1),canvas.width*0.045);
    ctx.strokeRect(canvas.width*0.15,canvas.width*1.052, canvas.width*0.046*(anthropology +1),canvas.width*0.045);
    ctx.strokeRect(canvas.width*0.15,canvas.width*1.096, canvas.width*0.046*(wisdom +1),canvas.width*0.045);
    ctx.strokeRect(canvas.width*0.15,canvas.width*1.140, canvas.width*0.046*(perception +1),canvas.width*0.045);
    ctx.strokeRect(canvas.width*0.15,canvas.width*1.184, canvas.width*0.046*(listen +1),canvas.width*0.045);
    ctx.strokeRect(canvas.width*0.15,canvas.width*1.228, canvas.width*0.046*(smell +1),canvas.width*0.045);
    ctx.strokeRect(canvas.width*0.51,canvas.width*1.008, canvas.width*0.073,canvas.width*0.045*(fight+1));


    //fill skill parameters
    ctx.globalAlpha = 0.5
    ctx.fillRect(canvas.width*0.15,canvas.width*1.008, canvas.width*0.046*(instinct+1),canvas.width*0.047);
    ctx.fillRect(canvas.width*0.15,canvas.width*1.052, canvas.width*0.046*(anthropology +1),canvas.width*0.045);
    ctx.fillRect(canvas.width*0.15,canvas.width*1.096, canvas.width*0.046*(wisdom +1),canvas.width*0.045);
    ctx.fillRect(canvas.width*0.15,canvas.width*1.140, canvas.width*0.046*(perception +1),canvas.width*0.045);
    ctx.fillRect(canvas.width*0.15,canvas.width*1.184, canvas.width*0.046*(listen +1),canvas.width*0.045);
    ctx.fillRect(canvas.width*0.15,canvas.width*1.228, canvas.width*0.046*(smell +1),canvas.width*0.045);
    ctx.fillRect(canvas.width*0.51,canvas.width*1.008, canvas.width*0.073,canvas.width*0.045*(fight+1));



    //create commands to copy for the game (some jobs gets exclusive commands)
    var chatpalet = STR +"AM<=1,1 【STR能力判定(1成功)】" +"<br />" + INT +"AM<=1,1 【INT能力判定(1成功)】"
    +"<br />" + DEX +"AM<=1,1 【DEX能力判定(1成功)】" +"<br />" +"3AM<=" + (instinct+1)+",1 【本能判定(1成功)】" + "<br />" +"3AM<=" + (anthropology+1)+",1 【人類学判定(1成功)】" 
    +"<br />" +"3AM<=" + (wisdom+1)+",1 【知恵判定(1成功)】" +"<br />" +"3AM<=" + (perception+1)+",1 【観察判定(1成功)】"+"<br />" +"3AM<=" + (listen+1)+",1 【聴覚判定(1成功)】"
    +"<br />" +"3AM<=" + (smell+1)+",1 【嗅覚判定(1成功)】" + "<br />" + "AA<=" + (fight+1) + " 【戦闘技能: " + attack.value +"】" + "<br />" + "AG=t 【防御判定】" + "<br />" + "AD=t 【回避判定】";

    // print the completed command palette
    document.getElementById("chat").innerHTML = chatpalet
// testing if the upload works...
}
