
(function () {
    let screen = document.querySelector('.screen');   
    let buttons = document.querySelectorAll('.btn');   
    let clear = document.querySelector('.btn-clear');   
    let del = document.querySelector('.btn-del');   
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
          if (e.target.dataset.hasOwnProperty('num')) {
            let value = e.target.dataset.num;
            screen.value += value;
          }
        });
      });

    equal.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        if (screen.value === '') {
            screen.value = "";
        } else {
            try {
                let calc = eval(screen.value); // Calculate the result
                screen.value = calc; // Display the result
            } catch (error) {
                console.log(typeof (screen.value));
                console.log(screen.value);
                screen.value = "Error"; // Handle any errors in the expression
            }
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = ""; // Clear the screen
    });
    del.addEventListener('click', function (e) {
        let value = screen.value.slice(0, -1);
        screen.value = value; // Clear the screen
    });
})();
