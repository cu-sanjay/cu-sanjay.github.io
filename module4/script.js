var names=new Array();
names[0]="Sanjay";
names[1]="Jay Choudhary";
names[2]="John Cena";
names[3]="Virat Kohli";
names[4]="MS Dhoni";
names[5]="Johnny Deep";
names[6]="Sonam Rao";
names[7]="Jaydev";
names[8]="Jimmy";
names[9]="Jonny Bairstow";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Hello, Good Morning "+ names[i])
	}
	else{
		console.log("Bye, Good Night "+ names[i])
	}
}