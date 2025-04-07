function animateCountWithPlus(targetId, targetValue, duration, addPlus) {
    const element = document.getElementById(targetId);
    const increment = Math.ceil(targetValue / (duration * 1000 / 20));

    let currentValue = 0;

    function updateValue() {
        if (currentValue >= targetValue) {
            element.textContent = addPlus ? `${targetValue}+` : targetValue;
        } else {
            currentValue = Math.min(currentValue + increment, targetValue);
            element.textContent = currentValue;
            requestAnimationFrame(updateValue);
        }
    }

    updateValue();
}

animateCountWithPlus('count1', 1000, 2, true);
animateCountWithPlus('count2', 13, 2, false);
animateCountWithPlus('count3', 200, 2, true);
animateCountWithPlus('count4', 22, 2, false);