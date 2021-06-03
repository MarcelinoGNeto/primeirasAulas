programa
{
	
	funcao inicio()
	{
		escreva("Escolha uma das opções: 1-Netflix 2-Amazon 3-HBOGo 4-Sair")
		inteiro menu = 0
		escreva ("/n" + "Sua escolha: ")
		leia (menu)
		
		escolha (menu)
		{
			caso 1:
			escreva ("OK! Abrir Netflix!!!")
			pare
			
			caso 2:
			escreva ("OK! Abrir Amazon Prime!!!")
			pare

			caso 3:
			escreva ("OK! Abrir HBO Go!!!")
			pare

			caso 4:
			escreva ("OK! Sair!!!")
			pare

			caso contrario:
			escreva ("Você deve escolher as opções 1, 2, 3 ou 4")
			
		}
		
	}
		
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 179; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */