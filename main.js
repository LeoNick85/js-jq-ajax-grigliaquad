// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars

//Genero la griglia di 36 elementi

for (i = 0; i < 36; i++) {
    var templateBox_html = $("#box-template").html();
    $("#container-grid").append(templateBox_html);
}

//In caso di click su un box, genero un numero, cambio di conseguenza il background e sostituisco il contenuto del box con il numero
$("#container-grid .box").click(function(){
    var clicked_box = $(this);
    //Faccio chiamata ajax al generatore di numeri e al suo interno svolgo il resto del procedimento in caso di successo
    $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data) {
        //Salvo il numero casuale restituito dall'api
        var random_number = data.response;
        //Lo inserisco come contenuto del BOX
        clicked_box.text(random_number);
        //cambio il colore dello sfondo, giallo sotto o uguale 5, verde sopra 5
        if (random_number <= 5) {
            clicked_box.addClass("yellow")
        } else {
            clicked_box.addClass("green")
        }
        },
        error : function () {
        alert("Oh, no, clamoroso errore a porta vuota!");
        }
    });
});
