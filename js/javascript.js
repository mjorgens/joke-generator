$(document).ready(function () {
    // drop down trigger
    $('#numJokes').change(function () {
        // selected value
        var num = $(this).children('option:selected').val();
        // clear if already has joke sections
        $('#jokes').empty();
        // create the sections
        for (var i = 0; i < num; i++) {
            $('#jokes').append(`<div class="col card">
                <div class="card-body">
                    <div class="card-text text-center">
                        <p id="joke${i}"></p>
                        <button id="${i}" class="btn btn-primary">Generate Joke</button>
                    </div>
                </div>
            </div>`);
        }
    });

    // button click trigger
    $(document).on('click', ':button', function(e){
        // ajax call to api
        $.ajax({
            type: 'GET',
            url: 'https://icanhazdadjoke.com/',
            dataType: 'json',
            cache: 'false',
            success: function (data) {
                // update the text with the returned joke
                $('#joke' + e.target.id).text(data.joke);
            },
            error: function (response) {
                // popup if error
                alert('Unable to get joke');
            }
        });
    });
});
