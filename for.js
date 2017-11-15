const printDiamond = function(ch,n)
{
const printOneRow = function(ch,n)
{   let i = 0; let str = "";
	for (i;i<n; i=i+1)
	{
		str = str + ch;
	}
return str;
};
   if ((n%2) === 1)
	{
	let a = ~~(n/2);
	let b = 1;
	let i = 0;
	for (i; i<(~~(n/2)+1); i=i+1)
		{
			console.log(printOneRow(" ",a) + printOneRow(ch,b));
		a = a - 1;
	    b = b + 2;
	    };
	 a = 1;
	 b = n-2;
	 i = 0;
	 for (i; i<(~~(n/2)); i=i+1)
		{
		console.log(printOneRow(" ",a) + printOneRow(ch,b));
		a = a + 1;
	    b = b - 2;
	    };
	}    
	else
	{
	let a = ~~(n/2);
	let b = 1;
	let i = 0;
	for (i; i<(~~(n/2)); i=i+1)
		{
		console.log(printOneRow(" ",a) + printOneRow(ch,b));
		a = a - 1;
	    b = b + 2;
	    };
	 a = 1;
	 b = n-1;
	 i = 0;
	 for (i; i<(~~(n/2)); i=i+1)
		{
			console.log(printOneRow(" ",a) + printOneRow(ch,b));
		a = a + 1;
	    b = b - 2;
	    };
	};	
};
printDiamond('@',16);