//your JS code here. If required.
let str = prompt() ;

let obj = {}

for(let i = 0; i<str.length; i++){
	if(obj[str[i]]){
		obj[str[i]]++;
	}
	else{
		obj[str[i]] = 1;
	}
}

for(let i=0; i<str.length;i++){
	if(obj[str[i]] === 1){
		alert(str[i]);
		break;
	}
}