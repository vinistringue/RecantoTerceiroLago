// Função para realizar a reserva
function realizarReserva() {
    // Obter dados do formulário
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;
    var reservationStartDate = document.getElementById("reservationStartDate").value;
    var reservationEndDate = document.getElementById("reservationEndDate").value;
  
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!firstName || !lastName || !rg || !cpf || !reservationStartDate || !reservationEndDate) {
      alert("Por favor, preencha todos os campos obrigatórios antes de realizar a reserva.");
      return;
    }
  
    // Validar se a data de entrada é anterior à data de saída
    if (new Date(reservationStartDate) >= new Date(reservationEndDate)) {
      alert("A data de entrada deve ser anterior à data de saída.");
      return;
    }
  
    // Confirmar reserva
    var pagamentoRealizado = confirm("Realizar pagamento agora?");
  
    // Se o pagamento for realizado, marcar a data como indisponível
    if (pagamentoRealizado) {
      alert("Pagamento realizado com sucesso. Data reservada!");
      // Lógica para marcar a data como indisponível (pode ser enviada para um servidor, salva em um banco de dados, etc.)
    } else {
      alert("Reserva cancelada. O pagamento não foi realizado.");
    }
  }
  