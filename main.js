$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaAdicionada = $('#tarefa-nova').val();
        console.log(tarefaAdicionada);
        const novoItem = $('<li></li>');

        $(`<p> ${tarefaAdicionada} </p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa-nova').val('');

    })
})