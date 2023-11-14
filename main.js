hoja = document.getElementById("hoja");
lapiz = hoja.getContext("2d");

lapiz.strokeStyle ="#008FF6";
lapiz.lineWidth = 8;
lapiz.beginPath();
lapiz.arc(150,150,55,0,2*Math.PI);
lapiz.stroke();

lapiz.strokeStyle ="#FCDD1B";
lapiz.lineWidth = 8;
lapiz.beginPath();
lapiz.arc(215,205,55,0,2*Math.PI);
lapiz.stroke();

lapiz.strokeStyle ="#020000";
lapiz.lineWidth = 8;
lapiz.beginPath();
lapiz.arc(278,151,55,0,2*Math.PI);
lapiz.stroke();

lapiz.strokeStyle ="#056B1E";
lapiz.lineWidth = 8;
lapiz.beginPath();
lapiz.arc(345,205,55,0,2*Math.PI);
lapiz.stroke();

lapiz.strokeStyle ="#FF2441";
lapiz.lineWidth = 8;
lapiz.beginPath();
lapiz.arc(405,150,55,0,2*Math.PI);
lapiz.stroke();