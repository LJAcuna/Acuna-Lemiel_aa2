var c = 2

for (let z = 1; z < 4109; z){
		if(z < 4108){
			document.write(z + ", ");
		}else{
			document.write(z);
		}
		z = z + c;
		c = c*2-1;
}