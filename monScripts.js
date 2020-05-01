/*var test = "bonjour";
alert(test);*/

var myWindow;
var message="";
function menu(){
	myWindow = window.open("menu.html","_top");

}
var myWin;
var choix = document.getElementsByTagId("choix").value
var soldeCompte= 1000;
function afficherSolde(){
	var soldeCompte = 1000;
	if (choix=null){message+='taper le numéro de service'};
	myWin = window.open("afficherSolde.html", "_top");
	myWin.document.adoptNode(`<p>le solde est de :${soldeCompte}fcfa. Voulez-vous retourner au menu ? <p>`);
	
	var btn = document.querySelector("input");
	
}
var senWin;
function senMoney(){
	senWin = window.open("senmoney.html","_top");
}
var tabNum = newArray ["87 432 55 27", "87 564 98 12", "87 957 65 35","87 764 98 44","87 235 17 52"];
var tabCode = newArray["ab27", "cg12", "ht35","kr44","dj52"];