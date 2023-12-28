document.addEventListener("DOMContentLoaded", function() {
    // Number of snowflakes
    var numberOfSnowflakes = 50;

    // Create snowflakes and append them to the container
    for (var i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        var snowflake = document.createElement("div");
        snowflake.className = "snowflake";

        // Set random position
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = (Math.random() * 2 + 1) + "s";

        // Append snowflake to the container
        document.getElementById("snowfall-container").appendChild(snowflake);

        // Remove snowflake after animation completes
        snowflake.addEventListener("animationiteration", function() {
            this.style.top = "-10px";
            this.style.left = Math.random() * window.innerWidth + "px";
        });
    }
});
