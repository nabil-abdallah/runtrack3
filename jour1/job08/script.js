function sommenombrespremiers(nb1,nb2) 
{
	
	if (nb1 >= 2 && nb2 >= 2) 
	{
		for (var i = 2; i < nb1 ; i++) 
		{
			if (nb1%i == 0) 
			{
				return false;
			}
		}

		for (var i = 2; i < nb2; i++) 
		{
			if (nb2 % i == 0) 
			{
				return false;
			}
		}
	}
	else
	{
		return false;
	}

	return nb1 + nb2 ;
}
console.log(sommenombrespremiers(4,5));