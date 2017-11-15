const sl = function(ch, n)
	{ if (n === 0)
    return "";

	return ch + sl(ch, n-1); }

const help1 = function(n,a,b,ch)
{if (b > n)
	return"";
	console.log(sl(' ',a)+sl(ch,b));
	help1(n,a-1,b+2,ch);
};
const help2 = function(n,a,b,ch)
{if (b < 1)
	return"";
	console.log(sl(' ',a)+sl(ch,b));
	help2(n,a+1,b-2,ch);
};
const f = function(ch,n)
{ if ((n%2)===1)
	{help1(n, ~~(n/2), 1, ch);
	help2(n, 1, n-2, ch);}
	else 
		{help1(n, ~~(n/2), 1, ch);
	     help2(n, 1, n-1, ch);};
	
};
f('*',16);