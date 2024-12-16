const natal = new Date(new Date().getFullYear(), 11, 25)

        function atualizarContagem() {
            const agora = new Date()
            const diferenca = natal - agora

            if (diferenca <= 0) {
                document.getElementById('title').innerText = 'Feliz Natal!'
                document.getElementById('divCount').innerText = ''
                return
            }

            const dias = Math.floor/*Arredonda para baixo*/(diferenca / (1000/*milissegundos*/ * 60/*segundo*/ * 60/*minutos*/ * 24/*horas*/));
            document.getElementById('divCount').innerText = `${dias} dias`;
        }

        atualizarContagem()
        setInterval(atualizarContagem, 1000)