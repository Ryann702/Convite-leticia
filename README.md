# Convite-leticia

## Como rodar localmente

1. Clone o repositório:
	```bash
	git clone https://github.com/Ryann702/Convite-leticia.git
	```
2. Entre na pasta do projeto:
	```bash
	cd Convite-leticia
	```
3. Inicie um servidor local (exemplo com Python):
	```bash
	python3 -m http.server 8080
	```
4. Acesse no navegador: [http://localhost:8080](http://localhost:8080)

## Deploy no GitHub Pages

1. Faça push para o branch principal (`main`).
2. No repositório do GitHub, vá em Settings > Pages e selecione a branch `main` e a pasta `/ (root)`.
3. O site ficará disponível em:
	`https://Ryann702.github.io/Convite-leticia/`

### Importante sobre o CSS
- O caminho do CSS deve ser `./style.css` no HTML para funcionar em subdiretórios do GitHub Pages.
- Se o CSS não carregar, limpe o cache do navegador e confira se o arquivo está na raiz do projeto.

---
Projeto de convite digital para o aniversário de Letícia Marques.